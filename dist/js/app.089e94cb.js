(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"881afd7a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/SearchBeerApp-VueCLI/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0160":function(e,t,n){e.exports=n.p+"img/srm-9.232aa0a2.png"},"0182":function(e,t,n){e.exports=n.p+"img/OG_beer.79422271.png"},"0588":function(e,t,n){e.exports=n.p+"img/abv_drop.6fc32c44.png"},"0a2f":function(e,t,n){"use strict";var r=n("66d2"),a=n.n(r);a.a},"0cb1":function(e,t,n){e.exports=n.p+"img/hops-24.5846fa58.png"},"15cb":function(e,t,n){e.exports=n.p+"img/srm-30.16b95492.png"},"194f":function(e,t,n){e.exports=n.p+"img/srm_glass.3387b137.png"},"1c73":function(e,t,n){e.exports=n.p+"img/hops-72.50635ade.png"},"1f44":function(e,t,n){e.exports=n.p+"img/hops-0.89e37081.png"},"1fa6":function(e,t,n){"use strict";var r=n("9c94"),a=n.n(r);a.a},"23ee":function(e,t,n){e.exports=n.p+"img/hops-12.12986e7b.png"},"2c3a":function(e,t,n){},"304e":function(e,t,n){e.exports=n.p+"img/srm-40.ba8228d8.png"},3641:function(e,t,n){"use strict";var r=n("2c3a"),a=n.n(r);a.a},"37c7":function(e,t,n){var r={"./hops-0.png":"1f44","./hops-108.png":"957f","./hops-12.png":"23ee","./hops-120.png":"66de","./hops-24.png":"0cb1","./hops-36.png":"d958","./hops-48.png":"650b","./hops-60.png":"bc39","./hops-72.png":"1c73","./hops-84.png":"e5f6","./hops-96.png":"5805"};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="37c7"},"4a93":function(e,t,n){e.exports=n.p+"img/brew-dog.cb335b95.png"},"4b04":function(e,t,n){e.exports=n.p+"img/percent_icon.ee310c49.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("bb71"),i=n("a722");n("da64");r["a"].use(a["a"],{iconfont:"mdi",components:{VLayout:i["a"]}});n("5363");var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",width:"400",clipped:e.$vuetify.breakpoint.mdAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("SearchAndFilters")],1),n("v-toolbar",{attrs:{color:"indigo",dark:"",app:"","clipped-left":e.$vuetify.breakpoint.mdAndUp,fixed:""}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Beer App")]),n("v-toolbar-items",{attrs:{"mx-4":""}},[n("v-btn",{attrs:{flat:"",to:"/"}},[e._v("Home")]),n("v-btn",{attrs:{flat:"",to:"/about"}},[e._v("About")])],1),n("v-spacer"),this.$store.state.loading?n("v-toolbar-title",{staticClass:"white--text"},[e._v("Loading")]):e._e(),this.$store.state.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"red"}}):e._e()],1),n("v-content",[n("router-view")],1),n("v-footer",{staticClass:"white--text",attrs:{color:"blue-grey",app:""}},[n("span",[e._v("Vuetify")]),n("v-spacer"),n("span",[e._v("© 2018")])],1)],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-divider",{staticClass:"py-3"}),n("v-text-field",{staticClass:"pb-0 mb-0",attrs:{label:"Search for beer name/food/ingredients",outline:"",clearable:"","append-outer-icon":"search"},on:{blur:e.requestAPI,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.requestAPI(t):null},"click:append-outer":e.requestAPI},model:{value:e.userSearch,callback:function(t){e.userSearch=t},expression:"userSearch"}}),n("v-radio-group",{staticClass:"pt-0 mt-0 ",attrs:{row:""},model:{value:e.searchUserInputOption,callback:function(t){e.searchUserInputOption=t},expression:"searchUserInputOption"}},[n("v-radio",{attrs:{label:"by Beer Name",value:"beer_name"}}),n("v-radio",{attrs:{label:"by Food Pairing",value:"food"}}),n("v-radio",{attrs:{label:"by Malt",value:"malt"}}),n("v-radio",{attrs:{label:"by Hops",value:"hops"}})],1),n("v-divider"),e._l(e.items,function(t,r){return n("FilterSwitch",{key:r,attrs:{payload:t},on:{sliderChange:e.onFilterChange}})}),n("v-divider"),n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Beers brew after","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.filters.brewed_after,callback:function(t){e.$set(e.filters,"brewed_after",t)},expression:"filters.brewed_after"}}),n("v-date-picker",{attrs:{type:"month",max:(new Date).toISOString().substr(0,10),min:"2007-03-01","no-title":"",scrollable:""},on:{input:e.pickedDate},model:{value:e.date_after,callback:function(t){e.date_after=t},expression:"date_after"}})],1),n("v-divider"),n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[n("v-text-field",{attrs:{slot:"activator",label:"Beers brew before:","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.filters.brewed_before,callback:function(t){e.$set(e.filters,"brewed_before",t)},expression:"filters.brewed_before"}}),n("v-date-picker",{attrs:{type:"month",max:(new Date).toISOString().substr(0,10),min:"2007-03-01","no-title":"",scrollable:""},on:{input:e.pickedDate},model:{value:e.date_before,callback:function(t){e.date_before=t},expression:"date_before"}})],1)],2)},l=[],u=(n("28a5"),n("768b")),p=n("a4bb"),f=n.n(p),d=n("5d73"),m=n.n(d),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"py-2":"",column:""}},[n("v-flex",{staticClass:"text-xs-center"},[n("span",{staticClass:"subheading"},[e._v(e._s(this.payload.title))])]),n("v-flex",{staticClass:"px-4 my-0"},[n("v-range-slider",{staticClass:"my-0 py-0",attrs:{max:this.payload.range[1],min:this.payload.range[0]},on:{change:function(t){e.$emit("sliderChange",e.emitValue)}},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})],1),n("v-flex",{staticClass:"px-4 my-0"},[n("v-layout",{attrs:{"justify-space-between":""}},[n("v-text-field",{staticClass:"mt-0 px-2 mr-4",attrs:{"hide-details":"",rules:[e.textRules.min],solo:"","single-line":"",type:"number"},on:{blur:function(t){e.$emit("sliderChange",e.emitValue)}},model:{value:e.range[0],callback:function(t){e.$set(e.range,0,t)},expression:"range[0]"}}),n("v-text-field",{staticClass:"mt-0 px-2 ml-4",attrs:{rules:[e.textRules.max],"hide-details":"",solo:"","single-line":"",type:"number"},on:{blur:function(t){e.$emit("sliderChange",e.emitValue)}},model:{value:e.range[1],callback:function(t){e.$set(e.range,1,t)},expression:"range[1]"}})],1)],1)],1)},h=[],v=n("75fc"),b={props:["payload"],data:function(){var e=this;return{range:Object(v["a"])(this.payload.range),textRules:{min:function(t){return t>=e.payload.range[0]},max:function(t){return t<=e.payload.range[1]}}}},methods:{textFieldsLimitsCheck:function(){var e=!0;return this.range[0]<this.payload.range[0]&&(e=!1,this.range[0]=0),this.range[1]>this.payload.range[1]&&(e=!1,this.range[1]=this.payload.range[1]),e}},computed:{emitValue:function(){return{filterSwitch:this.payload.filter,value:this.range}}}},x=b,y=n("2877"),_=n("6544"),I=n.n(_),w=n("0e8f"),k=n("5963"),A=n("2677"),S=Object(y["a"])(x,g,h,!1,null,null,null);S.options.__file="FilterSwitch.vue";var E=S.exports;I()(S,{VFlex:w["a"],VLayout:i["a"],VRangeSlider:k["a"],VTextField:A["a"]});var D={components:{FilterSwitch:E},props:[],data:function(){return{menu:!1,menu2:!1,date_before:(new Date).toISOString().substr(0,7),date_after:"2007-03",searchUserInputOption:"beer_name",userSearch:"",filters:{beer_name:"",brewed_before:"",brewed_after:"",hops:"",malt:"",food:""},items:[{title:"ABV range",filter:"abv_",range:[0,60]},{title:"IBU range",filter:"ibu_",range:[0,255]},{title:"EBC range",filter:"ebc_",range:[0,120]}]}},created:function(){this.initializeFilter(),this.setQueryString()},methods:{initializeFilter:function(){var e=!0,t=!1,n=void 0;try{for(var r,a=m()(this.items);!(e=(r=a.next()).done);e=!0){var i=r.value;this.filters[i.filter+"gt"]=i.range[0],this.filters[i.filter+"lt"]=i.range[1]}}catch(o){t=!0,n=o}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}},check_and_filter:function(){var e={},t="id";f()(tempList.reduce(function(n,r){return e[r[t]]||(e[r[t]]=r),e},e)).map(function(t){return e[t]})},requestAPI:function(){this.$router.push("/results"),this.setQueryString(),this.$store.dispatch("fetchBeers")},setQueryString:function(){this.filters[this.searchUserInputOption]=this.userSearch;var e="";for(var t in this.filters)""!==this.filters[t]&&this.filters[t]&&(e+=t+"="+this.filters[t]+"&");console.log("STR before COMMIT: ",e),this.$store.commit("SET_FILTERS_PARAMETERS",e),this.filters[this.searchUserInputOption]=""},onFilterChange:function(e){this.filters[e.filterSwitch+"gt"]=e.value[0],this.filters[e.filterSwitch+"lt"]=e.value[1],this.requestAPI()},pickedDate:function(){this.menu=!1,this.menu2=!1,this.filters.brewed_before=this.formatDate(this.date_before),this.filters.brewed_after=this.formatDate(this.date_after),console.log("WE CLOSED THE CALENDAR, THIS IS THE FILTERS STATE"),console.log(this.filters),this.requestAPI()},formatDate:function(e){if(!e)return null;var t=e.split("-"),n=Object(u["a"])(t,2),r=n[0],a=n[1];return"".concat(a,"-").concat(r)}},computed:{}},B=D,C=n("a523"),O=n("2e4b"),T=n("ce7e"),j=n("e449"),V=n("67b6"),M=n("43a6"),L=Object(y["a"])(B,c,l,!1,null,null,null);L.options.__file="SearchAndFilters.vue";var P=L.exports;I()(L,{VContainer:C["a"],VDatePicker:O["a"],VDivider:T["a"],VMenu:j["a"],VRadio:V["a"],VRadioGroup:M["a"],VTextField:A["a"]});var R={name:"App",components:{SearchAndFilters:P},data:function(){return{drawer:null}},methods:{},computed:{},watch:{$route:function(e,t){}}},F=R,N=n("7496"),G=n("8336"),z=n("549c"),H=n("553a"),U=n("f774"),Q=n("490a"),q=n("9910"),W=n("71d9"),Y=n("2a7f"),Z=n("706c"),J=Object(y["a"])(F,o,s,!1,null,null,null);J.options.__file="App.vue";var $=J.exports;I()(J,{VApp:N["a"],VBtn:G["a"],VContent:z["a"],VFooter:H["a"],VNavigationDrawer:U["a"],VProgressCircular:Q["a"],VSpacer:q["a"],VToolbar:W["a"],VToolbarItems:Y["a"],VToolbarSideIcon:Z["a"],VToolbarTitle:Y["b"]});var K=n("8c4f"),X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":"","justify-space-around":"","fill-height":""}},[r("v-flex",[e._v("\n      I don't own this logo, this is just for place holder.\n    ")]),r("v-flex",[r("v-img",{attrs:{contain:"",width:"300",src:n("4a93")}})],1),r("v-flex",[e._v("\n      Welcome to the Beer App!\n    ")]),r("v-flex",[e._v("\n      Here you can search and discover all the beers brew by BrewDogs\n      "),r("v-layout",{attrs:{row:"","justify-space-around":""}},[r("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","prepend-icon":"search",label:"Search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitSearch()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),r("v-btn",{attrs:{round:"",color:"primary",dark:""},on:{click:function(t){e.submitSearch()}}},[e._v("Search & browse Now!")])],1)],1),r("v-flex",[e._v("\n      Or\n    ")]),r("v-flex",[r("v-btn",{attrs:{round:"",color:"primary",dark:"",to:"/results"}},[e._v("Simply browse")])],1),r("v-flex",[e._v("\n      Or\n    ")]),r("v-flex",[r("v-btn",{attrs:{round:"",color:"primary",dark:"",to:"/beer/random"}},[e._v("Get some random beer!")])],1)],1)],1)},ee=[],te=(n("386d"),{name:"Home",data:function(){return{search:""}},methods:{submitSearch:function(){""!==this.search&&this.$store.commit("SET_FILTERS_PARAMETERS","beer_name="+this.search),this.$router.push("/results")}}}),ne=te,re=n("adda"),ae=Object(y["a"])(ne,X,ee,!1,null,null,null);ae.options.__file="Home.vue";var ie=ae.exports;I()(ae,{VBtn:G["a"],VContainer:C["a"],VFlex:w["a"],VImg:re["a"],VLayout:i["a"],VTextField:A["a"]});var oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-data-iterator",{attrs:{items:e.beers,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,"content-tag":"v-layout",row:"",wrap:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"item",fn:function(e){return n("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[n("BeerCard",{attrs:{beerInformation:e.item}})],1)}}])})],1)},se=[],ce=(n("c5f6"),n("cebc")),le=n("bd86"),ue=n("2f62"),pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{hover:"",to:"/beer/"+this.beerInformation.id}},[r("v-layout",[r("v-flex",{attrs:{xs4:""}},[r("v-img",{staticClass:"white lighten-2",attrs:{src:""+e.beerInformation.image_url,"lazy-src":n("a6db"),contain:"","max-height":"250px","max-width":"150px"}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"black lighten-5"}})],1)],1)],1),r("v-flex",{attrs:{xs8:""}},[r("v-layout",{attrs:{column:""}},[r("v-flex",[r("v-card-title",[r("div",[r("h4",[e._v(e._s(this.beerInformation.name))]),r("br"),r("span",{staticClass:"font-italic"},[e._v('"'+e._s(this.beerInformation.tagline)+'"')])])]),r("v-divider"),r("v-card-text",[e._v("\n            "+e._s(this.beerInformation.description)+"\n          ")])],1),r("v-flex",[r("v-layout",{attrs:{"align-end":"","justify-space-around":"",row:"","fill-height":""}},[r("v-flex",{staticClass:"text-xs-center"},[r("v-tooltip",{attrs:{bottom:""}},[r("div",{attrs:{slot:"activator"},slot:"activator"},[r("v-img",{attrs:{src:n("0588"),contain:"","max-height":"60px"}}),r("div",{staticClass:"mt-1"},[r("span",[e._v("ABV: "+e._s(this.beerInformation.abv)+"%")])])],1),r("span",[e._v("Alcohol by volume")])])],1),r("v-flex",{staticClass:"text-xs-center"},[r("v-tooltip",{attrs:{bottom:""}},[r("div",{attrs:{slot:"activator"},slot:"activator"},[r("v-img",{attrs:{src:n("f0d2")("./srm-"+e.srmIndex+".png"),contain:"","max-height":"60px"}}),r("div",{staticClass:"mt-1"},[r("span",[e._v("SRM: "+e._s(this.beerInformation.srm))])])],1),r("span",[e._v("Beer color")])])],1),r("v-flex",{staticClass:"text-xs-center"},[r("v-tooltip",{attrs:{bottom:""}},[r("div",{attrs:{slot:"activator"},slot:"activator"},[r("v-img",{attrs:{src:n("37c7")("./hops-"+e.ibuIndex+".png"),contain:"","max-height":"60px"}}),r("div",{staticClass:"mt-1"},[r("span",[e._v("IBU: "+e._s(this.beerInformation.ibu))])])],1),r("span",[e._v("Relative bitterness of beer")])])],1),r("v-flex",{staticClass:"text-xs-center"},[r("v-tooltip",{attrs:{bottom:""}},[r("div",{attrs:{slot:"activator"},slot:"activator"},[r("v-img",{attrs:{src:n("0182"),contain:"","max-height":"60px"}}),r("div",{staticClass:"mt-1"},[r("span",[e._v("OG: "+e._s(this.beerInformation.target_og))])])],1),r("span",[e._v("Original gravity of beer")])])],1)],1)],1)],1)],1)],1)],1)},fe=[],de={data:function(){return{}},props:["beerInformation"],computed:{srmIndex:function(){var e=[2,3,4,6,9,12,15,18,20,24,30,40],t=this.beerInformation.srm,n=e.reduce(function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e});return n},ibuIndex:function(){for(var e=[],t=[0,120],n=12,r=t[0];r<=t[1];r+=n)e.push(r);var a=this.beerInformation.ibu,i=e.reduce(function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e});return i}}},me=de,ge=(n("0a2f"),n("b0af")),he=n("99d9"),ve=n("12b2"),be=n("3a2f"),xe=Object(y["a"])(me,pe,fe,!1,null,"74420dda",null);xe.options.__file="BeerCard.vue";var ye=xe.exports;I()(xe,{VCard:ge["a"],VCardText:he["a"],VCardTitle:ve["a"],VDivider:T["a"],VFlex:w["a"],VImg:re["a"],VLayout:i["a"],VProgressCircular:Q["a"],VTooltip:be["a"]});var _e={name:"DisplaySearchResults",data:function(){return Object(le["a"])({show:!1,rowsPerPageItems:[12,24,36],pagination:{page:1,rowsPerPage:24},type:"number",number:0,duration:300,offset:0,easing:"easeInOutCubic"},"number",0)},components:{BeerCard:ye},watch:{pagination:function(e,t){this.setPaginationQuery(),e.page!=t.page&&this.$vuetify.goTo(this.target,this.options),this.beers.length<=e.page*e.rowsPerPage&&(console.log("We are at last page, getting more data"),this.$store.dispatch("fetchMoreBeers"))}},mounted:function(){this.setPaginationQuery()},computed:Object(ce["a"])({},Object(ue["b"])(["beers"]),{target:function(){var e=this[this.type];return isNaN(e)?e:Number(e)},options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}}),methods:{setPaginationQuery:function(){var e="page="+this.pagination.page+"&per_page="+2*this.pagination.rowsPerPage;this.$store.commit("SET_PAGINATION_PARAMETERS",e)}}},Ie=_e,we=(n("3641"),n("c377")),ke=Object(y["a"])(Ie,oe,se,!1,null,null,null);ke.options.__file="DisplaySearchResults.vue";var Ae=ke.exports;I()(ke,{VContainer:C["a"],VDataIterator:we["a"],VFlex:w["a"]});var Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-xl":"","justify-center":""}},[r("v-layout",{attrs:{column:"","flex-child":"",wrap:""}},[r("v-flex",[r("v-btn",{attrs:{to:"/beer/random"},on:{click:function(t){e.requestBeer("random")}}},[e._v("\n        Random\n      ")])],1),r("v-flex",[r("v-progress-linear",{attrs:{indeterminate:e.loadingBeer}})],1),r("v-flex",[e.loadingBeer?e._e():r("v-layout",{attrs:{"flex-child":"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm4:"","d-flex":""}},[r("v-img",{attrs:{src:""+e.idvBeerInformation.image_url,"lazy-src":n("a6db"),contain:"","max-height":"350px"}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"black lighten-5"}})],1)],1)],1),r("v-flex",{attrs:{xs12:"",sm8:"","d-flex":""}},[r("v-layout",{attrs:{column:""}},[r("v-flex",[r("div",[r("h4",{staticClass:"display-2"},[e._v(e._s(this.idvBeerInformation.name))]),r("br"),r("span",{staticClass:" headline font-italic"},[e._v('"'+e._s(this.idvBeerInformation.tagline)+'"')])]),r("v-divider"),r("v-layout",{attrs:{"py-4":"",column:""}},[r("v-flex",{attrs:{"py-3":""}},[r("h5",{staticClass:"title"},[e._v("Description")])]),r("v-flex",[r("div",[e._v("\n                    "+e._s(this.idvBeerInformation.description)+"\n                  ")])]),r("v-flex",{attrs:{"pb-2":""}},[r("span",{staticClass:"font-weight-medium font-italic"},[e._v("First brewed: "+e._s(this.idvBeerInformation.first_brewed))])])],1),e.loadingBeer?e._e():r("BrewSheet",{attrs:{beerInformation:this.idvBeerInformation}})],1)],1)],1)],1)],1),r("v-spacer"),r("v-flex",{attrs:{"d-flex":"","align-start":""}})],1)],1)},Ee=[],De=(n("7514"),n("7618")),Be=(n("7f7f"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",{staticClass:"sub-header py-3"},[e._v(" Brew Sheet:")]),r("table",[e._l(e.items,function(t){return r("tr",{key:t.title},[r("td",{attrs:{xs4:""}},[r("v-img",{attrs:{src:t.imageSrc,contain:"","max-height":"60px"}})],1),r("td",{staticClass:"py-2",attrs:{xs3:""}},[e._v("\n        "+e._s(t.title)+"\n      ")]),r("td",{attrs:{xs6:""}},[e._v("\n        "+e._s(t.content)+" "+e._s(t.append)+"\n      ")])])}),r("tr",[r("td",[r("v-img",{attrs:{src:n("8799"),contain:"","max-height":"60px"}})],1),r("td",[r("h5",[e._v("\n          "+e._s(e.foodItems.title)+"\n        ")])]),r("td",e._l(e.foodItems.content,function(t,n){return r("div",{key:n},[e._v("\n          "+e._s(t)+"\n        ")])}),0)]),r("tr",[r("td",[r("v-icon",[e._v("\n          "+e._s(e.ingredientsItems.icon)+"\n        ")])],1),r("td",[r("h5",[e._v("\n          "+e._s(e.ingredientsItems.title)+"\n        ")])]),r("td",e._l(e.ingredientsItems.content,function(t,n){return r("div",{key:t.key},[r("span",{staticClass:"body-2"},[e._v("\n            "+e._s(n)+":\n          ")]),r("span",[e._v(" "+e._s(e.formatList(t)))])])}),0)])],2)])}),Ce=[],Oe={props:["beerInformation"],data:function(){return{items:[{imageSrc:"",key:"abv",typeImg:"percent_icon",dynamicLink:!1,title:"ABV",content:"",append:"%"},{imageSrc:"",key:"ibu",typeImg:"hops",dynamicLink:!0,title:"IBU",content:"",append:""},{imageSrc:"",key:"ebc",typeImg:"OG_beer",dynamicLink:!1,title:"EBC",content:"",append:""},{imageSrc:"",key:"srm",typeImg:"srm",dynamicLink:!0,title:"SRM",content:"",append:""},{imageSrc:"",key:"target_og",typeImg:"OG_beer",dynamicLink:!1,title:"Target OG",content:"",append:""},{imageSrc:"",key:"ph",typeImg:"pH",dynamicLink:!1,title:"pH",content:"",append:""},{imageSrc:"",key:"attenuation_level",typeImg:"percent_icon",dynamicLink:!1,title:"Attenuation Level",content:"",append:"%"},{imageSrc:"",key:"brewers_tips",typeImg:"tips",dynamicLink:!1,title:"Brewers Tips",content:"",append:""}],foodItems:{icon:"restaurant_menu",title:"Food",key:"food_pairing",content:null},ingredientsItems:{icon:"menu",title:"Ingredients",key:"ingredients",content:null}}},mounted:function(){this.setItemContent()},methods:{setItemContent:function(){var e=this;console.log("Trying to setItem"),this.foodItems.content=this.beerInformation[this.foodItems.key],this.ingredientsItems.content=this.beerInformation[this.ingredientsItems.key],this.items.map(function(t){t.dynamicLink?t.imageSrc=e.srcTypeImg(t.typeImg):t.imageSrc=e.srcImg(t.typeImg),t.content=e.beerInformation[t.key]})},formatList:function(e){return"string"===typeof e?e:(console.log(e),e.filter(function(e,t,n){return n.map(function(e){return e["name"]}).indexOf(e["name"])===t}).map(function(e){return e.name}).join(", "))},srcImg:function(e){return n("9e01")("./"+e+".png")},srcTypeImg:function(e){return"undefined"===typeof this.ibuIndex||"undefined"===typeof this.srmIndex?n("cf05"):n("9e01")("./"+e+"-"+this.getIndex(e)+".png")},getIndex:function(e){if("srm"===e){var t=[2,3,4,6,9,12,15,18,20,24,30,40],n=this.beerInformation.srm,r=t.reduce(function(e,t){return Math.abs(t-n)<Math.abs(e-n)?t:e});return r}if("hops"===e){for(var a=[],i=[0,120],o=12,s=i[0];s<=i[1];s+=o)a.push(s);var c=this.beerInformation.ibu;r=a.reduce(function(e,t){return Math.abs(t-c)<Math.abs(e-c)?t:e});return r}return""}},computed:{srmIndex:function(){var e=[2,3,4,6,9,12,15,18,20,24,30,40],t=this.beerInformation.srm,n=e.reduce(function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e});return n},ibuIndex:function(){for(var e=[],t=[0,120],n=12,r=t[0];r<=t[1];r+=n)e.push(r);var a=this.beerInformation.ibu,i=e.reduce(function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e});return i}}},Te=Oe,je=(n("1fa6"),n("132d")),Ve=Object(y["a"])(Te,Be,Ce,!1,null,"6b056008",null);Ve.options.__file="BrewSheet.vue";var Me=Ve.exports;I()(Ve,{VIcon:je["a"],VImg:re["a"]});var Le={name:"beer",props:["id"],components:{BeerCard:ye,BrewSheet:Me},data:function(){return{loadingBeer:!0,idvBeerInformation:{},foodItems:{icon:"restaurant_menu",title:"Food",key:"food_pairing",content:null},ingredientsItems:{icon:"menu",title:"Ingredients",key:"ingredients",content:null},oneLineItems:[{icon:"mdi-flask-outline",title:"ph",key:"ph",content:null},{icon:"restaurant_menu",title:"Attenuation Level",key:"attenuation_level",content:null},{icon:"restaurant_menu",title:"Brewers Tips",key:"brewers_tips",content:null}]}},methods:{setItemContent:function(){var e=this;console.log("Trying to setItem"),this.foodItems.content=this.idvBeerInformation[this.foodItems.key],this.ingredientsItems.content=this.idvBeerInformation[this.ingredientsItems.key],this.oneLineItems.map(function(t){t.content=e.idvBeerInformation[t.key]})},formatList:function(e){return"string"===typeof e?e:(console.log(e),e.filter(function(e,t,n){return n.map(function(e){return e["name"]}).indexOf(e["name"])===t}).map(function(e){return e.name}).join(", "))},requestBeer:function(e){"string"===typeof e&&console.log("param"+Object(De["a"])(e));var t=this.beers.find(function(t){return t.id==e});t?(this.idvBeerInformation=t,this.loadingBeer=!1):(this.loadingBeer=!0,this.$store.dispatch("fetchUniqueBeers",e))}},mounted:function(){this.requestBeer(this.id)},computed:Object(ce["a"])({},Object(ue["b"])(["beers"]),{srmIndex:function(){var e=[2,3,4,6,9,12,15,18,20,24,30,40],t=this.idvBeerInformation.srm,n=e.reduce(function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e});return n},ibuIndex:function(){for(var e=[],t=[0,120],n=12,r=t[0];r<=t[1];r+=n)e.push(r);var a=this.idvBeerInformation.ibu,i=e.reduce(function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e});return i}}),watch:{"$route.params.id":function(e){this.requestBeer(e)},beers:function(e){this.idvBeerInformation=e[0],this.setItemContent(),this.loadingBeer=!1}}},Pe=Le,Re=n("8e36"),Fe=Object(y["a"])(Pe,Se,Ee,!1,null,null,null);Fe.options.__file="DisplayBeer.vue";var Ne=Fe.exports;I()(Fe,{VBtn:G["a"],VContainer:C["a"],VDivider:T["a"],VFlex:w["a"],VImg:re["a"],VLayout:i["a"],VProgressCircular:Q["a"],VProgressLinear:Re["a"],VSpacer:q["a"]}),r["a"].use(K["a"]);var Ge=new K["a"]({routes:[{path:"/",name:"home",component:ie},{path:"/results",name:"results",component:Ae},{path:"/beer/:id",name:"beer",props:!0,component:Ne},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),ze=n("bc3a"),He=n.n(ze),Ue=n("a7fe"),Qe=n.n(Ue);r["a"].use(ue["a"]),r["a"].use(Qe.a,He.a);var qe=new ue["a"].Store({state:{beers:[],loading:!1,pagination_parameters:"",filter_parameters:""},mutations:{SET_BEERS:function(e,t){e.beers=t},ADD_BEERS:function(e,t){var n=[].concat(Object(v["a"])(e.beers),Object(v["a"])(t)),r={},a="id",i=f()(n.reduce(function(e,t){return r[t[a]]||(r[t[a]]=t),r},r)).map(function(e){return r[e]});e.beers=i},SET_PAGINATION_PARAMETERS:function(e,t){e.pagination_parameters=t},SET_FILTERS_PARAMETERS:function(e,t){e.filter_parameters=t},SET_LOADING:function(e,t){e.loading=t}},getters:{},actions:{fetchBeers:function(e){var t=e.commit;t("SET_LOADING",!0),He.a.get("https://api.punkapi.com/v2/beers?"+this.state.pagination_parameters+"&"+this.state.filter_parameters).then(function(e){return e.data}).then(function(e){0===e.length&&console.log("Data was empty"),console.log("SET BEER Fetching from API"),console.log(e),t("SET_BEERS",e),t("SET_LOADING",!1)}).catch(function(e){return console.log(e)})},fetchMoreBeers:function(e){var t=e.commit;t("SET_LOADING",!0),He.a.get("https://api.punkapi.com/v2/beers?"+this.state.pagination_parameters+"&"+this.state.filter_parameters).then(function(e){return e.data}).then(function(e){0===e.length&&console.log("Data was empty"),console.log("ADDING BEER Fetching from API"),console.log(e),t("ADD_BEERS",e),t("SET_LOADING",!1)}).catch(function(e){return console.log(e)})},fetchUniqueBeers:function(e,t){var n=e.commit;n("SET_LOADING",!0),He.a.get("https://api.punkapi.com/v2/beers/"+t).then(function(e){return e.data}).then(function(e){0===e.length&&console.log("Data was empty"),console.log("UNIQUE BEER Fetching from API"),console.log(e),n("SET_BEERS",e),n("SET_LOADING",!1)}).catch(function(e){return console.log(e)})}}});r["a"].use(Qe.a,He.a),r["a"].config.productionTip=!1,new r["a"]({router:Ge,store:qe,render:function(e){return e($)}}).$mount("#app")},5805:function(e,t,n){e.exports=n.p+"img/hops-96.f103b199.png"},"58c8":function(e,t,n){e.exports=n.p+"img/srm-15.21b5c02a.png"},"600f":function(e,t,n){e.exports=n.p+"img/srm-4.23c433dd.png"},"650b":function(e,t,n){e.exports=n.p+"img/hops-48.0f9879ea.png"},"66d2":function(e,t,n){},"66de":function(e,t,n){e.exports=n.p+"img/hops-120.48ca3fba.png"},7276:function(e,t,n){e.exports=n.p+"img/srm-20.b0d95403.png"},"78a2":function(e,t,n){e.exports=n.p+"img/abv_beer.a1cd49bb.png"},8799:function(e,t,n){e.exports=n.p+"img/food_icon.b2e8022e.png"},"8a9a":function(e,t,n){e.exports=n.p+"img/srm-3.87ae0d3f.png"},"8e9b":function(e,t,n){e.exports=n.p+"img/srm-18.ccc2dc56.png"},"90eb":function(e,t,n){e.exports=n.p+"img/tips.1f1d55bf.png"},"957f":function(e,t,n){e.exports=n.p+"img/hops-108.0c38bb04.png"},"9c94":function(e,t,n){},"9e01":function(e,t,n){var r={"./OG_beer.png":"0182","./abv_beer.png":"78a2","./abv_beer2.png":"a07d","./abv_drop.png":"0588","./barley.png":"f44e","./brew-dog.png":"4a93","./food_icon.png":"8799","./hops-0.png":"1f44","./hops-108.png":"957f","./hops-12.png":"23ee","./hops-120.png":"66de","./hops-24.png":"0cb1","./hops-36.png":"d958","./hops-48.png":"650b","./hops-60.png":"bc39","./hops-72.png":"1c73","./hops-84.png":"e5f6","./hops-96.png":"5805","./hops.png":"f8e6","./lazy_beer.png":"a6db","./logo.png":"cf05","./pH.png":"e186","./percent_icon.png":"4b04","./srm-12.png":"c37d","./srm-15.png":"58c8","./srm-18.png":"8e9b","./srm-2.png":"b516","./srm-20.png":"7276","./srm-24.png":"e903","./srm-3.png":"8a9a","./srm-30.png":"15cb","./srm-4.png":"600f","./srm-40.png":"304e","./srm-6.png":"d1a7","./srm-9.png":"0160","./srm_glass.png":"194f","./tips.png":"90eb","./téléchargement.png":"c12c"};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="9e01"},a07d:function(e,t,n){e.exports=n.p+"img/abv_beer2.9e4aabfb.png"},a6db:function(e,t,n){e.exports=n.p+"img/lazy_beer.f1c05193.png"},b516:function(e,t,n){e.exports=n.p+"img/srm-2.dcaf79c2.png"},bc39:function(e,t,n){e.exports=n.p+"img/hops-60.4a051424.png"},c12c:function(e,t){e.exports="data:image/png;base64,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"},c37d:function(e,t,n){e.exports=n.p+"img/srm-12.e966d6d2.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d1a7:function(e,t,n){e.exports=n.p+"img/srm-6.88768ebb.png"},d958:function(e,t,n){e.exports=n.p+"img/hops-36.3832d4af.png"},e186:function(e,t,n){e.exports=n.p+"img/pH.ab81009c.png"},e5f6:function(e,t,n){e.exports=n.p+"img/hops-84.72720b56.png"},e903:function(e,t,n){e.exports=n.p+"img/srm-24.b7b2f9c3.png"},f0d2:function(e,t,n){var r={"./srm-12.png":"c37d","./srm-15.png":"58c8","./srm-18.png":"8e9b","./srm-2.png":"b516","./srm-20.png":"7276","./srm-24.png":"e903","./srm-3.png":"8a9a","./srm-30.png":"15cb","./srm-4.png":"600f","./srm-40.png":"304e","./srm-6.png":"d1a7","./srm-9.png":"0160"};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="f0d2"},f44e:function(e,t,n){e.exports=n.p+"img/barley.6d3b5bc8.png"},f8e6:function(e,t,n){e.exports=n.p+"img/hops.e17d5f4d.png"}});
//# sourceMappingURL=app.089e94cb.js.map