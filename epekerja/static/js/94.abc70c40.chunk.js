(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[94],{1054:function(e,t,c){"use strict";c.r(t);var a=c(10),s=c(1),i=c(628),r=c(630),l=c(20),n=c(626),o=c(646),d=c(17);t.default=function(e){var t=e.match.params,c=Object(l.g)(),j=Object(s.useState)(""),h=Object(a.a)(j,2),m=h[0],b=h[1];Object(s.useEffect)((function(){var e,c;e=t.id,c=b,n.a.get("admin/users/".concat(e)).then((function(e){c(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}),[t]);return Object(d.jsx)("div",{children:Object(d.jsxs)(i.h,{children:[Object(d.jsxs)(i.l,{className:"d-flex justify-content-between",children:[Object(d.jsx)("h3",{children:"Detail User"}),Object(d.jsx)(i.f,{color:"warning",className:"text-white",onClick:function(){c.goBack()},children:"Kembali"})]}),Object(d.jsx)(i.i,{children:m?Object(d.jsx)(i.W,{children:Object(d.jsx)(i.m,{md:"6",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{height:200,className:"card-img-top",src:r.a,style:{objectFit:"cover"},alt:"bg-profil"}),Object(d.jsx)("img",{src:m?Object(o.b)(m.foto_profil):"",alt:"foto-profil",className:"rounded-circle mx-auto shadow",height:200,width:200,style:{objectFit:"cover",marginTop:"-100px",border:"10px solid white"}}),Object(d.jsxs)("div",{className:"card-body text-center mt-3",children:[Object(d.jsxs)("h5",{className:"card-title",children:["(",1===m.level?"Administrator":"User",")"]}),Object(d.jsx)("h5",{className:"card-title",children:m.name}),Object(d.jsx)("h5",{className:"text-muted font-weight-normal",children:m.username})]})]})})}):Object(d.jsx)("div",{children:Object(d.jsx)(i.W,{children:Object(d.jsx)(i.m,{className:"text-center",children:Object(d.jsx)("img",{className:"mt-4 ml-3",width:30,src:r.c,alt:"load-animation"})})})})})]})})}}}]);
//# sourceMappingURL=94.abc70c40.chunk.js.map