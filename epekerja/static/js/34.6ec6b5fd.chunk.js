(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1044:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(1),r=n.n(c),o=n(163),i=n(630),s=n(628),l=n(641),d=n.n(l),u=n(20),b=n(639),j=n(571),p=n(40),h=n(626),f=n(656),x=n(640),m=n(645),g=n(17);t.default=function(){var e=Object(u.g)(),t=Object(c.useState)(""),n=Object(a.a)(t,2),l=n[0],O=n[1],w=Object(c.useState)(!1),v=Object(a.a)(w,2),C=v[0],y=v[1],S=Object(c.useContext)(o.a),k=S.pegawaiState,N=S.pegawaiDispatch,R=k.data,_=k.loading;Object(c.useEffect)((function(){var e;(e=N)({type:p.LOADING}),h.a.get("admin/pegawai/semua-pegawai").then((function(t){e({type:p.SUCCESS,payload:t.data.data}),console.log(t.data)})).catch((function(t){e({type:p.ERROR,payload:t.response.data.message}),console.log(t.response.data)}))}),[N]);var L=R.filter((function(e){return!!(e.nama&&e.bidang&&e.jabatan&&(e.nama.toLowerCase().includes(l.toLowerCase())||e.bidang.toLowerCase().includes(l.toLowerCase())||e.jabatan.toLowerCase().includes(l.toLowerCase())))})),P=[{name:"No",selector:"no",sortable:!0,width:"50px"},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Jabatan",selector:"jabatan",sortable:!0,wrap:!0},{name:"Bidang",selector:"bidang",sortable:!0,wrap:!0},{name:"Action",sortable:!0,cell:function(e){return Object(g.jsx)("div",{"data-tag":"allowRowEvents",children:Object(g.jsx)(s.g,{children:Object(g.jsx)(s.f,{color:"info",className:"btn btn-sm",onClick:function(){return H(e.id_pegawai)},children:"Kelengkapan"})})})}}],F={headCells:{style:{fontSize:"1.15em"}}},D=r.a.useMemo((function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.a,{onFilter:function(e){return O(e.target.value)},onClear:function(){l&&(y(!C),O(""))},filterText:l}),Object(g.jsxs)(s.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return Object(f.a)("semua-pegawai")},children:["PDF ",Object(g.jsx)(b.a,{content:j.a})]}),Object(g.jsxs)(s.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(x.a)("semua-pegawai")},children:["Excel ",Object(g.jsx)(b.a,{content:j.a})]})]})}),[l,C]),H=function(t){e.push("/epekerja/admin/pegawai-detail/".concat(t))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(s.h,{children:[Object(g.jsx)(s.l,{children:Object(g.jsx)("h3",{children:"Semua Data Pegawai"})}),Object(g.jsx)(s.i,{children:R.length>0?Object(g.jsx)(d.a,{columns:P,data:L,noHeader:!0,responsive:!0,customStyles:F,pagination:!0,paginationResetDefaultPage:C,subHeader:!0,subHeaderComponent:D,expandableRows:!0,expandOnRowClicked:!0,highlightOnHover:!0,expandableRowsComponent:function(e){var t=e.data;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(g.jsxs)(s.W,{className:"mb-1",children:[Object(g.jsx)(s.m,{md:"2",children:Object(g.jsx)("strong",{children:t.nip?"NIP":"NIK"})}),Object(g.jsx)(s.m,{children:t.nip?t.nip:t.nik})]}),Object(g.jsxs)(s.W,{className:"mb-1",children:[Object(g.jsx)(s.m,{md:"2",children:Object(g.jsx)("strong",{children:"No. HP"})}),Object(g.jsx)(s.m,{children:t.no_hp})]}),Object(g.jsxs)(s.W,{className:"mb-1",children:[Object(g.jsx)(s.m,{md:"2",children:Object(g.jsx)("strong",{children:"Status Pegawai"})}),Object(g.jsx)(s.m,{children:t.status_pegawai})]})]})})}}):_?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{children:Object(g.jsx)(s.W,{children:Object(g.jsx)(s.m,{className:"text-center",children:Object(g.jsx)("img",{className:"mt-4 ml-3",width:30,src:i.c,alt:"load-animation"})})})})}):Object(g.jsx)(d.a,{columns:P,data:L,noHeader:!0,responsive:!0,customStyles:F})})]})})}},638:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return a}))},640:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(n){if("filter_tanggal"===n){var a="first_date=".concat(t.startDate,"&last_date=").concat(t.endDate);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(a),"_self")}else if("filter_tahun"===n){var c="tahun=".concat(t);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(c),"_self")}else if("filter_bulan_tahun"===n){var r="bulan=".concat(t.bulan,"&tahun=").concat(t.tahun);window.open("".concat(localStorage.baseURL).concat(e,"/export?").concat(r),"_self")}}else window.open("".concat(localStorage.baseURL).concat(e,"/export"),"_self")}},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},645:function(e,t,n){"use strict";n(1);var a,c,r=n(638),o=n(643),i=o.default.button(a||(a=Object(r.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),s=o.default.input(c||(c=Object(r.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),l=n(17);t.a=function(e){var t=e.filterText,n=e.onFilter,a=e.onClear;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:n}),Object(l.jsx)(i,{type:"button",onClick:a,children:"Reset"})]})}},656:function(e,t,n){"use strict";t.a=function(e){window.open("".concat(localStorage.baseURL,"print-daftar-pegawai/").concat(e),"_blank")}}}]);
//# sourceMappingURL=34.6ec6b5fd.chunk.js.map