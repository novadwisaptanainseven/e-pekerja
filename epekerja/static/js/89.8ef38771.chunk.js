(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[89],{1014:function(n,a,e){"use strict";e.r(a);var t=e(9),i=e(1),c=e(628),o=e(20),r=e(636),l=e(635),s=e(632),d=e.n(s),g=e(633),u=e.n(g),h=e(626),j=e(630),b=e(17),m=u()(d.a);a.default=function(n){var a=n.match.params,e=Object(o.g)(),s=Object(i.useState)(!1),d=Object(t.a)(s,2),g=d[0],u=d[1],k=Object(i.useState)(null),f=Object(t.a)(k,2),O=f[0],x=f[1];Object(i.useEffect)((function(){return function(n,a){h.a.get("admin/master-data/pangkat-golongan/".concat(n)).then((function(n){a(n.data.data),console.log(n.data)})).catch((function(n){console.log(n.response.data)}))}(a.id,x),function(){return x(null)}}),[a]);var p=function(){e.goBack()},v={golongan:O?O.golongan:"",keterangan:O?O.keterangan:""},S=function(){m.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(n){e.push("/epekerja/admin/master-data/pangkat-golongan")}))},B=function(n){var a="";for(var e in n)a+="".concat(n[e],", ");m.fire({icon:"error",title:"Edit Data Gagal",text:a}).then((function(n){u(!1)}))},w=r.c().shape({golongan:r.e().required("Golongan harus diisi!").max(4,"Panjang karakter tidak boleh lebih dari 4 karakter"),keterangan:r.e().required("Keterangan harus diisi!")}),C=function(n){!function(n,a,e,t,i){e(!0),h.a.put("admin/master-data/pangkat-golongan/".concat(n),a).then((function(n){console.log(n.data),e(!1),t()})).catch((function(n){console.log(n.response.data),i(n.response.data.errors)}))}(a.id,n,u,S,B)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(c.h,{children:[Object(b.jsx)(c.l,{children:Object(b.jsx)("h3",{children:"Ubah Pangkat Golongan"})}),Object(b.jsx)(l.a,{initialValues:v,validationSchema:w,enableReinitialize:!0,onSubmit:function(n){return C(n)},children:function(n){var a=n.values,e=n.errors,t=n.touched,i=n.handleChange,o=n.handleBlur,r=n.handleSubmit;return Object(b.jsxs)(c.w,{onSubmit:r,children:[Object(b.jsx)(c.i,{children:Object(b.jsx)(c.W,{children:Object(b.jsxs)(c.m,{xs:"12",md:"6",children:[Object(b.jsxs)(c.x,{children:[Object(b.jsx)(c.K,{htmlFor:"name",children:"Golongan"}),Object(b.jsx)(c.D,{id:"name",name:"golongan",placeholder:"Masukkan golongan",onChange:i,onBlur:o,value:a.golongan,className:e.golongan&&t.golongan?"is-invalid":null}),e.golongan&&t.golongan&&Object(b.jsx)("div",{className:"invalid-feedback",children:e.golongan})]}),Object(b.jsxs)(c.x,{children:[Object(b.jsx)(c.K,{htmlFor:"name",children:"Keterangan"}),Object(b.jsx)(c.D,{id:"keterangan",name:"keterangan",placeholder:"Masukkan keterangan",onChange:i,onBlur:o,value:a.keterangan,className:e.keterangan&&t.keterangan?"is-invalid":null}),e.keterangan&&t.keterangan&&Object(b.jsx)("div",{className:"invalid-feedback",children:e.keterangan})]})]})})}),Object(b.jsxs)(c.j,{children:[Object(b.jsx)(c.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!g,children:g?Object(b.jsx)("img",{width:21,src:j.d,alt:"load-animation"}):"Simpan"}),Object(b.jsx)(c.f,{type:"button",color:"danger",onClick:p,children:"Kembali"})]})]})}})]})})}}}]);
//# sourceMappingURL=89.8ef38771.chunk.js.map