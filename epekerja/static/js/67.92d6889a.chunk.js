(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[67],{665:function(e,t,a){"use strict";var n=a(1),c=a.n(n),i=a(17),s=function(){return Object(i.jsx)(i.Fragment,{children:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"].map((function(e,t){return Object(i.jsx)("option",{value:t+1,children:e},t)}))})};t.a=c.a.memo(s)},992:function(e,t,a){"use strict";a.r(t);var n=a(168),c=a(2),i=a(10),s=a(587),l=a(639),r=a(628),o=a(738),j=a(1),d=a.n(j),u=a(20),b=a(630),h=function(e){return"".concat(localStorage.baseURL,"masa-kerja/").concat(e)},m=a(626),O=function(e,t){e(!0),m.a.get("riwayat-mk-file").then((function(a){console.log(a.data),t(a.data.data),e(!1)})).catch((function(t){console.log(t.response.data),e(!1)}))},x=a(665),f=a(17),g=function(){for(var e=(new Date).getFullYear(),t=[],a=2018;a<=e;a++)t.push(a);return Object(f.jsx)(f.Fragment,{children:t.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)}))})},p=d.a.memo(g),w=a(632),v=a.n(w),N=a(633),k=a.n(N)()(v.a);t.default=function(){var e=Object(u.g)(),t=Object(j.useState)([]),a=Object(i.a)(t,2),d=a[0],g=a[1],w=Object(j.useState)(!1),v=Object(i.a)(w,2),N=v[0],y=v[1],C=Object(j.useState)({}),B=Object(i.a)(C,2),D=B[0],J=B[1];Object(j.useEffect)((function(){O(y,g)}),[]);var A=function(e){k.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(t){t.isConfirmed&&(!function(e,t,a){m.a.delete("riwayat-mk-file/".concat(e)).then((function(e){O(t,a),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}(e,y,g),k.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))};return Object(f.jsx)("div",{children:Object(f.jsxs)(r.h,{children:[Object(f.jsxs)(r.l,{className:"d-flex justify-content-between my-card-header",children:[Object(f.jsx)("div",{className:"title mb-2",children:Object(f.jsx)("h3",{children:"Riwayat Pegawai Berdasarkan Masa Kerja"})}),Object(f.jsx)(r.f,{color:"warning",className:"text-white",style:{height:"40px",width:"100px"},onClick:function(){e.goBack()},children:"Kembali"})]}),Object(f.jsxs)(r.i,{children:[Object(f.jsx)(r.W,{className:"mb-2",children:Object(f.jsx)(r.m,{md:"8",children:Object(f.jsx)(r.w,{children:Object(f.jsxs)(r.x,{children:[Object(f.jsx)(r.K,{children:"Pencarian"}),Object(f.jsxs)(r.W,{children:[Object(f.jsx)(r.m,{md:"5",className:"pr-0",children:Object(f.jsxs)(r.X,{name:"bulan",value:D.bulan,onChange:function(e){return J(Object(c.a)(Object(c.a)({},D),{},Object(n.a)({},e.target.name,e.target.value)))},children:[Object(f.jsx)("option",{value:"",children:"-- Pilih Bulan --"}),Object(f.jsx)(x.a,{})]})}),Object(f.jsxs)(r.m,{className:"d-flex",children:[Object(f.jsxs)(r.X,{name:"tahun",value:D.tahun,onChange:function(e){return J(Object(c.a)(Object(c.a)({},D),{},Object(n.a)({},e.target.name,e.target.value)))},children:[Object(f.jsx)("option",{value:"",children:"-- Pilih Tahun --"}),Object(f.jsx)(p,{})]}),Object(f.jsx)(r.f,{className:"ml-2",color:"primary",onClick:function(){!function(e,t,a){e(!0),m.a.get("riwayat-mk-file?bulan=".concat(a.bulan,"&tahun=").concat(a.tahun)).then((function(a){console.log(a.data),t(a.data.data),e(!1)})).catch((function(t){console.log(t.response.data),e(!1)}))}(y,g,D)},disabled:!D.bulan||!D.tahun,children:N?Object(f.jsx)("div",{children:Object(f.jsx)("img",{width:20,src:b.d,alt:"load-animation"})}):"Cari"}),Object(f.jsx)(r.f,{className:"ml-2",color:"warning",onClick:function(){O(y,g)},children:"Reset"})]})]})]})})})}),Object(f.jsx)(r.W,{children:N?Object(f.jsx)(r.m,{className:"text-center",children:Object(f.jsx)("img",{className:"mt-4 ml-3",width:30,src:b.c,alt:"load-animation"})}):d.map((function(e,t){return Object(f.jsx)(r.m,{md:"3",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"bg-secondary d-flex py-3",children:Object(f.jsx)("img",{src:b.b,style:{width:"40%",margin:"auto"},className:"card-img-top",alt:"icon-excel"})}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h5",{className:"card-title",children:e.file}),Object(f.jsxs)("p",{className:"card-text",children:["Keadaan ",e.keadaan]}),Object(f.jsxs)("p",{className:"text-muted",children:["Disimpan pada"," ",Object(o.a)(new Date(e.tanggal),"dd/MM/y")]}),Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsx)("a",{href:h(e.file_slug),className:"btn btn-primary mr-2",children:"Download File"}),Object(f.jsx)("a",{href:".",className:"btn btn-danger",onClick:function(t){t.preventDefault(),A(e.id_riwayat_mk_file)},children:Object(f.jsx)(l.a,{content:s.a})})]})]})]})},t)}))})]})]})})}}}]);
//# sourceMappingURL=67.92d6889a.chunk.js.map