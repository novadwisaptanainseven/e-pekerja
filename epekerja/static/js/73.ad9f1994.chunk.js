(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[73],{1013:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t(628),c=t(640),i=t.n(c),r=t(20),s=t(632),l=t.n(s),d=t(633),u=t.n(d),m=t(163),g=t(40),h=t(626),p=function(e){e({type:g.LOADING}),h.a.get("admin/master-data/pangkat-golongan").then((function(n){e({type:g.SUCCESS,payload:n.data.data})})).catch((function(n){e({type:g.ERROR,payload:n.response.data.message}),console.log(n.response.data)}))},b=t(630),f=t(17),j=u()(l.a);n.default=function(){var e=Object(r.g)(),n=Object(a.useContext)(m.a),t=n.golonganState,c=n.golonganDispatch,s=t.data,l=t.loading;Object(a.useEffect)((function(){p(c)}),[c]);var d=[{name:"No",selector:"no",sortable:!0,minWidth:"50px",maxWidth:"100px"},{name:"Golongan",selector:"golongan",sortable:!0},{name:"Keterangan",selector:"keterangan",minWidth:"150px",sortable:!0,wrap:!0},{name:"Action",sortable:!0,cell:function(e){return Object(f.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(f.jsx)(o.f,{color:"success",className:"btn btn-sm mr-1",onClick:function(){return g(e.id_pangkat_golongan)},children:"Ubah"}),Object(f.jsx)(o.f,{color:"danger",className:"btn btn-sm mr-1",onClick:function(){return x(e.id_pangkat_golongan)},children:"Hapus"})]})}}],u={headCells:{style:{fontSize:"1.15em"}}},g=function(n){e.push("/epekerja/admin/master-data/pangkat-golongan-edit/".concat(n))},x=function(e){j.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(n){n.isConfirmed&&(!function(e,n){h.a.delete("admin/master-data/pangkat-golongan/".concat(e)).then((function(e){console.log(e.data),p(n)})).catch((function(e){console.log(e.response.data)}))}(e,c),j.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(o.h,{children:[Object(f.jsx)(o.l,{children:Object(f.jsx)("h3",{children:"Data Golongan"})}),Object(f.jsxs)(o.i,{children:[Object(f.jsx)(o.f,{color:"primary",className:"btn btn-md",onClick:function(){e.push("/epekerja/admin/master-data/pangkat-golongan-tambah")},children:"Tambah Data"}),s.length>0?Object(f.jsx)(i.a,{columns:d,data:s,noHeader:!0,responsive:!0,customStyles:u}):l?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsx)(o.W,{children:Object(f.jsx)(o.m,{className:"text-center",children:Object(f.jsx)("img",{className:"mt-4 ml-3",width:30,src:b.c,alt:"load-animation"})})})})}):Object(f.jsx)(i.a,{columns:d,noHeader:!0,responsive:!0,customStyles:u})]})]})})}},644:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);
//# sourceMappingURL=73.ad9f1994.chunk.js.map