(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[84],{1036:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(627),o=t(641),s=t.n(o),i=t(20),l=t(631),r=t.n(l),d=t(632),u=t.n(d),m=t(163),h=t(40),j=t(626),b=function(e){e({type:h.LOADING}),j.a.get("admin/master-data/pangkat-eselon").then((function(n){e({type:h.SUCCESS,payload:n.data.data})})).catch((function(n){e({type:h.ERROR,payload:n.response.data.message}),console.log(n.response.data)}))},p=t(629),f=t(17),g=u()(r.a);n.default=function(){var e=Object(i.g)(),n=Object(a.useContext)(m.a),t=n.eselonState,o=n.eselonDispatch,l=t.data,r=t.loading;Object(a.useEffect)((function(){b(o)}),[o]);var d=[{name:"No",selector:"no",sortable:!0,minWidth:"50px",maxWidth:"100px"},{name:"Tingkat Eselon",selector:"eselon",sortable:!0},{name:"Action",sortable:!0,cell:function(e){return Object(f.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(f.jsx)(c.f,{color:"success",className:"btn btn-sm mr-1",onClick:function(){return h(e.id_pangkat_eselon)},children:"Ubah"}),Object(f.jsx)(c.f,{color:"danger",className:"btn btn-sm mr-1",onClick:function(){return x(e.id_pangkat_eselon)},children:"Hapus"})]})}}],u={headCells:{style:{fontSize:"1.15em"}}},h=function(n){e.push("/epekerja/admin/master-data/pangkat-eselon-edit/".concat(n))},x=function(e){g.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(n){n.isConfirmed&&(!function(e,n){j.a.get("admin/master-data/pangkat-eselon/".concat(e,"/delete")).then((function(e){console.log(e.data),b(n)})).catch((function(e){console.log(e.response.data)}))}(e,o),g.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(c.h,{children:[Object(f.jsx)(c.l,{children:Object(f.jsx)("h3",{children:"Data Eselon"})}),Object(f.jsxs)(c.i,{children:[Object(f.jsx)(c.f,{color:"primary",className:"btn btn-md",onClick:function(){e.push("/epekerja/admin/master-data/pangkat-eselon-tambah")},children:"Tambah Data"}),l.length>0?Object(f.jsx)(s.a,{columns:d,data:l,noHeader:!0,responsive:!0,customStyles:u}):r?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsx)(c.X,{children:Object(f.jsx)(c.n,{className:"text-center",children:Object(f.jsx)("img",{className:"mt-4 ml-3",width:30,src:p.d,alt:"load-animation"})})})})}):Object(f.jsx)(s.a,{columns:d,noHeader:!0,responsive:!0,customStyles:u})]})]})})}},645:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);
//# sourceMappingURL=84.b481505a.chunk.js.map