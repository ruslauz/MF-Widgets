"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[2573],{7247:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(8481),o=n(6610),i=n(5991),a=n(379),l=n(6070),c=n(7608),u=n(6156),s=n(1320),d=n(7700),p=n.n(d),_=n(8122),g=n(5889),f=n(85),h=n(9881),v=n(3348),m=n(8609);var y=(s.B.insert(".___SBar_1j8s7_gg_{fill:#2bb3ff;transition-property:height,width,y;transition-duration:var(--duration_1j8s7);transition-timing-function:ease-in-out}.___SBar_1j8s7_gg_.__color_1j8s7_gg_{fill:var(--color_1j8s7)}.___SBar_1j8s7_gg_.__hide_1j8s7_gg_{display:none}.___SBackground_1j8s7_gg_{fill:#c4c7cf}","1j8s7_gg_"),{__SBar:"___SBar_1j8s7_gg_","--duration":"--duration_1j8s7",_color:"__color_1j8s7_gg_","--color":"--color_1j8s7",_hide:"__hide_1j8s7_gg_",__SBackground:"___SBackground_1j8s7_gg_"}),Z=function(e){(0,a.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function d(){return(0,o.Z)(this,d),u.apply(this,arguments)}return(0,i.Z)(d,[{key:"getBackgroundProps",value:function(e,t){var n=this.asProps,r=n.x;return{value:n.data[t][r]}}},{key:"animationBar",value:function(){var e=this.asProps,t=e.duration,n=e.uid,r=(0,_.eR)().selection().selectAll("#".concat(n," rect")),o=r.node();t>0&&o&&"0"!==o.getAttribute("y")&&r.transition().duration(t).attr("y",0)}},{key:"componentDidUpdate",value:function(){this.animationBar()}},{key:"componentDidMount",value:function(){this.animationBar()}},{key:"renderBar",value:function(e,t){var n,o,i,a=this.Element,l=this.asProps,c=l.styles,u=l.color,d=l.x,_=l.y,g=l.y0,f=l.scale,h=l.hide,v=l.offset,y=l.duration,Z=l.uid,b=l.r,E=l.hMin,x=l.width,P=(0,r.Z)(f,2),M=P[0],S=P[1],B=S(Math.max(null!==(o=e[g])&&void 0!==o?o:0,e[_]))+v[1]-(Object.is(e[_],0)?E:0),R=M(e[d])+v[0],k=Math.abs(S(e[_])-Math.min(S(S.domain()[0]),S(null!==(i=e[g])&&void 0!==i?i:0)))||E,w=x||(0,m.bP)(M),j=function(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=e.radius;return o<=i?"":i?"top"===e.position?(0,m.pB)(t,n,r,o,i,!0,!0,!1,!1):(0,m.pB)(t,n,r,o,i,!1,!1,!0,!0):(0,m.pB)(t,n,r,o,i)}({x:R,y:B,width:w,height:k,radius:Array.isArray(b)?b[t]:b,position:e[_]>0||Object.is(e[_],0)?"top":"bottom"});return n=(0,s.B)(c),p().createElement(a,n.cn("SBar",{key:"bar-".concat(t),render:"path",clipPath:"url(#".concat(Z,")"),__excludeProps:["data","scale","value"],childrenPosition:"above",value:e,index:t,hide:h,color:u,x:R,y:B,width:w,height:k,d:j,"use:duration":"".concat(y,"ms")}))}},{key:"render",value:function(){var e=this.asProps,t=e.data,n=e.uid,r=e.size,o=e.duration;return p().createElement(p().Fragment,null,t.map(this.renderBar.bind(this)),o&&p().createElement(v.Z,{key:"".concat(n,"-animation"),id:n,x:"0",y:r[1],width:r[0],height:"".concat(r[1],"px")}))}}]),d}(g.w);(0,u.Z)(Z,"displayName","Bar"),(0,u.Z)(Z,"style",y),(0,u.Z)(Z,"enhance",[(0,f.ZP)()]),(0,u.Z)(Z,"defaultProps",{offset:[0,0],duration:500,r:2,hMin:4});const b=(0,h.Z)(Z,{Background:function(e){var t,n=e.Element,o=e.styles,i=e.scale,a=e.value,l=(0,r.Z)(i,2),c=l[0],u=l[1].range();return t=(0,s.B)(o),p().createElement(n,t.cn("SBackground",{render:"rect",childrenPosition:"above",width:c.bandwidth(),height:u[0]-u[1],x:c(a),y:u[1]}))}})},8991:(e,t,n)=>{n.d(t,{j:()=>M,v:()=>P});var r=n(8481),o=n(6610),i=n(5991),a=n(3349),l=n(379),c=n(6070),u=n(7608),s=n(6156),d=n(1320),p=n(7700),_=n.n(p),g=n(5889),f=n(9881),h=n(8395),v=n(8609),m=n(749);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var Z=(d.B.insert(".___SHoverLine_z4284_gg_{stroke:#a9abb6}.___SHoverRect_z4284_gg_{fill:rgba(196,199,207,.3)}","z4284_gg_"),{__SHoverLine:"___SHoverLine_z4284_gg_",__SHoverRect:"___SHoverRect_z4284_gg_"}),b=function(e){(0,l.Z)(n,e);var t=y(n);function n(){var e;(0,o.Z)(this,n);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return e=t.call.apply(t,[this].concat(l)),(0,s.Z)((0,a.Z)(e),"state",{xIndex:null,yIndex:null}),(0,s.Z)((0,a.Z)(e),"virtualElement",(0,h.default)()?document.createElement("div"):{}),(0,s.Z)((0,a.Z)(e),"handlerMouseMoveRoot",(0,m.Z)((function(t){var n=e.asProps,o=n.eventEmitter,i=n.data,a=n.scale,l=n.x,c=n.y,u=n.rootRef,s=t.clientX,d=t.clientY,p=(0,r.Z)(a,2),_=p[0],g=p[1],f=(0,v.O$)(t,u.current),h=(0,r.Z)(f,2),m=h[0],y=h[1],Z=(0,v.U_)(_,m),b=(0,v.U_)(g,y),E=void 0===l||void 0===Z?null:(0,v.rR)(i,_,l,Z),x=void 0===c||void 0===b?null:(0,v.rR)(i,g,c,b),P={xIndex:E,yIndex:x};e.virtualElement.getBoundingClientRect=e.generateGetBoundingClientRect(s,d),e.virtualElement[v.s.VIRTUAL_ELEMENT]=!0,e.setState(P,(function(){o.emit("onTooltipVisible",null!==E||null!==x,P,e.virtualElement)}))}))),(0,s.Z)((0,a.Z)(e),"handlerMouseLeaveRoot",(0,m.Z)((function(){var t={xIndex:null,yIndex:null};e.setState(t,(function(){e.asProps.eventEmitter.emit("onTooltipVisible",!1,t)}))}))),e}return(0,i.Z)(n,[{key:"generateGetBoundingClientRect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e}}}},{key:"componentDidMount",value:function(){var e=this,t=this.asProps.eventEmitter;this.unsubscribeMouseMoveRoot=t.subscribe("onMouseMoveChart",(function(t){t.persist(),e.handlerMouseMoveRoot(t)})),this.unsubscribeMouseLeaveRoot=t.subscribe("onMouseLeaveChart",this.handlerMouseLeaveRoot)}},{key:"componentWillUnmount",value:function(){this.unsubscribeMouseMoveRoot&&this.unsubscribeMouseMoveRoot(),this.unsubscribeMouseLeaveRoot&&this.unsubscribeMouseLeaveRoot()}}]),n}(g.w);(0,s.Z)(b,"style",Z);var E=function(e){(0,l.Z)(n,e);var t=y(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,o=n.styles,i=n.x,a=n.y,l=n.data,c=n.scale,u=this.state,s=u.xIndex,p=u.yIndex,g=(0,r.Z)(c,2),f=g[0],h=g[1],m=f.range(),y=h.range(),Z=null!==s?(0,v.BU)(f,l[s][i]):void 0,b=null!==p?(0,v.BU)(h,l[p][a]):void 0;return e=(0,d.B)(o),_().createElement(_().Fragment,null,null!==s?_().createElement(t,e.cn("SHoverLine",{render:"line",index:s,x1:Z,y1:y[0],x2:Z,y2:y[1]})):null,null!==p?_().createElement(t,e.cn("SHoverLine",{render:"line",index:p,x1:m[0],y1:b,x2:m[1],y2:b})):null)}}]),n}(b);(0,s.Z)(E,"displayName","HoverLine");var x=function(e){(0,l.Z)(n,e);var t=y(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,o=n.styles,i=n.x,a=n.y,l=n.data,c=n.scale,u=this.state,s=u.xIndex,p=u.yIndex,g=(0,r.Z)(c,2),f=g[0],h=g[1],v=f.range(),m=h.range();return e=(0,d.B)(o),_().createElement(_().Fragment,null,null!==s?_().createElement(t,e.cn("SHoverRect",{render:"rect",index:s,width:f.step()-f.paddingInner()/2,height:m[0]-m[1],x:f(l[s][i])-f.step()*f.paddingInner()/2,y:m[1]})):null,null!==p?_().createElement(t,e.cn("SHoverRect",{render:"rect",index:p,width:v[1]-v[0],height:h.step()-h.paddingInner()/2,x:v[0],y:h(l[p][a])-h.step()*h.paddingInner()/2})):null)}}]),n}(b);(0,s.Z)(x,"displayName","HoverRect");var P=(0,f.Z)(E),M=(0,f.Z)(x)},6961:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(1253),o=n(6610),i=n(5991),a=n(3349),l=n(379),c=n(6070),u=n(7608),s=n(6156),d=n(1320),p=n(1042),_=n(7700),g=n.n(_),f=n(5889),h=n(9013),v=n(2099),m=n(6193),y=n(8609),Z=n(9881),b=n(8266),E=["Children","children","tag"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=(d.B.insert(".___STooltip_1lzve_gg_{font-size:12px;line-height:1.33;position:relative;background-color:#fff;border-radius:6px;border:1px solid #e0e1e9;box-sizing:border-box;box-shadow:0px 1px 12px 0px rgba(25, 27, 35, 0.15);padding:12px}.___STitle_1lzve_gg_{color:#6c6e79;margin-bottom:8px}.___SDotGroup_1lzve_gg_{display:flex;align-items:center}.___SDot_1lzve_gg_{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#2bb3ff}.___SDot_1lzve_gg_.__color_1lzve_gg_{background:var(--color_1lzve)}","1lzve_gg_"),{__STooltip:"___STooltip_1lzve_gg_",__STitle:"___STitle_1lzve_gg_",__SDotGroup:"___SDotGroup_1lzve_gg_",__SDot:"___SDot_1lzve_gg_",_color:"__color_1lzve_gg_","--color":"--color_1lzve"}),S=function(e){(0,l.Z)(_,e);var t,n,d=(t=_,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function _(){var e;(0,o.Z)(this,_);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=d.call.apply(d,[this].concat(n)),(0,s.Z)((0,a.Z)(e),"state",{$visible:!1}),(0,s.Z)((0,a.Z)(e),"handlerCancel",(function(){return!1})),e}return(0,i.Z)(_,[{key:"getTriggerProps",value:function(){var e=this.asProps;return{x:e.x,y:e.y}}},{key:"getPopperProps",value:function(){return P({},this.state)}},{key:"componentDidMount",value:function(){var e=this,t=this.asProps,n=t.eventEmitter,r=t.rootRef;this.unsubscribeTooltipVisible=n.subscribe("onTooltipVisible",(function(t,n,o){e.setState(P(P({},n),{},{$visible:t}),(function(){var t;o&&(o[y.s.VIRTUAL_ELEMENT]||r.current.contains(o))&&(null==e||e.setPopperTrigger(o),null===(t=e.popper.current)||void 0===t||t.update())}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeTooltipVisible&&this.unsubscribeTooltipVisible()}},{key:"render",value:function(){var e=this.asProps,t=this,n=this.asProps,o=n.Children,i=n.children,a=n.tag,l=(0,r.Z)(n,E),c=!!(0,m.ZP)(o,[B.Trigger.displayName,B.Popper.displayName]);return g().createElement(h.Z,(0,p.assignProps)({visible:this.state.$visible,onFirstUpdate:this.handlerCancel,onOutsideClick:this.handlerCancel,interaction:"none",offset:8,flip:{allowedAutoPlacements:["left","right"]}},e),(function(e){var n,r=e.popper,u=e.setTrigger;return t.setPopperTrigger=u,t.popper=r,null===(n=t.popper.current)||void 0===n||n.update(),c?g().createElement(o,null):g().createElement(g().Fragment,null,a&&g().createElement(B.Trigger,{tag:a}),g().createElement(B.Popper,l,i))}))}}]),_}(f.w);(0,s.Z)(S,"displayName","Tooltip"),(0,s.Z)(S,"style",M);var B=(0,Z.Z)(S,{Trigger:h.Z.Trigger,Popper:function(e){var t,n=e.Element,r=e.styles,o=e.$visible,i=e.x,a=e.y,l=(0,_.useCallback)((function(){return!1}),[]);return o?(t=(0,d.B)(r),g().createElement(n,t.cn("STooltip",{render:h.Z.Popper,childrenPosition:"inside",onMouseMove:l,x:i,y:a}))):null},Title:function(e){var t,n=arguments[0],r=v.Z,o=e.styles;return t=(0,d.B)(o),g().createElement(r,t.cn("STitle",P({},(0,p.assignProps)({__excludeProps:["data","scale"]},n))))},Footer:function(){return null},Dot:function(e){var t,n=arguments[0],r=e.styles,o=e.color,i=e.Children,a=v.Z,l=v.Z;return t=(0,d.B)(r),g().createElement(a,t.cn("SDotGroup",P({},(0,p.assignProps)({__excludeProps:["data","scale"]},n))),g().createElement(l,t.cn("SDot",{color:(0,b.ZP)(o)})),g().createElement(i,t.cn("Children",{})))}});const R=B},6309:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(8481),o=n(5558),i=n.n(o),a=n(4239),l=n(941),c=n(1946),u=n(5694),s=n(3025),d=n(2770),p=n(9453),_=n.n(p),g=n(3210),f=n.n(g),h=n(2122),v=n(1253),m=n(4907),y=n(4062),Z=["title","children","visible","onClose","onSave","onCancel"];const b=function(e){var t=e.title,n=e.children,r=e.visible,o=e.onClose,a=e.onSave,l=e.onCancel,c=(0,v.Z)(e,Z);return i().createElement(m.Z,(0,h.Z)({visible:r,onClose:o},c),i().createElement(m.Z.Close,null),i().createElement(m.Z.Header,null,i().createElement(m.Z.Title,null,t)),i().createElement(m.Z.Body,null,n),i().createElement(m.Z.Footer,{justifyContent:"center",pt:2},i().createElement(y.Z,{onClick:function(e){null==o||o(e),null==l||l()}},"Cancel"),i().createElement(y.Z,{use:"primary",ml:2,onClick:function(e){null==o||o(e),null==a||a()}},"Save")))};var E=n(3379),x=n.n(E),P=n(7795),M=n.n(P),S=n(569),B=n.n(S),R=n(3565),k=n.n(R),w=n(9216),j=n.n(w),T=n(4589),C=n.n(T),O=n(809),I={};I.styleTagTransform=C(),I.setAttributes=k(),I.insert=B().bind(null,"head"),I.domAPI=M(),I.insertStyleElement=j(),x()(O.Z,I);const z=O.Z&&O.Z.locals?O.Z.locals:void 0,D=function(e){var t=e.children,n=e.id,p=e.disablePortals,g=(0,u.useDispatch)();f()(n,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}));var h=(0,o.useState)(!1),v=(0,r.Z)(h,2),m=v[0],y=v[1];return i().createElement(i().Fragment,null,i().createElement(a.Z,{disablePortal:!0,placement:"bottom-end"},i().createElement(a.Z.Trigger,{className:z.close},i().createElement(l.Z,{interactive:!0,color:"gray-300"})),i().createElement(a.Z.Menu,null,i().createElement(a.Z.Item,{onClick:function(){return y(!0)}},i().createElement(c.Z,{ml:3}),i().createElement(s.Z,{ml:3,mr:3},"Edit")),i().createElement(a.Z.Item,{onClick:function(){g({type:_().REMOVE_LAYOUT,payload:n}),g({type:_().REMOVE_FROM_WIDGETS_MAP,payload:n})}},i().createElement(d.Z,{ml:3}),i().createElement(s.Z,{ml:3,mr:3},"Delete")))),i().createElement(b,{disablePortal:p,visible:m,onClose:function(){return y(!1)}},t))}},2573:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(8481),o=n(5558),i=n.n(o),a=n(6318),l=n(996),c=n(9722),u=n(6961),s=n(8991),d=n(7247),p=n(5046),_=n(1974),g=n(7708),f=n(3025),h=n(6309);const v=function(e){var t=e.id,n=(0,o.useState)(Array(5).fill({}).map((function(e,t){return{category:"Category ".concat(t),bar:10*Math.random()}}))),v=(0,r.Z)(n,2),m=v[0],y=(v[1],(0,o.useState)([0,0])),Z=(0,r.Z)(y,2),b=(0,r.Z)(Z[0],2),E=b[0],x=b[1],P=Z[1],M=(0,p.Z)().range([40,E-40]).domain(m.map((function(e){return e.category}))).paddingInner(.4).paddingOuter(.2),S=(0,_.Z)().range([x-40,40]).domain([0,10]);return i().createElement(a.Z,{h:"100%",onResize:P},i().createElement(l.Z,{data:m,scale:[M,S],width:E,height:x},i().createElement(c.B,null,i().createElement(c.B.Ticks,null),i().createElement(c.B.Grid,null)),i().createElement(c.K,null,i().createElement(c.K.Ticks,null)),i().createElement(u.Z,{tag:s.j,x:"category",wMin:100},(function(e){var t=e.xIndex;return{children:"number"==typeof t&&i().createElement(i().Fragment,null,i().createElement(u.Z.Title,null,m[t].category),i().createElement(g.Z,{justifyContent:"space-between"},i().createElement(u.Z.Dot,{mr:4},"Bar"),i().createElement(f.Z,{bold:!0},m[t].bar)))}})),i().createElement(d.Z,{x:"category",y:"bar"})),i().createElement(h.Z,{id:t}))}},809:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8081),o=n.n(r),i=n(3645),a=n.n(i)()(o());a.push([e.id,".FQUEjMIlb2iWc45jwqp1{padding:8px;position:absolute;right:0;top:4;color:var(--gray-300)}.FQUEjMIlb2iWc45jwqp1:hover{color:var(--gray-400) !important}",""]),a.locals={close:"FQUEjMIlb2iWc45jwqp1"};const l=a},5046:(e,t,n)=>{function r(e,t,n){e=+e,t=+t,n=(o=arguments.length)<2?(t=e,e=0,1):o<3?1:+n;for(var r=-1,o=0|Math.max(0,Math.ceil((t-e)/n)),i=new Array(o);++r<o;)i[r]=e+r*n;return i}n.d(t,{Z:()=>l});var o=n(8348);const i=Symbol("implicit");function a(){var e=new Map,t=[],n=[],r=i;function l(o){var a=o+"",l=e.get(a);if(!l){if(r!==i)return r;e.set(a,l=t.push(o))}return n[(l-1)%n.length]}return l.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;for(const r of n){const n=r+"";e.has(n)||e.set(n,t.push(r))}return l},l.range=function(e){return arguments.length?(n=Array.from(e),l):n.slice()},l.unknown=function(e){return arguments.length?(r=e,l):r},l.copy=function(){return a(t,n).unknown(r)},o.o.apply(l,arguments),l}function l(){var e,t,n=a().unknown(void 0),i=n.domain,c=n.range,u=0,s=1,d=!1,p=0,_=0,g=.5;function f(){var n=i().length,o=s<u,a=o?s:u,l=o?u:s;e=(l-a)/Math.max(1,n-p+2*_),d&&(e=Math.floor(e)),a+=(l-a-e*(n-p))*g,t=e*(1-p),d&&(a=Math.round(a),t=Math.round(t));var f=r(n).map((function(t){return a+e*t}));return c(o?f.reverse():f)}return delete n.unknown,n.domain=function(e){return arguments.length?(i(e),f()):i()},n.range=function(e){return arguments.length?([u,s]=e,u=+u,s=+s,f()):[u,s]},n.rangeRound=function(e){return[u,s]=e,u=+u,s=+s,d=!0,f()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(d=!!e,f()):d},n.padding=function(e){return arguments.length?(p=Math.min(1,_=+e),f()):p},n.paddingInner=function(e){return arguments.length?(p=Math.min(1,e),f()):p},n.paddingOuter=function(e){return arguments.length?(_=+e,f()):_},n.align=function(e){return arguments.length?(g=Math.max(0,Math.min(1,e)),f()):g},n.copy=function(){return l(i(),[u,s]).round(d).paddingInner(p).paddingOuter(_).align(g)},o.o.apply(f(),arguments)}}}]);