(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[82],{1031:function(a,e,t){"use strict";t.r(e);var n=t(641),c=t(9),r=t(1),i=t(628),s=t(20),o=t(632),l=t.n(o),m=t(633),d=t.n(m),u=t(636),h=t(635),j=t(630),b=t(626),g=t(17),f=d()(l.a);e.default=function(){var a=Object(s.g)(),e=Object(r.useState)(!1),t=Object(c.a)(e,2),o=t[0],l=t[1],m=function(){a.goBack()},d=Object(r.useCallback)((function(){f.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a.push("/epekerja/admin/master-data/agama")}))}),[a]),p=Object(r.useCallback)((function(a){var e="";for(var t in a)e+="".concat(a[t],", ");f.fire({icon:"error",title:"Tambah Data Gagal",text:e}).then((function(a){l(!1)}))}),[]),O=u.c().shape({agama:u.e().required("Agama harus diisi!")}),x=function(a){var e=new FormData;e.append("agama",a.agama);var t,c=Object(n.a)(e.entries());try{for(c.s();!(t=c.n()).done;){var r=t.value;console.log(r)}}catch(i){c.e(i)}finally{c.f()}!function(a,e,t,n){e(!0),b.a.post("admin/master-data/agama",a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(a){console.log(a.data),e(!1),t()})).catch((function(a){console.log(a.response.data),n(a.response.data.errors)}))}(e,l,d,p)};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(i.h,{children:[Object(g.jsx)(i.l,{children:Object(g.jsx)("h3",{children:"Tambah Agama"})}),Object(g.jsx)(h.a,{initialValues:{agama:""},validationSchema:O,onSubmit:function(a){return x(a)},children:function(a){var e=a.values,t=a.errors,n=a.touched,c=a.handleChange,r=a.handleBlur,s=a.handleSubmit;return Object(g.jsxs)(i.w,{onSubmit:s,children:[Object(g.jsx)(i.i,{children:Object(g.jsx)(i.W,{children:Object(g.jsx)(i.m,{xs:"12",md:"6",children:Object(g.jsxs)(i.x,{children:[Object(g.jsx)(i.K,{htmlFor:"agama",children:"Agama"}),Object(g.jsx)(i.D,{type:"text",id:"agama",placeholder:"Masukkan agama",name:"agama",onChange:c,onBlur:r,value:e.agama,className:t.agama&&n.agama?"is-invalid":null}),t.agama&&n.agama&&Object(g.jsx)("div",{className:"invalid-feedback",children:t.agama})]})})})}),Object(g.jsxs)(i.j,{children:[Object(g.jsx)(i.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!o,children:o?Object(g.jsx)("img",{width:21,src:j.d,alt:"load-animation"}):"Simpan"}),Object(g.jsx)(i.f,{type:"button",color:"danger",onClick:m,children:"Kembali"})]})]})}})]})})}}}]);
//# sourceMappingURL=82.4f4b6c53.chunk.js.map