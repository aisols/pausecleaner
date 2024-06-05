/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/wavesurfer.js/dist/plugins/regions.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/wavesurfer.js/dist/plugins/regions.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
class t{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),null==i?void 0:i.once){const i=()=>{this.un(t,i),this.un(t,e)};return this.on(t,i),i}return()=>this.un(t,e)}un(t,e){var i;null===(i=this.listeners[t])||void 0===i||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((t=>t(...e)))}}class e extends t{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((t=>t()))}}function i(t,e,i,n,s=3,o=0,r=100){if(!t)return()=>{};const a=matchMedia("(pointer: coarse)").matches;let l=()=>{};const h=h=>{if(h.button!==o)return;h.preventDefault(),h.stopPropagation();let d=h.clientX,c=h.clientY,u=!1;const g=Date.now(),p=n=>{if(n.preventDefault(),n.stopPropagation(),a&&Date.now()-g<r)return;const o=n.clientX,l=n.clientY,h=o-d,p=l-c;if(u||Math.abs(h)>s||Math.abs(p)>s){const n=t.getBoundingClientRect(),{left:s,top:r}=n;u||(null==i||i(d-s,c-r),u=!0),e(h,p,o-s,l-r),d=o,c=l}},v=e=>{if(u){const i=e.clientX,s=e.clientY,o=t.getBoundingClientRect(),{left:r,top:a}=o;null==n||n(i-r,s-a)}l()},m=t=>{t.relatedTarget&&t.relatedTarget!==document.documentElement||v(t)},f=t=>{u&&(t.stopPropagation(),t.preventDefault())},b=t=>{u&&t.preventDefault()};document.addEventListener("pointermove",p),document.addEventListener("pointerup",v),document.addEventListener("pointerout",m),document.addEventListener("pointercancel",m),document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("click",f,{capture:!0}),l=()=>{document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",v),document.removeEventListener("pointerout",m),document.removeEventListener("pointercancel",m),document.removeEventListener("touchmove",b),setTimeout((()=>{document.removeEventListener("click",f,{capture:!0})}),10)}};return t.addEventListener("pointerdown",h),()=>{l(),t.removeEventListener("pointerdown",h)}}function n(t,e){const i=e.xmlns?document.createElementNS(e.xmlns,t):document.createElement(t);for(const[t,s]of Object.entries(e))if("children"===t)for(const[t,s]of Object.entries(e))"string"==typeof s?i.appendChild(document.createTextNode(s)):i.appendChild(n(t,s));else"style"===t?Object.assign(i.style,s):"textContent"===t?i.textContent=s:i.setAttribute(t,s.toString());return i}function s(t,e,i){const s=n(t,e||{});return null==i||i.appendChild(s),s}class o extends t{constructor(t,e,i=0){var n,s,o,r,a,l,h,d;super(),this.totalDuration=e,this.numberOfChannels=i,this.minLength=0,this.maxLength=1/0,this.contentEditable=!1,this.subscriptions=[],this.subscriptions=[],this.id=t.id||`region-${Math.random().toString(32).slice(2)}`,this.start=this.clampPosition(t.start),this.end=this.clampPosition(null!==(n=t.end)&&void 0!==n?n:t.start),this.drag=null===(s=t.drag)||void 0===s||s,this.resize=null===(o=t.resize)||void 0===o||o,this.color=null!==(r=t.color)&&void 0!==r?r:"rgba(0, 0, 0, 0.1)",this.minLength=null!==(a=t.minLength)&&void 0!==a?a:this.minLength,this.maxLength=null!==(l=t.maxLength)&&void 0!==l?l:this.maxLength,this.channelIdx=null!==(h=t.channelIdx)&&void 0!==h?h:-1,this.contentEditable=null!==(d=t.contentEditable)&&void 0!==d?d:this.contentEditable,this.element=this.initElement(),this.setContent(t.content),this.setPart(),this.renderPosition(),this.initMouseEvents()}clampPosition(t){return Math.max(0,Math.min(this.totalDuration,t))}setPart(){const t=this.start===this.end;this.element.setAttribute("part",`${t?"marker":"region"} ${this.id}`)}addResizeHandles(t){const e={position:"absolute",zIndex:"2",width:"6px",height:"100%",top:"0",cursor:"ew-resize",wordBreak:"keep-all"},n=s("div",{part:"region-handle region-handle-left",style:Object.assign(Object.assign({},e),{left:"0",borderLeft:"2px solid rgba(0, 0, 0, 0.5)",borderRadius:"2px 0 0 2px"})},t),o=s("div",{part:"region-handle region-handle-right",style:Object.assign(Object.assign({},e),{right:"0",borderRight:"2px solid rgba(0, 0, 0, 0.5)",borderRadius:"0 2px 2px 0"})},t);this.subscriptions.push(i(n,(t=>this.onResize(t,"start")),(()=>null),(()=>this.onEndResizing()),1),i(o,(t=>this.onResize(t,"end")),(()=>null),(()=>this.onEndResizing()),1))}removeResizeHandles(t){const e=t.querySelector('[part*="region-handle-left"]'),i=t.querySelector('[part*="region-handle-right"]');e&&t.removeChild(e),i&&t.removeChild(i)}initElement(){const t=this.start===this.end;let e=0,i=100;this.channelIdx>=0&&this.channelIdx<this.numberOfChannels&&(i=100/this.numberOfChannels,e=i*this.channelIdx);const n=s("div",{style:{position:"absolute",top:`${e}%`,height:`${i}%`,backgroundColor:t?"none":this.color,borderLeft:t?"2px solid "+this.color:"none",borderRadius:"2px",boxSizing:"border-box",transition:"background-color 0.2s ease",cursor:this.drag?"grab":"default",pointerEvents:"all"}});return!t&&this.resize&&this.addResizeHandles(n),n}renderPosition(){const t=this.start/this.totalDuration,e=(this.totalDuration-this.end)/this.totalDuration;this.element.style.left=100*t+"%",this.element.style.right=100*e+"%"}toggleCursor(t){var e;this.drag&&(null===(e=this.element)||void 0===e?void 0:e.style)&&(this.element.style.cursor=t?"grabbing":"grab")}initMouseEvents(){const{element:t}=this;t&&(t.addEventListener("click",(t=>this.emit("click",t))),t.addEventListener("mouseenter",(t=>this.emit("over",t))),t.addEventListener("mouseleave",(t=>this.emit("leave",t))),t.addEventListener("dblclick",(t=>this.emit("dblclick",t))),t.addEventListener("pointerdown",(()=>this.toggleCursor(!0))),t.addEventListener("pointerup",(()=>this.toggleCursor(!1))),this.subscriptions.push(i(t,(t=>this.onMove(t)),(()=>this.toggleCursor(!0)),(()=>{this.toggleCursor(!1),this.drag&&this.emit("update-end")}))),this.contentEditable&&this.content&&(this.content.addEventListener("click",(t=>this.onContentClick(t))),this.content.addEventListener("blur",(()=>this.onContentBlur()))))}_onUpdate(t,e){if(!this.element.parentElement)return;const{width:i}=this.element.parentElement.getBoundingClientRect(),n=t/i*this.totalDuration,s=e&&"start"!==e?this.start:this.start+n,o=e&&"end"!==e?this.end:this.end+n,r=o-s;s>=0&&o<=this.totalDuration&&s<=o&&r>=this.minLength&&r<=this.maxLength&&(this.start=s,this.end=o,this.renderPosition(),this.emit("update",e))}onMove(t){this.drag&&this._onUpdate(t)}onResize(t,e){this.resize&&this._onUpdate(t,e)}onEndResizing(){this.resize&&this.emit("update-end")}onContentClick(t){t.stopPropagation();t.target.focus(),this.emit("click",t)}onContentBlur(){this.emit("update-end")}_setTotalDuration(t){this.totalDuration=t,this.renderPosition()}play(){this.emit("play")}setContent(t){var e;if(null===(e=this.content)||void 0===e||e.remove(),t){if("string"==typeof t){const e=this.start===this.end;this.content=s("div",{style:{padding:`0.2em ${e?.2:.4}em`,display:"inline-block"},textContent:t})}else this.content=t;this.contentEditable&&(this.content.contentEditable="true"),this.content.setAttribute("part","region-content"),this.element.appendChild(this.content)}else this.content=void 0}setOptions(t){var e,i;if(t.color&&(this.color=t.color,this.element.style.backgroundColor=this.color),void 0!==t.drag&&(this.drag=t.drag,this.element.style.cursor=this.drag?"grab":"default"),void 0!==t.start||void 0!==t.end){const n=this.start===this.end;this.start=this.clampPosition(null!==(e=t.start)&&void 0!==e?e:this.start),this.end=this.clampPosition(null!==(i=t.end)&&void 0!==i?i:n?this.start:this.end),this.renderPosition(),this.setPart()}if(t.content&&this.setContent(t.content),t.id&&(this.id=t.id,this.setPart()),void 0!==t.resize&&t.resize!==this.resize){const e=this.start===this.end;this.resize=t.resize,this.resize&&!e?this.addResizeHandles(this.element):this.removeResizeHandles(this.element)}}remove(){this.emit("remove"),this.subscriptions.forEach((t=>t())),this.element.remove(),this.element=null}}class r extends e{constructor(t){super(t),this.regions=[],this.regionsContainer=this.initRegionsContainer()}static create(t){return new r(t)}onInit(){if(!this.wavesurfer)throw Error("WaveSurfer is not initialized");this.wavesurfer.getWrapper().appendChild(this.regionsContainer);let t=[];this.subscriptions.push(this.wavesurfer.on("timeupdate",(e=>{const i=this.regions.filter((t=>t.start<=e&&(t.end===t.start?t.start+.05:t.end)>=e));i.forEach((e=>{t.includes(e)||this.emit("region-in",e)})),t.forEach((t=>{i.includes(t)||this.emit("region-out",t)})),t=i})))}initRegionsContainer(){return s("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"3",pointerEvents:"none"}})}getRegions(){return this.regions}avoidOverlapping(t){t.content&&setTimeout((()=>{const e=t.content,i=e.getBoundingClientRect(),n=this.regions.map((e=>{if(e===t||!e.content)return 0;const n=e.content.getBoundingClientRect();return i.left<n.left+n.width&&n.left<i.left+i.width?n.height:0})).reduce(((t,e)=>t+e),0);e.style.marginTop=`${n}px`}),10)}adjustScroll(t){var e,i;const n=null===(i=null===(e=this.wavesurfer)||void 0===e?void 0:e.getWrapper())||void 0===i?void 0:i.parentElement;if(!n)return;const{clientWidth:s,scrollWidth:o}=n;if(o<=s)return;const r=n.getBoundingClientRect(),a=t.element.getBoundingClientRect(),l=a.left-r.left,h=a.right-r.left;l<0?n.scrollLeft+=l:h>s&&(n.scrollLeft+=h-s)}saveRegion(t){this.regionsContainer.appendChild(t.element),this.avoidOverlapping(t),this.regions.push(t);const e=[t.on("update",(e=>{e||this.adjustScroll(t)})),t.on("update-end",(()=>{this.avoidOverlapping(t),this.emit("region-updated",t)})),t.on("play",(()=>{var e,i;null===(e=this.wavesurfer)||void 0===e||e.play(),null===(i=this.wavesurfer)||void 0===i||i.setTime(t.start)})),t.on("click",(e=>{this.emit("region-clicked",t,e)})),t.on("dblclick",(e=>{this.emit("region-double-clicked",t,e)})),t.once("remove",(()=>{e.forEach((t=>t())),this.regions=this.regions.filter((e=>e!==t)),this.emit("region-removed",t)}))];this.subscriptions.push(...e),this.emit("region-created",t)}addRegion(t){var e,i;if(!this.wavesurfer)throw Error("WaveSurfer is not initialized");const n=this.wavesurfer.getDuration(),s=null===(i=null===(e=this.wavesurfer)||void 0===e?void 0:e.getDecodedData())||void 0===i?void 0:i.numberOfChannels,r=new o(t,n,s);return n?this.saveRegion(r):this.subscriptions.push(this.wavesurfer.once("ready",(t=>{r._setTotalDuration(t),this.saveRegion(r)}))),r}enableDragSelection(t,e=3){var n;const s=null===(n=this.wavesurfer)||void 0===n?void 0:n.getWrapper();if(!(s&&s instanceof HTMLElement))return()=>{};let r=null,a=0;return i(s,((t,e,i)=>{r&&r._onUpdate(t,i>a?"end":"start")}),(e=>{var i,n;if(a=e,!this.wavesurfer)return;const s=this.wavesurfer.getDuration(),l=null===(n=null===(i=this.wavesurfer)||void 0===i?void 0:i.getDecodedData())||void 0===n?void 0:n.numberOfChannels,{width:h}=this.wavesurfer.getWrapper().getBoundingClientRect(),d=e/h*s,c=(e+5)/h*s;r=new o(Object.assign(Object.assign({},t),{start:d,end:c}),s,l),this.regionsContainer.appendChild(r.element)}),(()=>{r&&(this.saveRegion(r),r=null)}),e)}clearRegions(){this.regions.forEach((t=>t.remove()))}destroy(){this.clearRegions(),super.destroy(),this.regionsContainer.remove()}}


