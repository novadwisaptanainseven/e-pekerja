(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[21],{1019:function(a,n,e){"use strict";e.r(n);var t=e(2),c=e(7),l=e(1),s=e(631),i=e.n(s),r=e(632),u=e.n(r),o=e(627),j=e(641),b=e.n(j),d=e(637),h=e(587),m=e(589),_=e(571),O=e(20),k=e(652),g=e(629),x=e(752),f=e(646),p=e(753),y=e(668),v=e(657),w=e(649),N=e(17),S=function(a){var n=a.modalDetail,e=a.setModalDetail,s=a.id_pegawai,i=a.id_riwayat_sk,r=Object(l.useState)(""),u=Object(c.a)(r,2),j=u[0],b=u[1];return Object(l.useEffect)((function(){return i&&Object(y.a)(s,i,b),function(){return b("")}}),[s,i]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.O,{children:j?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("table",{className:"table table-striped table-borderless",children:Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"No. SK"}),Object(N.jsx)("td",{children:j.no_sk})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Penetap SK"}),Object(N.jsx)("td",{children:j.penetap_sk})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Tgl. Penetapan SK"}),Object(N.jsx)("td",{children:Object(x.a)(new Date(j.tgl_penetapan_sk),"dd/MM/y")})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Tgl. Mulai Tugas"}),Object(N.jsx)("td",{children:Object(x.a)(new Date(j.tgl_mulai_tugas),"dd/MM/y")})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Tugas Pokok (Jabatan)"}),Object(N.jsx)("td",{children:j.nama_jabatan})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Gaji Pokok"}),Object(N.jsx)("td",{children:j.gaji_pokok.toLocaleString("id",{style:"currency",currency:"IDR"})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"File SK"}),Object(N.jsx)("td",{children:Object(N.jsx)("a",{href:Object(v.a)(j.file),target:"_blank",rel:"noreferrer",children:Object(w.a)(j.file)})})]})]})})}):Object(N.jsx)(o.X,{children:Object(N.jsx)(o.n,{className:"text-center",children:Object(N.jsx)("img",{className:"mt-4 ml-3 mb-4",width:30,src:g.d,alt:"load-animation"})})})}),Object(N.jsx)(o.P,{children:Object(N.jsx)(o.f,{type:"button",color:"secondary",onClick:function(){return e(Object(t.a)(Object(t.a)({},n),{},{modal:!1,id:null}))},children:"Tutup"})})]})},B=e(626),C=function(a,n,e){n(!0),B.a.get("admin/pegawai/".concat(a,"/masa-kerja/riwayat")).then((function(a){console.log(a.data),e(a.data.data),n(!1)})).catch((function(a){console.log(a.response.data),n(!1)}))},T=function(a){window.open("".concat(localStorage.baseURL,"riwayat-mk-cetak/").concat(a),"_blank")},M=u()(i.a);n.default=function(a){var n=a.match.params,e=Object(l.useState)(!1),s=Object(c.a)(e,2),i=s[0],r=s[1],u=Object(l.useState)([]),j=Object(c.a)(u,2),y=j[0],v=j[1],w=Object(l.useState)(""),K=Object(c.a)(w,2),P=K[0],D=K[1],E=Object(l.useState)(!1),z=Object(c.a)(E,2),R=z[0],q=z[1],L=Object(O.g)(),F=Object(l.useState)(!1),A=Object(c.a)(F,2),J=A[0],G=A[1],H=Object(l.useState)(!1),U=Object(c.a)(H,2),X=U[0],I=U[1],Q=Object(l.useState)({modal:!1,id:null}),Y=Object(c.a)(Q,2),V=Y[0],W=Y[1],Z=function(a){L.push("/epekerja/admin/pegawai-detail/".concat(a))};Object(l.useEffect)((function(){return Object(k.a)(n.id,D),function(){D("")}}),[n]),Object(l.useEffect)((function(){C(n.id,q,v)}),[n]);var $=[{name:"Tgl. Pembaruan",selector:"tanggal",sortable:!0,wrap:!0,cell:function(a){return Object(N.jsx)("div",{children:Object(x.a)(new Date(a.tanggal),"dd/MM/y")})}},{name:"MK. Golongan",selector:"mk_golongan",sortable:!0,wrap:!0},{name:"MK. Jabatan",selector:"mk_jabatan",sortable:!0,wrap:!0},{name:"MK. Sebelum CPNS",selector:"mk_sebelum_cpns",sortable:!0,wrap:!0},{name:"MK. Seluruhnya",selector:"mk_seluruhnya",sortable:!0,wrap:!0},{name:"Action",sortable:!0,cell:function(a){return Object(N.jsx)("div",{"data-tag":"allowRowEvents",children:Object(N.jsx)(o.g,{children:Object(N.jsx)(o.f,{color:"danger",size:"sm",onClick:function(){return na(a.id_riwayat_mk)},children:Object(N.jsx)(d.a,{content:h.a})})})})}}],aa={headCells:{style:{fontSize:"1em"}}},na=function(a){M.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(e){e.isConfirmed&&(!function(a,n,e,t,c){B.a.get("admin/pegawai/".concat(a,"/masa-kerja/riwayat/").concat(n,"/delete")).then((function(n){c(!0),C(a,e,t),console.log(n.data)})).catch((function(a){console.log(a.response.data)}))}(n.id,a,q,v,I),M.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},ea=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(o.f,{type:"button",color:"secondary",className:"ml-2",onClick:function(){return Z(n.id)},children:["Detail Pegawai ",Object(N.jsx)(d.a,{content:m.a})]}),Object(N.jsxs)(o.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return T(n.id)},children:["PDF ",Object(N.jsx)(d.a,{content:_.a})]}),Object(N.jsxs)(o.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(f.a)("riwayat-mk/".concat(n.id))},children:["Excel ",Object(N.jsx)(d.a,{content:_.a})]})]})};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(o.h,{children:[Object(N.jsxs)(o.l,{className:"d-flex justify-content-between my-card-header",children:[Object(N.jsxs)("div",{className:"title mb-2",children:[Object(N.jsx)("h3",{children:"Pembaruan Masa Kerja Pegawai"}),Object(N.jsx)("h5",{className:"font-weight-normal",children:P.nama})]}),Object(N.jsx)(o.f,{color:"warning",className:"text-white",style:{height:"40px",width:"100px"},onClick:function(){L.goBack()},children:"Kembali"})]}),Object(N.jsxs)(o.i,{children:[Object(N.jsxs)(o.a,{show:J,color:"success",closeButton:!0,onShowChange:function(a){return G(a)},children:["Masa Kerja berhasil diperbarui. Silahkan cek di"," ",Object(N.jsx)("a",{href:".",onClick:function(a){a.preventDefault(),Z(n.id)},children:"Detail Pegawai"})]}),Object(N.jsx)(o.a,{show:X,color:"success",closeButton:!0,onShowChange:function(a){return I(a)},children:"Riwayat Masa Kerja berhasil dihapus."}),Object(N.jsx)(o.f,{color:"primary",className:"btn btn-md",onClick:function(){return r(!i)},children:"Perbarui Masa Kerja"}),Object(N.jsx)("h3",{className:"font-weight-normal text-center",children:"Riwayat Masa Kerja Pegawai"}),y.length>0?Object(N.jsx)(b.a,{columns:$,data:y,responsive:!0,customStyles:aa,pagination:!0,subHeader:!0,subHeaderComponent:Object(N.jsx)(ea,{})}):R?Object(N.jsx)("div",{children:Object(N.jsx)(o.X,{children:Object(N.jsx)(o.n,{className:"text-center",children:Object(N.jsx)("img",{className:"mt-4 ml-3",width:30,src:g.d,alt:"load-animation"})})})}):Object(N.jsx)(b.a,{columns:$,data:y,noHeader:!0,responsive:!0,customStyles:aa,pagination:!0,subHeader:!0,subHeaderComponent:Object(N.jsx)(ea,{})})]})]}),Object(N.jsxs)(o.N,{show:i,onClose:function(){return r(!i)},size:"lg",children:[Object(N.jsx)(o.Q,{closeButton:!0,children:Object(N.jsx)(o.R,{children:"Perbarui Masa Kerja"})}),Object(N.jsx)(p.a,{modalTambah:i,setModalTambah:r,id_pegawai:n.id,setAlertSuccess:G})]}),Object(N.jsxs)(o.N,{show:V.modal,onClose:function(){W(Object(t.a)(Object(t.a)({},V),{},{modal:!V.modal,id:null}))},size:"lg",children:[Object(N.jsx)(o.Q,{closeButton:!0,children:Object(N.jsx)(o.R,{children:"Detail Riwayat SK"})}),Object(N.jsx)(S,{id_riwayat_sk:V.id,id_pegawai:n.id,modalDetail:V,setModalDetail:W})]})]})}},649:function(a,n,e){"use strict";n.a=function(a){var n=a.split("/");return n[n.length-1]}},652:function(a,n,e){"use strict";e.d(n,"a",(function(){return c}));var t=e(626),c=function(a,n){t.a.get("admin/pegawai/pns/".concat(a)).then((function(a){n(a.data.data)})).catch((function(a){}))}},657:function(a,n,e){"use strict";n.a=function(a){var n=a.split("/"),e=n[n.length-1];return"".concat(localStorage.baseURL,"sk/").concat(e)}},668:function(a,n,e){"use strict";e.d(n,"a",(function(){return c}));var t=e(626),c=function(a,n,e){t.a.get("admin/pegawai/".concat(a,"/pembaruan-sk/").concat(n)).then((function(a){e(a.data.data),console.log(a.data)})).catch((function(a){console.log(a.response.data)}))}},686:function(a,n,e){"use strict";e.d(n,"a",(function(){return c}));var t=e(626),c=function(a,n){t.a.get("admin/masa-kerja/".concat(a)).then((function(a){n(a.data.data),console.log(a.data)})).catch((function(a){console.log(a.response.data)}))}},706:function(a,n,e){"use strict";e.d(n,"a",(function(){return c}));var t=e(626),c=function(a,n,e,c,l){e(!0),t.a.post("admin/masa-kerja/".concat(a),n).then((function(a){console.log(a.data),e(!1),c()})).catch((function(a){console.log(a.response.data),l(a.response.data.errors)}))}},718:function(a,n,e){"use strict";e.d(n,"a",(function(){return l}));var t=e(40),c=e(626),l=function(a){a({type:t.LOADING}),c.a.get("admin/masa-kerja").then((function(n){a({type:t.SUCCESS,payload:n.data.data})})).catch((function(n){a({type:t.ERROR,payload:n.response.data.message}),console.log(n.response.data)}))}},753:function(a,n,e){"use strict";var t=e(2),c=e(7),l=e(1),s=e(631),i=e.n(s),r=e(632),u=e.n(r),o=e(635),j=e(634),b=e(629),d=e(627),h=e(20),m=function(a){var n=a.split(" ");return{tahun:n[0],bulan:n[2]}},_=e(686),O=e(706),k=e(718),g=e(17),x=u()(i.a);n.a=function(a){var n=a.modalTambah,e=a.setModalTambah,s=a.id_pegawai,i=a.masaKerjaDispatch,r=Object(h.g)(),u=Object(l.useState)(!1),f=Object(c.a)(u,2),p=f[0],y=f[1],v=Object(l.useState)(""),w=Object(c.a)(v,2),N=w[0],S=w[1];Object(l.useEffect)((function(){return console.log(s),s&&n.modal&&Object(_.a)(s,S),function(){return S("")}}),[s,n]);var B={mk_golongan_tahun:N?m(N.mk_golongan).tahun:"",mk_golongan_bulan:N?m(N.mk_golongan).bulan:"",mk_jabatan_tahun:N?m(N.mk_jabatan).tahun:"",mk_jabatan_bulan:N?m(N.mk_jabatan).bulan:"",mk_cpns_tahun:N?m(N.mk_sebelum_cpns).tahun:"",mk_cpns_bulan:N?m(N.mk_sebelum_cpns).bulan:"",mk_seluruhnya_tahun:N?m(N.mk_seluruhnya).tahun:"",mk_seluruhnya_bulan:N?m(N.mk_seluruhnya).bulan:""},C=function(){x.fire({icon:"success",title:"Masa Kerja Berhasil Diperbarui",showConfirmButton:!1,timer:1500}).then((function(a){Object(k.a)(i),e(Object(t.a)(Object(t.a)({},n),{},{modal:!1,id:null})),r.push("/epekerja/admin/masa-kerja")}))},T=function(a){var n="";for(var e in a)n+="".concat(a[e],", ");x.fire({icon:"error",title:"Masa Kerja Gagal Diperbarui",text:n}).then((function(a){y(!1)}))},M=o.c().shape({mk_golongan_tahun:o.e().required("Tahun harus diisi!"),mk_golongan_bulan:o.e().required("Bulan harus diisi!"),mk_jabatan_tahun:o.e().required("Tahun harus diisi!"),mk_jabatan_bulan:o.e().required("Bulan harus diisi!"),mk_cpns_tahun:o.e().required("Tahun harus diisi!"),mk_cpns_bulan:o.e().required("Bulan harus diisi!"),mk_seluruhnya_tahun:o.e().required("Tahun harus diisi!"),mk_seluruhnya_bulan:o.e().required("Bulan harus diisi!")}),K=function(a){var n={mk_golongan:"".concat(a.mk_golongan_tahun," Tahun ").concat(a.mk_golongan_bulan," Bulan"),mk_jabatan:"".concat(a.mk_jabatan_tahun," Tahun ").concat(a.mk_jabatan_bulan," Bulan"),mk_sebelum_cpns:"".concat(a.mk_cpns_tahun," Tahun ").concat(a.mk_cpns_bulan," Bulan"),mk_seluruhnya:"".concat(a.mk_seluruhnya_tahun," Tahun ").concat(a.mk_seluruhnya_bulan," Bulan")};Object(O.a)(s,n,y,C,T)};return Object(g.jsx)(g.Fragment,{children:N?Object(g.jsx)(j.a,{initialValues:B,validationSchema:M,enableReinitialize:!0,onSubmit:function(a){return K(a)},children:function(a){var c=a.values,l=a.errors,s=a.touched,i=a.handleChange,r=a.handleBlur,u=a.handleSubmit;return Object(g.jsxs)(d.x,{onSubmit:u,children:[Object(g.jsxs)(d.O,{children:[Object(g.jsxs)(d.y,{row:!0,children:[Object(g.jsx)(d.n,{md:"3",children:Object(g.jsx)(d.L,{children:"Masa Kerja Golongan"})}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_golongan_tahun",id:"mk_golongan_tahun",placeholder:"Tahun",onChange:i,onBlur:r,value:c.mk_golongan_tahun,className:l.mk_golongan_tahun&&s.mk_golongan_tahun?"is-invalid":null}),l.mk_golongan_tahun&&s.mk_golongan_tahun&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_golongan_tahun}),Object(g.jsx)(d.z,{children:"Tahun"})]}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_golongan_bulan",id:"mk_golongan_bulan",placeholder:"Bulan",onChange:i,onBlur:r,value:c.mk_golongan_bulan,className:l.mk_golongan_bulan&&s.mk_golongan_bulan?"is-invalid":null}),l.mk_golongan_bulan&&s.mk_golongan_bulan&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_golongan_bulan}),Object(g.jsx)(d.z,{children:"Bulan"})]})]}),Object(g.jsxs)(d.y,{row:!0,children:[Object(g.jsx)(d.n,{md:"3",children:Object(g.jsx)(d.L,{children:"Masa Kerja Jabatan"})}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_jabatan_tahun",id:"mk_jabatan_tahun",placeholder:"Tahun",onChange:i,onBlur:r,value:c.mk_jabatan_tahun,className:l.mk_jabatan_tahun&&s.mk_jabatan_tahun?"is-invalid":null}),l.mk_jabatan_tahun&&s.mk_jabatan_tahun&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_jabatan_tahun}),Object(g.jsx)(d.z,{children:"Tahun"})]}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_jabatan_bulan",id:"mk_jabatan_bulan",placeholder:"Bulan",onChange:i,onBlur:r,value:c.mk_jabatan_bulan,className:l.mk_jabatan_bulan&&s.mk_jabatan_bulan?"is-invalid":null}),l.mk_jabatan_bulan&&s.mk_jabatan_bulan&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_jabatan_bulan}),Object(g.jsx)(d.z,{children:"Bulan"})]})]}),Object(g.jsxs)(d.y,{row:!0,children:[Object(g.jsx)(d.n,{md:"3",children:Object(g.jsx)(d.L,{children:"Masa Kerja Sebelum CPNS"})}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_cpns_tahun",id:"mk_cpns_tahun",placeholder:"Tahun",onChange:i,onBlur:r,value:c.mk_cpns_tahun,className:l.mk_cpns_tahun&&s.mk_cpns_tahun?"is-invalid":null}),l.mk_cpns_tahun&&s.mk_cpns_tahun&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_cpns_tahun}),Object(g.jsx)(d.z,{children:"Tahun"})]}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_cpns_bulan",id:"mk_cpns_bulan",placeholder:"Bulan",onChange:i,onBlur:r,value:c.mk_cpns_bulan,className:l.mk_cpns_bulan&&s.mk_cpns_bulan?"is-invalid":null}),l.mk_cpns_bulan&&s.mk_cpns_bulan&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_cpns_bulan}),Object(g.jsx)(d.z,{children:"Bulan"})]})]}),Object(g.jsxs)(d.y,{row:!0,children:[Object(g.jsx)(d.n,{md:"3",children:Object(g.jsx)(d.L,{children:"Masa Kerja Seluruhnya"})}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_seluruhnya_tahun",id:"mk_seluruhnya_tahun",placeholder:"Tahun",onChange:i,onBlur:r,value:c.mk_seluruhnya_tahun,className:l.mk_seluruhnya_tahun&&s.mk_seluruhnya_tahun?"is-invalid":null}),l.mk_seluruhnya_tahun&&s.mk_seluruhnya_tahun&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_seluruhnya_tahun}),Object(g.jsx)(d.z,{children:"Tahun"})]}),Object(g.jsxs)(d.n,{children:[Object(g.jsx)(d.E,{type:"number",name:"mk_seluruhnya_bulan",id:"mk_seluruhnya_bulan",placeholder:"Bulan",onChange:i,onBlur:r,value:c.mk_seluruhnya_bulan,className:l.mk_seluruhnya_bulan&&s.mk_seluruhnya_bulan?"is-invalid":null}),l.mk_seluruhnya_bulan&&s.mk_seluruhnya_bulan&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.mk_seluruhnya_bulan}),Object(g.jsx)(d.z,{children:"Bulan"})]})]})]}),Object(g.jsxs)(d.P,{children:[Object(g.jsx)(d.f,{type:"submit",color:"primary",onClick:function(){return K(c)},disabled:!!p,children:p?Object(g.jsx)("img",{width:21,src:b.e,alt:"load-animation"}):"Simpan"})," ",Object(g.jsx)(d.f,{type:"button",color:"secondary",onClick:function(){return e(Object(t.a)(Object(t.a)({},n),{},{modal:!1}))},children:"Batal"})]})]})}}):Object(g.jsx)(d.X,{className:"mb-3",children:Object(g.jsx)(d.n,{className:"text-center",children:Object(g.jsx)("img",{className:"mt-4 ml-3",width:30,src:b.d,alt:"load-animation"})})})})}}}]);
//# sourceMappingURL=21.798d3711.chunk.js.map