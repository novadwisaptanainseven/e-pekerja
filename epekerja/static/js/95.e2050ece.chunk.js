(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[95],{1023:function(e,a,n){"use strict";n.r(a);var t=n(642),i=n(10),r=n(1),s=n(632),c=n.n(s),o=n(633),l=n.n(o),u=n(637),d=n(628),m=n(20),f=n(163),j=n(646),p=n(636),b=n(630),h=n(626),O=n(17),x=l()(c.a);a.default=function(e){e.match;var a=Object(m.g)(),n=Object(r.useState)(!1),s=Object(i.a)(n,2),c=s[0],o=s[1],l=Object(r.useState)(),g=Object(i.a)(l,2),v=g[0],k=g[1],y=Object(r.useState)(),_=Object(i.a)(y,2),N=_[0],w=_[1],S=Object(r.useContext)(f.a),B=S.userState,C=S.userDispatch,E=B.data;Object(r.useEffect)((function(){if(v){var e=URL.createObjectURL(v);return w(e),function(){return URL.revokeObjectURL(e)}}w(E?Object(j.b)(E.foto_profil):"")}),[v,E]);var U={name:E?E.name:"",username:E?E.username:"",password:E?E.password:"",foto_profil:void 0},R=function(){x.fire({icon:"success",title:"Edit Akun Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){a.push("/epekerja/user/akun")}))},D=function(e){var a="";for(var n in e)a+="".concat(e[n],", ");x.fire({icon:"error",title:"Edit Akun Gagal",text:a}).then((function(e){o(!1)}))},K=["image/jpg","image/jpeg","image/png"],A=u.c().shape({name:u.e().required("Nama harus diisi"),username:u.e().required("Username harus diisi"),foto_profil:u.a().test("size","Kapasitas file maksimal 2 mb",(function(e){return!e||e&&e.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",(function(e){return!e||e&&K.includes(e.type)}))}),F=function(e){var a=new FormData;a.append("name",e.name),a.append("username",e.username),e.foto_profil&&a.append("foto_profil",e.foto_profil);var n,i=Object(t.a)(a.entries());try{for(i.s();!(n=i.n()).done;){var r=n.value;console.log(r)}}catch(s){i.e(s)}finally{i.f()}!function(e,a,n,t,i){a(!0),h.a.post("user/akun",e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(e){console.log(e.data),i({type:"SAVE_USER",payload:e.data.edited_data}),a(!1),n()})).catch((function(e){console.log(e.response.data),t(e.response.data.errors)}))}(a,o,R,D,C)};return Object(O.jsx)("div",{children:Object(O.jsxs)(d.h,{children:[Object(O.jsxs)(d.l,{className:"d-flex justify-content-between",children:[Object(O.jsx)("h3",{children:"Edit Akun"}),Object(O.jsx)(d.f,{color:"warning",className:"text-white",onClick:function(){a.goBack()},children:"Kembali"})]}),Object(O.jsx)(p.a,{initialValues:U,enableReinitialize:!0,validationSchema:A,onSubmit:function(e){return F(e)},children:function(e){var a=e.values,n=e.errors,t=e.touched,i=e.handleChange,r=e.handleBlur,s=e.handleSubmit,o=e.setFieldValue;return Object(O.jsxs)(d.w,{onSubmit:s,children:[Object(O.jsx)(d.i,{children:Object(O.jsx)(d.W,{children:Object(O.jsxs)(d.m,{md:"6",children:[Object(O.jsxs)(d.x,{children:[Object(O.jsx)(d.K,{children:"Nama"}),Object(O.jsx)(d.D,{type:"text",id:"name",name:"name",placeholder:"Masukkan nama user administrator",onChange:i,onBlur:r,value:a.name||"",className:n.name&&t.name?"is-invalid":null}),n.name&&t.name&&Object(O.jsx)("div",{className:"invalid-feedback",children:n.name})]}),Object(O.jsxs)(d.x,{children:[Object(O.jsx)(d.K,{children:"Username"}),Object(O.jsx)(d.D,{type:"text",id:"username",name:"username",placeholder:"Masukkan username",onChange:i,onBlur:r,value:a.username||"",className:n.username&&t.username?"is-invalid":null}),n.username&&t.username&&Object(O.jsx)("div",{className:"invalid-feedback",children:n.username})]}),Object(O.jsxs)(d.x,{children:[Object(O.jsx)(d.K,{children:"Foto Profil"}),Object(O.jsx)(d.D,{type:"file",id:"foto_profil",name:"foto_profil",placeholder:"Masukkan foto profil",onChange:function(e){!function(e){e.target.files&&0!==e.target.files.length?k(e.target.files[0]):k(void 0)}(e),o("foto_profil",e.target.files[0])},onBlur:r,className:n.foto_profil&&t.foto_profil?"is-invalid":null}),n.foto_profil&&t.foto_profil&&Object(O.jsx)("div",{className:"invalid-feedback",children:n.foto_profil}),N&&Object(O.jsx)("img",{src:N,alt:N,className:"img-thumbnail mt-2 mb-1",width:200}),Object(O.jsx)(d.y,{className:"help-block",children:"File harus bertipe jpg, jpeg, atau png dengan ukuran kurang dari 2 MB"})]})]})})}),Object(O.jsx)(d.j,{children:Object(O.jsx)(d.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!c,children:c?Object(O.jsx)("img",{width:21,src:b.d,alt:"load-animation"}):"Simpan"})})]})}})]})})}}}]);
//# sourceMappingURL=95.e2050ece.chunk.js.map