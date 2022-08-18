"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[9832],{7247:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(8481),a=n(6610),i=n(5991),o=n(379),u=n(6070),l=n(7608),c=n(6156),s=n(1320),d=n(7700),h=n.n(d),f=n(8122),g=n(5889),_=n(85),v=n(9881),p=n(3348),y=n(8609);var m=(s.B.insert(".___SBar_1j8s7_gg_{fill:#2bb3ff;transition-property:height,width,y;transition-duration:var(--duration_1j8s7);transition-timing-function:ease-in-out}.___SBar_1j8s7_gg_.__color_1j8s7_gg_{fill:var(--color_1j8s7)}.___SBar_1j8s7_gg_.__hide_1j8s7_gg_{display:none}.___SBackground_1j8s7_gg_{fill:#c4c7cf}","1j8s7_gg_"),{__SBar:"___SBar_1j8s7_gg_","--duration":"--duration_1j8s7",_color:"__color_1j8s7_gg_","--color":"--color_1j8s7",_hide:"__hide_1j8s7_gg_",__SBackground:"___SBackground_1j8s7_gg_"}),Z=function(e){(0,o.Z)(d,e);var t,n,c=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var a=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function d(){return(0,a.Z)(this,d),c.apply(this,arguments)}return(0,i.Z)(d,[{key:"getBackgroundProps",value:function(e,t){var n=this.asProps,r=n.x;return{value:n.data[t][r]}}},{key:"animationBar",value:function(){var e=this.asProps,t=e.duration,n=e.uid,r=(0,f.eR)().selection().selectAll("#".concat(n," rect")),a=r.node();t>0&&a&&"0"!==a.getAttribute("y")&&r.transition().duration(t).attr("y",0)}},{key:"componentDidUpdate",value:function(){this.animationBar()}},{key:"componentDidMount",value:function(){this.animationBar()}},{key:"renderBar",value:function(e,t){var n,a,i,o=this.Element,u=this.asProps,l=u.styles,c=u.color,d=u.x,f=u.y,g=u.y0,_=u.scale,v=u.hide,p=u.offset,m=u.duration,Z=u.uid,x=u.r,b=u.hMin,B=u.width,M=(0,r.Z)(_,2),E=M[0],R=M[1],k=R(Math.max(null!==(a=e[g])&&void 0!==a?a:0,e[f]))+p[1]-(Object.is(e[f],0)?b:0),w=E(e[d])+p[0],S=Math.abs(R(e[f])-Math.min(R(R.domain()[0]),R(null!==(i=e[g])&&void 0!==i?i:0)))||b,P=B||(0,y.bP)(E),j=function(e){var t=e.x,n=e.y,r=e.width,a=e.height,i=e.radius;return a<=i?"":i?"top"===e.position?(0,y.pB)(t,n,r,a,i,!0,!0,!1,!1):(0,y.pB)(t,n,r,a,i,!1,!1,!0,!0):(0,y.pB)(t,n,r,a,i)}({x:w,y:k,width:P,height:S,radius:Array.isArray(x)?x[t]:x,position:e[f]>0||Object.is(e[f],0)?"top":"bottom"});return n=(0,s.B)(l),h().createElement(o,n.cn("SBar",{key:"bar-".concat(t),render:"path",clipPath:"url(#".concat(Z,")"),__excludeProps:["data","scale","value"],childrenPosition:"above",value:e,index:t,hide:v,color:c,x:w,y:k,width:P,height:S,d:j,"use:duration":"".concat(m,"ms")}))}},{key:"render",value:function(){var e=this.asProps,t=e.data,n=e.uid,r=e.size,a=e.duration;return h().createElement(h().Fragment,null,t.map(this.renderBar.bind(this)),a&&h().createElement(p.Z,{key:"".concat(n,"-animation"),id:n,x:"0",y:r[1],width:r[0],height:"".concat(r[1],"px")}))}}]),d}(g.w);(0,c.Z)(Z,"displayName","Bar"),(0,c.Z)(Z,"style",m),(0,c.Z)(Z,"enhance",[(0,_.ZP)()]),(0,c.Z)(Z,"defaultProps",{offset:[0,0],duration:500,r:2,hMin:4});const x=(0,v.Z)(Z,{Background:function(e){var t,n=e.Element,a=e.styles,i=e.scale,o=e.value,u=(0,r.Z)(i,2),l=u[0],c=u[1].range();return t=(0,s.B)(a),h().createElement(n,t.cn("SBackground",{render:"rect",childrenPosition:"above",width:l.bandwidth(),height:c[0]-c[1],x:l(o),y:c[1]}))}})},8991:(e,t,n)=>{n.d(t,{j:()=>E,v:()=>M});var r=n(8481),a=n(6610),i=n(5991),o=n(3349),u=n(379),l=n(6070),c=n(7608),s=n(6156),d=n(1320),h=n(7700),f=n.n(h),g=n(5889),_=n(9881),v=n(8395),p=n(8609),y=n(749);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var Z=(d.B.insert(".___SHoverLine_z4284_gg_{stroke:#a9abb6}.___SHoverRect_z4284_gg_{fill:rgba(196,199,207,.3)}","z4284_gg_"),{__SHoverLine:"___SHoverLine_z4284_gg_",__SHoverRect:"___SHoverRect_z4284_gg_"}),x=function(e){(0,u.Z)(n,e);var t=m(n);function n(){var e;(0,a.Z)(this,n);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return e=t.call.apply(t,[this].concat(u)),(0,s.Z)((0,o.Z)(e),"state",{xIndex:null,yIndex:null}),(0,s.Z)((0,o.Z)(e),"virtualElement",(0,v.default)()?document.createElement("div"):{}),(0,s.Z)((0,o.Z)(e),"handlerMouseMoveRoot",(0,y.Z)((function(t){var n=e.asProps,a=n.eventEmitter,i=n.data,o=n.scale,u=n.x,l=n.y,c=n.rootRef,s=t.clientX,d=t.clientY,h=(0,r.Z)(o,2),f=h[0],g=h[1],_=(0,p.O$)(t,c.current),v=(0,r.Z)(_,2),y=v[0],m=v[1],Z=(0,p.U_)(f,y),x=(0,p.U_)(g,m),b=void 0===u||void 0===Z?null:(0,p.rR)(i,f,u,Z),B=void 0===l||void 0===x?null:(0,p.rR)(i,g,l,x),M={xIndex:b,yIndex:B};e.virtualElement.getBoundingClientRect=e.generateGetBoundingClientRect(s,d),e.virtualElement[p.s.VIRTUAL_ELEMENT]=!0,e.setState(M,(function(){a.emit("onTooltipVisible",null!==b||null!==B,M,e.virtualElement)}))}))),(0,s.Z)((0,o.Z)(e),"handlerMouseLeaveRoot",(0,y.Z)((function(){var t={xIndex:null,yIndex:null};e.setState(t,(function(){e.asProps.eventEmitter.emit("onTooltipVisible",!1,t)}))}))),e}return(0,i.Z)(n,[{key:"generateGetBoundingClientRect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e}}}},{key:"componentDidMount",value:function(){var e=this,t=this.asProps.eventEmitter;this.unsubscribeMouseMoveRoot=t.subscribe("onMouseMoveChart",(function(t){t.persist(),e.handlerMouseMoveRoot(t)})),this.unsubscribeMouseLeaveRoot=t.subscribe("onMouseLeaveChart",this.handlerMouseLeaveRoot)}},{key:"componentWillUnmount",value:function(){this.unsubscribeMouseMoveRoot&&this.unsubscribeMouseMoveRoot(),this.unsubscribeMouseLeaveRoot&&this.unsubscribeMouseLeaveRoot()}}]),n}(g.w);(0,s.Z)(x,"style",Z);var b=function(e){(0,u.Z)(n,e);var t=m(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,a=n.styles,i=n.x,o=n.y,u=n.data,l=n.scale,c=this.state,s=c.xIndex,h=c.yIndex,g=(0,r.Z)(l,2),_=g[0],v=g[1],y=_.range(),m=v.range(),Z=null!==s?(0,p.BU)(_,u[s][i]):void 0,x=null!==h?(0,p.BU)(v,u[h][o]):void 0;return e=(0,d.B)(a),f().createElement(f().Fragment,null,null!==s?f().createElement(t,e.cn("SHoverLine",{render:"line",index:s,x1:Z,y1:m[0],x2:Z,y2:m[1]})):null,null!==h?f().createElement(t,e.cn("SHoverLine",{render:"line",index:h,x1:y[0],y1:x,x2:y[1],y2:x})):null)}}]),n}(x);(0,s.Z)(b,"displayName","HoverLine");var B=function(e){(0,u.Z)(n,e);var t=m(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e,t=this.Element,n=this.asProps,a=n.styles,i=n.x,o=n.y,u=n.data,l=n.scale,c=this.state,s=c.xIndex,h=c.yIndex,g=(0,r.Z)(l,2),_=g[0],v=g[1],p=_.range(),y=v.range();return e=(0,d.B)(a),f().createElement(f().Fragment,null,null!==s?f().createElement(t,e.cn("SHoverRect",{render:"rect",index:s,width:_.step()-_.paddingInner()/2,height:y[0]-y[1],x:_(u[s][i])-_.step()*_.paddingInner()/2,y:y[1]})):null,null!==h?f().createElement(t,e.cn("SHoverRect",{render:"rect",index:h,width:p[1]-p[0],height:v.step()-v.paddingInner()/2,x:p[0],y:v(u[h][o])-v.step()*v.paddingInner()/2})):null)}}]),n}(x);(0,s.Z)(B,"displayName","HoverRect");var M=(0,_.Z)(b),E=(0,_.Z)(B)},9832:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(8481),a=n(5558),i=n.n(a),o=n(8609),u=n(6318),l=n(996),c=n(9722),s=n(8991),d=n(7247),h=n(5798),f=n(8266),g=n(5046),_=n(1974),v=n(6309);const p=function(e){var t=e.id,n=(0,a.useState)(Array(10).fill({}).map((function(e,t){return{category:t,bar:Math.random()*t}}))),p=(0,r.Z)(n,2),y=p[0],m=(p[1],(0,a.useState)([0,0])),Z=(0,r.Z)(m,2),x=(0,r.Z)(Z[0],2),b=x[0],B=x[1],M=Z[1],E=(0,g.Z)().range([40,b-40]).domain(y.map((function(e){return String(e.category)}))).paddingInner(.4).paddingOuter(.2),R=(0,_.Z)().range([B-40,40]).domain((0,o._z)(y,"bar"));return i().createElement(u.Z,{h:"100%",onResize:M},i().createElement(l.Z,{data:y,scale:[E,R],width:b,height:B},i().createElement(c.B,null,i().createElement(c.B.Ticks,null),i().createElement(c.B.Grid,null)),i().createElement(c.K,null,i().createElement(c.K.Ticks,null)),i().createElement(s.v,{x:"category"}),i().createElement(s.j,{x:"category"}),i().createElement(d.Z,{x:"category",y:"bar"}),i().createElement(h.Z,{x:"category",y:"bar",color:(0,f.ZP)("wall"),style:{strokeWidth:3,strokeDasharray:5}},i().createElement(h.Z.Dots,{display:!0}))),i().createElement(v.Z,{id:t}))}},5046:(e,t,n)=>{function r(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=0|Math.max(0,Math.ceil((t-e)/n)),i=new Array(a);++r<a;)i[r]=e+r*n;return i}n.d(t,{Z:()=>u});var a=n(8348);const i=Symbol("implicit");function o(){var e=new Map,t=[],n=[],r=i;function u(a){var o=a+"",u=e.get(o);if(!u){if(r!==i)return r;e.set(o,u=t.push(a))}return n[(u-1)%n.length]}return u.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;for(const r of n){const n=r+"";e.has(n)||e.set(n,t.push(r))}return u},u.range=function(e){return arguments.length?(n=Array.from(e),u):n.slice()},u.unknown=function(e){return arguments.length?(r=e,u):r},u.copy=function(){return o(t,n).unknown(r)},a.o.apply(u,arguments),u}function u(){var e,t,n=o().unknown(void 0),i=n.domain,l=n.range,c=0,s=1,d=!1,h=0,f=0,g=.5;function _(){var n=i().length,a=s<c,o=a?s:c,u=a?c:s;e=(u-o)/Math.max(1,n-h+2*f),d&&(e=Math.floor(e)),o+=(u-o-e*(n-h))*g,t=e*(1-h),d&&(o=Math.round(o),t=Math.round(t));var _=r(n).map((function(t){return o+e*t}));return l(a?_.reverse():_)}return delete n.unknown,n.domain=function(e){return arguments.length?(i(e),_()):i()},n.range=function(e){return arguments.length?([c,s]=e,c=+c,s=+s,_()):[c,s]},n.rangeRound=function(e){return[c,s]=e,c=+c,s=+s,d=!0,_()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(d=!!e,_()):d},n.padding=function(e){return arguments.length?(h=Math.min(1,f=+e),_()):h},n.paddingInner=function(e){return arguments.length?(h=Math.min(1,e),_()):h},n.paddingOuter=function(e){return arguments.length?(f=+e,_()):f},n.align=function(e){return arguments.length?(g=Math.max(0,Math.min(1,e)),_()):g},n.copy=function(){return u(i(),[c,s]).round(d).paddingInner(h).paddingOuter(f).align(g)},a.o.apply(_(),arguments)}}}]);