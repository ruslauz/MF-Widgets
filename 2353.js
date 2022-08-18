"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[2353],{9869:(e,t,r)=>{r.d(t,{Z:()=>B});var n=r(6610),a=r(5991),o=r(379),l=r(6070),i=r(7608),c=r(6156),u=r(2122),s=r(7700),f=r.n(s),m=r(1727),d=r(293),p=r(5889),y=r(2830),_=r(9881),Z=r(7247),g=r(3872);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=((0,d.__css__)(".___SBar_1q35l_gg_{fill:#2bb3ff;transition-property:height,width,y;transition-duration:var(--duration);transition-timing-function:ease-in-out}.___SBar_1q35l_gg_.__color_1q35l_gg_{fill:var(--color)}.___SBar_1q35l_gg_.__hide_1q35l_gg_{display:none}.___SBackground_1q35l_gg_{fill:#c4c7cf}","g0grya_gg_"),{__SBar:"___SBar_1q35l_gg_",_color:"__color_1q35l_gg_",_hide:"__hide_1q35l_gg_",__SBackground:"___SBackground_1q35l_gg_"}),b=(0,u.Z)({},v),k=Symbol("DEFAULT_INSTANCE"),S=Symbol("XY0"),O=function(e){(0,o.Z)(s,e);var t,r,u=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(r){var a=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function s(){return(0,n.Z)(this,s),u.apply(this,arguments)}return(0,a.Z)(s,[{key:"getSeries",value:function(){var e=this.asProps,t=e.Children,r=e.data,n=e.stack;if(n[k]){var a=f().Children.toArray((0,y.default)(t)).reduce((function(e,t){return f().isValidElement(t)&&t.type===j.Bar&&!t.props.hide&&e.push(t.props.y),f().isValidElement(t)&&t.type===j.HorizontalBar&&!t.props.hide&&e.push(t.props.x),e}),[]);n.keys(a)}return n(r)}},{key:"getBarProps",value:function(e){var t=this,r=e.y,n=this.asProps,a=n.x,o=n.r,l=this.series.findIndex((function(e){return e.key===r})),i=this.series[l]||[],u=i.map((function(e,r){return t.series.slice(l+1).some((function(e){return e[r][0]!==e[r][1]}))?0:o}));return{data:i.map((function(e){var t;return E(E({},e.data),{},(t={},(0,c.Z)(t,r,e[1]),(0,c.Z)(t,S,e[0]),t))})),y0:S,x:a,r:u}}},{key:"getHorizontalBarProps",value:function(e){var t=this,r=e.x,n=this.asProps,a=n.y,o=n.r,l=this.series.findIndex((function(e){return e.key===r})),i=this.series[l],u=i.map((function(e,r){return t.series.slice(l+1).some((function(e){return e[r][0]!==e[r][1]}))?0:o}));return{data:i.map((function(e){var t;return E(E({},e.data),{},(t={},(0,c.Z)(t,r,e[1]),(0,c.Z)(t,S,e[0]),t))})),x0:S,y:a,r:u}}},{key:"render",value:function(){var e=this.Element;return this.series=this.getSeries(),f().createElement(e,{render:"g",series:this.series})}}]),s}(p.w);(0,c.Z)(O,"displayName","StackBar"),(0,c.Z)(O,"style",b),(0,c.Z)(O,"defaultProps",(function(){var e=(0,m.Z)();return e[k]=!0,{stack:e,r:2}}));var j=(0,_.Z)(O,{Bar:Z.Z,HorizontalBar:g.Z});const B=j},6309:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(8481),a=r(5558),o=r.n(a),l=r(4239),i=r(941),c=r(1946),u=r(5694),s=r(3025),f=r(2770),m=r(9453),d=r.n(m),p=r(3210),y=r.n(p),_=r(2122),Z=r(1253),g=r(4907),h=r(4062),E=["title","children","visible","onClose","onSave","onCancel"];const v=function(e){var t=e.title,r=e.children,n=e.visible,a=e.onClose,l=e.onSave,i=e.onCancel,c=(0,Z.Z)(e,E);return o().createElement(g.Z,(0,_.Z)({visible:n,onClose:a},c),o().createElement(g.Z.Close,null),o().createElement(g.Z.Header,null,o().createElement(g.Z.Title,null,t)),o().createElement(g.Z.Body,null,r),o().createElement(g.Z.Footer,{justifyContent:"center",pt:2},o().createElement(h.Z,{onClick:function(e){null==a||a(e),null==i||i()}},"Cancel"),o().createElement(h.Z,{use:"primary",ml:2,onClick:function(e){null==a||a(e),null==l||l()}},"Save")))};var b=r(3379),k=r.n(b),S=r(7795),O=r.n(S),j=r(569),B=r.n(j),C=r(3565),w=r.n(C),P=r(9216),A=r.n(P),q=r(4589),x=r.n(q),I=r(809),T={};T.styleTagTransform=x(),T.setAttributes=w(),T.insert=B().bind(null,"head"),T.domAPI=O(),T.insertStyleElement=A(),k()(I.Z,T);const M=I.Z&&I.Z.locals?I.Z.locals:void 0,D=function(e){var t=e.children,r=e.id,m=e.disablePortals,p=(0,u.useDispatch)();y()(r,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}));var _=(0,a.useState)(!1),Z=(0,n.Z)(_,2),g=Z[0],h=Z[1];return o().createElement(o().Fragment,null,o().createElement(l.Z,{disablePortal:!0,placement:"bottom-end"},o().createElement(l.Z.Trigger,{className:M.close},o().createElement(i.Z,{interactive:!0,color:"gray-300"})),o().createElement(l.Z.Menu,null,o().createElement(l.Z.Item,{onClick:function(){return h(!0)}},o().createElement(c.Z,{ml:3}),o().createElement(s.Z,{ml:3,mr:3},"Edit")),o().createElement(l.Z.Item,{onClick:function(){p({type:d().REMOVE_LAYOUT,payload:r}),p({type:d().REMOVE_FROM_WIDGETS_MAP,payload:r})}},o().createElement(f.Z,{ml:3}),o().createElement(s.Z,{ml:3,mr:3},"Delete")))),o().createElement(v,{disablePortal:m,visible:g,onClose:function(){return h(!1)}},t))}},2353:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(8481),a=r(5061),o=r(5558),l=r.n(o),i=r(6318),c=r(996),u=r(9722),s=r(6961),f=r(8991),m=r(1655),d=r(9869),p=r(1974),y=r(5046),_=r(7708),Z=r(2099),g=r(3025),h=r(6309);const E=function(e){var t=e.id,r=(0,o.useState)((0,a.Z)(Array(5).keys()).map((function(e,t){return{category:"Category ".concat(t),bar1:10*Math.random(),bar2:10*Math.random()}}))),E=(0,n.Z)(r,2),v=E[0],b=(E[1],(0,o.useState)([0,0])),k=(0,n.Z)(b,2),S=(0,n.Z)(k[0],2),O=S[0],j=S[1],B=k[1],C=(0,p.Z)().range([80,O-40]).domain([0,20]),w=(0,y.Z)().range([j-40,40]).domain(v.map((function(e){return e.category}))).paddingInner(.4).paddingOuter(.2);return l().createElement(i.Z,{h:"100%",onResize:B},l().createElement(c.Z,{data:v,scale:[C,w],width:O,height:j},l().createElement(u.B,{hide:!1},l().createElement(u.B.Ticks,null)),l().createElement(u.K,null,l().createElement(u.K.Ticks,null),l().createElement(u.K.Grid,null)),l().createElement(s.Z,{tag:f.j,y:"category",wMin:100},(function(e){var t=e.yIndex;return{children:"number"==typeof t&&l().createElement(l().Fragment,null,l().createElement(s.Z.Title,null,v[t].category),l().createElement(_.Z,{justifyContent:"space-between"},l().createElement(s.Z.Dot,{mr:4},"Stack 1"),l().createElement(g.Z,{bold:!0},v[t].bar1)),l().createElement(_.Z,{mt:2,justifyContent:"space-between"},l().createElement(s.Z.Dot,{mr:4,color:m.O["blue-02"]},"Stack 2"),l().createElement(g.Z,{bold:!0},v[t].bar2)),l().createElement(_.Z,{mt:2,justifyContent:"space-between"},l().createElement(Z.Z,{mr:4},"Total"),l().createElement(g.Z,{bold:!0},v[t].bar1+v[t].bar2)))}})),l().createElement(d.Z,{y:"category"},l().createElement(d.Z.HorizontalBar,{x:"bar1"}),l().createElement(d.Z.HorizontalBar,{x:"bar2",color:m.O["blue-02"]}))),l().createElement(h.Z,{id:t}))}},809:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8081),a=r.n(n),o=r(3645),l=r.n(o)()(a());l.push([e.id,".FQUEjMIlb2iWc45jwqp1{padding:8px;position:absolute;right:0;top:4;color:var(--gray-300)}.FQUEjMIlb2iWc45jwqp1:hover{color:var(--gray-400) !important}",""]),l.locals={close:"FQUEjMIlb2iWc45jwqp1"};const i=l},5742:(e,t,r)=>{function n(e){return"object"==typeof e&&"length"in e?e:Array.from(e)}r.d(t,{Z:()=>n}),Array.prototype.slice},3072:(e,t,r)=>{function n(e){return function(){return e}}r.d(t,{Z:()=>n})},1727:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(5742),a=r(3072);function o(e,t){if((a=e.length)>1)for(var r,n,a,o=1,l=e[t[0]],i=l.length;o<a;++o)for(n=l,l=e[t[o]],r=0;r<i;++r)l[r][1]+=l[r][0]=isNaN(n[r][1])?n[r][0]:n[r][1]}function l(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function i(e,t){return e[t]}function c(e){const t=[];return t.key=e,t}function u(){var e=(0,a.Z)([]),t=l,r=o,u=i;function s(a){var o,l,i=Array.from(e.apply(this,arguments),c),s=i.length,f=-1;for(const e of a)for(o=0,++f;o<s;++o)(i[o][f]=[0,+u(e,i[o].key,f,a)]).data=e;for(o=0,l=(0,n.Z)(t(i));o<s;++o)i[l[o]].index=o;return r(i,l),i}return s.keys=function(t){return arguments.length?(e="function"==typeof t?t:(0,a.Z)(Array.from(t)),s):e},s.value=function(e){return arguments.length?(u="function"==typeof e?e:(0,a.Z)(+e),s):u},s.order=function(e){return arguments.length?(t=null==e?l:"function"==typeof e?e:(0,a.Z)(Array.from(e)),s):t},s.offset=function(e){return arguments.length?(r=null==e?o:e,s):r},s}}}]);