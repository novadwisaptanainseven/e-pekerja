(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{1021:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(10),c=t(1),i=t.n(c),o=t(628),s=t(641),l=t.n(s),d=t(20),u=t(639),j=t(662),b=t(653),h=t(587),p=t(630),m=t(163),g=t(632),f=t.n(g),x=t(633),O=t.n(x),y=t(40),w=t(626),C=function(e){e({type:y.LOADING}),w.a.get("admin/penghargaan").then((function(n){e({type:y.SUCCESS,payload:n.data.data}),console.log(n.data)})).catch((function(n){e({type:y.ERROR,payload:n.response.data.message}),console.log(n.response.data)}))},k=t(738),v=t(664),N=t(645),P=t(17),S=O()(f.a);n.default=function(){var e=Object(d.g)(),n=Object(c.useContext)(m.a),t=n.penghargaanState,s=n.penghargaanDispatch,g=t.data,f=t.loading,x=Object(c.useState)({modal:!1,image:null}),O=Object(r.a)(x,2),y=O[0],A=O[1];Object(c.useEffect)((function(){C(s)}),[s]);var M=Object(c.useState)(""),R=Object(r.a)(M,2),H=R[0],L=R[1],_=Object(c.useState)(!1),B=Object(r.a)(_,2),D=B[0],F=B[1],T=[{name:"No",selector:"no",sortable:!0,width:"50px"},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Nama Penghargaan",selector:"nama_penghargaan",sortable:!0,wrap:!0},{maxWidth:"150px",name:"Action",sortable:!0,cell:function(e){return Object(P.jsx)("div",{"data-tag":"allowRowEvents",children:Object(P.jsxs)(o.g,{children:[Object(P.jsx)(o.f,{color:"info",className:"btn btn-sm",onClick:function(){return E(e.id_penghargaan)},children:Object(P.jsx)(u.a,{content:j.a,color:"white"})}),Object(P.jsx)(o.f,{color:"success",className:"btn btn-sm",onClick:function(){return z(e.id_penghargaan)},children:Object(P.jsx)(u.a,{content:b.a,color:"white"})}),Object(P.jsx)(o.f,{color:"danger",className:"btn btn-sm",onClick:function(){return J(e.id_penghargaan)},children:Object(P.jsx)(u.a,{content:h.a,color:"white"})})]})})}}],Z={headCells:{style:{fontSize:"1.15em"}}},W=i.a.useMemo((function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(N.a,{onFilter:function(e){return L(e.target.value)},onClear:function(){H&&(F(!D),L(""))},filterText:H})})}),[H,D]),z=function(n){e.push("/epekerja/admin/penghargaan/edit/".concat(n))},E=function(n){e.push("/epekerja/admin/penghargaan/detail/".concat(n))},J=function(e){S.fire({icon:"warning",title:"Anda yakin ingin menghapus data ini ?",text:"Jika yakin, klik YA",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YA"}).then((function(n){n.isConfirmed&&(!function(e,n){w.a.delete("admin/penghargaan/".concat(e)).then((function(e){console.log(e.data),C(n)})).catch((function(e){console.log(e.response.data)}))}(e,s),S.fire({icon:"success",title:"Terhapus",text:"Data berhasil dihapus"}))}))},I=g.filter((function(e){return!(!e.nama||!e.nama_penghargaan||!e.nama.toLowerCase().includes(H.toLowerCase())&&!e.nama_penghargaan.toLowerCase().includes(H.toLowerCase()))})),U=function(e){var n=e.data,t=n.dokumentasi.split("/"),r=t[t.length-1],c=r.split("."),i=c[c.length-1];return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(P.jsxs)(o.W,{className:"mb-1",children:[Object(P.jsx)(o.m,{md:"3",children:Object(P.jsx)("strong",{children:"Pemberi"})}),Object(P.jsx)(o.m,{children:n.pemberi})]}),Object(P.jsxs)(o.W,{className:"mb-1",children:[Object(P.jsx)(o.m,{md:"3",children:Object(P.jsx)("strong",{children:"Tgl. Penghargaan"})}),Object(P.jsx)(o.m,{children:Object(k.a)(new Date(n.tgl_penghargaan),"dd/MM/yyyy")})]}),Object(P.jsxs)(o.W,{className:"mb-1",children:[Object(P.jsx)(o.m,{md:"3",children:Object(P.jsx)("strong",{children:"Dokumentasi"})}),Object(P.jsx)(o.m,{children:["jpg","jpeg","png"].includes(i.toLowerCase())?Object(P.jsx)("img",{width:200,style:{cursor:"pointer"},onClick:function(){return e=n.dokumentasi,void A(Object(a.a)(Object(a.a)({},y),{},{modal:!y.modal,image:e}));var e},src:Object(v.a)(n.dokumentasi),alt:"dokumentasi-penghargaan"}):Object(P.jsx)("a",{href:Object(v.a)(n.dokumentasi),target:"_blank",rel:"noreferrer",children:r})})]})]})})};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(o.h,{children:[Object(P.jsx)(o.l,{children:Object(P.jsx)("h3",{children:"Penghargaan"})}),Object(P.jsxs)(o.i,{children:[Object(P.jsx)(o.f,{type:"button",color:"primary",onClick:function(n){e.push("/epekerja/admin/penghargaan/tambah")},children:"Tambah Penghargaan"}),g.length>0?Object(P.jsx)(l.a,{columns:T,data:I,noHeader:!0,responsive:!0,customStyles:Z,pagination:!0,paginationResetDefaultPage:D,subHeader:!0,subHeaderComponent:W,expandableRows:!0,expandableRowsComponent:Object(P.jsx)(U,{}),expandOnRowClicked:!0,highlightOnHover:!0}):f?Object(P.jsx)("div",{children:Object(P.jsx)(o.W,{children:Object(P.jsx)(o.m,{className:"text-center",children:Object(P.jsx)("img",{className:"mt-4 ml-3",width:30,src:p.c,alt:"load-animation"})})})}):Object(P.jsx)(l.a,{columns:T,data:I,noHeader:!0,responsive:!0,customStyles:Z})]})]}),Object(P.jsxs)(o.M,{show:y.modal,onClose:function(){return A(Object(a.a)(Object(a.a)({},y),{},{modal:!y.modal,image:null}))},size:"lg",children:[Object(P.jsx)(o.P,{closeButton:!0,children:Object(P.jsx)(o.Q,{children:"Preview"})}),Object(P.jsx)(o.N,{children:y.image&&Object(P.jsx)("img",{style:{width:"100%"},src:Object(v.a)(y.image),alt:"dokumentasi-penghargaan"})})]})]})}},638:function(e,n,t){"use strict";function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",(function(){return a}))},644:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},645:function(e,n,t){"use strict";t(1);var a,r,c=t(638),i=t(643),o=i.default.button(a||(a=Object(c.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),s=i.default.input(r||(r=Object(c.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),l=t(17);n.a=function(e){var n=e.filterText,t=e.onFilter,a=e.onClear;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:n,onChange:t}),Object(l.jsx)(o,{type:"button",onClick:a,children:"Reset"})]})}},653:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},662:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=["512 512","<rect width='34.924' height='34.924' x='256' y='95.998' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M16,496H496V16H16ZM48,48H464V464H48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M285.313,359.032a18.123,18.123,0,0,1-15.6,8.966,18.061,18.061,0,0,1-17.327-23.157l35.67-121.277A49.577,49.577,0,0,0,194.7,190.572l-11.718,28.234,29.557,12.266,11.718-28.235a17.577,17.577,0,0,1,33.1,11.7l-35.67,121.277A50.061,50.061,0,0,0,269.709,400a50.227,50.227,0,0,0,43.25-24.853l15.1-25.913-27.646-16.115Z' class='ci-primary'/>"]},664:function(e,n,t){"use strict";n.a=function(e){var n=e.split("/"),t=n[n.length-1];return"".concat(localStorage.baseURL,"dok_penghargaan/").concat(t)}}}]);
//# sourceMappingURL=32.3b3508d3.chunk.js.map