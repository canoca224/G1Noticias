;
(self.AMP=self.AMP||[]).push({m:0,v:"2312191621000",n:"amp-carousel",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,n){return(i=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,n)}function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,i){if(i&&("object"===e(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return o(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=r(t);if(i){var o=r(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return s(this,n)}}function u(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function h(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?h(Object(n),!0).forEach((function(i){u(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}var c=Array.isArray;function f(t){return"string"==typeof t}function v(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function p(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return v(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m=Object.prototype;function d(t){var i=Object.create(null);return t&&Object.assign(i,t),i}function b(t){return"number"==typeof t&&isFinite(t)}function g(t,i,n,r,e,o,s,a,u,h,l){return t}function x(t){return(t.ownerDocument||t).defaultView}m.hasOwnProperty,m.toString;var y=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function w(t,i,n,r,e){return e||(i?"�":r?t.slice(0,-1)+"\\"+t.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+t)}function S(t){return String(t).replace(y,w)}function k(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,s=void 0,a=void 0,f(o=e=r)?s=o:1==(null==(a=o)?void 0:a.nodeType)&&(s=o.tagName),!(s&&s.toLowerCase().startsWith("i-")||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&n.push(r);var e,o,s,a;return n}(t)}var j={bubbles:!0,cancelable:!0};function E(t){return t.parent&&t.parent!=t}function O(t,i,n){var r=t.hasAttribute(i),e=void 0!==n?n:!r;return e!==r&&(e?t.setAttribute(i,""):t.removeAttribute(i)),e}function M(t,i,n,r){var e=n||{};g(t.ownerDocument);var o=r||j,s=o.bubbles,a=o.cancelable,u=new MessageEvent(i,{data:e,bubbles:s,cancelable:a});t.dispatchEvent(u)}function A(t){return t.hasAttribute("i-amphtml-ssr")}var z,I="amp-carousel-button-prev",T="amp-carousel-button-next",N="i-amphtml-carousel-has-controls",R="amp-carousel-slide",P="i-amphtml-slide-item",_="i-amphtml-slides-container",B="i-amphtml-slidescroll-no-snap",C="i-amphtml-slide-item-show",L="i-amphtml-scrollable-carousel-container";function W(){for(var t=0;t<arguments.length;t++)if(!arguments[t])throw new Error("Invalid server render")}function F(t,i){var n=i.className,r=i.enabled,e=i.title,o=Z(t)?"presentation":"button",s=t.ownerDocument.createElement("div");return s.setAttribute("tabindex","0"),s.classList.add("amp-carousel-button",n),s.setAttribute("role",o),s.setAttribute("title",e),U(s,r),t.appendChild(s),s}function U(t,i){t.classList.toggle("amp-disabled",!i),t.setAttribute("aria-disabled",String(!i)),t.setAttribute("tabindex",String(i?0:-1))}function D(t){var i=k(t).length,n=Z(t)?function(t){if(A(t))return function(t){var i=t.querySelector(".".concat(S(L))),n=Array.from(t.querySelectorAll(".".concat(S(R))));return W(i,n),{container:i,cells:n}}(t);var i=t.ownerDocument,n=k(t),r=i.createElement("div");return r.classList.add(L),r.setAttribute("tabindex","-1"),t.appendChild(r),n.forEach((function(t){t.classList.add(R,"amp-scrollable-carousel-slide"),r.appendChild(t)})),{cells:n,container:r}}(t):function(t){var i;if(A(t))return function(t){var i=t.querySelector(".".concat(S(_))),n=Array.from(t.querySelectorAll(".".concat(S(P)))),r=Array.from(t.querySelectorAll(".".concat(S(R))));return W(i,n,r),{slides:r,slidesContainer:i,slideWrappers:n}}(t);var n=t.ownerDocument,r=k(t);t.classList.add("i-amphtml-slidescroll");var e=n.createElement("div");e.setAttribute("tabindex","-1"),e.classList.add(_,B),e.setAttribute("aria-live","polite"),t.appendChild(e);var o=[];return r.forEach((function(t){t.classList.add(R);var i=n.createElement("div");i.classList.add(P),i.appendChild(t),e.appendChild(i),o.push(i)})),null===(i=o[0])||void 0===i||i.classList.add(C),{slidesContainer:e,slides:r,slideWrappers:o}}(t);return l(l({},function(t,i){if(A(t))return function(t){var i=t.querySelector(".".concat(S(I))),n=t.querySelector(".".concat(S(T)));return W(i,n),{prevButton:i,nextButton:n}}(t);var n,r;n=t.ownerDocument,r=n.documentElement,(["⚡4email","amp4email"].some((function(t){return r.hasAttribute(t)}))||t.hasAttribute("controls"))&&t.classList.add(N);var e=t.hasAttribute("loop"),o=i>1?2:e?0:1;return{prevButton:F(t,{className:I,title:G(t,{index:String(e?i:0),total:String(i)}),enabled:t.hasAttribute("loop")}),nextButton:F(t,{className:T,title:H(t,{index:String(o),total:String(i)}),enabled:i>1})}}(t,i)),n)}function H(t,i){var n=t.getAttribute("data-next-button-aria-label")||"Next item in carousel";return X(t,{prefix:n,index:i.index,total:i.total})}function G(t,i){var n=t.getAttribute("data-prev-button-aria-label")||"Previous item in carousel";return X(t,{prefix:n,index:i.index,total:i.total})}function X(t,i){var n=i.index,r=i.prefix,e=i.total;if(Z(t))return r;var o=(t.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",n).replace("%s",e);return"".concat(r," ").concat(o)}function Z(t){return"slides"!==t.getAttribute("type")}function $(){return z||(z=Promise.resolve(void 0))}var J=function(){var t=this;this.promise=new Promise((function(i,n){t.resolve=i,t.reject=n}))},V="ArrowLeft",Y="ArrowRight",q="fixed",K="fixed-height";function Q(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.needsRootBounds,e=n.rootMargin,o=n.threshold,s=E(i)&&(r||e)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:s,rootMargin:e})}var tt,it=new WeakMap,nt=new WeakMap;function rt(t,i,n){var r=x(t);if(n){var e=Q((function(t){i(t[t.length-1])}),r,n);return e.observe(t),function(){e.unobserve(t)}}var o=it.get(r);o||it.set(r,o=Q(et,r));var s=nt.get(t);return s||(s=[],nt.set(t,s)),s.push(i),o.observe(t),function(){!function(t,i){var n,r,e,o=nt.get(t);if(o&&(r=i,-1!=(e=(n=o).indexOf(r))&&(n.splice(e,1),1)&&!o.length)){var s=x(t),a=it.get(s);null==a||a.unobserve(t),nt.delete(t)}}(t,i)}}function et(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],e=r.target;if(!i.has(e)){i.add(e);var o=nt.get(e);if(o)for(var s=0;s<o.length;s++)(0,o[s])(r)}}}function ot(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,e=new Error(n);for(var o in t)e[o]=t[o];return e.stack=r,e}function st(t){for(var i,n=null,r="",e=p(arguments,!0);!(i=e()).done;){var o=i.value;o instanceof Error&&!n?n=ot(o):(r&&(r+=" "),r+=o)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function at(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function ut(t){var i=st.apply(null,arguments);setTimeout((function(){throw at(i),i}))}function ht(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){ut(t)}}var lt=["Webkit","webkit","Moz","moz","ms","O","o"],ct={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function ft(t,i,n){if(pt(i))return i;tt||(tt=d());var r=tt[i];if(!r||n){if(r=i,void 0===t[i]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),o=function(t,i){for(var n=0;n<lt.length;n++){var r=lt[n]+i;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}n||(tt[i]=r)}return r}function vt(t,i,n,r,e){var o=ft(t.style,i,e);if(o){var s,a=r?n+r:n;t.style.setProperty((s=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),lt.some((function(t){return s.startsWith(t+"-")}))?"-".concat(s):s),a)}}function pt(t){return t.startsWith("--")}function mt(t,i){return function(n){return t+(i-t)*n}}var dt=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function bt(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var gt=self.__AMP_LOG;function xt(t,i){throw new Error("failed to call initLogConstructor")}function yt(t){return gt.user||(gt.user=wt()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(gt.user.win,t)?gt.userForEmbed||(gt.userForEmbed=wt()):gt.user}function wt(t){return xt()}function St(){return gt.dev||(gt.dev=xt())}function kt(t,i,n,r,e,o,s,a,u,h,l){return t}function jt(t,i){return zt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Et(t,i){return zt(At(Mt(t)),i)}function Ot(t,i){return It(At(t),i)}function Mt(t){return t.nodeType?(i=x(t),jt(i,"ampdoc")).getAmpDoc(t):t;var i}function At(t){var i=Mt(t);return i.isSingleDoc()?i.win:i}function zt(t,i){kt(Nt(t,i));var n=Tt(t)[i];return n.obj||(kt(n.ctor),kt(n.context),n.obj=new n.ctor(n.context),kt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function It(t,i){var n=Tt(t)[i];return n?n.promise?n.promise:(zt(t,i),n.promise=Promise.resolve(n.obj)):null}function Tt(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function Nt(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var Rt=function(t){return i="action",Nt(n=At(Mt(t)),i)?zt(n,i):null;var i,n},Pt=function(t){return function(t,i,n,r){var e=Ot(t,i);if(e)return e;var o=Mt(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(n);return t?jt(o.win,"extensions").waitForExtension(n,t):null})).then((function(n){return n?function(t,i){return function(t,i){var n=It(t,i);if(n)return n;var r,e,o,s,a=Tt(t);return a[i]=(e=(r=new J).promise,o=r.reject,s=r.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:s,reject:o,context:null,ctor:null}),a[i].promise}(At(t),i)}(t,i):null}))}(t,"amp-analytics-instrumentation","amp-analytics")},_t=function(t){return Et(t,"owners")},Bt=function(t){return jt(t,"platform")},Ct=function(t){return zt(t,"timer")},Lt=function(t){return jt(t,"vsync")};function Wt(t,i,n,r){return function(e){return Ft.solveYValueFromXValue(e,0,0,t,i,n,r,1,1)}}var Ft=function(){function t(){}return t.solveYValueFromXValue=function(i,n,r,e,o,s,a,u,h){return t.yc(t.wc(i,n,e,s,u),r,o,a,h)},t.wc=function(i,n,r,e,o){var s=1e-6,a=(i-n)/(o-n);if(a<=0)return 0;if(a>=1)return 1;for(var u=0,h=1,l=0,c=0;c<8;c++){l=t.Ac(a,n,r,e,o);var f=(t.Ac(a+s,n,r,e,o)-l)/s;if(Math.abs(l-i)<s)return a;if(Math.abs(f)<s)break;l<i?u=a:h=a,a-=(l-i)/f}for(var v=0;Math.abs(l-i)>s&&v<8;v++)l<i?(u=a,a=(a+h)/2):(h=a,a=(a+u)/2),l=t.Ac(a,n,r,e,o);return a},t.Ac=function(i,n,r,e,o){if(0==i)return n;if(1==i)return o;var s=t.xc(n,r,i),a=t.xc(r,e,i),u=t.xc(e,o,i);return s=t.xc(s,a,i),a=t.xc(a,u,i),t.xc(s,a,i)},t.yc=function(i,n,r,e,o){if(0==i)return n;if(1==i)return o;var s=t.xc(n,r,i),a=t.xc(r,e,i),u=t.xc(e,o,i);return s=t.xc(s,a,i),a=t.xc(a,u,i),t.xc(s,a,i)},t.xc=function(t,i,n){return t+n*(i-t)},t}(),Ut={LINEAR:function(t){return t},EASE:function(t){return Ft.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1)},EASE_IN:function(t){return Ft.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1)},EASE_OUT:function(t){return Ft.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1)},EASE_IN_OUT:function(t){return Ft.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)}},Dt={"linear":Ut.LINEAR,"ease":Ut.EASE,"ease-in":Ut.EASE_IN,"ease-out":Ut.EASE_OUT,"ease-in-out":Ut.EASE_IN_OUT};function Ht(t){if(!t)return null;if(f(t)){if(-1!=t.indexOf("cubic-bezier")){var i=t.match(/cubic-bezier\((.+)\)/);if(i){var n=i[1].split(",").map(parseFloat);if(4==n.length){for(var r=0;r<4;r++)if(isNaN(n[r]))return null;return Wt(n[0],n[1],n[2],n[3])}}return null}return Dt[t]}return t}var Gt,Xt="Animation",Zt=function(){},$t=function(){function t(t,i){this.Ec=t,this._o=i||Lt(self),this.Oc=null,this.Tc=[]}t.animate=function(i,n,r,e){return new t(i).setCurve(e).add(0,n,1).start(r)};var i=t.prototype;return i.setCurve=function(t){return t&&(this.Oc=Ht(t)),this},i.add=function(t,i,n,r){return this.Tc.push({delay:t,func:i,duration:n,curve:Ht(r)}),this},i.start=function(t){return new Jt(this._o,this.Ec,this.Tc,this.Oc,t)},t}(),Jt=function(){function t(t,i,n,r,e){this._o=t,this.Ec=i,this.Tc=[];for(var o=0;o<n.length;o++){var s=n[o];this.Tc.push({delay:s.delay,func:s.func,duration:s.duration,curve:s.curve||r,started:!1,completed:!1})}this.Pc=e,this.fa=Date.now(),this.He=!0,this.Ri={};var a=new J;this.Ic=a.promise,this.Oi=a.resolve,this.Sc=a.reject,this.Mc=this._o.createAnimTask(this.Ec,{mutate:this.Rc.bind(this)}),this._o.canAnimate(this.Ec)?this.Mc(this.Ri):(St().warn(Xt,"cannot animate"),this._c(!1,0))}var i=t.prototype;return i.then=function(t,i){return t||i?this.Ic.then(t,i):this.Ic},i.thenAlways=function(t){var i=t||Zt;return this.then(i,i)},i.halt=function(t){this._c(!1,t||0)},i._c=function(t,i){if(this.He){if(this.He=!1,0!=i){this.Tc.length>1&&this.Tc.sort((function(t,i){return t.delay+t.duration-(i.delay+i.duration)}));try{if(i>0)for(var n=0;n<this.Tc.length;n++)this.Tc[n].func(1,!0);else for(var r=this.Tc.length-1;r>=0;r--)this.Tc[r].func(0,!1)}catch(i){St().error(Xt,"completion failed: "+i,i),t=!1}}t?this.Oi():this.Sc()}},i.Rc=function(t){if(this.He){for(var i=Date.now(),n=Math.min((i-this.fa)/this.Pc,1),r=0;r<this.Tc.length;r++){var e=this.Tc[r];!e.started&&n>=e.delay&&(e.started=!0)}for(var o=0;o<this.Tc.length;o++){var s=this.Tc[o];s.started&&!s.completed&&this.kc(s,n)}1==n?this._c(!0,0):this._o.canAnimate(this.Ec)?this.Mc(this.Ri):(St().warn(Xt,"cancel animation"),this._c(!1,0))}},i.kc=function(t,i){var n,r;if(t.duration>0){if(r=n=Math.min((i-t.delay)/t.duration,1),t.curve&&1!=r)try{r=t.curve(n)}catch(t){return St().error(Xt,"step curve failed: "+t,t),void this._c(!1,0)}}else n=1,r=1;1==n&&(t.completed=!0);try{t.func(r,t.completed)}catch(t){return St().error(Xt,"step mutate failed: "+t,t),void this._c(!1,0)}},t}();function Vt(t,i,n,r){var e={detail:n};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(i,!!e.bubbles,!!e.cancelable,n),o}function Yt(t,i,n,r){return function(t,i,n,r){var e=t,o=n,s=function(t){try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}},a=function(){if(void 0!==Gt)return Gt;Gt=!1;try{var t={get capture(){return Gt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return Gt}(),u=!(null==r||!r.capture);return e.addEventListener(i,s,a?r:u),function(){null==e||e.removeEventListener(i,s,a?r:u),o=null,e=null,s=null}}(t,i,n,r)}var qt=function(){function t(t){var i=t.element,n=t.go,r=t.nextButton,e=t.prevButton;this.tp=i,this.Mot=n,this.t=x(i),this.Op=e,this.Mp=r,this.iit=!1,this.Iot()}var i=t.prototype;return i.Iot=function(){var t,i=this;this.setupButtonInteraction(this.Op,(function(){return i.handlePrev()})),this.setupButtonInteraction(this.Mp,(function(){return i.handleNext()})),this.tp.hasAttribute("controls")?this.iit=!0:(t=this.t,jt(t,"input")).onMouseDetected((function(t){t&&(i.iit=!0,O(i.tp,"i-amphtml-carousel-hide-buttons",!i.iit),i.tp.classList.add(N))}),!0)},i.setupButtonInteraction=function(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(function(t){t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))},i.setControlsState=function(t){var i=t.next,n=t.prev;U(this.Op,n),U(this.Mp,i)},i.hintControls=function(){var t=this;this.iit||Lt(this.t).mutate((function(){var i="i-amphtml-carousel-button-start-hint";t.tp.classList.add(i),Ct(t.t).delay((function(){var n;(n=t.tp,Et(n,"mutator")).measureMutateElement(t.tp,null,(function(){t.tp.classList.remove(i),O(t.tp,"i-amphtml-carousel-hide-buttons",!t.iit)}))}),4e3)}))},i.updateButtonTitles=function(t,i){this.Op.title=t,this.Mp.title=i},i.handlePrev=function(){!this.Op.classList.contains("amp-disabled")&&this.Mot(-1,!0,!1)},i.handleNext=function(){!this.Mp.classList.contains("amp-disabled")&&this.Mot(1,!0,!1)},t}(),Kt="amp-scrollable-carousel",Qt=function(t){n(r,t);var i=a(r);function r(t){var n;return(n=i.call(this,t)).u1=0,n.Tot=0,n.Not=null,n.Ob=null,n.f1=null,n.Cj=null,n.Cd=null,n}var e=r.prototype;return e.isLayoutSupported=function(t){return function(t){return t==q||t==K}(t)},e.isRelayoutNeeded=function(){return!0},e.Pot=function(){var t=this;this.Bot(),this.Ob.addEventListener("scroll",this.op.bind(this)),this.Ob.addEventListener("keydown",this.B5.bind(this)),this.Not.forEach((function(i){_t(t.element).setOwner(i,t.element)})),this.registerAction("goToSlide",(function(i){var n=i.args;if(n){var r=parseInt(n.index,10);t.goToSlide(r)}}),1),Rt(this.element).addToAllowlist("amp-carousel","goToSlide",["email"])},e.buildCallback=function(){var t=D(this.element),i=t.cells,n=t.container,r=t.nextButton,e=t.prevButton;this.Ob=n,this.Not=i,this.Cd=new qt({element:this.element,prevButton:e,nextButton:r,go:this.go.bind(this)}),this.Pot()},e.layoutCallback=function(){var t=this;return this.Cj=rt(this.element,(function(i){var n=i.isIntersecting;return t.viewportCallback(n)})),this.Lot(this.u1),this.Wot(this.u1,1),this.Cd.setControlsState({prev:this.Fot(),next:this.Uot()}),$()},e.unlayoutCallback=function(){var t;return null===(t=this.Cj)||void 0===t||t.call(this),this.Cj=null,!0},e.viewportCallback=function(t){this.Dot(this.u1,this.u1),t&&this.Cd.hintControls()},e.go=function(t,i){var n=this,r=this.Hot(this.u1,t),e=this.u1;if(r!=e)if(i){var o=mt(e,r);$t.animate(this.element,(function(t){n.Ob.scrollLeft=o(t)}),200,"ease-in-out").thenAlways((function(){n.Got(r)}))}else this.Got(r),this.Ob.scrollLeft=r},e.goToSlide=function(t){var i=this,n=this.Not.length;if(!isFinite(t)||t<0||t>=n)return this.user().error(Kt,"Invalid [slide] value: %s",t),$();var r=this.u1,e=r;this.measureMutateElement((function(){e=i.Xot(t)}),(function(){if(e!=r){var t=mt(r,e);$t.animate(i.element,(function(n){i.Ob.scrollLeft=t(n)}),200,"ease-in-out").thenAlways((function(){i.Got(e)}))}}))},e.Xot=function(t){var i=this.element.offsetWidth;return this.Not[t].offsetLeft-(i-this.Not[t].offsetWidth)/2},e.op=function(){var t=this.Ob.scrollLeft;this.u1=t,null===this.f1&&this.B1(t)},e.B5=function(t){var i=t.key;i!=V&&i!=Y||t.stopPropagation()},e.B1=function(t){var i=this;this.f1=Ct(this.win).delay((function(){Math.abs(t-i.u1)<30?(St().fine(Kt,"slow scrolling: %s - %s",t,i.u1),i.f1=null,i.Got(i.u1)):(St().fine(Kt,"fast scrolling: %s - %s",t,i.u1),i.B1(i.u1))}),100)},e.Got=function(t){this.Dot(t,this.Tot),this.Lot(t),this.Wot(t,Math.sign(t-this.Tot)),this.Tot=t,this.u1=t,this.Cd.setControlsState({prev:this.Fot(),next:this.Uot()})},e.Hot=function(t,i){var n=this.element.offsetWidth,r=this.Ob.scrollWidth,e=t+i*n;return e<0?0:r>=n&&e>r-n?r-n:e},e.Zot=function(t,i){for(var n=this.element.offsetWidth,r=0;r<this.Not.length;r++){var e=this.Not[r];e.offsetLeft+e.offsetWidth>=t&&e.offsetLeft<=t+n&&i(e)}},e.Lot=function(t){var i=this;this.Zot(t,(function(t){_t(i.element).scheduleLayout(i.element,t)}))},e.Wot=function(t,i){var n=this,r=this.Hot(t,i);r!=t&&this.Zot(r,(function(t){_t(n.element).schedulePreload(n.element,t)}))},e.Dot=function(t,i){var n=this,r=[];this.Zot(t,(function(t){r.push(t)})),i!=t&&this.Zot(i,(function(t){r.includes(t)||_t(n.element).schedulePause(n.element,t)}))},e.Fot=function(){return 0!=this.u1},e.Uot=function(){var t=this.element.offsetWidth,i=this.Ob.scrollWidth,n=Math.max(i-t,0);return this.u1!=n},e.interactionNext=function(){this.Cd.handleNext()},e.interactionPrev=function(){this.Cd.handlePrev()},e.goCallback=function(t,i){this.go(t,i)},e.Bot=function(){Yt(this.element,"touchmove",(function(t){return t.stopPropagation()}),{passive:!0})},r}(t.BaseElement),ti=/vertical/,ii=new WeakMap,ni=new WeakMap,ri=new WeakMap;function ei(t){var i=ii.get(t);return i||(i=new t.ResizeObserver(oi),ii.set(t,i)),i}function oi(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],e=r.target;if(!i.has(e)){i.add(e);var o=ni.get(e);if(o){ri.set(e,r);for(var s=0;s<o.length;s++){var a=o[s],u=a.callback;si(a.type,u,r)}}}}}function si(t,i,n){if(0==t){var r=n.contentRect,e=r.height;ht(i,{width:r.width,height:e})}else if(1==t){var o,s=n.borderBoxSize;if(s)o=s.length>0?s[0]:{inlineSize:0,blockSize:0};else{var a,u,h=n.target,l=x(h),c=ti.test(function(t,i){return t.getComputedStyle(i)||ct}(l,h).writingMode),f=h,v=f.offsetHeight,p=f.offsetWidth;c?(u=p,a=v):(a=p,u=v),o={inlineSize:a,blockSize:u}}ht(i,o)}}var ai="__AMP__EXPERIMENT_TOGGLES",ui="AMP-CAROUSEL",hi=function(t){n(r,t);var i=a(r);function r(t){var n;(n=i.call(this,t))._o=null,n.$ot=!1,n._7=[],n.Jot=0,n.Ant=null,n.Vot=[],n.Yot=!1,n.qot=null,n.Kot=!1,n.Qot=null,n.tst=!1,n.ist=!1,n.Ej=!1,n.nst=5e3,n.rst=null,n.est=0,n.ost=!1,n.sst=!1,n.ast=0,n.ust=null,n.hst=0,n.lst=0,n.cst=0,n.fst=[];var r,e=Bt(n.win);return n.m1=e.isIos(),n.eR=e.isSafari(),n.Ye=null,n.vst=!!Bt(n.win).getIosVersionString().startsWith("10.3")||!n.m1&&("amp-carousel-chrome-scroll-snap",r=function(t){var i,n,r,e,o;if(t[ai])return t[ai];t[ai]=d();var s=t[ai];g(s);var a,u=l(l({},null!==(i=t.AMP_CONFIG)&&void 0!==i?i:{}),null!==(n=t.AMP_EXP)&&void 0!==n?n:(a=(null===(r=t.__AMP_EXP)||void 0===r?void 0:r.textContent)||"{}",JSON.parse(a)));for(var h in u){var f=u[h];"number"==typeof f&&f>=0&&f<=1&&(s[h]=Math.random()<f)}var v=null===(e=t.AMP_CONFIG)||void 0===e?void 0:e["allow-doc-opt-in"];if(c(v)&&v.length){var m=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(m)for(var b,x,y=p((null===(b=m.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(x=y()).done;){var w=x.value;v.includes(w)&&(s[w]=!0)}}Object.assign(s,function(t){var i,n="";try{var r;"localStorage"in t&&(n=null!==(r=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==r?r:"")}catch(t){St().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var e,o=(null===(i=n)||void 0===i?void 0:i.split(/\s*,\s*/g))||[],s=d(),a=p(o,!0);!(e=a()).done;){var u=e.value;u&&("-"==u[0]?s[u.substr(1)]=!1:s[u]=!0)}return s}(t));var S=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(c(S)&&S.length)for(var k,j=function(t){var i,n=d();if(!t)return n;for(;i=dt.exec(t);){var r=bt(i[1],i[1]),e=i[2]?bt(i[2].replace(/\+/g," "),i[2]):"";n[r]=e}return n}(t.location.originalHash||t.location.hash),E=p(S,!0);!(k=E()).done;){var O=k.value,M=j["e-".concat(O)];"1"==M&&(s[O]=!0),"0"==M&&(s[O]=!1)}return s}(n.win),!r["amp-carousel-chrome-scroll-snap"]),n.pst=!1,n.Cw=n.Cw.bind(o(n)),n.Cj=null,n.Cd=null,n}var e=r.prototype;return e.isLayoutSupported=function(t){return function(t){return t==q||t==K||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},e.isRelayoutNeeded=function(){return!0},e.Pot=function(){var t,i=this,n=this.element.getAttribute("autoplay");n&&(this.rst=parseInt(n,10),t=b(this.rst),yt().assert(t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.sst&&0!=this.rst&&this.mst(),this.registerAction("toggleAutoplay",(function(t){var n=t.args;n&&void 0!==n.toggleOn?i.oit(n.toggleOn):i.oit(!i.Ej)}),1)},e.dst=function(){var t=this;if(this._o=this.getVsync(),this.Ye=Rt(this.element),this.Ye.addToAllowlist(ui,"goToSlide",["email"]),this.$ot=null!=function(t,i,n){var r=ft(t.style,"scrollSnapType",void 0);if(r)return pt(r)?t.style.getPropertyValue(r):t.style[r]}(this.element),this.vst&&(this.$ot=!1),this.Ant.classList.toggle(B,this.vst),this.$ot){var i=this.win.document.createElement("div");i.classList.add("i-amphtml-carousel-start-marker"),this.Ant.appendChild(i);var n=this.win.document.createElement("div");n.classList.add("i-amphtml-carousel-end-marker"),this.Ant.appendChild(n)}this._7.forEach((function(i,n){var r=i.getAttribute("data-slide-id")||n.toString();t.fst.push(r),_t(t.element).setOwner(i,t.element)})),this.Bot(),this.Ant.addEventListener("scroll",this.op.bind(this)),this.Ant.addEventListener("keydown",this.B5.bind(this)),Yt(this.Ant,"touchmove",this.bst.bind(this),{passive:!0}),Yt(this.Ant,"touchend",this.gst.bind(this),{passive:!0}),this.registerAction("goToSlide",(function(i){var n=i.args;n&&t.goToSlide(n.index,3)}),1)},e.attachedCallback=function(){(function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var e=ni.get(t);if(e||(e=[],ni.set(t,e),ei(r).observe(t)),!e.some((function(t){return t.callback===n&&0===t.type}))){e.push({type:0,callback:n});var o=ri.get(t);o&&setTimeout((function(){return si(0,n,o)}))}}})(this.element,0,this.Cw)},e.detachedCallback=function(){(function(t,i,n){var r=ni.get(t);if(r&&(function(t,i){for(var r=[],e=0,o=0;o<t.length;o++){var s=t[o];(a=s).callback===n&&0===a.type?r.push(s):(e<o&&(t[e]=s),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){ni.delete(t),ri.delete(t);var e=t.ownerDocument.defaultView;e&&ei(e).unobserve(t)}})(this.element,0,this.Cw)},e.isLoopingEligible=function(){return this.Jot>1},e.mutatedAttributesCallback=function(t){var i=t.slide;void 0!==i&&this.goToSlide(i,3)},e.bst=function(){this.xst(),this.Kot=!0},e.viewportCallback=function(t){var i;t?(this.Fj(),null===(i=this.Cd)||void 0===i||i.hintControls()):this.xst()},e.interactionNext=function(){this.Cd.handleNext()},e.interactionPrev=function(){this.Cd.handlePrev()},e.goCallback=function(t,i,n){this.go(t,i,n)},e.go=function(t,i,n){var r=n?1:3;this.moveSlide(t,i,r),n?this.Fj():this.xst()},e.yst=function(t){var i=this;this.qot&&Ct(this.win).cancel(this.qot),this.qot=Ct(this.win).delay((function(){if(i.qot=null,!i.Yot&&!i.Kot){var t=i.Ant.scrollLeft;i.$ot?i.wst(t,1):i.Sst(t,void 0,3)}}),t)},e.gst=function(){var t=this.vst?45:100;this.Kot=!1,this.yst(t)},e.Cw=function(t){this.lst=t.width,this.pst=!0},e.buildCallback=function(){var t=D(this.element),i=t.nextButton,n=t.prevButton,r=t.slideWrappers,e=t.slides,o=t.slidesContainer;this._7=e,this.Ant=o,this.Vot=r,this.Jot=this._7.length,this.tst=this.element.hasAttribute("loop"),this.Ej=this.element.hasAttribute("autoplay"),this.ost=this.tst&&this.isLoopingEligible(),this.sst=this.Ej&&this.isLoopingEligible(),this.Cd=new qt({element:this.element,go:this.go.bind(this),nextButton:i,prevButton:n}),this.Cd.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),this.Pot(),this.dst()},e.layoutCallback=function(){var t,i=this;if(this.Cj=rt(this.element,(function(t){var n=t.isIntersecting;return i.viewportCallback(n)})),"[i-amphtml-scale-animation]",(t=this.element).closest?t.closest("[i-amphtml-scale-animation]"):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,"[i-amphtml-scale-animation]")}(t)})))return $();if(this.pst||(this.lst=this.Ant.clientWidth),null===this.ust)this.kst(this.hst);else{var n=yt().assertNumber(this.ust,"E#19457 this.slideIndex_"),r=this.jst(n);_t(this.element).scheduleLayout(this.element,this._7[n]),this.Ant.scrollLeft=r,this.cst=r}return $()},e.unlayoutCallback=function(){var t;return null===(t=this.Cj)||void 0===t||t.call(this),this.Cj=null,this.ust=null,!0},e.Fot=function(){return this.ost||this.ust>0},e.Uot=function(){return this.ost||this.ust<this._7.length-1},e.moveSlide=function(t,i,n){if(null!==this.ust){var r=this.Uot(),e=this.Fot();if(1==t&&r||-1==t&&e){var o=this.ust+t;if(-1==o?o=this.Jot-1:o>=this.Jot&&(o=0),i){var s=1!=t||e?this.lst:0;this.Sst(s,t,n)}else this.Est(o,n)}}},e.op=function(t){var i=this.Ant.scrollLeft;this.m1||this.eR||this.Ost(i);var n=this.$ot?200:this.m1?45:100;this.yst(n),this.cst=i},e.B5=function(t){var i=t.key;i!=V&&i!=Y||t.stopPropagation()},e.Ost=function(t){var i=this,n=this.Ant.scrollWidth;-1==this.ast&&t>=this.cst||1==this.ast&&t<=this.cst?this.Sst(t).then((function(){i.ast=0})):t<0?this.ast=-1:t+this.lst>n?this.ast=1:this.ast=0},e.Sst=function(t,i,n){var r=this;this.Yot=!0;var e=this.Mst(t)-this.ust,o=this.Fot(),s=o?this.lst:0;return 0!=e||1!=i&&-1!=i||(e=i),1==e||-1!=e&&e==-1*(this.Jot-1)?s=o?2*this.lst:this.lst:-1!=e&&e!=this.Jot-1||(s=0),this.Ast(t,s).then((function(){r.wst(s,n)}))},e.Mst=function(t){if(!t&&!this.lst)return 0;var i=Math.round(t/this.lst),n=0,r=this.Fot(),e=this.Uot();r&&e?n=i-1:e?n=i:r&&(n=i-1);var o=this.ust+n;return this.ost?o<0?this.Jot-1:o>=this.Jot?0:o:o<0?0:o>=this.Jot?this.Jot-1:o},e.getPrevButtonTitle=function(){var t=this.pit(this.ust),i=(null==t?0:t)+1;return G(this.element,{index:String(i),total:String(this.Jot)})},e.getNextButtonTitle=function(){var t=this.vit(this.ust),i=(null==t?this.Jot-1:t)+1;return H(this.element,{index:String(i),total:String(this.Jot)})},e.wst=function(t,i){var n=this;if(b(t)&&null!==this.ust){this.Yot=!0;var r=this.Mst(t);this._o.mutate((function(){n.Est(r,i),n._o.mutate((function(){n.Yot=!1}))}))}},e.goToSlide=function(t,i){var n=parseInt(t,10);!isFinite(n)||n<0||n>=this.Jot?this.user().error(ui,"Invalid [slide] value: ",t):null!==this.ust?this.Est(n,i):this.hst=n},e.pit=function(t){return t-1>=0?t-1:this.ost?this.Jot-1:null},e.vit=function(t){return t+1<this.Jot?t+1:this.ost?0:null},e.kst=function(t){var i,n,r=this,e=this.Jot;if(t<0||t>=e||this.ust==t)return!1;var o=this.pit(t),s=this.vit(t),a=[];return null!=o&&a.push(o),a.push(t),null!=s&&s!==o&&a.push(s),void 0===this._7[t]?(St().error(ui,"Attempting to access a non-existant slide %s / %s",t,e),!1):(a.forEach((function(i,n){r.ost&&vt(r.Vot[i],"order",n+1),r.Vot[i].classList.add(C);var e=_t(r.element);i==t?(e.scheduleLayout(r.element,r._7[i]),e.scheduleResume(r.element,r._7[i]),r._7[i].setAttribute("aria-hidden","false")):(e.schedulePreload(r.element,r._7[i]),r._7[i].setAttribute("aria-hidden","true"))})),this.Ant.scrollLeft=this.jst(t),this.zit(t),this.ust=t,this.rst&&this.ust===this.Jot-1&&(this.est++,this.est==this.rst&&this.zst()),this.Ist(a),null===(i=this.Cd)||void 0===i||i.setControlsState({prev:this.Fot(),next:this.Uot()}),null===(n=this.Cd)||void 0===n||n.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),!0)},e.Est=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.kst(t);if(n){var r="slideChange",e=Vt(this.win,"slidescroll.".concat(r),{"index":t});this.Ye.trigger(this.element,r,e,i),M(this.element,r,{index:t,actionTrust:i})}},e.jst=function(t){var i=this.lst;return(!this.ost&&0==t||this._7.length<=1)&&(i=0),i},e.Ist=function(t){for(var i=this.Jot,n=0;n<i;n++)this.Vot[n].classList.contains(C)&&(t.includes(n)||(this.ost&&vt(this.Vot[n],"order",""),this.Vot[n].classList.remove(C),this._7[n].removeAttribute("aria-hidden")),this.ust!=n&&_t(this.element).schedulePause(this.element,this._7[n]))},e.Ast=function(t,i){var n=this;if(t==i)return $();var r=mt(t,i),e=Wt(.8,0,.6,1),o=this.Ant;return $t.animate(o,(function(t){n.Ant.scrollLeft=r(t)}),80,e).thenAlways()},e.Bot=function(){Yt(this.element,"touchmove",(function(t){return t.stopPropagation()}),{passive:!0})},e.zit=function(t){var i=t-this.ust;if(0!=i){1!==Math.abs(i)&&(i=i<0?1:-1,null===this.ust&&(i=1));var n={"fromSlide":null===this.ust?"null":this.fst[this.ust],"toSlide":this.fst[t]};this.g3("amp-carousel-change",n),1==i?this.g3("amp-carousel-next",n):this.g3("amp-carousel-prev",n)}},e.g3=function(t,i){!function(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];Pt(t).then((function(e){e&&e.triggerEventForTarget(t,i,n,r)}))}(this.element,t,i)},e.mst=function(){var t=Number(this.element.getAttribute("delay"));t>0&&(this.nst=Math.max(1e3,t)),this.tst||(this.element.setAttribute("loop",""),this.ist=!0,this.tst=!0,this.ost=!0)},e.Fj=function(){this.sst&&0!=this.rst&&(this.xst(),this.Qot=Ct(this.win).delay(this.go.bind(this,1,!0,!0),this.nst))},e.oit=function(t){if(t!=this.sst){var i=this.sst;this.Ej=t,this.sst=this.Ej&&this.isLoopingEligible(),!i&&this.sst&&this.mst(),this.sst?this.Fj():this.xst()}},e.xst=function(){null!==this.Qot&&(Ct(this.win).cancel(this.Qot),this.Qot=null)},e.zst=function(){this.xst(),this.ist&&(this.element.removeAttribute("loop"),this.ist=!1,this.tst=!1,this.ost=!1),this.Ej=!1,this.sst=this.Ej&&this.isLoopingEligible()},r}(t.BaseElement),li=function(t){n(r,t);var i=a(r);function r(){return i.apply(this,arguments)}return r.prototype.upgradeCallback=function(){return Z(this.element)?new Qt(this.element):new hi(this.element)},r}(t.BaseElement);t.registerElement("amp-carousel",li,'.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-carousel-0.1.js.map