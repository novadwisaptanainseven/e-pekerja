(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[43],{1064:function(a,e,n){"use strict";n.r(e);var i=n(638),l=n(7),t=n(1),s=n(631),c=n.n(s),j=n(632),d=n.n(j),r=n(635),u=n(634),o=n(629),h=n(627),m=n(20),b=n(647),_=n(682),p=n(653),g=n(740),O=n(626),k=n(658),x=n(17),v=d()(c.a);e.default=function(){var a=Object(m.g)(),e=Object(t.useState)(),n=Object(l.a)(e,2),s=n[0],c=n[1],j=Object(t.useState)(),d=Object(l.a)(j,2),f=d[0],y=d[1],N=Object(t.useState)(),B=Object(l.a)(N,2),w=B[0],L=B[1],z=Object(t.useState)(),C=Object(l.a)(z,2),T=C[0],E=C[1],M=Object(t.useState)(!1),q=Object(l.a)(M,2),P=q[0],S=q[1],J=Object(t.useState)([]),K=Object(l.a)(J,2),F=K[0],D=K[1],G=Object(t.useState)([]),A=Object(l.a)(G,2),I=A[0],R=A[1],Y=Object(t.useState)([]),U=Object(l.a)(Y,2),W=U[0],H=U[1],V=Object(t.useState)([]),X=Object(l.a)(V,2),Q=X[0],Z=X[1],$=Object(t.useState)([]),aa=Object(l.a)($,2),ea=aa[0],na=aa[1],ia=Object(t.useState)(""),la=Object(l.a)(ia,2),ta=la[0],sa=la[1];Object(t.useEffect)((function(){Object(k.a)(R),Object(b.a)(D),Object(_.a)(H),Object(g.a)(Z),Object(p.a)(na)}),[]);var ca=Object(t.useCallback)((function(){if(s){var a=URL.createObjectURL(s);return L(a),function(){URL.revokeObjectURL(a)}}L(null)}),[s]),ja=Object(t.useCallback)((function(){if(f){var a=f.name;E(a)}else E(null)}),[f]);Object(t.useEffect)((function(){ca(),ja()}),[ca,ja]);var da={nip:"",nama:"",id_jabatan:"",id_bidang:"",id_golongan:"",id_eselon:"",id_agama:"",tempat_lahir:"",tgl_lahir:"",alamat:"",jenis_kelamin:"",karpeg:"",bpjs:"",npwp:"",tmt_golongan:"",tmt_cpns:"",tmt_jabatan:"",no_hp:"",email:"",no_ktp:"",gaji_pokok:"",foto:void 0,mk_jabatan_tahun:"",mk_jabatan_bulan:"",mk_sebelum_cpns_tahun:"",mk_sebelum_cpns_bulan:"",mk_golongan_tuhan:"",mk_golongan_bulan:"",mk_seluruhnya_tahun:"",mk_seluruhnya_bulan:"",nama_akademi:"",jurusan:"",tahun_lulus:"",jenjang:"",no_ijazah:"",foto_ijazah:void 0},ra=function(){v.fire({icon:"success",title:"Tambah Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a.push("/epekerja/admin/pegawai")}))},ua=function(a){var e="";for(var n in a)e+="".concat(a[n],", ");v.fire({icon:"error",title:"Tambah Data Gagal",text:e}).then((function(a){S(!1)}))},oa=["image/jpg","image/jpeg","image/png"],ha=["application/pdf","image/jpg","image/jpeg","image/png"],ma=r.c().shape({nip:r.e().required("NIP Harus diisi!"),nama:r.e().required("Nama harus diisi!"),id_jabatan:r.e().required("Jabatan harus diisi!"),id_bidang:r.e().required("Bidang harus diisi!"),id_golongan:r.e().required("Golongan harus diisi!"),id_agama:r.e().required("Agama harus diisi!"),tempat_lahir:r.e().required("Tempat lahir harus diisi!"),tgl_lahir:r.e().required("Tanggal lahir harus diisi!"),alamat:r.e().required("Alamat harus diisi!"),jenis_kelamin:r.e().required("Jenis kelamin harus diisi!"),karpeg:r.e().required("Karpeg harus diisi!"),bpjs:r.e().required("BPJS harus diisi!"),npwp:r.e().required("NPWP harus diisi!"),tmt_golongan:r.e().required("TMT. Golongan harus diisi!"),tmt_cpns:r.e().required("TMT. CPNS harus diisi!"),tmt_jabatan:r.e().required("TMT. Jabatan harus diisi!"),no_hp:r.e().required("No. HP harus diisi!"),email:r.e().required("No. HP harus diisi!"),no_ktp:r.e().required("No. KTP harus diisi!"),gaji_pokok:r.b().typeError("Gaji pokok harus berupa bilangan").integer("Gaji pokok harus berupa bilangan").required("Gaji pokok harus diisi!"),foto:r.a().test("size","Kapasitas file maksimal 2 mb",(function(a){return!a||a&&a.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",(function(a){return!a||a&&oa.includes(a.type)})),mk_jabatan_tahun:r.e().required("Tahun harus diisi!"),mk_jabatan_bulan:r.e().required("Bulan harus diisi!"),mk_sebelum_cpns_tahun:r.e().required("Tahun harus diisi!"),mk_sebelum_cpns_bulan:r.e().required("Bulan harus diisi!"),mk_golongan_tahun:r.e().required("Tahun harus diisi!"),mk_golongan_bulan:r.e().required("Bulan harus diisi!"),mk_seluruhnya_tahun:r.e().required("Tahun harus diisi!"),mk_seluruhnya_bulan:r.e().required("Bulan harus diisi!"),nama_akademi:r.e().required("Nama akademi harus diisi!"),jurusan:r.e().required("Jurusan harus diisi!"),tahun_lulus:r.e().required("Tahun lulus harus diisi!"),jenjang:r.e().required("Jenjang harus diisi!"),no_ijazah:r.e().required("No. ijazah harus diisi!"),foto_ijazah:r.a().test("size","Kapasitas file maksimal 2 mb",(function(a){return!a||a&&a.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, png, dan pdf",(function(a){return!a||a&&ha.includes(a.type)}))}),ba=function(a){var e=new FormData,n="".concat(a.mk_golongan_tahun," Tahun ").concat(a.mk_golongan_bulan," Bulan"),l="".concat(a.mk_jabatan_tahun," Tahun ").concat(a.mk_jabatan_bulan," Bulan"),t="".concat(a.mk_sebelum_cpns_tahun," Tahun ").concat(a.mk_sebelum_cpns_bulan," Bulan"),s="".concat(a.mk_seluruhnya_tahun," Tahun ").concat(a.mk_seluruhnya_bulan," Bulan");e.append("nip",a.nip),e.append("nama",a.nama),e.append("id_jabatan",a.id_jabatan),e.append("id_bidang",a.id_bidang),e.append("id_golongan",a.id_golongan),e.append("id_eselon",a.id_eselon),e.append("id_agama",a.id_agama),e.append("tempat_lahir",a.tempat_lahir),e.append("tgl_lahir",a.tgl_lahir),e.append("alamat",a.alamat),e.append("jenis_kelamin",a.jenis_kelamin),e.append("karpeg",a.karpeg),e.append("bpjs",a.bpjs),e.append("npwp",a.npwp),e.append("tmt_golongan",a.tmt_golongan),e.append("tmt_cpns",a.tmt_cpns),e.append("tmt_jabatan",a.tmt_jabatan),e.append("no_hp",a.no_hp),e.append("email",a.email),e.append("no_ktp",a.no_ktp),e.append("gaji_pokok",a.gaji_pokok),a.foto&&e.append("foto",a.foto),e.append("mk_jabatan",l),e.append("mk_sebelum_cpns",t),e.append("mk_golongan",n),e.append("mk_seluruhnya",s),e.append("nama_akademi",a.nama_akademi),e.append("jurusan",a.jurusan),e.append("tahun_lulus",a.tahun_lulus),e.append("jenjang",a.jenjang),e.append("no_ijazah",a.no_ijazah),a.foto_ijazah&&e.append("foto_ijazah",a.foto_ijazah);var c,j=Object(i.a)(e.entries());try{for(j.s();!(c=j.n()).done;){var d=c.value;console.log(d)}}catch(r){j.e(r)}finally{j.f()}!function(a,e,n,i){e(!0),O.a.post("admin/pegawai/pns",a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(a){e(!1),n()})).catch((function(a){i(a.response.data.errors)}))}(e,S,ra,ua)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(h.h,{children:[Object(x.jsxs)(h.l,{className:"d-flex justify-content-between",children:[Object(x.jsx)("h3",{children:"Tambah Pegawai"}),Object(x.jsx)(h.f,{type:"button",color:"warning",className:"text-white",onClick:function(){a.goBack()},children:"Kembali"})]}),Object(x.jsx)(u.a,{initialValues:da,validationSchema:ma,onSubmit:function(a){return ba(a)},children:function(a){var e=a.values,n=a.errors,i=a.touched,l=a.handleChange,t=a.handleBlur,s=a.handleSubmit,j=a.setFieldValue;return Object(x.jsxs)(h.x,{onSubmit:s,className:"form-horizontal",children:[Object(x.jsx)(h.i,{children:Object(x.jsxs)(h.X,{children:[Object(x.jsxs)(h.n,{md:"6",sm:"12",children:[Object(x.jsx)("h4",{style:{fontWeight:"normal"},children:"Data Pegawai"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"NIP"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"nip",id:"nip",placeholder:"Masukkan NIP",onChange:l,onBlur:t,value:e.nip,className:n.nip&&i.nip?"is-invalid":null}),n.nip&&i.nip&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.nip})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Nama"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"nama",id:"nama",placeholder:"Masukkan nama",onChange:l,onBlur:t,value:e.nama,className:n.nama&&i.nama?"is-invalid":null}),n.nama&&i.nama&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.nama})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Jabatan"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsxs)(h.Y,{custom:!0,name:"id_jabatan",id:"id_jabatan",onChange:l,onBlur:t,value:e.id_jabatan,className:n.id_jabatan&&i.id_jabatan?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Pilih Jabatan --"}),F.map((function(a,e){return Object(x.jsx)("option",{value:a.id_jabatan,children:a.nama_jabatan},e)}))]}),n.id_jabatan&&i.id_jabatan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.id_jabatan})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Bidang"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsxs)(h.Y,{custom:!0,name:"id_bidang",id:"id_bidang",onChange:l,onBlur:t,value:e.id_bidang,className:n.id_bidang&&i.id_bidang?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Pilih Bidang --"}),I.map((function(a,e){return Object(x.jsx)("option",{value:a.id_bidang,children:a.nama_bidang},e)}))]}),n.id_bidang&&i.id_bidang&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.id_bidang})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Golongan"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsxs)(h.Y,{custom:!0,name:"id_golongan",id:"id_golongan",onChange:l,onBlur:t,value:e.id_golongan,className:n.id_golongan&&i.id_golongan?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Pilih Golongan --"}),W.map((function(a,e){return Object(x.jsxs)("option",{value:a.id_pangkat_golongan,children:[a.keterangan," (",a.golongan,")"]},e)}))]}),n.id_golongan&&i.id_golongan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.id_golongan})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Eselon"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsxs)(h.Y,{custom:!0,name:"id_eselon",id:"id_eselon",onChange:l,onBlur:t,value:e.id_eselon,className:n.id_eselon&&i.id_eselon?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Pilih Eselon --"}),Q.map((function(a,e){return Object(x.jsxs)("option",{value:a.id_pangkat_eselon,children:[a.keterangan," ",a.eselon]},e)}))]}),n.id_eselon&&i.id_eselon&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.id_eselon}),Object(x.jsx)(h.z,{className:"help-block",children:"Isi eselon jika ada"})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Agama"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsxs)(h.Y,{custom:!0,name:"id_agama",id:"id_agama",onChange:l,onBlur:t,value:e.id_agama,className:n.id_agama&&i.id_agama?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Pilih Agama --"}),ea.map((function(a,e){return Object(x.jsx)("option",{value:a.id_agama,children:a.agama},e)}))]}),n.id_agama&&i.id_agama&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.id_agama})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Tempat Lahir"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",id:"tempat_lahir",name:"tempat_lahir",placeholder:"Masukkan tempat lahir",onChange:l,onBlur:t,value:e.tempat_lahir,className:n.tempat_lahir&&i.tempat_lahir?"is-invalid":null}),n.tempat_lahir&&i.tempat_lahir&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.tempat_lahir})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Tgl Lahir"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"date",id:"tgl_lahir",name:"tgl_lahir",placeholder:"Masukkan tanggal lahir",onChange:l,onBlur:t,value:e.tgl_lahir,className:n.tgl_lahir&&i.tgl_lahir?"is-invalid":null}),n.tgl_lahir&&i.tgl_lahir&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.tgl_lahir})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{htmlFor:"alamat",children:"Alamat"})}),Object(x.jsxs)(h.n,{sm:"12",md:"9",children:[Object(x.jsx)(h.lb,{name:"alamat",id:"alamat",rows:"5",placeholder:"Masukkan alamat",onChange:l,onBlur:t,value:e.alamat,className:n.alamat&&i.alamat?"is-invalid":null}),n.alamat&&i.alamat&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.alamat})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Jenis Kelamin"})}),Object(x.jsxs)(h.n,{sm:"12",md:"9",children:[Object(x.jsxs)(h.y,{variant:"custom-radio",inline:!0,children:[Object(x.jsx)(h.K,{custom:!0,id:"jenis_kelamin",onChange:l,onBlur:t,name:"jenis_kelamin",value:"Laki-Laki",required:!0}),Object(x.jsx)(h.L,{variant:"custom-checkbox",htmlFor:"jenis_kelamin",children:"Laki - Laki"})]}),Object(x.jsxs)(h.y,{variant:"custom-radio",inline:!0,children:[Object(x.jsx)(h.K,{custom:!0,id:"jenis_kelamin2",name:"jenis_kelamin",onChange:l,onBlur:t,value:"Perempuan",required:!0}),Object(x.jsx)(h.L,{variant:"custom-checkbox",htmlFor:"jenis_kelamin2",children:"Perempuan"})]})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Karpeg"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"karpeg",id:"karpeg",placeholder:"Masukkan karpeg",onChange:l,onBlur:t,value:e.karpeg,className:n.karpeg&&i.karpeg?"is-invalid":null}),n.karpeg&&i.karpeg&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.karpeg})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"BPJS"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"bpjs",id:"bpjs",placeholder:"Masukkan bpjs",onChange:l,onBlur:t,value:e.bpjs,className:n.bpjs&&i.bpjs?"is-invalid":null}),n.bpjs&&i.bpjs&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.bpjs})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"NPWP"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"npwp",id:"npwp",placeholder:"Masukkan npwp",onChange:l,onBlur:t,value:e.npwp,className:n.npwp&&i.npwp?"is-invalid":null}),n.npwp&&i.npwp&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.npwp})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"TMT. Golongan"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"date",name:"tmt_golongan",id:"tmt_golongan",placeholder:"Masukkan tmt golongan",onChange:l,onBlur:t,value:e.tmt_golongan,className:n.tmt_golongan&&i.tmt_golongan?"is-invalid":null}),n.tmt_golongan&&i.tmt_golongan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.tmt_golongan})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"TMT. CPNS"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"date",name:"tmt_cpns",id:"tmt_cpns",placeholder:"Masukkan tmt cpns",onChange:l,onBlur:t,value:e.tmt_cpns,className:n.tmt_cpns&&i.tmt_cpns?"is-invalid":null}),n.tmt_cpns&&i.tmt_cpns&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.tmt_cpns})]})]})]}),Object(x.jsxs)(h.n,{md:"6",children:[Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"TMT. Jabatan"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"date",name:"tmt_jabatan",id:"tmt_jabatan",placeholder:"Masukkan tmt jabatan",onChange:l,onBlur:t,value:e.tmt_jabatan,className:n.tmt_jabatan&&i.tmt_jabatan?"is-invalid":null}),n.tmt_jabatan&&i.tmt_jabatan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.tmt_jabatan})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"No. HP"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"no_hp",id:"no_hp",placeholder:"Masukkan no. hp",onChange:l,onBlur:t,value:e.no_hp,className:n.no_hp&&i.no_hp?"is-invalid":null}),n.no_hp&&i.no_hp&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.no_hp})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Email"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"email",id:"email",placeholder:"Masukkan email",onChange:l,onBlur:t,value:e.email,className:n.email&&i.email?"is-invalid":null}),n.email&&i.email&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.email})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"No. KTP"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"no_ktp",id:"no_ktp",placeholder:"Masukkan no. ktp",onChange:l,onBlur:t,value:e.no_ktp,className:n.no_ktp&&i.no_ktp?"is-invalid":null}),n.no_ktp&&i.no_ktp&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.no_ktp})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Gaji Pokok"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"gaji_pokok",id:"gaji_pokok",placeholder:"Masukkan gaji pokok",onChange:l,onBlur:t,onKeyUp:function(a){return function(a){var e=parseInt(a).toLocaleString("id",{style:"currency",currency:"IDR"});sa("RpNaN"!==e?e:"")}(a.target.value)},value:e.gaji_pokok,className:n.gaji_pokok&&i.gaji_pokok?"is-invalid":null}),Object(x.jsx)("div",{className:"mt-1",children:ta}),n.gaji_pokok&&i.gaji_pokok&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.gaji_pokok})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.L,{col:!0,children:"Foto"}),Object(x.jsxs)(h.n,{xs:"12",md:"9",children:[Object(x.jsx)(h.F,{custom:!0,name:"foto",id:"custom-file-input",onChange:function(a){!function(a){a.target.files&&0!==a.target.files.length?c(a.target.files[0]):c(void 0)}(a),j("foto",a.target.files[0])},onBlur:t,className:n.foto&&i.foto?"is-invalid":null}),n.foto&&i.foto&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.foto}),Object(x.jsx)(h.L,{style:{width:"353px",left:15},htmlFor:"custom-file-input",variant:"custom-file",children:"Pilih Foto"}),w&&Object(x.jsx)("img",{src:w,alt:w,className:"img-thumbnail mt-2 mb-1",width:200}),Object(x.jsx)(h.z,{className:"help-block",children:"Foto harus bertipe jpg, jpeg, atau png dengan ukuran kurang dari 2 MB"})]})]}),Object(x.jsx)("h4",{style:{fontWeight:"normal"},children:"Masa Kerja Pegawai"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{md:"3",children:Object(x.jsx)(h.L,{children:"Masa Kerja Golongan"})}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_golongan_tahun",id:"mk_golongan_tahun",placeholder:"Tahun",onChange:l,onBlur:t,value:e.mk_golongan_tahun||"",className:n.mk_golongan_tahun&&i.mk_golongan_tahun?"is-invalid":null}),n.mk_golongan_tahun&&i.mk_golongan_tahun&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_golongan_tahun}),Object(x.jsx)(h.z,{children:"Tahun"})]}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_golongan_bulan",id:"mk_golongan_bulan",placeholder:"Bulan",onChange:l,onBlur:t,value:e.mk_golongan_bulan||"",className:n.mk_golongan_bulan&&i.mk_golongan_bulan?"is-invalid":null}),n.mk_golongan_bulan&&i.mk_golongan_bulan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_golongan_bulan}),Object(x.jsx)(h.z,{children:"Bulan"})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{md:"3",children:Object(x.jsx)(h.L,{children:"Masa Kerja Jabatan"})}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_jabatan_tahun",id:"mk_jabatan_tahun",placeholder:"Tahun",onChange:l,onBlur:t,value:e.mk_jabatan_tahun||"",className:n.mk_jabatan_tahun&&i.mk_jabatan_tahun?"is-invalid":null}),n.mk_jabatan_tahun&&i.mk_jabatan_tahun&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_jabatan_tahun}),Object(x.jsx)(h.z,{children:"Tahun"})]}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_jabatan_bulan",id:"mk_jabatan_bulan",placeholder:"Bulan",onChange:l,onBlur:t,value:e.mk_jabatan_bulan||"",className:n.mk_jabatan_bulan&&i.mk_jabatan_bulan?"is-invalid":null}),n.mk_jabatan_bulan&&i.mk_jabatan_bulan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_jabatan_bulan}),Object(x.jsx)(h.z,{children:"Bulan"})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{md:"3",children:Object(x.jsx)(h.L,{children:"Masa Kerja Sebelum CPNS"})}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_sebelum_cpns_tahun",id:"mk_sebelum_cpns_tahun",placeholder:"Tahun",onChange:l,onBlur:t,value:e.mk_sebelum_cpns_tahun||"",className:n.mk_sebelum_cpns_tahun&&i.mk_sebelum_cpns_tahun?"is-invalid":null}),n.mk_sebelum_cpns_tahun&&i.mk_sebelum_cpns_tahun&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_sebelum_cpns_tahun}),Object(x.jsx)(h.z,{children:"Tahun"})]}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_sebelum_cpns_bulan",id:"mk_sebelum_cpns_bulan",placeholder:"Bulan",onChange:l,onBlur:t,value:e.mk_sebelum_cpns_bulan||"",className:n.mk_sebelum_cpns_bulan&&i.mk_sebelum_cpns_bulan?"is-invalid":null}),n.mk_sebelum_cpns_bulan&&i.mk_sebelum_cpns_bulan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_sebelum_cpns_bulan}),Object(x.jsx)(h.z,{children:"Bulan"})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{md:"3",children:Object(x.jsx)(h.L,{children:"Masa Kerja Seluruhnya"})}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_seluruhnya_tahun",id:"mk_seluruhnya_tahun",placeholder:"Tahun",onChange:l,onBlur:t,value:e.mk_seluruhnya_tahun||"",className:n.mk_seluruhnya_tahun&&i.mk_seluruhnya_tahun?"is-invalid":null}),n.mk_seluruhnya_tahun&&i.mk_seluruhnya_tahun&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_seluruhnya_tahun}),Object(x.jsx)(h.z,{children:"Tahun"})]}),Object(x.jsxs)(h.n,{children:[Object(x.jsx)(h.E,{type:"number",name:"mk_seluruhnya_bulan",id:"mk_seluruhnya_bulan",placeholder:"Bulan",onChange:l,onBlur:t,value:e.mk_seluruhnya_bulan||"",className:n.mk_seluruhnya_bulan&&i.mk_seluruhnya_bulan?"is-invalid":null}),n.mk_seluruhnya_bulan&&i.mk_seluruhnya_bulan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.mk_seluruhnya_bulan}),Object(x.jsx)(h.z,{children:"Bulan"})]})]}),Object(x.jsx)("h4",{style:{fontWeight:"normal"},children:"Data Pendidikan Terakhir"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Nama Akademi"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"nama_akademi",id:"nama_akademi",placeholder:"Masukkan nama akademi",value:e.nama_akademi,onChange:l,onBlur:t,className:n.nama_akademi&&i.nama_akademi?"is-invalid":null}),n.nama_akademi&&i.nama_akademi&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.nama_akademi})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Jurusan"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"jurusan",id:"jurusan",placeholder:"Masukkan jurusan",value:e.jurusan,onChange:l,onBlur:t,className:n.jurusan&&i.jurusan?"is-invalid":null}),n.jurusan&&i.jurusan&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.jurusan})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Tahun Lulus"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"tahun_lulus",id:"tahun_lulus",placeholder:"Masukkan tahun lulus",value:e.tahun_lulus,onChange:l,onBlur:t,className:n.tahun_lulus&&i.tahun_lulus?"is-invalid":null}),n.tahun_lulus&&i.tahun_lulus&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.tahun_lulus})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"Jenjang"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsxs)(h.Y,{custom:!0,name:"jenjang",id:"jenjang",value:e.jenjang,onChange:l,onBlur:t,className:n.jenjang&&i.jenjang?"is-invalid":null,children:[Object(x.jsx)("option",{value:"",children:"-- Pilih Jenjang --"}),Object(x.jsx)("option",{value:"-",children:"-"}),Object(x.jsx)("option",{value:"sd",children:"SD"}),Object(x.jsx)("option",{value:"smp",children:"SMP"}),Object(x.jsx)("option",{value:"sma/ma/smk",children:"SMA/MA/SMK"}),Object(x.jsx)("option",{value:"D3",children:"D3"}),Object(x.jsx)("option",{value:"D4",children:"D4"}),Object(x.jsx)("option",{value:"S1",children:"S1"}),Object(x.jsx)("option",{value:"S2",children:"S2"}),Object(x.jsx)("option",{value:"S3",children:"S3"})]}),n.jenjang&&i.jenjang&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.jenjang})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.L,{children:"No. Ijazah"})}),Object(x.jsxs)(h.n,{md:"9",sm:"12",children:[Object(x.jsx)(h.E,{type:"text",name:"no_ijazah",id:"no_ijazah",placeholder:"Masukkan no ijazah",value:e.no_ijazah,onChange:l,onBlur:t,className:n.no_ijazah&&i.no_ijazah?"is-invalid":null}),n.no_ijazah&&i.no_ijazah&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.no_ijazah})]})]}),Object(x.jsxs)(h.y,{row:!0,children:[Object(x.jsx)(h.L,{col:!0,children:"Foto/Scan Ijazah"}),Object(x.jsxs)(h.n,{xs:"12",md:"9",children:[Object(x.jsx)(h.F,{name:"foto_ijazah",id:"foto_ijazah",custom:!0,onChange:function(a){!function(a){a.target.files&&0!==a.target.files.length?y(a.target.files[0]):y(void 0)}(a),j("foto_ijazah",a.target.files[0])},onBlur:t,className:n.foto_ijazah&&i.foto_ijazah?"is-invalid":null}),n.foto_ijazah&&i.foto_ijazah&&Object(x.jsx)("div",{className:"invalid-feedback",children:n.foto_ijazah}),Object(x.jsx)(h.L,{style:{width:"353px",left:15},htmlFor:"foto_ijazah",variant:"custom-file",children:"Pilih Foto"}),T&&Object(x.jsx)("p",{className:"mt-1",children:T}),Object(x.jsx)(h.z,{className:"help-block",children:"File harus bertipe pdf, jpg, jpeg, atau png dengan ukuran kurang dari 2 MB"})]})]})]})]})}),Object(x.jsx)(h.j,{children:Object(x.jsx)(h.f,{color:"primary",type:"submit",className:"mr-3",disabled:!!P,children:P?Object(x.jsx)("img",{width:21,src:o.e,alt:"load-animation"}):"Simpan"})})]})}})]})})}},647:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(626),l=function(a){i.a.get("jabatan").then((function(e){a(e.data.data)})).catch((function(a){}))}},653:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(626),l=function(a){i.a.get("agama").then((function(e){a(e.data.data)})).catch((function(a){}))}},658:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(626),l=function(a){i.a.get("admin/master-data/bidang").then((function(e){a(e.data.data)})).catch((function(a){}))}},682:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(626),l=function(a){i.a.get("admin/master-data/pangkat-golongan").then((function(e){a(e.data.data)})).catch((function(a){}))}},740:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(626),l=function(a){i.a.get("admin/master-data/pangkat-eselon").then((function(e){a(e.data.data)})).catch((function(a){}))}}}]);
//# sourceMappingURL=43.c312199a.chunk.js.map