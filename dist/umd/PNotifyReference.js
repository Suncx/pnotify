!function(t,e){if("function"==typeof define&&define.amd)define("PNotifyReference",["exports","PNotify"],e);else if("undefined"!=typeof exports)e(exports,require("./PNotify"));else{var n={};e(n,t.PNotify),t.PNotifyReference=n}}(this,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=e)&&n.__esModule?n:{default:n};var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};var o,f={initModule:function(t){var e=this;this.set(t);var n=this.get()._notice;n.on("mouseenter",function(){return e.set({_mouseIsIn:!0})}),n.on("mouseleave",function(){return e.set({_mouseIsIn:!1})})},doSomething:function(){var t=0,e=this.get()._notice,n=setInterval(function(){360===(t+=10)&&(t=0,clearInterval(n)),e.refs.elem.style.transform="rotate("+t+"deg)"},20)},update:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},beforeDestroy:function(){},afterDestroy:function(){}};function a(n,t){var i,o=t.putThing&&u(n,t);return{c:function(){o&&o.c(),i=document.createComment("")},m:function(t,e){o&&o.m(t,e),p(i,t,e)},p:function(t,e){e.putThing?o?o.p(t,e):((o=u(n,e)).c(),o.m(i.parentNode,i)):o&&(o.u(),o.d(),o=null)},u:function(){o&&o.u(),g(i)},d:function(){o&&o.d()}}}function u(n,i){var o,r,s,f,a,u,c,l,h=i.labels.text;function d(t){n.doSomething()}return{c:function(){o=_("button"),r=_("i"),f=y(" "),a=y(h),c=y("\n  \n  "),l=_("div"),this.h()},h:function(){var t,e;r.className=s=i._notice.get()._icons.athing+" svelte-1qy4b0e",t="click",e=d,o.addEventListener(t,e,!1),o.className="ui-pnotify-reference-button btn btn-default svelte-1qy4b0e",o.type="button",o.disabled=u=!i._mouseIsIn,l.className="ui-pnotify-reference-clearing svelte-1qy4b0e"},m:function(t,e){p(o,t,e),m(r,o),m(f,o),m(a,o),n.refs.thingElem=o,p(c,t,e),p(l,t,e)},p:function(t,e){t._notice&&s!==(s=e._notice.get()._icons.athing+" svelte-1qy4b0e")&&(r.className=s),t.labels&&h!==(h=e.labels.text)&&(a.data=h),t._mouseIsIn&&u!==(u=!e._mouseIsIn)&&(o.disabled=u)},u:function(){g(o),g(c),g(l)},d:function(){var t,e;t="click",e=d,o.removeEventListener(t,e,!1),n.refs.thingElem===o&&(n.refs.thingElem=null)}}}function c(t){var e,n,i;n=t,(e=this)._handlers=Object.create(null),e._bind=n._bind,e.options=n,e.root=n.root||e,e.store=e.root.store||n.store,this.refs={},this._state=l(s({_notice:null,_options:{},_mouseIsIn:!1},r.default.modules.Reference.defaults),t.data),document.getElementById("svelte-1qy4b0e-style")||((i=_("style")).id="svelte-1qy4b0e-style",i.textContent=".ui-pnotify-reference-button.svelte-1qy4b0e{float:right}.ui-pnotify-reference-clearing.svelte-1qy4b0e{clear:right;line-height:0}",m(i,document.head));var o=this;t.root||(this._oncreate=[]),this._fragment=a(this,this._state),this.root._oncreate.push(function(){(function(){this.fire("init",{module:this})}).call(o),o.fire("update",{changed:{putThing:1,_mouseIsIn:1,_notice:1,labels:1},current:o._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),h(this._oncreate))}function _(t){return document.createElement(t)}function m(t,e){e.appendChild(t)}function p(t,e,n){e.insertBefore(t,n)}function g(t){t.parentNode.removeChild(t)}function y(t){return document.createTextNode(t)}function l(t,e){for(var n in e)t[n]=e[n];return t}function h(t){for(;t&&t.length;)t.shift()()}function d(){}l(c.prototype,{destroy:function(t){this.destroy=d,this.fire("destroy"),this.set=this.get=d,!1!==t&&this._fragment.u();this._fragment.d(),this._fragment=this._state=null},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(!n)return;for(var i=0;i<n.length;i+=1){var o=n[i];o.__calling||(o.__calling=!0,o.call(this,e),o.__calling=!1)}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){if(this._set(l({},t)),this.root._lock)return;this.root._lock=!0,h(this.root._beforecreate),h(this.root._oncreate),h(this.root._aftercreate),this.root._lock=!1},_set:function(t){var e=this._state,n={},i=!1;for(var o in t)this._differs(t[o],e[o])&&(n[o]=i=!0);if(!i)return;this._state=l(l({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state);this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e}))},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"===(void 0===t?"undefined":i(t))||"function"==typeof t}}),l(c.prototype,f),c.prototype._recompute=d,(o=c).key="Reference",o.defaults={putThing:!1,labels:{text:"Spin Around"}},r.default.modules.Reference=o,r.default.modulesAppendContainer.push(o),s(r.default.icons.brighttheme,{athing:"bt-icon bt-icon-refresh"}),s(r.default.icons.bootstrap3,{athing:"glyphicon glyphicon-refresh"}),s(r.default.icons.fontawesome4,{athing:"fa fa-refresh"}),s(r.default.icons.fontawesome5,{athing:"fas fa-sync"}),r.default.icons.material||(r.default.icons.material={}),s(r.default.icons.material,{athing:"material-icons pnotify-material-icon-refresh"}),t.default=c});
//# sourceMappingURL=PNotifyReference.js.map