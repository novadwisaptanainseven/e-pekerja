(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[44],{1069:function(e,a,n){"use strict";n.r(a);var i=n(2),t=n(638),s=n(7),l=n(1),c=n.n(l),r=n(631),d=n.n(r),j=n(632),o=n.n(j),p=n(635),m=n(634),u=n(629),h=n(627),b=n(20),k=n(742),_=n(647),g=n(653),O=n(642),x=n(626),f=n(658),v=n(650),y=n(17),N=o()(d.a);a.default=function(e){var a=e.match,n=Object(b.g)(),r=a.params,d=Object(l.useState)(null),j=Object(s.a)(d,2),o=j[0],w=j[1],L=Object(l.useState)(null),C=Object(s.a)(L,2),B=C[0],S=C[1],E=Object(l.useState)(null),P=Object(s.a)(E,2),M=P[0],q=P[1],K=Object(l.useState)(!1),T=Object(s.a)(K,2),F=T[0],R=T[1],G=Object(l.useState)([]),z=Object(s.a)(G,2),I=z[0],D=z[1],J=Object(l.useState)([]),W=Object(s.a)(J,2),A=W[0],U=W[1],H=Object(l.useState)([]),V=Object(s.a)(H,2),X=V[0],Y=V[1],Q=Object(l.useState)(""),Z=Object(s.a)(Q,2),$=Z[0],ee=Z[1],ae=Object(l.useState)(!1),ne=Object(s.a)(ae,2),ie=ne[0],te=ne[1];Object(l.useEffect)((function(){Object(k.a)(r.id,w),Object(f.a)(U),Object(_.a)(D),Object(g.a)(Y)}),[r]);var se=c.a.useMemo((function(){return function(e){var a=[];return e.forEach((function(e){a.push({value:e.id_jabatan,label:e.nama_jabatan})})),a}(I)}),[I]);Object(l.useEffect)((function(){o&&le(o.gaji_pokok)}),[o]),Object(l.useEffect)((function(){if(B){var e=URL.createObjectURL(B);return q(e),function(){URL.revokeObjectURL(e)}}q(o?Object(O.d)(o.foto):"")}),[o,B]);var le=function(e){var a=parseInt(e).toLocaleString("id",{style:"currency",currency:"IDR"});ee("RpNaN"!==a?a:"")},ce={nip:o?o.nip:"",nama:o?o.nama:"",penetap_sk:o?o.penetap_sk:"",tgl_penetapan_sk:o?o.tgl_penetapan_sk:"",no_sk:o?o.no_sk:"",kontrak_ke:o?o.kontrak_ke:"",masa_kerja:o?o.masa_kerja:"",tgl_mulai_tugas:o?o.tgl_mulai_tugas:"",id_jabatan:o?o.id_jabatan:"",id_bidang:o?o.id_bidang:"",id_agama:o?o.id_agama:"",tempat_lahir:o?o.tempat_lahir:"",tgl_lahir:o?o.tgl_lahir:"",alamat:o?o.alamat:"",jenis_kelamin:o?o.jenis_kelamin:"",bpjs:o?o.bpjs:"",npwp:o?o.npwp:"",no_hp:o?o.no_hp:"",email:o?o.email:"",no_ktp:o?o.no_ktp:"",gaji_pokok:o?o.gaji_pokok:"",foto:void 0},re=function(){N.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){n.push("/epekerja/admin/pegawai/pttb")}))},de=function(e){var a="";for(var n in e)a+="".concat(e[n],", ");N.fire({icon:"error",title:"Edit Data Gagal",text:a}).then((function(e){R(!1)}))},je=["image/jpg","image/jpeg","image/png"],oe=p.c().shape({nip:p.e().required("NIP harus diisi!"),nama:p.e().required("Nama harus diisi!"),penetap_sk:p.e().required("Penetap SK harus diisi!"),tgl_penetapan_sk:p.e().required("Tgl. penetapan SK harus diisi!"),no_sk:p.e().required("No. SK harus diisi!"),kontrak_ke:p.e().required("Kontrak harus diisi!"),masa_kerja:p.e().required("Masa kerja harus diisi!"),tgl_mulai_tugas:p.e().required("Tgl. mulai tugas harus diisi!"),id_jabatan:p.e().required("Tugas harus diisi!"),id_bidang:p.e().required("Bidang harus diisi!"),id_agama:p.e().required("Agama harus diisi!"),tempat_lahir:p.e().required("Tempat lahir harus diisi!"),tgl_lahir:p.e().required("Tgl lahir harus diisi!"),alamat:p.e().required("Alamat harus diisi!"),jenis_kelamin:p.e().required("Jenis kelamin harus diisi!"),bpjs:p.e().required("BPJS harus diisi!"),npwp:p.e().required("NPWP harus diisi!"),no_hp:p.e().required("No HP harus diisi!"),no_ktp:p.e().required("No. KTP harus diisi!"),email:p.e().required("No. email harus diisi!"),gaji_pokok:p.b().typeError("Gaji pokok harus berupa bilangan").integer("Gaji pokok harus berupa bilangan").required("Gaji pokok harus diisi!"),foto:p.a().test("size","Kapasitas file maksimal 2 mb",(function(e){return!e||e&&e.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",(function(e){return!e||e&&je.includes(e.type)}))}),pe=function(e){var a=new FormData;a.append("nip",e.nip),a.append("nama",e.nama),a.append("penetap_sk",e.penetap_sk),a.append("tgl_penetapan_sk",e.tgl_penetapan_sk),a.append("no_sk",e.no_sk),a.append("kontrak_ke",e.kontrak_ke),a.append("masa_kerja",e.masa_kerja),a.append("tgl_mulai_tugas",e.tgl_mulai_tugas),a.append("id_jabatan",e.id_jabatan),a.append("tugas",e.id_jabatan),a.append("id_bidang",e.id_bidang),a.append("id_agama",e.id_agama),a.append("tempat_lahir",e.tempat_lahir),a.append("tgl_lahir",e.tgl_lahir),a.append("alamat",e.alamat),a.append("jenis_kelamin",e.jenis_kelamin),a.append("bpjs",e.bpjs),a.append("npwp",e.npwp),a.append("gaji_pokok",e.gaji_pokok),a.append("no_hp",e.no_hp),a.append("email",e.email),a.append("no_ktp",e.no_ktp),e.foto&&a.append("foto",e.foto);var n,i=Object(t.a)(a.entries());try{for(i.s();!(n=i.n()).done;){var s=n.value;console.log(s)}}catch(l){i.e(l)}finally{i.f()}!function(e,a,n,i,t){n(!0),x.a.post("admin/pegawai/pttb/".concat(e),a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(e){n(!1),i()})).catch((function(e){t(e.response.data.errors)}))}(r.id,a,R,re,de)},me={control:function(e,a){return Object(i.a)(Object(i.a)({},e),{},{border:ie?"1px solid #e55353":e.border})}};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(h.h,{children:[Object(y.jsxs)(h.l,{className:"d-flex justify-content-between",children:[Object(y.jsx)("h3",{children:"Edit PTTB"}),Object(y.jsx)(h.f,{type:"button",color:"warning",className:"text-white",onClick:function(){n.goBack()},children:"Kembali"})]}),o?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(m.a,{initialValues:ce,validationSchema:oe,enableReinitialize:!0,onSubmit:function(e){return pe(e)},children:function(e){var a=e.values,n=e.errors,i=e.touched,t=e.handleChange,s=e.handleBlur,l=e.handleSubmit,c=e.setFieldValue;return Object(y.jsxs)(h.x,{onSubmit:l,className:"form-horizontal",children:[Object(y.jsx)(h.i,{children:Object(y.jsxs)(h.X,{children:[Object(y.jsxs)(h.n,{md:"6",sm:"12",children:[Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"NIP"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"nip",id:"nip",placeholder:"Masukkan nip",onChange:t,onBlur:s,value:a.nip,className:n.nip&&i.nip?"is-invalid":null}),n.nip&&i.nip&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.nip})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Nama"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"nama",id:"nama",placeholder:"Masukkan nama",onChange:t,onBlur:s,value:a.nama,className:n.nama&&i.nama?"is-invalid":null}),n.nama&&i.nama&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.nama})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Penetap SK"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"penetap_sk",id:"penetap_sk",placeholder:"Masukkan penetap sk",onChange:t,onBlur:s,value:a.penetap_sk,className:n.penetap_sk&&i.penetap_sk?"is-invalid":null}),n.penetap_sk&&i.penetap_sk&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.penetap_sk})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Tgl. Penetapan SK"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"date",name:"tgl_penetapan_sk",id:"tgl_penetapan_sk",placeholder:"Masukkan tgl. penetapan sk",onChange:t,onBlur:s,value:a.tgl_penetapan_sk,className:n.tgl_penetapan_sk&&i.tgl_penetapan_sk?"is-invalid":null}),n.tgl_penetapan_sk&&i.tgl_penetapan_sk&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.tgl_penetapan_sk})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"No. SK"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"no_sk",id:"no_sk",placeholder:"Masukkan no. sk",onChange:t,onBlur:s,value:a.no_sk,className:n.no_sk&&i.no_sk?"is-invalid":null}),n.no_sk&&i.no_sk&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.no_sk})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Kontrak Ke"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"number",name:"kontrak_ke",id:"kontrak_ke",placeholder:"Masukkan no. sk",onChange:t,onBlur:s,value:a.kontrak_ke,className:n.kontrak_ke&&i.kontrak_ke?"is-invalid":null}),n.kontrak_ke&&i.kontrak_ke&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.kontrak_ke})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Masa Kerja"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"masa_kerja",id:"masa_kerja",placeholder:"Masukkan no. sk",onChange:t,onBlur:s,value:a.masa_kerja,className:n.masa_kerja&&i.masa_kerja?"is-invalid":null}),n.masa_kerja&&i.masa_kerja&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.masa_kerja})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Tgl. Mulai Tugas"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"tgl_mulai_tugas",id:"tgl_mulai_tugas",placeholder:"Masukkan tgl. mulai tugas",onChange:t,onBlur:s,value:a.tgl_mulai_tugas,className:n.tgl_mulai_tugas&&i.tgl_mulai_tugas?"is-invalid":null}),n.tgl_mulai_tugas&&i.tgl_mulai_tugas&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.tgl_mulai_tugas})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Tugas"})}),Object(y.jsx)(h.n,{md:"9",sm:"12",children:Object(y.jsx)(v.a,{styles:me,name:"id_jabatan",id:"id_jabatan",onChange:function(e){te(!1),c("id_jabatan",e?e.value:"")},onBlur:function(){return a.id_jabatan?te(!1):te(!0)},onFocus:function(){return te(!0)},placeholder:"-- Pilih Tugas --",isSearchable:!0,isClearable:!0,defaultValue:{value:o?o.id_jabatan:"",label:o?o.jabatan:""},options:se})})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Bidang"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsxs)(h.Y,{custom:!0,name:"id_bidang",id:"id_bidang",onChange:t,onBlur:s,value:a.id_bidang,className:n.id_bidang&&i.id_bidang?"is-invalid":null,children:[Object(y.jsx)("option",{value:"",children:"-- Pilih Bidang --"}),A.map((function(e,a){return Object(y.jsx)("option",{value:e.id_bidang,children:e.nama_bidang},a)}))]}),n.id_bidang&&i.id_bidang&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.id_bidang})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Agama"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsxs)(h.Y,{custom:!0,name:"id_agama",id:"id_agama",onChange:t,onBlur:s,value:a.id_agama,className:n.id_agama&&i.id_agama?"is-invalid":null,children:[Object(y.jsx)("option",{value:"",children:"-- Pilih Agama --"}),X.map((function(e,a){return Object(y.jsx)("option",{value:e.id_agama,children:e.agama},a)}))]}),n.id_agama&&i.id_agama&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.id_agama})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Tempat Lahir"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",id:"tempat_lahir",name:"tempat_lahir",placeholder:"Masukkan tempat lahir",onChange:t,onBlur:s,value:a.tempat_lahir,className:n.tempat_lahir&&i.tempat_lahir?"is-invalid":null}),n.tempat_lahir&&i.tempat_lahir&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.tempat_lahir})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Tgl Lahir"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"date",id:"tgl_lahir",name:"tgl_lahir",placeholder:"Masukkan tanggal lahir",onChange:t,onBlur:s,value:a.tgl_lahir,className:n.tgl_lahir&&i.tgl_lahir?"is-invalid":null}),n.tgl_lahir&&i.tgl_lahir&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.tgl_lahir})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{htmlFor:"alamat",children:"Alamat"})}),Object(y.jsxs)(h.n,{sm:"12",md:"9",children:[Object(y.jsx)(h.lb,{name:"alamat",id:"alamat",rows:"5",placeholder:"Masukkan alamat",onChange:t,onBlur:s,value:a.alamat,className:n.alamat&&i.alamat?"is-invalid":null}),n.alamat&&i.alamat&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.alamat})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Jenis Kelamin"})}),Object(y.jsxs)(h.n,{sm:"12",md:"9",children:[Object(y.jsxs)(h.y,{variant:"custom-radio",inline:!0,children:[Object(y.jsx)(h.K,{custom:!0,id:"jenis_kelamin",name:"jenis_kelamin",onChange:t,onBlur:s,checked:"Laki-Laki"===a.jenis_kelamin,value:"Laki-Laki",required:!0}),Object(y.jsx)(h.L,{variant:"custom-checkbox",htmlFor:"jenis_kelamin",children:"Laki - Laki"})]}),Object(y.jsxs)(h.y,{variant:"custom-radio",inline:!0,children:[Object(y.jsx)(h.K,{custom:!0,id:"jenis_kelamin2",name:"jenis_kelamin",onChange:t,onBlur:s,checked:"Perempuan"===a.jenis_kelamin,value:"Perempuan"}),Object(y.jsx)(h.L,{variant:"custom-checkbox",htmlFor:"jenis_kelamin2",children:"Perempuan"})]})]})]})]}),Object(y.jsxs)(h.n,{md:"6",children:[Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"BPJS"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"bpjs",id:"bpjs",placeholder:"Masukkan bpjs",onChange:t,onBlur:s,value:a.bpjs,className:n.bpjs&&i.bpjs?"is-invalid":null}),n.bpjs&&i.bpjs&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.bpjs})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"NPWP"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"npwp",id:"npwp",placeholder:"Masukkan npwp",onChange:t,onBlur:s,value:a.npwp,className:n.npwp&&i.npwp?"is-invalid":null}),n.npwp&&i.npwp&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.npwp})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"No. HP"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"no_hp",id:"no_hp",placeholder:"Masukkan no hp",onChange:t,onBlur:s,value:a.no_hp,className:n.no_hp&&i.no_hp?"is-invalid":null}),n.no_hp&&i.no_hp&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.no_hp})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Email"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"email",id:"email",placeholder:"Masukkan no. hp",onChange:t,onBlur:s,value:a.email,className:n.email&&i.email?"is-invalid":null}),n.email&&i.email&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.email})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"No. KTP"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"no_ktp",id:"no_ktp",placeholder:"Masukkan no. ktp",onChange:t,onBlur:s,value:a.no_ktp,className:n.no_ktp&&i.no_ktp?"is-invalid":null}),n.no_ktp&&i.no_ktp&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.no_ktp})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.n,{children:Object(y.jsx)(h.L,{children:"Gaji Pokok"})}),Object(y.jsxs)(h.n,{md:"9",sm:"12",children:[Object(y.jsx)(h.E,{type:"text",name:"gaji_pokok",id:"gaji_pokok",placeholder:"Masukkan gaji pokok",onChange:t,onBlur:s,onKeyUp:function(e){return le(e.target.value)},value:a.gaji_pokok,className:n.gaji_pokok&&i.gaji_pokok?"is-invalid":null}),Object(y.jsx)("div",{className:"mt-1",children:$}),n.gaji_pokok&&i.gaji_pokok&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.gaji_pokok})]})]}),Object(y.jsxs)(h.y,{row:!0,children:[Object(y.jsx)(h.L,{col:!0,children:"Foto"}),Object(y.jsxs)(h.n,{xs:"12",md:"9",children:[Object(y.jsx)(h.F,{custom:!0,id:"custom-file-input",onChange:function(e){!function(e){e.target.files&&0!==e.target.files.length?S(e.target.files[0]):S(void 0)}(e),c("foto",e.target.files[0])},onBlur:s,className:n.foto&&i.foto?"is-invalid":null}),n.foto&&i.foto&&Object(y.jsx)("div",{className:"invalid-feedback",children:n.foto}),Object(y.jsx)(h.L,{style:{width:"353px",left:15},htmlFor:"custom-file-input",variant:"custom-file",children:"Pilih Foto"}),M&&Object(y.jsx)("img",{src:M,alt:M,className:"img-thumbnail mt-2 mb-1",width:200}),Object(y.jsx)(h.z,{className:"help-block",children:"Foto harus bertipe jpg, jpeg, atau png dan sizenya kurang dari 2 MB"})]})]})]})]})}),Object(y.jsx)(h.j,{children:Object(y.jsx)(h.f,{color:"primary",type:"submit",className:"mr-1",disabled:!!F,children:F?Object(y.jsx)("img",{width:21,src:u.e,alt:"load-animation"}):"Simpan"})})]})}})}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"mb-3",children:Object(y.jsx)(h.X,{children:Object(y.jsx)(h.n,{className:"text-center",children:Object(y.jsx)("img",{className:"mt-4 ml-3",width:30,src:u.d,alt:"load-animation"})})})})})]})})}},647:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("jabatan").then((function(a){e(a.data.data)})).catch((function(e){}))}},653:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("agama").then((function(a){e(a.data.data)})).catch((function(e){}))}},658:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("admin/master-data/bidang").then((function(a){e(a.data.data)})).catch((function(e){}))}},659:function(e,a,n){"use strict";a.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},742:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e,a){i.a.get("admin/pegawai/pttb/".concat(e)).then((function(e){a(e.data.data)})).catch((function(e){}))}}}]);
//# sourceMappingURL=44.1abd2366.chunk.js.map