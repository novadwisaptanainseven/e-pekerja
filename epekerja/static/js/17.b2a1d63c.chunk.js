(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{640:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return a}))},645:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},672:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(626),c=function(e,t,n){t(!0),a.a.get("admin/pegawai/".concat(e,"/rekap-absensi")).then((function(e){n(e.data.data),t(!1),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}},673:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(626),c=function(e,t,n,c){t(!0),console.log(c),a.a.get("admin/pegawai/".concat(e,"/absensi?first_date=").concat(c.startDate,"&last_date=").concat(c.endDate)).then((function(e){n(e.data.data),t(!1),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(112);var c=n(169);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},681:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(40),c=n(626),r=function(e){e({type:a.LOADING}),c.a.get("admin/pegawai/pns").then((function(t){e({type:a.SUCCESS,payload:t.data.data})})).catch((function(t){e({type:a.ERROR,payload:t.response.data.message})}))}},688:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("".concat(localStorage.baseURL,"print-rekap-absensi/").concat(e,"?tahun=").concat(t),"_blank")}},691:function(e,t,n){"use strict";var a=n(8),c=n(1),r=n(627),i=n(752),s=n(2),o=n(626),l=n(672),u=n(673),b=n(17);t.a=function(e){var t=e.data,n=e.modal,d=e.idPegawai,j=e.setRiwayatAbsen,h=e.setRekapAbsensi,O=e.setLoadingRiwayatAbsen,p=e.setLoadingRekapAbsensi,f=e.formattedDateRiwayatAbsen,g=Object(c.useState)(""),m=Object(a.a)(g,2),x=m[0],v=m[1],y=Object(c.useState)(""),w=Object(a.a)(y,2),k=w[0],S=w[1],C=Object(c.useState)(""),E=Object(a.a)(C,2),A=E[0],D=E[1],R=Object(c.useState)(""),M=Object(a.a)(R,2),_=M[0],N=M[1],P=Object(c.useState)(!1),T=Object(a.a)(P,2),H=T[0],I=T[1],L=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n="";switch(n=t?Object(i.a)(new Date(t.filterYear,t.filterMonth,t.tgl),"EEEEEE"):Object(i.a)(new Date,"EEEEEE"),e&&(n=Object(i.a)(new Date(e),"EEEEEE")),n){case"Su":n="minggu";break;case"Mo":n="senin";break;case"Tu":n="selasa";break;case"We":n="rabu";break;case"Th":n="kamis";break;case"Fr":n="jumat";break;case"Sa":n="sabtu"}return n}),[t]);Object(c.useEffect)((function(){var e=null;t||(e=Object(i.a)(new Date,"yyyy-MM-dd"),v(e),N(L())),t&&t.tgl&&(e=Object(i.a)(new Date(t.filterYear,t.filterMonth,t.tgl),"yyyy-MM-dd"),v(e),S(t.absen),D(t.keterangan),N(L()))}),[t,L]),Object(c.useEffect)((function(){N(L(x))}),[x,L]);var F=function(e){e.preventDefault();var a=t?t.id_pegawai:d,c={id_absensi:t?t.id_absensi:"",tgl_absen:x,hari:_,absen:"empty"===k?"":parseInt(k),keterangan:A};console.log(c),t?function(e,t,n,a,c){t(!0),o.a.post("admin/pegawai/".concat(e,"/absensi/insert-update"),n,{header:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary)}}).then((function(e){t(!1),a((function(e){return!e})),c((function(e){return Object(s.a)(Object(s.a)({},e),{},{modal:!e.modal})})),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}(a,I,c,t.setTriggerUpdateData,n.setModal):function(e,t,n,a,c,r,i,s,b){t(!0),o.a.post("admin/pegawai/".concat(e,"/absensi"),n,{header:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary)}}).then((function(n){t(!1),a(!1),Object(u.a)(e,i,c,b),Object(l.a)(e,s,r),console.log(n.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}(a,I,c,n.setModal,j,h,O,p,f)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.x,{onSubmit:function(e){return F(e)},children:[Object(b.jsxs)(r.O,{children:[Object(b.jsxs)(r.y,{row:!0,children:[Object(b.jsx)(r.n,{md:"2",children:Object(b.jsx)(r.L,{children:"Tanggal Absen"})}),Object(b.jsx)(r.n,{children:Object(b.jsx)(r.E,{type:"date",name:"tgl_absen",id:"tgl_absen",value:x||"",onChange:function(e){return v(e.target.value)},placeholder:"Masukkan tanggal absen",readOnly:!(!t||!t.tgl)})})]}),Object(b.jsxs)(r.y,{row:!0,children:[Object(b.jsx)(r.n,{md:"2",children:Object(b.jsx)(r.L,{children:"Hari"})}),Object(b.jsx)(r.n,{children:t?Object(b.jsx)(r.E,{name:"hari",id:"hari",value:_||"",onChange:function(e){return N(e.target.value)},readOnly:!(!t||!t.tgl)}):Object(b.jsxs)(r.Y,{custom:!0,name:"hari",id:"hari",required:!0,value:_||"",onChange:function(e){return N(e.target.value)},disabled:!0,children:[Object(b.jsx)("option",{value:"",children:"-- Pilih Hari --"}),Object(b.jsx)("option",{value:"senin",children:"Senin"}),Object(b.jsx)("option",{value:"selasa",children:"Selasa"}),Object(b.jsx)("option",{value:"rabu",children:"Rabu"}),Object(b.jsx)("option",{value:"kamis",children:"Kamis"}),Object(b.jsx)("option",{value:"jumat",children:"Jumat"}),Object(b.jsx)("option",{value:"sabtu",children:"Sabtu"}),Object(b.jsx)("option",{value:"minggu",children:"Minggu"})]})})]}),Object(b.jsxs)(r.y,{row:!0,children:[Object(b.jsx)(r.n,{md:"2",children:Object(b.jsx)(r.L,{children:"Absen"})}),Object(b.jsx)(r.n,{children:t?Object(b.jsxs)(r.Y,{custom:!0,name:"absen",id:"absen",onChange:function(e){return S(e.target.value)},required:!0,children:[Object(b.jsx)("option",{value:"",selected:"empty"===k,children:"-- Pilih Absen --"}),Object(b.jsx)("option",{value:"5",selected:5===k,children:"Tanpa Keterangan"}),Object(b.jsx)("option",{value:"1",selected:1===k,children:"Hadir"}),Object(b.jsx)("option",{value:"2",selected:2===k,children:"Izin"}),Object(b.jsx)("option",{value:"3",selected:3===k,children:"Sakit"}),Object(b.jsx)("option",{value:"4",selected:4===k,children:"Cuti"})]}):Object(b.jsxs)(r.Y,{custom:!0,name:"absen",id:"absen",required:!0,value:k,onChange:function(e){return S(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"-- Pilih Absen --"}),Object(b.jsx)("option",{value:"5",children:"Tanpa Keterangan"}),Object(b.jsx)("option",{value:"1",children:"Hadir"}),Object(b.jsx)("option",{value:"2",children:"Izin"}),Object(b.jsx)("option",{value:"3",children:"Sakit"}),Object(b.jsx)("option",{value:"4",children:"Cuti"})]})})]}),Object(b.jsxs)(r.y,{row:!0,children:[Object(b.jsx)(r.n,{md:"2",children:Object(b.jsx)(r.L,{children:"Keterangan"})}),Object(b.jsx)(r.n,{children:Object(b.jsx)(r.E,{type:"text",name:"keterangan",id:"keterangan",value:A||"",onChange:function(e){return D(e.target.value)},required:!0})})]})]}),Object(b.jsxs)(r.P,{children:[Object(b.jsx)(r.f,{type:"submit",color:"primary",disabled:!!H,children:H?"Sedang menyimpan...":"Simpan"})," ",Object(b.jsx)(r.f,{type:"button",color:"secondary",onClick:function(){D(""),n.setModal(!n.modal),document.getElementById("keterangan").setAttribute("value","")},children:"Batal"})]})]})})}},708:function(e,t,n){"use strict";var a=n(2),c=n(674),r=n(8),i=n(627),s=n(752),o=n(1),l=n(626),u=n(691),b=n(17);t.a=function(e){var t=e.data,n=Object(o.useState)({modal:!1,tgl:null,absen:null,keterangan:null}),d=Object(r.a)(n,2),j=d[0],h=d[1],O=Object(o.useState)([]),p=Object(r.a)(O,2),f=p[0],g=p[1],m=(new Date).getFullYear(),x=(new Date).getMonth(),v=Object(o.useState)(m),y=Object(r.a)(v,2),w=y[0],k=y[1],S=Object(o.useState)(x),C=Object(r.a)(S,2),E=C[0],A=C[1],D=Object(o.useState)([]),R=Object(r.a)(D,2),M=R[0],_=R[1],N=Object(o.useState)([]),P=Object(r.a)(N,2),T=P[0],H=P[1],I=Object(o.useState)(!1),L=Object(r.a)(I,2),F=L[0],Y=L[1];console.log(F);var z=0,J=Object(o.useState)(!0),K=Object(r.a)(J,2),q=K[0],U=K[1];Object(o.useEffect)((function(){!0!==q&&!1!==q||function(e,t,n,a){t(!0),l.a.get("admin/pegawai/".concat(e,"/absensi-params?tahun=").concat(a.tahun,"&bulan=").concat(a.bulan)).then((function(e){n(e.data.data),t(!1),console.log(e.data)})).catch((function(e){t(!1),console.log(e.response.data)}))}(t.id_pegawai,Y,_,{tahun:w,bulan:E+1})}),[t,q,w,E]),Object(o.useEffect)((function(){M.length>0&&M.forEach((function(e){H((function(t){return[].concat(Object(c.a)(t),[Object(s.a)(new Date(e.tgl_absen),"d")])}))}))}),[M]);for(var V=[],B=2015,X=m-B,G=0;G<=X;G++)V.push(B+G);for(var W=[],Q=0;Q<12;Q++)W.push(Object(s.a)(new Date(B,Q,1),"MMMM"));var Z=function(e,t){return new Date(t,e,0).getDate()};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:{padding:"10px 63px"},children:Object(b.jsxs)(i.x,{children:[Object(b.jsx)(i.X,{children:Object(b.jsx)(i.n,{children:Object(b.jsxs)(i.y,{row:!0,children:[Object(b.jsx)(i.n,{md:"2",className:"mb-2",children:Object(b.jsx)(i.Y,{custom:!0,name:"year",id:"year",onChange:function(e){return function(e){g([]),H([]),k(parseInt(e.target.value))}(e)},defaultValue:m,children:V.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))})}),Object(b.jsx)(i.n,{md:"2",className:"mb-2",children:Object(b.jsx)(i.Y,{custom:!0,name:"month",id:"month",onChange:function(e){return function(e){g([]),H([]),A(parseInt(e.target.value))}(e)},defaultValue:x,children:W.map((function(e,t){return Object(b.jsx)("option",{value:t,children:e},t)}))})}),Object(b.jsx)(i.n,{children:Object(b.jsx)(i.f,{type:"button",color:"info",onClick:function(){!function(e,t){for(var n=[],a=1;a<=Z(e+1,t);a++)n.push(a);g(n)}(E,w)},className:"mr-2",children:"Tampilkan Absen"})})]})})}),Object(b.jsx)(i.X,{children:f.length>0&&f.map((function(e,t){var n="",c="",r="",s="";switch(T.includes(e.toString())?(n=M[z].id_absensi,c=M[z].keterangan,r=M[z].absen,s=M[z].absen,z++):(n="",c="",r="empty",s=""),s){case 5:s="TK";break;case 1:s="Hadir";break;case 2:s="Izin";break;case 3:s="Sakit";break;case 4:s="Cuti";break;default:s=""}return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.n,{lg:"2",md:"3",sm:"3",xs:"6",className:"mb-2",children:Object(b.jsxs)(i.G,{className:"mb-3",children:[Object(b.jsx)(i.I,{children:Object(b.jsx)(i.J,{children:e})}),Object(b.jsx)(i.E,{type:"text",name:e,id:e,readOnly:!0,value:s,onClick:function(){return h(Object(a.a)(Object(a.a)({},j),{},{modal:!j.modal,tgl:e,id_absensi:n,absen:r,keterangan:c}))}})]})},t)})}))})]})}),Object(b.jsxs)(i.N,{show:j.modal,onClose:function(){return h(Object(a.a)(Object(a.a)({},j),{},{modal:!j.modal}))},size:"lg",children:[Object(b.jsx)(i.Q,{closeButton:!0,children:Object(b.jsx)(i.R,{children:"Tambah Absensi Pegawai"})}),Object(b.jsx)(u.a,{data:{filterMonth:E,filterYear:w,id_pegawai:t.id_pegawai,tgl:j.tgl,id_absensi:j.id_absensi,absen:j.absen,keterangan:j.keterangan,setDayAbsen:H,setTriggerUpdateData:U},modal:{setModal:h,modal:j}})]})]})}},998:function(e,t,n){"use strict";n.r(t);var a,c,r=n(8),i=n(640),s=n(1),o=n.n(s),l=n(627),u=n(641),b=n.n(u),d=n(643),j=n(20),h=n(637),O=n(571),p=n(708),f=n(163),g=n(629),m=n(688),x=n(681),v=n(646),y=n(17),w=d.default.input(a||(a=Object(i.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),k=d.default.button(c||(c=Object(i.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),S=function(e){var t=e.filterText,n=e.onFilter,a=e.onClear;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:n}),Object(y.jsx)(k,{type:"button",onClick:a,children:"Reset"})]})};t.default=function(){var e=Object(j.g)(),t=Object(s.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!1),u=Object(r.a)(i,2),d=u[0],w=u[1],k=Object(s.useContext)(f.a),C=k.pnsState,E=k.pnsDispatch,A=C.data,D=C.loading;Object(s.useEffect)((function(){Object(x.a)(E)}),[E]);var R=A.filter((function(e){return!(!e.nama||!e.nip||!e.nama.toLowerCase().includes(a.toLowerCase())&&!e.nip.toLowerCase().includes(a.toLowerCase()))})),M=[{name:"NIP",selector:"nip",sortable:!0,wrap:!0},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Jabatan",selector:"jabatan",sortable:!0,wrap:!0},{maxWidth:"150px",name:"Action",sortable:!0,cell:function(e){return Object(y.jsx)("div",{"data-tag":"allowRowEvents",children:Object(y.jsx)(l.f,{color:"success",className:"btn btn-sm",onClick:function(){return P(e.id_pegawai)},children:"Absensi"})})}}],_={headCells:{style:{fontSize:"1.15em"}}},N=o.a.useMemo((function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(S,{onFilter:function(e){return c(e.target.value)},onClear:function(){a&&(w(!d),c(""))},filterText:a}),Object(y.jsx)(l.V,{content:"Cetak Rekapan Absensi Pegawai",children:Object(y.jsxs)(l.f,{utton:!0,type:"button",color:"info",className:"ml-2",onClick:function(){return Object(m.a)("pns")},children:[Object(y.jsx)("span",{className:"my-text-button",children:"Cetak Rekapan Absensi"})," ",Object(y.jsx)(h.a,{content:O.a})]})}),Object(y.jsx)(l.V,{content:"Export Rekap Absensi ke Excel",children:Object(y.jsxs)(l.f,{utton:!0,type:"button",color:"success",className:"ml-2",onClick:function(){return Object(v.a)("absensi-pegawai/pns")},children:[Object(y.jsx)("span",{className:"my-text-button",children:"Excel"})," ",Object(y.jsx)(h.a,{content:O.a})]})})]})}),[a,d]),P=function(t){e.push("/epekerja/admin/absensi/riwayat-absensi/".concat(t))};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(l.h,{children:[Object(y.jsx)(l.l,{children:Object(y.jsx)("h3",{children:"Absensi Pegawai Negeri Sipil (PNS)"})}),Object(y.jsx)(l.i,{children:A.length>0?Object(y.jsx)(b.a,{columns:M,data:R,noHeader:!0,responsive:!0,customStyles:_,pagination:!0,paginationResetDefaultPage:d,subHeader:!0,subHeaderComponent:N,expandableRows:!0,highlightOnHover:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(y.jsx)(p.a,{})}):D?Object(y.jsx)("div",{children:Object(y.jsx)(l.X,{children:Object(y.jsx)(l.n,{className:"text-center",children:Object(y.jsx)("img",{className:"mt-4 ml-3",width:30,src:g.d,alt:"load-animation"})})})}):Object(y.jsx)(b.a,{columns:M,data:R,noHeader:!0,responsive:!0,customStyles:_,pagination:!0,paginationResetDefaultPage:d,subHeader:!0,subHeaderComponent:N,highlightOnHover:!0})})]})})}}}]);
//# sourceMappingURL=17.b2a1d63c.chunk.js.map