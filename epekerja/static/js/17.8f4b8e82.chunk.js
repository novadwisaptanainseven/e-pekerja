(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{638:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return a}))},640:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(n){if("filter_tanggal"===n){var a="first_date=".concat(t.startDate,"&last_date=").concat(t.endDate);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(a),"_self")}else if("filter_tahun"===n){var c="tahun=".concat(t);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(c),"_self")}else if("filter_bulan_tahun"===n){var r="bulan=".concat(t.bulan,"&tahun=").concat(t.tahun);window.open("".concat(localStorage.baseURL).concat(e,"/export?").concat(r),"_self")}}else window.open("".concat(localStorage.baseURL).concat(e,"/export"),"_self")}},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},660:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(626),c=function(e,t,n){t(!0),a.a.get("admin/pegawai/".concat(e,"/rekap-absensi")).then((function(e){n(e.data.data),t(!1),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(626),c=function(e,t,n,c){t(!0),console.log(c),a.a.get("admin/pegawai/".concat(e,"/absensi?first_date=").concat(c.startDate,"&last_date=").concat(c.endDate)).then((function(e){n(e.data.data),t(!1),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(112);var c=n(169);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},677:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("".concat(localStorage.baseURL,"print-rekap-absensi/").concat(e,"?tahun=").concat(t),"_blank")}},679:function(e,t,n){"use strict";var a=n(10),c=n(1),r=n(628),i=n(738),o=n(2),s=n(626),l=n(660),u=n(661),b=n(17);t.a=function(e){var t=e.data,n=e.modal,d=e.idPegawai,j=e.setRiwayatAbsen,h=e.setRekapAbsensi,p=e.setLoadingRiwayatAbsen,O=e.setLoadingRekapAbsensi,f=e.formattedDateRiwayatAbsen,m=Object(c.useState)(""),g=Object(a.a)(m,2),x=g[0],v=g[1],w=Object(c.useState)(""),y=Object(a.a)(w,2),k=y[0],S=y[1],C=Object(c.useState)(""),E=Object(a.a)(C,2),_=E[0],D=E[1],R=Object(c.useState)(""),A=Object(a.a)(R,2),M=A[0],T=A[1],P=Object(c.useState)(!1),N=Object(a.a)(P,2),H=N[0],I=N[1],L=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n="";switch(n=t?Object(i.a)(new Date(t.filterYear,t.filterMonth,t.tgl),"EEEEEE"):Object(i.a)(new Date,"EEEEEE"),e&&(n=Object(i.a)(new Date(e),"EEEEEE")),n){case"Su":n="minggu";break;case"Mo":n="senin";break;case"Tu":n="selasa";break;case"We":n="rabu";break;case"Th":n="kamis";break;case"Fr":n="jumat";break;case"Sa":n="sabtu"}return n}),[t]);Object(c.useEffect)((function(){var e=null;t||(e=Object(i.a)(new Date,"yyyy-MM-dd"),v(e),T(L())),t&&t.tgl&&(e=Object(i.a)(new Date(t.filterYear,t.filterMonth,t.tgl),"yyyy-MM-dd"),v(e),S(t.absen),D(t.keterangan),T(L()))}),[t,L]),Object(c.useEffect)((function(){T(L(x))}),[x,L]);var F=function(e){e.preventDefault();var a=t?t.id_pegawai:d,c={id_absensi:t?t.id_absensi:"",tgl_absen:x,hari:M,absen:"empty"===k?"":parseInt(k),keterangan:_};console.log(c),t?function(e,t,n,a,c){t(!0),s.a.post("admin/pegawai/".concat(e,"/absensi/insert-update"),n,{header:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary)}}).then((function(e){t(!1),a((function(e){return!e})),c((function(e){return Object(o.a)(Object(o.a)({},e),{},{modal:!e.modal})})),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}(a,I,c,t.setTriggerUpdateData,n.setModal):function(e,t,n,a,c,r,i,o,b){t(!0),s.a.post("admin/pegawai/".concat(e,"/absensi"),n,{header:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary)}}).then((function(n){t(!1),a(!1),Object(u.a)(e,i,c,b),Object(l.a)(e,o,r),console.log(n.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}(a,I,c,n.setModal,j,h,p,O,f)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.w,{onSubmit:function(e){return F(e)},children:[Object(b.jsxs)(r.N,{children:[Object(b.jsxs)(r.x,{row:!0,children:[Object(b.jsx)(r.m,{md:"2",children:Object(b.jsx)(r.K,{children:"Tanggal Absen"})}),Object(b.jsx)(r.m,{children:Object(b.jsx)(r.D,{type:"date",name:"tgl_absen",id:"tgl_absen",value:x||"",onChange:function(e){return v(e.target.value)},placeholder:"Masukkan tanggal absen",readOnly:!(!t||!t.tgl)})})]}),Object(b.jsxs)(r.x,{row:!0,children:[Object(b.jsx)(r.m,{md:"2",children:Object(b.jsx)(r.K,{children:"Hari"})}),Object(b.jsx)(r.m,{children:t?Object(b.jsx)(r.D,{name:"hari",id:"hari",value:M||"",onChange:function(e){return T(e.target.value)},readOnly:!(!t||!t.tgl)}):Object(b.jsxs)(r.X,{custom:!0,name:"hari",id:"hari",required:!0,value:M||"",onChange:function(e){return T(e.target.value)},disabled:!0,children:[Object(b.jsx)("option",{value:"",children:"-- Pilih Hari --"}),Object(b.jsx)("option",{value:"senin",children:"Senin"}),Object(b.jsx)("option",{value:"selasa",children:"Selasa"}),Object(b.jsx)("option",{value:"rabu",children:"Rabu"}),Object(b.jsx)("option",{value:"kamis",children:"Kamis"}),Object(b.jsx)("option",{value:"jumat",children:"Jumat"}),Object(b.jsx)("option",{value:"sabtu",children:"Sabtu"}),Object(b.jsx)("option",{value:"minggu",children:"Minggu"})]})})]}),Object(b.jsxs)(r.x,{row:!0,children:[Object(b.jsx)(r.m,{md:"2",children:Object(b.jsx)(r.K,{children:"Absen"})}),Object(b.jsx)(r.m,{children:t?Object(b.jsxs)(r.X,{custom:!0,name:"absen",id:"absen",onChange:function(e){return S(e.target.value)},required:!0,children:[Object(b.jsx)("option",{value:"",selected:"empty"===k,children:"-- Pilih Absen --"}),Object(b.jsx)("option",{value:"5",selected:5===k,children:"Tanpa Keterangan"}),Object(b.jsx)("option",{value:"1",selected:1===k,children:"Hadir"}),Object(b.jsx)("option",{value:"2",selected:2===k,children:"Izin"}),Object(b.jsx)("option",{value:"3",selected:3===k,children:"Sakit"}),Object(b.jsx)("option",{value:"4",selected:4===k,children:"Cuti"})]}):Object(b.jsxs)(r.X,{custom:!0,name:"absen",id:"absen",required:!0,value:k,onChange:function(e){return S(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"-- Pilih Absen --"}),Object(b.jsx)("option",{value:"5",children:"Tanpa Keterangan"}),Object(b.jsx)("option",{value:"1",children:"Hadir"}),Object(b.jsx)("option",{value:"2",children:"Izin"}),Object(b.jsx)("option",{value:"3",children:"Sakit"}),Object(b.jsx)("option",{value:"4",children:"Cuti"})]})})]}),Object(b.jsxs)(r.x,{row:!0,children:[Object(b.jsx)(r.m,{md:"2",children:Object(b.jsx)(r.K,{children:"Keterangan"})}),Object(b.jsx)(r.m,{children:Object(b.jsx)(r.D,{type:"text",name:"keterangan",id:"keterangan",value:_||"",onChange:function(e){return D(e.target.value)},required:!0})})]})]}),Object(b.jsxs)(r.O,{children:[Object(b.jsx)(r.f,{type:"submit",color:"primary",disabled:!!H,children:H?"Sedang menyimpan...":"Simpan"})," ",Object(b.jsx)(r.f,{type:"button",color:"secondary",onClick:function(){D(""),n.setModal(!n.modal),document.getElementById("keterangan").setAttribute("value","")},children:"Batal"})]})]})})}},684:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(40),c=n(626),r=function(e){e({type:a.LOADING}),c.a.get("admin/pegawai/pttb").then((function(t){e({type:a.SUCCESS,payload:t.data.data})})).catch((function(t){e({type:a.ERROR,payload:t.response.data.message})}))}},694:function(e,t,n){"use strict";var a=n(2),c=n(662),r=n(10),i=n(628),o=n(738),s=n(1),l=n(626),u=n(679),b=n(17);t.a=function(e){var t=e.data,n=Object(s.useState)({modal:!1,tgl:null,absen:null,keterangan:null}),d=Object(r.a)(n,2),j=d[0],h=d[1],p=Object(s.useState)([]),O=Object(r.a)(p,2),f=O[0],m=O[1],g=(new Date).getFullYear(),x=(new Date).getMonth(),v=Object(s.useState)(g),w=Object(r.a)(v,2),y=w[0],k=w[1],S=Object(s.useState)(x),C=Object(r.a)(S,2),E=C[0],_=C[1],D=Object(s.useState)([]),R=Object(r.a)(D,2),A=R[0],M=R[1],T=Object(s.useState)([]),P=Object(r.a)(T,2),N=P[0],H=P[1],I=Object(s.useState)(!1),L=Object(r.a)(I,2),F=L[0],U=L[1];console.log(F);var K=0,z=Object(s.useState)(!0),B=Object(r.a)(z,2),W=B[0],X=B[1];Object(s.useEffect)((function(){!0!==W&&!1!==W||function(e,t,n,a){t(!0),l.a.get("admin/pegawai/".concat(e,"/absensi-params?tahun=").concat(a.tahun,"&bulan=").concat(a.bulan)).then((function(e){n(e.data.data),t(!1),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}(t.id_pegawai,U,M,{tahun:y,bulan:E+1})}),[t,W,y,E]),Object(s.useEffect)((function(){A.length>0&&A.forEach((function(e){H((function(t){return[].concat(Object(c.a)(t),[Object(o.a)(new Date(e.tgl_absen),"d")])}))}))}),[A]);for(var q=[],J=2015,Y=g-J,V=0;V<=Y;V++)q.push(J+V);for(var G=[],Q=0;Q<12;Q++)G.push(Object(o.a)(new Date(J,Q,1),"MMMM"));var Z=function(e,t){return new Date(t,e,0).getDate()};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:{padding:"10px 63px"},children:Object(b.jsxs)(i.w,{children:[Object(b.jsx)(i.W,{children:Object(b.jsx)(i.m,{children:Object(b.jsxs)(i.x,{row:!0,children:[Object(b.jsx)(i.m,{md:"2",className:"mb-2",children:Object(b.jsx)(i.X,{custom:!0,name:"year",id:"year",onChange:function(e){return function(e){m([]),H([]),k(parseInt(e.target.value))}(e)},defaultValue:g,children:q.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))})}),Object(b.jsx)(i.m,{md:"2",className:"mb-2",children:Object(b.jsx)(i.X,{custom:!0,name:"month",id:"month",onChange:function(e){return function(e){m([]),H([]),_(parseInt(e.target.value))}(e)},defaultValue:x,children:G.map((function(e,t){return Object(b.jsx)("option",{value:t,children:e},t)}))})}),Object(b.jsx)(i.m,{children:Object(b.jsx)(i.f,{type:"button",color:"info",onClick:function(){!function(e,t){for(var n=[],a=1;a<=Z(e+1,t);a++)n.push(a);m(n)}(E,y)},className:"mr-2",children:"Tampilkan Absen"})})]})})}),Object(b.jsx)(i.W,{children:f.length>0&&f.map((function(e,t){var n="",c="",r="",o="";switch(N.includes(e.toString())?(n=A[K].id_absensi,c=A[K].keterangan,r=A[K].absen,o=A[K].absen,K++):(n="",c="",r="empty",o=""),o){case 5:o="TK";break;case 1:o="Hadir";break;case 2:o="Izin";break;case 3:o="Sakit";break;case 4:o="Cuti";break;default:o=""}return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.m,{lg:"2",md:"3",sm:"3",xs:"6",className:"mb-2",children:Object(b.jsxs)(i.F,{className:"mb-3",children:[Object(b.jsx)(i.H,{children:Object(b.jsx)(i.I,{children:e})}),Object(b.jsx)(i.D,{type:"text",name:e,id:e,readOnly:!0,value:o,onClick:function(){return h(Object(a.a)(Object(a.a)({},j),{},{modal:!j.modal,tgl:e,id_absensi:n,absen:r,keterangan:c}))}})]})},t)})}))})]})}),Object(b.jsxs)(i.M,{show:j.modal,onClose:function(){return h(Object(a.a)(Object(a.a)({},j),{},{modal:!j.modal}))},size:"lg",children:[Object(b.jsx)(i.P,{closeButton:!0,children:Object(b.jsx)(i.Q,{children:"Tambah Absensi Pegawai"})}),Object(b.jsx)(u.a,{data:{filterMonth:E,filterYear:y,id_pegawai:t.id_pegawai,tgl:j.tgl,id_absensi:j.id_absensi,absen:j.absen,keterangan:j.keterangan,setDayAbsen:H,setTriggerUpdateData:X},modal:{setModal:h,modal:j}})]})]})}},984:function(e,t,n){"use strict";n.r(t);var a,c,r=n(10),i=n(638),o=n(1),s=n.n(o),l=n(628),u=n(641),b=n.n(u),d=n(643),j=n(20),h=n(639),p=n(571),O=n(694),f=n(163),m=n(630),g=n(677),x=n(684),v=n(640),w=n(17),y=d.default.input(a||(a=Object(i.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),k=d.default.button(c||(c=Object(i.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),S=function(e){var t=e.filterText,n=e.onFilter,a=e.onClear;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:n}),Object(w.jsx)(k,{type:"button",onClick:a,children:"Reset"})]})};t.default=function(){var e=Object(j.g)(),t=Object(o.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useState)(!1),u=Object(r.a)(i,2),d=u[0],y=u[1],k=Object(o.useContext)(f.a),C=k.pttbState,E=k.pttbDispatch,_=C.data,D=C.loading;Object(o.useEffect)((function(){Object(x.a)(E)}),[E]);var R=_.filter((function(e){return!(!e.nama||!e.nip||!e.nama.toLowerCase().includes(a.toLowerCase())&&!e.nip.toLowerCase().includes(a.toLowerCase()))})),A=[{name:"NIP",selector:"nip",sortable:!0,wrap:!0},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Jabatan",selector:"jabatan",sortable:!0,wrap:!0},{maxWidth:"150px",name:"Action",sortable:!0,cell:function(e){return Object(w.jsx)("div",{"data-tag":"allowRowEvents",children:Object(w.jsx)(l.f,{color:"success",className:"btn btn-sm",onClick:function(){return P(e.id_pegawai)},children:"Absensi"})})}}],M={headCells:{style:{fontSize:"1.15em"}}},T=s.a.useMemo((function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{onFilter:function(e){return c(e.target.value)},onClear:function(){a&&(y(!d),c(""))},filterText:a}),Object(w.jsx)(l.U,{content:"Cetak Rekapan Absensi Pegawai",children:Object(w.jsxs)(l.f,{utton:!0,type:"button",color:"info",className:"ml-2",onClick:function(){return Object(g.a)("pttb")},children:[Object(w.jsx)("span",{className:"my-text-button",children:"Cetak Rekapan Absensi"})," ",Object(w.jsx)(h.a,{content:p.a})]})}),Object(w.jsx)(l.U,{content:"Export Rekap Absensi ke Excel",children:Object(w.jsxs)(l.f,{utton:!0,type:"button",color:"success",className:"ml-2",onClick:function(){return Object(v.a)("absensi-pegawai/pttb")},children:[Object(w.jsx)("span",{className:"my-text-button",children:"Excel"})," ",Object(w.jsx)(h.a,{content:p.a})]})})]})}),[a,d]),P=function(t){e.push("/epekerja/admin/absensi/riwayat-absensi/".concat(t))};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(l.h,{children:[Object(w.jsx)(l.l,{children:Object(w.jsx)("h3",{children:"Absensi Pegawai Tidak Tetap Bulanan (PTTB)"})}),Object(w.jsx)(l.i,{children:_.length>0?Object(w.jsx)(b.a,{columns:A,data:R,noHeader:!0,responsive:!0,customStyles:M,pagination:!0,paginationResetDefaultPage:d,subHeader:!0,subHeaderComponent:T,expandableRows:!0,highlightOnHover:!0,expandOnRowClicked:!0,expandableRowsComponent:O.a}):D?Object(w.jsx)("div",{children:Object(w.jsx)(l.W,{children:Object(w.jsx)(l.m,{className:"text-center",children:Object(w.jsx)("img",{className:"mt-4 ml-3",width:30,src:m.c,alt:"load-animation"})})})}):Object(w.jsx)(b.a,{columns:A,data:R,noHeader:!0,responsive:!0,customStyles:M,pagination:!0,paginationResetDefaultPage:d,subHeader:!0,subHeaderComponent:T,highlightOnHover:!0})})]})})}}}]);
//# sourceMappingURL=17.8f4b8e82.chunk.js.map