(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1042:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(1),r=n.n(c),i=n(632),o=n.n(i),s=n(633),l=n.n(s),d=n(163),b=n(630),j=n(628),u=n(640),p=n.n(u),m=n(20),h=n(639),x=n(654),f=n(587),O=n(571),g=n(689),w=n(626),k=n(740),C=n(658),y=n(643),v=n(646),N=n(17),S=l()(o.a);t.default=function(){var e=Object(m.g)(),t=Object(c.useState)(""),n=Object(a.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)(!1),l=Object(a.a)(s,2),u=l[0],P=l[1],T=Object(c.useContext)(d.a),_=T.pttbState,R=T.pttbDispatch,A=_.data,D=_.loading;Object(c.useEffect)((function(){Object(g.a)(R)}),[R]);var F=A.filter((function(e){return!(!e.nama||!e.jabatan||!e.nama.toLowerCase().includes(i.toLowerCase())&&!e.jabatan.toLowerCase().includes(i.toLowerCase()))})),L=[{name:"No",selector:"no",sortable:!0,width:"50px"},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Penetap SK",selector:"penetap_sk",sortable:!0,wrap:!0},{name:"Tugas Pokok",selector:"jabatan",sortable:!0,wrap:!0},{name:"Action",sortable:!0,cell:function(e){return Object(N.jsx)("div",{"data-tag":"allowRowEvents",children:Object(N.jsxs)(j.g,{children:[Object(N.jsx)(j.f,{color:"info",className:"btn btn-sm",onClick:function(){return W(e.id_pegawai)},children:"Kelengkapan"}),Object(N.jsx)(j.f,{color:"success",className:"btn btn-sm",onClick:function(){return K(e.id_pegawai)},children:Object(N.jsx)(h.a,{content:x.a,color:"white"})}),Object(N.jsx)(j.f,{color:"danger",className:"btn btn-sm",onClick:function(){return E(e.id_pegawai)},children:Object(N.jsx)(h.a,{content:f.a,color:"white"})})]})})}}],M={headCells:{style:{fontSize:"1.15em"}}},B=r.a.useMemo((function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(v.a,{onFilter:function(e){return o(e.target.value)},onClear:function(){i&&(P(!u),o(""))},filterText:i}),Object(N.jsxs)(j.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return Object(C.a)("pttb")},children:["PDF ",Object(N.jsx)(h.a,{content:O.a})]}),Object(N.jsxs)(j.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(y.a)("pttb")},children:["Excel ",Object(N.jsx)(h.a,{content:O.a})]})]})}),[i,u]),K=function(t){e.push("/epekerja/admin/pegawai/pttb-edit/".concat(t))},W=function(t){e.push("/epekerja/admin/pegawai-detail/".concat(t))},E=function(e){S.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(t){t.isConfirmed&&(!function(e,t){w.a.delete("admin/pegawai/pttb/".concat(e)).then((function(e){Object(g.a)(t)})).catch((function(e){}))}(e,R),S.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},H=function(e){var t=e.data;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(N.jsxs)(j.W,{className:"mb-1",children:[Object(N.jsx)(j.m,{md:"2",children:Object(N.jsx)("strong",{children:"NIP"})}),Object(N.jsx)(j.m,{children:t.nip})]}),Object(N.jsxs)(j.W,{className:"mb-1",children:[Object(N.jsx)(j.m,{md:"2",children:Object(N.jsx)("strong",{children:"Tgl. Penetapan SK"})}),Object(N.jsx)(j.m,{children:Object(k.a)(new Date(t.tgl_penetapan_sk),"dd/MM/y")})]}),Object(N.jsxs)(j.W,{className:"mb-1",children:[Object(N.jsx)(j.m,{md:"2",children:Object(N.jsx)("strong",{children:"No. SK"})}),Object(N.jsx)(j.m,{children:t.no_sk})]}),Object(N.jsxs)(j.W,{className:"mb-1",children:[Object(N.jsx)(j.m,{md:"2",children:Object(N.jsx)("strong",{children:"Tgl. Mulai Tugas"})}),Object(N.jsx)(j.m,{children:t.tgl_mulai_tugas})]}),Object(N.jsxs)(j.W,{className:"mb-1",children:[Object(N.jsx)(j.m,{md:"2",children:Object(N.jsx)("strong",{children:"Kontrak Ke"})}),Object(N.jsx)(j.m,{children:t.kontrak_ke})]}),Object(N.jsxs)(j.W,{className:"mb-1",children:[Object(N.jsx)(j.m,{md:"2",children:Object(N.jsx)("strong",{children:"Masa Kerja"})}),Object(N.jsx)(j.m,{children:t.masa_kerja})]})]})})};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(j.h,{children:[Object(N.jsx)(j.l,{children:Object(N.jsx)("h3",{children:"Data Pegawai Tidak Tetap Bulanan (PTTB)"})}),Object(N.jsxs)(j.i,{children:[Object(N.jsx)(j.f,{color:"primary",className:"btn btn-md",onClick:function(){e.push("/epekerja/admin/pegawai/pttb-tambah")},children:"Tambah Data"}),A.length>0?Object(N.jsx)(p.a,{columns:L,data:F,noHeader:!0,responsive:!0,customStyles:M,pagination:!0,paginationResetDefaultPage:u,subHeader:!0,subHeaderComponent:B,expandableRows:!0,expandOnRowClicked:!0,highlightOnHover:!0,expandableRowsComponent:Object(N.jsx)(H,{})}):D?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{children:Object(N.jsx)(j.W,{children:Object(N.jsx)(j.m,{className:"text-center",children:Object(N.jsx)("img",{className:"mt-4 ml-3",width:30,src:b.c,alt:"load-animation"})})})})}):Object(N.jsx)(p.a,{columns:L,data:F,noHeader:!0,responsive:!0,customStyles:M})]})]})})}},638:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return a}))},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},646:function(e,t,n){"use strict";n(1);var a,c,r=n(638),i=n(642),o=i.default.button(a||(a=Object(r.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),s=i.default.input(c||(c=Object(r.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),l=n(17);t.a=function(e){var t=e.filterText,n=e.onFilter,a=e.onClear;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:n}),Object(l.jsx)(o,{type:"button",onClick:a,children:"Reset"})]})}},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},658:function(e,t,n){"use strict";t.a=function(e){window.open("".concat(localStorage.baseURL,"print-daftar-pegawai/").concat(e),"_blank")}},689:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(40),c=n(626),r=function(e){e({type:a.LOADING}),c.a.get("admin/pegawai/pttb").then((function(t){e({type:a.SUCCESS,payload:t.data.data})})).catch((function(t){e({type:a.ERROR,payload:t.response.data.message})}))}}}]);
//# sourceMappingURL=28.b771c7b8.chunk.js.map