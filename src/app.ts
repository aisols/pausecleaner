import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin, { Region } from 'wavesurfer.js/dist/plugins/regions.esm.js'
import { WaveSurferOptions } from 'wavesurfer.js/dist/types.js'

function audioBufferToBlob(audioBuffer: AudioBuffer): Blob {
    const numberOfChannels = audioBuffer.numberOfChannels;
    const sampleRate = audioBuffer.sampleRate;
    const length = audioBuffer.length;
    const interleaved = new Float32Array(length * numberOfChannels);
    for (let channel = 0; channel < numberOfChannels; channel++) {
        const channelData = audioBuffer.getChannelData(channel);
        for (let i = 0; i < length; i++) {
            interleaved[i * numberOfChannels + channel] = channelData[i];
        }
    }
    const dataView = encodeWAV(interleaved, numberOfChannels, sampleRate);
    const blob = new Blob([dataView], { type: 'audio/wav' });
    return blob;
}

function encodeWAV(samples: Float32Array, channels: number, sampleRate: number): DataView {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + samples.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, channels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * channels * 2, true);
    view.setUint16(32, channels * 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, samples.length * 2, true);
    floatTo16BitPCM(view, 44, samples);
    return view;
}

function floatTo16BitPCM(output: DataView, offset: number, input: Float32Array) {
    for (let i = 0; i < input.length; i++, offset += 2) {
        const s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
}

function writeString(view: DataView, offset: number, val: string) {
    for (let i = 0; i < val.length; i++) {
        view.setUint8(offset + i, val.charCodeAt(i));
    }
}

function extractRegions(audioData: Float32Array, duration: number): { start: number; end: number; }[] {
    const minValue = 0.01
    const minSilenceDuration = 0.15
    const mergeDuration = 0.2
    const scale = duration / audioData.length
    const silentRegions = []

    // Find all silent regions longer than minSilenceDuration
    let start = 0
    let end = 0
    let isSilent = false
    for (var i = 0; i < audioData.length; i++) {
        if (audioData[i] < minValue) {
            if (!isSilent) {
                start = i
                isSilent = true
            }
        } else if (isSilent) {
            end = i
            isSilent = false
            if (scale * (end - start) > minSilenceDuration) {
                silentRegions.push({
                    start: scale * start,
                    end: scale * end,
                })
            }
        }

        if (i === audioData.length - 1 && start > end) {
            silentRegions.push({
                start: scale * start,
                end: scale * i,
            })
        }
    }
    console.log('data len: %d, %d', audioData.length, i)
    console.log('-- start: %d, end: %d', start, end)

    // Merge silent regions that are close together
    const mergedRegions = []
    let lastRegion = null
    for (let i = 0; i < silentRegions.length; i++) {
        if (lastRegion && silentRegions[i].start - lastRegion.end < mergeDuration) {
            lastRegion.end = silentRegions[i].end
        } else {
            lastRegion = silentRegions[i]
            mergedRegions.push(lastRegion)
        }
    }

    // Find regions that are not silent
    const regions = []
    let lastEnd = 0
    for (let i = 0; i < mergedRegions.length; i++) {
        console.log('start: %d, end: %d', lastEnd, mergedRegions[i].start)

        regions.push({
            start: lastEnd,
            end: mergedRegions[i].start,
        })
        lastEnd = mergedRegions[i].end
    }

    return regions
}

function prepareCleanedWaveSurfer(pDecodeData: AudioBuffer, pRegions: { start: number; end: number; }[]) {
    if (!pDecodeData)
        return

    console.log("duration " + pDecodeData.duration)
    console.log("sampel rates " + pDecodeData.sampleRate)
    console.log("length " + pDecodeData.length)

    const ws = WaveSurfer.create({
        container: '#cleanedform',
        normalize: false,
        waveColor: "#ff4e00",
        progressColor: "#dd5e98",
        cursorColor: "#ddd5e9",
        cursorWidth: 2,
        minPxPerSec: 1,
        fillParent: true,
        mediaControls: true,
        autoplay: false,
        interact: true,
        dragToSeek: false,
        hideScrollbar: false,
        audioRate: 1,
        autoScroll: true,
        autoCenter: true,
    })

    const length = pRegions.reduce((acc, r) => acc + (r.end - r.start), 0)
    // let length = 0
    // for (let i = 0; i < pRegions.length; ++i) {
    //     length += pRegions[i].end - pRegions[i].start
    // }
    const frames = Math.ceil(length * pDecodeData.sampleRate)
    const audioContext = new AudioContext()

    const buffer = audioContext.createBuffer(pDecodeData.numberOfChannels, frames, pDecodeData.sampleRate)
    const scale = pDecodeData.length / pDecodeData.duration

    for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
        const sourceBuffer = pDecodeData.getChannelData(channel)
        const nowBuffering = buffer.getChannelData(channel)
        let offset = 0
        for (let i = 0; i < pRegions.length; ++i) {
            const start = Math.floor(pRegions[i].start * scale)
            const end = Math.floor(pRegions[i].end * scale)
            const sub = sourceBuffer.subarray(start, end)
            nowBuffering.set(sub, offset)
            offset += end - start;
        }
    }

    const blob = audioBufferToBlob(buffer)

    ws.loadBlob(blob)
}

