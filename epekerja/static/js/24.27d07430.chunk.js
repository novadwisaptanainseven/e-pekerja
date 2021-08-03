(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{638:function(a,n,e){"use strict";function t(a,n){return n||(n=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(n)}}))}e.d(n,"a",(function(){return t}))},646:function(a,n,e){"use strict";e(1);var t,i,c=e(638),s=e(642),r=s.default.button(t||(t=Object(c.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),l=s.default.input(i||(i=Object(c.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),o=e(17);n.a=function(a){var n=a.filterText,e=a.onFilter,t=a.onClear;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:n,onChange:e}),Object(o.jsx)(r,{type:"button",onClick:t,children:"Reset"})]})}},657:function(a,n,e){"use strict";var t=e(628),i=(e(1),e(630)),c=e(17);n.a=function(){return Object(c.jsx)(t.W,{className:"mb-3",children:Object(c.jsx)(t.m,{className:"text-center",children:Object(c.jsx)("img",{className:"mt-4 ml-3",width:30,src:i.c,alt:"load-animation"})})})}},662:function(a,n,e){"use strict";e(1);var t=e(630),i=e(17);n.a=function(){return Object(i.jsx)("img",{width:21,src:t.d,alt:"load-animation"})}},670:function(a,n,e){"use strict";n.a={headCells:{style:{fontSize:"1.15em"}}}},677:function(a,n,e){"use strict";e.d(n,"a",(function(){return i}));var t=e(626),i=function(a){t.a.get("admin/master-data/pangkat-golongan").then((function(n){a(n.data.data)})).catch((function(a){}))}},735:function(a,n,e){"use strict";e.d(n,"a",(function(){return t}));var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z' class='ci-primary'/>"]},994:function(a,n,e){"use strict";e.r(n);var t=e(2),i=e(9),c=e(571),s=e(735),r=e(639),l=e(628),o=e(1),d=e.n(o),j=e(640),u=e.n(j),b=e(670),p=e(646),k=e(657),h=e(641),m=e(635),g=e(677),O=e(662),x=e(632),f=e.n(x),_=e(633),v=e.n(_),y=e(636),w=e(626),C=e(40),N=function(a){a({type:C.LOADING});w.a.get("admin/kenaikan-pangkat").then((function(n){a({type:C.SUCCESS,payload:n.data.data})})).catch((function(n){a({type:C.ERROR,payload:n.response.data.message}),console.log(n.response.data)}))},P=e(17),B=v()(f.a),K=function(a){var n=a.modal,e=a.setModal,c=a.dispatch,s=Object(o.useState)(!1),r=Object(i.a)(s,2),d=r[0],j=r[1],u=Object(o.useState)([]),b=Object(i.a)(u,2),p=b[0],k=b[1];Object(o.useEffect)((function(){n.modal&&Object(g.a)(k)}),[n]);var x={jenis_kp:"",no_sk:"",tanggal:"",mk_tahun:"",mk_bulan:"",pejabat_penetap:"",pangkat_baru:"",tmt_kenaikan_pangkat:"",file:void 0},f=function(){B.fire({icon:"success",title:"Tambah Kenaikan Pangkat Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){e(Object(t.a)(Object(t.a)({},n),{},{modal:!1}))}))},_=function(a){var n="";for(var e in a)n+="".concat(a[e],", ");B.fire({icon:"error",title:"Tambah Kenaikan Pangkat Gagal",text:n}).then((function(a){j(!1)}))},v=["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],C=y.c().shape({jenis_kp:y.e().required("Jenis kenaikan pangkat harus diisi"),pangkat_baru:y.e().required("Pangkat golongan harus diisi"),no_sk:y.e().required("No. SK harus diisi"),tanggal:y.e().required("Tanggal kenaikan pangkat harus diisi"),tmt_kenaikan_pangkat:y.e().required("TMT. Kenaikan pangkat harus diisi"),pejabat_penetap:y.e().required("Pejabata penetap harus diisi"),mk_tahun:y.e().required("Tahun harus diisi"),mk_bulan:y.e().required("Bulan harus diisi"),file:y.a().test("size","Kapasitas file maksimal 5 mb",(function(a){return!a||a&&a.size<=5048e3})).test("type","Ekstensi yang diperbolehkan hanya pdf, doc, dan docx",(function(a){return!a||a&&v.includes(a.type)}))});return Object(P.jsxs)(l.M,{show:n.modal,onClose:function(){return e(Object(t.a)(Object(t.a)({},n),{},{modal:!1,id:null}))},children:[Object(P.jsx)(l.P,{closeButton:!0,children:Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:n.data&&n.data.nama}),Object(P.jsx)("h5",{className:"font-weight-normal",children:n.data&&n.data.nip})]})}),Object(P.jsx)(m.a,{initialValues:x,validationSchema:C,onSubmit:function(a){var e=new FormData,t=a.pangkat_baru.split("-"),i=t[0],s=t[1],r=a.mk_tahun+" Tahun "+a.mk_bulan+" Bulan";e.append("id_golongan",i),e.append("pangkat_baru",s),e.append("jenis_kp",a.jenis_kp),e.append("no_sk",a.no_sk),e.append("tanggal",a.tanggal),e.append("tmt_kenaikan_pangkat",a.tmt_kenaikan_pangkat),e.append("pejabat_penetap",a.pejabat_penetap),e.append("masa_kerja",r),a.file&&e.append("file",a.file);var l,o=Object(h.a)(e.entries());try{for(o.s();!(l=o.n()).done;){var d=l.value;console.log(d)}}catch(u){o.e(u)}finally{o.f()}!function(a,n,e,t,i,c){e(!0),w.a.post("admin/kenaikan-pangkat/".concat(a),n,{header:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary)}}).then((function(a){console.log(a.data),e(!1),t(),N(c)})).catch((function(a){console.log(a.response.data),i(a.response.data.errors)}))}(n.id,e,j,f,_,c)},children:function(a){var i=a.values,c=a.errors,s=a.touched,r=a.handleChange,o=a.handleBlur,j=a.handleSubmit,u=a.setFieldValue;return Object(P.jsxs)(l.w,{onSubmit:j,children:[Object(P.jsxs)(l.N,{children:[Object(P.jsxs)(l.x,{children:[Object(P.jsx)(l.K,{children:"Jenis Kenaikan Pangkat"}),Object(P.jsxs)(l.X,{name:"jenis_kp",onChange:r,onBlur:o,className:c.jenis_kp&&s.jenis_kp?"is-invalid":null,children:[Object(P.jsx)("option",{value:i.jenis_kp,children:"-- Pilih Jenis Kenaikan Pangkat --"}),Object(P.jsx)("option",{value:"Reguler",children:"Reguler"}),Object(P.jsx)("option",{value:"Jabatan Struktural",children:"Jabatan Struktural"}),Object(P.jsx)("option",{value:"Jabatan Fungsional",children:"Jabatan Fungsional"}),Object(P.jsx)("option",{value:"Penyesuaian Ijazah",children:"Penyesuaian Ijazah"})]}),c.jenis_kp&&s.jenis_kp&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.jenis_kp})]}),Object(P.jsxs)(l.x,{children:[Object(P.jsx)(l.K,{children:"Pangkat / Golongan Baru"}),Object(P.jsxs)(l.X,{name:"pangkat_baru",onChange:r,onBlur:o,className:c.pangkat_baru&&s.pangkat_baru?"is-invalid":null,children:[Object(P.jsx)("option",{value:i.pangkat_baru,children:"-- Pilih Pangkat --"}),p.map((function(a,n){return Object(P.jsxs)("option",{value:"".concat(a.id_pangkat_golongan,"-").concat(a.keterangan," (").concat(a.golongan,")"),children:[a.keterangan," (",a.golongan,")"]},n)}))]}),c.pangkat_baru&&s.pangkat_baru&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.pangkat_baru})]}),Object(P.jsx)(l.x,{children:Object(P.jsxs)(l.W,{children:[Object(P.jsxs)(l.m,{children:[Object(P.jsx)(l.K,{children:"No. SK"}),Object(P.jsx)(l.D,{type:"text",name:"no_sk",onChange:r,onBlur:o,className:c.no_sk&&s.no_sk?"is-invalid":null}),c.no_sk&&s.no_sk&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.no_sk})]}),Object(P.jsxs)(l.m,{children:[Object(P.jsx)(l.K,{children:"Tgl. Kenaikan Pangkat"}),Object(P.jsx)(l.D,{type:"date",name:"tanggal",onChange:r,onBlur:o,className:c.tanggal&&s.tanggal?"is-invalid":null}),c.tanggal&&s.tanggal&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.tanggal})]})]})}),Object(P.jsxs)(l.x,{children:[Object(P.jsx)(l.K,{children:"TMT. Kenaikan Pangkat"}),Object(P.jsx)(l.D,{type:"date",name:"tmt_kenaikan_pangkat",onChange:r,onBlur:o,min:i.tgl_kenaikan_pangkat,className:c.tmt_kenaikan_pangkat&&s.tmt_kenaikan_pangkat?"is-invalid":null}),c.tmt_kenaikan_pangkat&&s.tmt_kenaikan_pangkat&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.tmt_kenaikan_pangkat})]}),Object(P.jsxs)(l.x,{children:[Object(P.jsx)(l.K,{children:"Pejabat Penetap"}),Object(P.jsx)(l.D,{type:"text",name:"pejabat_penetap",onChange:r,onBlur:o,className:c.pejabat_penetap&&s.pejabat_penetap?"is-invalid":null}),c.pejabat_penetap&&s.pejabat_penetap&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.pejabat_penetap})]}),Object(P.jsx)(l.x,{children:Object(P.jsxs)(l.W,{children:[Object(P.jsxs)(l.m,{children:[Object(P.jsx)(l.K,{children:"Masa Kerja Golongan"}),Object(P.jsx)(l.D,{type:"number",name:"mk_tahun",min:"0",onChange:r,onBlur:o,placeholder:"Tahun",className:c.mk_tahun&&s.mk_tahun?"is-invalid":null}),Object(P.jsx)(l.y,{children:"Tahun"}),c.mk_tahun&&s.mk_tahun&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.mk_tahun})]}),Object(P.jsxs)(l.m,{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-start"},children:[Object(P.jsx)(l.D,{type:"number",name:"mk_bulan",min:"0",onChange:r,onBlur:o,placeholder:"Bulan",className:c.mk_bulan&&s.mk_bulan?"is-invalid":null}),Object(P.jsx)(l.y,{children:"Bulan"}),c.mk_bulan&&s.mk_bulan&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.mk_bulan})]})]})}),Object(P.jsxs)(l.x,{children:[Object(P.jsx)(l.K,{children:"File"}),Object(P.jsx)(l.D,{type:"file",name:"file",onChange:function(a){return u("file",a.target.files[0])},onBlur:o,className:c.file&&s.file?"is-invalid":null}),c.file&&s.file&&Object(P.jsx)("div",{className:"invalid-feedback",children:c.file})]})]}),Object(P.jsxs)(l.O,{children:[Object(P.jsx)(l.f,{type:"submit",color:"primary",disabled:!!d,children:d?Object(P.jsx)(O.a,{}):"Simpan"}),Object(P.jsx)(l.f,{color:"secondary",onClick:function(){return e(Object(t.a)(Object(t.a)({},n),{},{modal:!1,id:null}))},children:"Close"})]})]})}})]})},S=e(740),D=function(a){var n=a.modal,e=a.setModal,c=Object(o.useState)(""),d=Object(i.a)(c,2),j=d[0],u=d[1];Object(o.useEffect)((function(){return n.data&&(console.log(n.data),"pangkat-updated"===n.type?u("Kepada Yth. ".concat(n.data.nama,", pangkat Anda telah diperbarui menjadi ").concat(n.data.pangkat_baru," terhitung mulai tanggal ").concat(Object(S.a)(new Date(n.data.tmt_kenaikan_pangkat),"dd/MM/y"),". Terimakasih")):"akan-naik-pangkat"===n.type&&u("Kepada Yth. ".concat(n.data.nama,", Anda akan mengalami kenaikan pangkat pada tanggal ").concat(Object(S.a)(new Date(n.data.tmt_kenaikan_pangkat),"dd/MM/y"),". Terimakasih"))),function(){return u("")}}),[n]);return Object(P.jsx)("div",{children:Object(P.jsxs)(l.M,{show:n.modal,onClose:function(){return e(Object(t.a)(Object(t.a)({},n),{},{modal:!1}))},children:[Object(P.jsx)(l.P,{closeButton:!0,children:"Kirim Pemberitahuan via WhatsApp"}),Object(P.jsx)(l.N,{children:n.data&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(l.x,{children:[Object(P.jsx)(l.K,{children:"No. HP"}),Object(P.jsx)(l.D,{type:"text",name:"no_hp",value:n.data.no_hp,readOnly:!0})]}),Object(P.jsxs)(l.x,{children:[Object(P.jsx)(l.K,{children:"Pesan"}),Object(P.jsx)(l.kb,{name:"pesan",rows:5,readOnly:!0,value:j})]})]})}),Object(P.jsxs)(l.O,{children:[Object(P.jsxs)(l.f,{color:"primary",onClick:function(){var a=n.data.no_hp.replace("0","62"),e=j;window.open("https://api.whatsapp.com/send?phone=".concat(a,"&text=").concat(e),"blank")},children:["Kirim ",Object(P.jsx)(r.a,{content:s.a})]}),Object(P.jsx)(l.f,{color:"secondary",onClick:function(){return e(Object(t.a)(Object(t.a)({},n),{},{modal:!1}))},children:"Tutup"})]})]})})},T=e(163),M=function(){window.open("".concat(localStorage.baseURL,"print-kenaikan-pangkat"),"_blank")},A=e(643),R=e(20),L=v()(f.a);n.default=function(){var a=Object(R.g)(),n=Object(R.i)().path,e=Object(o.useState)(""),j=Object(i.a)(e,2),h=j[0],m=j[1],g=Object(o.useState)(!1),O=Object(i.a)(g,2),x=O[0],f=O[1],_=Object(o.useContext)(T.a),v=_.kenaikanPangkatState,y=_.kenaikanPangkatDispatch,C=v.data,B=v.loading,F=Object(o.useState)({modal:!1,data:null,type:null}),J=Object(i.a)(F,2),W=J[0],q=J[1],E=Object(o.useState)({modal:!1}),z=Object(i.a)(E,2),G=z[0],I=z[1];Object(o.useEffect)((function(){N(y)}),[y]);var H=C.filter((function(a){return a.nip.toLowerCase().includes(h.toLowerCase())||a.nama.toLowerCase().includes(h.toLowerCase())})),Y=[{name:"No",selector:"no",sortable:!0,wrap:!0,width:"80px"},{name:"NIP",selector:"nip",sortable:!0,wrap:!0},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Pangkat / Gol",wrap:!0,cell:function(a){return Object(P.jsxs)("span",{children:[a.keterangan," (",a.golongan,")"]})}},{name:"Kenaikan Pangkat",selector:"pangkat_baru",wrap:!0,cell:function(a){return Object(P.jsxs)("div",{className:"text-center",children:[a.pangkat_baru&&Object(P.jsxs)("span",{children:[a.pangkat_baru," ",Object(P.jsx)("br",{}),Object(S.a)(new Date(a.tmt_kenaikan_pangkat),"dd/MM/y")]}),!a.pangkat_baru&&Object(P.jsx)(l.f,{className:"my-1",color:"danger",onClick:function(){return q(Object(t.a)(Object(t.a)({},W),{},{modal:!0,id:a.id,data:a}))},children:"Tidak ada kenaikan pangkat"})]})}},{name:"Aksi",cell:function(a){return Object(P.jsx)("div",{"data-tag":"allowRowEvents",className:"my-1",children:a.pangkat_baru&&Object(P.jsx)(l.f,{color:"dark",onClick:function(){return U(a.id)},disabled:!a.pangkat_baru,children:"Batalkan Kenaikan"})})}}],U=function(a){L.fire({icon:"warning",title:"Anda yakin ingin membatalkan kenaikan pangkat untuk pegawai ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(n){n.isConfirmed&&(!function(a,n){w.a.delete("admin/kenaikan-pangkat-batal/".concat(a)).then((function(a){console.log(a.data),N(n)})).catch((function(a){console.log(a.response.data)}))}(a,y),L.fire({icon:"success",title:"Sukses",text:"Kenaikan Pangkat Berhasil Dibatalkan"}))}))},V=function(a){L.fire({title:"Pangkat Golongan Sedang Diperbarui!",html:"Loading...",timer:1e3,timerProgressBar:!0,didOpen:function(){var n,e;L.showLoading(),n=a.id,e=y,w.a.put("admin/kenaikan-pangkat-update/".concat(n)).then((function(a){console.log(a.data),N(e)})).catch((function(a){console.log(a.response.data)}))}}).then((function(n){n.dismiss===L.DismissReason.timer&&L.fire({icon:"warning",title:"Anda ingin mengirim notifikasi WA ?",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#1c9c25",cancelButtonColor:"#d33",confirmButtonText:"YA",cancelButtonText:"TIDAK"}).then((function(n){n.isConfirmed&&I(Object(t.a)(Object(t.a)({},G),{},{modal:!0,data:a,type:"pangkat-updated"}))}))}))},X=d.a.useMemo((function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(p.a,{onFilter:function(a){return m(a.target.value)},onClear:function(){h&&(f(!x),m(""))},filterText:h}),Object(P.jsxs)(l.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return M()},children:["PDF ",Object(P.jsx)(r.a,{content:c.a})]}),Object(P.jsxs)(l.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(A.a)("kenaikan-pangkat")},children:["Excel ",Object(P.jsx)(r.a,{content:c.a})]})]})}),[h,x]),Z=function(e){var i=e.data,c="",o=Date.parse(new Date),d=i.tmt_kenaikan_pangkat?Date.parse(new Date(i.tmt_kenaikan_pangkat)):"";return d&&(c=o<d?"akan-naik-pangkat":"naik-pangkat"),Object(P.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(P.jsxs)(l.W,{className:"mb-1",children:[Object(P.jsx)(l.m,{md:"3",children:Object(P.jsx)("strong",{children:"Status Kenaikan Pangkat"})}),Object(P.jsxs)(l.m,{children:["akan-naik-pangkat"===c&&Object(P.jsx)(l.b,{color:"primary",children:"Akan Naik Pangkat"}),"naik-pangkat"===c&&Object(P.jsx)(l.f,{color:"info",onClick:function(){return V(i)},children:"Update Pangkat dan Simpan Ke Riwayat"}),!c&&Object(P.jsx)(l.b,{color:"danger",children:"Tidak ada kenaikan pangkat"})]})]}),Object(P.jsxs)(l.W,{className:"mb-1",children:[Object(P.jsx)(l.m,{md:"3",children:Object(P.jsx)("strong",{children:"Pemberitahuan"})}),Object(P.jsxs)(l.m,{children:["akan-naik-pangkat"===c&&Object(P.jsxs)("span",{children:["Pegawai ini akan mengalami kenaikan pangkat menjadi"," ",i.pangkat_baru," pada tanggal"," ",Object(S.a)(new Date(i.tmt_kenaikan_pangkat),"dd/MM/y")," ",Object(P.jsx)("br",{}),Object(P.jsxs)(l.f,{color:"success",className:"mt-1",onClick:function(){return I(Object(t.a)(Object(t.a)({},G),{},{modal:!0,data:i,type:"akan-naik-pangkat"}))},children:["Notifikasi WA ",Object(P.jsx)(r.a,{content:s.a})]})]}),"naik-pangkat"===c&&Object(P.jsx)("span",{children:"Pegawai ini pangkatnya sudah bisa diupdate"})]})]}),Object(P.jsxs)(l.W,{className:"mb-1",children:[Object(P.jsx)(l.m,{md:"3",children:Object(P.jsx)("strong",{children:"Riwayat Golongan"})}),Object(P.jsx)(l.m,{children:Object(P.jsx)(l.f,{color:"primary",onClick:function(){return e=i.id_pegawai,void a.push("".concat(n,"/riwayat/").concat(e));var e},children:"Lihat"})})]})]})};return Object(P.jsxs)("div",{children:[Object(P.jsxs)(l.h,{children:[Object(P.jsx)(l.l,{children:Object(P.jsx)("h3",{children:"Kenaikan Pangkat PNS"})}),Object(P.jsx)(l.i,{children:C.length>0?Object(P.jsx)(u.a,{columns:Y,data:H,noHeader:!0,responsive:!0,customStyles:b.a,pagination:!0,paginationResetDefaultPage:x,subHeader:!0,subHeaderComponent:X,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(P.jsx)(Z,{}),highlightOnHover:!0}):B?Object(P.jsx)(k.a,{}):Object(P.jsx)(u.a,{columns:Y,data:H,noHeader:!0,responsive:!0,customStyles:b.a})})]}),Object(P.jsx)(K,{modal:W,setModal:q,dispatch:y}),Object(P.jsx)(D,{modal:G,setModal:I})]})}}}]);
//# sourceMappingURL=24.27d07430.chunk.js.map