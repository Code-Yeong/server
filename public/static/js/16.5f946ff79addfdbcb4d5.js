webpackJsonp([16],{196:function(e,t,a){a(494);var o=a(84)(a(370),a(519),"data-v-5ff4ee3e",null);e.exports=o.exports},370:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(50),s=a.n(o),r=a(49),n=a.n(r),i=a(51),f=a.n(i),l=a(85),p=a(87);t.default={data:function(){return{loginForm:{phone:"",password:""},rules:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},showLogin:!1}},mounted:function(){this.showLogin=!0,this.adminInfo.id||this.getAdminData()},computed:f()({},a.i(p.b)(["adminInfo"])),methods:f()({},a.i(p.c)(["getAdminData"]),{submitForm:function(e){var t=this;return n()(s.a.mark(function o(){return s.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:t.$refs[e].validate(function(){var e=n()(s.a.mark(function e(o){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=10;break}return console.log("1111111111111111"),e.next=4,a.i(l.F)({phone:"1",password:"1"});case 4:r=e.sent,console.log(r),console.log("****************"),1==r.status?(t.$message({type:"success",message:"登录成功"}),t.$router.push("manage")):t.$message({type:"error",message:r.message}),e.next=12;break;case 10:return t.$notify.error({title:"错误",message:"请输入正确的用户名密码",offset:100}),e.abrupt("return",!1);case 12:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return o.stop()}},o,t)}))()}}),watch:{adminInfo:function(e){e.id&&(this.$message({type:"success",message:"检测到您之前登录过，将自动登录"}),this.$router.push("manage"))}}}},401:function(e,t,a){t=e.exports=a(187)(!1),t.push([e.i,".allcover[data-v-5ff4ee3e]{position:absolute;top:0;right:0}.ctt[data-v-5ff4ee3e]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-5ff4ee3e]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-5ff4ee3e]{position:absolute;left:50%;transform:translateX(-50%)}.login_page[data-v-5ff4ee3e]{background-color:#324057}.manage_tip[data-v-5ff4ee3e]{position:absolute;width:100%;top:-100px;left:0}.manage_tip p[data-v-5ff4ee3e]{font-size:34px;color:#fff}.form_contianer[data-v-5ff4ee3e]{width:320px;height:210px;position:absolute;top:50%;left:50%;margin-top:-105px;margin-left:-160px;padding:25px;border-radius:5px;text-align:center;background-color:#fff}.form_contianer .submit_btn[data-v-5ff4ee3e]{width:100%;font-size:16px}.tip[data-v-5ff4ee3e]{font-size:12px;color:red}.form-fade-enter-active[data-v-5ff4ee3e],.form-fade-leave-active[data-v-5ff4ee3e]{transition:all 1s}.form-fade-enter[data-v-5ff4ee3e],.form-fade-leave-active[data-v-5ff4ee3e]{transform:translate3d(0,-50px,0);opacity:0}",""])},494:function(e,t,a){var o=a(401);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(188)("5acb75b0",o,!0)},519:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login_page fillcontain"},[a("transition",{attrs:{name:"form-fade",mode:"in-out"}},[a("section",{directives:[{name:"show",rawName:"v-show",value:e.showLogin,expression:"showLogin"}],staticClass:"form_contianer"},[a("div",{staticClass:"manage_tip"},[a("p",[e._v("elm后台管理系统")])]),e._v(" "),a("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.rules}},[a("el-form-item",{attrs:{prop:"phone"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}},[a("span",[e._v("dsfsf")])])],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v("登陆")])],1)],1),e._v(" "),a("p",{staticClass:"tip"},[e._v("温馨提示：")]),e._v(" "),a("p",{staticClass:"tip"},[e._v("未登录过的新用户，自动注册")]),e._v(" "),a("p",{staticClass:"tip"},[e._v("注册过的用户可凭账号密码登录")])],1)])],1)},staticRenderFns:[]}}});