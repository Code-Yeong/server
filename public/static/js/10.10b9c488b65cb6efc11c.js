webpackJsonp([10],{190:function(e,t,a){a(502);var r=a(84)(a(364),a(527),null,null);e.exports=r.exports},216:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(50),s=a.n(r),n=a(49),i=a.n(n),o=a(51),l=a.n(o),c=a(85),m=a(86),u=a(87);t.default={data:function(){return{baseImgPath:m.b}},created:function(){this.adminInfo.id||this.getAdminData()},computed:l()({},a.i(u.b)(["adminInfo"])),methods:l()({},a.i(u.c)(["getAdminData"]),{handleCommand:function(e){var t=this;return i()(s.a.mark(function r(){var n;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("home"!=e){r.next=4;break}t.$router.push("/manage"),r.next=9;break;case 4:if("signout"!=e){r.next=9;break}return r.next=7,a.i(c.a)();case 7:n=r.sent,1==n.status?(t.$message({type:"success",message:"退出成功"}),t.$router.push("/")):t.$message({type:"error",message:n.message});case 9:case"end":return r.stop()}},r,t)}))()}})}},217:function(e,t,a){t=e.exports=a(187)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},218:function(e,t,a){var r=a(217);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(188)("befe0888",r,!0)},219:function(e,t,a){a(218);var r=a(84)(a(216),a(220),null,null);e.exports=r.exports},220:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])})],2),e._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:e.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:e.baseImgPath+e.adminInfo.avatar}}),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"signout"}},[e._v("退出")])],1)],1)],1)},staticRenderFns:[]}},364:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(88),s=a.n(r),n=a(50),i=a.n(n),o=a(49),l=a.n(o),c=a(219),m=a.n(c),u=a(85),p=a(86);t.default={data:function(){return{city:{},formData:{name:"",address:"",latitude:"",longitude:"",description:"",phone:"",promotion_info:"",float_delivery_fee:5,float_minimum_order_amount:20,is_premium:!0,delivery_mode:!0,new:!0,bao:!0,zhun:!0,piao:!0,startTime:"",endTime:"",image_path:"",business_license_image:"",catering_service_license_image:""},rules:{name:[{required:!0,message:"请输入店铺名称",trigger:"blur"}],address:[{required:!0,message:"请输入详细地址",trigger:"blur"}],phone:[{required:!0,message:"请输入联系电话"},{type:"number",message:"电话号码必须是数字"}]},options:[{value:"满减优惠",label:"满减优惠"},{value:"优惠大酬宾",label:"优惠大酬宾"},{value:"新用户立减",label:"新用户立减"},{value:"进店领券",label:"进店领券"}],activityValue:"满减优惠",activities:[{icon_name:"减",name:"满减优惠",description:"满30减5，满60减8"}],baseUrl:p.a,baseImgPath:p.b,categoryOptions:[],selectedCategory:["快餐便当","简餐"]}},components:{headTop:m.a},mounted:function(){this.initData()},methods:{initData:function(){var e=this;return l()(i.a.mark(function t(){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.i(u.z)();case 3:return e.city=t.sent,t.next=6,a.i(u.q)();case 6:r=t.sent,r.forEach(function(t){if(t.sub_categories.length){var a={value:t.name,label:t.name,children:[]};t.sub_categories.forEach(function(e,t){0!=t&&a.children.push({value:e.name,label:e.name})}),e.categoryOptions.push(a)}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,e,[[0,10]])}))()},querySearchAsync:function(e,t){var r=this;return l()(i.a.mark(function s(){var n;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!e){s.next=11;break}return s.prev=1,s.next=4,a.i(u.t)(r.city.id,e);case 4:n=s.sent,n instanceof Array&&(n.map(function(e){return e.value=e.address,e}),t(n)),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(1),console.log(s.t0);case 11:case"end":return s.stop()}},s,r,[[1,8]])}))()},addressSelect:function(e){this.formData.latitude=e.latitude,this.formData.longitude=e.longitude,console.log(this.formData.latitude,this.formData.longitude)},handleShopAvatarScucess:function(e,t){1==e.status?this.formData.image_path=e.image_path:this.$message.error("上传图片失败！")},handleBusinessAvatarScucess:function(e,t){1==e.status?this.formData.business_license_image=e.image_path:this.$message.error("上传图片失败！")},handleServiceAvatarScucess:function(e,t){1==e.status?this.formData.catering_service_license_image=e.image_path:this.$message.error("上传图片失败！")},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},tableRowClassName:function(e,t){return 1===t?"info-row":3===t?"positive-row":""},selectActivity:function(){var e=this;this.$prompt("请输入活动详情","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var a=t.value;if(null==a)return void e.$message({type:"info",message:"请输入活动详情"});var r={};switch(e.activityValue){case"满减优惠":r={icon_name:"减",name:"满减优惠",description:a};break;case"优惠大酬宾":r={icon_name:"特",name:"优惠大酬宾",description:a};break;case"新用户立减":r={icon_name:"新",name:"新用户立减",description:a};break;case"进店领券":r={icon_name:"领",name:"进店领券",description:a}}e.activities.push(r)}).catch(function(){e.$message({type:"info",message:"取消输入"})})},handleDelete:function(e){this.activities.splice(e,1)},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=l()(i.a.mark(function e(r){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=15;break}return s()(t.formData,{activities:t.activities},{category:t.selectedCategory.join("/")}),e.prev=2,e.next=5,a.i(u.A)(t.formData);case 5:n=e.sent,1==n.status?(t.$message({type:"success",message:"添加成功"}),t.formData={name:"",address:"",latitude:"",longitude:"",description:"",phone:"",promotion_info:"",float_delivery_fee:5,float_minimum_order_amount:20,is_premium:!0,delivery_mode:!0,new:!0,bao:!0,zhun:!0,piao:!0,startTime:"",endTime:"",image_path:"",business_license_image:"",catering_service_license_image:""},t.selectedCategory=["快餐便当","简餐"],t.activities=[{icon_name:"减",name:"满减优惠",description:"满30减5，满60减8"}]):t.$message({type:"error",message:n.message}),console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:e.next=17;break;case 15:return t.$notify.error({title:"错误",message:"请检查输入是否正确",offset:100}),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t,[[2,10]])}));return function(t){return e.apply(this,arguments)}}())}}}},409:function(e,t,a){t=e.exports=a(187)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.button_submit{text-align:center}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}.el-table .info-row{background:#c9e5f5}.el-table .positive-row{background:#e2f0e4}",""])},502:function(e,t,a){var r=a(409);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(188)("a299bd94",r,!0)},527:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("head-top"),e._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:12,offset:4}},[a("el-form",{ref:"formData",staticClass:"demo-formData",attrs:{model:e.formData,rules:e.rules,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"店铺名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[a("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入地址"},on:{select:e.addressSelect},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}}),e._v(" "),a("span",[e._v("当前城市："+e._s(e.city.name))])],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[a("el-input",{attrs:{maxLength:"11"},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone",e._n(t))},expression:"formData.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺简介",prop:"description"}},[a("el-input",{model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"white-space":"nowrap"},attrs:{label:"营业时间"}},[a("el-time-select",{attrs:{placeholder:"起始时间","picker-options":{start:"05:30",step:"00:15",end:"23:30"}},model:{value:e.formData.startTime,callback:function(t){e.$set(e.formData,"startTime",t)},expression:"formData.startTime"}}),e._v(" "),a("el-time-select",{attrs:{placeholder:"结束时间","picker-options":{start:"05:30",step:"00:15",end:"23:30",minTime:e.formData.startTime}},model:{value:e.formData.endTime,callback:function(t){e.$set(e.formData,"endTime",t)},expression:"formData.endTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上传店铺头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.baseUrl+"/v1/addimg/shop","show-file-list":!1,"on-success":e.handleShopAvatarScucess,"before-upload":e.beforeAvatarUpload}},[e.formData.image_path?a("img",{staticClass:"avatar",attrs:{src:e.baseImgPath+e.formData.image_path}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"上传营业执照"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.baseUrl+"/v1/addimg/shop","show-file-list":!1,"on-success":e.handleBusinessAvatarScucess,"before-upload":e.beforeAvatarUpload}},[e.formData.business_license_image?a("img",{staticClass:"avatar",attrs:{src:e.baseImgPath+e.formData.business_license_image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠活动"}},[a("el-select",{attrs:{placeholder:e.activityValue},on:{change:e.selectActivity},model:{value:e.activityValue,callback:function(t){e.activityValue=t},expression:"activityValue"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-table",{staticStyle:{"min-width":"600px","margin-bottom":"20px"},attrs:{data:e.activities,align:"cneter","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"icon_name",label:"活动标题",align:"cneter",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"活动名称",align:"cneter",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",align:"cneter",label:"活动详情"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-form-item",{staticClass:"button_submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formData")}}},[e._v("立即创建")])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});