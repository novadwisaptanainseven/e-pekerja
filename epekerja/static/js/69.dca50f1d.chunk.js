(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[69],{1014:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(632),c=n.n(i),r=n(633),o=n.n(r),s=n(163),d=n(628),l=n(641),m=n.n(l),u=n(20),b=n(626),h=n(40),f=function(e){e({type:h.LOADING}),b.a.get("admin/master-data/bidang").then((function(t){e({type:h.SUCCESS,payload:t.data.data})})).catch((function(t){e({type:h.ERROR,payload:t.response.data.message})}))},j=n(630),p=n(17),x=o()(c.a);t.default=function(){var e=Object(u.g)(),t=Object(a.useContext)(s.a),n=t.bidangState,i=t.bidangDispatch,c=n.data,r=n.loading;Object(a.useEffect)((function(){f(i)}),[i]);var o=[{name:"No",selector:"no",sortable:!0,minWidth:"50px",maxWidth:"100px"},{name:"Nama Bidang",selector:"nama_bidang",sortable:!0,wrap:!0,maxWidth:"200px"},{name:"Keterangan",selector:"keterangan",sortable:!0,wrap:!0,minWidth:"300px"},{maxWidth:"150px",name:"Action",sortable:!0,cell:function(e){return Object(p.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(p.jsx)(d.f,{color:"success",className:"btn btn-sm mr-1",onClick:function(){return h(e.id_bidang)},children:"Ubah"}),Object(p.jsx)(d.f,{color:"danger",className:"btn btn-sm mr-1",onClick:function(){return g(e.id_bidang)},children:"Hapus"})]})}}],l={headCells:{style:{fontSize:"1.15em"}}},h=function(t){e.push("/epekerja/admin/master-data/bidang-edit/".concat(t))},g=function(e){x.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(t){t.isConfirmed&&(!function(e,t){b.a.delete("admin/master-data/bidang/".concat(e)).then((function(e){f(t)})).catch((function(e){}))}(e,i),x.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(d.h,{children:[Object(p.jsx)(d.l,{children:Object(p.jsx)("h3",{children:"Data Bidang"})}),Object(p.jsxs)(d.i,{children:[Object(p.jsx)(d.f,{color:"primary",className:"btn btn-md",onClick:function(){e.push("/epekerja/admin/master-data/bidang-tambah")},children:"Tambah Data"}),c.length>0?Object(p.jsx)(m.a,{columns:o,data:c,noHeader:!0,responsive:!0,customStyles:l}):r?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{children:Object(p.jsx)(d.W,{children:Object(p.jsx)(d.m,{className:"text-center",children:Object(p.jsx)("img",{className:"mt-4 ml-3",width:30,src:j.c,alt:"load-animation"})})})})}):Object(p.jsx)(m.a,{columns:o,noHeader:!0,responsive:!0,customStyles:l})]})]})})}},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);
//# sourceMappingURL=69.dca50f1d.chunk.js.map