(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{1066:function(e,a,n){"use strict";n.r(a);var i=n(2),t=n(638),s=n(8),l=n(1),c=n.n(l),r=n(631),d=n.n(r),j=n(632),o=n.n(j),u=n(635),h=n(634),m=n(629),p=n(650),b=n(627),k=n(20),_=n(647),x=n(653),O=n(626),g=n(657),f=n(17),v=o()(d.a);a.default=function(){var e=Object(k.g)(),a=Object(l.useState)(),n=Object(s.a)(a,2),r=n[0],d=n[1],j=Object(l.useState)(),o=Object(s.a)(j,2),y=o[0],N=o[1],w=Object(l.useState)(),S=Object(s.a)(w,2),C=S[0],L=S[1],z=Object(l.useState)(),B=Object(s.a)(z,2),M=B[0],P=B[1],E=Object(l.useState)(),q=Object(s.a)(E,2),F=q[0],K=q[1],T=Object(l.useState)(),D=Object(s.a)(T,2),G=D[0],J=D[1],R=Object(l.useState)(!1),I=Object(s.a)(R,2),W=I[0],A=I[1],U=Object(l.useState)([]),H=Object(s.a)(U,2),Y=H[0],V=H[1],X=Object(l.useState)([]),Q=Object(s.a)(X,2),Z=Q[0],$=Q[1],ee=Object(l.useState)([]),ae=Object(s.a)(ee,2),ne=ae[0],ie=ae[1],te=Object(l.useState)(""),se=Object(s.a)(te,2),le=se[0],ce=se[1],re=Object(l.useState)(!1),de=Object(s.a)(re,2),je=de[0],oe=de[1];Object(l.useEffect)((function(){Object(g.a)($),Object(_.a)(V),Object(x.a)(ie)}),[]);var ue=c.a.useMemo((function(){return function(e){var a=[];return e.forEach((function(e){a.push({value:e.id_jabatan,label:e.nama_jabatan})})),a}(Y)}),[Y]),he=Object(l.useCallback)((function(){if(r){var e=URL.createObjectURL(r);return P(e),function(){URL.revokeObjectURL(e)}}P(null)}),[r]),me=Object(l.useCallback)((function(){if(y){var e=y.name;K(e)}else K(null)}),[y]),pe=Object(l.useCallback)((function(){if(C){var e=C.name;J(e)}else J(null)}),[C]);Object(l.useEffect)((function(){he(),me(),pe()}),[he,me,pe]);var be={nip:"",nama:"",id_bidang:"",id_jabatan:"",id_agama:"",penetap_sk:"",tgl_penetapan_sk:"",no_sk:"",kontrak_ke:"",masa_kerja:"",tgl_mulai_tugas:"",gaji_pokok:"",tgl_lahir:"",tempat_lahir:"",alamat:"",jenis_kelamin:"",bpjs:"",npwp:"",no_hp:"",email:"",no_ktp:"",file_sk:void 0,foto:void 0,nama_akademi:"",jurusan:"",tahun_lulus:"",jenjang:"",no_ijazah:"",foto_ijazah:void 0},ke=function(){v.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){e.push("/epekerja/admin/pegawai/pttb")}))},_e=function(e){var a="";for(var n in e)a+="".concat(e[n],", ");v.fire({icon:"error",title:"Tambah Data Gagal",text:a}).then((function(e){A(!1)}))},xe=["image/jpg","image/jpeg","image/png"],Oe=2048e3,ge=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf","image/jpg","image/jpeg","image/png"],fe=u.c().shape({nip:u.e().required("nip harus diisi!"),nama:u.e().required("Nama harus diisi!"),id_bidang:u.e().required("Bidang harus diisi!"),id_jabatan:u.e().required("Tugas harus diisi!"),id_agama:u.e().required("Agama harus diisi!"),penetap_sk:u.e().required("Penetap SK harus diisi!"),tgl_penetapan_sk:u.e().required("Tgl. penetapan SK harus diisi!"),no_sk:u.e().required("No. SK harus diisi!"),kontrak_ke:u.e().required("Kontrak ke harus diisi!"),masa_kerja:u.e().required("Masa kerja harus diisi!"),tgl_mulai_tugas:u.e().required("Tgl. mulai tugas harus diisi!"),gaji_pokok:u.b().typeError("Gaji pokok harus berupa bilangan").integer("Gaji pokok harus berupa bilangan").required("Gaji pokok harus diisi!"),tgl_lahir:u.e().required("Tgl. lahir harus diisi!"),tempat_lahir:u.e().required("Tempat lahir harus diisi!"),alamat:u.e().required("Alamat harus diisi!"),jenis_kelamin:u.e().required("Jenis kelamin harus diisi!"),bpjs:u.e().required("BPJS harus diisi!"),npwp:u.e().required("NPWP harus diisi!"),no_hp:u.e().required("No. HP harus diisi!"),no_ktp:u.e().required("No. KTP harus diisi!"),email:u.e().required("No. email harus diisi!"),nama_akademi:u.e().required("Nama akademi harus diisi!"),jurusan:u.e().required("Jurusan harus diisi!"),tahun_lulus:u.e().required("Tahun lulus harus diisi!"),jenjang:u.e().required("Jenjang harus diisi!"),no_ijazah:u.e().required("No. ijazah harus diisi!"),file_sk:u.a().test("size","Kapasitas file maksimal 2 mb",(function(e){return!e||e&&e.size<=Oe})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, png, pdf, doc, dan docx",(function(e){return!e||e&&ge.includes(e.type)})),foto:u.a().test("size","Kapasitas file maksimal 2 mb",(function(e){return!e||e&&e.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",(function(e){return!e||e&&xe.includes(e.type)})),foto_ijazah:u.a().test("size","Kapasitas file maksimal 2 mb",(function(e){return!e||e&&e.size<=Oe})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, png, dan pdf",(function(e){return!e||e&&ge.includes(e.type)}))}),ve=function(e){var a=new FormData;a.append("nip",e.nip),a.append("nama",e.nama),a.append("id_jabatan",e.id_jabatan),a.append("tugas",e.id_jabatan),a.append("tugas",e.id_jabatan),a.append("id_bidang",e.id_bidang),a.append("id_agama",e.id_agama),a.append("penetap_sk",e.penetap_sk),a.append("tgl_penetapan_sk",e.tgl_penetapan_sk),a.append("no_sk",e.no_sk),a.append("kontrak_ke",e.kontrak_ke),a.append("masa_kerja",e.masa_kerja),a.append("tgl_mulai_tugas",e.tgl_mulai_tugas),a.append("gaji_pokok",e.gaji_pokok),a.append("tgl_lahir",e.tgl_lahir),a.append("tempat_lahir",e.tempat_lahir),a.append("alamat",e.alamat),a.append("jenis_kelamin",e.jenis_kelamin),a.append("bpjs",e.bpjs),a.append("npwp",e.npwp),a.append("no_hp",e.no_hp),a.append("email",e.email),a.append("no_ktp",e.no_ktp),e.file_sk&&a.append("file_sk",e.file_sk),e.foto&&a.append("foto",e.foto),a.append("nama_akademi",e.nama_akademi),a.append("jurusan",e.jurusan),a.append("tahun_lulus",e.tahun_lulus),a.append("jenjang",e.jenjang),a.append("no_ijazah",e.no_ijazah),e.foto_ijazah&&a.append("foto_ijazah",e.foto_ijazah);var n,i=Object(t.a)(a.entries());try{for(i.s();!(n=i.n()).done;){var s=n.value;console.log(s)}}catch(l){i.e(l)}finally{i.f()}!function(e,a,n,i){a(!0),O.a.post("admin/pegawai/pttb",e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(e){a(!1),n()})).catch((function(e){i(e.response.data.errors)}))}(a,A,ke,_e)},ye={control:function(e,a){return Object(i.a)(Object(i.a)({},e),{},{border:je?"1px solid #e55353":e.border})}};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(b.h,{children:[Object(f.jsxs)(b.l,{className:"d-flex justify-content-between",children:[Object(f.jsx)("h3",{children:"Tambah PTTB"}),Object(f.jsx)(b.f,{type:"button",color:"warning",className:"text-white",onClick:function(){e.goBack()},children:"Kembali"})]}),Object(f.jsx)(h.a,{initialValues:be,validationSchema:fe,onSubmit:function(e){return ve(e)},children:function(e){var a=e.values,n=e.errors,i=e.touched,t=e.handleChange,s=e.handleBlur,l=e.handleSubmit,c=e.setFieldValue;return Object(f.jsxs)(b.x,{onSubmit:l,className:"form-horizontal",children:[Object(f.jsx)(b.i,{children:Object(f.jsxs)(b.X,{children:[Object(f.jsxs)(b.n,{md:"6",sm:"12",children:[Object(f.jsx)("h4",{style:{fontWeight:"normal"},children:"Data Pegawai"}),Object(f.jsx)("hr",{}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"NIPB"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"nip",id:"nip",placeholder:"Masukkan NIPB",onChange:t,onBlur:s,value:a.nip,className:n.nip&&i.nip?"is-invalid":null}),n.nip&&i.nip&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.nip})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Nama"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"nama",id:"nama",placeholder:"Masukkan nama",onChange:t,onBlur:s,value:a.nama,className:n.nama&&i.nama?"is-invalid":null}),n.nama&&i.nama&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.nama})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Penetap SK"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"penetap_sk",id:"penetap_sk",placeholder:"Masukkan penetap sk",onChange:t,onBlur:s,value:a.penetap_sk,className:n.penetap_sk&&i.penetap_sk?"is-invalid":null}),n.penetap_sk&&i.penetap_sk&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.penetap_sk})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Tgl. Penetapan SK"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"date",name:"tgl_penetapan_sk",id:"tgl_penetapan_sk",placeholder:"Masukkan tgl. penetapan sk",onChange:t,onBlur:s,value:a.tgl_penetapan_sk,className:n.tgl_penetapan_sk&&i.tgl_penetapan_sk?"is-invalid":null}),n.tgl_penetapan_sk&&i.tgl_penetapan_sk&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.tgl_penetapan_sk})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"No. SK"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"no_sk",id:"no_sk",placeholder:"Masukkan no. sk",onChange:t,onBlur:s,value:a.no_sk,className:n.no_sk&&i.no_sk?"is-invalid":null}),n.no_sk&&i.no_sk&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.no_sk})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Kontrak Ke"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"number",name:"kontrak_ke",id:"kontrak_ke",placeholder:"Masukkan kontrak ke berapa",onChange:t,onBlur:s,value:a.kontrak_ke,className:n.kontrak_ke&&i.kontrak_ke?"is-invalid":null}),n.kontrak_ke&&i.kontrak_ke&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.kontrak_ke})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Tugas"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(p.a,{styles:ye,name:"id_jabatan",id:"id_jabatan",onChange:function(e){oe(!1),c("id_jabatan",e?e.value:"")},onFocus:function(){return oe(!0)},placeholder:"-- Pilih Tugas --",isSearchable:!0,isClearable:!0,options:ue}),!a.id_jabatan&&je&&Object(f.jsx)("div",{className:"text-danger mt-1",style:{fontSize:"0.8em"},children:"Tugas pokok (jabatan) harus diisi"})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Tgl. Mulai Tugas"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"tgl_mulai_tugas",id:"tgl_mulai_tugas",placeholder:"Masukkan tanggal mulai tugas",onChange:t,onBlur:s,value:a.tgl_mulai_tugas,className:n.tgl_mulai_tugas&&i.tgl_mulai_tugas?"is-invalid":null}),n.tgl_mulai_tugas&&i.tgl_mulai_tugas&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.tgl_mulai_tugas})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Masa Kerja"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"masa_kerja",id:"masa_kerja",placeholder:"Masukkan masa kerja",onChange:t,onBlur:s,value:a.masa_kerja,className:n.masa_kerja&&i.masa_kerja?"is-invalid":null}),n.masa_kerja&&i.masa_kerja&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.masa_kerja})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Bidang"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsxs)(b.Y,{custom:!0,name:"id_bidang",id:"id_bidang",onChange:t,onBlur:s,value:a.id_bidang,className:n.id_bidang&&i.id_bidang?"is-invalid":null,children:[Object(f.jsx)("option",{value:"",children:"-- Pilih Bidang --"}),Z.map((function(e,a){return Object(f.jsx)("option",{value:e.id_bidang,children:e.nama_bidang},a)}))]}),n.id_bidang&&i.id_bidang&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.id_bidang})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Agama"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsxs)(b.Y,{custom:!0,name:"id_agama",id:"id_agama",onChange:t,onBlur:s,value:a.id_agama,className:n.id_agama&&i.id_agama?"is-invalid":null,children:[Object(f.jsx)("option",{value:"",children:"-- Pilih Agama --"}),ne.map((function(e,a){return Object(f.jsx)("option",{value:e.id_agama,children:e.agama},a)}))]}),n.id_agama&&i.id_agama&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.id_agama})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Tempat Lahir"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",id:"tempat_lahir",name:"tempat_lahir",placeholder:"Masukkan tempat lahir",onChange:t,onBlur:s,value:a.tempat_lahir,className:n.tempat_lahir&&i.tempat_lahir?"is-invalid":null}),n.tempat_lahir&&i.tempat_lahir&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.tempat_lahir})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Tgl Lahir"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"date",id:"tgl_lahir",name:"tgl_lahir",placeholder:"Masukkan tanggal lahir",onChange:t,onBlur:s,value:a.tgl_lahir,className:n.tgl_lahir&&i.tgl_lahir?"is-invalid":null}),n.tgl_lahir&&i.tgl_lahir&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.tgl_lahir})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{htmlFor:"alamat",children:"Alamat"})}),Object(f.jsxs)(b.n,{sm:"12",md:"9",children:[Object(f.jsx)(b.lb,{name:"alamat",id:"alamat",rows:"5",placeholder:"Masukkan alamat",onChange:t,onBlur:s,value:a.alamat,className:n.alamat&&i.alamat?"is-invalid":null}),n.alamat&&i.alamat&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.alamat})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Jenis Kelamin"})}),Object(f.jsxs)(b.n,{sm:"12",md:"9",children:[Object(f.jsxs)(b.y,{variant:"custom-radio",inline:!0,children:[Object(f.jsx)(b.K,{custom:!0,id:"jenis_kelamin",onChange:t,onBlur:s,name:"jenis_kelamin",value:"Laki-Laki",required:!0}),Object(f.jsx)(b.L,{variant:"custom-checkbox",htmlFor:"jenis_kelamin",children:"Laki - Laki"})]}),Object(f.jsxs)(b.y,{variant:"custom-radio",inline:!0,children:[Object(f.jsx)(b.K,{custom:!0,id:"jenis_kelamin2",name:"jenis_kelamin",onChange:t,onBlur:s,value:"Perempuan",required:!0}),Object(f.jsx)(b.L,{variant:"custom-checkbox",htmlFor:"jenis_kelamin2",children:"Perempuan"})]})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"BPJS"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"bpjs",id:"bpjs",placeholder:"Masukkan BPJS",onChange:t,onBlur:s,value:a.bpjs,className:n.bpjs&&i.bpjs?"is-invalid":null}),n.bpjs&&i.bpjs&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.bpjs})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"NPWP"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"npwp",id:"npwp",placeholder:"Masukkan NPWP",onChange:t,onBlur:s,value:a.npwp,className:n.npwp&&i.npwp?"is-invalid":null}),n.npwp&&i.npwp&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.npwp})]})]})]}),Object(f.jsxs)(b.n,{md:"6",children:[Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"No. HP"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"no_hp",id:"no_hp",placeholder:"Masukkan no hp",onChange:t,onBlur:s,value:a.no_hp,className:n.no_hp&&i.no_hp?"is-invalid":null}),n.no_hp&&i.no_hp&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.no_hp})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Email"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"email",id:"email",placeholder:"Masukkan no. hp",onChange:t,onBlur:s,value:a.email,className:n.email&&i.email?"is-invalid":null}),n.email&&i.email&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.email})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"No. KTP"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"no_ktp",id:"no_ktp",placeholder:"Masukkan no. ktp",onChange:t,onBlur:s,value:a.no_ktp,className:n.no_ktp&&i.no_ktp?"is-invalid":null}),n.no_ktp&&i.no_ktp&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.no_ktp})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Gaji Pokok"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"gaji_pokok",id:"gaji_pokok",placeholder:"Masukkan gaji pokok",onChange:t,onBlur:s,onKeyUp:function(e){return function(e){var a=parseInt(e).toLocaleString("id",{style:"currency",currency:"IDR"});ce("RpNaN"!==a?a:"")}(e.target.value)},value:a.gaji_pokok,className:n.gaji_pokok&&i.gaji_pokok?"is-invalid":null}),Object(f.jsx)("div",{className:"mt-1",children:le}),n.gaji_pokok&&i.gaji_pokok&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.gaji_pokok})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.L,{col:!0,children:"File SK"}),Object(f.jsxs)(b.n,{xs:"12",md:"9",children:[Object(f.jsx)(b.F,{custom:!0,id:"custom-file-input",name:"file_sk",onChange:function(e){!function(e){e.target.files&&0!==e.target.files.length?L(e.target.files[0]):L(void 0)}(e),c("file_sk",e.target.files[0])},onBlur:s,className:n.file_sk&&i.file_sk?"is-invalid":null}),n.file_sk&&i.file_sk&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.file_sk}),Object(f.jsx)(b.L,{style:{width:"353px",left:15},htmlFor:"custom-file-input",variant:"custom-file",children:"Pilih File SK"}),G&&Object(f.jsx)("p",{className:"mt-1",children:G}),Object(f.jsx)(b.z,{className:"help-block",children:"File SK harus bertipe pdf, doc, docx, jpg, jpeg, atau png dengan ukuran kurang dari 2 MB"})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.L,{col:!0,children:"Foto"}),Object(f.jsxs)(b.n,{xs:"12",md:"9",children:[Object(f.jsx)(b.F,{custom:!0,id:"custom-file-input",name:"foto",onChange:function(e){!function(e){e.target.files&&0!==e.target.files.length?d(e.target.files[0]):d(void 0)}(e),c("foto",e.target.files[0])},className:n.foto&&i.foto?"is-invalid":null}),n.foto&&i.foto&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.foto}),Object(f.jsx)(b.L,{style:{width:"353px",left:15},htmlFor:"custom-file-input",variant:"custom-file",children:"Pilih Foto"}),M&&Object(f.jsx)("img",{src:M,alt:M,className:"img-thumbnail mt-2 mb-1",width:200}),Object(f.jsx)(b.z,{className:"help-block",children:"Foto harus bertipe jpg, jpeg, atau png dengan ukuran kurang dari 2 MB"})]})]}),Object(f.jsx)("h4",{style:{fontWeight:"normal"},children:"Data Pendidikan Terakhir"}),Object(f.jsx)("hr",{}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Nama Akademi"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"nama_akademi",id:"nama_akademi",placeholder:"Masukkan nama akademi",value:a.nama_akademi,onChange:t,onBlur:s,className:n.nama_akademi&&i.nama_akademi?"is-invalid":null}),n.nama_akademi&&i.nama_akademi&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.nama_akademi})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Jurusan"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"jurusan",id:"jurusan",placeholder:"Masukkan jurusan",value:a.jurusan,onChange:t,onBlur:s,className:n.jurusan&&i.jurusan?"is-invalid":null}),n.jurusan&&i.jurusan&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.jurusan})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Tahun Lulus"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"tahun_lulus",id:"tahun_lulus",placeholder:"Masukkan tahun lulus",value:a.tahun_lulus,onChange:t,onBlur:s,className:n.tahun_lulus&&i.tahun_lulus?"is-invalid":null}),n.tahun_lulus&&i.tahun_lulus&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.tahun_lulus})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"Jenjang"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsxs)(b.Y,{custom:!0,name:"jenjang",id:"jenjang",value:a.jenjang,onChange:t,onBlur:s,className:n.jenjang&&i.jenjang?"is-invalid":null,children:[Object(f.jsx)("option",{value:"",children:"-- Pilih Jenjang --"}),Object(f.jsx)("option",{value:"-",children:"-"}),Object(f.jsx)("option",{value:"sd",children:"SD"}),Object(f.jsx)("option",{value:"smp",children:"SMP"}),Object(f.jsx)("option",{value:"sma/ma/smk",children:"SMA/MA/SMK"}),Object(f.jsx)("option",{value:"D3",children:"D3"}),Object(f.jsx)("option",{value:"D4",children:"D4"}),Object(f.jsx)("option",{value:"S1",children:"S1"}),Object(f.jsx)("option",{value:"S2",children:"S2"}),Object(f.jsx)("option",{value:"S3",children:"S3"})]}),n.jenjang&&i.jenjang&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.jenjang})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.n,{children:Object(f.jsx)(b.L,{children:"No. Ijazah"})}),Object(f.jsxs)(b.n,{md:"9",sm:"12",children:[Object(f.jsx)(b.E,{type:"text",name:"no_ijazah",id:"no_ijazah",placeholder:"Masukkan no ijazah",value:a.no_ijazah,onChange:t,onBlur:s,className:n.no_ijazah&&i.no_ijazah?"is-invalid":null}),n.no_ijazah&&i.no_ijazah&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.no_ijazah})]})]}),Object(f.jsxs)(b.y,{row:!0,children:[Object(f.jsx)(b.L,{col:!0,children:"File Ijazah"}),Object(f.jsxs)(b.n,{xs:"12",md:"9",children:[Object(f.jsx)(b.F,{name:"foto_ijazah",id:"foto_ijazah",custom:!0,onChange:function(e){!function(e){e.target.files&&0!==e.target.files.length?N(e.target.files[0]):N(void 0)}(e),c("foto_ijazah",e.target.files[0])},onBlur:s,className:n.foto_ijazah&&i.foto_ijazah?"is-invalid":null}),n.foto_ijazah&&i.foto_ijazah&&Object(f.jsx)("div",{className:"invalid-feedback",children:n.foto_ijazah}),Object(f.jsx)(b.L,{style:{width:"353px",left:15},htmlFor:"foto_ijazah",variant:"custom-file",children:"Pilih Foto"}),F&&Object(f.jsx)("p",{className:"mt-1",children:F}),Object(f.jsx)(b.z,{className:"help-block",children:"File ijazah harus bertipe pdf, doc, docx, jpg, jpeg, atau png dengan ukuran kurang dari 2 MB"})]})]})]})]})}),Object(f.jsx)(b.j,{children:Object(f.jsx)(b.f,{color:"primary",type:"submit",className:"mr-3",disabled:!!W,onClick:function(){a.id_jabatan?oe(!1):oe(!0)},children:W?Object(f.jsx)("img",{width:21,src:m.e,alt:"load-animation"}):"Simpan"})})]})}})]})})}},647:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("jabatan").then((function(a){e(a.data.data)})).catch((function(e){}))}},653:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("agama").then((function(a){e(a.data.data)})).catch((function(e){}))}},657:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var i=n(626),t=function(e){i.a.get("admin/master-data/bidang").then((function(a){e(a.data.data)})).catch((function(e){}))}},658:function(e,a,n){"use strict";a.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}}}]);
//# sourceMappingURL=46.e2ca6619.chunk.js.map