(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35,79,80],{1001:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(10),c=a(1),l=a(632),s=a.n(l),r=a(633),o=a.n(r),u=a(628),d=a(641),j=a.n(d),b=a(639),h=a(653),m=a(587),g=a(571),x=a(20),O=a(794),f=a(793),p=a(650),_=a(626),v=function(e,t,a){t(!0),_.a.get("admin/pegawai/".concat(e,"/cuti")).then((function(e){console.log(e.data),a(e.data.data),t(!1)})).catch((function(e){console.log(e.response.data),t(!1)}))},w=a(738),k=a(630),C=function(e){window.open("".concat(localStorage.baseURL,"print-riwayat-cuti/").concat(e),"_blank")},y=a(640),N=a(17),T=o()(s.a);t.default=function(e){var t=e.match,a=Object(c.useState)(!1),l=Object(i.a)(a,2),s=l[0],r=l[1],o=t.params,d=Object(x.g)(),S=Object(c.useState)([]),B=Object(i.a)(S,2),M=B[0],D=B[1],K=Object(c.useState)(""),R=Object(i.a)(K,2),H=R[0],E=R[1],J=Object(c.useState)(!1),q=Object(i.a)(J,2),A=q[0],F=q[1],L=Object(c.useState)({modal:!1,id:null}),P=Object(i.a)(L,2),U=P[0],W=P[1];Object(c.useEffect)((function(){return Object(p.a)(o.id,E),v(o.id,F,D),function(){E(""),D([])}}),[o]);var z=[{name:"No",selector:"no",sortable:!0,wrap:!0,width:"50px"},{name:"Jenis Cuti",selector:"jenis_cuti",sortable:!0,maxWidth:"150px",wrap:!0},{name:"Tgl. Mulai Cuti",selector:"tgl_mulai",sortable:!0,wrap:!0,cell:function(e){return Object(N.jsx)("div",{children:Object(w.a)(new Date(e.tgl_mulai),"dd/MM/yyyy")})}},{name:"Tgl. Selesai Cuti",selector:"tgl_selesai",sortable:!0,wrap:!0,cell:function(e){return Object(N.jsx)("div",{children:Object(w.a)(new Date(e.tgl_selesai),"dd/MM/yyyy")})}},{name:"Status Cuti",selector:"status_cuti",sortable:!0,wrap:!0,cell:function(e){var t=(new Date).getTime(),a=new Date(e.tgl_mulai).getTime(),n=new Date(e.tgl_selesai).getTime(),i="";return i=t<a?"akan-cuti":t<=n?"cuti":"cuti-selesai",Object(N.jsxs)("div",{children:["akan-cuti"===i&&Object(N.jsx)(u.b,{className:"py-2 px-3",color:"info",shape:"pill",children:"Akan Cuti"}),"cuti"===i&&Object(N.jsx)(u.b,{className:"py-2 px-3",color:"success",shape:"pill",children:"Sedang Cuti"}),"cuti-selesai"===i&&Object(N.jsx)(u.b,{className:"py-2 px-3",color:"dark",shape:"pill",children:"Masa Cuti Selesai"})]})}},{maxWidth:"180px",name:"Action",sortable:!0,cell:function(e){var t=(new Date).getTime(),a=new Date(e.tgl_mulai).getTime(),i=new Date(e.tgl_selesai).getTime(),c="";return c=t<a?"akan-cuti":t<=i?"cuti":"cuti-selesai",Object(N.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(N.jsx)(u.f,{color:"warning",onClick:function(){W(Object(n.a)(Object(n.a)({},U),{},{modal:!U.modal,id:e.id_cuti}))},className:"text-white mr-1",children:Object(N.jsx)(b.a,{content:h.a})}),Object(N.jsx)(u.f,{color:"danger",onClick:function(){return G(e.id_cuti)},disabled:"cuti"===c,children:Object(N.jsx)(b.a,{content:m.a})})]})}}],Z={headCells:{style:{fontSize:"1.15em"}}},G=function(e){T.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(t){t.isConfirmed&&(!function(e,t,a,n){_.a.delete("admin/pegawai/".concat(e,"/cuti/").concat(t)).then((function(t){v(e,a,n),console.log(t.data)})).catch((function(e){console.log(e.response.data)}))}(o.id,e,F,D),T.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},Q=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"100%"},children:[Object(N.jsx)(u.f,{color:"primary",className:"btn btn-md",onClick:function(){return r(!s)},children:"Tambah Cuti Baru"}),Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsxs)(u.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return C(o.id)},children:["PDF ",Object(N.jsx)(b.a,{content:g.a})]}),Object(N.jsxs)(u.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(y.a)("cuti-pegawai/"+o.id)},children:["Excel ",Object(N.jsx)(b.a,{content:g.a})]})]})]})})},V=function(e){var t=e.data;return Object(N.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(N.jsxs)(u.W,{className:"mb-1",children:[Object(N.jsx)(u.m,{md:"3",children:Object(N.jsx)("strong",{children:"Tgl. Pembuatan Cuti"})}),Object(N.jsx)(u.m,{children:Object(w.a)(new Date(t.created_at),"dd/MM/y")})]}),Object(N.jsxs)(u.W,{className:"mb-1",children:[Object(N.jsx)(u.m,{md:"3",children:Object(N.jsx)("strong",{children:"Keterangan"})}),Object(N.jsx)(u.m,{children:t.keterangan})]})]})};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(u.h,{children:[Object(N.jsxs)(u.l,{className:"d-flex justify-content-between my-card-header",children:[Object(N.jsxs)("div",{className:"title mb-2",children:[Object(N.jsx)("h3",{children:"Riwayat Cuti"}),Object(N.jsx)("h5",{className:"font-weight-normal",children:H.nama})]}),Object(N.jsx)(u.f,{color:"warning",className:"text-white",style:{height:"40px",width:"100px"},onClick:function(){d.push("/epekerja/admin/cuti")},children:"Kembali"})]}),Object(N.jsx)(u.i,{children:M.length>0?Object(N.jsx)(j.a,{columns:z,data:M,noHeader:!0,responsive:!0,customStyles:Z,pagination:!0,subHeader:!0,subHeaderComponent:Object(N.jsx)(Q,{}),highlightOnHover:!0,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(N.jsx)(V,{})}):A?Object(N.jsx)("div",{children:Object(N.jsx)(u.W,{children:Object(N.jsx)(u.m,{className:"text-center",children:Object(N.jsx)("img",{className:"mt-4 ml-3",width:30,src:k.c,alt:"load-animation"})})})}):Object(N.jsx)(j.a,{columns:z,data:M,noHeader:!0,responsive:!0,customStyles:Z,pagination:!0,subHeader:!0,subHeaderComponent:Object(N.jsx)(Q,{}),highlightOnHover:!0,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(N.jsx)(V,{})})})]}),Object(N.jsxs)(u.M,{show:s,onClose:function(){return r(!s)},size:"lg",children:[Object(N.jsx)(u.P,{closeButton:!0,children:Object(N.jsx)(u.Q,{children:"Buat Cuti Pegawai"})}),Object(N.jsx)(O.default,{id_pegawai:o.id,modalTambah:s,setModalTambah:r})]}),Object(N.jsxs)(u.M,{show:U.modal,onClose:function(){W(Object(n.a)(Object(n.a)({},U),{},{modal:!U.modal,id:null}))},size:"lg",children:[Object(N.jsx)(u.P,{closeButton:!0,children:Object(N.jsx)(u.Q,{children:"Edit Cuti"})}),Object(N.jsx)(f.default,{id_pegawai:o.id,modalEdit:U,setModalEdit:W})]})]})}},640:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(a){if("filter_tanggal"===a){var n="first_date=".concat(t.startDate,"&last_date=").concat(t.endDate);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(n),"_self")}else if("filter_tahun"===a){var i="tahun=".concat(t);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(i),"_self")}else if("filter_bulan_tahun"===a){var c="bulan=".concat(t.bulan,"&tahun=").concat(t.tahun);window.open("".concat(localStorage.baseURL).concat(e,"/export?").concat(c),"_self")}}else window.open("".concat(localStorage.baseURL).concat(e,"/export"),"_self")}},650:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(626),i=function(e,t){n.a.get("admin/pegawai/pns/".concat(e)).then((function(e){t(e.data.data)})).catch((function(e){}))}},653:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},793:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(10),c=a(1),l=a(628),s=a(20),r=a(626),o=a(632),u=a.n(o),d=a(633),j=a.n(d),b=a(637),h=a(636),m=a(630),g=a(17),x=j()(u.a);t.default=function(e){var t=e.modalEdit,a=e.setModalEdit,o=e.id_pegawai,u=Object(s.g)(),d=Object(c.useState)(!1),j=Object(i.a)(d,2),O=j[0],f=j[1],p=Object(c.useState)(""),_=Object(i.a)(p,2),v=_[0],w=_[1];Object(c.useEffect)((function(){return t.id&&function(e,t,a){r.a.get("admin/pegawai/".concat(e,"/cuti/").concat(t)).then((function(e){a(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}(o,t.id,w),function(){w(null)}}),[t,o]);var k={tgl_mulai:v?v.tgl_mulai:"",tgl_selesai:v?v.tgl_selesai:"",jenis_cuti:v?v.jenis_cuti:"",keterangan:v?v.keterangan:""},C=function(){x.fire({icon:"success",title:"Edit Cuti Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a(Object(n.a)(Object(n.a)({},t),{},{modal:!t.modal,id:null})),u.push("/epekerja/admin/cuti/riwayat/".concat(o))}))},y=function(e){var t="";for(var a in e)t+="".concat(e[a],", ");x.fire({icon:"error",title:"Edit Cuti Gagal",text:t}).then((function(e){f(!1)}))},N=b.c().shape({tgl_mulai:b.e().required("Tanggal mulai cuti harus diisi!"),tgl_selesai:b.e().required("Tanggal selesai cuti harus diisi!"),jenis_cuti:b.e().required("Jenis cuti harus dipilih!"),keterangan:b.e().required("Keterangan/alasan cuti harus diisi!")}),T=function(e){!function(e,t,a,n,i,c){n(!0),r.a.put("admin/pegawai/".concat(e,"/cuti/").concat(t),a).then((function(e){console.log(e.data),n(!1),i()})).catch((function(e){console.log(e.response.data),c(e.response.data.errors)}))}(o,t.id,e,f,C,y)};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(h.a,{initialValues:k,validationSchema:N,enableReinitialize:!0,onSubmit:function(e){return T(e)},children:function(e){var i=e.values,c=e.errors,s=e.touched,r=e.handleChange,o=e.handleBlur,u=e.handleSubmit;return Object(g.jsxs)(l.w,{onSubmit:u,children:[Object(g.jsxs)(l.N,{children:[Object(g.jsxs)(l.x,{row:!0,children:[Object(g.jsx)(l.m,{md:"3",children:Object(g.jsx)(l.K,{children:"Jenis Cuti"})}),Object(g.jsxs)(l.m,{children:[Object(g.jsxs)(l.X,{name:"jenis_cuti",value:i.jenis_cuti||"",onChange:r,onBlur:o,className:c.jenis_cuti&&s.jenis_cuti?"is-invalid":null,children:[Object(g.jsx)("option",{value:"",children:"-- Jenis Cuti --"}),Object(g.jsx)("option",{value:"Cuti Tahunan",children:"Cuti Tahunan"}),Object(g.jsx)("option",{value:"Cuti Bulanan",children:"Cuti Bulanan"}),Object(g.jsx)("option",{value:"Cuti Harian",children:"Cuti Harian"})]}),c.jenis_cuti&&s.jenis_cuti&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.jenis_cuti})]})]}),Object(g.jsxs)(l.x,{row:!0,children:[Object(g.jsx)(l.m,{md:"3",children:Object(g.jsx)(l.K,{children:"Tgl. Mulai"})}),Object(g.jsxs)(l.m,{children:[Object(g.jsx)(l.D,{type:"date",name:"tgl_mulai",id:"tgl_mulai",placeholder:"Masukkan tgl mulai cuti",onChange:r,onBlur:o,value:i.tgl_mulai,className:c.tgl_mulai&&s.tgl_mulai?"is-invalid":null}),c.tgl_mulai&&s.tgl_mulai&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.tgl_mulai})]})]}),Object(g.jsxs)(l.x,{row:!0,children:[Object(g.jsx)(l.m,{md:"3",children:Object(g.jsx)(l.K,{children:"Tgl. Selesai"})}),Object(g.jsxs)(l.m,{children:[Object(g.jsx)(l.D,{type:"date",name:"tgl_selesai",id:"tgl_selesai",placeholder:"Masukkan tgl selesai cuti",min:i.tgl_mulai,onChange:r,onBlur:o,value:i.tgl_selesai,className:c.tgl_selesai&&s.tgl_selesai?"is-invalid":null}),Object(g.jsxs)(l.y,{children:[Object(g.jsx)("b",{children:"Format: "})," Bulan / Tanggal / Tahun"]}),c.tgl_selesai&&s.tgl_selesai&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.tgl_selesai})]})]}),Object(g.jsxs)(l.x,{row:!0,children:[Object(g.jsx)(l.m,{md:"3",children:Object(g.jsx)(l.K,{children:"Keterangan"})}),Object(g.jsxs)(l.m,{children:[Object(g.jsx)(l.D,{type:"text",name:"keterangan",id:"keterangan",placeholder:"Masukkan keterangan / alasan cuti",onBlur:o,value:i.keterangan,disabled:!i.tgl_mulai,onChange:r,className:c.keterangan&&s.keterangan?"is-invalid":null}),c.keterangan&&s.keterangan&&Object(g.jsx)("div",{className:"invalid-feedback",children:c.keterangan})]})]})]}),Object(g.jsxs)(l.O,{children:[Object(g.jsx)(l.f,{type:"submit",color:"primary",disabled:!!O,children:O?Object(g.jsx)("img",{width:21,src:m.d,alt:"load-animation"}):"Simpan"})," ",Object(g.jsx)(l.f,{type:"button",color:"secondary",onClick:function(){return a(Object(n.a)(Object(n.a)({},t),{},{modal:!t.modal,id:null}))},children:"Batal"})]})]})}})})}},794:function(e,t,a){"use strict";a.r(t);var n=a(642),i=a(10),c=a(1),l=a(632),s=a.n(l),r=a(633),o=a.n(r),u=a(637),d=a(636),j=a(630),b=a(628),h=a(20),m=a(738),g=a(626),x=a(17),O=o()(s.a);t.default=function(e){var t=e.modalTambah,a=e.setModalTambah,l=e.id_pegawai,s=Object(h.g)(),r=Object(c.useState)(!1),o=Object(i.a)(r,2),f=o[0],p=o[1],_=function(){O.fire({icon:"success",title:"Pembuatan Cuti Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a(!t),s.push("/epekerja/admin/cuti/riwayat/".concat(l))}))},v=function(e){var t="";for(var a in e)t+="".concat(e[a],", ");O.fire({icon:"error",title:"Pembuatan Cuti Gagal",text:t}).then((function(e){p(!1)}))},w=u.c().shape({jenis_cuti:u.e().required("Jenis cuti harus dipilih!"),tgl_mulai:u.e().required("Tanggal mulai cuti harus diisi!"),tgl_selesai:u.e().required("Tanggal selesai cuti harus diisi!"),keterangan:u.e().required("Keterangan/alasan cuti harus diisi!")}),k=function(e){var t=new FormData;for(var a in e)t.append(a,e[a]);var i,c=Object(n.a)(t.entries());try{for(c.s();!(i=c.n()).done;){var s=i.value;console.log(s)}}catch(r){c.e(r)}finally{c.f()}!function(e,t,a,n,i){a(!0),g.a.post("admin/pegawai/".concat(e,"/cuti"),t,{header:{"Content-Type":"multipart/form-data; boundary=".concat(t._boundary)}}).then((function(e){console.log(e.data),a(!1),n()})).catch((function(e){console.log(e.response.data),i(e.response.data.errors)}))}(l,t,p,_,v)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(d.a,{initialValues:{tgl_mulai:"",tgl_selesai:"",jenis_cuti:"",keterangan:""},validationSchema:w,onSubmit:function(e){return k(e)},children:function(e){var n=e.values,i=e.errors,c=e.touched,l=e.handleChange,s=e.handleBlur,r=e.handleSubmit;return Object(x.jsxs)(b.w,{onSubmit:r,children:[Object(x.jsxs)(b.N,{children:[Object(x.jsxs)(b.x,{row:!0,children:[Object(x.jsx)(b.m,{md:"3",children:Object(x.jsx)(b.K,{children:"Jenis Cuti"})}),Object(x.jsxs)(b.m,{children:[Object(x.jsxs)(b.X,{name:"jenis_cuti",value:n.jenis_cuti,onChange:l,onBlur:s,className:i.jenis_cuti&&c.jenis_cuti?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Jenis Cuti --"}),Object(x.jsx)("option",{value:"Cuti Tahunan",children:"Cuti Tahunan"}),Object(x.jsx)("option",{value:"Cuti Bulanan",children:"Cuti Bulanan"}),Object(x.jsx)("option",{value:"Cuti Harian",children:"Cuti Harian"})]}),i.jenis_cuti&&c.jenis_cuti&&Object(x.jsx)("div",{className:"invalid-feedback",children:i.jenis_cuti})]})]}),Object(x.jsxs)(b.x,{row:!0,children:[Object(x.jsx)(b.m,{md:"3",children:Object(x.jsx)(b.K,{children:"Tgl. Mulai"})}),Object(x.jsxs)(b.m,{children:[Object(x.jsx)(b.D,{type:"date",name:"tgl_mulai",id:"tgl_mulai",placeholder:"Masukkan tgl mulai cuti",min:Object(m.a)(new Date,"yyyy-MM-dd"),onChange:l,onBlur:s,value:n.tgl_mulai,className:i.tgl_mulai&&c.tgl_mulai?"is-invalid":null}),i.tgl_mulai&&c.tgl_mulai&&Object(x.jsx)("div",{className:"invalid-feedback",children:i.tgl_mulai})]})]}),Object(x.jsxs)(b.x,{row:!0,children:[Object(x.jsx)(b.m,{md:"3",children:Object(x.jsx)(b.K,{children:"Tgl. Selesai"})}),Object(x.jsxs)(b.m,{children:[Object(x.jsx)(b.D,{type:"date",name:"tgl_selesai",id:"tgl_selesai",placeholder:"Masukkan tgl selesai cuti",min:n.tgl_mulai,onChange:l,onBlur:s,value:n.tgl_selesai,className:i.tgl_selesai&&c.tgl_selesai?"is-invalid":null}),Object(x.jsxs)(b.y,{children:[Object(x.jsx)("b",{children:"Format: "})," Bulan / Tanggal / Tahun"]}),i.tgl_selesai&&c.tgl_selesai&&Object(x.jsx)("div",{className:"invalid-feedback",children:i.tgl_selesai})]})]}),Object(x.jsxs)(b.x,{row:!0,children:[Object(x.jsx)(b.m,{md:"3",children:Object(x.jsx)(b.K,{children:"Keterangan"})}),Object(x.jsxs)(b.m,{children:[Object(x.jsx)(b.D,{type:"text",name:"keterangan",id:"keterangan",placeholder:"Masukkan keterangan / alasan cuti",onBlur:s,value:n.keterangan,disabled:!n.tgl_mulai,onChange:l,className:i.keterangan&&c.keterangan?"is-invalid":null}),i.keterangan&&c.keterangan&&Object(x.jsx)("div",{className:"invalid-feedback",children:i.keterangan})]})]})]}),Object(x.jsxs)(b.O,{children:[Object(x.jsx)(b.f,{type:"submit",color:"primary",disabled:!!f,children:f?Object(x.jsx)("img",{width:21,src:j.d,alt:"load-animation"}):"Simpan"})," ",Object(x.jsx)(b.f,{type:"button",color:"secondary",onClick:function(){return a(!t)},children:"Batal"})]})]})}})})}}}]);
//# sourceMappingURL=35.8a0705cf.chunk.js.map