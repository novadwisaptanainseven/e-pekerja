(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[38],{1020:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(7),c=t(571),r=t(637),s=t(627),l=t(752),o=t(1),j=t.n(o),d=t(641),b=t.n(d),u=t(20),h=t(629),g=t(646),O=function(e){var a=e.bulan||"",t=e.tahun||"";window.open("".concat(localStorage.baseURL,"print-kgb?bulan=").concat(a,"&tahun=").concat(t),"_blank")},p=t(626),x=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(!0);var n="";n=t?"admin/pegawai/kgb?bulan=".concat(t.bulan,"&tahun=").concat(t.tahun):"admin/pegawai/kgb",p.a.get(n).then((function(t){console.log(t.data),a(t.data.data),e(!1)})).catch((function(a){console.log(a.response.data),e(!1)}))},m=t(687),k=t(648),f=t(744),w=t(17),y=function(e){var a=e.modal,t=e.setModal,c=Object(o.useState)(""),j=Object(i.a)(c,2),d=j[0],b=j[1];Object(o.useEffect)((function(){var e="";return a.data&&("akan-naik-gaji"===a.data.status_kgb?e="Kepada Yth. ".concat(a.data.nama,", akan mengalami kenaikan gaji sebesar ").concat(a.data.gaji_pokok_baru.toLocaleString("id",{style:"currency",currency:"IDR"})," pada tanggal ").concat(Object(l.a)(new Date(a.data.kenaikan_gaji_yad),"dd/MM/y"),". Terimakasih"):"sedang-berjalan"===a.data.status_kgb?e="Kepada Yth. ".concat(a.data.nama,", gaji Anda telah diperbarui sebesar ").concat(a.data.gaji_pokok_baru.toLocaleString("id",{style:"currency",currency:"IDR"})," pada tanggal ").concat(Object(l.a)(new Date(a.data.tmt_kenaikan_gaji),"dd/MM/y"),". Terimakasih"):"akan-naik-gaji-2"===a.data.status_kgb&&(e="Kepada Yth. ".concat(a.data.nama,", dalam waktu dekat Anda akan mengalami kenaikan gaji sebesar ").concat(a.data.gaji_pokok_baru.toLocaleString("id",{style:"currency",currency:"IDR"})," pada tanggal ").concat(Object(l.a)(new Date(a.data.kenaikan_gaji_yad),"dd/MM/y"),". Terimakasih")),b(e)),function(){return b("")}}),[a]);return Object(w.jsx)("div",{children:Object(w.jsxs)(s.N,{show:a.modal,onClose:function(){return t(Object(n.a)(Object(n.a)({},a),{},{modal:!1}))},children:[Object(w.jsx)(s.Q,{closeButton:!0,children:"Kirim Pemberitahuan via WhatsApp"}),Object(w.jsx)(s.O,{children:a.data&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(s.y,{children:[Object(w.jsx)(s.L,{children:"No. HP"}),Object(w.jsx)(s.E,{type:"text",name:"no_hp",value:a.data.no_hp,readOnly:!0})]}),Object(w.jsxs)(s.y,{children:[Object(w.jsx)(s.L,{children:"Pesan"}),Object(w.jsx)(s.lb,{name:"pesan",rows:5,readOnly:!0,value:d})]})]})}),Object(w.jsxs)(s.P,{children:[Object(w.jsxs)(s.f,{color:"primary",onClick:function(){var e=a.data.no_hp.replace("0","62"),t=d;window.open("https://api.whatsapp.com/send?phone=".concat(e,"&text=").concat(t),"blank")},children:["Kirim ",Object(w.jsx)(r.a,{content:f.a})]}),Object(w.jsx)(s.f,{color:"secondary",onClick:function(){return t(Object(n.a)(Object(n.a)({},a),{},{modal:!1}))},children:"Tutup"})]})]})})},_=t(631),v=t.n(_),N=t(632),C=t.n(N)()(v.a);a.default=function(){var e=Object(u.g)(),a=Object(o.useState)([]),t=Object(i.a)(a,2),d=t[0],f=t[1],_=Object(o.useState)(!1),v=Object(i.a)(_,2),N=v[0],P=v[1],S=Object(o.useState)(""),M=Object(i.a)(S,2),F=M[0],D=M[1],L=Object(o.useState)(!1),B=Object(i.a)(L,2),A=B[0],G=B[1],R=Object(o.useState)({data:null,modal:!1,status:""}),K=Object(i.a)(R,2),T=K[0],E=K[1],I=Object(o.useState)({bulan:"",tahun:""}),X=Object(i.a)(I,2),Y=X[0],H=X[1];Object(o.useEffect)((function(){x(P,f)}),[]);var J=d.filter((function(e){return e.nama.toLowerCase().includes(F.toLowerCase())||e.nip.toLowerCase().includes(F.toLowerCase())})),z=[{name:"NIP",selector:"nip",sortable:!0,wrap:!0},{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Status KGB",selector:"status_kgb",sortable:!0,cell:function(e){return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{children:["sedang-berjalan"===e.status_kgb&&Object(w.jsx)(s.b,{className:"py-2 px-3",color:"success",shape:"pill",children:"Sedang Berjalan"}),"akan-naik-gaji"===e.status_kgb&&Object(w.jsx)(s.b,{className:"py-2 px-3",color:"danger",shape:"pill",children:"Akan Naik Gaji"}),"naik-gaji"===e.status_kgb&&Object(w.jsx)(s.b,{className:"py-2 px-3",color:"primary",shape:"pill",children:"Naik Gaji"}),"akan-naik-gaji-2"===e.status_kgb&&Object(w.jsx)(s.b,{className:"py-2 px-3",color:"warning",shape:"pill",children:"Akan Naik Gaji"})]})})}},{name:"Pemberitahuan",wrap:!0,width:"350px",cell:function(e){return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{children:["akan-naik-gaji"===e.status_kgb&&Object(w.jsxs)("span",{className:"text-danger font-weight-bold",children:["Pegawai ini akan naik gaji pada tanggal"," ",Object(l.a)(new Date(e.kenaikan_gaji_yad),"dd/MM/y")]}),"naik-gaji"===e.status_kgb&&Object(w.jsx)("span",{className:"text-primary font-weight-bold",children:"Pegawai ini sudah bisa dilakukan kenaikan gaji"}),"sedang-berjalan"===e.status_kgb&&1!==e.status_updated&&Object(w.jsx)("span",{className:"text-success font-weight-bold",children:"Pegawai ini telah diperbarui gajinya. Silahkan untuk update gaji pegawai di sistem"}),"sedang-berjalan"===e.status_kgb&&1===e.status_updated&&Object(w.jsx)("span",{className:"text-success font-weight-bold",children:"Gaji pegawai telah diupdate di sistem."}),"akan-naik-gaji-2"===e.status_kgb&&Object(w.jsxs)("span",{className:"text-warning font-weight-bold",children:["Pegawai ini dalam waktu dekat akan mengalami kenaikan gaji yaitu pada tanggal"," ",Object(l.a)(new Date(e.kenaikan_gaji_yad),"dd/MM/y")]})]})})}},{name:"Action",sortable:!0,cell:function(a){return Object(w.jsxs)("div",{"data-tag":"allowRowEvents",className:"my-1",children:[("akan-naik-gaji"===a.status_kgb||"akan-naik-gaji-2"===a.status_kgb)&&Object(w.jsx)(s.f,{className:"mr-1",color:"success",onClick:function(){return E(Object(n.a)(Object(n.a)({},T),{},{data:a,modal:!0}))},children:"Kirim (WA)"}),"sedang-berjalan"===a.status_kgb&&1!==a.status_updated&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.f,{className:"mr-1 mb-1 mt-1",color:"info",onClick:function(){return W(a)},children:"Update Gaji di Sistem"})," "]}),"naik-gaji"===a.status_kgb&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.f,{className:"mr-1 mb-1",color:"info",onClick:function(){return t=a.id_pegawai,void e.push("/epekerja/admin/kgb/".concat(t,"/daftar"));var t},children:"Perbarui Gaji"})," "]})]})}}],W=function(e){C.fire({title:"Gaji Pegawai di Sistem Sedang Diperbarui!",html:"Loading...",timer:1e3,timerProgressBar:!0,didOpen:function(){C.showLoading(),function(e,a,t,n){p.a.post("admin/pegawai/".concat(e,"/update-gaji"),{gaji_pokok:a.gaji_pokok_baru,id_kgb:a.id_kgb}).then((function(e){console.log(e.data),x(t,n)})).catch((function(e){console.log(e.response.data)}))}(e.id_pegawai,e,P,f)}}).then((function(a){a.dismiss===C.DismissReason.timer&&C.fire({icon:"warning",title:"Anda ingin mengirim notifikasi WA ?",showConfirmButton:!0,showCancelButton:!0,confirmButtonColor:"#1c9c25",cancelButtonColor:"#d33",confirmButtonText:"YA",cancelButtonText:"TIDAK"}).then((function(a){a.isConfirmed&&E(Object(n.a)(Object(n.a)({},T),{},{modal:!0,data:e,status:"gaji-updated"}))}))}))},q=j.a.useMemo((function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(k.a,{onFilter:function(e){return D(e.target.value)},onClear:function(){F&&(G(!A),D(""))},filterText:F}),Object(w.jsxs)(s.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return O(Y)},children:["PDF ",Object(w.jsx)(r.a,{content:c.a})]}),Object(w.jsxs)(s.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(g.a)("kgb-pegawai2",Y,"filter_bulan_tahun")},children:["Excel ",Object(w.jsx)(r.a,{content:c.a})]})]})}),[F,A,Y]),U=function(e){var a=e.data;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{style:{padding:"10px 63px"},children:[Object(w.jsxs)(s.X,{className:"mb-1",children:[Object(w.jsx)(s.n,{md:"3",children:Object(w.jsx)("strong",{children:"TMT. Kenaikan Gaji"})}),Object(w.jsx)(s.n,{children:Object(l.a)(new Date(a.tmt_kenaikan_gaji),"dd/MM/y")})]}),Object(w.jsxs)(s.X,{className:"mb-1",children:[Object(w.jsx)(s.n,{md:"3",children:Object(w.jsx)("strong",{children:"Gaji Pokok Lama"})}),Object(w.jsx)(s.n,{children:a.gaji_pokok_lama.toLocaleString("id",{style:"currency",currency:"IDR"})})]}),Object(w.jsxs)(s.X,{className:"mb-1",children:[Object(w.jsx)(s.n,{md:"3",children:Object(w.jsx)("strong",{children:"Gaji Pokok Baru"})}),Object(w.jsx)(s.n,{children:a.gaji_pokok_baru.toLocaleString("id",{style:"currency",currency:"IDR"})})]}),Object(w.jsxs)(s.X,{className:"mb-1",children:[Object(w.jsx)(s.n,{md:"3",children:Object(w.jsx)("strong",{children:"Kenaikan Gaji YAD"})}),Object(w.jsx)(s.n,{children:Object(l.a)(new Date(a.kenaikan_gaji_yad),"dd/MM/y")})]})]})})};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(s.h,{children:[Object(w.jsxs)(s.l,{className:"d-flex justify-content-between my-card-header",children:[Object(w.jsx)("div",{className:"title mb-2",children:Object(w.jsx)("h3",{children:"Semua Kenaikan Gaji Berkala Pegawai"})}),Object(w.jsx)(s.f,{color:"warning",className:"text-white",style:{height:"40px",width:"100px"},onClick:function(){e.goBack()},children:"Kembali"})]}),Object(w.jsxs)(s.i,{children:[Object(w.jsxs)(s.X,{children:[Object(w.jsx)(s.n,{md:"6",children:Object(w.jsx)(m.a,{paramsFilter:Y,setParamsFilter:H,handleResetFilter:function(){x(P,f)},handleFilterCari:function(e){e.preventDefault(),x(P,f,Y)}})}),Object(w.jsx)(s.n,{children:Object(w.jsxs)(s.a,{color:"info",children:[Object(w.jsx)("h4",{children:"Keterangan Status KGB"}),Object(w.jsx)("hr",{}),Object(w.jsxs)("table",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{valign:"top",width:"150px",children:"Sedang Berjalan"}),Object(w.jsxs)("th",{valign:"top",width:"30px",children:[" ",":"," "]}),Object(w.jsx)("td",{children:"Pegawai tersebut gajinya telah diperbarui"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{valign:"top",children:"Akan Naik Gaji"}),Object(w.jsxs)("th",{valign:"top",width:"30px",children:[" ",":"," "]}),Object(w.jsx)("td",{children:"Pegawai tersebut akan mengalami kenaikan gaji pada tanggal yang sudah ditentukan"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{valign:"top",children:"Perbarui Gaji"}),Object(w.jsxs)("th",{valign:"top",width:"30px",children:[" ",":"," "]}),Object(w.jsx)("td",{children:"Pegawai tersebut telah berada di rentang tanggal kenaikan gaji berkala, sehingga bisa dilakukan kenaikan gaji"})]})]})]})})]}),Object(w.jsx)(s.X,{children:Object(w.jsx)(s.n,{children:N?Object(w.jsx)(s.X,{children:Object(w.jsx)(s.n,{className:"text-center",children:Object(w.jsx)("img",{className:"mt-4 ml-3",width:30,src:h.d,alt:"load-animation"})})}):Object(w.jsx)(b.a,{columns:z,data:J,noHeader:!0,responsive:!0,customStyles:{headCells:{style:{fontSize:"1em"}}},pagination:!0,paginationResetDefaultPage:A,subHeader:!0,subHeaderComponent:q,expandableRows:!0,expandableRowsComponent:Object(w.jsx)(U,{}),expandOnRowClicked:!0,highlightOnHover:!0})})})]})]}),Object(w.jsx)(y,{modal:T,setModal:E})]})}},639:function(e,a,t){"use strict";function n(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}t.d(a,"a",(function(){return n}))},645:function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},648:function(e,a,t){"use strict";t(1);var n,i,c=t(639),r=t(643),s=r.default.button(n||(n=Object(c.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),l=r.default.input(i||(i=Object(c.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),o=t(17);a.a=function(e){var a=e.filterText,t=e.onFilter,n=e.onClear,i=e.titleCari,c=void 0===i?"Pencarian...":i;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{id:"search",type:"text",placeholder:c,"aria-label":"Search Input",value:a,onChange:t}),Object(o.jsx)(s,{type:"button",onClick:n,children:"Reset"})]})}},678:function(e,a,t){"use strict";var n=t(1),i=t.n(n),c=t(17),r=function(){return Object(c.jsx)(c.Fragment,{children:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"].map((function(e,a){return Object(c.jsx)("option",{value:a+1,children:e},a)}))})};a.a=i.a.memo(r)},687:function(e,a,t){"use strict";var n=t(166),i=t(2),c=t(7),r=t(627),s=t(1),l=t(678),o=t(17);a.a=function(e){var a=e.paramsFilter,t=e.setParamsFilter,j=e.handleFilterCari,d=e.handleResetFilter,b=Object(s.useState)(!1),u=Object(c.a)(b,2),h=u[0],g=u[1];return Object(o.jsxs)(r.h,{children:[Object(o.jsx)(r.l,{className:"bg-dark",children:Object(o.jsx)("h5",{className:"mb-0",children:"Filter Pencarian Berdasarkan Bulan dan Tahun"})}),Object(o.jsxs)(r.x,{children:[Object(o.jsx)(r.o,{show:h,children:Object(o.jsx)(r.i,{children:Object(o.jsxs)(r.X,{children:[Object(o.jsx)(r.n,{children:Object(o.jsxs)(r.y,{children:[Object(o.jsx)(r.L,{children:"Bulan"}),Object(o.jsxs)(r.Y,{required:!0,name:"bulan",onChange:function(e){return t(Object(i.a)(Object(i.a)({},a),{},Object(n.a)({},e.target.name,e.target.value)))},children:[Object(o.jsx)("option",{value:"",children:"-- Pilih Bulan --"}),Object(o.jsx)(l.a,{})]})]})}),Object(o.jsx)(r.n,{children:Object(o.jsxs)(r.y,{children:[Object(o.jsx)(r.L,{children:"Tahun"}),Object(o.jsx)(r.E,{required:!0,type:"number",name:"tahun",placeholder:"Masukkan Tahun, exp: ".concat((new Date).getFullYear()),onChange:function(e){return t(Object(i.a)(Object(i.a)({},a),{},Object(n.a)({},e.target.name,e.target.value)))}})]})})]})})}),Object(o.jsxs)(r.j,{className:"text-right",children:[Object(o.jsx)(r.f,{type:"submit",color:"primary",className:"mr-2",onClick:function(e){return j(e)},disabled:!a.bulan||!a.tahun,children:"Cari"}),Object(o.jsx)(r.f,{color:"warning",className:"mr-2",onClick:d,children:"Reset"}),Object(o.jsx)(r.f,{color:"secondary",onClick:function(){return g(!h)},children:h?"Tutup":"Klik untuk melihat"})]})]})]})}},744:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=38.24e1a212.chunk.js.map