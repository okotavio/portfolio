(self.webpackChunkotavio_vidal_product_designer=self.webpackChunkotavio_vidal_product_designer||[]).push([[605],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),c=r(7316),l=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,l),s=f(t),m=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(m,u({},a))}},7198:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),o=r(5483),a=r(5610),c=r(5414);function l(e){var t=e.children,r=(e.props,(0,n.useState)("false")),l=r[0],s=r[1];return n.createElement(n.Fragment,null,n.createElement(c.q,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Otávio Vidal — Product Designer"),n.createElement("link",{rel:"canonical",href:"http://otavio.work"})),n.createElement(o.Z,{handletoggle:function(){s(!l)}}),t,n.createElement(a.Z,null))}},9:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1274),a=r(7198),c=r(1039),l=r(1445),s=r(2359),u=r(2938);t.default=function(e){var t=e.data.mdx,r=(0,s.d)(t.frontmatter.thumbnail);(0,s.d)(t.frontmatter.endimage),t.frontmatter.color;return n.createElement(a.Z,null,n.createElement(c.Z,null,n.createElement(u.E.div,{initial:{y:10},animate:{y:0},transition:{duration:.2}},n.createElement(l.Z,{container:!0,spacing:5,style:{marginTop:"40px"}},n.createElement(l.Z,{item:!0,lg:3},n.createElement("div",{className:"post-sidebar-wrapper"},n.createElement("div",{className:"post-sidebar-content"},n.createElement("h2",{className:"post-title"},t.frontmatter.title),n.createElement("p",{className:"post-description"},t.frontmatter.description),n.createElement("p",{className:"post-date"},t.frontmatter.date),n.createElement("a",{href:t.frontmatter.prototype,target:"_blank"},n.createElement("div",{className:"post-cta"},"View prototype"))))),n.createElement(l.Z,{item:!0,lg:1}),n.createElement(l.Z,{item:!0,lg:8},n.createElement("article",null,n.createElement("div",{className:"post-photo",style:{background:t.frontmatter.color}},n.createElement(s.G,{image:r,alt:"teste"})),n.createElement("div",{className:"post-content"},n.createElement(o.MDXRenderer,null,t.body))))))))}}}]);
//# sourceMappingURL=component---src-pages-work-mdx-slug-js-afba35915bf9e3640f0e.js.map