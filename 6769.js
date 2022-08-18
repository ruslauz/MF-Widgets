"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[6769],{9869:(e,t,r)=>{r.d(t,{Z:()=>B});var n=r(6610),a=r(5991),l=r(379),o=r(6070),c=r(7608),i=r(6156),u=r(2122),s=r(7700),f=r.n(s),m=r(1727),d=r(293),p=r(5889),y=r(2830),_=r(9881),Z=r(7247),g=r(3872);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=((0,d.__css__)(".___SBar_1q35l_gg_{fill:#2bb3ff;transition-property:height,width,y;transition-duration:var(--duration);transition-timing-function:ease-in-out}.___SBar_1q35l_gg_.__color_1q35l_gg_{fill:var(--color)}.___SBar_1q35l_gg_.__hide_1q35l_gg_{display:none}.___SBackground_1q35l_gg_{fill:#c4c7cf}","g0grya_gg_"),{__SBar:"___SBar_1q35l_gg_",_color:"__color_1q35l_gg_",_hide:"__hide_1q35l_gg_",__SBackground:"___SBackground_1q35l_gg_"}),b=(0,u.Z)({},v),k=Symbol("DEFAULT_INSTANCE"),S=Symbol("XY0"),O=function(e){(0,l.Z)(s,e);var t,r,u=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function s(){return(0,n.Z)(this,s),u.apply(this,arguments)}return(0,a.Z)(s,[{key:"getSeries",value:function(){var e=this.asProps,t=e.Children,r=e.data,n=e.stack;if(n[k]){var a=f().Children.toArray((0,y.default)(t)).reduce((function(e,t){return f().isValidElement(t)&&t.type===j.Bar&&!t.props.hide&&e.push(t.props.y),f().isValidElement(t)&&t.type===j.HorizontalBar&&!t.props.hide&&e.push(t.props.x),e}),[]);n.keys(a)}return n(r)}},{key:"getBarProps",value:function(e){var t=this,r=e.y,n=this.asProps,a=n.x,l=n.r,o=this.series.findIndex((function(e){return e.key===r})),c=this.series[o]||[],u=c.map((function(e,r){return t.series.slice(o+1).some((function(e){return e[r][0]!==e[r][1]}))?0:l}));return{data:c.map((function(e){var t;return E(E({},e.data),{},(t={},(0,i.Z)(t,r,e[1]),(0,i.Z)(t,S,e[0]),t))})),y0:S,x:a,r:u}}},{key:"getHorizontalBarProps",value:function(e){var t=this,r=e.x,n=this.asProps,a=n.y,l=n.r,o=this.series.findIndex((function(e){return e.key===r})),c=this.series[o],u=c.map((function(e,r){return t.series.slice(o+1).some((function(e){return e[r][0]!==e[r][1]}))?0:l}));return{data:c.map((function(e){var t;return E(E({},e.data),{},(t={},(0,i.Z)(t,r,e[1]),(0,i.Z)(t,S,e[0]),t))})),x0:S,y:a,r:u}}},{key:"render",value:function(){var e=this.Element;return this.series=this.getSeries(),f().createElement(e,{render:"g",series:this.series})}}]),s}(p.w);(0,i.Z)(O,"displayName","StackBar"),(0,i.Z)(O,"style",b),(0,i.Z)(O,"defaultProps",(function(){var e=(0,m.Z)();return e[k]=!0,{stack:e,r:2}}));var j=(0,_.Z)(O,{Bar:Z.Z,HorizontalBar:g.Z});const B=j},6309:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(8481),a=r(5558),l=r.n(a),o=r(4239),c=r(941),i=r(1946),u=r(5694),s=r(3025),f=r(2770),m=r(9453),d=r.n(m),p=r(3210),y=r.n(p),_=r(2122),Z=r(1253),g=r(4907),h=r(4062),E=["title","children","visible","onClose","onSave","onCancel"];const v=function(e){var t=e.title,r=e.children,n=e.visible,a=e.onClose,o=e.onSave,c=e.onCancel,i=(0,Z.Z)(e,E);return l().createElement(g.Z,(0,_.Z)({visible:n,onClose:a},i),l().createElement(g.Z.Close,null),l().createElement(g.Z.Header,null,l().createElement(g.Z.Title,null,t)),l().createElement(g.Z.Body,null,r),l().createElement(g.Z.Footer,{justifyContent:"center",pt:2},l().createElement(h.Z,{onClick:function(e){null==a||a(e),null==c||c()}},"Cancel"),l().createElement(h.Z,{use:"primary",ml:2,onClick:function(e){null==a||a(e),null==o||o()}},"Save")))};var b=r(3379),k=r.n(b),S=r(7795),O=r.n(S),j=r(569),B=r.n(j),C=r(3565),w=r.n(C),P=r(9216),x=r.n(P),A=r(4589),q=r.n(A),I=r(809),T={};T.styleTagTransform=q(),T.setAttributes=w(),T.insert=B().bind(null,"head"),T.domAPI=O(),T.insertStyleElement=x(),k()(I.Z,T);const M=I.Z&&I.Z.locals?I.Z.locals:void 0,D=function(e){var t=e.children,r=e.id,m=e.disablePortals,p=(0,u.useDispatch)();y()(r,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}));var _=(0,a.useState)(!1),Z=(0,n.Z)(_,2),g=Z[0],h=Z[1];return l().createElement(l().Fragment,null,l().createElement(o.Z,{disablePortal:!0,placement:"bottom-end"},l().createElement(o.Z.Trigger,{className:M.close},l().createElement(c.Z,{interactive:!0,color:"gray-300"})),l().createElement(o.Z.Menu,null,l().createElement(o.Z.Item,{onClick:function(){return h(!0)}},l().createElement(i.Z,{ml:3}),l().createElement(s.Z,{ml:3,mr:3},"Edit")),l().createElement(o.Z.Item,{onClick:function(){p({type:d().REMOVE_LAYOUT,payload:r}),p({type:d().REMOVE_FROM_WIDGETS_MAP,payload:r})}},l().createElement(f.Z,{ml:3}),l().createElement(s.Z,{ml:3,mr:3},"Delete")))),l().createElement(v,{disablePortal:m,visible:g,onClose:function(){return h(!1)}},t))}},6769:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(8481),a=r(5061),l=r(5558),o=r.n(l),c=r(6318),i=r(996),u=r(9722),s=r(6961),f=r(8991),m=r(1655),d=r(9869),p=r(5046),y=r(1974),_=r(7708),Z=r(2099),g=r(3025),h=r(6309);const E=function(e){var t=e.id,r=(0,l.useState)((0,a.Z)(Array(5).keys()).map((function(e,t){return{category:"Category ".concat(t),stack1:10*Math.random(),stack2:10*Math.random()}}))),E=(0,n.Z)(r,2),v=E[0],b=(E[1],(0,l.useState)([0,0])),k=(0,n.Z)(b,2),S=(0,n.Z)(k[0],2),O=S[0],j=S[1],B=k[1],C=(0,p.Z)().range([40,O-40]).domain(v.map((function(e){return e.category}))).paddingInner(.4).paddingOuter(.2),w=(0,y.Z)().range([j-40,40]).domain([0,20]);return o().createElement(c.Z,{h:"100%",onResize:B},o().createElement(i.Z,{data:v,scale:[C,w],width:O,height:j},o().createElement(u.B,null,o().createElement(u.B.Ticks,null),o().createElement(u.B.Grid,null)),o().createElement(u.K,null,o().createElement(u.K.Ticks,null)),o().createElement(s.Z,{tag:f.j,x:"category",wMin:100},(function(e){var t=e.xIndex;return{children:"number"==typeof t&&o().createElement(o().Fragment,null,o().createElement(s.Z.Title,null,v[t].category),o().createElement(_.Z,{justifyContent:"space-between"},o().createElement(s.Z.Dot,{mr:4},"Stack 1"),o().createElement(g.Z,{bold:!0},v[t].stack1)),o().createElement(_.Z,{mt:2,justifyContent:"space-between"},o().createElement(s.Z.Dot,{mr:4,color:m.O["blue-02"]},"Stack 2"),o().createElement(g.Z,{bold:!0},v[t].stack2)),o().createElement(_.Z,{mt:2,justifyContent:"space-between"},o().createElement(Z.Z,{mr:4},"Total"),o().createElement(g.Z,{bold:!0},v[t].stack1+v[t].stack2)))}})),o().createElement(d.Z,{x:"category"},o().createElement(d.Z.Bar,{y:"stack1"}),o().createElement(d.Z.Bar,{y:"stack2",color:m.O["blue-02"]}))),o().createElement(h.Z,{id:t}))}},809:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(8081),a=r.n(n),l=r(3645),o=r.n(l)()(a());o.push([e.id,".FQUEjMIlb2iWc45jwqp1{padding:8px;position:absolute;right:0;top:4;color:var(--gray-300)}.FQUEjMIlb2iWc45jwqp1:hover{color:var(--gray-400) !important}",""]),o.locals={close:"FQUEjMIlb2iWc45jwqp1"};const c=o},5742:(e,t,r)=>{function n(e){return"object"==typeof e&&"length"in e?e:Array.from(e)}r.d(t,{Z:()=>n}),Array.prototype.slice},3072:(e,t,r)=>{function n(e){return function(){return e}}r.d(t,{Z:()=>n})},1727:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(5742),a=r(3072);function l(e,t){if((a=e.length)>1)for(var r,n,a,l=1,o=e[t[0]],c=o.length;l<a;++l)for(n=o,o=e[t[l]],r=0;r<c;++r)o[r][1]+=o[r][0]=isNaN(n[r][1])?n[r][0]:n[r][1]}function o(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function c(e,t){return e[t]}function i(e){const t=[];return t.key=e,t}function u(){var e=(0,a.Z)([]),t=o,r=l,u=c;function s(a){var l,o,c=Array.from(e.apply(this,arguments),i),s=c.length,f=-1;for(const e of a)for(l=0,++f;l<s;++l)(c[l][f]=[0,+u(e,c[l].key,f,a)]).data=e;for(l=0,o=(0,n.Z)(t(c));l<s;++l)c[o[l]].index=l;return r(c,o),c}return s.keys=function(t){return arguments.length?(e="function"==typeof t?t:(0,a.Z)(Array.from(t)),s):e},s.value=function(e){return arguments.length?(u="function"==typeof e?e:(0,a.Z)(+e),s):u},s.order=function(e){return arguments.length?(t=null==e?o:"function"==typeof e?e:(0,a.Z)(Array.from(e)),s):t},s.offset=function(e){return arguments.length?(r=null==e?l:e,s):r},s}}}]);