(function(t){function e(e){for(var o,i,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/text-editor/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cb4":function(t,e,n){"use strict";var o=n("b3ce"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Header"),n("div",{staticClass:"container"},[n("TextEditor",{attrs:{value:t.content},on:{input:t.changeContent}})],1),n("Footer")],1)},r=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"title"},[n("h1",{staticClass:"heading"},[t._v("Text Editor")])])])}],l=(n("e7d9"),n("2877")),s={},u=Object(l["a"])(s,i,c,!1,null,"8a4d1e2c",null),d=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("EditorToolbar",{on:{"change-color":t.changeColorText,"change-size":t.changeSizeText,"change-background":t.changeBackgroundText,"copy-json":t.copyJson}}),n("p",{ref:"editable",staticClass:"text-editor",attrs:{contenteditable:""},on:{input:t.changeContent}})],1)},f=[],v=(n("d81d"),n("2909")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-tollbar"},[n("div",{staticClass:"selects-container"},[n("select",{staticClass:"change-parameter-select",on:{change:t.onColorChange}},[n("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("- Color -")]),n("option",{attrs:{value:"red"}},[t._v("Red")]),n("option",{attrs:{value:"blue"}},[t._v("Blue")]),n("option",{attrs:{value:"green"}},[t._v("Green")]),n("option",{attrs:{value:"black"}},[t._v("Black")])]),n("select",{staticClass:"change-parameter-select",on:{change:t.onSizeChange}},[n("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("- Size -")]),n("option",{attrs:{value:"1"}},[t._v("Small")]),n("option",{attrs:{value:"5"}},[t._v("Normal")]),n("option",{attrs:{value:"6"}},[t._v("Big")]),n("option",{attrs:{value:"7"}},[t._v("Very Big")])]),n("select",{staticClass:"change-parameter-select",on:{change:t.onBackgroundChange}},[n("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("- Background -")]),n("option",{attrs:{value:"red"}},[t._v("Red")]),n("option",{attrs:{value:"blue"}},[t._v("Blue")]),n("option",{attrs:{value:"green"}},[t._v("Green")]),n("option",{attrs:{value:"black"}},[t._v("Black")])])]),n("div",{staticClass:"button-container"},[n("button",{staticClass:"print-button",attrs:{type:"button"},on:{click:t.onButtonJsonClick}},[t._v("Print JSON to console")])])])},m=[],g={methods:{onColorChange:function(t){this.$emit("change-color",t.target.value)},onSizeChange:function(t){this.$emit("change-size",t.target.value)},onBackgroundChange:function(t){this.$emit("change-background",t.target.value)},onButtonJsonClick:function(t){this.$emit("copy-json",t.target.value)}}},b=g,C=(n("0cb4"),Object(l["a"])(b,h,m,!1,null,"5ea9a59e",null)),_=C.exports,y={components:{EditorToolbar:_},props:{value:{type:String,default:""}},mounted:function(){this.$refs.editable.innerHTML=this.value,document.execCommand("styleWithCSS",!1,!0)},methods:{changeContent:function(t){this.$emit("input",t.target.innerHTML)},changeColorText:function(t){document.execCommand("foreColor",!1,t)},changeSizeText:function(t){document.execCommand("fontSize",!1,t)},changeBackgroundText:function(t){document.execCommand("backColor",!1,t)},copyJson:function(){var t=Object(v["a"])(this.$refs.editable.childNodes).map((function(t){return{text:t.textContent,fontSize:t.style&&t.style.fontSize,color:t.style&&t.style.color,backgroundColor:t.style&&t.style.backgroundColor}}));console.log(t)}}},x=y,k=(n("ff60"),Object(l["a"])(x,p,f,!1,null,"40ccfe75",null)),O=k.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer-text"},[n("p",{staticClass:"made-by"},[t._v(" Made by "),n("a",{staticClass:"link-to-profile",attrs:{href:"https://github.com/lyudmyla-horbyk"}},[t._v("Liudmyla Liashuk")]),t._v(" in 2020 ")])])])}],T=(n("a079"),{}),$=Object(l["a"])(T,j,S,!1,null,"661c88f2",null),w=$.exports,B=n("2f62"),E={name:"app",components:{Header:d,TextEditor:O,Footer:w},computed:Object(B["c"])(["content"]),methods:Object(B["b"])(["changeContent"])},z=E,P=(n("5c0b"),Object(l["a"])(z,a,r,!1,null,null,null)),J=P.exports;o["a"].use(B["a"]);var M=new B["a"].Store({state:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},mutations:{changeContent:function(t,e){t.content=e}}});o["a"].config.productionTip=!1,new o["a"]({store:M,render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},8263:function(t,e,n){},"9c0c":function(t,e,n){},a079:function(t,e,n){"use strict";var o=n("e189"),a=n.n(o);a.a},b3ce:function(t,e,n){},e189:function(t,e,n){},e7d9:function(t,e,n){"use strict";var o=n("8263"),a=n.n(o);a.a},f9a0:function(t,e,n){},ff60:function(t,e,n){"use strict";var o=n("f9a0"),a=n.n(o);a.a}});
//# sourceMappingURL=app.ebb0d53b.js.map