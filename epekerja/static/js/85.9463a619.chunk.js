(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[85],{1018:function(a,n,t){"use strict";t.r(n);var e=t(9),c=t(1),i=t(632),r=t.n(i),s=t(633),j=t.n(s),l=t(636),b=t(635),o=t(630),d=t(628),u=t(20),m=t(626),h=t(17),f=j()(r.a);n.default=function(a){var n=a.match,t=Object(u.g)(),i=n.params,r=Object(c.useState)(!1),s=Object(e.a)(r,2),j=s[0],O=s[1],x=Object(c.useState)(null),p=Object(e.a)(x,2),v=p[0],_=p[1];Object(c.useEffect)((function(){!function(a,n){m.a.get("admin/master-data/jabatan/".concat(a)).then((function(a){n(a.data.data)})).catch((function(a){}))}(i.id,_)}),[i]);var g=function(){t.goBack()},k={nama_jabatan:v?v.nama_jabatan:""},S=function(){f.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){t.push("/epekerja/admin/master-data/jabatan")}))},w=function(a){var n="";for(var t in a)n+="".concat(a[t],", ");f.fire({icon:"error",title:"Edit Data Gagal",text:n}).then((function(a){O(!1)}))},B=l.c().shape({nama_jabatan:l.e().required("Jabatan harus diisi!")}),J=function(a){!function(a,n,t,e,c){t(!0),m.a.put("admin/master-data/jabatan/".concat(a),n).then((function(a){t(!1),e()})).catch((function(a){c(a.response.data.errors)}))}(i.id,a,O,S,w)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.h,{children:[Object(h.jsx)(d.l,{children:Object(h.jsx)("h3",{children:"Ubah Jabatan"})}),Object(h.jsx)(b.a,{initialValues:k,validationSchema:B,enableReinitialize:!0,onSubmit:function(a){return J(a)},children:function(a){var n=a.values,t=a.errors,e=a.touched,c=a.handleChange,i=a.handleBlur,r=a.handleSubmit;return Object(h.jsxs)(d.w,{onSubmit:r,children:[Object(h.jsx)(d.i,{children:Object(h.jsx)(d.W,{children:Object(h.jsx)(d.m,{xs:"12",md:"6",children:Object(h.jsxs)(d.x,{children:[Object(h.jsx)(d.K,{htmlFor:"name",children:"Jabatan"}),Object(h.jsx)(d.D,{id:"nama_jabatan",name:"nama_jabatan",placeholder:"Masukkan jabatan",onChange:c,onBlur:i,value:n.nama_jabatan,className:t.nama_jabatan&&e.nama_jabatan?"is-invalid":null}),t.nama_jabatan&&e.nama_jabatan&&Object(h.jsx)("div",{className:"invalid-feedback",children:t.nama_jabatan})]})})})}),Object(h.jsxs)(d.j,{children:[Object(h.jsx)(d.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!j,children:j?Object(h.jsx)("img",{width:21,src:o.d,alt:"load-animation"}):"Simpan"}),Object(h.jsx)(d.f,{type:"button",color:"danger",onClick:g,children:"Kembali"})]})]})}})]})})}}}]);
//# sourceMappingURL=85.9463a619.chunk.js.map