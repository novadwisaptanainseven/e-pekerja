(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[78],{1074:function(e,n,a){"use strict";a.r(n);var t=a(7),i=a(1),c=a(631),s=a.n(c),r=a(632),l=a.n(r),d=a(635),u=a(627),j=a(20),o=a(747),h=a(634),b=a(629),g=a(626),p=a(17),m=l()(s.a);n.default=function(e){var n=e.match.params,a=Object(j.g)(),c=Object(i.useState)(""),s=Object(t.a)(c,2),r=s[0],l=s[1],O=Object(i.useState)(!1),x=Object(t.a)(O,2),f=x[0],k=x[1];Object(i.useEffect)((function(){Object(o.a)(n.id,l)}),[n]);var v={id_pegawai:r?r.id_pegawai:"",tgl_pensiun:r?r.tgl_pensiun:"",keterangan:r?r.keterangan:""},w=function(){m.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a.push("/epekerja/admin/pensiun")}))},_=function(e){var n="";for(var a in e)n+="".concat(e[a],", ");m.fire({icon:"error",title:"Edit Data Gagal",text:n}).then((function(e){k(!1)}))},y=d.c().shape({id_pegawai:d.e().required("Pegawai harus diisi"),tgl_pensiun:d.e().required("Tanggal pensiun harus diisi"),keterangan:d.e().required("Keterangan / alasan harus diisi")}),N=function(e){!function(e,n,a,t,i){a(!0),g.a.post("admin/pensiun/".concat(e),n).then((function(e){console.log(e.data),a(!1),t()})).catch((function(e){console.log(e.response.data),i(e.response.data.errors)}))}(n.id,e,k,w,_)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(u.h,{children:[Object(p.jsxs)(u.l,{className:"d-flex justify-content-between",children:[Object(p.jsx)("h3",{children:"Edit Data Pensiun"}),Object(p.jsx)(u.f,{type:"button",color:"warning",className:"text-white",onClick:function(){a.goBack()},children:"Kembali"})]}),r?Object(p.jsx)(h.a,{initialValues:v,validationSchema:y,enableReinitialize:!0,onSubmit:function(e){return N(e)},children:function(e){var n=e.values,a=e.errors,t=e.touched,i=e.handleChange,c=e.handleBlur,s=e.handleSubmit;return Object(p.jsxs)(u.x,{onSubmit:s,children:[Object(p.jsxs)(u.i,{children:[Object(p.jsxs)(u.y,{row:!0,children:[Object(p.jsx)(u.n,{md:"2",children:Object(p.jsx)(u.L,{children:"Nama Pegawai"})}),Object(p.jsx)(u.n,{children:Object(p.jsx)(u.E,{type:"text",name:"nama",value:r.nama,readOnly:!0})})]}),Object(p.jsxs)(u.y,{row:!0,children:[Object(p.jsx)(u.n,{md:"2",children:Object(p.jsx)(u.L,{children:"Tgl. Pensiun"})}),Object(p.jsxs)(u.n,{children:[Object(p.jsx)(u.E,{type:"date",name:"tgl_pensiun",id:"tgl_pensiun",onChange:i,onBlur:c,value:n.tgl_pensiun||"",placeholder:"Masukkan tgl. pensiun",className:a.tgl_pensiun&&t.tgl_pensiun?"is-invalid":null}),a.tgl_pensiun&&t.tgl_pensiun&&Object(p.jsx)("div",{className:"invalid-feedback",children:a.tgl_pensiun})]})]}),Object(p.jsxs)(u.y,{row:!0,children:[Object(p.jsx)(u.n,{md:"2",children:Object(p.jsx)(u.L,{children:"Keterangan"})}),Object(p.jsxs)(u.n,{children:[Object(p.jsx)(u.E,{type:"text",name:"keterangan",id:"keterangan",onChange:i,onBlur:c,value:n.keterangan||"",placeholder:"Masukkan keterangan / alasan pensiun",className:a.keterangan&&t.keterangan?"is-invalid":null}),a.keterangan&&t.keterangan&&Object(p.jsx)("div",{className:"invalid-feedback",children:a.keterangan})]})]})]}),Object(p.jsx)(u.j,{children:Object(p.jsx)(u.f,{color:"primary",type:"submit",className:"mr-1",disabled:!!f,children:f?Object(p.jsx)("img",{width:21,src:b.e,alt:"load-animation"}):"Simpan"})})]})}}):Object(p.jsx)("div",{children:Object(p.jsx)(u.X,{children:Object(p.jsx)(u.n,{className:"text-center",children:Object(p.jsx)("img",{className:"my-4 ml-3",width:30,src:b.d,alt:"load-animation"})})})})]})})}},747:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(626),i=function(e,n){t.a.get("admin/pensiun/".concat(e)).then((function(e){n(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}}}]);
//# sourceMappingURL=78.b7aad676.chunk.js.map