import PNotify from"./PNotify.js";let _open=PNotify.prototype.open,_close=PNotify.prototype.close;const callbacks=(t,e,o)=>{let s=t?t.get().modules:e.modules,i=s&&s.Callbacks?s.Callbacks:{};return i[o]?i[o]:()=>!0};function setup(t){t.key="Callbacks",t.getCallbacks=callbacks;let e=PNotify.alert,o=PNotify.notice,s=PNotify.info,i=PNotify.success,n=PNotify.error,a=(t,e)=>{callbacks(null,e,"beforeInit")(e);let o=t(e);return callbacks(o,null,"afterInit")(o),o};PNotify.alert=(t=>a(e,t)),PNotify.notice=(t=>a(o,t)),PNotify.info=(t=>a(s,t)),PNotify.success=(t=>a(i,t)),PNotify.error=(t=>a(n,t)),PNotify.modules.Callbacks=t}function create_main_fragment(t,e){return{c:noop,m:noop,p:noop,u:noop,d:noop}}function PNotifyCallbacks(t){init(this,t),this._state=assign({},t.data),this._fragment=create_main_fragment(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}function noop(){}function init(t,e){t._handlers=blankObject(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function assign(t,e){for(var o in e)t[o]=e[o];return t}function destroy(t){this.destroy=noop,this.fire("destroy"),this.set=this.get=noop,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function get(){return this._state}function fire(t,e){var o=t in this._handlers&&this._handlers[t].slice();if(o)for(var s=0;s<o.length;s+=1){var i=o[s];i.__calling||(i.__calling=!0,i.call(this,e),i.__calling=!1)}}function on(t,e){var o=this._handlers[t]||(this._handlers[t]=[]);return o.push(e),{cancel:function(){var t=o.indexOf(e);~t&&o.splice(t,1)}}}function set(t){this._set(assign({},t)),this.root._lock||(this.root._lock=!0,callAll(this.root._beforecreate),callAll(this.root._oncreate),callAll(this.root._aftercreate),this.root._lock=!1)}function _set(t){var e=this._state,o={},s=!1;for(var i in t)this._differs(t[i],e[i])&&(o[i]=s=!0);s&&(this._state=assign(assign({},e),t),this._recompute(o,this._state),this._bind&&this._bind(o,this._state),this._fragment&&(this.fire("state",{changed:o,current:this._state,previous:e}),this._fragment.p(o,this._state),this.fire("update",{changed:o,current:this._state,previous:e})))}function _mount(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}function _unmount(){this._fragment&&this._fragment.u()}function _differs(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function blankObject(){return Object.create(null)}function callAll(t){for(;t&&t.length;)t.shift()()}PNotify.prototype.open=function(...t){!1!==callbacks(this,null,"beforeOpen")(this)&&(_open.apply(this,t),callbacks(this,null,"afterOpen")(this))},PNotify.prototype.close=function(t,...e){!1!==callbacks(this,null,"beforeClose")(this,t)&&(_close.apply(this,[t,...e]),callbacks(this,null,"afterClose")(this,t))},assign(PNotifyCallbacks.prototype,{destroy:destroy,get:get,fire:fire,on:on,set:set,_set:_set,_mount:_mount,_unmount:_unmount,_differs:_differs}),PNotifyCallbacks.prototype._recompute=noop,setup(PNotifyCallbacks);export default PNotifyCallbacks;
//# sourceMappingURL=PNotifyCallbacks.js.map