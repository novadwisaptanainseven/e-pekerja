(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[24],{1046:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(7),r=t(1),o=t.n(r),i=t(631),s=t.n(i),l=t(632),j=t.n(l),d=t(163),b=t(629),u=t(627),p=t(641),O=t.n(p),h=t(20),m=t(637),f=t(655),x=t(587),g=t(571),k=t(681),v=t(626),w=t(648),C=t(166),y=t(642),N=t(667),P=t(685),S=t(17),L=function(e){var n=e.modal,t=e.setModal,o=Object(r.useState)([]),i=Object(c.a)(o,2),s=i[0],l=i[1],j=Object(r.useState)({kolom:"",order:"asc"}),d=Object(c.a)(j,2),b=d[0],p=d[1],O=Object(r.useState)(""),h=Object(c.a)(O,2),m=h[0],f=h[1];Object(r.useEffect)((function(){n.modal&&Object(P.a)(l)}),[n]);var x=Object(r.memo)((function(e){var n=e.filter;return"jenjang"!==n.kolom&&f(""),Object(S.jsx)(S.Fragment,{children:"jenjang"===n.kolom&&Object(S.jsxs)(u.y,{children:[Object(S.jsx)(u.L,{children:"Jenjang Pendidikan"}),Object(S.jsxs)(u.Y,{required:!0,value:m,onChange:function(e){return f(e.target.value)},className:m?null:"is-invalid",children:[Object(S.jsx)("option",{value:"",children:"-- Pilih Jenjang --"}),s.map((function(e,n){return Object(S.jsx)("option",{value:e.jenjang,children:e.jenjang},n)}))]}),!m&&Object(S.jsx)("div",{className:"invalid-feedback",children:"Jenjang harus diisi!"})]})})}));return Object(S.jsxs)(u.N,{show:n.modal,onClose:function(){return t(Object(a.a)(Object(a.a)({},n),{},{type:"",modal:!1}))},children:[Object(S.jsx)(u.Q,{closeButton:!0,children:Object(S.jsx)(u.R,{children:"Filter Print"})}),Object(S.jsxs)(u.x,{children:[Object(S.jsxs)(u.O,{children:[Object(S.jsxs)(u.y,{children:[Object(S.jsx)(u.L,{children:"Urutan"}),Object(S.jsxs)(u.Y,{name:"order",value:b.order,onChange:function(e){return p(Object(a.a)(Object(a.a)({},b),{},Object(C.a)({},e.target.name,e.target.value)))},children:[Object(S.jsx)("option",{value:"asc",children:"A - Z (Ascending)"}),Object(S.jsx)("option",{value:"desc",children:"Z - A (Descending)"})]})]}),Object(S.jsxs)(u.y,{children:[Object(S.jsx)(u.L,{children:"Kolom"}),Object(S.jsxs)(u.Y,{name:"kolom",value:b.kolom,onChange:function(e){return function(e){p(Object(a.a)(Object(a.a)({},b),{},Object(C.a)({},e.target.name,e.target.value)))}(e)},children:[Object(S.jsx)("option",{value:"",children:"Semua"}),Object(S.jsx)("option",{value:"nama",children:"Nama"}),Object(S.jsx)("option",{value:"bidang",children:"Bidang"}),Object(S.jsx)("option",{value:"jabatan",children:"Jabatan"}),Object(S.jsx)("option",{value:"pangkat",children:"Golongan"}),Object(S.jsx)("option",{value:"jenjang",children:"Jenjang Pendidikan"})]})]}),Object(S.jsx)(x,{filter:b})]}),Object(S.jsxs)(u.P,{children:[Object(S.jsx)(u.f,{type:"submit",color:"primary",onClick:function(e){return function(e){e.preventDefault();var c="",r={};m?(r={jenjang:m,order:b.order},b.kolom={jenjang:m},c="pns?jenjang=".concat(b.kolom.jenjang,"&order=").concat(b.order)):(r={kolom:b.kolom,order:b.order},c="pns?kolom=".concat(b.kolom,"&order=").concat(b.order)),"print"===n.type?Object(N.a)(c):Object(y.a)("pns",r,"filter_pegawai"),t(Object(a.a)(Object(a.a)({},n),{},{type:"",modal:!1}))}(e)},disabled:"jenjang"===b.kolom&&!m,children:"Print"}),Object(S.jsx)(u.f,{color:"secondary",onClick:function(){return t(Object(a.a)(Object(a.a)({},n),{},{type:"",modal:!1}))},children:"Close"})]})]})]})},A=j()(s.a);n.default=function(){var e=Object(h.g)(),n=Object(r.useState)(""),t=Object(c.a)(n,2),i=t[0],s=t[1],l=Object(r.useState)(!1),j=Object(c.a)(l,2),p=j[0],C=j[1],y=Object(r.useContext)(d.a),N=y.pnsState,P=y.pnsDispatch,R=N.data,F=N.loading,D=Object(r.useState)({type:"",modal:!1}),J=Object(c.a)(D,2),B=J[0],E=J[1];Object(r.useEffect)((function(){Object(k.a)(P)}),[P]);var _=R.filter((function(e){return!!(e.nama.toLowerCase().includes(i.toLowerCase())||e.nip.toLowerCase().includes(i.toLowerCase())||e.jabatan.toLowerCase().includes(i.toLowerCase())||e.bidang.toLowerCase().includes(i.toLowerCase()))})),H=[{name:"No",selector:"no",sortable:!0,width:"50px"},{name:"NIP",selector:"nip",sortable:!0,wrap:!0},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Bidang",selector:"bidang",sortable:!0,wrap:!0},{name:"Action",sortable:!0,cell:function(e){return Object(S.jsx)("div",{"data-tag":"allowRowEvents",children:Object(S.jsxs)(u.g,{children:[Object(S.jsx)(u.f,{color:"info",className:"btn btn-sm",onClick:function(){return Z(e.id_pegawai)},children:"Kelengkapan"}),Object(S.jsx)(u.f,{color:"success",className:"btn btn-sm",onClick:function(){return Y(e.id_pegawai)},children:Object(S.jsx)(m.a,{content:f.a,color:"white"})}),Object(S.jsx)(u.f,{color:"danger",className:"btn btn-sm",onClick:function(){return X(e.id_pegawai)},children:Object(S.jsx)(m.a,{content:x.a,color:"white"})})]})})}}],M={headCells:{style:{fontSize:"1.15em"}}},T=o.a.useMemo((function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(w.a,{onFilter:function(e){return s(e.target.value)},onClear:function(){i&&(C(!p),s(""))},filterText:i}),Object(S.jsxs)(u.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return E(Object(a.a)(Object(a.a)({},B),{},{type:"print",modal:!0}))},children:["PDF ",Object(S.jsx)(m.a,{content:g.a})]}),Object(S.jsxs)(u.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return E(Object(a.a)(Object(a.a)({},B),{},{type:"excel",modal:!0}))},children:["Excel ",Object(S.jsx)(m.a,{content:g.a})]})]})}),[i,p,B]),Y=function(n){e.push("/epekerja/admin/pegawai-edit/".concat(n))},Z=function(n){e.push("/epekerja/admin/pegawai-detail/".concat(n))},X=function(e){A.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(n){n.isConfirmed&&(!function(e,n){v.a.get("admin/pegawai/pns/".concat(e,"/delete")).then((function(e){Object(k.a)(n)})).catch((function(e){}))}(e,P),A.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},z=function(e){var n=e.data;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(S.jsxs)(u.X,{className:"mb-1",children:[Object(S.jsx)(u.n,{md:"2",children:Object(S.jsx)("strong",{children:"Jabatan"})}),Object(S.jsx)(u.n,{children:n.jabatan})]}),Object(S.jsxs)(u.X,{className:"mb-1",children:[Object(S.jsx)(u.n,{md:"2",children:Object(S.jsx)("strong",{children:"Pangkat / Gol"})}),Object(S.jsxs)(u.n,{children:[n.ket_golongan," (",n.golongan,")"]})]}),Object(S.jsxs)(u.X,{className:"mb-1",children:[Object(S.jsx)(u.n,{md:"2",children:Object(S.jsx)("strong",{children:"No. HP"})}),Object(S.jsx)(u.n,{children:n.no_hp})]})]})})};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(u.h,{children:[Object(S.jsx)(u.l,{children:Object(S.jsx)("h3",{children:"Data Pegawai Negeri Sipil (PNS)"})}),Object(S.jsxs)(u.i,{children:[Object(S.jsx)(u.f,{color:"primary",className:"btn btn-md",onClick:function(){e.push("/epekerja/admin/pegawai-tambah")},children:"Tambah Data"}),R.length>0?Object(S.jsx)(O.a,{columns:H,data:_,noHeader:!0,responsive:!0,customStyles:M,pagination:!0,paginationResetDefaultPage:p,subHeader:!0,subHeaderComponent:T,expandableRows:!0,expandOnRowClicked:!0,highlightOnHover:!0,expandableRowsComponent:Object(S.jsx)(z,{})}):F?Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{children:Object(S.jsx)(u.X,{children:Object(S.jsx)(u.n,{className:"text-center",children:Object(S.jsx)("img",{className:"mt-4 ml-3",width:30,src:b.d,alt:"load-animation"})})})})}):Object(S.jsx)(O.a,{columns:H,data:_,noHeader:!0,responsive:!0,customStyles:M})]})]}),Object(S.jsx)(L,{modal:B,setModal:E})]})}},639:function(e,n,t){"use strict";function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",(function(){return a}))},645:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},648:function(e,n,t){"use strict";t(1);var a,c,r=t(639),o=t(643),i=o.default.button(a||(a=Object(r.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),s=o.default.input(c||(c=Object(r.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),l=t(17);n.a=function(e){var n=e.filterText,t=e.onFilter,a=e.onClear,c=e.titleCari,r=void 0===c?"Pencarian...":c;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{id:"search",type:"text",placeholder:r,"aria-label":"Search Input",value:n,onChange:t}),Object(l.jsx)(i,{type:"button",onClick:a,children:"Reset"})]})}},655:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},667:function(e,n,t){"use strict";n.a=function(e){window.open("".concat(localStorage.baseURL,"print-daftar-pegawai/").concat(e),"_blank")}},681:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(40),c=t(626),r=function(e){e({type:a.LOADING}),c.a.get("admin/pegawai/pns").then((function(n){e({type:a.SUCCESS,payload:n.data.data})})).catch((function(n){e({type:a.ERROR,payload:n.response.data.message})}))}},685:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(626),c=function(e){a.a.get("admin/pegawai/pendidikan/jenjang").then((function(n){e(n.data.data),console.log(n.data)})).catch((function(e){console.log(e.response.data)}))}}}]);
//# sourceMappingURL=24.5e72d9cf.chunk.js.map