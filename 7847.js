"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[7847],{8991:(e,t,n)=>{n.d(t,{j:()=>R,v:()=>P});var r=n(8481),i=n(6610),o=n(5991),l=n(3349),s=n(379),a=n(6070),c=n(7608),u=n(6156),_=n(1320),p=n(7700),h=n.n(p),d=n(5889),v=n(9881),f=n(8395),g=n(8609),y=n(749);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var m=(_.B.insert(".___SHoverLine_z4284_gg_{stroke:#a9abb6}.___SHoverRect_z4284_gg_{fill:rgba(196,199,207,.3)}","z4284_gg_"),{__SHoverLine:"___SHoverLine_z4284_gg_",__SHoverRect:"___SHoverRect_z4284_gg_"}),b=function(e){(0,s.Z)(n,e);var t=x(n);function n(){var e;(0,i.Z)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s)),(0,u.Z)((0,l.Z)(e),"state",{xIndex:null,yIndex:null}),(0,u.Z)((0,l.Z)(e),"virtualElement",(0,f.default)()?document.createElement("div"):{}),(0,u.Z)((0,l.Z)(e),"handlerMouseMoveRoot",(0,y.Z)((function(t){var n=e.asProps,i=n.eventEmitter,o=n.data,l=n.scale,s=n.x,a=n.y,c=n.rootRef,u=t.clientX,_=t.clientY,p=(0,r.Z)(l,2),h=p[0],d=p[1],v=(0,g.O$)(t,c.current),f=(0,r.Z)(v,2),y=f[0],x=f[1],m=(0,g.U_)(h,y),b=(0,g.U_)(d,x),Z=void 0===s||void 0===m?null:(0,g.rR)(o,h,s,m),E=void 0===a||void 0===b?null:(0,g.rR)(o,d,a,b),P={xIndex:Z,yIndex:E};e.virtualElement.getBoundingClientRect=e.generateGetBoundingClientRect(u,_),e.virtualElement[g.s.VIRTUAL_ELEMENT]=!0,e.setState(P,(function(){i.emit("onTooltipVisible",null!==Z||null!==E,P,e.virtualElement)}))}))),(0,u.Z)((0,l.Z)(e),"handlerMouseLeaveRoot",(0,y.Z)((function(){var t={xIndex:null,yIndex:null};e.setState(t,(function(){e.asProps.eventEmitter.emit("onTooltipVisible",!1,t)}))}))),e}return(0,o.Z)(n,[{key:"generateGetBoundingClientRect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e}}}},{key:"componentDidMount",value:function(){var e=this,t=this.asProps.eventEmitter;this.unsubscribeMouseMoveRoot=t.subscribe("onMouseMoveChart",(function(t){t.persist(),e.handlerMouseMoveRoot(t)})),this.unsubscribeMouseLeaveRoot=t.subscribe("onMouseLeaveChart",this.handlerMouseLeaveRoot)}},{key:"componentWillUnmount",value:function(){this.unsubscribeMouseMoveRoot&&this.unsubscribeMouseMoveRoot(),this.unsubscribeMouseLeaveRoot&&this.unsubscribeMouseLeaveRoot()}}]),n}(d.w);(0,u.Z)(b,"style",m);var Z=function(e){(0,s.Z)(n,e);var t=x(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,i=n.styles,o=n.x,l=n.y,s=n.data,a=n.scale,c=this.state,u=c.xIndex,p=c.yIndex,d=(0,r.Z)(a,2),v=d[0],f=d[1],y=v.range(),x=f.range(),m=null!==u?(0,g.BU)(v,s[u][o]):void 0,b=null!==p?(0,g.BU)(f,s[p][l]):void 0;return e=(0,_.B)(i),h().createElement(h().Fragment,null,null!==u?h().createElement(t,e.cn("SHoverLine",{render:"line",index:u,x1:m,y1:x[0],x2:m,y2:x[1]})):null,null!==p?h().createElement(t,e.cn("SHoverLine",{render:"line",index:p,x1:y[0],y1:b,x2:y[1],y2:b})):null)}}]),n}(b);(0,u.Z)(Z,"displayName","HoverLine");var E=function(e){(0,s.Z)(n,e);var t=x(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,i=n.styles,o=n.x,l=n.y,s=n.data,a=n.scale,c=this.state,u=c.xIndex,p=c.yIndex,d=(0,r.Z)(a,2),v=d[0],f=d[1],g=v.range(),y=f.range();return e=(0,_.B)(i),h().createElement(h().Fragment,null,null!==u?h().createElement(t,e.cn("SHoverRect",{render:"rect",index:u,width:v.step()-v.paddingInner()/2,height:y[0]-y[1],x:v(s[u][o])-v.step()*v.paddingInner()/2,y:y[1]})):null,null!==p?h().createElement(t,e.cn("SHoverRect",{render:"rect",index:p,width:g[1]-g[0],height:f.step()-f.paddingInner()/2,x:g[0],y:f(s[p][l])-f.step()*f.paddingInner()/2})):null)}}]),n}(b);(0,u.Z)(E,"displayName","HoverRect");var P=(0,v.Z)(Z),R=(0,v.Z)(E)},6961:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(1253),i=n(6610),o=n(5991),l=n(3349),s=n(379),a=n(6070),c=n(7608),u=n(6156),_=n(1320),p=n(1042),h=n(7700),d=n.n(h),v=n(5889),f=n(9013),g=n(2099),y=n(6193),x=n(8609),m=n(9881),b=n(8266),Z=["Children","children","tag"];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=(_.B.insert(".___STooltip_1lzve_gg_{font-size:12px;line-height:1.33;position:relative;background-color:#fff;border-radius:6px;border:1px solid #e0e1e9;box-sizing:border-box;box-shadow:0px 1px 12px 0px rgba(25, 27, 35, 0.15);padding:12px}.___STitle_1lzve_gg_{color:#6c6e79;margin-bottom:8px}.___SDotGroup_1lzve_gg_{display:flex;align-items:center}.___SDot_1lzve_gg_{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#2bb3ff}.___SDot_1lzve_gg_.__color_1lzve_gg_{background:var(--color_1lzve)}","1lzve_gg_"),{__STooltip:"___STooltip_1lzve_gg_",__STitle:"___STitle_1lzve_gg_",__SDotGroup:"___SDotGroup_1lzve_gg_",__SDot:"___SDot_1lzve_gg_",_color:"__color_1lzve_gg_","--color":"--color_1lzve"}),S=function(e){(0,s.Z)(h,e);var t,n,_=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var i=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,a.Z)(this,e)});function h(){var e;(0,i.Z)(this,h);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=_.call.apply(_,[this].concat(n)),(0,u.Z)((0,l.Z)(e),"state",{$visible:!1}),(0,u.Z)((0,l.Z)(e),"handlerCancel",(function(){return!1})),e}return(0,o.Z)(h,[{key:"getTriggerProps",value:function(){var e=this.asProps;return{x:e.x,y:e.y}}},{key:"getPopperProps",value:function(){return P({},this.state)}},{key:"componentDidMount",value:function(){var e=this,t=this.asProps,n=t.eventEmitter,r=t.rootRef;this.unsubscribeTooltipVisible=n.subscribe("onTooltipVisible",(function(t,n,i){e.setState(P(P({},n),{},{$visible:t}),(function(){var t;i&&(i[x.s.VIRTUAL_ELEMENT]||r.current.contains(i))&&(null==e||e.setPopperTrigger(i),null===(t=e.popper.current)||void 0===t||t.update())}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeTooltipVisible&&this.unsubscribeTooltipVisible()}},{key:"render",value:function(){var e=this.asProps,t=this,n=this.asProps,i=n.Children,o=n.children,l=n.tag,s=(0,r.Z)(n,Z),a=!!(0,y.ZP)(i,[T.Trigger.displayName,T.Popper.displayName]);return d().createElement(f.Z,(0,p.assignProps)({visible:this.state.$visible,onFirstUpdate:this.handlerCancel,onOutsideClick:this.handlerCancel,interaction:"none",offset:8,flip:{allowedAutoPlacements:["left","right"]}},e),(function(e){var n,r=e.popper,c=e.setTrigger;return t.setPopperTrigger=c,t.popper=r,null===(n=t.popper.current)||void 0===n||n.update(),a?d().createElement(i,null):d().createElement(d().Fragment,null,l&&d().createElement(T.Trigger,{tag:l}),d().createElement(T.Popper,s,o))}))}}]),h}(v.w);(0,u.Z)(S,"displayName","Tooltip"),(0,u.Z)(S,"style",R);var T=(0,m.Z)(S,{Trigger:f.Z.Trigger,Popper:function(e){var t,n=e.Element,r=e.styles,i=e.$visible,o=e.x,l=e.y,s=(0,h.useCallback)((function(){return!1}),[]);return i?(t=(0,_.B)(r),d().createElement(n,t.cn("STooltip",{render:f.Z.Popper,childrenPosition:"inside",onMouseMove:s,x:o,y:l}))):null},Title:function(e){var t,n=arguments[0],r=g.Z,i=e.styles;return t=(0,_.B)(i),d().createElement(r,t.cn("STitle",P({},(0,p.assignProps)({__excludeProps:["data","scale"]},n))))},Footer:function(){return null},Dot:function(e){var t,n=arguments[0],r=e.styles,i=e.color,o=e.Children,l=g.Z,s=g.Z;return t=(0,_.B)(r),d().createElement(l,t.cn("SDotGroup",P({},(0,p.assignProps)({__excludeProps:["data","scale"]},n))),d().createElement(s,t.cn("SDot",{color:(0,b.ZP)(i)})),d().createElement(o,t.cn("Children",{})))}});const k=T},7847:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(8481),i=n(5558),o=n.n(i),l=n(8609),s=n(6318),a=n(996),c=n(9722),u=n(6961),_=n(8991),p=n(5798),h=n(1974),d=n(7708),v=n(3025),f=n(7018),g=n(6309);const y=function(e){var t=e.id,n=(0,i.useState)(Array(20).fill({}).map((function(e,t){return{x:t,y:10*Math.random()}}))),y=(0,r.Z)(n,2),x=y[0],m=(y[1],(0,i.useState)([0,0])),b=(0,r.Z)(m,2),Z=(0,r.Z)(b[0],2),E=Z[0],P=Z[1],R=b[1],S=(0,h.Z)().range([40,E-40]).domain((0,l._z)(x,"x")),T=(0,h.Z)().range([P-40,40]).domain([0,10]);return o().createElement(s.Z,{h:"100%",onResize:R},o().createElement(a.Z,{data:x,scale:[S,T],width:E,height:P},o().createElement(c.B,null,o().createElement(c.B.Ticks,null),o().createElement(c.B.Grid,null)),o().createElement(c.K,null,o().createElement(c.K.Ticks,null)),o().createElement(u.Z,{tag:_.v,x:"x",wMin:100},(function(e){var t=e.xIndex;return{children:"number"==typeof t&&o().createElement(o().Fragment,null,o().createElement(u.Z.Title,null,x[t].x),o().createElement(d.Z,{justifyContent:"space-between"},o().createElement(u.Z.Dot,{mr:4},"Line"),o().createElement(v.Z,{bold:!0},x[t].y)))}})),o().createElement(p.Z,{x:"x",y:"y",curve:f.ZP},o().createElement(p.Z.Dots,null))),o().createElement(g.Z,{id:t}))}},7018:(e,t,n)=>{function r(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function i(e,t){this._context=e,this._k=(1-t)/6}n.d(t,{ZP:()=>o}),i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:r(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:r(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const o=function e(t){function n(e){return new i(e,t)}return n.tension=function(t){return e(+t)},n}(0)}}]);