(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[94],{1057:function(a,e,n){"use strict";n.r(e);var t=n(638),c=n(7),r=n(1),i=n(627),s=n(20),l=n(631),o=n.n(l),m=n(632),d=n.n(m),h=n(635),j=n(634),u=n(629),b=n(626),g=n(17),f=d()(o.a);e.default=function(){var a=Object(s.g)(),e=Object(r.useState)(!1),n=Object(c.a)(e,2),l=n[0],o=n[1],m=function(){a.goBack()},d=Object(r.useCallback)((function(){f.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a.push("/epekerja/admin/master-data/agama")}))}),[a]),O=Object(r.useCallback)((function(a){var e="";for(var n in a)e+="".concat(a[n],", ");f.fire({icon:"error",title:"Tambah Data Gagal",text:e}).then((function(a){o(!1)}))}),[]),p=h.c().shape({agama:h.e().required("Agama harus diisi!")}),x=function(a){var e=new FormData;e.append("agama",a.agama);var n,c=Object(t.a)(e.entries());try{for(c.s();!(n=c.n()).done;){var r=n.value;console.log(r)}}catch(i){c.e(i)}finally{c.f()}!function(a,e,n,t){e(!0),b.a.post("admin/master-data/agama",a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(a){console.log(a.data),e(!1),n()})).catch((function(a){console.log(a.response.data),t(a.response.data.errors)}))}(e,o,d,O)};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(i.h,{children:[Object(g.jsx)(i.l,{children:Object(g.jsx)("h3",{children:"Tambah Agama"})}),Object(g.jsx)(j.a,{initialValues:{agama:""},validationSchema:p,onSubmit:function(a){return x(a)},children:function(a){var e=a.values,n=a.errors,t=a.touched,c=a.handleChange,r=a.handleBlur,s=a.handleSubmit;return Object(g.jsxs)(i.x,{onSubmit:s,children:[Object(g.jsx)(i.i,{children:Object(g.jsx)(i.X,{children:Object(g.jsx)(i.n,{xs:"12",md:"6",children:Object(g.jsxs)(i.y,{children:[Object(g.jsx)(i.L,{htmlFor:"agama",children:"Agama"}),Object(g.jsx)(i.E,{type:"text",id:"agama",placeholder:"Masukkan agama",name:"agama",onChange:c,onBlur:r,value:e.agama,className:n.agama&&t.agama?"is-invalid":null}),n.agama&&t.agama&&Object(g.jsx)("div",{className:"invalid-feedback",children:n.agama})]})})})}),Object(g.jsxs)(i.j,{children:[Object(g.jsx)(i.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!l,children:l?Object(g.jsx)("img",{width:21,src:u.e,alt:"load-animation"}):"Simpan"}),Object(g.jsx)(i.f,{type:"button",color:"danger",onClick:m,children:"Kembali"})]})]})}})]})})}}}]);
//# sourceMappingURL=94.c4a0d898.chunk.js.map