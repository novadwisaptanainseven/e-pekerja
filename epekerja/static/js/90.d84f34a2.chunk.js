(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[90],{1027:function(a,n,e){"use strict";e.r(n);var t=e(642),r=e(10),o=e(1),i=e(628),c=e(20),l=e(632),s=e.n(l),d=e(633),g=e.n(d),h=e(637),u=e(636),j=e(626),m=e(630),b=e(17),k=g()(s.a);n.default=function(a){a.match;var n=Object(c.g)(),e=Object(o.useState)(!1),l=Object(r.a)(e,2),s=l[0],d=l[1],g=function(){n.goBack()},f=function(){k.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){n.push("/epekerja/admin/master-data/pangkat-golongan")}))},p=function(a){var n="";for(var e in a)n+="".concat(a[e],", ");k.fire({icon:"error",title:"Tambah Data Gagal",text:n}).then((function(a){d(!1)}))},x=h.c().shape({golongan:h.e().required("Golongan harus diisi!").max(6,"Panjang karakter tidak boleh lebih dari 4 karakter"),keterangan:h.e().required("Keterangan harus diisi!")}),O=function(a){var n=new FormData;n.append("golongan",a.golongan),n.append("keterangan",a.keterangan);var e,r=Object(t.a)(n.entries());try{for(r.s();!(e=r.n()).done;){var o=e.value;console.log(o)}}catch(i){r.e(i)}finally{r.f()}!function(a,n,e,t){n(!0),j.a.post("admin/master-data/pangkat-golongan",a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(a){console.log(a.data),n(!1),e()})).catch((function(a){console.log(a.response.data),t(a.response.data.errors)}))}(n,d,f,p)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.h,{children:[Object(b.jsx)(i.l,{children:Object(b.jsx)("h3",{children:"Tambah Pangkat Golongan"})}),Object(b.jsx)(u.a,{initialValues:{golongan:"",keterangan:""},validationSchema:x,onSubmit:function(a){return O(a)},children:function(a){var n=a.values,e=a.errors,t=a.touched,r=a.handleChange,o=a.handleBlur,c=a.handleSubmit;return Object(b.jsxs)(i.w,{onSubmit:c,children:[Object(b.jsx)(i.i,{children:Object(b.jsx)(i.W,{children:Object(b.jsxs)(i.m,{xs:"12",md:"6",children:[Object(b.jsxs)(i.x,{children:[Object(b.jsx)(i.K,{htmlFor:"name",children:"Golongan"}),Object(b.jsx)(i.D,{id:"name",name:"golongan",placeholder:"Masukkan golongan",onChange:r,onBlur:o,value:n.golongan,className:e.golongan&&t.golongan?"is-invalid":null}),e.golongan&&t.golongan&&Object(b.jsx)("div",{className:"invalid-feedback",children:e.golongan})]}),Object(b.jsxs)(i.x,{children:[Object(b.jsx)(i.K,{htmlFor:"name",children:"Keterangan"}),Object(b.jsx)(i.D,{id:"keterangan",name:"keterangan",placeholder:"Masukkan keterangan",onChange:r,onBlur:o,value:n.keterangan,className:e.keterangan&&t.keterangan?"is-invalid":null}),e.keterangan&&t.keterangan&&Object(b.jsx)("div",{className:"invalid-feedback",children:e.keterangan})]})]})})}),Object(b.jsxs)(i.j,{children:[Object(b.jsx)(i.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!s,children:s?Object(b.jsx)("img",{width:21,src:m.d,alt:"load-animation"}):"Simpan"}),Object(b.jsx)(i.f,{type:"button",color:"danger",onClick:g,children:"Kembali"})]})]})}})]})})}}}]);
//# sourceMappingURL=90.d84f34a2.chunk.js.map