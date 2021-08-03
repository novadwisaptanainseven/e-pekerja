(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[80],{796:function(e,a,i){"use strict";i.r(a);var n=i(641),t=i(9),l=i(1),c=i(632),s=i.n(c),r=i(633),u=i.n(r),d=i(636),j=i(635),o=i(630),h=i(628),m=i(20),b=i(740),g=i(626),x=i(17),O=u()(s.a);a.default=function(e){var a=e.modalTambah,i=e.setModalTambah,c=e.id_pegawai,s=Object(m.g)(),r=Object(l.useState)(!1),u=Object(t.a)(r,2),p=u[0],_=u[1],v=function(){O.fire({icon:"success",title:"Pembuatan Cuti Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){i(!a),s.push("/epekerja/admin/cuti/riwayat/".concat(c))}))},f=function(e){var a="";for(var i in e)a+="".concat(e[i],", ");O.fire({icon:"error",title:"Pembuatan Cuti Gagal",text:a}).then((function(e){_(!1)}))},k=d.c().shape({jenis_cuti:d.e().required("Jenis cuti harus dipilih!"),tgl_mulai:d.e().required("Tanggal mulai cuti harus diisi!"),tgl_selesai:d.e().required("Tanggal selesai cuti harus diisi!"),keterangan:d.e().required("Keterangan/alasan cuti harus diisi!")}),y=function(e){var a=new FormData;for(var i in e)a.append(i,e[i]);var t,l=Object(n.a)(a.entries());try{for(l.s();!(t=l.n()).done;){var s=t.value;console.log(s)}}catch(r){l.e(r)}finally{l.f()}!function(e,a,i,n,t){i(!0),g.a.post("admin/pegawai/".concat(e,"/cuti"),a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(e){console.log(e.data),i(!1),n()})).catch((function(e){console.log(e.response.data),t(e.response.data.errors)}))}(c,a,_,v,f)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(j.a,{initialValues:{tgl_mulai:"",tgl_selesai:"",jenis_cuti:"",keterangan:""},validationSchema:k,onSubmit:function(e){return y(e)},children:function(e){var n=e.values,t=e.errors,l=e.touched,c=e.handleChange,s=e.handleBlur,r=e.handleSubmit;return Object(x.jsxs)(h.w,{onSubmit:r,children:[Object(x.jsxs)(h.N,{children:[Object(x.jsxs)(h.x,{row:!0,children:[Object(x.jsx)(h.m,{md:"3",children:Object(x.jsx)(h.K,{children:"Jenis Cuti"})}),Object(x.jsxs)(h.m,{children:[Object(x.jsxs)(h.X,{name:"jenis_cuti",value:n.jenis_cuti,onChange:c,onBlur:s,className:t.jenis_cuti&&l.jenis_cuti?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Jenis Cuti --"}),Object(x.jsx)("option",{value:"Cuti Tahunan",children:"Cuti Tahunan"}),Object(x.jsx)("option",{value:"Cuti Bulanan",children:"Cuti Bulanan"}),Object(x.jsx)("option",{value:"Cuti Harian",children:"Cuti Harian"})]}),t.jenis_cuti&&l.jenis_cuti&&Object(x.jsx)("div",{className:"invalid-feedback",children:t.jenis_cuti})]})]}),Object(x.jsxs)(h.x,{row:!0,children:[Object(x.jsx)(h.m,{md:"3",children:Object(x.jsx)(h.K,{children:"Tgl. Mulai"})}),Object(x.jsxs)(h.m,{children:[Object(x.jsx)(h.D,{type:"date",name:"tgl_mulai",id:"tgl_mulai",placeholder:"Masukkan tgl mulai cuti",min:Object(b.a)(new Date,"yyyy-MM-dd"),onChange:c,onBlur:s,value:n.tgl_mulai,className:t.tgl_mulai&&l.tgl_mulai?"is-invalid":null}),t.tgl_mulai&&l.tgl_mulai&&Object(x.jsx)("div",{className:"invalid-feedback",children:t.tgl_mulai})]})]}),Object(x.jsxs)(h.x,{row:!0,children:[Object(x.jsx)(h.m,{md:"3",children:Object(x.jsx)(h.K,{children:"Tgl. Selesai"})}),Object(x.jsxs)(h.m,{children:[Object(x.jsx)(h.D,{type:"date",name:"tgl_selesai",id:"tgl_selesai",placeholder:"Masukkan tgl selesai cuti",min:n.tgl_mulai,onChange:c,onBlur:s,value:n.tgl_selesai,className:t.tgl_selesai&&l.tgl_selesai?"is-invalid":null}),Object(x.jsxs)(h.y,{children:[Object(x.jsx)("b",{children:"Format: "})," Bulan / Tanggal / Tahun"]}),t.tgl_selesai&&l.tgl_selesai&&Object(x.jsx)("div",{className:"invalid-feedback",children:t.tgl_selesai})]})]}),Object(x.jsxs)(h.x,{row:!0,children:[Object(x.jsx)(h.m,{md:"3",children:Object(x.jsx)(h.K,{children:"Keterangan"})}),Object(x.jsxs)(h.m,{children:[Object(x.jsx)(h.D,{type:"text",name:"keterangan",id:"keterangan",placeholder:"Masukkan keterangan / alasan cuti",onBlur:s,value:n.keterangan,disabled:!n.tgl_mulai,onChange:c,className:t.keterangan&&l.keterangan?"is-invalid":null}),t.keterangan&&l.keterangan&&Object(x.jsx)("div",{className:"invalid-feedback",children:t.keterangan})]})]})]}),Object(x.jsxs)(h.O,{children:[Object(x.jsx)(h.f,{type:"submit",color:"primary",disabled:!!p,children:p?Object(x.jsx)("img",{width:21,src:o.d,alt:"load-animation"}):"Simpan"})," ",Object(x.jsx)(h.f,{type:"button",color:"secondary",onClick:function(){return i(!a)},children:"Batal"})]})]})}})})}}}]);
//# sourceMappingURL=80.0f2eaa44.chunk.js.map