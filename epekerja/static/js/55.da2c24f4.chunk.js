(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[55],{1077:function(e,a,t){"use strict";t.r(a);var n=t(8),i=t(627),c=t(1),s=t(20),r=t(651),l=t(635),u=t(634),d=t(631),o=t.n(d),j=t(632),m=t.n(j),h=t(750),b=t(626),g=t(644),O=t(17),x=m()(o.a);a.default=function(e){var a=e.match.params,t=Object(s.g)(),d=Object(c.useState)(!1),o=Object(n.a)(d,2),j=o[0],m=o[1],f=Object(c.useState)(""),p=Object(n.a)(f,2),k=p[0],v=p[1];Object(c.useEffect)((function(){Object(h.a)(a.id,v)}),[a]);var w={id_pegawai:k?k.id_pegawai:"",tgl_mutasi:k?k.tgl_mutasi:"",keterangan:k?k.keterangan:""},_=function(){x.fire({icon:"success",title:"Edit Mutasi Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){t.push("/epekerja/admin/mutasi")}))},y=function(e){var a="";for(var t in e)a+="".concat(e[t],", ");x.fire({icon:"error",title:"Edit Mutasi Gagal",text:a}).then((function(e){m(!1)}))},N=l.c().shape({id_pegawai:l.e().required("Pegawai harus diisi"),tgl_mutasi:l.e().required("Tanggal mutasi harus diisi"),keterangan:l.e().required("Keterangan / alasan mutasi harus diisi")});return Object(O.jsxs)(i.h,{children:[Object(O.jsxs)(i.l,{className:"d-flex justify-content-between",children:[Object(O.jsx)("h3",{children:"Edit Data Mutasi"}),Object(O.jsx)(i.f,{type:"button",color:"warning",className:"text-white",onClick:function(){t.goBack()},children:"Kembali"})]}),k?Object(O.jsx)(u.a,{initialValues:w,enableReinitialize:!0,validationSchema:N,onSubmit:function(e){!function(e,a,t,n,i){t(!0),b.a.post("admin/mutasi/".concat(e),a).then((function(e){console.log(e.data),t(!1),n()})).catch((function(e){console.log(e.response.data),i(e.response.data.errors)}))}(a.id,e,m,_,y)},children:function(e){var a=e.values,t=e.errors,n=e.touched,c=e.handleChange,s=e.handleBlur,l=e.handleSubmit;return Object(O.jsxs)(i.x,{onSubmit:l,children:[Object(O.jsxs)(i.i,{children:[Object(O.jsxs)(i.y,{row:!0,children:[Object(O.jsx)(i.n,{md:"2",children:Object(O.jsx)(i.L,{children:"Nama Pegawai"})}),Object(O.jsx)(i.n,{children:Object(O.jsx)(i.E,{type:"text",name:"nama",value:k.nama,readOnly:!0})})]}),Object(O.jsxs)(i.y,{row:!0,children:[Object(O.jsx)(i.n,{md:"2",children:Object(O.jsx)(i.L,{children:"Tgl. Mutasi"})}),Object(O.jsxs)(i.n,{children:[Object(O.jsx)(i.E,{type:"date",name:"tgl_mutasi",id:"tgl_mutasi",onChange:c,onBlur:s,value:a.tgl_mutasi||"",placeholder:"Masukkan tgl. mutasi",className:t.tgl_mutasi&&n.tgl_mutasi?"is-invalid":null}),t.tgl_mutasi&&n.tgl_mutasi&&Object(O.jsx)("div",{className:"invalid-feedback",children:t.tgl_mutasi})]})]}),Object(O.jsxs)(i.y,{row:!0,children:[Object(O.jsx)(i.n,{md:"2",children:Object(O.jsx)(i.L,{children:"Keterangan"})}),Object(O.jsxs)(i.n,{children:[Object(O.jsx)(i.E,{type:"text",name:"keterangan",id:"keterangan",onChange:c,onBlur:s,value:a.keterangan||"",placeholder:"Masukkan keterangan / alasan mutasi",className:t.keterangan&&n.keterangan?"is-invalid":null}),t.keterangan&&n.keterangan&&Object(O.jsx)("div",{className:"invalid-feedback",children:t.keterangan})]})]})]}),Object(O.jsx)(i.j,{children:Object(O.jsx)(i.f,{color:"primary",type:"submit",className:"mr-1",disabled:!!j,children:j?Object(O.jsx)(r.a,{}):"Simpan"})})]})}}):Object(O.jsx)(g.a,{})]})}},644:function(e,a,t){"use strict";var n=t(627),i=(t(1),t(629)),c=t(17);a.a=function(){return Object(c.jsx)(n.X,{className:"mb-3",children:Object(c.jsx)(n.n,{className:"text-center",children:Object(c.jsx)("img",{className:"mt-4 ml-3",width:30,src:i.d,alt:"load-animation"})})})}},651:function(e,a,t){"use strict";t(1);var n=t(629),i=t(17);a.a=function(){return Object(i.jsx)("img",{width:21,src:n.e,alt:"load-animation"})}},750:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(626),i=function(e,a){n.a.get("admin/mutasi/".concat(e)).then((function(e){a(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}}}]);
//# sourceMappingURL=55.da2c24f4.chunk.js.map