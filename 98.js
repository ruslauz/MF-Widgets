"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[98],{7247:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(8481),a=t(6610),i=t(5991),o=t(379),l=t(6070),c=t(7608),u=t(6156),s=t(1320),d=t(7700),h=t.n(d),m=t(8122),f=t(5889),g=t(85),_=t(9881),p=t(3348),y=t(8609);var v=(s.B.insert(".___SBar_1j8s7_gg_{fill:#2bb3ff;transition-property:height,width,y;transition-duration:var(--duration_1j8s7);transition-timing-function:ease-in-out}.___SBar_1j8s7_gg_.__color_1j8s7_gg_{fill:var(--color_1j8s7)}.___SBar_1j8s7_gg_.__hide_1j8s7_gg_{display:none}.___SBackground_1j8s7_gg_{fill:#c4c7cf}","1j8s7_gg_"),{__SBar:"___SBar_1j8s7_gg_","--duration":"--duration_1j8s7",_color:"__color_1j8s7_gg_","--color":"--color_1j8s7",_hide:"__hide_1j8s7_gg_",__SBackground:"___SBackground_1j8s7_gg_"}),Z=function(e){(0,o.Z)(d,e);var n,t,u=(n=d,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(n);if(t){var a=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function d(){return(0,a.Z)(this,d),u.apply(this,arguments)}return(0,i.Z)(d,[{key:"getBackgroundProps",value:function(e,n){var t=this.asProps,r=t.x;return{value:t.data[n][r]}}},{key:"animationBar",value:function(){var e=this.asProps,n=e.duration,t=e.uid,r=(0,m.eR)().selection().selectAll("#".concat(t," rect")),a=r.node();n>0&&a&&"0"!==a.getAttribute("y")&&r.transition().duration(n).attr("y",0)}},{key:"componentDidUpdate",value:function(){this.animationBar()}},{key:"componentDidMount",value:function(){this.animationBar()}},{key:"renderBar",value:function(e,n){var t,a,i,o=this.Element,l=this.asProps,c=l.styles,u=l.color,d=l.x,m=l.y,f=l.y0,g=l.scale,_=l.hide,p=l.offset,v=l.duration,Z=l.uid,E=l.r,b=l.hMin,B=l.width,k=(0,r.Z)(g,2),M=k[0],w=k[1],j=w(Math.max(null!==(a=e[f])&&void 0!==a?a:0,e[m]))+p[1]-(Object.is(e[m],0)?b:0),S=M(e[d])+p[0],P=Math.abs(w(e[m])-Math.min(w(w.domain()[0]),w(null!==(i=e[f])&&void 0!==i?i:0)))||b,x=B||(0,y.bP)(M),C=function(e){var n=e.x,t=e.y,r=e.width,a=e.height,i=e.radius;return a<=i?"":i?"top"===e.position?(0,y.pB)(n,t,r,a,i,!0,!0,!1,!1):(0,y.pB)(n,t,r,a,i,!1,!1,!0,!0):(0,y.pB)(n,t,r,a,i)}({x:S,y:j,width:x,height:P,radius:Array.isArray(E)?E[n]:E,position:e[m]>0||Object.is(e[m],0)?"top":"bottom"});return t=(0,s.B)(c),h().createElement(o,t.cn("SBar",{key:"bar-".concat(n),render:"path",clipPath:"url(#".concat(Z,")"),__excludeProps:["data","scale","value"],childrenPosition:"above",value:e,index:n,hide:_,color:u,x:S,y:j,width:x,height:P,d:C,"use:duration":"".concat(v,"ms")}))}},{key:"render",value:function(){var e=this.asProps,n=e.data,t=e.uid,r=e.size,a=e.duration;return h().createElement(h().Fragment,null,n.map(this.renderBar.bind(this)),a&&h().createElement(p.Z,{key:"".concat(t,"-animation"),id:t,x:"0",y:r[1],width:r[0],height:"".concat(r[1],"px")}))}}]),d}(f.w);(0,u.Z)(Z,"displayName","Bar"),(0,u.Z)(Z,"style",v),(0,u.Z)(Z,"enhance",[(0,g.ZP)()]),(0,u.Z)(Z,"defaultProps",{offset:[0,0],duration:500,r:2,hMin:4});const E=(0,_.Z)(Z,{Background:function(e){var n,t=e.Element,a=e.styles,i=e.scale,o=e.value,l=(0,r.Z)(i,2),c=l[0],u=l[1].range();return n=(0,s.B)(a),h().createElement(t,n.cn("SBackground",{render:"rect",childrenPosition:"above",width:c.bandwidth(),height:u[0]-u[1],x:c(o),y:u[1]}))}})},6309:(e,n,t)=>{t.d(n,{Z:()=>F});var r=t(8481),a=t(5558),i=t.n(a),o=t(4239),l=t(941),c=t(1946),u=t(5694),s=t(3025),d=t(2770),h=t(9453),m=t.n(h),f=t(3210),g=t.n(f),_=t(2122),p=t(1253),y=t(4907),v=t(4062),Z=["title","children","visible","onClose","onSave","onCancel"];const E=function(e){var n=e.title,t=e.children,r=e.visible,a=e.onClose,o=e.onSave,l=e.onCancel,c=(0,p.Z)(e,Z);return i().createElement(y.Z,(0,_.Z)({visible:r,onClose:a},c),i().createElement(y.Z.Close,null),i().createElement(y.Z.Header,null,i().createElement(y.Z.Title,null,n)),i().createElement(y.Z.Body,null,t),i().createElement(y.Z.Footer,{justifyContent:"center",pt:2},i().createElement(v.Z,{onClick:function(e){null==a||a(e),null==l||l()}},"Cancel"),i().createElement(v.Z,{use:"primary",ml:2,onClick:function(e){null==a||a(e),null==o||o()}},"Save")))};var b=t(3379),B=t.n(b),k=t(7795),M=t.n(k),w=t(569),j=t.n(w),S=t(3565),P=t.n(S),x=t(9216),C=t.n(x),A=t(4589),R=t.n(A),I=t(809),O={};O.styleTagTransform=R(),O.setAttributes=P(),O.insert=j().bind(null,"head"),O.domAPI=M(),O.insertStyleElement=C(),B()(I.Z,O);const T=I.Z&&I.Z.locals?I.Z.locals:void 0,F=function(e){var n=e.children,t=e.id,h=e.disablePortals,f=(0,u.useDispatch)();g()(t,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}));var _=(0,a.useState)(!1),p=(0,r.Z)(_,2),y=p[0],v=p[1];return i().createElement(i().Fragment,null,i().createElement(o.Z,{disablePortal:!0,placement:"bottom-end"},i().createElement(o.Z.Trigger,{className:T.close},i().createElement(l.Z,{interactive:!0,color:"gray-300"})),i().createElement(o.Z.Menu,null,i().createElement(o.Z.Item,{onClick:function(){return v(!0)}},i().createElement(c.Z,{ml:3}),i().createElement(s.Z,{ml:3,mr:3},"Edit")),i().createElement(o.Z.Item,{onClick:function(){f({type:m().REMOVE_LAYOUT,payload:t}),f({type:m().REMOVE_FROM_WIDGETS_MAP,payload:t})}},i().createElement(d.Z,{ml:3}),i().createElement(s.Z,{ml:3,mr:3},"Delete")))),i().createElement(E,{disablePortal:h,visible:y,onClose:function(){return v(!1)}},n))}},98:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var r=t(8481),a=t(5558),i=t.n(a),o=t(6318),l=t(996),c=t(9722),u=t(7247),s=t(5046),d=t(1974),h=t(6309);const m=function(e){var n=e.id,t=(0,a.useState)(Array(5).fill({}).map((function(e,n){return{category:"Category ".concat(n),bar:10*Math.random()}}))),m=(0,r.Z)(t,2),f=m[0],g=(m[1],(0,a.useState)([0,0])),_=(0,r.Z)(g,2),p=(0,r.Z)(_[0],2),y=p[0],v=p[1],Z=_[1],E=(0,s.Z)().range([40,y-40]).domain(f.map((function(e){return e.category}))).paddingInner(.4).paddingOuter(.2),b=(0,d.Z)().range([v-40,40]).domain([0,10]);return i().createElement(o.Z,{h:"100%",onResize:Z},i().createElement(l.Z,{data:f,scale:[E,b],width:y,height:v},i().createElement(c.B,null,i().createElement(c.B.Ticks,null),i().createElement(c.B.Grid,null)),i().createElement(c.K,null,i().createElement(c.K.Ticks,null)),i().createElement(u.Z,{x:"category",y:"bar"})),i().createElement(h.Z,{id:n}))}},809:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),a=t.n(r),i=t(3645),o=t.n(i)()(a());o.push([e.id,".FQUEjMIlb2iWc45jwqp1{padding:8px;position:absolute;right:0;top:4;color:var(--gray-300)}.FQUEjMIlb2iWc45jwqp1:hover{color:var(--gray-400) !important}",""]),o.locals={close:"FQUEjMIlb2iWc45jwqp1"};const l=o},5046:(e,n,t)=>{function r(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=0|Math.max(0,Math.ceil((n-e)/t)),i=new Array(a);++r<a;)i[r]=e+r*t;return i}t.d(n,{Z:()=>l});var a=t(8348);const i=Symbol("implicit");function o(){var e=new Map,n=[],t=[],r=i;function l(a){var o=a+"",l=e.get(o);if(!l){if(r!==i)return r;e.set(o,l=n.push(a))}return t[(l-1)%t.length]}return l.domain=function(t){if(!arguments.length)return n.slice();n=[],e=new Map;for(const r of t){const t=r+"";e.has(t)||e.set(t,n.push(r))}return l},l.range=function(e){return arguments.length?(t=Array.from(e),l):t.slice()},l.unknown=function(e){return arguments.length?(r=e,l):r},l.copy=function(){return o(n,t).unknown(r)},a.o.apply(l,arguments),l}function l(){var e,n,t=o().unknown(void 0),i=t.domain,c=t.range,u=0,s=1,d=!1,h=0,m=0,f=.5;function g(){var t=i().length,a=s<u,o=a?s:u,l=a?u:s;e=(l-o)/Math.max(1,t-h+2*m),d&&(e=Math.floor(e)),o+=(l-o-e*(t-h))*f,n=e*(1-h),d&&(o=Math.round(o),n=Math.round(n));var g=r(t).map((function(n){return o+e*n}));return c(a?g.reverse():g)}return delete t.unknown,t.domain=function(e){return arguments.length?(i(e),g()):i()},t.range=function(e){return arguments.length?([u,s]=e,u=+u,s=+s,g()):[u,s]},t.rangeRound=function(e){return[u,s]=e,u=+u,s=+s,d=!0,g()},t.bandwidth=function(){return n},t.step=function(){return e},t.round=function(e){return arguments.length?(d=!!e,g()):d},t.padding=function(e){return arguments.length?(h=Math.min(1,m=+e),g()):h},t.paddingInner=function(e){return arguments.length?(h=Math.min(1,e),g()):h},t.paddingOuter=function(e){return arguments.length?(m=+e,g()):m},t.align=function(e){return arguments.length?(f=Math.max(0,Math.min(1,e)),g()):f},t.copy=function(){return l(i(),[u,s]).round(d).paddingInner(h).paddingOuter(m).align(f)},a.o.apply(g(),arguments)}}}]);