(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[33],{1003:function(e,t,n){"use strict";n.r(t);var a=n(670),c=n(655),r=n(571),i=n(637),o=n(627),s=n(752),l=n(1),u=n.n(l),d=n(641),b=n.n(d),h=n(20),j=n(642),p=n(690),f=n(163),m=n(664),x=n(644),g=n(631),O=n.n(g),w=n(632),y=n.n(w),k=n(17),v=y()(O.a);t.default=function(){var e=Object(h.i)(),t=Object(h.g)(),n=e.url,d=Object(l.useContext)(f.a),g=d.pegawaiBerhentiState,O=d.pegawaiBerhentiDispatch,w=g.data;Object(l.useEffect)((function(){Object(p.c)(O)}),[O]);var y=[{name:"No",selector:function(e){return e.no},sortable:!0,width:"80px"},{name:"Nama",selector:function(e){return e.nama},sortable:!0,wrap:!0,cell:function(e){return Object(k.jsxs)("div",{children:[e.nama," ",Object(k.jsx)("br",{}),"(",e.nip,")"]})}},{name:"Status Pegawai",selector:function(e){return e.status_pegawai},sortable:!0,wrap:!0},{name:"Tgl. Berhenti",selector:function(e){return e.tgl_berhenti},wrap:!0,cell:function(e){return Object(s.a)(new Date(e.tgl_berhenti),"dd/MM/yyyy")}},{name:"Status Berhenti",selector:function(e){return e.status_berhenti},sortable:!0,wrap:!0,cell:function(e){return Object(k.jsxs)(k.Fragment,{children:["berhenti"===e.status_berhenti&&Object(k.jsx)(o.b,{color:"dark",shape:"pill",className:"px-2 py-2",children:"Berhenti"}),"akan-berhenti"===e.status_berhenti&&Object(k.jsx)(o.b,{color:"primary",shape:"pill",className:"px-2 py-2",children:"Akan Berhenti"})]})}},{name:"Action",sortable:!0,cell:function(e){return Object(k.jsxs)("div",{"data-tag":"allowRowEvents",className:"my-1",children:[Object(k.jsxs)(o.g,{className:"mb-1",children:[Object(k.jsx)(o.f,{color:"info",className:"btn btn-sm",onClick:function(){return a=e.id_pegawai_berhenti,void t.push("".concat(n,"/").concat(a,"/detail"));var a},children:Object(k.jsx)(i.a,{content:a.a,color:"white"})}),Object(k.jsx)(o.f,{color:"success",className:"btn btn-sm",onClick:function(){return a=e.id_pegawai_berhenti,void t.push("".concat(n,"/").concat(a,"/edit"));var a},children:Object(k.jsx)(i.a,{content:c.a,color:"white"})})]}),Object(k.jsx)("br",{}),Object(k.jsx)(o.f,{color:"dark",className:"btn btn-sm",onClick:function(){return C(e.id_pegawai_berhenti)},children:"Batalkan"})]})}}],C=function(e){v.fire({icon:"warning",title:"Anda yakin ingin membatalkan status berhenti kerja untuk pegawai ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(t){t.isConfirmed&&Object(p.a)(e,O,v)}))},N=function(e){var t=e.data;return Object(k.jsx)("div",{style:{padding:"10px 63px"},children:Object(k.jsxs)(o.X,{className:"mb-1",children:[Object(k.jsx)(o.n,{md:"2",children:Object(k.jsx)("strong",{children:"Keterangan"})}),Object(k.jsx)(o.n,{children:t.keterangan})]})})},B=u.a.useMemo((function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"100%"},children:[Object(k.jsx)(o.f,{type:"button",color:"primary",onClick:function(e){t.push("/epekerja/admin/pegawai-berhenti/tambah")},children:"Tambah Pensiun"}),Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsxs)(o.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return Object(j.e)()},children:["PDF ",Object(k.jsx)(i.a,{content:r.a})]}),Object(k.jsxs)(o.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(j.a)("pegawai-berhenti")},children:["Excel ",Object(k.jsx)(i.a,{content:r.a})]})]})]})})}),[t]);return Object(k.jsx)("div",{children:Object(k.jsxs)(o.h,{children:[Object(k.jsx)(o.l,{children:Object(k.jsx)("h3",{children:"Data Pegawai Berhenti"})}),Object(k.jsx)(o.i,{children:w?Object(k.jsx)(b.a,{columns:y,data:w,noHeader:!0,responsive:!0,customStyles:m.a,pagination:!0,subHeader:!0,subHeaderComponent:B,expandableRows:!0,expandOnRowClicked:!0,highlightOnHover:!0,expandableRowsComponent:Object(k.jsx)(N,{})}):Object(k.jsx)(x.a,{})})]})})}},644:function(e,t,n){"use strict";var a=n(627),c=(n(1),n(629)),r=n(17);t.a=function(){return Object(r.jsx)(a.X,{className:"mb-3",children:Object(r.jsx)(a.n,{className:"text-center",children:Object(r.jsx)("img",{className:"mt-4 ml-3",width:30,src:c.d,alt:"load-animation"})})})}},645:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},655:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},664:function(e,t,n){"use strict";t.a={headCells:{style:{fontSize:"1.15em"}}}},670:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=["512 512","<rect width='34.924' height='34.924' x='256' y='95.998' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M16,496H496V16H16ZM48,48H464V464H48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M285.313,359.032a18.123,18.123,0,0,1-15.6,8.966,18.061,18.061,0,0,1-17.327-23.157l35.67-121.277A49.577,49.577,0,0,0,194.7,190.572l-11.718,28.234,29.557,12.266,11.718-28.235a17.577,17.577,0,0,1,33.1,11.7l-35.67,121.277A50.061,50.061,0,0,0,269.709,400a50.227,50.227,0,0,0,43.25-24.853l15.1-25.913-27.646-16.115Z' class='ci-primary'/>"]},690:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return l}));var a=n(626),c=function(e,t,n){a.a.get("admin/pegawai-berhenti-batal/".concat(e)).then((function(e){console.log(e.data),o(t),n.fire({icon:"success",title:"Sukses",text:"Status Berhenti Kerja Berhasil Dibatalkan"})})).catch((function(e){console.log(e.response.data),n.fire({icon:"error",title:"Gagal",text:e.response.data.message})}))},r=function(e,t,n,c,r){n(!0),a.a.post("admin/pegawai-berhenti/".concat(e),t).then((function(e){console.log(e.data),n(!1),c()})).catch((function(e){console.log(e.response.data),r(e.response.data.errors)}))},i=n(40),o=function(e){e({type:i.LOADING});a.a.get("admin/pegawai-berhenti").then((function(t){e({type:i.SUCCESS,payload:t.data.data})})).catch((function(t){e({type:i.ERROR,payload:t.response.data.message}),console.log(t.response.data)}))},s=function(e,t){a.a.get("admin/pegawai-berhenti/".concat(e)).then((function(e){t(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))},l=function(e,t,n,c){t(!0),a.a.post("admin/pegawai-berhenti",e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(e){console.log(e.data),t(!1),n()})).catch((function(e){console.log(e.response.data),c(e.response.data.errors)}))}}}]);
//# sourceMappingURL=33.3ce9c8e1.chunk.js.map