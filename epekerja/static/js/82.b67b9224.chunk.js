(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[82],{1032:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(627),o=t(641),s=t.n(o),i=t(20),r=t(163),l=t(40),d=t(626),m=function(e){e({type:l.AGAMA_LOADING}),d.a.get("admin/master-data/agama").then((function(a){e({type:l.AGAMA_SUCCESS,payload:a.data.data})})).catch((function(a){e({type:l.AGAMA_ERROR,payload:a.response.data.message}),console.log(a.response.data)}))},u=t(631),h=t.n(u),j=t(632),b=t.n(j),f=t(629),p=t(17),g=b()(h.a);a.default=function(){var e=Object(i.g)(),a=Object(n.useContext)(r.a),t=a.agamaState,o=a.agamaDispatch,l=t.data,u=t.loading;Object(n.useEffect)((function(){m(o)}),[o]);var h=[{name:"No",selector:"no",sortable:!0,maxWidth:"50px"},{name:"Agama",selector:"agama",sortable:!0},{name:"Action",sortable:!0,cell:function(e){return Object(p.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(p.jsx)(c.f,{color:"success",className:"btn btn-sm mr-1",onClick:function(){return b(e.id_agama)},children:"Ubah"}),Object(p.jsx)(c.f,{color:"danger",className:"btn btn-sm mr-1",onClick:function(){return x(e.id_agama)},children:"Hapus"})]})}}],j={headCells:{style:{fontSize:"1.15em"}}},b=function(a){e.push("/epekerja/admin/master-data/agama-edit/".concat(a))},x=function(e){g.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(a){a.isConfirmed&&(!function(e,a){d.a.get("admin/master-data/agama/".concat(e,"/delete")).then((function(e){console.log(e.data),m(a)})).catch((function(e){console.log(e.response.data)}))}(e,o),g.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(c.h,{children:[Object(p.jsx)(c.l,{children:Object(p.jsx)("h3",{children:"Data Agama"})}),Object(p.jsxs)(c.i,{children:[Object(p.jsx)(c.f,{color:"primary",className:"btn btn-md",onClick:function(){e.push("/epekerja/admin/master-data/agama-tambah")},children:"Tambah Data"}),l.length>0?Object(p.jsx)(s.a,{columns:h,data:l,noHeader:!0,responsive:!0,customStyles:j}):u?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{children:Object(p.jsx)(c.X,{children:Object(p.jsx)(c.n,{className:"text-center",children:Object(p.jsx)("img",{className:"mt-4 ml-3",width:30,src:f.d,alt:"load-animation"})})})})}):Object(p.jsx)(s.a,{columns:h,noHeader:!0,responsive:!0,customStyles:j})]})]})})}},645:function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);
//# sourceMappingURL=82.b67b9224.chunk.js.map