/***/ }),

/***/ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/wavesurfer.js/dist/wavesurfer.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
function t(t,e,i,n){return new(i||(i=Promise))((function(s,r){function o(t){try{h(n.next(t))}catch(t){r(t)}}function a(t){try{h(n.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}h((n=n.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;class e{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),null==i?void 0:i.once){const i=()=>{this.un(t,i),this.un(t,e)};return this.on(t,i),i}return()=>this.un(t,e)}un(t,e){var i;null===(i=this.listeners[t])||void 0===i||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((t=>t(...e)))}}const i={decode:function(e,i){return t(this,void 0,void 0,(function*(){const t=new AudioContext({sampleRate:i});return t.decodeAudioData(e).finally((()=>t.close()))}))},createBuffer:function(t,e){return"number"==typeof t[0]&&(t=[t]),function(t){const e=t[0];if(e.some((t=>t>1||t<-1))){const i=e.length;let n=0;for(let t=0;t<i;t++){const i=Math.abs(e[t]);i>n&&(n=i)}for(const e of t)for(let t=0;t<i;t++)e[t]/=n}}(t),{duration:e,length:t[0].length,sampleRate:t[0].length/e,numberOfChannels:t.length,getChannelData:e=>null==t?void 0:t[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function n(t,e){const i=e.xmlns?document.createElementNS(e.xmlns,t):document.createElement(t);for(const[t,s]of Object.entries(e))if("children"===t)for(const[t,s]of Object.entries(e))"string"==typeof s?i.appendChild(document.createTextNode(s)):i.appendChild(n(t,s));else"style"===t?Object.assign(i.style,s):"textContent"===t?i.textContent=s:i.setAttribute(t,s.toString());return i}function s(t,e,i){const s=n(t,e||{});return null==i||i.appendChild(s),s}var r=Object.freeze({__proto__:null,createElement:s,default:s});const o={fetchBlob:function(e,i,n){return t(this,void 0,void 0,(function*(){const s=yield fetch(e,n);if(s.status>=400)throw new Error(`Failed to fetch ${e}: ${s.status} (${s.statusText})`);return function(e,i){t(this,void 0,void 0,(function*(){if(!e.body||!e.headers)return;const n=e.body.getReader(),s=Number(e.headers.get("Content-Length"))||0;let r=0;const o=e=>t(this,void 0,void 0,(function*(){r+=(null==e?void 0:e.length)||0;const t=Math.round(r/s*100);i(t)})),a=()=>t(this,void 0,void 0,(function*(){let t;try{t=yield n.read()}catch(t){return}t.done||(o(t.value),yield a())}));a()}))}(s.clone(),i),s.blob()}))}};class a extends e{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),null!=t.playbackRate&&this.onMediaEvent("canplay",(()=>{null!=t.playbackRate&&(this.media.playbackRate=t.playbackRate)}),{once:!0})}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return""!==this.media.canPlayType(t)}setSrc(t,e){if(this.getSrc()===t)return;this.revokeSrc();const i=e instanceof Blob&&this.canPlayType(e.type)?URL.createObjectURL(e):t;this.media.src=i}destroy(){this.media.pause(),this.isExternalMedia||(this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return t(this,void 0,void 0,(function*(){return this.media.play()}))}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=t}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,e){null!=e&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}class h extends e{constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.subscriptions=[],this.options=t;const i=this.parentFromOptionsContainer(t.container);this.parent=i;const[n,s]=this.initHtml();i.appendChild(n),this.container=n,this.scrollContainer=s.querySelector(".scroll"),this.wrapper=s.querySelector(".wrapper"),this.canvasWrapper=s.querySelector(".canvases"),this.progressWrapper=s.querySelector(".progress"),this.cursor=s.querySelector(".cursor"),e&&s.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if("string"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw new Error("Container not found");return e}initEvents(){const t=t=>{const e=this.wrapper.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;return[i/e.width,n/e.height]};this.wrapper.addEventListener("click",(e=>{const[i,n]=t(e);this.emit("click",i,n)})),this.wrapper.addEventListener("dblclick",(e=>{const[i,n]=t(e);this.emit("dblclick",i,n)})),!0!==this.options.dragToSeek&&"object"!=typeof this.options.dragToSeek||this.initDrag(),this.scrollContainer.addEventListener("scroll",(()=>{const{scrollLeft:t,scrollWidth:e,clientWidth:i}=this.scrollContainer,n=t/e,s=(t+i)/e;this.emit("scroll",n,s)}));const e=this.createDelay(100);this.resizeObserver=new ResizeObserver((()=>{e().then((()=>this.onContainerResize())).catch((()=>{}))})),this.resizeObserver.observe(this.scrollContainer)}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&"auto"!==this.options.height||(this.lastContainerWidth=t,this.reRender())}initDrag(){this.subscriptions.push(function(t,e,i,n,s=3,r=0,o=100){if(!t)return()=>{};const a=matchMedia("(pointer: coarse)").matches;let h=()=>{};const l=l=>{if(l.button!==r)return;l.preventDefault(),l.stopPropagation();let d=l.clientX,c=l.clientY,u=!1;const p=Date.now(),m=n=>{if(n.preventDefault(),n.stopPropagation(),a&&Date.now()-p<o)return;const r=n.clientX,h=n.clientY,l=r-d,m=h-c;if(u||Math.abs(l)>s||Math.abs(m)>s){const n=t.getBoundingClientRect(),{left:s,top:o}=n;u||(null==i||i(d-s,c-o),u=!0),e(l,m,r-s,h-o),d=r,c=h}},f=e=>{if(u){const i=e.clientX,s=e.clientY,r=t.getBoundingClientRect(),{left:o,top:a}=r;null==n||n(i-o,s-a)}h()},g=t=>{t.relatedTarget&&t.relatedTarget!==document.documentElement||f(t)},v=t=>{u&&(t.stopPropagation(),t.preventDefault())},b=t=>{u&&t.preventDefault()};document.addEventListener("pointermove",m),document.addEventListener("pointerup",f),document.addEventListener("pointerout",g),document.addEventListener("pointercancel",g),document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("click",v,{capture:!0}),h=()=>{document.removeEventListener("pointermove",m),document.removeEventListener("pointerup",f),document.removeEventListener("pointerout",g),document.removeEventListener("pointercancel",g),document.removeEventListener("touchmove",b),setTimeout((()=>{document.removeEventListener("click",v,{capture:!0})}),10)}};return t.addEventListener("pointerdown",l),()=>{h(),t.removeEventListener("pointerdown",l)}}(this.wrapper,((t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))}),(t=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))}),(t=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))})))}getHeight(t,e){var i;const n=(null===(i=this.audioData)||void 0===i?void 0:i.numberOfChannels)||1;if(null==t)return 128;if(!isNaN(Number(t)))return Number(t);if("auto"===t){const t=this.parent.clientHeight||128;return(null==e?void 0:e.every((t=>!t.overlay)))?t/n:t}return 128}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"});return e.innerHTML=`\n      <style>\n        :host {\n          user-select: none;\n          min-width: 1px;\n        }\n        :host audio {\n          display: block;\n          width: 100%;\n        }\n        :host .scroll {\n          overflow-x: auto;\n          overflow-y: hidden;\n          width: 100%;\n          position: relative;\n        }\n        :host .noScrollbar {\n          scrollbar-color: transparent;\n          scrollbar-width: none;\n        }\n        :host .noScrollbar::-webkit-scrollbar {\n          display: none;\n          -webkit-appearance: none;\n        }\n        :host .wrapper {\n          position: relative;\n          overflow: visible;\n          z-index: 2;\n        }\n        :host .canvases {\n          min-height: ${this.getHeight(this.options.height,this.options.splitChannels)}px;\n        }\n        :host .canvases > div {\n          position: relative;\n        }\n        :host canvas {\n          display: block;\n          position: absolute;\n          top: 0;\n          image-rendering: pixelated;\n        }\n        :host .progress {\n          pointer-events: none;\n          position: absolute;\n          z-index: 2;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          overflow: hidden;\n        }\n        :host .progress > div {\n          position: relative;\n        }\n        :host .cursor {\n          pointer-events: none;\n          position: absolute;\n          z-index: 5;\n          top: 0;\n          left: 0;\n          height: 100%;\n          border-radius: 2px;\n        }\n      </style>\n\n      <div class="scroll" part="scroll">\n        <div class="wrapper" part="wrapper">\n          <div class="canvases" part="canvases"></div>\n          <div class="progress" part="progress"></div>\n          <div class="cursor" part="cursor"></div>\n        </div>\n      </div>\n    `,[t,e]}setOptions(t){if(this.options.container!==t.container){const e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}!0!==t.dragToSeek&&"object"!=typeof this.options.dragToSeek||this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}setScroll(t){this.scrollContainer.scrollLeft=t}setScrollPercentage(t){const{scrollWidth:e}=this.scrollContainer,i=e*t;this.setScroll(i)}destroy(){var t;this.subscriptions.forEach((t=>t())),this.container.remove(),null===(t=this.resizeObserver)||void 0===t||t.disconnect()}createDelay(t=10){let e,i;const n=()=>{e&&clearTimeout(e),i&&i()};return this.timeouts.push(n),()=>new Promise(((s,r)=>{n(),i=r,e=setTimeout((()=>{e=void 0,i=void 0,s()}),t)}))}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),i=e.getContext("2d"),n=e.height*(window.devicePixelRatio||1),s=i.createLinearGradient(0,0,0,n),r=1/(t.length-1);return t.forEach(((t,e)=>{const i=e*r;s.addColorStop(i,t)})),s}renderBarWaveform(t,e,i,n){const s=t[0],r=t[1]||t[0],o=s.length,{width:a,height:h}=i.canvas,l=h/2,d=window.devicePixelRatio||1,c=e.barWidth?e.barWidth*d:1,u=e.barGap?e.barGap*d:e.barWidth?c/2:0,p=e.barRadius||0,m=a/(c+u)/o,f=p&&"roundRect"in i?"roundRect":"rect";i.beginPath();let g=0,v=0,b=0;for(let t=0;t<=o;t++){const o=Math.round(t*m);if(o>g){const t=Math.round(v*l*n),s=t+Math.round(b*l*n)||1;let r=l-t;"top"===e.barAlign?r=0:"bottom"===e.barAlign&&(r=h-s),i[f](g*(c+u),r,c,s,p),g=o,v=0,b=0}const a=Math.abs(s[t]||0),d=Math.abs(r[t]||0);a>v&&(v=a),d>b&&(b=d)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,n){const s=e=>{const s=t[e]||t[0],r=s.length,{height:o}=i.canvas,a=o/2,h=i.canvas.width/r;i.moveTo(0,a);let l=0,d=0;for(let t=0;t<=r;t++){const r=Math.round(t*h);if(r>l){const t=a+(Math.round(d*a*n)||1)*(0===e?-1:1);i.lineTo(l,t),l=r,d=0}const o=Math.abs(s[t]||0);o>d&&(d=o)}i.lineTo(l,a)};i.beginPath(),s(0),s(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction)return void e.renderFunction(t,i);let n=e.barHeight||1;if(e.normalize){const e=Array.from(t[0]).reduce(((t,e)=>Math.max(t,Math.abs(e))),0);n=e?1/e:1}e.barWidth||e.barGap||e.barAlign?this.renderBarWaveform(t,e,i,n):this.renderLineWaveform(t,e,i,n)}renderSingleCanvas(t,e,i,n,s,r,o){const a=window.devicePixelRatio||1,h=document.createElement("canvas");h.width=Math.round(i*a),h.height=Math.round(n*a),h.style.width=`${i}px`,h.style.height=`${n}px`,h.style.left=`${Math.round(s)}px`,r.appendChild(h);const l=h.getContext("2d");if(this.renderWaveform(t,e,l),h.width>0&&h.height>0){const t=h.cloneNode(),i=t.getContext("2d");i.drawImage(h,0,0),i.globalCompositeOperation="source-in",i.fillStyle=this.convertColorValues(e.progressColor),i.fillRect(0,0,h.width,h.height),o.appendChild(t)}}renderMultiCanvas(e,i,n,s,r,o){return t(this,void 0,void 0,(function*(){const a=window.devicePixelRatio||1,l=n/a;let d=Math.min(h.MAX_CANVAS_WIDTH,this.scrollContainer.clientWidth);if(i.barWidth||i.barGap){const t=i.barWidth||.5,e=t+(i.barGap||t/2);d%e!=0&&(d=Math.floor(d/e)*e)}const c=t=>{const n=t*d,a=Math.min(l-n,d),h=e.map((t=>{const e=Math.floor(n/l*t.length),i=Math.floor((n+a)/l*t.length);return t.slice(e,i)}));this.renderSingleCanvas(h,i,a,s,n,r,o)},u=Math.ceil(l/d);if(1===u)return void c(0);const p=this.scrollContainer.scrollLeft/l,m=Math.floor(p*u);c(m),c(m+1),yield Promise.all([(()=>t(this,void 0,void 0,(function*(){const t=this.createDelay();for(let e=m-1;e>=0;e--)yield t(),c(e)})))(),(()=>t(this,void 0,void 0,(function*(){const t=this.createDelay();for(let e=m+2;e<u;e++)yield t(),c(e)})))()])}))}renderChannel(e,i,n,s){return t(this,void 0,void 0,(function*(){var{overlay:t}=i,r=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}(i,["overlay"]);const o=document.createElement("div"),a=this.getHeight(r.height,r.splitChannels);o.style.height=`${a}px`,t&&s>0&&(o.style.marginTop=`-${a}px`),this.canvasWrapper.style.minHeight=`${a}px`,this.canvasWrapper.appendChild(o);const h=o.cloneNode();this.progressWrapper.appendChild(h),yield this.renderMultiCanvas(e,r,n,a,o,h)}))}render(e){return t(this,void 0,void 0,(function*(){this.timeouts.forEach((t=>t())),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",null!=this.options.width&&(this.scrollContainer.style.width="number"==typeof this.options.width?`${this.options.width}px`:this.options.width);const t=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,n=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=n>i;const s=this.options.fillParent&&!this.isScrollable,r=(s?i:n)*t;this.wrapper.style.width=s?"100%":`${n}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render");try{if(this.options.splitChannels)yield Promise.all(Array.from({length:e.numberOfChannels}).map(((t,i)=>{var n;const s=Object.assign(Object.assign({},this.options),null===(n=this.options.splitChannels)||void 0===n?void 0:n[i]);return this.renderChannel([e.getChannelData(i)],s,r,i)})));else{const t=[e.getChannelData(0)];e.numberOfChannels>1&&t.push(e.getChannelData(1)),yield this.renderChannel(t,this.options,r,0)}}catch(t){return}this.emit("rendered")}))}reRender(){if(!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,{right:e}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const{right:t}=this.progressWrapper.getBoundingClientRect();let i=t-e;i*=2,i=i<0?Math.floor(i):Math.ceil(i),i/=2,this.scrollContainer.scrollLeft+=i}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{scrollLeft:i,scrollWidth:n,clientWidth:s}=this.scrollContainer,r=t*n,o=i,a=i+s,h=s/2;if(this.isDragging){const t=30;r+t>a?this.scrollContainer.scrollLeft+=t:r-t<o&&(this.scrollContainer.scrollLeft-=t)}else{(r<o||r>a)&&(this.scrollContainer.scrollLeft=r-(this.options.autoCenter?h:0));const t=r-i-h;e&&this.options.autoCenter&&t>0&&(this.scrollContainer.scrollLeft+=Math.min(t,10))}{const t=this.scrollContainer.scrollLeft,e=t/n,i=(t+s)/n;this.emit("scroll",e,i)}}renderProgress(t,e){if(isNaN(t))return;const i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${100===Math.round(i)?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(e,i,n){return t(this,void 0,void 0,(function*(){const t=this.canvasWrapper.querySelectorAll("canvas");if(!t.length)throw new Error("No waveform data");if("dataURL"===n){const n=Array.from(t).map((t=>t.toDataURL(e,i)));return Promise.resolve(n)}return Promise.all(Array.from(t).map((t=>new Promise(((n,s)=>{t.toBlob((t=>{t?n(t):s(new Error("Could not export image"))}),e,i)})))))}))}}h.MAX_CANVAS_WIDTH=4e3;class l extends e{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",(()=>{requestAnimationFrame((()=>{this.emit("tick")}))})),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class d extends e{constructor(t=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return t(this,void 0,void 0,(function*(){}))}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,this._duration=void 0,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then((e=>{if(e.status>=400)throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);return e.arrayBuffer()})).then((e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e))).then((e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())}))}_play(){var t;if(!this.paused)return;this.paused=!1,null===(t=this.bufferNode)||void 0===t||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let e=this.playedDuration*this._playbackRate;e>=this.duration&&(e=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,e),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var t;this.paused=!0,null===(t=this.bufferNode)||void 0===t||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return t(this,void 0,void 0,(function*(){this.paused&&(this._play(),this.emit("play"))}))}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(t){var e,i;const n=t-this.currentTime;null===(e=this.bufferNode)||void 0===e||e.stop(this.audioContext.currentTime+n),null===(i=this.bufferNode)||void 0===i||i.addEventListener("ended",(()=>{this.bufferNode=null,this.pause()}),{once:!0})}setSinkId(e){return t(this,void 0,void 0,(function*(){return this.audioContext.setSinkId(e)}))}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(t){const e=!this.paused;e&&this._pause(),this.playedDuration=t/this._playbackRate,e&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var t,e;return null!==(t=this._duration)&&void 0!==t?t:(null===(e=this.buffer)||void 0===e?void 0:e.duration)||0}set duration(t){this._duration=t}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const e=this.buffer.numberOfChannels;for(let i=0;i<e;i++)t.push(this.buffer.getChannelData(i));return t}}const c={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class u extends a{static create(t){return new u(t)}constructor(t){const e=t.media||("WebAudio"===t.backend?new d:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},c,t),this.timer=new l;const i=e?void 0:this.getMediaElement();this.renderer=new h(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const n=this.options.url||this.getSrc()||"";Promise.resolve().then((()=>{this.emit("init");const{peaks:t,duration:e}=this.options;(n||t&&e)&&this.load(n,t,e).catch((()=>null))}))}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",(()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t)}})))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",(()=>{const t=this.updateProgress();this.emit("timeupdate",t)})),this.onMediaEvent("play",(()=>{this.emit("play"),this.timer.start()})),this.onMediaEvent("pause",(()=>{this.emit("pause"),this.timer.stop()})),this.onMediaEvent("emptied",(()=>{this.timer.stop()})),this.onMediaEvent("ended",(()=>{this.emit("finish")})),this.onMediaEvent("seeking",(()=>{this.emit("seeking",this.getCurrentTime())})),this.onMediaEvent("error",(t=>{this.emit("error",t.error)})))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",((t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))})),this.renderer.on("dblclick",((t,e)=>{this.emit("dblclick",t,e)})),this.renderer.on("scroll",((t,e)=>{const i=this.getDuration();this.emit("scroll",t*i,e*i)})),this.renderer.on("render",(()=>{this.emit("redraw")})),this.renderer.on("rendered",(()=>{this.emit("redrawcomplete")})),this.renderer.on("dragstart",(t=>{this.emit("dragstart",t)})),this.renderer.on("dragend",(t=>{this.emit("dragend",t)})));{let t;this.subscriptions.push(this.renderer.on("drag",(e=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(e),clearTimeout(t),this.isPlaying()?i=0:!0===this.options.dragToSeek?i=200:"object"==typeof this.options.dragToSeek&&void 0!==this.options.dragToSeek&&(i=this.options.dragToSeek.debounceTime),t=setTimeout((()=>{this.seekTo(e)}),i),this.emit("interaction",e*this.getDuration()),this.emit("drag",e)})))}}initPlugins(){var t;(null===(t=this.options.plugins)||void 0===t?void 0:t.length)&&this.options.plugins.forEach((t=>{this.registerPlugin(t)}))}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach((t=>t())),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),null!=t.mediaControls&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",(()=>{this.plugins=this.plugins.filter((e=>e!==t))}))),t}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}setScroll(t){return this.renderer.setScroll(t)}setScrollTime(t){const e=t/this.getDuration();this.renderer.setScrollPercentage(e)}getActivePlugins(){return this.plugins}loadAudio(e,n,s,r){return t(this,void 0,void 0,(function*(){var t;if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,!n&&!s){const i=this.options.fetchParams||{};window.AbortController&&!i.signal&&(this.abortController=new AbortController,i.signal=null===(t=this.abortController)||void 0===t?void 0:t.signal);const s=t=>this.emit("loading",t);n=yield o.fetchBlob(e,s,i)}this.setSrc(e,n);const a=r||this.getDuration()||(yield new Promise((t=>{this.onMediaEvent("loadedmetadata",(()=>t(this.getDuration())),{once:!0})})));if(!e&&!n){const t=this.getMediaElement();t instanceof d&&(t.duration=a)}if(s)this.decodedData=i.createBuffer(s,a||0);else if(n){const t=yield n.arrayBuffer();this.decodedData=yield i.decode(t,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())}))}load(e,i,n){return t(this,void 0,void 0,(function*(){try{return yield this.loadAudio(e,void 0,i,n)}catch(t){throw this.emit("error",t),t}}))}loadBlob(e,i,n){return t(this,void 0,void 0,(function*(){try{return yield this.loadAudio("blob",e,i,n)}catch(t){throw this.emit("error",t),t}}))}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const n=Math.min(t,this.decodedData.numberOfChannels),s=[];for(let t=0;t<n;t++){const n=this.decodedData.getChannelData(t),r=[],o=n.length/e;for(let t=0;t<e;t++){const e=n.slice(Math.floor(t*o),Math.ceil((t+1)*o));let s=0;for(let t=0;t<e.length;t++){const i=e[t];Math.abs(i)>Math.abs(s)&&(s=i)}r.push(Math.round(s*i)/i)}s.push(r)}return s}getDuration(){let t=super.getDuration()||0;return 0!==t&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){super.setTime(t),this.updateProgress(t),this.emit("timeupdate",t)}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}playPause(){return t(this,void 0,void 0,(function*(){return this.isPlaying()?this.pause():this.play()}))}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(){return t(this,arguments,void 0,(function*(t="image/png",e=1,i="dataURL"){return this.renderer.exportImage(t,e,i)}))}destroy(){var t;this.emit("destroy"),null===(t=this.abortController)||void 0===t||t.abort(),this.plugins.forEach((t=>t.destroy())),this.subscriptions.forEach((t=>t())),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}u.BasePlugin=class extends e{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((t=>t()))}},u.dom=r;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js");
/* harmony import */ var wavesurfer_js_dist_plugins_regions_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wavesurfer.js/dist/plugins/regions.esm.js */ "./node_modules/wavesurfer.js/dist/plugins/regions.esm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function audioBufferToBlob(audioBuffer) {
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
function encodeWAV(samples, channels, sampleRate) {
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
function floatTo16BitPCM(output, offset, input) {
    for (let i = 0; i < input.length; i++, offset += 2) {
        const s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
}
function writeString(view, offset, val) {
    for (let i = 0; i < val.length; i++) {
        view.setUint8(offset + i, val.charCodeAt(i));
    }
}
function extractRegions(audioData, duration) {
    const minValue = 0.01;
    const minSilenceDuration = 0.10;
    const mergeDuration = 0.2;
    const scale = duration / audioData.length;
    const silentRegions = [];
    // Find all silent regions longer than minSilenceDuration
    let start = 0;
    let end = 0;
    let isSilent = false;
    for (var i = 0; i < audioData.length; i++) {
        if (audioData[i] < minValue) {
            if (!isSilent) {
                start = i;
                isSilent = true;
            }
        }
        else if (isSilent) {
            end = i;
            isSilent = false;
            if (scale * (end - start) > minSilenceDuration) {
                silentRegions.push({
                    start: scale * start,
                    end: scale * end,
                });
            }
        }
        if (i === audioData.length - 1 && start > end) {
            silentRegions.push({
                start: scale * start,
                end: scale * i,
            });
        }
    }
    console.log('data len: %d, %d', audioData.length, i);
    console.log('-- start: %d, end: %d', start, end);
    // Merge silent regions that are close together
    const mergedRegions = [];
    let lastRegion = null;
    for (let i = 0; i < silentRegions.length; i++) {
        if (lastRegion && silentRegions[i].start - lastRegion.end < mergeDuration) {
            lastRegion.end = silentRegions[i].end;
        }
        else {
            lastRegion = silentRegions[i];
            mergedRegions.push(lastRegion);
        }
    }
    // Find regions that are not silent
    const regions = [];
    let lastEnd = 0;
    for (let i = 0; i < mergedRegions.length; i++) {
        console.log('start: %d, end: %d', lastEnd, mergedRegions[i].start);
        regions.push({
            start: lastEnd,
            end: mergedRegions[i].start,
        });
        lastEnd = mergedRegions[i].end;
    }
    return regions;
}
function prepareCleanedWaveSurfer(pDecodeData, pRegions) {
    if (!pDecodeData)
        return;
    console.log('duration ' + pDecodeData.duration);
    console.log('sampel rates ' + pDecodeData.sampleRate);
    console.log('length ' + pDecodeData.length);
    console.log('channels ' + pDecodeData.numberOfChannels);
    const ws = wavesurfer_js__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        container: '#cleanedform',
        normalize: false,
        waveColor: '#ff4e00',
        progressColor: '#dd5e98',
        cursorColor: '#ddd5e9',
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
    });
    const length = pRegions.reduce((acc, r) => acc + (r.end - r.start), 0);
    // let length = 0
    // for (let i = 0; i < pRegions.length; ++i) {
    //     length += pRegions[i].end - pRegions[i].start
    // }
    const frames = Math.ceil(length * pDecodeData.sampleRate) + 1;
    const audioContext = new AudioContext();
    const buffer = audioContext.createBuffer(pDecodeData.numberOfChannels, frames, pDecodeData.sampleRate);
    const scale = pDecodeData.length / pDecodeData.duration;
    for (let channel = 0; channel < pDecodeData.numberOfChannels; channel++) {
        console.log(channel);
        const sourceBuffer = pDecodeData.getChannelData(channel);
        const nowBuffering = buffer.getChannelData(channel);
        let offset = 0;
        for (let i = 0; i < pRegions.length; ++i) {
            const start = Math.floor(pRegions[i].start * scale);
            const end = Math.floor(pRegions[i].end * scale);
            const sub = sourceBuffer.subarray(start, end);
            nowBuffering.set(sub, offset);
            offset += end - start;
        }
    }
    const blob = audioBufferToBlob(buffer);
    const cleanedURL = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.hidden = false;
    downloadLink.download = 'cleaned.wav';
    downloadLink.href = cleanedURL;
    ws.loadBlob(blob);
}
function prepareWaveSurfer(pAudioUrl, pBuffer) {
    const ws = wavesurfer_js__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        container: '#waveform',
        normalize: false,
        waveColor: '#ff4e00',
        progressColor: '#dd5e98',
        cursorColor: '#ddd5e9',
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
    });
    // Initialize the Regions plugin
    const wsRegions = ws.registerPlugin(wavesurfer_js_dist_plugins_regions_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].create());
    // Create regions for each non-silent part of the audio
    ws.on('decode', (duration) => __awaiter(this, void 0, void 0, function* () {
        const decodedData = ws.getDecodedData();
        if (!decodedData)
            return;
        const regions = extractRegions(decodedData.getChannelData(0), duration);
        // Add regions to the waveform
        regions.forEach((region, index) => {
            const wsRegion = wsRegions.addRegion({
                start: region.start,
                end: region.end,
                content: (index + 1).toString(),
                drag: false,
                resize: false,
                color: '#ddd5e980',
            });
        });
        const context = new AudioContext();
        const decodedAudio = yield context.decodeAudioData(pBuffer);
        prepareCleanedWaveSurfer(decodedAudio, regions);
    }));
    // Play a region on click
    let activeRegion = null;
    wsRegions.on('region-clicked', (region, e) => {
        e.stopPropagation();
        region.play();
        activeRegion = region;
    });
    ws.on('timeupdate', (currentTime) => {
        // When the end of the region is reached
        if (activeRegion && currentTime >= activeRegion.end) {
            // Stop playing
            ws.pause();
            activeRegion = null;
        }
    });
}
function domContentLoader() {
    const audioFileInput = document.getElementById('audioFile');
    audioFileInput.addEventListener('change', (event) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const file = (_a = audioFileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = () => {
            const buffer = reader.result;
            const blob = new Blob([buffer], { type: file.type });
            const audioUrl = URL.createObjectURL(blob);
            prepareWaveSurfer(audioUrl, buffer);
        };
        reader.readAsArrayBuffer(file);
    }));
}
document.addEventListener('DOMContentLoaded', domContentLoader);

})();

/******/ })()
;
//# sourceMappingURL=app.js.map