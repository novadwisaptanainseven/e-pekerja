(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[32],{1075:function(e,n,a){"use strict";a.r(n);var t=a(638),i=a(7),r=a(627),c=a(634),o=a(1),s=a.n(o),l=a(20),d={id_pegawai:"",tgl_berhenti:"",keterangan:""},u=a(748),h=a(650),b=a(749),g=a(661),f=a(631),j=a.n(f),p=a(632),m=a.n(p),O=a(651),x=a(690),w=a(17),k=m()(j.a);n.default=function(){var e=Object(l.g)(),n=Object(o.useState)(!1),a=Object(i.a)(n,2),f=a[0],j=a[1],p=Object(o.useState)([]),m=Object(i.a)(p,2),v=m[0],y=m[1],S=Object(o.useState)(!1),C=Object(i.a)(S,2),_=C[0],N=C[1];Object(o.useEffect)((function(){Object(g.a)(y)}),[]);var B=s.a.useMemo((function(){return function(e){var n=[];return e.forEach((function(e){n.push({value:e.id_pegawai,label:e.nama})})),n}(v)}),[v]),E=function(){k.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(n){e.push("/epekerja/admin/pegawai-berhenti")}))},G=function(e){var n="";for(var a in e)n+="".concat(e[a],", ");k.fire({icon:"error",title:"Tambah Data Gagal",text:n}).then((function(e){N(!1)}))};return Object(w.jsx)("div",{children:Object(w.jsxs)(r.h,{children:[Object(w.jsxs)(r.l,{className:"d-flex justify-content-between",children:[Object(w.jsx)("h3",{children:"Tambah Pegawai Berhenti"}),Object(w.jsx)(r.f,{type:"button",color:"warning",className:"text-white",onClick:function(){e.goBack()},children:"Kembali"})]}),Object(w.jsx)(c.a,{initialValues:d,validationSchema:u.a,onSubmit:function(e){var n=new FormData;for(var a in e)n.append(a,e[a]);var i,r=Object(t.a)(n.entries());try{for(r.s();!(i=r.n()).done;){var c=i.value;console.log(c)}}catch(o){r.e(o)}finally{r.f()}Object(x.e)(n,N,E,G)},children:function(e){var n=e.values,a=e.errors,t=e.touched,i=e.handleChange,c=e.handleBlur,o=e.handleSubmit,s=e.setFieldValue;return Object(w.jsxs)(r.x,{onSubmit:o,children:[Object(w.jsxs)(r.i,{children:[Object(w.jsxs)(r.y,{row:!0,children:[Object(w.jsx)(r.n,{md:"2",children:Object(w.jsx)(r.L,{children:"Nama Pegawai"})}),Object(w.jsxs)(r.n,{children:[Object(w.jsx)(h.a,{styles:Object(b.a)(f),name:"id_pegawai",onChange:function(e){j(!1),s("id_pegawai",e?e.value:"")},onBlur:function(){return n.id_pegawai?j(!1):j(!0)},onFocus:function(){return j(!0)},placeholder:"-- Pilih Pegawai --",isSearchable:!0,isClearable:!0,options:B}),!n.id_pegawai&&f&&Object(w.jsx)("div",{className:"text-danger mt-1",style:{fontSize:"0.8em"},children:"Nama penerima harus diisi"})]})]}),Object(w.jsxs)(r.y,{row:!0,children:[Object(w.jsx)(r.n,{md:"2",children:Object(w.jsx)(r.L,{children:"Tgl. Berhenti"})}),Object(w.jsxs)(r.n,{children:[Object(w.jsx)(r.E,{type:"date",name:"tgl_berhenti",id:"tgl_berhenti",onChange:i,onBlur:c,value:n.tgl_berhenti||"",placeholder:"Masukkan tgl. berhenti",className:a.tgl_berhenti&&t.tgl_berhenti?"is-invalid":null}),a.tgl_berhenti&&t.tgl_berhenti&&Object(w.jsx)("div",{className:"invalid-feedback",children:a.tgl_berhenti})]})]}),Object(w.jsxs)(r.y,{row:!0,children:[Object(w.jsx)(r.n,{md:"2",children:Object(w.jsx)(r.L,{children:"Keterangan"})}),Object(w.jsxs)(r.n,{children:[Object(w.jsx)(r.E,{type:"text",name:"keterangan",id:"keterangan",onChange:i,onBlur:c,value:n.keterangan||"",placeholder:"Masukkan keterangan / alasan pensiun",className:a.keterangan&&t.keterangan?"is-invalid":null}),a.keterangan&&t.keterangan&&Object(w.jsx)("div",{className:"invalid-feedback",children:a.keterangan})]})]})]}),Object(w.jsx)(r.j,{children:Object(w.jsx)(r.f,{color:"primary",type:"submit",className:"mr-1",disabled:!!_,onClick:function(){n.id_pegawai?j(!1):j(!0)},children:_?Object(w.jsx)(O.a,{}):"Simpan"})})]})}})]})})}},651:function(e,n,a){"use strict";a(1);var t=a(629),i=a(17);n.a=function(){return Object(i.jsx)("img",{width:21,src:t.e,alt:"load-animation"})}},659:function(e,n,a){"use strict";n.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},661:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(626),i=function(e){t.a.get("admin/pegawai/semua-pegawai").then((function(n){e(n.data.data)})).catch((function(e){}))}},690:function(e,n,a){"use strict";a.d(n,"a",(function(){return i})),a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return o})),a.d(n,"d",(function(){return s})),a.d(n,"e",(function(){return l}));var t=a(626),i=function(e,n,a){t.a.get("admin/pegawai-berhenti-batal/".concat(e)).then((function(e){console.log(e.data),o(n),a.fire({icon:"success",title:"Sukses",text:"Status Berhenti Kerja Berhasil Dibatalkan"})})).catch((function(e){console.log(e.response.data),a.fire({icon:"error",title:"Gagal",text:e.response.data.message})}))},r=function(e,n,a,i,r){a(!0),t.a.post("admin/pegawai-berhenti/".concat(e),n).then((function(e){console.log(e.data),a(!1),i()})).catch((function(e){console.log(e.response.data),r(e.response.data.errors)}))},c=a(40),o=function(e){e({type:c.LOADING});t.a.get("admin/pegawai-berhenti").then((function(n){e({type:c.SUCCESS,payload:n.data.data})})).catch((function(n){e({type:c.ERROR,payload:n.response.data.message}),console.log(n.response.data)}))},s=function(e,n){t.a.get("admin/pegawai-berhenti/".concat(e)).then((function(e){n(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))},l=function(e,n,a,i){n(!0),t.a.post("admin/pegawai-berhenti",e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(e){console.log(e.data),n(!1),a()})).catch((function(e){console.log(e.response.data),i(e.response.data.errors)}))}},748:function(e,n,a){"use strict";var t=a(635),i=t.c().shape({id_pegawai:t.e().required("Pegawai harus diisi"),tgl_berhenti:t.e().required("Tgl. berhenti harus diisi"),keterangan:t.e().required("Keterangan / alasan berhenti harus diisi")});n.a=i},749:function(e,n,a){"use strict";var t=a(2);n.a=function(e){return{control:function(n,a){return Object(t.a)(Object(t.a)({},n),{},{border:e?"1px solid #e55353":n.border})}}}}}]);
//# sourceMappingURL=32.a70ac651.chunk.js.map