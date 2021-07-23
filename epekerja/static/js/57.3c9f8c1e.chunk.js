(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[57],{1048:function(e,n,a){"use strict";a.r(n);var t=a(2),i=a(642),r=a(10),s=a(1),c=a.n(s),o=a(632),l=a.n(o),d=a(633),u=a.n(d),p=a(637),g=a(628),h=a(20),m=a(654),j=a(678),b=a(636),f=a(630),x=a(626),O=a(17),w=u()(l.a);n.default=function(){var e=Object(h.g)(),n=Object(s.useState)([]),a=Object(r.a)(n,2),o=a[0],l=a[1],d=Object(s.useState)(!1),u=Object(r.a)(d,2),k=u[0],v=u[1],_=Object(s.useState)(!1),y=Object(r.a)(_,2),S=y[0],C=y[1];Object(s.useEffect)((function(){Object(j.a)(l)}),[]);var N=c.a.useMemo((function(){return function(e){var n=[];return e.forEach((function(e){n.push({value:e.id_pegawai,label:e.nama})})),n}(o)}),[o]),D=function(){w.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(n){e.push("/epekerja/admin/pensiun")}))},G=function(e){var n="";for(var a in e)n+="".concat(e[a],", ");w.fire({icon:"error",title:"Tambah Data Gagal",text:n}).then((function(e){v(!1)}))},P=p.c().shape({id_pegawai:p.e().required("Pegawai harus diisi"),tgl_pensiun:p.e().required("Tanggal pensiun harus diisi"),keterangan:p.e().required("Keterangan / alasan harus diisi")}),B=function(e){var n=new FormData;n.append("id_pegawai",e.id_pegawai),n.append("tgl_pensiun",e.tgl_pensiun),n.append("keterangan",e.keterangan);var a,t=Object(i.a)(n.entries());try{for(t.s();!(a=t.n()).done;){var r=a.value;console.log(r)}}catch(s){t.e(s)}finally{t.f()}!function(e,n,a,t){n(!0),x.a.post("admin/pensiun",e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(e){console.log(e.data),n(!1),a()})).catch((function(e){console.log(e.response.data),t(e.response.data.errors)}))}(n,v,D,G)},F={control:function(e,n){return Object(t.a)(Object(t.a)({},e),{},{border:S?"1px solid #e55353":e.border})}};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(g.h,{children:[Object(O.jsxs)(g.l,{className:"d-flex justify-content-between",children:[Object(O.jsx)("h3",{children:"Tambah Data Pensiun"}),Object(O.jsx)(g.f,{type:"button",color:"warning",className:"text-white",onClick:function(){e.goBack()},children:"Kembali"})]}),Object(O.jsx)(b.a,{initialValues:{id_pegawai:"",tgl_pensiun:"",keterangan:""},validationSchema:P,onSubmit:function(e){return B(e)},children:function(e){var n=e.values,a=e.errors,t=e.touched,i=e.handleChange,r=e.handleBlur,s=e.handleSubmit,c=e.setFieldValue;return Object(O.jsxs)(g.w,{onSubmit:s,children:[Object(O.jsxs)(g.i,{children:[Object(O.jsxs)(g.x,{row:!0,children:[Object(O.jsx)(g.m,{md:"2",children:Object(O.jsx)(g.K,{children:"Nama Pegawai"})}),Object(O.jsxs)(g.m,{children:[Object(O.jsx)(m.a,{styles:F,name:"id_pegawai",id:"id_pegawai",onChange:function(e){C(!1),c("id_pegawai",e?e.value:"")},onFocus:function(){return C(!0)},placeholder:"-- Pilih Pegawai --",isSearchable:!0,isClearable:!0,options:N}),!n.id_pegawai&&S&&Object(O.jsx)("div",{className:"text-danger mt-1",style:{fontSize:"0.8em"},children:"Nama penerima harus diisi"})]})]}),Object(O.jsxs)(g.x,{row:!0,children:[Object(O.jsx)(g.m,{md:"2",children:Object(O.jsx)(g.K,{children:"Tgl. Pensiun"})}),Object(O.jsxs)(g.m,{children:[Object(O.jsx)(g.D,{type:"date",name:"tgl_pensiun",id:"tgl_pensiun",onChange:i,onBlur:r,value:n.tgl_pensiun||"",placeholder:"Masukkan tgl. pensiun",className:a.tgl_pensiun&&t.tgl_pensiun?"is-invalid":null}),a.tgl_pensiun&&t.tgl_pensiun&&Object(O.jsx)("div",{className:"invalid-feedback",children:a.tgl_pensiun})]})]}),Object(O.jsxs)(g.x,{row:!0,children:[Object(O.jsx)(g.m,{md:"2",children:Object(O.jsx)(g.K,{children:"Keterangan"})}),Object(O.jsxs)(g.m,{children:[Object(O.jsx)(g.D,{type:"text",name:"keterangan",id:"keterangan",onChange:i,onBlur:r,value:n.keterangan||"",placeholder:"Masukkan keterangan / alasan pensiun",className:a.keterangan&&t.keterangan?"is-invalid":null}),a.keterangan&&t.keterangan&&Object(O.jsx)("div",{className:"invalid-feedback",children:a.keterangan})]})]})]}),Object(O.jsx)(g.j,{children:Object(O.jsx)(g.f,{color:"primary",type:"submit",className:"mr-1",disabled:!!k,onClick:function(){n.id_pegawai?C(!1):C(!0)},children:k?Object(O.jsx)("img",{width:21,src:f.d,alt:"load-animation"}):"Simpan"})})]})}})]})})}},659:function(e,n,a){"use strict";n.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},678:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(626),i=function(e){t.a.get("admin/pegawai/semua-pegawai").then((function(n){e(n.data.data)})).catch((function(e){}))}}}]);
//# sourceMappingURL=57.3c9f8c1e.chunk.js.map