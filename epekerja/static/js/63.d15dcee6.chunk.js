(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[63],{1036:function(a,n,e){"use strict";e.r(n);var i=e(641),t=e(9),d=e(1),c=e(632),r=e.n(c),s=e(633),b=e.n(s),u=e(636),l=e(635),o=e(630),h=e(628),g=e(20),j=e(650),m=e(626),_=e(17),f=b()(r.a);n.default=function(a){a.match;var n=Object(g.g)(),e=Object(d.useState)(!1),c=Object(t.a)(e,2),r=c[0],s=c[1],b=Object(d.useState)([]),O=Object(t.a)(b,2),x=O[0],p=O[1];Object(d.useEffect)((function(){Object(j.a)(p)}),[]);var v=function(){n.goBack()},k=function(){f.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){n.push("/epekerja/admin/master-data/sub-bidang")}))},B=function(a){var n="";for(var e in a)n+="".concat(a[e],", ");f.fire({icon:"error",title:"Tambah Data Gagal",text:n}).then((function(a){s(!1)}))},S=u.c().shape({id_bidang:u.e().required("Bidang harus dipilih!"),nama_sub_bidang:u.e().required("Sub Bidang harus diisi!"),keterangan:u.e().required("Keterangan harus diisi!")}),y=function(a){var n=new FormData;n.append("id_bidang",a.id_bidang),n.append("nama_sub_bidang",a.nama_sub_bidang),n.append("keterangan",a.keterangan);var e,t=Object(i.a)(n.entries());try{for(t.s();!(e=t.n()).done;){var d=e.value;console.log(d)}}catch(c){t.e(c)}finally{t.f()}!function(a,n,e,i){n(!0),m.a.post("admin/master-data/sub-bidang",a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(a){n(!1),e()})).catch((function(a){i(a.response.data.errors)}))}(n,s,k,B)};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(h.h,{children:[Object(_.jsx)(h.l,{children:Object(_.jsx)("h3",{children:"Tambah Sub Bidang"})}),Object(_.jsx)(l.a,{initialValues:{id_bidang:"",nama_sub_bidang:"",keterangan:""},validationSchema:S,onSubmit:function(a){return y(a)},children:function(a){var n=a.values,e=a.errors,i=a.touched,t=a.handleChange,d=a.handleBlur,c=a.handleSubmit;return Object(_.jsxs)(h.w,{onSubmit:c,children:[Object(_.jsx)(h.i,{children:Object(_.jsx)(h.W,{children:Object(_.jsxs)(h.m,{xs:"12",md:"6",children:[Object(_.jsxs)(h.x,{children:[Object(_.jsx)(h.K,{children:"Bidang"}),Object(_.jsxs)(h.X,{custom:!0,name:"id_bidang",id:"id_bidang",onChange:t,onBlur:d,value:n.id_bidang,className:e.id_bidang&&i.id_bidang?"is-invalid":null,children:[Object(_.jsx)("option",{value:"",children:"-- Pilih Bidang --"}),x.length>0&&x.map((function(a,n){return Object(_.jsx)("option",{value:a.id_bidang,children:a.nama_bidang},n)}))]}),e.id_bidang&&i.id_bidang&&Object(_.jsx)("div",{className:"invalid-feedback",children:e.id_bidang})]}),Object(_.jsxs)(h.x,{children:[Object(_.jsx)(h.K,{htmlFor:"name",children:"Sub Bidang"}),Object(_.jsx)(h.D,{id:"nama_sub_bidang",name:"nama_sub_bidang",placeholder:"Masukkan sub bidang",onChange:t,onBlur:d,value:n.nama_sub_bidang,className:e.nama_sub_bidang&&i.nama_sub_bidang?"is-invalid":null}),e.nama_sub_bidang&&i.nama_sub_bidang&&Object(_.jsx)("div",{className:"invalid-feedback",children:e.nama_sub_bidang})]}),Object(_.jsxs)(h.x,{children:[Object(_.jsx)(h.K,{htmlFor:"name",children:"Keterangan"}),Object(_.jsx)(h.D,{id:"keterangan",name:"keterangan",placeholder:"Masukkan keterangan",onChange:t,onBlur:d,value:n.keterangan,className:e.keterangan&&i.keterangan?"is-invalid":null}),e.keterangan&&i.keterangan&&Object(_.jsx)("div",{className:"invalid-feedback",children:e.keterangan})]})]})})}),Object(_.jsxs)(h.j,{children:[Object(_.jsx)(h.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!r,children:r?Object(_.jsx)("img",{width:21,src:o.d,alt:"load-animation"}):"Simpan"}),Object(_.jsx)(h.f,{type:"button",color:"danger",onClick:v,children:"Kembali"})]})]})}})]})})}},650:function(a,n,e){"use strict";e.d(n,"a",(function(){return t}));var i=e(626),t=function(a){i.a.get("admin/master-data/bidang").then((function(n){a(n.data.data)})).catch((function(a){}))}}}]);
//# sourceMappingURL=63.d15dcee6.chunk.js.map