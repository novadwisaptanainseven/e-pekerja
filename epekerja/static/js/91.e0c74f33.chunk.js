(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[91],{1024:function(a,e,t){"use strict";t.r(e);var n=t(9),i=t(628),s=t(635),c=t(1),r=t(20),l=t(630),u=t(626),o=t(632),d=t.n(o),j=t(633),h=t.n(j),g=t(636),b=t(17),m=h()(d.a);e.default=function(a){var e=a.match,t=Object(r.g)(),o=e.params,d=Object(c.useState)(!1),j=Object(n.a)(d,2),h=j[0],p=j[1],f=Object(c.useState)(null),O=Object(n.a)(f,2),k=O[0],x=O[1],w=function(){t.goBack()};Object(c.useEffect)((function(){return function(a,e){u.a.get("admin/master-data/status-pegawai/".concat(a)).then((function(a){e(a.data.data),console.log(a.data)})).catch((function(a){console.log(a.response.data)}))}(o.id,x),function(){return x(null)}}),[o]);var v={status_pegawai:k?k.status_pegawai:"",keterangan:k?k.keterangan:""},_=Object(c.useCallback)((function(){m.fire({icon:"success",title:"Edit Data Berhasil",showConfirmButton:!1,timer:1500}).then((function(a){t.push("/epekerja/admin/master-data/status-pegawai")}))}),[t]),S=Object(c.useCallback)((function(a){var e="";for(var t in a)e+="".concat(a[t],", ");m.fire({icon:"error",title:"Tambah Data Gagal",text:e}).then((function(a){p(!1)}))}),[]),C=g.c().shape({status_pegawai:g.e().required("Status pegawai harus diisi!"),keterangan:g.e().required("Keterangan harus diisi")}),B=function(a){!function(a,e,t,n,i){t(!0),u.a.put("admin/master-data/status-pegawai/".concat(a),e).then((function(a){console.log(a.data),t(!1),n()})).catch((function(a){console.log(a.response.data),i()}))}(o.id,a,p,_,S)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.h,{children:[Object(b.jsx)(i.l,{children:Object(b.jsx)("h3",{children:"Ubah Data Status Pegawai"})}),Object(b.jsx)(s.a,{initialValues:v,validationSchema:C,enableReinitialize:!0,onSubmit:function(a){return B(a)},children:function(a){var e=a.values,t=a.errors,n=a.touched,s=a.handleChange,c=a.handleBlur,r=a.handleSubmit;return Object(b.jsxs)(i.w,{onSubmit:r,children:[Object(b.jsx)(i.i,{children:Object(b.jsx)(i.W,{children:Object(b.jsxs)(i.m,{xs:"12",md:"6",children:[Object(b.jsxs)(i.x,{children:[Object(b.jsx)(i.K,{htmlFor:"name",children:"Status Pegawai"}),Object(b.jsx)(i.D,{id:"status_pegawai",name:"status_pegawai",placeholder:"Masukkan status pegawai",onChange:s,onBlur:c,value:e.status_pegawai,className:t.status_pegawai&&n.status_pegawai?"is-invalid":null}),t.status_pegawai&&n.status_pegawai&&Object(b.jsx)("div",{className:"invalid-feedback",children:t.status_pegawai})]}),Object(b.jsxs)(i.x,{children:[Object(b.jsx)(i.K,{htmlFor:"name",children:"Keterangan"}),Object(b.jsx)(i.D,{id:"keterangan",name:"keterangan",placeholder:"Masukkan keterangan",onChange:s,onBlur:c,value:e.keterangan,className:t.keterangan&&n.keterangan?"is-invalid":null}),t.keterangan&&n.keterangan&&Object(b.jsx)("div",{className:"invalid-feedback",children:t.keterangan})]})]})})}),Object(b.jsxs)(i.j,{children:[Object(b.jsx)(i.f,{type:"submit",color:"primary",className:"mr-1",disabled:!!h,children:h?Object(b.jsx)("img",{width:21,src:l.d,alt:"load-animation"}):"Simpan"}),Object(b.jsx)(i.f,{type:"button",color:"danger",onClick:w,children:"Kembali"})]})]})}})]})})}}}]);
//# sourceMappingURL=91.e0c74f33.chunk.js.map