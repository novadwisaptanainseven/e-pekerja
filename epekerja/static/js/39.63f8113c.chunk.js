(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[39],{1045:function(e,a,n){"use strict";n.r(a);var i=n(2),t=n(641),s=n(9),l=n(1),c=n.n(l),r=n(632),d=n.n(r),j=n(633),o=n.n(j),m=n(636),u=n(635),p=n(630),h=n(628),b=n(20),x=n(728),g=n(647),_=n(652),k=n(645),O=n(626),f=n(650),v=n(655),N=n(17),w=o()(d.a);a.default=function(e){var a=e.match,n=Object(b.g)(),r=a.params,d=Object(l.useState)(null),j=Object(s.a)(d,2),o=j[0],y=j[1],K=Object(l.useState)(null),C=Object(s.a)(K,2),S=C[0],B=C[1],P=Object(l.useState)(null),q=Object(s.a)(P,2),D=q[0],M=q[1],T=Object(l.useState)(!1),F=Object(s.a)(T,2),L=F[0],E=F[1],R=Object(l.useState)([]),G=Object(s.a)(R,2),I=G[0],z=G[1],J=Object(l.useState)([]),W=Object(s.a)(J,2),A=W[0],U=W[1],H=Object(l.useState)([]),V=Object(s.a)(H,2),X=V[0],Q=V[1],Y=Object(l.useState)(""),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],ae=Object(l.useState)(!1),ne=Object(s.a)(ae,2),ie=ne[0],te=ne[1];Object(l.useEffect)((function(){Object(x.a)(r.id,y),Object(f.a)(U),Object(g.a)(z),Object(_.a)(Q)}),[r]);var se=c.a.useMemo((function(){return function(e){var a=[];return e.forEach((function(e){a.push({value:e.id_jabatan,label:e.nama_jabatan})})),a}(I)}),[I]);Object(l.useEffect)((function(){o&&le(o.gaji_pokok)}),[o]),Object(l.useEffect)((function(){if(S){var e=URL.createObjectURL(S);return M(e),function(){URL.revokeObjectURL(e)}}M(o?Object(k.d)(o.foto):"")}),[o,S]);var le=function(e){var a=parseInt(e).toLocaleString("id",{style:"currency",currency:"IDR"});ee("RpNaN"!==a?a:"")},ce={nik:o?o.nik:"",nama:o?o.nama:"",penetap_sk:o?o.penetap_sk:"",tgl_penetapan_sk:o?o.tgl_penetapan_sk:"",no_sk:o?o.no_sk:"",tgl_mulai_tugas:o?o.tgl_mulai_tugas:"",id_jabatan:o?o.id_jabatan:"",id_bidang:o?o.id_bidang:"",id_agama:o?o.id_agama:"",tempat_lahir:o?o.tempat_lahir:"",tgl_lahir:o?o.tgl_lahir:"",alamat:o?o.alamat:"",jenis_kelamin:o?o.jenis_kelamin:"",bpjs:o?o.bpjs:"",npwp:o?o.npwp:"",no_hp:o?o.no_hp:"",email:o?o.email:"",no_ktp:o?o.no_ktp:"",gaji_pokok:o?o.gaji_pokok:"",foto:void 0},re=function(){w.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){n.push("/epekerja/admin/pegawai/ptth")}))},de=function(e){var a="";for(var n in e)a+="".concat(e[n],", ");w.fire({icon:"error",title:"Edit Data Gagal",text:a}).then((function(e){E(!1)}))},je=["image/jpg","image/jpeg","image/png"],oe=m.c().shape({nik:m.e().required("NIK harus diisi!"),nama:m.e().required("Nama harus diisi!"),penetap_sk:m.e().required("Penetap SK harus diisi!"),tgl_penetapan_sk:m.e().required("Tgl. penetapan SK harus diisi!"),no_sk:m.e().required("No. SK harus diisi!"),tgl_mulai_tugas:m.e().required("Tgl. mulai tugas harus diisi!"),id_jabatan:m.e().required("Tugas harus diisi!"),id_bidang:m.e().required("Bidang harus diisi!"),id_agama:m.e().required("Agama harus diisi!"),tempat_lahir:m.e().required("Tempat lahir harus diisi!"),tgl_lahir:m.e().required("Tgl lahir harus diisi!"),alamat:m.e().required("Alamat harus diisi!"),jenis_kelamin:m.e().required("Jenis kelamin harus diisi!"),bpjs:m.e().required("BPJS harus diisi!"),npwp:m.e().required("NPWP harus diisi!"),gaji_pokok:m.b().typeError("Gaji pokok harus berupa bilangan").integer("Gaji pokok harus berupa bilangan").required("Gaji pokok harus diisi!"),no_hp:m.e().required("No. HP harus diisi!"),no_ktp:m.e().required("No. KTP harus diisi!"),email:m.e().required("No. email harus diisi!"),foto:m.a().test("size","Kapasitas file maksimal 2 mb",(function(e){return!e||e&&e.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",(function(e){return!e||e&&je.includes(e.type)}))}),me=function(e){var a=new FormData;a.append("nik",e.nik),a.append("nama",e.nama),a.append("penetap_sk",e.penetap_sk),a.append("tgl_penetapan_sk",e.tgl_penetapan_sk),a.append("no_sk",e.no_sk),a.append("tgl_mulai_tugas",e.tgl_mulai_tugas),a.append("id_jabatan",e.id_jabatan),a.append("tugas",e.id_jabatan),a.append("id_bidang",e.id_bidang),a.append("id_agama",e.id_agama),a.append("tempat_lahir",e.tempat_lahir),a.append("tgl_lahir",e.tgl_lahir),a.append("alamat",e.alamat),a.append("jenis_kelamin",e.jenis_kelamin),a.append("bpjs",e.bpjs),a.append("npwp",e.npwp),a.append("gaji_pokok",e.gaji_pokok),a.append("no_hp",e.no_hp),a.append("email",e.email),a.append("no_ktp",e.no_ktp),e.foto&&a.append("foto",e.foto);var n,i=Object(t.a)(a.entries());try{for(i.s();!(n=i.n()).done;){var s=n.value;console.log(s)}}catch(l){i.e(l)}finally{i.f()}!function(e,a,n,i,t){n(!0),O.a.post("admin/pegawai/ptth/".concat(e),a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(e){n(!1),i()})).catch((function(e){t(e.response.data.errors)}))}(r.id,a,E,re,de)},ue={control:function(e,a){return Object(i.a)(Object(i.a)({},e),{},{border:ie?"1px solid #e55353":e.border})}};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(h.h,{children:[Object(N.jsxs)(h.l,{className:"d-flex justify-content-between",children:[Object(N.jsx)("h3",{children:"Edit PTTH"}),Object(N.jsx)(h.f,{type:"button",color:"warning",className:"text-white",onClick:function(){n.goBack()},children:"Kembali"})]}),o?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(u.a,{initialValues:ce,validationSchema:oe,enableReinitialize:!0,onSubmit:function(e){return me(e)},children:function(e){var a=e.values,n=e.errors,i=e.touched,t=e.handleChange,s=e.handleBlur,l=e.handleSubmit,c=e.setFieldValue;return Object(N.jsxs)(h.w,{onSubmit:l,className:"form-horizontal",children:[Object(N.jsx)(h.i,{children:Object(N.jsxs)(h.W,{children:[Object(N.jsxs)(h.m,{md:"6",sm:"12",children:[Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"NIK"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"nik",id:"nik",placeholder:"Masukkan NIK",onChange:t,onBlur:s,value:a.nik,className:n.nik&&i.nik?"is-invalid":null}),n.nik&&i.nik&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.nik})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Nama"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"nama",id:"nama",placeholder:"Masukkan nama",onChange:t,onBlur:s,value:a.nama,className:n.nama&&i.nama?"is-invalid":null}),n.nama&&i.nama&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.nama})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Penetap SK"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"penetap_sk",id:"penetap_sk",placeholder:"Masukkan penetap sk",onChange:t,onBlur:s,value:a.penetap_sk,className:n.penetap_sk&&i.penetap_sk?"is-invalid":null}),n.penetap_sk&&i.penetap_sk&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.penetap_sk})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Tgl. Penetapan SK"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"date",name:"tgl_penetapan_sk",id:"tgl_penetapan_sk",placeholder:"Masukkan tgl. penetapan sk",onChange:t,onBlur:s,value:a.tgl_penetapan_sk,className:n.tgl_penetapan_sk&&i.tgl_penetapan_sk?"is-invalid":null}),n.tgl_penetapan_sk&&i.tgl_penetapan_sk&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.tgl_penetapan_sk})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"No. SK"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"no_sk",id:"no_sk",placeholder:"Masukkan no. sk",onChange:t,onBlur:s,value:a.no_sk,className:n.no_sk&&i.no_sk?"is-invalid":null}),n.no_sk&&i.no_sk&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.no_sk})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Tgl. Mulai Tugas"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"tgl_mulai_tugas",id:"tgl_mulai_tugas",placeholder:"Masukkan tgl. mulai tugas",onChange:t,onBlur:s,value:a.tgl_mulai_tugas,className:n.tgl_mulai_tugas&&i.tgl_mulai_tugas?"is-invalid":null}),n.tgl_mulai_tugas&&i.tgl_mulai_tugas&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.tgl_mulai_tugas})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Tugas"})}),Object(N.jsx)(h.m,{md:"9",sm:"12",children:Object(N.jsx)(v.a,{styles:ue,name:"id_jabatan",id:"id_jabatan",onChange:function(e){te(!1),c("id_jabatan",e?e.value:"")},onBlur:function(){return a.id_jabatan?te(!1):te(!0)},onFocus:function(){return te(!0)},placeholder:"-- Pilih Tugas --",isSearchable:!0,isClearable:!0,defaultValue:{value:o?o.id_jabatan:"",label:o?o.nama_jabatan:""},options:se})})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Bidang"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsxs)(h.X,{custom:!0,name:"id_bidang",id:"id_bidang",onChange:t,onBlur:s,value:a.id_bidang,className:n.id_bidang&&i.id_bidang?"is-invalid":null,children:[Object(N.jsx)("option",{value:"",children:"-- Bidang --"}),A.map((function(e,a){return Object(N.jsx)("option",{value:e.id_bidang,children:e.nama_bidang},a)}))]}),n.id_bidang&&i.id_bidang&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.id_bidang})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Agama"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsxs)(h.X,{custom:!0,name:"id_agama",id:"id_agama",onChange:t,onBlur:s,value:a.id_agama,className:n.id_agama&&i.id_agama?"is-invalid":null,children:[Object(N.jsx)("option",{value:"",children:"-- Pilih Agama --"}),X.map((function(e,a){return Object(N.jsx)("option",{value:e.id_agama,children:e.agama},a)}))]}),n.id_agama&&i.id_agama&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.id_agama})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Tempat Lahir"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",id:"tempat_lahir",name:"tempat_lahir",placeholder:"Masukkan tempat lahir",onChange:t,onBlur:s,value:a.tempat_lahir,className:n.tempat_lahir&&i.tempat_lahir?"is-invalid":null}),n.tempat_lahir&&i.tempat_lahir&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.tempat_lahir})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Tgl Lahir"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"date",id:"tgl_lahir",name:"tgl_lahir",placeholder:"Masukkan tanggal lahir",onChange:t,onBlur:s,value:a.tgl_lahir,className:n.tgl_lahir&&i.tgl_lahir?"is-invalid":null}),n.tgl_lahir&&i.tgl_lahir&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.tgl_lahir})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{htmlFor:"alamat",children:"Alamat"})}),Object(N.jsxs)(h.m,{sm:"12",md:"9",children:[Object(N.jsx)(h.kb,{name:"alamat",id:"alamat",rows:"5",placeholder:"Masukkan alamat",onChange:t,onBlur:s,value:a.alamat,className:n.alamat&&i.alamat?"is-invalid":null}),n.alamat&&i.alamat&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.alamat})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Jenis Kelamin"})}),Object(N.jsxs)(h.m,{sm:"12",md:"9",children:[Object(N.jsxs)(h.x,{variant:"custom-radio",inline:!0,children:[Object(N.jsx)(h.J,{custom:!0,id:"jenis_kelamin",name:"jenis_kelamin",onChange:t,onBlur:s,checked:"Laki-Laki"===a.jenis_kelamin,value:"Laki-Laki",required:!0}),Object(N.jsx)(h.K,{variant:"custom-checkbox",htmlFor:"jenis_kelamin",children:"Laki - Laki"})]}),Object(N.jsxs)(h.x,{variant:"custom-radio",inline:!0,children:[Object(N.jsx)(h.J,{custom:!0,id:"jenis_kelamin2",name:"jenis_kelamin",onChange:t,onBlur:s,checked:"Perempuan"===a.jenis_kelamin,value:"Perempuan"}),Object(N.jsx)(h.K,{variant:"custom-checkbox",htmlFor:"jenis_kelamin2",children:"Perempuan"})]})]})]})]}),Object(N.jsxs)(h.m,{md:"6",children:[Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"BPJS"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"bpjs",id:"bpjs",placeholder:"Masukkan bpjs",onChange:t,onBlur:s,value:a.bpjs,className:n.bpjs&&i.bpjs?"is-invalid":null}),n.bpjs&&i.bpjs&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.bpjs})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"NPWP"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"npwp",id:"npwp",placeholder:"Masukkan npwp",onChange:t,onBlur:s,value:a.npwp,className:n.npwp&&i.npwp?"is-invalid":null}),n.npwp&&i.npwp&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.npwp})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"No. HP"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"no_hp",id:"no_hp",placeholder:"Masukkan no hp",onChange:t,onBlur:s,value:a.no_hp,className:n.no_hp&&i.no_hp?"is-invalid":null}),n.no_hp&&i.no_hp&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.no_hp})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Email"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"email",id:"email",placeholder:"Masukkan no hp",onChange:t,onBlur:s,value:a.email,className:n.email&&i.email?"is-invalid":null}),n.email&&i.email&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.email})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"No. KTP"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"no_ktp",id:"no_ktp",placeholder:"Masukkan no. ktp",onChange:t,onBlur:s,value:a.no_ktp,className:n.no_ktp&&i.no_ktp?"is-invalid":null}),n.no_ktp&&i.no_ktp&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.no_ktp})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.m,{children:Object(N.jsx)(h.K,{children:"Gaji Pokok"})}),Object(N.jsxs)(h.m,{md:"9",sm:"12",children:[Object(N.jsx)(h.D,{type:"text",name:"gaji_pokok",id:"gaji_pokok",placeholder:"Masukkan gaji pokok",onChange:t,onBlur:s,onKeyUp:function(e){return le(e.target.value)},value:a.gaji_pokok,className:n.gaji_pokok&&i.gaji_pokok?"is-invalid":null}),Object(N.jsx)("div",{className:"mt-1",children:$}),n.gaji_pokok&&i.gaji_pokok&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.gaji_pokok})]})]}),Object(N.jsxs)(h.x,{row:!0,children:[Object(N.jsx)(h.K,{col:!0,children:"Foto"}),Object(N.jsxs)(h.m,{xs:"12",md:"9",children:[Object(N.jsx)(h.E,{custom:!0,id:"custom-file-input",onChange:function(e){!function(e){e.target.files&&0!==e.target.files.length?B(e.target.files[0]):B(void 0)}(e),c("foto",e.target.files[0])},onBlur:s,className:n.foto&&i.foto?"is-invalid":null}),n.foto&&i.foto&&Object(N.jsx)("div",{className:"invalid-feedback",children:n.foto}),Object(N.jsx)(h.K,{style:{width:"353px",left:15},htmlFor:"custom-file-input",variant:"custom-file",children:"Pilih Foto"}),D&&Object(N.jsx)("img",{src:D,alt:D,className:"img-thumbnail mt-2 mb-1",width:200}),Object(N.jsx)(h.y,{className:"help-block",children:"Foto harus bertipe jpg, jpeg, atau png dan sizenya kurang dari 2 MB"})]})]})]})]})}),Object(N.jsx)(h.j,{children:Object(N.jsx)(h.f,{color:"primary",type:"submit",className:"mr-1",disabled:!!L,children:L?Object(N.jsx)("img",{width:21,src:p.d,alt:"load-animation"}):"Simpan"})})]})}})}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"mb-3",children:Object(N.jsx)(h.W,{children:Object(N.jsx)(h.m,{className:"text-center",children:Object(N.jsx)("img",{className:"mt-4 ml-3",width:30,src:p.c,alt:"load-animation"})})})})})]})})}},647:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("admin/master-data/jabatan").then((function(a){e(a.data.data)})).catch((function(e){}))}},650:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("admin/master-data/bidang").then((function(a){e(a.data.data)})).catch((function(e){}))}},652:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("admin/master-data/agama").then((function(a){e(a.data.data)})).catch((function(e){}))}},661:function(e,a,n){"use strict";a.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},728:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e,a){i.a.get("admin/pegawai/ptth/".concat(e)).then((function(e){a(e.data.data)})).catch((function(e){}))}}}]);
//# sourceMappingURL=39.63f8113c.chunk.js.map