"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[2041],{7247:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(8481),o=n(6610),a=n(5991),l=n(379),i=n(6070),c=n(7608),u=n(6156),s=n(1320),f=n(7700),d=n.n(f),g=n(8122),p=n(5889),_=n(85),v=n(9881),h=n(3348),m=n(8609);var y=(s.B.insert(".___SBar_1j8s7_gg_{fill:#2bb3ff;transition-property:height,width,y;transition-duration:var(--duration_1j8s7);transition-timing-function:ease-in-out}.___SBar_1j8s7_gg_.__color_1j8s7_gg_{fill:var(--color_1j8s7)}.___SBar_1j8s7_gg_.__hide_1j8s7_gg_{display:none}.___SBackground_1j8s7_gg_{fill:#c4c7cf}","1j8s7_gg_"),{__SBar:"___SBar_1j8s7_gg_","--duration":"--duration_1j8s7",_color:"__color_1j8s7_gg_","--color":"--color_1j8s7",_hide:"__hide_1j8s7_gg_",__SBackground:"___SBackground_1j8s7_gg_"}),b=function(e){(0,l.Z)(f,e);var t,n,u=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)});function f(){return(0,o.Z)(this,f),u.apply(this,arguments)}return(0,a.Z)(f,[{key:"getBackgroundProps",value:function(e,t){var n=this.asProps,r=n.x;return{value:n.data[t][r]}}},{key:"animationBar",value:function(){var e=this.asProps,t=e.duration,n=e.uid,r=(0,g.eR)().selection().selectAll("#".concat(n," rect")),o=r.node();t>0&&o&&"0"!==o.getAttribute("y")&&r.transition().duration(t).attr("y",0)}},{key:"componentDidUpdate",value:function(){this.animationBar()}},{key:"componentDidMount",value:function(){this.animationBar()}},{key:"renderBar",value:function(e,t){var n,o,a,l=this.Element,i=this.asProps,c=i.styles,u=i.color,f=i.x,g=i.y,p=i.y0,_=i.scale,v=i.hide,h=i.offset,y=i.duration,b=i.uid,Z=i.r,E=i.hMin,x=i.width,k=(0,r.Z)(_,2),w=k[0],P=k[1],M=P(Math.max(null!==(o=e[p])&&void 0!==o?o:0,e[g]))+h[1]-(Object.is(e[g],0)?E:0),S=w(e[f])+h[0],B=Math.abs(P(e[g])-Math.min(P(P.domain()[0]),P(null!==(a=e[p])&&void 0!==a?a:0)))||E,R=x||(0,m.bP)(w),j=function(e){var t=e.x,n=e.y,r=e.width,o=e.height,a=e.radius;return o<=a?"":a?"top"===e.position?(0,m.pB)(t,n,r,o,a,!0,!0,!1,!1):(0,m.pB)(t,n,r,o,a,!1,!1,!0,!0):(0,m.pB)(t,n,r,o,a)}({x:S,y:M,width:R,height:B,radius:Array.isArray(Z)?Z[t]:Z,position:e[g]>0||Object.is(e[g],0)?"top":"bottom"});return n=(0,s.B)(c),d().createElement(l,n.cn("SBar",{key:"bar-".concat(t),render:"path",clipPath:"url(#".concat(b,")"),__excludeProps:["data","scale","value"],childrenPosition:"above",value:e,index:t,hide:v,color:u,x:S,y:M,width:R,height:B,d:j,"use:duration":"".concat(y,"ms")}))}},{key:"render",value:function(){var e=this.asProps,t=e.data,n=e.uid,r=e.size,o=e.duration;return d().createElement(d().Fragment,null,t.map(this.renderBar.bind(this)),o&&d().createElement(h.Z,{key:"".concat(n,"-animation"),id:n,x:"0",y:r[1],width:r[0],height:"".concat(r[1],"px")}))}}]),f}(p.w);(0,u.Z)(b,"displayName","Bar"),(0,u.Z)(b,"style",y),(0,u.Z)(b,"enhance",[(0,_.ZP)()]),(0,u.Z)(b,"defaultProps",{offset:[0,0],duration:500,r:2,hMin:4});const Z=(0,v.Z)(b,{Background:function(e){var t,n=e.Element,o=e.styles,a=e.scale,l=e.value,i=(0,r.Z)(a,2),c=i[0],u=i[1].range();return t=(0,s.B)(o),d().createElement(n,t.cn("SBackground",{render:"rect",childrenPosition:"above",width:c.bandwidth(),height:u[0]-u[1],x:c(l),y:u[1]}))}})},8991:(e,t,n)=>{n.d(t,{j:()=>w,v:()=>k});var r=n(8481),o=n(6610),a=n(5991),l=n(3349),i=n(379),c=n(6070),u=n(7608),s=n(6156),f=n(1320),d=n(7700),g=n.n(d),p=n(5889),_=n(9881),v=n(8395),h=n(8609),m=n(749);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var b=(f.B.insert(".___SHoverLine_z4284_gg_{stroke:#a9abb6}.___SHoverRect_z4284_gg_{fill:rgba(196,199,207,.3)}","z4284_gg_"),{__SHoverLine:"___SHoverLine_z4284_gg_",__SHoverRect:"___SHoverRect_z4284_gg_"}),Z=function(e){(0,i.Z)(n,e);var t=y(n);function n(){var e;(0,o.Z)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,s.Z)((0,l.Z)(e),"state",{xIndex:null,yIndex:null}),(0,s.Z)((0,l.Z)(e),"virtualElement",(0,v.default)()?document.createElement("div"):{}),(0,s.Z)((0,l.Z)(e),"handlerMouseMoveRoot",(0,m.Z)((function(t){var n=e.asProps,o=n.eventEmitter,a=n.data,l=n.scale,i=n.x,c=n.y,u=n.rootRef,s=t.clientX,f=t.clientY,d=(0,r.Z)(l,2),g=d[0],p=d[1],_=(0,h.O$)(t,u.current),v=(0,r.Z)(_,2),m=v[0],y=v[1],b=(0,h.U_)(g,m),Z=(0,h.U_)(p,y),E=void 0===i||void 0===b?null:(0,h.rR)(a,g,i,b),x=void 0===c||void 0===Z?null:(0,h.rR)(a,p,c,Z),k={xIndex:E,yIndex:x};e.virtualElement.getBoundingClientRect=e.generateGetBoundingClientRect(s,f),e.virtualElement[h.s.VIRTUAL_ELEMENT]=!0,e.setState(k,(function(){o.emit("onTooltipVisible",null!==E||null!==x,k,e.virtualElement)}))}))),(0,s.Z)((0,l.Z)(e),"handlerMouseLeaveRoot",(0,m.Z)((function(){var t={xIndex:null,yIndex:null};e.setState(t,(function(){e.asProps.eventEmitter.emit("onTooltipVisible",!1,t)}))}))),e}return(0,a.Z)(n,[{key:"generateGetBoundingClientRect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e}}}},{key:"componentDidMount",value:function(){var e=this,t=this.asProps.eventEmitter;this.unsubscribeMouseMoveRoot=t.subscribe("onMouseMoveChart",(function(t){t.persist(),e.handlerMouseMoveRoot(t)})),this.unsubscribeMouseLeaveRoot=t.subscribe("onMouseLeaveChart",this.handlerMouseLeaveRoot)}},{key:"componentWillUnmount",value:function(){this.unsubscribeMouseMoveRoot&&this.unsubscribeMouseMoveRoot(),this.unsubscribeMouseLeaveRoot&&this.unsubscribeMouseLeaveRoot()}}]),n}(p.w);(0,s.Z)(Z,"style",b);var E=function(e){(0,i.Z)(n,e);var t=y(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,o=n.styles,a=n.x,l=n.y,i=n.data,c=n.scale,u=this.state,s=u.xIndex,d=u.yIndex,p=(0,r.Z)(c,2),_=p[0],v=p[1],m=_.range(),y=v.range(),b=null!==s?(0,h.BU)(_,i[s][a]):void 0,Z=null!==d?(0,h.BU)(v,i[d][l]):void 0;return e=(0,f.B)(o),g().createElement(g().Fragment,null,null!==s?g().createElement(t,e.cn("SHoverLine",{render:"line",index:s,x1:b,y1:y[0],x2:b,y2:y[1]})):null,null!==d?g().createElement(t,e.cn("SHoverLine",{render:"line",index:d,x1:m[0],y1:Z,x2:m[1],y2:Z})):null)}}]),n}(Z);(0,s.Z)(E,"displayName","HoverLine");var x=function(e){(0,i.Z)(n,e);var t=y(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,o=n.styles,a=n.x,l=n.y,i=n.data,c=n.scale,u=this.state,s=u.xIndex,d=u.yIndex,p=(0,r.Z)(c,2),_=p[0],v=p[1],h=_.range(),m=v.range();return e=(0,f.B)(o),g().createElement(g().Fragment,null,null!==s?g().createElement(t,e.cn("SHoverRect",{render:"rect",index:s,width:_.step()-_.paddingInner()/2,height:m[0]-m[1],x:_(i[s][a])-_.step()*_.paddingInner()/2,y:m[1]})):null,null!==d?g().createElement(t,e.cn("SHoverRect",{render:"rect",index:d,width:h[1]-h[0],height:v.step()-v.paddingInner()/2,x:h[0],y:v(i[d][l])-v.step()*v.paddingInner()/2})):null)}}]),n}(Z);(0,s.Z)(x,"displayName","HoverRect");var k=(0,_.Z)(E),w=(0,_.Z)(x)},6961:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(1253),o=n(6610),a=n(5991),l=n(3349),i=n(379),c=n(6070),u=n(7608),s=n(6156),f=n(1320),d=n(1042),g=n(7700),p=n.n(g),_=n(5889),v=n(9013),h=n(2099),m=n(6193),y=n(8609),b=n(9881),Z=n(8266),E=["Children","children","tag"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=(f.B.insert(".___STooltip_1lzve_gg_{font-size:12px;line-height:1.33;position:relative;background-color:#fff;border-radius:6px;border:1px solid #e0e1e9;box-sizing:border-box;box-shadow:0px 1px 12px 0px rgba(25, 27, 35, 0.15);padding:12px}.___STitle_1lzve_gg_{color:#6c6e79;margin-bottom:8px}.___SDotGroup_1lzve_gg_{display:flex;align-items:center}.___SDot_1lzve_gg_{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#2bb3ff}.___SDot_1lzve_gg_.__color_1lzve_gg_{background:var(--color_1lzve)}","1lzve_gg_"),{__STooltip:"___STooltip_1lzve_gg_",__STitle:"___STitle_1lzve_gg_",__SDotGroup:"___SDotGroup_1lzve_gg_",__SDot:"___SDot_1lzve_gg_",_color:"__color_1lzve_gg_","--color":"--color_1lzve"}),P=function(e){(0,i.Z)(g,e);var t,n,f=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function g(){var e;(0,o.Z)(this,g);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=f.call.apply(f,[this].concat(n)),(0,s.Z)((0,l.Z)(e),"state",{$visible:!1}),(0,s.Z)((0,l.Z)(e),"handlerCancel",(function(){return!1})),e}return(0,a.Z)(g,[{key:"getTriggerProps",value:function(){var e=this.asProps;return{x:e.x,y:e.y}}},{key:"getPopperProps",value:function(){return k({},this.state)}},{key:"componentDidMount",value:function(){var e=this,t=this.asProps,n=t.eventEmitter,r=t.rootRef;this.unsubscribeTooltipVisible=n.subscribe("onTooltipVisible",(function(t,n,o){e.setState(k(k({},n),{},{$visible:t}),(function(){var t;o&&(o[y.s.VIRTUAL_ELEMENT]||r.current.contains(o))&&(null==e||e.setPopperTrigger(o),null===(t=e.popper.current)||void 0===t||t.update())}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeTooltipVisible&&this.unsubscribeTooltipVisible()}},{key:"render",value:function(){var e=this.asProps,t=this,n=this.asProps,o=n.Children,a=n.children,l=n.tag,i=(0,r.Z)(n,E),c=!!(0,m.ZP)(o,[M.Trigger.displayName,M.Popper.displayName]);return p().createElement(v.Z,(0,d.assignProps)({visible:this.state.$visible,onFirstUpdate:this.handlerCancel,onOutsideClick:this.handlerCancel,interaction:"none",offset:8,flip:{allowedAutoPlacements:["left","right"]}},e),(function(e){var n,r=e.popper,u=e.setTrigger;return t.setPopperTrigger=u,t.popper=r,null===(n=t.popper.current)||void 0===n||n.update(),c?p().createElement(o,null):p().createElement(p().Fragment,null,l&&p().createElement(M.Trigger,{tag:l}),p().createElement(M.Popper,i,a))}))}}]),g}(_.w);(0,s.Z)(P,"displayName","Tooltip"),(0,s.Z)(P,"style",w);var M=(0,b.Z)(P,{Trigger:v.Z.Trigger,Popper:function(e){var t,n=e.Element,r=e.styles,o=e.$visible,a=e.x,l=e.y,i=(0,g.useCallback)((function(){return!1}),[]);return o?(t=(0,f.B)(r),p().createElement(n,t.cn("STooltip",{render:v.Z.Popper,childrenPosition:"inside",onMouseMove:i,x:a,y:l}))):null},Title:function(e){var t,n=arguments[0],r=h.Z,o=e.styles;return t=(0,f.B)(o),p().createElement(r,t.cn("STitle",k({},(0,d.assignProps)({__excludeProps:["data","scale"]},n))))},Footer:function(){return null},Dot:function(e){var t,n=arguments[0],r=e.styles,o=e.color,a=e.Children,l=h.Z,i=h.Z;return t=(0,f.B)(r),p().createElement(l,t.cn("SDotGroup",k({},(0,d.assignProps)({__excludeProps:["data","scale"]},n))),p().createElement(i,t.cn("SDot",{color:(0,Z.ZP)(o)})),p().createElement(a,t.cn("Children",{})))}});const S=M},1655:(e,t,n)=>{n.d(t,{O:()=>r});var r={"blue-01":"#c4e5fe","blue-02":"#8ecdff","blue-03":"#2bb3ff","blue-04":"#008ff8","blue-05":"#006dca","green-01":"#9ef2c9","green-02":"#59ddaa","green-03":"#00c192","green-04":"#009f81","green-05":"#007c65","orange-01":"#ffdca2","orange-02":"#ffb26e","orange-03":"#ff8c43","orange-04":"#ff622d","orange-05":"#c33909","pink-01":"#ffd3ff","pink-02":"#ffa9fa","pink-03":"#f67cf2","pink-04":"#e14adf","pink-05":"#b229b9","violet-01":"#edd9ff","violet-02":"#dcb8ff","violet-03":"#c695ff","violet-04":"#ab6cfe","violet-05":"#8649e1","red-01":"#ffd7df","red-02":"#ffaeb5","red-03":"#ff8786","red-04":"#ff4953","red-05":"#d1002f","yellow-01":"#fce081","yellow-02":"#fdc23c","yellow-03":"#ef9800","yellow-04":"#d87900","yellow-05":"#a75800","salad-01":"#c7ee96","salad-02":"#9bd85d","salad-03":"#66c030","salad-04":"#35a21e","salad-05":"#0a7e22","gray-01":"#c4c7cf","gray-50":"#f4f5f9","gray-100":"#e0e1e9","gray-200":"#c4c7cf","gray-300":"#a9abb6","gray-400":"#8a8e9b","gray-500":"#6c6e79","gray-600":"#484a54","gray-700":"#2b2e38","gray-800":"#191b23","blue-50":"#e9f7ff","blue-100":"#c4e5fe","blue-200":"#8ecdff","blue-300":"#2bb3ff","blue-400":"#008ff8","blue-500":"#006dca","blue-600":"#044792","blue-700":"#002b5f","blue-800":"#001b3d","green-100":"#9ef2c9","green-200":"#59ddaa","green-300":"#00c192","green-400":"#009f81","green-50":"#dbfee8","green-500":"#007c65","green-600":"#055345","green-700":"#00342d","green-800":"#00201e","salad-100":"#c7ee96","salad-200":"#9bd85d","salad-300":"#66c030","salad-400":"#35a21e","salad-50":"#ecfbcd","salad-500":"#0a7e22","salad-600":"#005613","salad-700":"#003509","salad-800":"#002203","orange-50":"#fff3d9","orange-100":"#ffdca2","orange-200":"#ffb26e","orange-300":"#ff8c43","orange-400":"#ff622d","orange-500":"#c33909","orange-600":"#8b1500","orange-700":"#551200","orange-800":"#351000","yellow-100":"#fce081","yellow-200":"#fdc23c","yellow-300":"#ef9800","yellow-400":"#d87900","yellow-50":"#fdf7c8","yellow-500":"#a75800","yellow-600":"#743a00","yellow-700":"#462500","yellow-800":"#2c1600","red-100":"#ffd7df","red-200":"#ffaeb5","red-300":"#ff8786","red-400":"#ff4953","red-50":"#fff0f7","red-500":"#d1002f","red-600":"#8e0016","red-700":"#58000a","red-800":"#410101","pink-100":"#ffd3ff","pink-200":"#ffa9fa","pink-300":"#f67cf2","pink-400":"#e14adf","pink-50":"#fff0ff","pink-500":"#b229b9","pink-600":"#7d0480","pink-700":"#4d0050","pink-800":"#340439","violet-100":"#edd9ff","violet-200":"#dcb8ff","violet-300":"#c695ff","violet-400":"#ab6cfe","violet-50":"#f9f2ff","violet-500":"#8649e1","violet-600":"#5925ab","violet-700":"#421984","violet-800":"#220358"};Object.keys(r).sort((function(e,t){return parseInt(e.match(/[0-9]/g).join(""),10)-parseInt(t.match(/[0-9]/g).join(""),10)}))},6309:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(8481),o=n(5558),a=n.n(o),l=n(4239),i=n(941),c=n(1946),u=n(5694),s=n(3025),f=n(2770),d=n(9453),g=n.n(d),p=n(3210),_=n.n(p),v=n(2122),h=n(1253),m=n(4907),y=n(4062),b=["title","children","visible","onClose","onSave","onCancel"];const Z=function(e){var t=e.title,n=e.children,r=e.visible,o=e.onClose,l=e.onSave,i=e.onCancel,c=(0,h.Z)(e,b);return a().createElement(m.Z,(0,v.Z)({visible:r,onClose:o},c),a().createElement(m.Z.Close,null),a().createElement(m.Z.Header,null,a().createElement(m.Z.Title,null,t)),a().createElement(m.Z.Body,null,n),a().createElement(m.Z.Footer,{justifyContent:"center",pt:2},a().createElement(y.Z,{onClick:function(e){null==o||o(e),null==i||i()}},"Cancel"),a().createElement(y.Z,{use:"primary",ml:2,onClick:function(e){null==o||o(e),null==l||l()}},"Save")))};var E=n(3379),x=n.n(E),k=n(7795),w=n.n(k),P=n(569),M=n.n(P),S=n(3565),B=n.n(S),R=n(9216),j=n.n(R),O=n(4589),T=n.n(O),C=n(809),I={};I.styleTagTransform=T(),I.setAttributes=B(),I.insert=M().bind(null,"head"),I.domAPI=w(),I.insertStyleElement=j(),x()(C.Z,I);const z=C.Z&&C.Z.locals?C.Z.locals:void 0,D=function(e){var t=e.children,n=e.id,d=e.disablePortals,p=(0,u.useDispatch)();_()(n,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}));var v=(0,o.useState)(!1),h=(0,r.Z)(v,2),m=h[0],y=h[1];return a().createElement(a().Fragment,null,a().createElement(l.Z,{disablePortal:!0,placement:"bottom-end"},a().createElement(l.Z.Trigger,{className:z.close},a().createElement(i.Z,{interactive:!0,color:"gray-300"})),a().createElement(l.Z.Menu,null,a().createElement(l.Z.Item,{onClick:function(){return y(!0)}},a().createElement(c.Z,{ml:3}),a().createElement(s.Z,{ml:3,mr:3},"Edit")),a().createElement(l.Z.Item,{onClick:function(){p({type:g().REMOVE_LAYOUT,payload:n}),p({type:g().REMOVE_FROM_WIDGETS_MAP,payload:n})}},a().createElement(f.Z,{ml:3}),a().createElement(s.Z,{ml:3,mr:3},"Delete")))),a().createElement(Z,{disablePortal:d,visible:m,onClose:function(){return y(!1)}},t))}},2041:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(8481),o=n(5558),a=n.n(o),l=n(6318),i=n(996),c=n(9722),u=n(6961),s=n(8991),f=n(1655),d=n(7247),g=n(5046),p=n(1974),_=n(7708),v=n(3025),h=n(6309);const m=function(e){var t=e.id,n=(0,o.useState)(Array(5).fill({}).map((function(e,t){return{category:"Category ".concat(t),bar1:10*Math.random(),bar2:10*-Math.random()}}))),m=(0,r.Z)(n,2),y=m[0],b=(m[1],(0,o.useState)([0,0])),Z=(0,r.Z)(b,2),E=(0,r.Z)(Z[0],2),x=E[0],k=E[1],w=Z[1],P=(0,g.Z)().range([40,x-40]).domain(y.map((function(e){return e.category}))).paddingInner(.4).paddingOuter(.2),M=(0,p.Z)().range([k-40,40]).domain([-10,10]);return a().createElement(l.Z,{h:"100%",onResize:w},a().createElement(i.Z,{data:y,scale:[P,M],width:x,height:k},a().createElement(c.B,null,a().createElement(c.B.Ticks,null),a().createElement(c.B.Grid,null)),a().createElement(c.K,null,a().createElement(c.K.Ticks,null)),a().createElement(u.Z,{tag:s.j,x:"category",wMin:100},(function(e){var t=e.xIndex;return{children:"number"==typeof t&&a().createElement(a().Fragment,null,a().createElement(u.Z.Title,null,y[t].category),a().createElement(_.Z,{justifyContent:"space-between"},a().createElement(u.Z.Dot,{mr:4,color:f.O["green-02"]},"Positive"),a().createElement(v.Z,{bold:!0},y[t].bar1)),a().createElement(_.Z,{justifyContent:"space-between",mt:2},a().createElement(u.Z.Dot,{mr:4,color:f.O["orange-04"]},"Negative"),a().createElement(v.Z,{bold:!0},y[t].bar2)))}})),a().createElement(d.Z,{x:"category",y:"bar1",color:f.O["green-02"]}),a().createElement(d.Z,{x:"category",y:"bar2",color:f.O["orange-04"]}),a().createElement(c.K,{position:0})),a().createElement(h.Z,{id:t}))}},809:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),o=n.n(r),a=n(3645),l=n.n(a)()(o());l.push([e.id,".FQUEjMIlb2iWc45jwqp1{padding:8px;position:absolute;right:0;top:4;color:var(--gray-300)}.FQUEjMIlb2iWc45jwqp1:hover{color:var(--gray-400) !important}",""]),l.locals={close:"FQUEjMIlb2iWc45jwqp1"};const i=l},5046:(e,t,n)=>{function r(e,t,n){e=+e,t=+t,n=(o=arguments.length)<2?(t=e,e=0,1):o<3?1:+n;for(var r=-1,o=0|Math.max(0,Math.ceil((t-e)/n)),a=new Array(o);++r<o;)a[r]=e+r*n;return a}n.d(t,{Z:()=>i});var o=n(8348);const a=Symbol("implicit");function l(){var e=new Map,t=[],n=[],r=a;function i(o){var l=o+"",i=e.get(l);if(!i){if(r!==a)return r;e.set(l,i=t.push(o))}return n[(i-1)%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;for(const r of n){const n=r+"";e.has(n)||e.set(n,t.push(r))}return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return l(t,n).unknown(r)},o.o.apply(i,arguments),i}function i(){var e,t,n=l().unknown(void 0),a=n.domain,c=n.range,u=0,s=1,f=!1,d=0,g=0,p=.5;function _(){var n=a().length,o=s<u,l=o?s:u,i=o?u:s;e=(i-l)/Math.max(1,n-d+2*g),f&&(e=Math.floor(e)),l+=(i-l-e*(n-d))*p,t=e*(1-d),f&&(l=Math.round(l),t=Math.round(t));var _=r(n).map((function(t){return l+e*t}));return c(o?_.reverse():_)}return delete n.unknown,n.domain=function(e){return arguments.length?(a(e),_()):a()},n.range=function(e){return arguments.length?([u,s]=e,u=+u,s=+s,_()):[u,s]},n.rangeRound=function(e){return[u,s]=e,u=+u,s=+s,f=!0,_()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(f=!!e,_()):f},n.padding=function(e){return arguments.length?(d=Math.min(1,g=+e),_()):d},n.paddingInner=function(e){return arguments.length?(d=Math.min(1,e),_()):d},n.paddingOuter=function(e){return arguments.length?(g=+e,_()):g},n.align=function(e){return arguments.length?(p=Math.max(0,Math.min(1,e)),_()):p},n.copy=function(){return i(a(),[u,s]).round(f).paddingInner(d).paddingOuter(g).align(p)},o.o.apply(_(),arguments)}}}]);