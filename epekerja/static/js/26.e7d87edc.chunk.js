(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{1037:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(1),r=n.n(c),o=n(632),i=n.n(o),s=n(633),l=n.n(s),d=n(163),b=n(630),u=n(628),j=n(641),p=n.n(j),h=n(20),m=n(639),f=n(653),x=n(587),O=n(571),g=n(684),w=n(626),k=n(738),C=n(655),v=n(640),y=n(645),_=n(17),N=l()(i.a);t.default=function(){var e=Object(h.g)(),t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)(!1),l=Object(a.a)(s,2),j=l[0],S=l[1],R=Object(c.useContext)(d.a),P=R.pttbState,T=R.pttbDispatch,L=P.data,D=P.loading;Object(c.useEffect)((function(){Object(g.a)(T)}),[T]);var M=L.filter((function(e){return!(!e.nama||!e.jabatan||!e.nama.toLowerCase().includes(o.toLowerCase())&&!e.jabatan.toLowerCase().includes(o.toLowerCase()))})),A=[{name:"No",selector:"no",sortable:!0,width:"50px"},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Penetap SK",selector:"penetap_sk",sortable:!0,wrap:!0},{name:"Tugas Pokok",selector:"jabatan",sortable:!0,wrap:!0},{name:"Action",sortable:!0,cell:function(e){return Object(_.jsx)("div",{"data-tag":"allowRowEvents",children:Object(_.jsxs)(u.g,{children:[Object(_.jsx)(u.f,{color:"info",className:"btn btn-sm",onClick:function(){return W(e.id_pegawai)},children:"Kelengkapan"}),Object(_.jsx)(u.f,{color:"success",className:"btn btn-sm",onClick:function(){return K(e.id_pegawai)},children:Object(_.jsx)(m.a,{content:f.a,color:"white"})}),Object(_.jsx)(u.f,{color:"danger",className:"btn btn-sm",onClick:function(){return U(e.id_pegawai)},children:Object(_.jsx)(m.a,{content:x.a,color:"white"})})]})})}}],F={headCells:{style:{fontSize:"1.15em"}}},B=r.a.useMemo((function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(y.a,{onFilter:function(e){return i(e.target.value)},onClear:function(){o&&(S(!j),i(""))},filterText:o}),Object(_.jsxs)(u.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return Object(C.a)("pttb")},children:["PDF ",Object(_.jsx)(m.a,{content:O.a})]}),Object(_.jsxs)(u.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(v.a)("pttb")},children:["Excel ",Object(_.jsx)(m.a,{content:O.a})]})]})}),[o,j]),K=function(t){e.push("/epekerja/admin/pegawai/pttb-edit/".concat(t))},W=function(t){e.push("/epekerja/admin/pegawai-detail/".concat(t))},U=function(e){N.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(t){t.isConfirmed&&(!function(e,t){w.a.delete("admin/pegawai/pttb/".concat(e)).then((function(e){Object(g.a)(t)})).catch((function(e){}))}(e,T),N.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},E=function(e){var t=e.data;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(_.jsxs)(u.W,{className:"mb-1",children:[Object(_.jsx)(u.m,{md:"2",children:Object(_.jsx)("strong",{children:"NIP"})}),Object(_.jsx)(u.m,{children:t.nip})]}),Object(_.jsxs)(u.W,{className:"mb-1",children:[Object(_.jsx)(u.m,{md:"2",children:Object(_.jsx)("strong",{children:"Tgl. Penetapan SK"})}),Object(_.jsx)(u.m,{children:Object(k.a)(new Date(t.tgl_penetapan_sk),"dd/MM/y")})]}),Object(_.jsxs)(u.W,{className:"mb-1",children:[Object(_.jsx)(u.m,{md:"2",children:Object(_.jsx)("strong",{children:"No. SK"})}),Object(_.jsx)(u.m,{children:t.no_sk})]}),Object(_.jsxs)(u.W,{className:"mb-1",children:[Object(_.jsx)(u.m,{md:"2",children:Object(_.jsx)("strong",{children:"Tgl. Mulai Tugas"})}),Object(_.jsx)(u.m,{children:Object(k.a)(new Date(t.tgl_mulai_tugas),"dd/MM/y")})]}),Object(_.jsxs)(u.W,{className:"mb-1",children:[Object(_.jsx)(u.m,{md:"2",children:Object(_.jsx)("strong",{children:"Kontrak Ke"})}),Object(_.jsx)(u.m,{children:t.kontrak_ke})]}),Object(_.jsxs)(u.W,{className:"mb-1",children:[Object(_.jsx)(u.m,{md:"2",children:Object(_.jsx)("strong",{children:"Masa Kerja"})}),Object(_.jsx)(u.m,{children:t.masa_kerja})]})]})})};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(u.h,{children:[Object(_.jsx)(u.l,{children:Object(_.jsx)("h3",{children:"Data Pegawai Tidak Tetap Bulanan (PTTB)"})}),Object(_.jsxs)(u.i,{children:[Object(_.jsx)(u.f,{color:"primary",className:"btn btn-md",onClick:function(){e.push("/epekerja/admin/pegawai/pttb-tambah")},children:"Tambah Data"}),L.length>0?Object(_.jsx)(p.a,{columns:A,data:M,noHeader:!0,responsive:!0,customStyles:F,pagination:!0,paginationResetDefaultPage:j,subHeader:!0,subHeaderComponent:B,expandableRows:!0,expandOnRowClicked:!0,highlightOnHover:!0,expandableRowsComponent:Object(_.jsx)(E,{})}):D?Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{children:Object(_.jsx)(u.W,{children:Object(_.jsx)(u.m,{className:"text-center",children:Object(_.jsx)("img",{className:"mt-4 ml-3",width:30,src:b.c,alt:"load-animation"})})})})}):Object(_.jsx)(p.a,{columns:A,data:M,noHeader:!0,responsive:!0,customStyles:F})]})]})})}},638:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return a}))},640:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(n){if("filter_tanggal"===n){var a="first_date=".concat(t.startDate,"&last_date=").concat(t.endDate);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(a),"_self")}else if("filter_tahun"===n){var c="tahun=".concat(t);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(c),"_self")}else if("filter_bulan_tahun"===n){var r="bulan=".concat(t.bulan,"&tahun=").concat(t.tahun);window.open("".concat(localStorage.baseURL).concat(e,"/export?").concat(r),"_self")}}else window.open("".concat(localStorage.baseURL).concat(e,"/export"),"_self")}},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},645:function(e,t,n){"use strict";n(1);var a,c,r=n(638),o=n(643),i=o.default.button(a||(a=Object(r.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),s=o.default.input(c||(c=Object(r.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),l=n(17);t.a=function(e){var t=e.filterText,n=e.onFilter,a=e.onClear;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:n}),Object(l.jsx)(i,{type:"button",onClick:a,children:"Reset"})]})}},653:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},655:function(e,t,n){"use strict";t.a=function(e){window.open("".concat(localStorage.baseURL,"print-daftar-pegawai/").concat(e),"_blank")}},684:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(40),c=n(626),r=function(e){e({type:a.LOADING}),c.a.get("admin/pegawai/pttb").then((function(t){e({type:a.SUCCESS,payload:t.data.data})})).catch((function(t){e({type:a.ERROR,payload:t.response.data.message})}))}}}]);
//# sourceMappingURL=26.e7d87edc.chunk.js.map