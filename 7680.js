"use strict";(self.webpackChunk_my_reports_widgets=self.webpackChunk_my_reports_widgets||[]).push([[7680],{8741:(t,n,i)=>{i.d(n,{Z:()=>L});var e=i(8481),r=i(6610),o=i(5991),_=i(379),s=i(6070),u=i(7608),l=i(6156),c=i(1320),a=i(7700),h=i.n(a),f=i(1108),d=i(5742),g=i(3072),y=i(8143),p=i(5049),v=i(8260);function x(t,n,i){var e=null,r=(0,g.Z)(!0),o=null,_=y.Z,s=null;function u(u){var l,c,a,h,g,y=(u=(0,d.Z)(u)).length,p=!1,v=new Array(y),x=new Array(y);for(null==o&&(s=_(g=(0,f.Z)())),l=0;l<=y;++l){if(!(l<y&&r(h=u[l],l,u))===p)if(p=!p)c=l,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),a=l-1;a>=c;--a)s.point(v[a],x[a]);s.lineEnd(),s.areaEnd()}p&&(v[l]=+t(h,l,u),x[l]=+n(h,l,u),s.point(e?+e(h,l,u):v[l],i?+i(h,l,u):x[l]))}if(g)return s=null,g+""||null}function l(){return(0,p.Z)().defined(r).curve(_).context(o)}return t="function"==typeof t?t:void 0===t?v.x:(0,g.Z)(+t),n="function"==typeof n?n:void 0===n?(0,g.Z)(0):(0,g.Z)(+n),i="function"==typeof i?i:void 0===i?v.y:(0,g.Z)(+i),u.x=function(n){return arguments.length?(t="function"==typeof n?n:(0,g.Z)(+n),e=null,u):t},u.x0=function(n){return arguments.length?(t="function"==typeof n?n:(0,g.Z)(+n),u):t},u.x1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:(0,g.Z)(+t),u):e},u.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,g.Z)(+t),i=null,u):n},u.y0=function(t){return arguments.length?(n="function"==typeof t?t:(0,g.Z)(+t),u):n},u.y1=function(t){return arguments.length?(i=null==t?null:"function"==typeof t?t:(0,g.Z)(+t),u):i},u.lineX0=u.lineY0=function(){return l().x(t).y(n)},u.lineY1=function(){return l().x(t).y(i)},u.lineX1=function(){return l().x(e).y(n)},u.defined=function(t){return arguments.length?(r="function"==typeof t?t:(0,g.Z)(!!t),u):r},u.curve=function(t){return arguments.length?(_=t,null!=o&&(s=_(o)),u):_},u.context=function(t){return arguments.length?(null==t?o=s=null:s=_(o=t),u):o},u}var Z=i(431),S=i(5889),m=i(9881),b=i(8609),k=i(3348),A=i(85),E=i(6193);var j=(c.B.insert(".___SArea_1v8sj_gg_{fill:#2bb3ff;fill-opacity:.2}.___SArea_1v8sj_gg_.__color_1v8sj_gg_{fill:var(--color_1v8sj)}.___SAreaLine_1v8sj_gg_{stroke:#2bb3ff;stroke-width:3;fill:transparent}.___SAreaLine_1v8sj_gg_.__color_1v8sj_gg_{stroke:var(--color_1v8sj)}.___SArea_1v8sj_gg_,.___SAreaLine_1v8sj_gg_{transition-property:d;transition-duration:var(--duration_1v8sj);transition-timing-function:ease-in-out}.___SNull_1v8sj_gg_{fill:transparent;stroke:#8a8e9b;stroke-dasharray:4}.___SNull_1v8sj_gg_.__hide_1v8sj_gg_{display:none}","1v8sj_gg_"),{__SArea:"___SArea_1v8sj_gg_",_color:"__color_1v8sj_gg_","--color":"--color_1v8sj",__SAreaLine:"___SAreaLine_1v8sj_gg_","--duration":"--duration_1v8sj",__SNull:"___SNull_1v8sj_gg_",_hide:"__hide_1v8sj_gg_"}),w=function(t){(0,_.Z)(l,t);var n,i,e=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,u.Z)(n);if(i){var r=(0,u.Z)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return(0,s.Z)(this,t)});function l(){return(0,r.Z)(this,l),e.apply(this,arguments)}return(0,o.Z)(l,[{key:"getDotsProps",value:function(){var t=this.asProps,n=t.x,i=t.y,e=t.color;return{x:n,y:i,data:t.data,d3:t.d3Line,color:e}}},{key:"getNullProps",value:function(){var t=this.asProps,n=t.x,i=t.y,e=t.color,r=t.data,o=t.d3Line;return{data:(0,b.Gf)(r,(0,b.Jz)(n,i),i),d3:o,color:e}}},{key:"getLineProps",value:function(){var t=this.asProps,n=t.duration,i=t.color,e=t.data,r=t.d3Line;return{uid:t.uid,data:e,d3:r,color:i,duration:n}}},{key:"render",value:function(){var t,n=this.Element,i=this.asProps,e=i.styles,r=i.hide,o=i.d3,_=i.d3Line,s=i.data,u=i.color,l=i.uid,a=i.size,f=i.duration,d=i.Children,g=!!(0,E.ZP)(d,[P.Line.displayName]);return t=(0,c.B)(e),h().createElement(h().Fragment,null,!g&&h().createElement("path",t.cn("SAreaLine",{clipPath:"url(#".concat(l,")"),d:_(s),color:u,"use:duration":"".concat(f,"ms")})),h().createElement(n,t.cn("SArea",{clipPath:"url(#".concat(l,")"),render:"path",d:o(s),hide:r,color:u,"use:duration":"".concat(f,"ms")})),f&&h().createElement(k.Z,t.cn("ClipPath",{setAttributeTag:function(t){t.setAttribute("width",a[0])},id:l,x:"0",y:"0",width:0,height:a[1],transition:"width ".concat(f,"ms ease-in-out")})))}}]),l}(S.w);(0,l.Z)(w,"displayName","Area"),(0,l.Z)(w,"style",j),(0,l.Z)(w,"enhance",[(0,A.ZP)()]),(0,l.Z)(w,"defaultProps",(function(t){var n=t.x,i=t.y,r=t.y0,o=t.$rootProps,_=t.curve,s=void 0===_?y.Z:_,u=t.scale||o.scale,l=(0,e.Z)(u,2),c=l[0],a=l[1],h=a.range();return{d3:x().defined((0,b.Ar)(n,i)).curve(s).x((function(t){return(0,b.BU)(c,t[n])})).y0((function(t){return t[r]?(0,b.BU)(a,t[r]):h[0]})).y1((function(t){return(0,b.BU)(a,t[i])})),d3Line:(0,p.Z)().defined((0,b.Ar)(n,i)).curve(s).x((function(t){return(0,b.BU)(c,t[n])})).y((function(t){return(0,b.BU)(a,t[i])})),duration:500}}));var P=(0,m.Z)(w,{Dots:Z.Z,Null:function(t){var n,i=t.Element,e=t.styles,r=t.d3,o=t.data,_=t.hide,s=t.color;return n=(0,c.B)(e),h().createElement(i,n.cn("SNull",{render:"path",d:r(o),hide:_,color:s}))},Line:function(t){var n,i=t.Element,e=t.styles,r=t.d3,o=t.data,_=t.color,s=t.duration,u=t.uid;return n=(0,c.B)(e),h().createElement(i,n.cn("SAreaLine",{render:"path",clipPath:"url(#".concat(u,")"),d:r(o),color:_,"use:duration":"".concat(s,"ms")}))}});const L=P},431:(t,n,i)=>{i.d(n,{Z:()=>d});var e=i(8481),r=i(1320),o=i(8433),_=i(7700),s=i.n(_),u=i(8609),l=i(9881),c=i(749),a=(r.B.insert(".___SDots_sn9lg_gg_ .___SDot_sn9lg_gg_{transition-duration:var(--duration_sn9lg)}.___SDot_sn9lg_gg_{stroke-width:2px;stroke:#fff;r:6px;fill:#2bb3ff;transition-property:cx,cy;transition-timing-function:ease-in-out}.___SDot_sn9lg_gg_.__hide_sn9lg_gg_{display:none}.___SDot_sn9lg_gg_.__active_sn9lg_gg_{r:8px}.___SDot_sn9lg_gg_.__color_sn9lg_gg_{fill:var(--color_sn9lg)}","sn9lg_gg_"),{__SDots:"___SDots_sn9lg_gg_",__SDot:"___SDot_sn9lg_gg_","--duration":"--duration_sn9lg",_hide:"__hide_sn9lg_gg_",_active:"__active_sn9lg_gg_",_color:"__color_sn9lg_gg_","--color":"--color_sn9lg"}),h=["data","scale","value","display"];function f(t){var n,i=t.Element,l=t.styles,a=t.data,f=t.color,d=t.d3,g=t.x,y=t.y,p=t.eventEmitter,v=t.display,x=t.hide,Z=t.rootRef,S=t.scale,m=t.duration,b=void 0===m?500:m,k=(0,o.Z)((function(t){return t[g]})).center,A=(0,_.useState)(null),E=(0,e.Z)(A,2),j=E[0],w=E[1],P=(0,_.useCallback)((0,c.Z)((function(t){var n=(0,e.Z)(S,1)[0],i=(0,u.O$)(t,Z.current),r=(0,e.Z)(i,1)[0],o=(0,u.U_)(n,r);w(k(a,o))})),[S,a]),L=(0,_.useCallback)((0,c.Z)((function(){w(null)})),[]);(0,_.useEffect)((function(){var t=p.subscribe("onMouseMoveChart",(function(t){t.persist(),P(t)})),n=p.subscribe("onMouseLeaveChart",L);return function(){t(),n()}}),[p,S,a,g,y]);var M=a.reduce((function(t,n,e){var o,_=d.defined()(a[e-1]||{}),u=d.defined()(a[e+1]||{}),c=e===j,g=v||e===j||!_&&!u;return d.defined()(n)&&g?(t.push((o=(0,r.B)(l),s().createElement(i,o.cn("SDot",{key:e,render:"circle",visible:g,__excludeProps:h,value:n,index:e,cx:d.x()(n),cy:d.y()(n),active:c,hide:x,color:f})))),t):t}),[]);return n=(0,r.B)(l),s().createElement("g",n.cn("SDots",{"use:duration":"".concat(b,"ms")}),M)}f.style=a;const d=(0,l.Z)(f)},1108:(t,n,i)=>{i.d(n,{Z:()=>l});const e=Math.PI,r=2*e,o=1e-6,_=r-o;function s(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new s}s.prototype=u.prototype={constructor:s,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+e)},bezierCurveTo:function(t,n,i,e,r,o){this._+="C"+ +t+","+ +n+","+ +i+","+ +e+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(t,n,i,r,_){t=+t,n=+n,i=+i,r=+r,_=+_;var s=this._x1,u=this._y1,l=i-t,c=r-n,a=s-t,h=u-n,f=a*a+h*h;if(_<0)throw new Error("negative radius: "+_);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(f>o)if(Math.abs(h*l-c*a)>o&&_){var d=i-s,g=r-u,y=l*l+c*c,p=d*d+g*g,v=Math.sqrt(y),x=Math.sqrt(f),Z=_*Math.tan((e-Math.acos((y+f-p)/(2*v*x)))/2),S=Z/x,m=Z/v;Math.abs(S-1)>o&&(this._+="L"+(t+S*a)+","+(n+S*h)),this._+="A"+_+","+_+",0,0,"+ +(h*d>a*g)+","+(this._x1=t+m*l)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,i,s,u,l){t=+t,n=+n,l=!!l;var c=(i=+i)*Math.cos(s),a=i*Math.sin(s),h=t+c,f=n+a,d=1^l,g=l?s-u:u-s;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+h+","+f:(Math.abs(this._x1-h)>o||Math.abs(this._y1-f)>o)&&(this._+="L"+h+","+f),i&&(g<0&&(g=g%r+r),g>_?this._+="A"+i+","+i+",0,1,"+d+","+(t-c)+","+(n-a)+"A"+i+","+i+",0,1,"+d+","+(this._x1=h)+","+(this._y1=f):g>o&&(this._+="A"+i+","+i+",0,"+ +(g>=e)+","+d+","+(this._x1=t+i*Math.cos(u))+","+(this._y1=n+i*Math.sin(u))))},rect:function(t,n,i,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +e+"h"+-i+"Z"},toString:function(){return this._}};const l=u},5742:(t,n,i)=>{function e(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}i.d(n,{Z:()=>e}),Array.prototype.slice},3072:(t,n,i)=>{function e(t){return function(){return t}}i.d(n,{Z:()=>e})},7018:(t,n,i)=>{function e(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function r(t,n){this._context=t,this._k=(1-n)/6}i.d(n,{ZP:()=>o}),r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:e(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:e(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const o=function t(n){function i(t){return new r(t,n)}return i.tension=function(n){return t(+n)},i}(0)},8143:(t,n,i)=>{function e(t){this._context=t}function r(t){return new e(t)}i.d(n,{Z:()=>r}),e.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}}},5049:(t,n,i)=>{i.d(n,{Z:()=>u});var e=i(1108),r=i(5742),o=i(3072),_=i(8143),s=i(8260);function u(t,n){var i=(0,o.Z)(!0),u=null,l=_.Z,c=null;function a(o){var _,s,a,h=(o=(0,r.Z)(o)).length,f=!1;for(null==u&&(c=l(a=(0,e.Z)())),_=0;_<=h;++_)!(_<h&&i(s=o[_],_,o))===f&&((f=!f)?c.lineStart():c.lineEnd()),f&&c.point(+t(s,_,o),+n(s,_,o));if(a)return c=null,a+""||null}return t="function"==typeof t?t:void 0===t?s.x:(0,o.Z)(t),n="function"==typeof n?n:void 0===n?s.y:(0,o.Z)(n),a.x=function(n){return arguments.length?(t="function"==typeof n?n:(0,o.Z)(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),a):n},a.defined=function(t){return arguments.length?(i="function"==typeof t?t:(0,o.Z)(!!t),a):i},a.curve=function(t){return arguments.length?(l=t,null!=u&&(c=l(u)),a):l},a.context=function(t){return arguments.length?(null==t?u=c=null:c=l(u=t),a):u},a}},8260:(t,n,i)=>{function e(t){return t[0]}function r(t){return t[1]}i.d(n,{x:()=>e,y:()=>r})}}]);