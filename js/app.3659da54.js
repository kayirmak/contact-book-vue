(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/contact-book-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1e22":function(t,e,s){t.exports=s.p+"img/photo.8fb57094.jpg"},"2a3b":function(t,e,s){"use strict";s("dffe")},"329c":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o={name:"ConApp",mounted:function(){this.$store.dispatch("getUsers")}},i=o,c=(s("5c0b"),s("2877")),u=Object(c["a"])(i,n,r,!1,null,null,null),l=u.exports,d=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("users")],1)},h=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"users"},[s("div",{staticClass:"users-top-bar"},[s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchData,expression:"searchData"}],attrs:{type:"text",placeholder:"Type Username"},domProps:{value:t.searchData},on:{input:function(e){e.target.composing||(t.searchData=e.target.value)}}})]),s("div",{staticClass:"top-bar__select"},[s("label",{attrs:{for:"sort-select"}},[t._v("Sort By")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSortVal,expression:"selectedSortVal"}],attrs:{id:"sort-select"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedSortVal=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:""}},[t._v("Default")]),s("option",{attrs:{value:"username"}},[t._v("Username")])])])]),s("div",{staticClass:"users-main"},[s("User",{attrs:{users:t.usersData,selectedVal:t.selectedSortVal},on:{showModal:t.showModal}}),s("Details",{on:{showModal:t.showModal}}),t.isShow?s("Modal",{on:{hideModal:t.hideModal,sendForm:t.sendForm},scopedSlots:t._u([{key:"modal-header-title",fn:function(){return[t._v("Изменить")]},proxy:!0},{key:"modal-footer",fn:function(){return[t._v(t._s(t.error))]},proxy:!0}],null,!1,4027184198)},t._l(Object.keys(t.userContacts),(function(e,a){return s("div",{key:a,staticClass:"form-item"},[s("label",{attrs:{for:"contact-"+e}},[t._v(t._s(e))]),"checkbox"===t.userContacts[e].type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userContacts[e].value,expression:"userContacts[item].value"}],attrs:{id:"contact-"+e,type:"checkbox"},domProps:{checked:Array.isArray(t.userContacts[e].value)?t._i(t.userContacts[e].value,null)>-1:t.userContacts[e].value},on:{change:function(s){var a=t.userContacts[e].value,n=s.target,r=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&t.$set(t.userContacts[e],"value",a.concat([o])):i>-1&&t.$set(t.userContacts[e],"value",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.userContacts[e],"value",r)}}}):"radio"===t.userContacts[e].type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.userContacts[e].value,expression:"userContacts[item].value"}],attrs:{id:"contact-"+e,type:"radio"},domProps:{checked:t._q(t.userContacts[e].value,null)},on:{change:function(s){return t.$set(t.userContacts[e],"value",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.userContacts[e].value,expression:"userContacts[item].value"}],attrs:{id:"contact-"+e,type:t.userContacts[e].type},domProps:{value:t.userContacts[e].value},on:{input:function(s){s.target.composing||t.$set(t.userContacts[e],"value",s.target.value)}}})])})),0):t._e()],1)])},v=[],p=s("2909"),b=s("5530"),_=(s("4de4"),s("d3b7"),s("caad"),s("2532"),s("b0c0"),s("2f62")),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[t.isShowDetailsMobile?s("Modal",{on:{hideModal:function(e){t.isShowDetailsMobile=!1}},scopedSlots:t._u([{key:"modal-footer",fn:function(){},proxy:!0}],null,!1,3640834506)},[s("Details")],1):t._e(),"username"===t.selectedVal?s("div",{staticClass:"user-group"},t._l(t.groupsName,(function(e,a){return s("div",{key:a},[s("div",{staticClass:"user-group__toggle",on:{click:t.toggleGroup}},[t._v(" "+t._s(e.group)+" ")]),s("div",{staticClass:"user-group__items"},t._l(e.children,(function(e,a){return s("div",{key:a,staticClass:"user-item",class:{active:t.isActive===e.id},on:{click:function(s){return t.showDetails(e)}}},[s("div",{staticClass:"item-title"},[t._m(0,!0),s("div",[t._v(t._s(e.username))])]),s("div",{staticClass:"el-width email"},[t._v(t._s(e.email))]),s("div",{staticClass:"el-width"},[t._v(t._s(e.phone))]),s("button",{staticClass:"item-btn",attrs:{type:"submit"},on:{click:function(s){return t.showModal(e)}}},[s("i",{staticClass:"fa fa-edit"})])])})),0)])})),0):s("div",t._l(t.users,(function(e,a){return s("div",{key:a,staticClass:"user-item",class:{active:t.isActive===e.id},on:{click:function(s){return t.showDetails(e)}}},[s("div",{staticClass:"item-title"},[t._m(1,!0),s("div",[t._v(t._s(e.username))])]),s("div",{staticClass:"el-width email"},[t._v(t._s(e.email))]),s("div",{staticClass:"el-width"},[t._v(t._s(e.phone))]),s("button",{staticClass:"item-btn",attrs:{type:"submit"},on:{click:function(s){return s.stopPropagation(),t.showModal(e)}}},[s("i",{staticClass:"fa fa-edit"})])])})),0)],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-title__avatar"},[a("img",{attrs:{src:s("1e22"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-title__avatar"},[a("img",{attrs:{src:s("1e22"),alt:""}})])}],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details"},[s("div",{staticClass:"wrapper"},[s("button",{staticClass:"details-btn",on:{click:function(e){return t.showModal(t.user)}}},[t._v("Edit")]),t._m(0),s("div",{staticClass:"details-title"},[s("h3",[t._v(t._s(t.user.username))]),s("p",[t._v(t._s(t.user.name))])]),s("Tabs",{attrs:{user:t.formedUser,tabs:t.tabs},on:{showContent:t.showContent}}),s("details-content",{attrs:{content:t.content,tab:t.tab}})],1)])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details-image"},[a("img",{attrs:{src:s("1e22"),alt:""}})])}],O=(s("b64b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs"},t._l(Object.keys(t.tabs),(function(e,a){return s("div",{key:a,staticClass:"tabs-item",class:{active:t.tabs[e].isActive},on:{click:function(s){return t.showContent(e)}}},[t._v(" "+t._s(e)+" ")])})),0)}),j=[],S={name:"ConTabs",props:{user:{type:Object,required:!0},tabs:{type:Object,required:!0}},data:function(){return{isUser:"",defaultTab:Object.keys(this.user)[0]}},methods:{showContent:function(t){for(var e in this.$emit("showContent",this.user[t],t),this.tabs)e!==t&&(this.tabs[e].isActive=!1),this.tabs[t].isActive=!0}},watch:{user:function(){this.showContent(this.defaultTab)}},mounted:function(){this.showContent(this.defaultTab)}},D=S,k=(s("bdac"),Object(c["a"])(D,O,j,!1,null,"3c1c3243",null)),U=k.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-content"},["contacts"===t.tab?s("div",{staticClass:"content-contact"},[s("div",{staticClass:"content-item"},[s("p",{staticClass:"content-item__label"},[t._v("phone:")]),s("h4",[t._v(t._s(t.content.phone))])]),s("div",{staticClass:"content-item"},[s("p",{staticClass:"content-item__label"},[t._v("email:")]),s("h4",[t._v(t._s(t.content.email))])]),s("div",{staticClass:"content-item"},[s("p",{staticClass:"content-item__label"},[t._v("address:")]),s("h4",[t._v(t._s(t.content.address.country))])]),s("div",{staticClass:"content-item"},[s("p",{staticClass:"content-item__label"},[t._v("website:")]),s("h4",[s("a",{attrs:{href:"http://"+t.content.website}},[t._v(t._s(t.content.website))])])])]):t._e(),"company"===t.tab?s("div",{staticClass:"content-company"},t._l(Object.keys(t.content),(function(e,a){return s("div",{key:a,staticClass:"content-item"},[s("p",{staticClass:"content-item__label"},[t._v(t._s(e)+":")]),s("h4",[t._v(t._s(t.content[e]))])])})),0):t._e()])},x=[],$={name:"ConDetailsContent",props:{content:{required:!0},tab:{required:!0}},mounted:function(){console.log(this.tab)}},A=$,E=(s("7fc5"),Object(c["a"])(A,M,x,!1,null,"2e738670",null)),P=E.exports,T={contacts:{isActive:!1},company:{isActive:!1}},V={name:"ConDetails",components:{Tabs:U,DetailsContent:P},data:function(){return{tabs:T,content:"",tab:""}},computed:Object(b["a"])(Object(b["a"])({},Object(_["c"])({user:"user"})),{},{formedUser:function(){var t=Object(b["a"])({},this.user);return Object.keys(this.tabs).filter((function(e){delete t[e]})),{contacts:Object(b["a"])({},t),company:this.user.company,posts:this.user.posts}}}),methods:{showContent:function(t,e){this.content=t,this.tab=e},showModal:function(t){this.$emit("showModal",t)}}},F=V,N=(s("2a3b"),Object(c["a"])(F,y,w,!1,null,"7b99bb66",null)),q=N.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back-modal"},[s("div",{staticClass:"modal"},[s("div",{staticClass:"wrapper"},[s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.sendForm.apply(null,arguments)}}},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"modal-header__title"},[t._t("modal-header-title")],2),s("div",{staticClass:"modal-header__hide",on:{click:t.hide}},[t._v(" x ")])]),s("div",{staticClass:"modal-body"},[t._t("default")],2),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"error"},[t._t("modal-footer")],2),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"modal-footer__btn btn-submit",attrs:{type:"submit"}},[t._v(" OK ")]),s("button",{staticClass:"modal-footer__btn btn-cancel",attrs:{type:"submit"},on:{click:t.hide}},[t._v(" Cancel ")])])])])])])])},R=[],J={name:"ConModal",methods:{hide:function(){this.$emit("hideModal")},sendForm:function(){this.$emit("sendForm")}}},H=J,I=(s("90f5"),Object(c["a"])(H,G,R,!1,null,"5d70b2dd",null)),L=I.exports,B={name:"ConUser",components:{Modal:L,Details:q},props:{users:{required:!0},selectedVal:{type:String,required:!0}},data:function(){return{isActive:!1,isShowGroup:!1,isShowDetailsMobile:!1}},computed:Object(b["a"])(Object(b["a"])({},Object(_["c"])({user:"user"})),{},{groupsName:function(){var t=Object(p["a"])(this.users);return t.reduce((function(t,e){var s=e.username[0];return t[s]?t[s].children.push(e):t[s]={group:s,children:[e]},t}),{})}}),methods:Object(b["a"])(Object(b["a"])({},Object(_["b"])(["getOneUser"])),{},{showDetails:function(t){this.getOneUser(t),this.isActive=t.id,this.isShowDetailsMobile=!0},showModal:function(t){this.$emit("showModal",t)},toggleGroup:function(t){t.target.nextSibling.style.display=t.target.nextSibling.style.display?"":"none",this.isShowGroup=!this.isShowGroup}})},K=B,z=(s("bec7"),Object(c["a"])(K,C,g,!1,null,"0bcb99f5",null)),Q=z.exports,W={name:"ConUsers",components:{User:Q,Details:q,Modal:L},data:function(){return{user:{},isShow:!1,userContacts:{name:{value:"",type:"text"},phone:{value:"",type:"tel"},email:{value:"",type:"email"}},error:"",group:[],isSort:!1,selectedSortVal:"",forTest:"",searchData:""}},computed:Object(b["a"])(Object(b["a"])({},Object(_["c"])({users:"users",sortUsers:"sortUsers"})),{},{usersData:function(){var t=this;return this.searchData?this.users.filter((function(e){if(e.username.toLowerCase().includes(t.searchData.toLowerCase()))return e})):this.users}}),methods:Object(b["a"])(Object(b["a"])({},Object(_["b"])(["changeUserData","sortUsersData","getUsers"])),{},{sortData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selectedSortVal;t?(this.isSort=!0,this.sortUsersData(Object(p["a"])(this.users))):(this.isSort=!1,this.getUsers())},showModal:function(t){this.isShow=!0,this.user=t},hideModal:function(){this.isShow=!1,this.clearForm()},sendForm:function(){for(var t in this.user=Object(b["a"])(Object(b["a"])({},this.user),{},{name:this.userContacts.name.value,phone:this.userContacts.phone.value,email:this.userContacts.email.value}),this.userContacts)if(""===this.userContacts[t].value)return this.error="Заполните все поля";this.changeUserData(this.user),this.sortData(),this.hideModal(),this.clearForm()},clearForm:function(){for(var t in this.userContacts)this.userContacts[t].value="",this.error=""}}),watch:{selectedSortVal:function(){this.sortData()}}},X=W,Y=(s("fa77"),Object(c["a"])(X,m,v,!1,null,"59cd90fd",null)),Z=Y.exports,tt={name:"Home",components:{Users:Z}},et=tt,st=Object(c["a"])(et,f,h,!1,null,null,null),at=st.exports;a["a"].use(d["a"]);var nt=[{path:"/",name:"Home",component:at}],rt=new d["a"]({mode:"history",base:"/contact-book-vue/",routes:nt}),ot=rt,it=(s("4e82"),s("d81d"),s("bc3a")),ct=s.n(it),ut={users:{method:"GET",url:"/users"}},lt="https://demo.sibers.com",dt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new Promise((function(s,a){var n=ut[t],r=lt+n.url;ct()({url:r,method:n.method,data:e,responseType:"json"}).then((function(t){s(t.data)})).catch((function(t){a(t)}))}))},ft=(s("e9c4"),function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(s){console.log("ERROR setting data",s)}}),ht=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){console.log("ERROR getting data",e)}},mt="DATA",vt={users:ht(mt)||[],user:ht(mt)?ht(mt)[0]:{}},pt={users:function(t){return t.users},user:function(t){return t.user}},bt={getUsersSuccess:function(t,e){t.users=e},getOneUser:function(t,e){t.user=e},changeUserDataSuccess:function(t,e){t.user=e},sortUsersData:function(t,e){t.users=e}},_t={getUsers:function(t){var e=t.commit;ht(mt)?e("getUsersSuccess",ht(mt)):dt("users").then((function(t){ft(mt,t),e("getUsersSuccess",t)}))},getOneUser:function(t,e){var s=t.commit;s("getOneUser",e)},sortUsersData:function(t,e){var s=t.commit;return new Promise((function(t){e.sort((function(t,e){var s=t.username,a=e.username;return s<a?-1:s>a?1:0})),s("sortUsersData",e),t(e)}))},changeUserData:function(t,e){var s=t.commit,a=t.dispatch;s("changeUserDataSuccess",e);var n=ht(mt);n=n.map((function(t){return t.id===e.id?e:t})),ft(mt,n),a("sortUsersData",n)}},Ct={state:vt,mutations:bt,actions:_t,getters:pt};a["a"].use(_["a"]);var gt=new _["a"].Store({state:{},mutations:{},actions:{},modules:{users:Ct}});a["a"].config.productionTip=!1,new a["a"]({router:ot,store:gt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"7fc5":function(t,e,s){"use strict";s("e8a5")},"90f5":function(t,e,s){"use strict";s("af26")},"9c0c":function(t,e,s){},af26:function(t,e,s){},bdac:function(t,e,s){"use strict";s("f9f9")},bec7:function(t,e,s){"use strict";s("329c")},dffe:function(t,e,s){},e8a5:function(t,e,s){},f306:function(t,e,s){},f9f9:function(t,e,s){},fa77:function(t,e,s){"use strict";s("f306")}});
//# sourceMappingURL=app.3659da54.js.map