(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[100],{1045:function(e,n,a){"use strict";a.r(n);var t=a(638),r=a(9),c=a(1),i=a(631),s=a.n(i),o=a(632),u=a.n(o),l=a(635),d=a(628),j=a(20),m=a(163),h=a(634),b=a(629),f=a(626),O=a(725),x=a(17),p=u()(s.a);n.default=function(e){e.match;var n=Object(j.g)(),a=Object(c.useState)(!1),i=Object(r.a)(a,2),s=i[0],o=i[1],u=Object(c.useContext)(m.a),v=u.userState,k=u.userDispatch,g=v.data,w=Object(c.useState)(""),y=Object(r.a)(w,2),S=y[0],C=y[1],B={username:g?g.username:""},N=function(){p.fire({icon:"success",title:"Edit Akun Berhasil",showConfirmButton:!1,timer:1500}).then((function(e){window.location.href="/epekerja/user/akun"}))},E=function(e){var n="";for(var a in e)n+="".concat(e[a],", ");p.fire({icon:"error",title:"Edit Akun Gagal",text:n}).then((function(e){o(!1)}))},A=l.c().shape({username:l.e().required("Username harus diisi")}),D=function(e){var n=new FormData;n.append("username",e.username);var a,r=Object(t.a)(n.entries());try{for(r.s();!(a=r.n()).done;){var c=a.value;console.log(c)}}catch(i){r.e(i)}finally{r.f()}console.log(S),function(e,n,a,t,r,c){n(!0),f.a.post("user/akun",e,{header:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then((function(e){console.log(e.data),Object(O.a)(c,r),n(!1),a()})).catch((function(e){console.log(e.response.data),t(e.response.data.errors)}))}(n,o,N,E,k,C)};return Object(x.jsx)("div",{children:Object(x.jsxs)(d.h,{children:[Object(x.jsxs)(d.l,{className:"d-flex justify-content-between",children:[Object(x.jsx)("h3",{children:"Edit Akun"}),Object(x.jsx)(d.f,{color:"warning",className:"text-white",onClick:function(){n.goBack()},children:"Kembali"})]}),Object(x.jsx)(h.a,{initialValues:B,enableReinitialize:!0,validationSchema:A,onSubmit:function(e){return D(e)},children:function(e){var n=e.values,a=e.errors,t=e.touched,r=e.handleChange,c=e.handleBlur,i=e.handleSubmit;e.setFieldValue;return Object(x.jsxs)(d.x,{onSubmit:i,children:[Object(x.jsx)(d.i,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(d.n,{md:"6",children:Object(x.jsxs)(d.y,{children:[Object(x.jsx)(d.L,{children:"Username"}),Object(x.jsx)(d.E,{type:"text",id:"username",name:"username",placeholder:"Masukkan username",onChange:r,onBlur:c,value:n.username||"",className:a.username&&t.username?"is-invalid":null}),a.username&&t.username&&Object(x.jsx)("div",{className:"invalid-feedback",children:a.username})]})})})}),Object(x.jsx)(d.j,{children:Object(x.jsx)(d.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!s,children:s?Object(x.jsx)("img",{width:21,src:b.d,alt:"load-animation"}):"Simpan"})})]})}})]})})}}}]);
//# sourceMappingURL=100.94fb7ff9.chunk.js.map