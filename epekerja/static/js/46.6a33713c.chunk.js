(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{640:function(a,e,n){"use strict";e.a=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(n){if("filter_tanggal"===n){var t="first_date=".concat(e.startDate,"&last_date=").concat(e.endDate);window.open("".concat(localStorage.baseURL).concat(a,"/export/?").concat(t),"_self")}else if("filter_tahun"===n){var i="tahun=".concat(e);window.open("".concat(localStorage.baseURL).concat(a,"/export/?").concat(i),"_self")}else if("filter_bulan_tahun"===n){var c="bulan=".concat(e.bulan,"&tahun=").concat(e.tahun);window.open("".concat(localStorage.baseURL).concat(a,"/export?").concat(c),"_self")}}else window.open("".concat(localStorage.baseURL).concat(a,"/export"),"_self")}},650:function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n(626),i=function(a,e){t.a.get("admin/pegawai/pns/".concat(a)).then((function(a){e(a.data.data)})).catch((function(a){}))}},653:function(a,e,n){"use strict";n.d(e,"a",(function(){return t}));var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},991:function(a,e,n){"use strict";n.r(e);var t=n(2),i=n(10),c=n(1),r=n(632),o=n.n(r),l=n(633),s=n.n(l),j=n(628),d=n(641),u=n.n(d),k=n(637),b=n(636),m=n(630),g=n(20),h=n(626),p=n(17),_=s()(o.a),O=function(a){var e=a.id_pegawai,n=a.id_kgb,r=a.modalEdit,o=a.setModalEdit,l=Object(g.g)(),s=Object(c.useState)(!1),d=Object(i.a)(s,2),u=d[0],O=d[1],x=Object(c.useState)(""),f=Object(i.a)(x,2),y=f[0],v=f[1],w=Object(c.useState)(""),N=Object(i.a)(w,2),C=N[0],S=N[1];Object(c.useEffect)((function(){return n&&function(a,e,n){h.a.get("admin/pegawai/".concat(a,"/kgb/").concat(e)).then((function(a){n(a.data.data),console.log(a.data)})).catch((function(a){console.log(a.response.data)}))}(e,n,v),function(){v("")}}),[e,n]),Object(c.useEffect)((function(){y&&B(y.gaji_pokok_baru)}),[y]);var D={gaji_pokok_lama:y?y.gaji_pokok_lama:"",gaji_pokok_baru:y?y.gaji_pokok_baru:"",tmt_kenaikan_gaji:y?y.tmt_kenaikan_gaji:"",kenaikan_gaji_yad:y?y.kenaikan_gaji_yad:"",peraturan:y?y.peraturan:""},B=function(a){var e=parseInt(a).toLocaleString("id",{style:"currency",currency:"IDR"});S("RpNaN"!==e?e:"")},G=function(){_.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){o(Object(t.a)(Object(t.a)({},r),{},{modal:!r.modal,id:null})),l.push("/epekerja/admin/kgb/".concat(e,"/daftar"))}))},M=function(a){var e="";for(var n in a)e+="".concat(a[n],", ");_.fire({icon:"error",title:"Edit Data Gagal",text:e}).then((function(a){O(!1)}))},K=k.c().shape({gaji_pokok_lama:k.e().required("Gaji pokok lama harus diisi!"),gaji_pokok_baru:k.b().typeError("Gaji pokok baru harus berupa bilangan").integer().required("Gaji pokok baru harus diisi!"),tmt_kenaikan_gaji:k.e().required("TMT kenaikan gaji harus diisi!"),kenaikan_gaji_yad:k.e().required("Kenaikan gaji yang akan datand harus diisi!"),peraturan:k.e().required("Peraturan harus diisi!")}),T=function(a){!function(a,e,n,t,i,c){t(!0),h.a.put("admin/pegawai/".concat(a,"/kgb/").concat(e),n).then((function(a){console.log(a.data),t(!1),i()})).catch((function(a){console.log(a.response.data),c(a.response.data.errors)}))}(e,n,a,O,G,M),S("")};return Object(p.jsx)(p.Fragment,{children:y?Object(p.jsx)(b.a,{initialValues:D,validationSchema:K,enableReinitialize:!0,onSubmit:function(a){return T(a)},children:function(a){var e=a.values,n=a.errors,i=a.touched,c=a.handleChange,l=a.handleBlur,s=a.handleSubmit;return Object(p.jsxs)(j.w,{onSubmit:s,children:[Object(p.jsxs)(j.N,{children:[Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Gaji Pokok Lama"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"text",name:"gaji_pokok_lama",id:"gaji_pokok_lama",placeholder:"Masukkan gaji pokok lama",onChange:c,onBlur:l,value:e.gaji_pokok_lama,className:n.gaji_pokok_lama&&i.gaji_pokok_lama?"is-invalid":null}),n.gaji_pokok_lama&&i.gaji_pokok_lama&&Object(p.jsx)("div",{className:"invalid-feedback",children:n.gaji_pokok_lama}),Object(p.jsx)("div",{className:"mt-1",children:e.gaji_pokok_lama.toLocaleString("id",{style:"currency",currency:"IDR"})})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Gaji Pokok Baru"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"text",name:"gaji_pokok_baru",id:"gaji_pokok_baru",placeholder:"Masukkan gaji pokok baru",onChange:c,onBlur:l,onKeyUp:function(a){return B(a.target.value)},value:e.gaji_pokok_baru,className:n.gaji_pokok_baru&&i.gaji_pokok_baru?"is-invalid":null}),Object(p.jsx)("div",{className:"mt-1",children:C}),n.gaji_pokok_baru&&i.gaji_pokok_baru&&Object(p.jsx)("div",{className:"invalid-feedback",children:n.gaji_pokok_baru})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"TMT. Kenaikan Gaji"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"date",name:"tmt_kenaikan_gaji",id:"tmt_kenaikan_gaji",placeholder:"Masukkan tmt kenaikan gaji",onChange:c,onBlur:l,value:e.tmt_kenaikan_gaji,className:n.tmt_kenaikan_gaji&&i.tmt_kenaikan_gaji?"is-invalid":null}),n.tmt_kenaikan_gaji&&i.tmt_kenaikan_gaji&&Object(p.jsx)("div",{className:"invalid-feedback",children:n.tmt_kenaikan_gaji})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Kenaikan Gaji YAD"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"date",name:"kenaikan_gaji_yad",id:"kenaikan_gaji_yad",placeholder:"Masukkan tanggal gaji yang akan datang",onChange:c,onBlur:l,value:e.kenaikan_gaji_yad,className:n.kenaikan_gaji_yad&&i.kenaikan_gaji_yad?"is-invalid":null}),n.kenaikan_gaji_yad&&i.kenaikan_gaji_yad&&Object(p.jsx)("div",{className:"invalid-feedback",children:n.kenaikan_gaji_yad})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Peraturan"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"text",name:"peraturan",id:"peraturan",placeholder:"Masukkan peraturan yang mengatur sistem penggajian",onChange:c,onBlur:l,value:e.peraturan,className:n.peraturan&&i.peraturan?"is-invalid":null}),n.peraturan&&i.peraturan&&Object(p.jsx)("div",{className:"invalid-feedback",children:n.peraturan})]})]})]}),Object(p.jsxs)(j.O,{children:[Object(p.jsx)(j.f,{type:"submit",color:"primary",disabled:!!u,children:u?Object(p.jsx)("img",{width:21,src:m.d,alt:"load-animation"}):"Simpan"})," ",Object(p.jsx)(j.f,{type:"button",color:"secondary",onClick:function(){return o(Object(t.a)(Object(t.a)({},r),{},{modal:!1,id:null}))},children:"Batal"})]})]})}}):Object(p.jsx)("div",{children:Object(p.jsx)(j.W,{children:Object(p.jsx)(j.m,{className:"text-center",children:Object(p.jsx)("img",{className:"mt-4 ml-3 mb-4",width:30,src:m.c,alt:"load-animation"})})})})})},x=n(639),f=n(571),y=n(653),v=n(587),w=n(642),N=s()(o.a),C=function(a){var e=a.modalTambah,n=a.setModalTambah,t=a.id_pegawai,r=Object(g.g)(),o=Object(c.useState)(!1),l=Object(i.a)(o,2),s=l[0],d=l[1],u=Object(c.useState)(""),_=Object(i.a)(u,2),O=_[0],x=_[1],f=Object(c.useState)(""),y=Object(i.a)(f,2),v=y[0],C=y[1],S=Object(c.useState)(""),D=Object(i.a)(S,2),B=D[0],G=D[1];Object(c.useEffect)((function(){e&&function(a,e,n){n(!0),h.a.get("admin/pegawai/".concat(a,"/kgb-terbaru")).then((function(a){console.log(a.data),e(a.data.data),n(!1)})).catch((function(a){console.log(a.response.data),n(!1)}))}(t,x,d)}),[t,e]);var M={gaji_pokok_lama:O||"",gaji_pokok_baru:"",tmt_kenaikan_gaji:"",kenaikan_gaji_yad:"",peraturan:""},K=function(a,e){var n=parseInt(a).toLocaleString("id",{style:"currency",currency:"IDR"});e("RpNaN"!==n?n:"")},T=function(){N.fire({icon:"success",title:"Berhasil Melakukan Kenaikan Gaji",showConfirmButton:!1,timer:1500}).then((function(a){n(!e),r.push("/epekerja/admin/kgb/".concat(t,"/daftar"))}))},R=function(a){var e="";for(var n in a)e+="".concat(a[n],", ");N.fire({icon:"error",title:"Gagal Melakukan Kenaikan Gaji",text:e}).then((function(a){d(!1)}))},P=k.c().shape({gaji_pokok_lama:k.b().typeError("Gaji pokok baru harus berupa bilangan").integer().required("Gaji pokok lama harus diisi!"),gaji_pokok_baru:k.b().typeError("Gaji pokok baru harus berupa bilangan").integer().required("Gaji pokok baru harus diisi!"),tmt_kenaikan_gaji:k.e().required("TMT kenaikan gaji harus diisi!"),kenaikan_gaji_yad:k.e().required("Kenaikan gaji yang akan datand harus diisi!"),peraturan:k.e().required("Peraturan harus diisi!")}),E=function(a){var e=new FormData;e.append("gaji_pokok_lama",a.gaji_pokok_lama),e.append("gaji_pokok_baru",a.gaji_pokok_baru),e.append("tmt_kenaikan_gaji",a.tmt_kenaikan_gaji),e.append("kenaikan_gaji_yad",a.kenaikan_gaji_yad),e.append("peraturan",a.peraturan);var n,i=Object(w.a)(e.entries());try{for(i.s();!(n=i.n()).done;){var c=n.value;console.log(c)}}catch(r){i.e(r)}finally{i.f()}!function(a,e,n,t,i){n(!0),h.a.post("admin/pegawai/".concat(a,"/kgb"),e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(a){console.log(a.data),n(!1),t()})).catch((function(a){console.log(a.response.data),i(a.response.data.errors)}))}(t,e,d,T,R),C(""),x("")};return Object(p.jsx)(p.Fragment,{children:s?Object(p.jsx)("div",{children:Object(p.jsx)(j.W,{children:Object(p.jsx)(j.m,{className:"text-center",children:Object(p.jsx)("img",{className:"mt-4 ml-3 mb-4",width:30,src:m.c,alt:"load-animation"})})})}):Object(p.jsx)(b.a,{initialValues:M,validationSchema:P,enableReinitialize:!0,onSubmit:function(a){return E(a)},children:function(a){var t=a.values,i=a.errors,c=a.touched,r=a.handleChange,o=a.handleBlur,l=a.handleSubmit;return Object(p.jsxs)(j.w,{onSubmit:l,children:[Object(p.jsxs)(j.N,{children:[Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Gaji Pokok Lama"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{readOnly:!!O,type:"text",name:"gaji_pokok_lama",id:"gaji_pokok_lama",placeholder:"Masukkan gaji pokok lama",onChange:r,onKeyUp:function(a){return K(a.target.value,G)},onBlur:o,value:t.gaji_pokok_lama,className:i.gaji_pokok_lama&&c.gaji_pokok_lama?"is-invalid":null}),O?Object(p.jsx)("div",{className:"mt-1",children:t.gaji_pokok_lama.toLocaleString("id",{style:"currency",currency:"IDR"})}):Object(p.jsx)("div",{className:"mt-1",children:B}),i.gaji_pokok_lama&&c.gaji_pokok_lama&&Object(p.jsx)("div",{className:"invalid-feedback",children:i.gaji_pokok_lama})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Gaji Pokok Baru"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"text",name:"gaji_pokok_baru",id:"gaji_pokok_baru",placeholder:"Masukkan gaji pokok baru",onChange:r,onBlur:o,onKeyUp:function(a){return K(a.target.value,C)},value:t.gaji_pokok_baru,className:i.gaji_pokok_baru&&c.gaji_pokok_baru?"is-invalid":null}),Object(p.jsx)("div",{className:"mt-1",children:v}),i.gaji_pokok_baru&&c.gaji_pokok_baru&&Object(p.jsx)("div",{className:"invalid-feedback",children:i.gaji_pokok_baru})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"TMT. Kenaikan Gaji"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"date",name:"tmt_kenaikan_gaji",id:"tmt_kenaikan_gaji",placeholder:"Masukkan tmt kenaikan gaji",onChange:r,onBlur:o,value:t.tmt_kenaikan_gaji,className:i.tmt_kenaikan_gaji&&c.tmt_kenaikan_gaji?"is-invalid":null}),i.tmt_kenaikan_gaji&&c.tmt_kenaikan_gaji&&Object(p.jsx)("div",{className:"invalid-feedback",children:i.tmt_kenaikan_gaji})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Kenaikan Gaji YAD"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"date",name:"kenaikan_gaji_yad",id:"kenaikan_gaji_yad",placeholder:"Masukkan tanggal gaji yang akan datang",onChange:r,onBlur:o,value:t.kenaikan_gaji_yad,className:i.kenaikan_gaji_yad&&c.kenaikan_gaji_yad?"is-invalid":null}),i.kenaikan_gaji_yad&&c.kenaikan_gaji_yad&&Object(p.jsx)("div",{className:"invalid-feedback",children:i.kenaikan_gaji_yad})]})]}),Object(p.jsxs)(j.x,{row:!0,children:[Object(p.jsx)(j.m,{md:"3",children:Object(p.jsx)(j.K,{children:"Peraturan"})}),Object(p.jsxs)(j.m,{children:[Object(p.jsx)(j.D,{type:"text",name:"peraturan",id:"peraturan",placeholder:"Masukkan peraturan yang mengatur sistem penggajian",onChange:r,onBlur:o,value:t.peraturan,className:i.peraturan&&c.peraturan?"is-invalid":null}),i.peraturan&&c.peraturan&&Object(p.jsx)("div",{className:"invalid-feedback",children:i.peraturan})]})]})]}),Object(p.jsxs)(j.O,{children:[Object(p.jsx)(j.f,{type:"submit",color:"primary",disabled:!!s,children:s?Object(p.jsx)("img",{width:21,src:m.d,alt:"load-animation"}):"Simpan"})," ",Object(p.jsx)(j.f,{type:"button",color:"secondary",onClick:function(){return n(!e)},children:"Batal"})]})]})}})})},S=function(a,e,n){e(!0),h.a.get("admin/pegawai/".concat(a,"/kgb")).then((function(a){console.log(a.data),n(a.data.data),e(!1)})).catch((function(a){console.log(a.response.data),e(!1)}))},D=n(650),B=n(738),G=function(a){window.open("".concat(localStorage.baseURL,"print-kgb-pegawai/").concat(a),"_blank")},M=n(640),K=s()(o.a);e.default=function(a){var e=a.match.params,n=Object(c.useState)(!1),r=Object(i.a)(n,2),o=r[0],l=r[1],s=Object(c.useState)([]),d=Object(i.a)(s,2),k=d[0],b=d[1],_=Object(c.useState)(""),w=Object(i.a)(_,2),N=w[0],T=w[1],R=Object(c.useState)(!1),P=Object(i.a)(R,2),E=P[0],L=P[1],A=Object(g.g)(),q=Object(c.useState)({modal:!1,id:null}),H=Object(i.a)(q,2),I=H[0],U=H[1];Object(c.useEffect)((function(){return Object(D.a)(e.id,T),S(e.id,L,b),function(){T(""),b([])}}),[e]);var F=[{name:"No",selector:"no",sortable:!0,wrap:!0,width:"100px"},{name:"TMT. Kenaikan Gaji",selector:"tmt_kenaikan_gaji",sortable:!0,wrap:!0,cell:function(a){return Object(p.jsx)("div",{children:Object(B.a)(new Date(a.tmt_kenaikan_gaji),"dd/MM/y")})}},{name:"Gaji P. Lama",selector:"gaji_pokok_lama",sortable:!0,wrap:!0,cell:function(a){return Object(p.jsx)("div",{children:a.gaji_pokok_lama.toLocaleString("id",{style:"currency",currency:"IDR"})})}},{name:"Gaji P. Baru",selector:"gaji_pokok_baru",sortable:!0,wrap:!0,cell:function(a){return Object(p.jsx)("div",{children:a.gaji_pokok_baru.toLocaleString("id",{style:"currency",currency:"IDR"})})}},{name:"Kenaikan Gaji YAD",selector:"kenaikan_gaji_yad",sortable:!0,wrap:!0,cell:function(a){return Object(p.jsx)("div",{children:Object(B.a)(new Date(a.kenaikan_gaji_yad),"dd/MM/y")})}},{name:"Status",selector:"status",sortable:!0,wrap:!0,cell:function(a){var e=(new Date).getTime(),n=new Date(a.tmt_kenaikan_gaji).getTime(),t=new Date(a.kenaikan_gaji_yad).getTime(),i=!1;return i=e<n?"akan-aktif":e<=t?"aktif":"tidak-aktif",Object(p.jsxs)("div",{children:["akan-aktif"===i&&Object(p.jsx)(j.b,{className:"py-2 px-3",color:"dark",shape:"pill",children:"KGB Belum Aktif"}),"aktif"===i&&Object(p.jsx)(j.b,{className:"py-2 px-3",color:"success",shape:"pill",children:"KGB Aktif"}),"tidak-aktif"===i&&Object(p.jsx)(j.b,{className:"py-2 px-3",color:"warning",shape:"pill",children:"KGB Kadaluarsa"})]})}},{name:"Action",sortable:!0,cell:function(a){var e=(new Date).getTime(),n=new Date(a.tmt_kenaikan_gaji).getTime(),i=new Date(a.kenaikan_gaji_yad).getTime(),c=!1;return c=!(e<n)&&e<=i,Object(p.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(p.jsx)(j.f,{className:"mr-1",color:"info",disabled:!c,children:Object(p.jsx)(x.a,{content:f.a})}),Object(p.jsx)(j.f,{color:"warning",onClick:function(){U(Object(t.a)(Object(t.a)({},I),{},{modal:!I.modal,id:a.id_kgb}))},className:"text-white mr-1",children:Object(p.jsx)(x.a,{content:y.a})}),Object(p.jsx)(j.f,{color:"danger",onClick:function(){return W(a.id_kgb)},children:Object(p.jsx)(x.a,{content:v.a})})]})}}],z={headCells:{style:{fontSize:"1em"}}},W=function(a){K.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(n){n.isConfirmed&&(!function(a,e,n,t){h.a.delete("admin/pegawai/".concat(a,"/kgb/").concat(e)).then((function(e){S(a,n,t),console.log(e.data)})).catch((function(a){console.log(a.response.data)}))}(e.id,a,L,b),K.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},Y=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"100%"},children:[Object(p.jsx)(j.f,{color:"primary",className:"btn btn-md",onClick:function(){return l(!o)},children:"Perbarui Gaji"}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)(j.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return G(e.id)},children:["PDF ",Object(p.jsx)(x.a,{content:f.a})]}),Object(p.jsxs)(j.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(M.a)("kgb-pegawai/"+e.id)},children:["Excel ",Object(p.jsx)(x.a,{content:f.a})]})]})]}),Object(p.jsx)("div",{className:"mx-auto",children:Object(p.jsx)("h3",{className:"font-weight-normal text-center",children:"Riwayat KGB Pegawai"})})]})},J=function(a){var e=a.data;return Object(p.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(p.jsxs)(j.W,{className:"mb-1",children:[Object(p.jsx)(j.m,{md:"2",children:Object(p.jsx)("strong",{children:"Tgl. Pembuatan KGB"})}),Object(p.jsx)(j.m,{children:Object(B.a)(new Date(e.created_at),"dd/MM/y")})]}),Object(p.jsxs)(j.W,{className:"mb-1",children:[Object(p.jsx)(j.m,{md:"2",children:Object(p.jsx)("strong",{children:"Peraturan"})}),Object(p.jsx)(j.m,{children:e.peraturan})]})]})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(j.h,{children:[Object(p.jsxs)(j.l,{className:"d-flex justify-content-between my-card-header",children:[Object(p.jsxs)("div",{className:"title mb-2",children:[Object(p.jsx)("h3",{children:"Daftar Kenaikan Gaji Berkala"}),Object(p.jsx)("h5",{className:"font-weight-normal",children:N.nama})]}),Object(p.jsx)(j.f,{color:"warning",className:"text-white",style:{height:"40px",width:"100px"},onClick:function(){A.push("/epekerja/admin/kgb")},children:"Kembali"})]}),Object(p.jsx)(j.i,{children:k.length>0?Object(p.jsx)(u.a,{columns:F,data:k,noHeader:!0,responsive:!0,customStyles:z,pagination:!0,subHeader:!0,subHeaderComponent:Object(p.jsx)(Y,{}),highlightOnHover:!0,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:J}):E?Object(p.jsx)("div",{children:Object(p.jsx)(j.W,{children:Object(p.jsx)(j.m,{className:"text-center",children:Object(p.jsx)("img",{className:"mt-4 ml-3",width:30,src:m.c,alt:"load-animation"})})})}):Object(p.jsx)(u.a,{columns:F,data:k,noHeader:!0,responsive:!0,customStyles:z,pagination:!0,subHeader:!0,subHeaderComponent:Object(p.jsx)(Y,{}),highlightOnHover:!0,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:J})})]}),Object(p.jsxs)(j.M,{show:o,onClose:function(){return l(!o)},size:"lg",children:[Object(p.jsx)(j.P,{closeButton:!0,children:Object(p.jsx)(j.Q,{children:"Perbarui Gaji"})}),Object(p.jsx)(C,{modalTambah:o,setModalTambah:l,id_pegawai:e.id})]}),Object(p.jsxs)(j.M,{show:I.modal,onClose:function(){U(Object(t.a)(Object(t.a)({},I),{},{modal:!I.modal,id:null}))},size:"lg",children:[Object(p.jsx)(j.P,{closeButton:!0,children:Object(p.jsx)(j.Q,{children:"Edit Histori Gaji"})}),Object(p.jsx)(O,{id_kgb:I.id,id_pegawai:e.id,modalEdit:I,setModalEdit:U})]})]})}}}]);
//# sourceMappingURL=46.6a33713c.chunk.js.map