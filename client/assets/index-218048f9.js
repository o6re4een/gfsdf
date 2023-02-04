import{t as ue,e as $}from"./tslib-9e2f93bf.js";import{d as b,h as he}from"./index-9237b302.js";const de="PARSE_ERROR",le="INVALID_REQUEST",pe="METHOD_NOT_FOUND",ye="INVALID_PARAMS",G="INTERNAL_ERROR",C="SERVER_ERROR",ve=[-32700,-32600,-32601,-32602,-32603],R={[de]:{code:-32700,message:"Parse error"},[le]:{code:-32600,message:"Invalid Request"},[pe]:{code:-32601,message:"Method not found"},[ye]:{code:-32602,message:"Invalid params"},[G]:{code:-32603,message:"Internal error"},[C]:{code:-32e3,message:"Server error"}},X=C;function Ee(r){return ve.includes(r)}function L(r){return Object.keys(R).includes(r)?R[r]:R[X]}function me(r){const e=Object.values(R).find(s=>s.code===r);return e||R[X]}function be(r,e,s){return r.message.includes("getaddrinfo ENOTFOUND")||r.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${s} RPC url at ${e}`):r}var ge={},v={},j;function we(){if(j)return v;j=1,Object.defineProperty(v,"__esModule",{value:!0}),v.isBrowserCryptoAvailable=v.getSubtleCrypto=v.getBrowerCrypto=void 0;function r(){return(b===null||b===void 0?void 0:b.crypto)||(b===null||b===void 0?void 0:b.msCrypto)||{}}v.getBrowerCrypto=r;function e(){const a=r();return a.subtle||a.webkitSubtle}v.getSubtleCrypto=e;function s(){return!!r()&&!!e()}return v.isBrowserCryptoAvailable=s,v}var E={},M;function Re(){if(M)return E;M=1,Object.defineProperty(E,"__esModule",{value:!0}),E.isBrowser=E.isNode=E.isReactNative=void 0;function r(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}E.isReactNative=r;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}E.isNode=e;function s(){return!r()&&!e()}return E.isBrowser=s,E}(function(r){Object.defineProperty(r,"__esModule",{value:!0});const e=ue;e.__exportStar(we(),r),e.__exportStar(Re(),r)})(ge);function _e(){const r=Date.now()*Math.pow(10,3),e=Math.floor(Math.random()*Math.pow(10,3));return r+e}function Ae(r,e,s){return{id:s||_e(),jsonrpc:"2.0",method:r,params:e}}function Je(r,e){return{id:r,jsonrpc:"2.0",result:e}}function Te(r,e,s){return{id:r,jsonrpc:"2.0",error:Oe(e,s)}}function Oe(r,e){return typeof r>"u"?L(G):(typeof r=="string"&&(r=Object.assign(Object.assign({},L(C)),{message:r})),typeof e<"u"&&(r.data=e),Ee(r.code)&&(r=me(r.code)),r)}class z{}class Ve extends z{constructor(e){super()}}class Pe extends z{constructor(){super()}}class De extends Pe{constructor(e){super()}}const xe="^https?:",Ce="^wss?:";function Be(r){const e=r.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function Q(r,e){const s=Be(r);return typeof s>"u"?!1:new RegExp(e).test(s)}function I(r){return Q(r,xe)}function ke(r){return Q(r,Ce)}function $e(r){return new RegExp("wss?://localhost(:d{2,5})?").test(r)}function W(r){return typeof r=="object"&&"id"in r&&"jsonrpc"in r&&r.jsonrpc==="2.0"}function Ge(r){return W(r)&&"method"in r}function Se(r){return W(r)&&(Fe(r)||K(r))}function Fe(r){return"result"in r}function K(r){return"error"in r}class Xe extends De{constructor(e){super(e),this.events=new $.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,s){this.events.on(e,s)}once(e,s){this.events.once(e,s)}off(e,s){this.events.off(e,s)}removeListener(e,s){this.events.removeListener(e,s)}async request(e,s){return this.requestStrict(Ae(e.method,e.params||[]),s)}async requestStrict(e,s){return new Promise(async(a,f)=>{if(!this.connection.connected)try{await this.open()}catch(i){f(i)}this.events.on(`${e.id}`,i=>{K(i)?f(i.error):a(i.result)});try{await this.connection.send(e,s)}catch(i){f(i)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Se(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",()=>this.events.emit("disconnect")),this.connection.on("error",e=>this.events.emit("error",e)),this.hasRegisteredEventListeners=!0)}}var A={},Ue={get exports(){return A},set exports(r){A=r}};(function(r,e){var s=typeof self<"u"?self:b,a=function(){function i(){this.fetch=!1,this.DOMException=s.DOMException}return i.prototype=s,new i}();(function(i){(function(h){var p={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function Z(t){return t&&DataView.prototype.isPrototypeOf(t)}if(p.arrayBuffer)var ee=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],te=ArrayBuffer.isView||function(t){return t&&ee.indexOf(Object.prototype.toString.call(t))>-1};function g(t){if(typeof t!="string"&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function B(t){return typeof t!="string"&&(t=String(t)),t}function T(t){var n={next:function(){var o=t.shift();return{done:o===void 0,value:o}}};return p.iterable&&(n[Symbol.iterator]=function(){return n}),n}function u(t){this.map={},t instanceof u?t.forEach(function(n,o){this.append(o,n)},this):Array.isArray(t)?t.forEach(function(n){this.append(n[0],n[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(n){this.append(n,t[n])},this)}u.prototype.append=function(t,n){t=g(t),n=B(n);var o=this.map[t];this.map[t]=o?o+", "+n:n},u.prototype.delete=function(t){delete this.map[g(t)]},u.prototype.get=function(t){return t=g(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(g(t))},u.prototype.set=function(t,n){this.map[g(t)]=B(n)},u.prototype.forEach=function(t,n){for(var o in this.map)this.map.hasOwnProperty(o)&&t.call(n,this.map[o],o,this)},u.prototype.keys=function(){var t=[];return this.forEach(function(n,o){t.push(o)}),T(t)},u.prototype.values=function(){var t=[];return this.forEach(function(n){t.push(n)}),T(t)},u.prototype.entries=function(){var t=[];return this.forEach(function(n,o){t.push([o,n])}),T(t)},p.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);function O(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function S(t){return new Promise(function(n,o){t.onload=function(){n(t.result)},t.onerror=function(){o(t.error)}})}function re(t){var n=new FileReader,o=S(n);return n.readAsArrayBuffer(t),o}function ne(t){var n=new FileReader,o=S(n);return n.readAsText(t),o}function se(t){for(var n=new Uint8Array(t),o=new Array(n.length),l=0;l<n.length;l++)o[l]=String.fromCharCode(n[l]);return o.join("")}function F(t){if(t.slice)return t.slice(0);var n=new Uint8Array(t.byteLength);return n.set(new Uint8Array(t)),n.buffer}function U(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?typeof t=="string"?this._bodyText=t:p.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:p.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:p.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():p.arrayBuffer&&p.blob&&Z(t)?(this._bodyArrayBuffer=F(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):p.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||te(t))?this._bodyArrayBuffer=F(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||(typeof t=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob&&(this.blob=function(){var t=O(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?O(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(re)}),this.text=function(){var t=O(this);if(t)return t;if(this._bodyBlob)return ne(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(se(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(ae)}),this.json=function(){return this.text().then(JSON.parse)},this}var oe=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ie(t){var n=t.toUpperCase();return oe.indexOf(n)>-1?n:t}function m(t,n){n=n||{};var o=n.body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,n.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,!o&&t._bodyInit!=null&&(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=n.credentials||this.credentials||"same-origin",(n.headers||!this.headers)&&(this.headers=new u(n.headers)),this.method=ie(n.method||this.method||"GET"),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})};function ae(t){var n=new FormData;return t.trim().split("&").forEach(function(o){if(o){var l=o.split("="),d=l.shift().replace(/\+/g," "),c=l.join("=").replace(/\+/g," ");n.append(decodeURIComponent(d),decodeURIComponent(c))}}),n}function ce(t){var n=new u,o=t.replace(/\r?\n[\t ]+/g," ");return o.split(/\r?\n/).forEach(function(l){var d=l.split(":"),c=d.shift().trim();if(c){var _=d.join(":").trim();n.append(c,_)}}),n}U.call(m.prototype);function y(t,n){n||(n={}),this.type="default",this.status=n.status===void 0?200:n.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new u(n.headers),this.url=n.url||"",this._initBody(t)}U.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var fe=[301,302,303,307,308];y.redirect=function(t,n){if(fe.indexOf(n)===-1)throw new RangeError("Invalid status code");return new y(null,{status:n,headers:{location:t}})},h.DOMException=i.DOMException;try{new h.DOMException}catch{h.DOMException=function(n,o){this.message=n,this.name=o;var l=Error(n);this.stack=l.stack},h.DOMException.prototype=Object.create(Error.prototype),h.DOMException.prototype.constructor=h.DOMException}function P(t,n){return new Promise(function(o,l){var d=new m(t,n);if(d.signal&&d.signal.aborted)return l(new h.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function _(){c.abort()}c.onload=function(){var w={status:c.status,statusText:c.statusText,headers:ce(c.getAllResponseHeaders()||"")};w.url="responseURL"in c?c.responseURL:w.headers.get("X-Request-URL");var D="response"in c?c.response:c.responseText;o(new y(D,w))},c.onerror=function(){l(new TypeError("Network request failed"))},c.ontimeout=function(){l(new TypeError("Network request failed"))},c.onabort=function(){l(new h.DOMException("Aborted","AbortError"))},c.open(d.method,d.url,!0),d.credentials==="include"?c.withCredentials=!0:d.credentials==="omit"&&(c.withCredentials=!1),"responseType"in c&&p.blob&&(c.responseType="blob"),d.headers.forEach(function(w,D){c.setRequestHeader(D,w)}),d.signal&&(d.signal.addEventListener("abort",_),c.onreadystatechange=function(){c.readyState===4&&d.signal.removeEventListener("abort",_)}),c.send(typeof d._bodyInit>"u"?null:d._bodyInit)})}return P.polyfill=!0,i.fetch||(i.fetch=P,i.Headers=u,i.Request=m,i.Response=y),h.Headers=u,h.Request=m,h.Response=y,h.fetch=P,Object.defineProperty(h,"__esModule",{value:!0}),h})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var f=a;e=f.fetch,e.default=f.fetch,e.fetch=f.fetch,e.Headers=f.Headers,e.Request=f.Request,e.Response=f.Response,r.exports=e})(Ue,A);const N=he(A);function Le(r){if(typeof r!="string")throw new Error(`Cannot safe json parse value of type ${typeof r}`);try{return JSON.parse(r)}catch{return r}}function H(r){return typeof r=="string"?r:JSON.stringify(r)}const je={Accept:"application/json","Content-Type":"application/json"},Me="POST",q={headers:je,method:Me},J=10;class ze{constructor(e){if(this.url=e,this.events=new $.EventEmitter,this.isAvailable=!1,this.registering=!1,!I(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,s){this.events.on(e,s)}once(e,s){this.events.once(e,s)}off(e,s){this.events.off(e,s)}removeListener(e,s){this.events.removeListener(e,s)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,s){this.isAvailable||await this.register();try{const a=H(e),i=await(await N(this.url,Object.assign(Object.assign({},q),{body:a}))).json();this.onPayload({data:i})}catch(a){this.onError(e.id,a)}}async register(e=this.url){if(!I(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const s=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=s||this.events.listenerCount("open")>=s)&&this.events.setMaxListeners(s+1),new Promise((a,f)=>{this.events.once("register_error",i=>{this.resetMaxListeners(),f(i)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return f(new Error("HTTP connection is missing or invalid"));a()})})}this.url=e,this.registering=!0;try{const s=H({id:1,jsonrpc:"2.0",method:"test",params:[]});await N(e,Object.assign(Object.assign({},q),{body:s})),this.onOpen()}catch(s){const a=this.parseError(s);throw this.events.emit("register_error",a),this.onClose(),a}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const s=typeof e.data=="string"?Le(e.data):e.data;this.events.emit("payload",s)}onError(e,s){const a=this.parseError(s),f=a.message||a.toString(),i=Te(e,f);this.events.emit("payload",i)}parseError(e,s=this.url){return be(e,s,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>J&&this.events.setMaxListeners(J)}}var Qe=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),Y="%[a-f0-9]{2}",V=new RegExp("("+Y+")|([^%]+?)","gi"),k=new RegExp("("+Y+")+","gi");function x(r,e){try{return[decodeURIComponent(r.join(""))]}catch{}if(r.length===1)return r;e=e||1;var s=r.slice(0,e),a=r.slice(e);return Array.prototype.concat.call([],x(s),x(a))}function Ie(r){try{return decodeURIComponent(r)}catch{for(var e=r.match(V)||[],s=1;s<e.length;s++)r=x(e,s).join(""),e=r.match(V)||[];return r}}function Ne(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},s=k.exec(r);s;){try{e[s[0]]=decodeURIComponent(s[0])}catch{var a=Ie(s[0]);a!==s[0]&&(e[s[0]]=a)}s=k.exec(r)}e["%C2"]="�";for(var f=Object.keys(e),i=0;i<f.length;i++){var h=f[i];r=r.replace(new RegExp(h,"g"),e[h])}return r}var We=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch{return Ne(r)}},Ke=(r,e)=>{if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[r];const s=r.indexOf(e);return s===-1?[r]:[r.slice(0,s),r.slice(s+e.length)]};export{ze as H,Ve as I,Xe as J,Qe as a,H as b,ge as c,We as d,$e as e,Te as f,Le as g,be as h,ke as i,Ge as j,Je as k,Fe as l,K as m,Se as n,Ae as o,_e as p,Ke as s};
