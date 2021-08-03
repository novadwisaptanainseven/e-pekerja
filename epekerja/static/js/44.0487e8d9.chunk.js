(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[44],{1055:function(e,t,n){"use strict";n.r(t);var r,a,c=n(9),o=n(638),i=n(1),s=n.n(i),l=n(628),d=n(640),u=n.n(d),p=n(642),b=n(20),j=n(639),h=n(667),m=n(654),f=n(630),x=n(163),O=n(40),g=n(626),v=n(645),y=n(17),w=p.default.input(r||(r=Object(o.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),C=p.default.button(a||(a=Object(o.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),k=function(e){var t=e.filterText,n=e.onFilter,r=e.onClear;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:n}),Object(y.jsx)(C,{type:"button",onClick:r,children:"Reset"})]})};t.default=function(){var e=Object(b.g)(),t=Object(i.useState)(""),n=Object(c.a)(t,2),r=n[0],a=n[1],o=Object(i.useState)(!1),d=Object(c.a)(o,2),p=d[0],w=d[1],C=Object(i.useContext)(x.a),S=C.usersState,A=C.usersDispatch,H=S.data,R=S.loading;Object(i.useEffect)((function(){var e;(e=A)({type:O.LOADING}),g.a.get("admin/users").then((function(t){console.log(t.data),e({type:O.SUCCESS,payload:t.data.data})})).catch((function(t){console.log(t.response.data),e({type:O.ERROR,payload:t.response.data})}))}),[A]);var L=H.filter((function(e){return!(!e.name||!e.username||!e.name.toLowerCase().includes(r.toLowerCase())&&!e.username.toLowerCase().includes(r.toLowerCase()))})),N=[{name:"No",selector:"no",sortable:!0,width:"50px"},{name:"Nama",selector:"name",sortable:!0,wrap:!0},{name:"Username",selector:"username",sortable:!0,wrap:!0},{name:"Level",selector:"level",sortable:!0,wrap:!0,cell:function(e){return 1===e.level?"Administrator":"User"}},{maxWidth:"150px",name:"Action",sortable:!0,cell:function(e){return Object(y.jsx)("div",{"data-tag":"allowRowEvents",children:Object(y.jsxs)(l.g,{children:[Object(y.jsx)(l.f,{color:"info",className:"btn btn-sm",onClick:parseInt(localStorage.id_user)===e.id?function(){return Z()}:function(){return D(e.id)},children:Object(y.jsx)(j.a,{content:h.a,color:"white"})}),parseInt(localStorage.id_user)===e.id&&Object(y.jsx)(l.f,{disabled:1!==e.level,color:"success",className:"btn btn-sm",onClick:function(){return P(e.id)},children:Object(y.jsx)(j.a,{content:m.a,color:"white"})})]})})}}],F={headCells:{style:{fontSize:"1.15em"}}},M=s.a.useMemo((function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(k,{onFilter:function(e){return a(e.target.value)},onClear:function(){r&&(w(!p),a(""))},filterText:r})})}),[r,p]),P=function(t){e.push("/epekerja/admin/akun/edit/".concat(t))},Z=function(){e.push("/epekerja/admin/akun")},D=function(t){e.push("/epekerja/admin/users/detail/".concat(t))},E=function(e){var t=e.data;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{style:{padding:"10px 63px"},children:Object(y.jsxs)(l.W,{children:[Object(y.jsx)(l.m,{md:"2",children:Object(y.jsx)("strong",{children:"Foto Profil"})}),Object(y.jsx)(l.m,{children:Object(y.jsx)("img",{className:"img-thumbnail",width:100,src:Object(v.d)(t.foto_profil),alt:"foto-profil"})})]})})})};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(l.h,{children:[Object(y.jsx)(l.l,{children:Object(y.jsx)("h3",{children:"Data Users"})}),Object(y.jsxs)(l.i,{children:[Object(y.jsx)(l.f,{type:"button",color:"primary",onClick:function(){e.push("/epekerja/admin/users/tambah")},children:"Tambah Administrator"}),H.length>0?Object(y.jsx)(u.a,{columns:N,data:L,noHeader:!0,responsive:!0,customStyles:F,pagination:!0,paginationResetDefaultPage:p,subHeader:!0,subHeaderComponent:M,expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:Object(y.jsx)(E,{}),highlightOnHover:!0}):R?Object(y.jsx)("div",{children:Object(y.jsx)(l.W,{children:Object(y.jsx)(l.m,{className:"text-center",children:Object(y.jsx)("img",{className:"mt-4 ml-3",width:30,src:f.c,alt:"load-animation"})})})}):Object(y.jsx)(u.a,{columns:N,data:L,noHeader:!0,responsive:!0,customStyles:F,pagination:!0})]})]})})}},638:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},644:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["512 512","<rect width='34.924' height='34.924' x='256' y='95.998' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M16,496H496V16H16ZM48,48H464V464H48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M285.313,359.032a18.123,18.123,0,0,1-15.6,8.966,18.061,18.061,0,0,1-17.327-23.157l35.67-121.277A49.577,49.577,0,0,0,194.7,190.572l-11.718,28.234,29.557,12.266,11.718-28.235a17.577,17.577,0,0,1,33.1,11.7l-35.67,121.277A50.061,50.061,0,0,0,269.709,400a50.227,50.227,0,0,0,43.25-24.853l15.1-25.913-27.646-16.115Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=44.0487e8d9.chunk.js.map