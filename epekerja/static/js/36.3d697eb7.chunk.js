(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{638:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return a}))},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},646:function(e,t,n){"use strict";n(1);var a,r,c=n(638),o=n(642),s=o.default.button(a||(a=Object(c.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),i=o.default.input(r||(r=Object(c.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),l=n(17);t.a=function(e){var t=e.filterText,n=e.onFilter,a=e.onClear;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:n}),Object(l.jsx)(s,{type:"button",onClick:a,children:"Reset"})]})}},658:function(e,t,n){"use strict";t.a=function(e){window.open("".concat(localStorage.baseURL,"print-daftar-pegawai/").concat(e),"_blank")}},688:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(40),r=n(626),c=function(e){e({type:a.LOADING}),r.a.get("admin/pegawai/ptth").then((function(t){e({type:a.SUCCESS,payload:t.data.data})})).catch((function(t){e({type:a.ERROR,payload:t.response.data.message})}))}},978:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(1),c=n.n(r),o=n(163),s=n(630),i=n(628),l=n(640),d=n.n(l),b=n(20),j=n(639),u=n(571),p=n(688),h=n(740),m=n(658),x=n(643),O=n(646),f=n(17);t.default=function(){var e=Object(b.g)(),t=Object(r.useState)(""),n=Object(a.a)(t,2),l=n[0],g=n[1],w=Object(r.useState)(!1),k=Object(a.a)(w,2),y=k[0],v=k[1],C=Object(r.useContext)(o.a),S=C.ptthState,N=C.ptthDispatch,P=S.data,R=S.loading;Object(r.useEffect)((function(){Object(p.a)(N)}),[N]);var F=P.filter((function(e){return!(!e.nama||!e.jabatan||!e.nama.toLowerCase().includes(l.toLowerCase())&&!e.jabatan.toLowerCase().includes(l.toLowerCase()))})),T=[{name:"No",selector:"no",sortable:!0,width:"50px"},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Penetap SK",selector:"penetap_sk",sortable:!0,wrap:!0},{name:"Tugas Pokok",selector:"jabatan",sortable:!0,wrap:!0},{name:"Action",sortable:!0,cell:function(e){return Object(f.jsx)("div",{"data-tag":"allowRowEvents",children:Object(f.jsx)(i.g,{children:Object(f.jsx)(i.f,{color:"info",className:"btn btn-sm",onClick:function(){return K(e.id_pegawai)},children:"Pembaruan SK"})})})}}],_={headCells:{style:{fontSize:"1.15em"}}},H=c.a.useMemo((function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O.a,{onFilter:function(e){return g(e.target.value)},onClear:function(){l&&(v(!y),g(""))},filterText:l}),Object(f.jsxs)(i.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return Object(m.a)("ptth")},children:["PDF ",Object(f.jsx)(j.a,{content:u.a})]}),Object(f.jsxs)(i.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(x.a)("ptth")},children:["Excel ",Object(f.jsx)(j.a,{content:u.a})]})]})}),[l,y]),K=function(t){e.push("/epekerja/admin/pembaruan-sk/ptth/".concat(t))},L=function(e){var t=e.data;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(f.jsxs)(i.W,{className:"mb-1",children:[Object(f.jsx)(i.m,{md:"2",children:Object(f.jsx)("strong",{children:"NIK"})}),Object(f.jsx)(i.m,{children:t.nik})]}),Object(f.jsxs)(i.W,{className:"mb-1",children:[Object(f.jsx)(i.m,{md:"2",children:Object(f.jsx)("strong",{children:"Tgl. Penetapan SK"})}),Object(f.jsx)(i.m,{children:Object(h.a)(new Date(t.tgl_penetapan_sk),"dd/MM/y")})]}),Object(f.jsxs)(i.W,{className:"mb-1",children:[Object(f.jsx)(i.m,{md:"2",children:Object(f.jsx)("strong",{children:"No. SK"})}),Object(f.jsx)(i.m,{children:t.no_sk})]}),Object(f.jsxs)(i.W,{className:"mb-1",children:[Object(f.jsx)(i.m,{md:"2",children:Object(f.jsx)("strong",{children:"Tgl. Mulai Tugas"})}),Object(f.jsx)(i.m,{children:t.tgl_mulai_tugas})]})]})})};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(i.h,{children:[Object(f.jsx)(i.l,{children:Object(f.jsx)("h3",{children:"Pembaruan SK (PTTH)"})}),Object(f.jsx)(i.i,{children:P.length>0?Object(f.jsx)(d.a,{columns:T,data:F,noHeader:!0,responsive:!0,customStyles:_,pagination:!0,paginationResetDefaultPage:y,subHeader:!0,subHeaderComponent:H,expandableRows:!0,highlightOnHover:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(f.jsx)(L,{})}):R?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsx)(i.W,{children:Object(f.jsx)(i.m,{className:"text-center",children:Object(f.jsx)("img",{className:"mt-4 ml-3",width:30,src:s.c,alt:"load-animation"})})})})}):Object(f.jsx)(d.a,{columns:T,data:F,noHeader:!0,responsive:!0,customStyles:_})})]})})}}}]);
//# sourceMappingURL=36.3d697eb7.chunk.js.map