function prepareWaveSurfer(pAudioUrl: string, pBuffer: ArrayBuffer) {
    const ws = WaveSurfer.create({
        container: '#waveform',
        normalize: false,
        waveColor: "#ff4e00",
        progressColor: "#dd5e98",
        cursorColor: "#ddd5e9",
        cursorWidth: 2,
        minPxPerSec: 1,
        fillParent: true,
        mediaControls: true,
        autoplay: false,
        interact: true,
        dragToSeek: false,
        hideScrollbar: false,
        audioRate: 1,
        autoScroll: true,
        autoCenter: true,
        url: pAudioUrl,
    })

    // Initialize the Regions plugin
    const wsRegions = ws.registerPlugin(RegionsPlugin.create())

    // Create regions for each non-silent part of the audio
    ws.on('decode', async (duration) => {
        const decodedData = ws.getDecodedData()
        if (!decodedData)
            return
        const regions = extractRegions(decodedData.getChannelData(0), duration)

        // Add regions to the waveform
        regions.forEach((region, index) => {
            const wsRegion = wsRegions.addRegion({
                start: region.start,
                end: region.end,
                content: (index + 1).toString(),
                drag: false,
                resize: false,
                color: "#ddd5e980",
            })
        })

        const context = new AudioContext()
        const decodedAudio = await context.decodeAudioData(pBuffer)

        prepareCleanedWaveSurfer(decodedAudio, regions)
    })

    // Play a region on click
    let activeRegion: Region | null = null
    wsRegions.on('region-clicked', (region, e) => {
        e.stopPropagation()
        region.play()
        activeRegion = region
    })

    ws.on('timeupdate', (currentTime) => {
        // When the end of the region is reached
        if (activeRegion && currentTime >= activeRegion.end) {
            // Stop playing
            ws.pause()
            activeRegion = null
        }
    })
}

function domContentLoader() {
    const audioFileInput = document.getElementById("audioFile") as HTMLInputElement
    const cleanButton = document.getElementById("cleanButton") as HTMLButtonElement
    const audioSource = document.getElementById("audioSource") as HTMLSourceElement

    audioFileInput.addEventListener("change", async (event) => {
        const file = audioFileInput.files?.[0]
        if (!file)
            return

        const reader = new FileReader()
        reader.onload = () => {
            const buffer = reader.result as ArrayBuffer
            const blob = new Blob([buffer], { type: file.type })
            const audioUrl = URL.createObjectURL(blob)

            prepareWaveSurfer(audioUrl, buffer)
        }
        reader.readAsArrayBuffer(file)
    })
}

document.addEventListener("DOMContentLoaded", domContentLoader)