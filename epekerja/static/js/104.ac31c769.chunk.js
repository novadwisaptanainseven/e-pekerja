(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[104],{1063:function(a,e,t){"use strict";t.r(e);var n=t(638),s=t(7),i=t(627),r=t(634),c=t(1),l=t(20),u=t(629),o=t(626),d=t(631),h=t.n(d),j=t(632),g=t.n(j),b=t(635),p=t(17),m=g()(h.a);e.default=function(){var a=Object(l.g)(),e=Object(c.useState)(!1),t=Object(s.a)(e,2),d=t[0],h=t[1],j=function(){a.goBack()},g=Object(c.useCallback)((function(){m.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a.push("/epekerja/admin/master-data/status-pegawai")}))}),[a]),k=Object(c.useCallback)((function(a){var e="";for(var t in a)e+="".concat(a[t],", ");m.fire({icon:"error",title:"Tambah Data Gagal",text:e}).then((function(a){h(!1)}))}),[]),x=b.c().shape({status_pegawai:b.e().required("Status pegawai harus diisi!"),keterangan:b.e().required("Keterangan harus diisi")}),O=function(a){var e=new FormData;e.append("status_pegawai",a.status_pegawai),e.append("keterangan",a.keterangan);var t,s=Object(n.a)(e.entries());try{for(s.s();!(t=s.n()).done;){var i=t.value;console.log(i)}}catch(r){s.e(r)}finally{s.f()}!function(a,e,t,n){e(!0),o.a.post("admin/master-data/status-pegawai",a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(a){console.log(a.data),e(!1),t()})).catch((function(a){console.log(a.response.data),n()}))}(e,h,g,k)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(i.h,{children:[Object(p.jsx)(i.l,{children:Object(p.jsx)("h3",{children:"Tambah Status Pegawai"})}),Object(p.jsx)(r.a,{initialValues:{status_pegawai:"",keterangan:""},validationSchema:x,onSubmit:function(a){return O(a)},children:function(a){var e=a.values,t=a.errors,n=a.touched,s=a.handleChange,r=a.handleBlur,c=a.handleSubmit;return Object(p.jsxs)(i.x,{onSubmit:c,children:[Object(p.jsx)(i.i,{children:Object(p.jsx)(i.X,{children:Object(p.jsxs)(i.n,{xs:"12",md:"6",children:[Object(p.jsxs)(i.y,{children:[Object(p.jsx)(i.L,{htmlFor:"status_pegawai",children:"Status Pegawai"}),Object(p.jsx)(i.E,{type:"text",id:"status_pegawai",placeholder:"Masukkan Status Pegawai",name:"status_pegawai",onChange:s,onBlur:r,value:e.status_pegawai,className:t.status_pegawai&&n.status_pegawai?"is-invalid":null,maxLength:10}),t.status_pegawai&&n.status_pegawai&&Object(p.jsx)("div",{className:"invalid-feedback",children:t.status_pegawai})]}),Object(p.jsxs)(i.y,{children:[Object(p.jsx)(i.L,{htmlFor:"keterangan",children:"Keterangan"}),Object(p.jsx)(i.E,{type:"text",id:"keterangan",placeholder:"Masukkan Keterangan",name:"keterangan",onChange:s,onBlur:r,value:e.keterangan,className:t.keterangan&&n.keterangan?"is-invalid":null}),t.keterangan&&n.keterangan&&Object(p.jsx)("div",{className:"invalid-feedback",children:t.keterangan})]})]})})}),Object(p.jsxs)(i.j,{children:[Object(p.jsx)(i.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!d,children:d?Object(p.jsx)("img",{width:21,src:u.e,alt:"load-animation"}):"Simpan"}),Object(p.jsx)(i.f,{type:"button",color:"danger",onClick:j,children:"Kembali"})]})]})}})]})})}}}]);
//# sourceMappingURL=104.ac31c769.chunk.js.map