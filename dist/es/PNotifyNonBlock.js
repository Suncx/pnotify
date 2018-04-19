import PNotify from"./PNotify.js";function data(){return Object.assign({_notice:null,_options:{}},PNotify.modules.NonBlock.defaults)}var methods={initModule(t){this.set(t),this.doNonBlockClass()},update(){this.doNonBlockClass()},doNonBlockClass(){this.get().nonblock?this.get()._notice.addModuleClass("nonblock"):this.get()._notice.removeModuleClass("nonblock")}};function setup(t){t.key="NonBlock",t.defaults={nonblock:!1},t.init=(o=>new t({target:document.body,data:{_notice:o}})),PNotify.modules.NonBlock=t}function create_main_fragment(t,o){return{c:noop,m:noop,p:noop,u:noop,d:noop}}function PNotifyNonBlock(t){init(this,t),this._state=assign(data(),t.data),this._fragment=create_main_fragment(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}function noop(){}function init(t,o){t._handlers=blankObject(),t._bind=o._bind,t.options=o,t.root=o.root||t,t.store=t.root.store||o.store}function assign(t,o){for(var n in o)t[n]=o[n];return t}function destroy(t){this.destroy=noop,this.fire("destroy"),this.set=this.get=noop,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function get(){return this._state}function fire(t,o){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var e=0;e<n.length;e+=1){var i=n[e];i.__calling||(i.__calling=!0,i.call(this,o),i.__calling=!1)}}function on(t,o){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(o),{cancel:function(){var t=n.indexOf(o);~t&&n.splice(t,1)}}}function set(t){this._set(assign({},t)),this.root._lock||(this.root._lock=!0,callAll(this.root._beforecreate),callAll(this.root._oncreate),callAll(this.root._aftercreate),this.root._lock=!1)}function _set(t){var o=this._state,n={},e=!1;for(var i in t)this._differs(t[i],o[i])&&(n[i]=e=!0);e&&(this._state=assign(assign({},o),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:o}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:o})))}function _mount(t,o){this._fragment[this._fragment.i?"i":"m"](t,o||null)}function _unmount(){this._fragment&&this._fragment.u()}function _differs(t,o){return t!=t?o==o:t!==o||t&&"object"==typeof t||"function"==typeof t}function blankObject(){return Object.create(null)}function callAll(t){for(;t&&t.length;)t.shift()()}assign(PNotifyNonBlock.prototype,{destroy:destroy,get:get,fire:fire,on:on,set:set,_set:_set,_mount:_mount,_unmount:_unmount,_differs:_differs}),assign(PNotifyNonBlock.prototype,methods),PNotifyNonBlock.prototype._recompute=noop,setup(PNotifyNonBlock);export default PNotifyNonBlock;
//# sourceMappingURL=PNotifyNonBlock.js.map