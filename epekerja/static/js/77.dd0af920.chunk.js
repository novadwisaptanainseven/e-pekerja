(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[77],{1058:function(e,a,n){"use strict";n.r(a);var t=n(641),i=n(9),r=n(1),s=n(632),c=n.n(s),o=n(633),l=n.n(o),u=n(636),d=n(628),m=n(20),f=n(163),j=n(645),p=n(635),h=n(630),b=n(626),O=n(17),x=l()(c.a);a.default=function(e){var a=e.match.params,n=Object(m.g)(),s=Object(r.useState)(!1),c=Object(i.a)(s,2),o=c[0],l=c[1],g=Object(r.useState)(),v=Object(i.a)(g,2),k=v[0],y=v[1],_=Object(r.useState)(),N=Object(i.a)(_,2),w=N[0],S=N[1],B=Object(r.useContext)(f.a),C=B.userState,E=B.userDispatch,U=C.data;Object(r.useEffect)((function(){if(k){var e=URL.createObjectURL(k);return S(e),function(){return URL.revokeObjectURL(e)}}S(U?Object(j.d)(U.foto_profil):"")}),[k,U]);var R={name:U?U.name:"",username:U?U.username:"",password:U?U.password:"",foto_profil:void 0},D=function(){x.fire({icon:"success",title:"Edit Akun Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){n.push("/epekerja/admin/akun")}))},K=function(e){var a="";for(var n in e)a+="".concat(e[n],", ");x.fire({icon:"error",title:"Edit Akun Gagal",text:a}).then((function(e){l(!1)}))},A=["image/jpg","image/jpeg","image/png"],F=u.c().shape({name:u.e().required("Nama harus diisi"),username:u.e().required("Username harus diisi"),foto_profil:u.a().test("size","Kapasitas file maksimal 2 mb",(function(e){return!e||e&&e.size<=2048e3})).test("type","Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",(function(e){return!e||e&&A.includes(e.type)}))}),L=function(e){var n=new FormData;n.append("name",e.name),n.append("username",e.username),e.foto_profil&&n.append("foto_profil",e.foto_profil);var i,r=Object(t.a)(n.entries());try{for(r.s();!(i=r.n()).done;){var s=i.value;console.log(s)}}catch(c){r.e(c)}finally{r.f()}!function(e,a,n,t,i,r){n(!0),b.a.post("admin/users/".concat(e),a,{header:{"Content-Type":"multipart/form-data; boundary=".concat(a._boundary)}}).then((function(e){console.log(e.data),r({type:"SAVE_USER",payload:e.data.edited_data}),n(!1),t()})).catch((function(e){console.log(e.response.data),i(e.response.data.errors)}))}(a.id,n,l,D,K,E)};return Object(O.jsx)("div",{children:Object(O.jsxs)(d.h,{children:[Object(O.jsxs)(d.l,{className:"d-flex justify-content-between",children:[Object(O.jsx)("h3",{children:"Edit Akun"}),Object(O.jsx)(d.f,{color:"warning",className:"text-white",onClick:function(){n.goBack()},children:"Kembali"})]}),Object(O.jsx)(p.a,{initialValues:R,enableReinitialize:!0,validationSchema:F,onSubmit:function(e){return L(e)},children:function(e){var a=e.values,n=e.errors,t=e.touched,i=e.handleChange,r=e.handleBlur,s=e.handleSubmit,c=e.setFieldValue;return Object(O.jsxs)(d.w,{onSubmit:s,children:[Object(O.jsx)(d.i,{children:Object(O.jsx)(d.W,{children:Object(O.jsxs)(d.m,{md:"6",children:[Object(O.jsxs)(d.x,{children:[Object(O.jsx)(d.K,{children:"Nama"}),Object(O.jsx)(d.D,{type:"text",id:"name",name:"name",placeholder:"Masukkan nama user administrator",onChange:i,onBlur:r,value:a.name||"",className:n.name&&t.name?"is-invalid":null}),n.name&&t.name&&Object(O.jsx)("div",{className:"invalid-feedback",children:n.name})]}),Object(O.jsxs)(d.x,{children:[Object(O.jsx)(d.K,{children:"Username"}),Object(O.jsx)(d.D,{type:"text",id:"username",name:"username",placeholder:"Masukkan username",onChange:i,onBlur:r,value:a.username||"",className:n.username&&t.username?"is-invalid":null}),n.username&&t.username&&Object(O.jsx)("div",{className:"invalid-feedback",children:n.username})]}),Object(O.jsxs)(d.x,{children:[Object(O.jsx)(d.K,{children:"Foto Profil"}),Object(O.jsx)(d.D,{type:"file",id:"foto_profil",name:"foto_profil",placeholder:"Masukkan foto profil",onChange:function(e){!function(e){e.target.files&&0!==e.target.files.length?y(e.target.files[0]):y(void 0)}(e),c("foto_profil",e.target.files[0])},onBlur:r,className:n.foto_profil&&t.foto_profil?"is-invalid":null}),n.foto_profil&&t.foto_profil&&Object(O.jsx)("div",{className:"invalid-feedback",children:n.foto_profil}),w&&Object(O.jsx)("img",{src:w,alt:w,className:"img-thumbnail mt-2 mb-1",width:200}),Object(O.jsx)(d.y,{className:"help-block",children:"File harus bertipe jpg, jpeg, atau png dengan ukuran kurang dari 2 MB"})]})]})})}),Object(O.jsx)(d.j,{children:Object(O.jsx)(d.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!o,children:o?Object(O.jsx)("img",{width:21,src:h.d,alt:"load-animation"}):"Simpan"})})]})}})]})})}}}]);
//# sourceMappingURL=77.dd0af920.chunk.js.map