(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[91],{806:function(e,a,i){"use strict";i.r(a);var n=i(2),t=i(7),l=i(1),c=i(627),s=i(20),u=i(626),r=i(631),d=i.n(r),j=i(632),o=i.n(j),h=i(635),g=i(634),b=i(629),m=i(17),O=o()(d.a);a.default=function(e){var a=e.modalEdit,i=e.setModalEdit,r=e.id_pegawai,d=Object(s.g)(),j=Object(l.useState)(!1),o=Object(t.a)(j,2),x=o[0],_=o[1],f=Object(l.useState)(""),p=Object(t.a)(f,2),k=p[0],v=p[1];Object(l.useEffect)((function(){return a.id&&function(e,a,i){u.a.get("admin/pegawai/".concat(e,"/cuti/").concat(a)).then((function(e){i(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}(r,a.id,v),function(){v(null)}}),[a,r]);var C={tgl_mulai:k?k.tgl_mulai:"",tgl_selesai:k?k.tgl_selesai:"",jenis_cuti:k?k.jenis_cuti:"",keterangan:k?k.keterangan:""},w=function(){O.fire({icon:"success",title:"Edit Cuti Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){i(Object(n.a)(Object(n.a)({},a),{},{modal:!a.modal,id:null})),d.push("/epekerja/admin/cuti/riwayat/".concat(r))}))},y=function(e){var a="";for(var i in e)a+="".concat(e[i],", ");O.fire({icon:"error",title:"Edit Cuti Gagal",text:a}).then((function(e){_(!1)}))},B=h.c().shape({tgl_mulai:h.e().required("Tanggal mulai cuti harus diisi!"),tgl_selesai:h.e().required("Tanggal selesai cuti harus diisi!"),jenis_cuti:h.e().required("Jenis cuti harus dipilih!"),keterangan:h.e().required("Keterangan/alasan cuti harus diisi!")}),E=function(e){!function(e,a,i,n,t,l){n(!0),u.a.post("admin/pegawai/".concat(e,"/cuti/").concat(a),i).then((function(e){console.log(e.data),n(!1),t()})).catch((function(e){console.log(e.response.data),l(e.response.data.errors)}))}(r,a.id,e,_,w,y)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(g.a,{initialValues:C,validationSchema:B,enableReinitialize:!0,onSubmit:function(e){return E(e)},children:function(e){var t=e.values,l=e.errors,s=e.touched,u=e.handleChange,r=e.handleBlur,d=e.handleSubmit;return Object(m.jsxs)(c.x,{onSubmit:d,children:[Object(m.jsxs)(c.O,{children:[Object(m.jsxs)(c.y,{row:!0,children:[Object(m.jsx)(c.n,{md:"3",children:Object(m.jsx)(c.L,{children:"Jenis Cuti"})}),Object(m.jsxs)(c.n,{children:[Object(m.jsxs)(c.Y,{name:"jenis_cuti",value:t.jenis_cuti||"",onChange:u,onBlur:r,className:l.jenis_cuti&&s.jenis_cuti?"is-invalid":null,children:[Object(m.jsx)("option",{value:"",children:"-- Jenis Cuti --"}),Object(m.jsx)("option",{value:"Cuti Tahunan",children:"Cuti Tahunan"}),Object(m.jsx)("option",{value:"Cuti Bulanan",children:"Cuti Bulanan"}),Object(m.jsx)("option",{value:"Cuti Harian",children:"Cuti Harian"})]}),l.jenis_cuti&&s.jenis_cuti&&Object(m.jsx)("div",{className:"invalid-feedback",children:l.jenis_cuti})]})]}),Object(m.jsxs)(c.y,{row:!0,children:[Object(m.jsx)(c.n,{md:"3",children:Object(m.jsx)(c.L,{children:"Tgl. Mulai"})}),Object(m.jsxs)(c.n,{children:[Object(m.jsx)(c.E,{type:"date",name:"tgl_mulai",id:"tgl_mulai",placeholder:"Masukkan tgl mulai cuti",onChange:u,onBlur:r,value:t.tgl_mulai,className:l.tgl_mulai&&s.tgl_mulai?"is-invalid":null}),l.tgl_mulai&&s.tgl_mulai&&Object(m.jsx)("div",{className:"invalid-feedback",children:l.tgl_mulai})]})]}),Object(m.jsxs)(c.y,{row:!0,children:[Object(m.jsx)(c.n,{md:"3",children:Object(m.jsx)(c.L,{children:"Tgl. Selesai"})}),Object(m.jsxs)(c.n,{children:[Object(m.jsx)(c.E,{type:"date",name:"tgl_selesai",id:"tgl_selesai",placeholder:"Masukkan tgl selesai cuti",min:t.tgl_mulai,onChange:u,onBlur:r,value:t.tgl_selesai,className:l.tgl_selesai&&s.tgl_selesai?"is-invalid":null}),Object(m.jsxs)(c.z,{children:[Object(m.jsx)("b",{children:"Format: "})," Bulan / Tanggal / Tahun"]}),l.tgl_selesai&&s.tgl_selesai&&Object(m.jsx)("div",{className:"invalid-feedback",children:l.tgl_selesai})]})]}),Object(m.jsxs)(c.y,{row:!0,children:[Object(m.jsx)(c.n,{md:"3",children:Object(m.jsx)(c.L,{children:"Keterangan"})}),Object(m.jsxs)(c.n,{children:[Object(m.jsx)(c.E,{type:"text",name:"keterangan",id:"keterangan",placeholder:"Masukkan keterangan / alasan cuti",onBlur:r,value:t.keterangan,disabled:!t.tgl_mulai,onChange:u,className:l.keterangan&&s.keterangan?"is-invalid":null}),l.keterangan&&s.keterangan&&Object(m.jsx)("div",{className:"invalid-feedback",children:l.keterangan})]})]})]}),Object(m.jsxs)(c.P,{children:[Object(m.jsx)(c.f,{type:"submit",color:"primary",disabled:!!x,children:x?Object(m.jsx)("img",{width:21,src:b.e,alt:"load-animation"}):"Simpan"})," ",Object(m.jsx)(c.f,{type:"button",color:"secondary",onClick:function(){return i(Object(n.a)(Object(n.a)({},a),{},{modal:!a.modal,id:null}))},children:"Batal"})]})]})}})})}}}]);
//# sourceMappingURL=91.0ea605ce.chunk.js.map