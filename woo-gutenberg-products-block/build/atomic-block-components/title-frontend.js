(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[13],{142:function(e,t,c){"use strict";var n=c(10),o=c.n(n),r=c(15),a=c.n(r),i=(c(3),c(18)),s=c(5),l=c.n(s),u=(c(160),["className","disabled","name","permalink"]);t.a=function(e){var t=e.className,c=void 0===t?"":t,n=e.disabled,r=void 0!==n&&n,s=e.name,p=e.permalink,b=void 0===p?"":p,d=a()(e,u),f=l()("wc-block-components-product-name",c);return r?React.createElement("span",o()({className:f},d),Object(i.decodeEntities)(s)):React.createElement("a",o()({className:f,href:b},d),Object(i.decodeEntities)(s))}},160:function(e,t){},200:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=function(e,t){var c=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":c[n]="false"!==t[n]&&!1!==t[n];break;case"number":c[n]=parseInt(t[n],10);break;case"array":case"object":c[n]=JSON.parse(t[n]);break;default:c[n]=t[n]}else c[n]=e[n].default})),c}},293:function(e,t,c){"use strict";var n=c(10),o=c.n(n),r=c(200);t.a=function(e){return function(t){return function(c){var n=Object(r.a)(e,c);return React.createElement(t,o()({},c,n))}}}},297:function(e,t){},317:function(e,t,c){"use strict";c.r(t);var n=c(293),o=c(7),r=c.n(o),a=(c(3),c(5)),i=c.n(a),s=c(83),l=c(210),u=c(11),p=function(e){var t=e.color,c=e.fontSize;return Object(u.p)()?{color:t,fontSize:c}:{}},b=c(209),d=c(142),f=c(57),m=(c(297),Object(b.withProductDataContext)((function(e){var t,c,n,o=e.className,a=e.headingLevel,b=void 0===a?2:a,m=e.productLink,O=void 0===m||m,j=e.align,v=e.color,y=e.customColor,k=e.fontSize,w=e.customFontSize,g=Object(s.useInnerBlockLayoutContext)().parentClassName,h=Object(s.useProductDataContext)().product,S=Object(f.a)().dispatchStoreEvent,E="h".concat(b),N=Object(l.getColorClassName)("color",v),z=Object(l.getFontSizeClass)(k),C=i()((t={"has-text-color":v||y,"has-font-size":k||w},r()(t,N,N),r()(t,z,z),t));return h.id?React.createElement(E,{className:i()(o,"wc-block-components-product-title",(c={},r()(c,"".concat(g,"__product-title"),g),r()(c,"wc-block-components-product-title--align-".concat(j),j&&Object(u.p)()),c))},React.createElement(d.a,{className:i()(r()({},C,Object(u.p)())),disabled:!O,name:h.name,permalink:h.permalink,rel:O?"nofollow":null,style:p({color:y,fontSize:w}),onClick:function(){S("product-view-link",{product:h})}})):React.createElement(E,{className:i()(o,"wc-block-components-product-title",(n={},r()(n,"".concat(g,"__product-title"),g),r()(n,"wc-block-components-product-title--align-".concat(j),j&&Object(u.p)()),r()(n,C,Object(u.p)()),n)),style:p({color:y,fontSize:w})})})));function O(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function j(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?O(Object(c),!0).forEach((function(t){r()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):O(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var v={headingLevel:{type:"number",default:2},productLink:{type:"boolean",default:!0},productId:{type:"number",default:0}};Object(u.p)()&&(v=j(j({},v),{},{align:{type:"string"},color:{type:"string"},customColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}}));var y=v;t.default=Object(n.a)(y)(m)}}]);