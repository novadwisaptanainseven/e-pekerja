(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{1035:function(a,e,n){"use strict";n.r(e);var i=n(10),t=n(1),c=n(632),s=n.n(c),l=n(633),d=n.n(l),r=n(637),j=n(636),o=n(630),m=n(628),b=n(20),h=n(650),p=n(647),u=n(689),g=n(724),x=n(651),O=n(626),_=n(646),k=n(649),v=n(17),f=d()(s.a);e.default=function(a){var e=a.match,n=Object(b.g)(),c=e.params,s=Object(t.useState)(),l=Object(i.a)(s,2),d=l[0],N=l[1],w=Object(t.useState)(),y=Object(i.a)(w,2),B=y[0],K=y[1],C=Object(t.useState)(),P=Object(i.a)(C,2),q=P[0],M=P[1],S=Object(t.useState)(!1),T=Object(i.a)(S,2),D=T[0],E=T[1],J=Object(t.useState)([]),L=Object(i.a)(J,2),F=L[0],G=L[1],R=Object(t.useState)([]),I=Object(i.a)(R,2),z=I[0],A=I[1],U=Object(t.useState)([]),X=Object(i.a)(U,2),W=X[0],H=X[1],V=Object(t.useState)([]),Q=Object(i.a)(V,2),Y=Q[0],Z=Q[1],$=Object(t.useState)([]),aa=Object(i.a)($,2),ea=aa[0],na=aa[1],ia=Object(t.useState)(""),ta=Object(i.a)(ia,2),ca=ta[0],sa=ta[1];Object(t.useEffect)((function(){Object(h.a)(c.id,N),Object(k.a)(A),Object(p.a)(G),Object(u.a)(H),Object(g.a)(Z),Object(x.a)(na)}),[c]),Object(t.useEffect)((function(){d&&la(d.gaji_pokok)}),[d]),Object(t.useEffect)((function(){if(B){var a=URL.createObjectURL(B);return M(a),function(){URL.revokeObjectURL(a)}}M(d?Object(_.b)(d.foto):"")}),[d,B]);var la=function(a){var e=parseInt(a).toLocaleString("id",{style:"currency",currency:"IDR"});sa("RpNaN"!==e?e:"")},da={nip:d?d.nip:"",nama:d?d.nama:"",id_jabatan:d?d.id_jabatan:"",id_bidang:d?d.id_bidang:"",id_golongan:d?d.id_golongan:"",id_eselon:d?d.id_eselon:"",id_agama:d?d.id_agama:"",tempat_lahir:d?d.tempat_lahir:"",tgl_lahir:d?d.tgl_lahir:"",alamat:d?d.alamat:"",jenis_kelamin:d?d.jenis_kelamin:"",karpeg:d?d.karpeg:"",bpjs:d?d.bpjs:"",npwp:d?d.npwp:"",tmt_golongan:d?d.tmt_golongan:"",tmt_cpns:d?d.tmt_cpns:"",tmt_jabatan:d?d.tmt_jabatan:"",no_hp:d?d.no_hp:"",email:d?d.email:"",no_ktp:d?d.no_ktp:"",gaji_pokok:d?d.gaji_pokok:"",foto:void 0},ra=function(){f.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){n.push("/epekerja/admin/pegawai")}))},ja=function(a){var e="";for(var n in a)e+="".concat(a[n],", ");f.fire({icon:"error",title:"Edit Data Gagal",text:e}).then((function(a){E(!1)}))},oa=["image/jpg","image/jpeg","image/png"],ma=r.c().shape({nip:r.e().required("NIP harus diisi!"),nama:r.e().required("Nama harus diisi!"),id_jabatan:r.e().required("Jabatan harus diisi!"),id_bidang:r.e().required("Sub Bidang harus diisi!"),id_golongan:r.e().required("Golongan harus diisi!"),id_agama:r.e().required("Agama harus diisi!"),tempat_lahir:r.e().required("Tempat lahir harus diisi!"),tgl_lahir:r.e().required("Tanggal lahir harus diisi!"),alamat:r.e().required("Alamat harus diisi!"),jenis_kelamin:r.e().required("Jenis kelamin harus diisi!"),karpeg:r.e().required("Karpeg harus diisi!"),bpjs:r.e().required("BPJS harus diisi!"),npwp:r.e().required("NPWP harus diisi!"),tmt_golongan:r.e().required("TMT. Golongan harus diisi!"),tmt_cpns:r.e().required("TMT. CPNS harus diisi!"),tmt_jabatan:r.e().required("TMT. Jabatan harus diisi!"),no_hp:r.e().required("No. HP harus diisi!"),email:r.e().email("Email tidak valid").required("No. HP harus diisi!"),no_ktp:r.e().required("No. KTP harus diisi!"),gaji_pokok:r.b().typeError("Gaji pokok harus berupa bilangan").integer("Gaji pokok harus berupa bilangan").required("Gaji pokok harus diisi!"),foto:r.a().test("size","Kapasitas file maksimal 2 mb",(function(a){return!a||a&&a.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",(function(a){return!a||a&&oa.includes(a.type)}))}),ba=function(a){var e=new FormData;e.append("nip",a.nip),e.append("nama",a.nama),e.append("id_jabatan",a.id_jabatan),e.append("id_bidang",a.id_bidang),e.append("id_golongan",a.id_golongan),e.append("id_eselon",a.id_eselon),e.append("id_agama",a.id_agama),e.append("tempat_lahir",a.tempat_lahir),e.append("tgl_lahir",a.tgl_lahir),e.append("alamat",a.alamat),e.append("jenis_kelamin",a.jenis_kelamin),e.append("karpeg",a.karpeg),e.append("bpjs",a.bpjs),e.append("npwp",a.npwp),e.append("tmt_golongan",a.tmt_golongan),e.append("tmt_cpns",a.tmt_cpns),e.append("tmt_jabatan",a.tmt_jabatan),e.append("no_hp",a.no_hp),e.append("email",a.email),e.append("no_ktp",a.no_ktp),e.append("gaji_pokok",a.gaji_pokok),a.foto&&e.append("foto",a.foto),function(a,e,n,i,t){n(!0),O.a.post("admin/pegawai/pns/".concat(a),e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(a){n(!1),i()})).catch((function(a){t(a.response.data.errors)}))}(c.id,e,E,ra,ja)};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(m.h,{children:[Object(v.jsxs)(m.l,{className:"d-flex justify-content-between",children:[Object(v.jsx)("h3",{children:"Edit Pegawai"}),Object(v.jsx)(m.f,{type:"button",color:"warning",className:"text-white",onClick:function(){n.goBack()},children:"Kembali"})]}),d?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(j.a,{initialValues:da,validationSchema:ma,enableReinitialize:!0,onSubmit:function(a){return ba(a)},children:function(a){var e=a.values,n=a.errors,i=a.touched,t=a.handleChange,c=a.handleBlur,s=a.handleSubmit,l=a.setFieldValue;return Object(v.jsxs)(m.w,{onSubmit:s,className:"form-horizontal",children:[Object(v.jsx)(m.i,{children:Object(v.jsxs)(m.W,{children:[Object(v.jsxs)(m.m,{md:"6",sm:"12",children:[Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"NIP"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"nip",id:"nip",placeholder:"Masukkan NIP",onChange:t,onBlur:c,value:e.nip,className:n.nip&&i.nip?"is-invalid":null}),n.nip&&i.nip&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.nip})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Nama"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"nama",id:"nama",placeholder:"Masukkan nama",onChange:t,onBlur:c,value:e.nama,className:n.nama&&i.nama?"is-invalid":null}),n.nama&&i.nama&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.nama})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Jabatan"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsxs)(m.X,{custom:!0,name:"id_jabatan",id:"id_jabatan",onChange:t,onBlur:c,value:e.id_jabatan,className:n.id_jabatan&&i.id_jabatan?"is-invalid":null,children:[Object(v.jsx)("option",{value:"",children:"-- Pilih Jabatan --"}),F.map((function(a,e){return Object(v.jsx)("option",{value:a.id_jabatan,children:a.nama_jabatan},e)}))]}),n.id_jabatan&&i.id_jabatan&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.id_jabatan})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Sub Bidang"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsxs)(m.X,{custom:!0,name:"id_bidang",id:"id_bidang",onChange:t,onBlur:c,value:e.id_bidang,className:n.id_bidang&&i.id_bidang?"is-invalid":null,children:[Object(v.jsx)("option",{value:"",children:"-- Pilih Bidang --"}),z.map((function(a,e){return Object(v.jsx)("option",{value:a.id_bidang,children:a.nama_bidang},e)}))]}),n.id_bidang&&i.id_bidang&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.id_bidang})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Golongan"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsxs)(m.X,{custom:!0,name:"id_golongan",id:"id_golongan",onChange:t,onBlur:c,value:e.id_golongan,className:n.id_golongan&&i.id_golongan?"is-invalid":null,children:[Object(v.jsx)("option",{value:"",children:"-- Pilih Golongan --"}),W.map((function(a,e){return Object(v.jsxs)("option",{value:a.id_pangkat_golongan,children:[a.keterangan," (",a.golongan,")"]},e)}))]}),n.id_golongan&&i.id_golongan&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.id_golongan})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Eselon"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsxs)(m.X,{custom:!0,name:"id_eselon",id:"id_eselon",onChange:t,onBlur:c,value:e.id_eselon,className:n.id_eselon&&i.id_eselon?"is-invalid":null,children:[Object(v.jsx)("option",{value:"",children:"-- Pilih Eselon --"}),Y.map((function(a,e){return Object(v.jsxs)("option",{value:a.id_pangkat_eselon,children:[a.keterangan," ",a.eselon]},e)}))]}),n.id_eselon&&i.id_eselon&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.id_eselon}),Object(v.jsx)(m.y,{className:"help-block",children:"Isi eselon jika ada"})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Agama"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsxs)(m.X,{custom:!0,name:"id_agama",id:"id_agama",onChange:t,onBlur:c,value:e.id_agama,className:n.id_agama&&i.id_agama?"is-invalid":null,children:[Object(v.jsx)("option",{value:"",children:"-- Pilih Agama --"}),ea.map((function(a,e){return Object(v.jsx)("option",{value:a.id_agama,children:a.agama},e)}))]}),n.id_agama&&i.id_agama&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.id_agama})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Tempat Lahir"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",id:"tempat_lahir",name:"tempat_lahir",placeholder:"Masukkan tempat lahir",onChange:t,onBlur:c,value:e.tempat_lahir,className:n.tempat_lahir&&i.tempat_lahir?"is-invalid":null}),n.tempat_lahir&&i.tempat_lahir&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.tempat_lahir})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Tgl. Lahir"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"date",id:"tgl_lahir",name:"tgl_lahir",placeholder:"Masukkan tgl lahir",onChange:t,onBlur:c,value:e.tgl_lahir,className:n.tgl_lahir&&i.tgl_lahir?"is-invalid":null}),n.tgl_lahir&&i.tgl_lahir&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.tgl_lahir})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Jenis Kelamin"})}),Object(v.jsxs)(m.m,{sm:"12",md:"9",children:[Object(v.jsxs)(m.x,{variant:"custom-radio",inline:!0,children:[Object(v.jsx)(m.J,{custom:!0,id:"jenis_kelamin",onChange:t,onBlur:c,name:"jenis_kelamin",value:"Laki - Laki",checked:"Laki - Laki"===e.jenis_kelamin,required:!0}),Object(v.jsx)(m.K,{variant:"custom-checkbox",htmlFor:"jenis_kelamin",children:"Laki - Laki"})]}),Object(v.jsxs)(m.x,{variant:"custom-radio",inline:!0,children:[Object(v.jsx)(m.J,{custom:!0,id:"jenis_kelamin2",name:"jenis_kelamin",onChange:t,onBlur:c,value:"Perempuan",checked:"Perempuan"===e.jenis_kelamin,required:!0}),Object(v.jsx)(m.K,{variant:"custom-checkbox",htmlFor:"jenis_kelamin2",children:"Perempuan"})]})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"No. HP"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"no_hp",id:"no_hp",placeholder:"Masukkan no hp",onChange:t,onBlur:c,value:e.no_hp,className:n.no_hp&&i.no_hp?"is-invalid":null}),n.no_hp&&i.no_hp&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.no_hp})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Email"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"email",id:"email",placeholder:"Masukkan email",onChange:t,onBlur:c,value:e.email,className:n.email&&i.email?"is-invalid":null}),n.email&&i.email&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.email})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"No. KTP"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"no_ktp",id:"no_ktp",placeholder:"Masukkan no. ktp",onChange:t,onBlur:c,value:e.no_ktp,className:n.no_ktp&&i.no_ktp?"is-invalid":null}),n.no_ktp&&i.no_ktp&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.no_ktp})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Gaji Pokok"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"gaji_pokok",id:"gaji_pokok",placeholder:"Masukkan gaji pokok",onChange:t,onBlur:c,onKeyUp:function(a){return la(a.target.value)},value:e.gaji_pokok,className:n.gaji_pokok&&i.gaji_pokok?"is-invalid":null}),Object(v.jsx)("div",{className:"mt-1",children:ca}),n.gaji_pokok&&i.gaji_pokok&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.gaji_pokok})]})]})]}),Object(v.jsxs)(m.m,{md:"6",children:[Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{htmlFor:"alamat",children:"Alamat"})}),Object(v.jsxs)(m.m,{sm:"12",md:"9",children:[Object(v.jsx)(m.kb,{name:"alamat",id:"alamat",rows:"5",placeholder:"Masukkan alamat",onChange:t,onBlur:c,value:e.alamat,className:n.alamat&&i.alamat?"is-invalid":null}),n.alamat&&i.alamat&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.alamat})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"Karpeg"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"karpeg",id:"karpeg",placeholder:"Masukkan karpeg",onChange:t,onBlur:c,value:e.karpeg,className:n.karpeg&&i.karpeg?"is-invalid":null}),n.karpeg&&i.karpeg&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.karpeg})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"BPJS"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"bpjs",id:"bpjs",placeholder:"Masukkan bpjs",onChange:t,onBlur:c,value:e.bpjs,className:n.bpjs&&i.bpjs?"is-invalid":null}),n.bpjs&&i.bpjs&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.bpjs})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"NPWP"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"text",name:"npwp",id:"npwp",placeholder:"Masukkan npwp",onChange:t,onBlur:c,value:e.npwp,className:n.npwp&&i.npwp?"is-invalid":null}),n.npwp&&i.npwp&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.npwp})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"TMT. Golongan"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"date",name:"tmt_golongan",id:"tmt_golongan",placeholder:"Masukkan tmt golongan",onChange:t,onBlur:c,value:e.tmt_golongan,className:n.tmt_golongan&&i.tmt_golongan?"is-invalid":null}),n.tmt_golongan&&i.tmt_golongan&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.tmt_golongan})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"TMT. CPNS"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"date",name:"tmt_cpns",id:"tmt_cpns",placeholder:"Masukkan tmt cpns",onChange:t,onBlur:c,value:e.tmt_cpns,className:n.tmt_cpns&&i.tmt_cpns?"is-invalid":null}),n.tmt_cpns&&i.tmt_cpns&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.tmt_cpns})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.m,{children:Object(v.jsx)(m.K,{children:"TMT. Jabatan"})}),Object(v.jsxs)(m.m,{md:"9",sm:"12",children:[Object(v.jsx)(m.D,{type:"date",name:"tmt_jabatan",id:"tmt_jabatan",placeholder:"Masukkan tmt jabatan",onChange:t,onBlur:c,value:e.tmt_jabatan,className:n.tmt_jabatan&&i.tmt_jabatan?"is-invalid":null}),n.tmt_jabatan&&i.tmt_jabatan&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.tmt_jabatan})]})]}),Object(v.jsxs)(m.x,{row:!0,children:[Object(v.jsx)(m.K,{col:!0,children:"Foto"}),Object(v.jsxs)(m.m,{xs:"12",md:"9",children:[Object(v.jsx)(m.E,{custom:!0,name:"foto",id:"custom-file-input",onChange:function(a){!function(a){a.target.files&&0!==a.target.files.length?K(a.target.files[0]):K(void 0)}(a),l("foto",a.target.files[0])},onBlur:c,className:n.foto&&i.foto?"is-invalid":null}),n.foto&&i.foto&&Object(v.jsx)("div",{className:"invalid-feedback",children:n.foto}),Object(v.jsx)(m.K,{style:{width:"353px",left:15},htmlFor:"custom-file-input",variant:"custom-file",children:"Pilih Foto"}),q&&Object(v.jsx)("img",{src:q,alt:q,className:"img-thumbnail mt-2 mb-1",width:200}),Object(v.jsx)(m.y,{className:"help-block",children:"Foto harus bertipe jpg, jpeg, atau png dan sizenya kurang dari 2 MB"})]})]})]})]})}),Object(v.jsx)(m.j,{children:Object(v.jsx)(m.f,{color:"primary",type:"submit",className:"mr-3",disabled:!!D,children:D?Object(v.jsx)("img",{width:21,src:o.d,alt:"load-animation"}):"Simpan"})})]})}})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"mb-3",children:Object(v.jsx)(m.W,{children:Object(v.jsx)(m.m,{className:"text-center",children:Object(v.jsx)("img",{className:"mt-4 ml-3",width:30,src:o.c,alt:"load-animation"})})})})})]})})}},647:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));var i=n(626),t=function(a){i.a.get("admin/master-data/jabatan").then((function(e){a(e.data.data)})).catch((function(a){}))}},649:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));var i=n(626),t=function(a){i.a.get("admin/master-data/bidang").then((function(e){a(e.data.data)})).catch((function(a){}))}},650:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));var i=n(626),t=function(a,e){i.a.get("admin/pegawai/pns/".concat(a)).then((function(a){e(a.data.data)})).catch((function(a){}))}},651:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));var i=n(626),t=function(a){i.a.get("admin/master-data/agama").then((function(e){a(e.data.data)})).catch((function(a){}))}},689:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));var i=n(626),t=function(a){i.a.get("admin/master-data/pangkat-golongan").then((function(e){a(e.data.data)})).catch((function(a){}))}},724:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));var i=n(626),t=function(a){i.a.get("admin/master-data/pangkat-eselon").then((function(e){a(e.data.data)})).catch((function(a){}))}}}]);
//# sourceMappingURL=33.5f0ed489.chunk.js.map