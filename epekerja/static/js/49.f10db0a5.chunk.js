(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[49,90,91],{1026:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(8),c=a(1),l=a(631),s=a.n(l),r=a(632),u=a.n(r),o=a(627),d=a(641),j=a.n(d),b=a(637),h=a(656),m=a(587),g=a(571),O=a(20),x=a(807),f=a(806),p=a(652),_=a(626),v=function(e,t,a){t(!0),_.a.get("admin/pegawai/".concat(e,"/cuti")).then((function(e){console.log(e.data),a(e.data.data),t(!1)})).catch((function(e){console.log(e.response.data),t(!1)}))},w=a(752),k=a(629),C=function(e){window.open("".concat(localStorage.baseURL,"print-riwayat-cuti/").concat(e),"_blank")},y=a(646),N=a(17),T=u()(s.a);t.default=function(e){var t=e.match,a=Object(c.useState)(!1),l=Object(i.a)(a,2),s=l[0],r=l[1],u=t.params,d=Object(O.g)(),B=Object(c.useState)([]),S=Object(i.a)(B,2),M=S[0],E=S[1],D=Object(c.useState)(""),H=Object(i.a)(D,2),R=H[0],L=H[1],J=Object(c.useState)(!1),q=Object(i.a)(J,2),A=q[0],F=q[1],P=Object(c.useState)({modal:!1,id:null}),z=Object(i.a)(P,2),K=z[0],Y=z[1];Object(c.useEffect)((function(){return Object(p.a)(u.id,L),v(u.id,F,E),function(){L(""),E([])}}),[u]);var X=[{name:"No",selector:"no",sortable:!0,wrap:!0,width:"50px"},{name:"Jenis Cuti",selector:"jenis_cuti",sortable:!0,maxWidth:"150px",wrap:!0},{name:"Tgl. Mulai Cuti",selector:"tgl_mulai",sortable:!0,wrap:!0,cell:function(e){return Object(N.jsx)("div",{children:Object(w.a)(new Date(e.tgl_mulai),"dd/MM/yyyy")})}},{name:"Tgl. Selesai Cuti",selector:"tgl_selesai",sortable:!0,wrap:!0,cell:function(e){return Object(N.jsx)("div",{children:Object(w.a)(new Date(e.tgl_selesai),"dd/MM/yyyy")})}},{name:"Status Cuti",selector:"status_cuti",sortable:!0,wrap:!0,cell:function(e){var t=(new Date).getTime(),a=new Date(e.tgl_mulai).getTime(),n=new Date(e.tgl_selesai).getTime(),i="";return i=t<a?"akan-cuti":t<=n?"cuti":"cuti-selesai",Object(N.jsxs)("div",{children:["akan-cuti"===i&&Object(N.jsx)(o.b,{className:"py-2 px-3",color:"info",shape:"pill",children:"Akan Cuti"}),"cuti"===i&&Object(N.jsx)(o.b,{className:"py-2 px-3",color:"success",shape:"pill",children:"Sedang Cuti"}),"cuti-selesai"===i&&Object(N.jsx)(o.b,{className:"py-2 px-3",color:"dark",shape:"pill",children:"Masa Cuti Selesai"})]})}},{maxWidth:"180px",name:"Action",sortable:!0,cell:function(e){var t=(new Date).getTime(),a=new Date(e.tgl_mulai).getTime(),i=new Date(e.tgl_selesai).getTime(),c="";return c=t<a?"akan-cuti":t<=i?"cuti":"cuti-selesai",Object(N.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(N.jsx)(o.f,{color:"warning",onClick:function(){Y(Object(n.a)(Object(n.a)({},K),{},{modal:!K.modal,id:e.id_cuti}))},className:"text-white mr-1",children:Object(N.jsx)(b.a,{content:h.a})}),Object(N.jsx)(o.f,{color:"danger",onClick:function(){return G(e.id_cuti)},disabled:"cuti"===c,children:Object(N.jsx)(b.a,{content:m.a})})]})}}],Z={headCells:{style:{fontSize:"1.15em"}}},G=function(e){T.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(t){t.isConfirmed&&(!function(e,t,a,n){_.a.get("admin/pegawai/".concat(e,"/cuti/").concat(t,"/delete")).then((function(t){v(e,a,n),console.log(t.data)})).catch((function(e){console.log(e.response.data)}))}(u.id,e,F,E),T.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},Q=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"100%"},children:[Object(N.jsx)(o.f,{color:"primary",className:"btn btn-md",onClick:function(){return r(!s)},children:"Tambah Cuti Baru"}),Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsxs)(o.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return C(u.id)},children:["PDF ",Object(N.jsx)(b.a,{content:g.a})]}),Object(N.jsxs)(o.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(y.a)("cuti-pegawai/"+u.id)},children:["Excel ",Object(N.jsx)(b.a,{content:g.a})]})]})]})})},V=function(e){var t=e.data;return Object(N.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(N.jsxs)(o.X,{className:"mb-1",children:[Object(N.jsx)(o.n,{md:"3",children:Object(N.jsx)("strong",{children:"Tgl. Pembuatan Cuti"})}),Object(N.jsx)(o.n,{children:Object(w.a)(new Date(t.created_at),"dd/MM/y")})]}),Object(N.jsxs)(o.X,{className:"mb-1",children:[Object(N.jsx)(o.n,{md:"3",children:Object(N.jsx)("strong",{children:"Keterangan"})}),Object(N.jsx)(o.n,{children:t.keterangan})]})]})};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(o.h,{children:[Object(N.jsxs)(o.l,{className:"d-flex justify-content-between my-card-header",children:[Object(N.jsxs)("div",{className:"title mb-2",children:[Object(N.jsx)("h3",{children:"Riwayat Cuti"}),Object(N.jsx)("h5",{className:"font-weight-normal",children:R.nama})]}),Object(N.jsx)(o.f,{color:"warning",className:"text-white",style:{height:"40px",width:"100px"},onClick:function(){d.push("/epekerja/admin/cuti")},children:"Kembali"})]}),Object(N.jsx)(o.i,{children:M.length>0?Object(N.jsx)(j.a,{columns:X,data:M,noHeader:!0,responsive:!0,customStyles:Z,pagination:!0,subHeader:!0,subHeaderComponent:Object(N.jsx)(Q,{}),highlightOnHover:!0,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(N.jsx)(V,{})}):A?Object(N.jsx)("div",{children:Object(N.jsx)(o.X,{children:Object(N.jsx)(o.n,{className:"text-center",children:Object(N.jsx)("img",{className:"mt-4 ml-3",width:30,src:k.d,alt:"load-animation"})})})}):Object(N.jsx)(j.a,{columns:X,data:M,noHeader:!0,responsive:!0,customStyles:Z,pagination:!0,subHeader:!0,subHeaderComponent:Object(N.jsx)(Q,{}),highlightOnHover:!0,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(N.jsx)(V,{})})})]}),Object(N.jsxs)(o.N,{show:s,onClose:function(){return r(!s)},size:"lg",children:[Object(N.jsx)(o.Q,{closeButton:!0,children:Object(N.jsx)(o.R,{children:"Buat Cuti Pegawai"})}),Object(N.jsx)(x.default,{id_pegawai:u.id,modalTambah:s,setModalTambah:r})]}),Object(N.jsxs)(o.N,{show:K.modal,onClose:function(){Y(Object(n.a)(Object(n.a)({},K),{},{modal:!K.modal,id:null}))},size:"lg",children:[Object(N.jsx)(o.Q,{closeButton:!0,children:Object(N.jsx)(o.R,{children:"Edit Cuti"})}),Object(N.jsx)(f.default,{id_pegawai:u.id,modalEdit:K,setModalEdit:Y})]})]})}},652:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(626),i=function(e,t){n.a.get("admin/pegawai/pns/".concat(e)).then((function(e){t(e.data.data)})).catch((function(e){}))}},656:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},806:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(8),c=a(1),l=a(627),s=a(20),r=a(626),u=a(631),o=a.n(u),d=a(632),j=a.n(d),b=a(635),h=a(634),m=a(629),g=a(17),O=j()(o.a);t.default=function(e){var t=e.modalEdit,a=e.setModalEdit,u=e.id_pegawai,o=Object(s.g)(),d=Object(c.useState)(!1),j=Object(i.a)(d,2),x=j[0],f=j[1],p=Object(c.useState)(""),_=Object(i.a)(p,2),v=_[0],w=_[1];Object(c.useEffect)((function(){return t.id&&function(e,t,a){r.a.get("admin/pegawai/".concat(e,"/cuti/").concat(t)).then((function(e){a(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}(u,t.id,w),function(){w(null)}}),[t,u]);var k={tgl_mulai:v?v.tgl_mulai:"",tgl_selesai:v?v.tgl_selesai:"",jenis_cuti:v?v.jenis_cuti:"",keterangan:v?v.keterangan:""},C=function(){O.fire({icon:"success",title:"Edit Cuti Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a(Object(n.a)(Object(n.a)({},t),{},{modal:!t.modal,id:null})),o.push("/epekerja/admin/cuti/riwayat/".concat(u))}))},y=function(e){var t="";for(var a in e)t+="".concat(e[a],", ");O.fire({icon:"error",title:"Edit Cuti Gagal",text:t}).then((function(e){f(!1)}))},N=b.c().shape({tgl_mulai:b.e().required("Tanggal mulai cuti harus diisi!"),tgl_selesai:b.e().required("Tanggal selesai cuti harus diisi!"),jenis_cuti:b.e().required("Jenis cuti harus dipilih!"),keterangan:b.e().required("Keterangan/alasan cuti harus diisi!")}),T=function(e){!function(e,t,a,n,i,c){n(!0),r.a.post("admin/pegawai/".concat(e,"/cuti/").concat(t),a).then((function(e){console.log(e.data),n(!1),i()})).catch((function(e){console.log(e.response.data),c(e.response.data.errors)}))}(u,t.id,e,f,C,y)};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(h.a,{initialValues:k,validationSchema:N,enableReinitialize:!0,onSubmit:function(e){return T(e)},children:function(e){var i=e.values,c=e.errors,s=e.touched,r=e.handleChange,u=e.handleBlur,o=e.handleSubmit;return Object(g.jsxs)(l.x,{onSubmit:o,children:[Object(g.jsxs)(l.O,{children:[Object(g.jsxs)(l.y,{row:!0,children:[Object(g.jsx)(l.n,{md:"3",children:Object(g.jsx)(l.L,{children:"Jenis Cuti"})}),Object(g.jsxs)(l.n,{children:[Object(g.jsxs)(l.Y,{name:"jenis_cuti",value:i.jenis_cuti||"",onChange:r,onBlur:u,className:c.jenis_cuti&&s.jenis_cuti?"is-invalid":null,children:[Object(g.jsx)("option",{value:"",children:"-- Jenis Cuti --"}),Object(g.jsx)("option",{value:"Cuti Tahunan",children:"Cuti Tahunan"}),Object(g.jsx)("option",{value:"Cuti Bulanan",children:"Cuti Bulanan"}),Object(g.jsx)("option",{value:"Cuti Harian",children:"Cuti Harian"})]}),c.jenis_cuti&&s.jenis_cuti&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.jenis_cuti})]})]}),Object(g.jsxs)(l.y,{row:!0,children:[Object(g.jsx)(l.n,{md:"3",children:Object(g.jsx)(l.L,{children:"Tgl. Mulai"})}),Object(g.jsxs)(l.n,{children:[Object(g.jsx)(l.E,{type:"date",name:"tgl_mulai",id:"tgl_mulai",placeholder:"Masukkan tgl mulai cuti",onChange:r,onBlur:u,value:i.tgl_mulai,className:c.tgl_mulai&&s.tgl_mulai?"is-invalid":null}),c.tgl_mulai&&s.tgl_mulai&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.tgl_mulai})]})]}),Object(g.jsxs)(l.y,{row:!0,children:[Object(g.jsx)(l.n,{md:"3",children:Object(g.jsx)(l.L,{children:"Tgl. Selesai"})}),Object(g.jsxs)(l.n,{children:[Object(g.jsx)(l.E,{type:"date",name:"tgl_selesai",id:"tgl_selesai",placeholder:"Masukkan tgl selesai cuti",min:i.tgl_mulai,onChange:r,onBlur:u,value:i.tgl_selesai,className:c.tgl_selesai&&s.tgl_selesai?"is-invalid":null}),Object(g.jsxs)(l.z,{children:[Object(g.jsx)("b",{children:"Format: "})," Bulan / Tanggal / Tahun"]}),c.tgl_selesai&&s.tgl_selesai&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.tgl_selesai})]})]}),Object(g.jsxs)(l.y,{row:!0,children:[Object(g.jsx)(l.n,{md:"3",children:Object(g.jsx)(l.L,{children:"Keterangan"})}),Object(g.jsxs)(l.n,{children:[Object(g.jsx)(l.E,{type:"text",name:"keterangan",id:"keterangan",placeholder:"Masukkan keterangan / alasan cuti",onBlur:u,value:i.keterangan,disabled:!i.tgl_mulai,onChange:r,className:c.keterangan&&s.keterangan?"is-invalid":null}),c.keterangan&&s.keterangan&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.keterangan})]})]})]}),Object(g.jsxs)(l.P,{children:[Object(g.jsx)(l.f,{type:"submit",color:"primary",disabled:!!x,children:x?Object(g.jsx)("img",{width:21,src:m.e,alt:"load-animation"}):"Simpan"})," ",Object(g.jsx)(l.f,{type:"button",color:"secondary",onClick:function(){return a(Object(n.a)(Object(n.a)({},t),{},{modal:!t.modal,id:null}))},children:"Batal"})]})]})}})})}},807:function(e,t,a){"use strict";a.r(t);var n=a(638),i=a(8),c=a(1),l=a(631),s=a.n(l),r=a(632),u=a.n(r),o=a(635),d=a(634),j=a(629),b=a(627),h=a(20),m=a(752),g=a(626),O=a(17),x=u()(s.a);t.default=function(e){var t=e.modalTambah,a=e.setModalTambah,l=e.id_pegawai,s=Object(h.g)(),r=Object(c.useState)(!1),u=Object(i.a)(r,2),f=u[0],p=u[1],_=function(){x.fire({icon:"success",title:"Pembuatan Cuti Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a(!t),s.push("/epekerja/admin/cuti/riwayat/".concat(l))}))},v=function(e){var t="";for(var a in e)t+="".concat(e[a],", ");x.fire({icon:"error",title:"Pembuatan Cuti Gagal",text:t}).then((function(e){p(!1)}))},w=o.c().shape({jenis_cuti:o.e().required("Jenis cuti harus dipilih!"),tgl_mulai:o.e().required("Tanggal mulai cuti harus diisi!"),tgl_selesai:o.e().required("Tanggal selesai cuti harus diisi!"),keterangan:o.e().required("Keterangan/alasan cuti harus diisi!")}),k=function(e){var t=new FormData;for(var a in e)t.append(a,e[a]);var i,c=Object(n.a)(t.entries());try{for(c.s();!(i=c.n()).done;){var s=i.value;console.log(s)}}catch(r){c.e(r)}finally{c.f()}!function(e,t,a,n,i){a(!0),g.a.post("admin/pegawai/".concat(e,"/cuti"),t,{header:{"Content-Type":"multipart/form-data; boundary=".concat(t._boundary)}}).then((function(e){console.log(e.data),a(!1),n()})).catch((function(e){console.log(e.response.data),i(e.response.data.errors)}))}(l,t,p,_,v)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.a,{initialValues:{tgl_mulai:"",tgl_selesai:"",jenis_cuti:"",keterangan:""},validationSchema:w,onSubmit:function(e){return k(e)},children:function(e){var n=e.values,i=e.errors,c=e.touched,l=e.handleChange,s=e.handleBlur,r=e.handleSubmit;return Object(O.jsxs)(b.x,{onSubmit:r,children:[Object(O.jsxs)(b.O,{children:[Object(O.jsxs)(b.y,{row:!0,children:[Object(O.jsx)(b.n,{md:"3",children:Object(O.jsx)(b.L,{children:"Jenis Cuti"})}),Object(O.jsxs)(b.n,{children:[Object(O.jsxs)(b.Y,{name:"jenis_cuti",value:n.jenis_cuti,onChange:l,onBlur:s,className:i.jenis_cuti&&c.jenis_cuti?"is-invalid":null,children:[Object(O.jsx)("option",{value:"",children:"-- Jenis Cuti --"}),Object(O.jsx)("option",{value:"Cuti Tahunan",children:"Cuti Tahunan"}),Object(O.jsx)("option",{value:"Cuti Bulanan",children:"Cuti Bulanan"}),Object(O.jsx)("option",{value:"Cuti Harian",children:"Cuti Harian"})]}),i.jenis_cuti&&c.jenis_cuti&&Object(O.jsx)("div",{className:"invalid-feedback",children:i.jenis_cuti})]})]}),Object(O.jsxs)(b.y,{row:!0,children:[Object(O.jsx)(b.n,{md:"3",children:Object(O.jsx)(b.L,{children:"Tgl. Mulai"})}),Object(O.jsxs)(b.n,{children:[Object(O.jsx)(b.E,{type:"date",name:"tgl_mulai",id:"tgl_mulai",placeholder:"Masukkan tgl mulai cuti",min:Object(m.a)(new Date,"yyyy-MM-dd"),onChange:l,onBlur:s,value:n.tgl_mulai,className:i.tgl_mulai&&c.tgl_mulai?"is-invalid":null}),i.tgl_mulai&&c.tgl_mulai&&Object(O.jsx)("div",{className:"invalid-feedback",children:i.tgl_mulai})]})]}),Object(O.jsxs)(b.y,{row:!0,children:[Object(O.jsx)(b.n,{md:"3",children:Object(O.jsx)(b.L,{children:"Tgl. Selesai"})}),Object(O.jsxs)(b.n,{children:[Object(O.jsx)(b.E,{type:"date",name:"tgl_selesai",id:"tgl_selesai",placeholder:"Masukkan tgl selesai cuti",min:n.tgl_mulai,onChange:l,onBlur:s,value:n.tgl_selesai,className:i.tgl_selesai&&c.tgl_selesai?"is-invalid":null}),Object(O.jsxs)(b.z,{children:[Object(O.jsx)("b",{children:"Format: "})," Bulan / Tanggal / Tahun"]}),i.tgl_selesai&&c.tgl_selesai&&Object(O.jsx)("div",{className:"invalid-feedback",children:i.tgl_selesai})]})]}),Object(O.jsxs)(b.y,{row:!0,children:[Object(O.jsx)(b.n,{md:"3",children:Object(O.jsx)(b.L,{children:"Keterangan"})}),Object(O.jsxs)(b.n,{children:[Object(O.jsx)(b.E,{type:"text",name:"keterangan",id:"keterangan",placeholder:"Masukkan keterangan / alasan cuti",onBlur:s,value:n.keterangan,disabled:!n.tgl_mulai,onChange:l,className:i.keterangan&&c.keterangan?"is-invalid":null}),i.keterangan&&c.keterangan&&Object(O.jsx)("div",{className:"invalid-feedback",children:i.keterangan})]})]})]}),Object(O.jsxs)(b.P,{children:[Object(O.jsx)(b.f,{type:"submit",color:"primary",disabled:!!f,children:f?Object(O.jsx)("img",{width:21,src:j.e,alt:"load-animation"}):"Simpan"})," ",Object(O.jsx)(b.f,{type:"button",color:"secondary",onClick:function(){return a(!t)},children:"Batal"})]})]})}})})}}}]);
//# sourceMappingURL=49.f10db0a5.chunk.js.map