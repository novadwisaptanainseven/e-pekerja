(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[54],{666:function(e,t,n){"use strict";t.a=function(e){var t=e.split("/"),n=t[t.length-1];return"".concat(localStorage.baseURL,"dok_penghargaan/").concat(n)}},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(626),c=function(e,t){a.a.get("admin/penghargaan/".concat(e)).then((function(e){t(e.data.data),console.log(e.data)})).catch((function(e){console.log(e.response.data)}))}},985:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(1),r=n(628),i=n(20),s=n(735),j=n(738),l=n(666),d=n(17);t.default=function(e){var t=e.match.params,n=Object(i.g)(),o=Object(c.useState)(""),h=Object(a.a)(o,2),b=h[0],g=h[1];Object(c.useEffect)((function(){Object(s.a)(t.id,g)}),[t]);var O=function(e){var t=e.dokumentasi,n=t.split("/"),a=n[n.length-1],c=a.split("."),r=c[c.length-1];return Object(d.jsx)(d.Fragment,{children:["jpg","jpeg","png"].includes(r.toLowerCase())?Object(d.jsx)("img",{src:Object(l.a)(t),alt:"dokumentasi-penghargaan",style:{width:"100%"}}):Object(d.jsx)("a",{href:Object(l.a)(t),target:"_blank",rel:"noreferrer",children:a})})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.h,{children:[Object(d.jsxs)(r.l,{className:"d-flex justify-content-between",children:[Object(d.jsx)("h3",{children:"Detail Penghargaan"}),Object(d.jsx)(r.f,{type:"button",color:"warning",className:"text-white",onClick:function(){n.goBack()},children:"Kembali"})]}),Object(d.jsx)(r.w,{className:"form-horizontal",children:Object(d.jsx)(r.i,{children:Object(d.jsx)("table",{className:"table table-striped table-borderless",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Nama Penerima"}),Object(d.jsx)("td",{children:b?b.nama:"Loading..."})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Nama Penghargaan"}),Object(d.jsx)("td",{children:b?b.nama_penghargaan:"Loading..."})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Pemberi"}),Object(d.jsx)("td",{children:b?b.pemberi:"Loading..."})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Tgl. Penghargaan"}),Object(d.jsx)("td",{children:b?Object(j.a)(new Date(b.tgl_penghargaan),"dd/MM/yyyy"):"Loading..."})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Dokumentasi"}),Object(d.jsx)("td",{children:b?Object(d.jsx)(O,{dokumentasi:b.dokumentasi}):"Loading..."})]})]})})})})]})})}}}]);
//# sourceMappingURL=54.bf2debe1.chunk.js.map