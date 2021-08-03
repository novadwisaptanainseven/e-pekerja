(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[45],{1007:function(e,t,a){"use strict";a.r(t);var n,c,s=a(2),r=a(9),i=a(638),o=a(1),l=a.n(o),d=a(628),j=a(640),b=a.n(j),u=a(639),h=a(571),x=(a(787),a(788),a(789)),p=a(740),m=a(642),O=a(163),f=a(40),g=a(626),k=a(630),w=a(682),v=a(736),C=a(643),y=a(17),D=m.default.input(n||(n=Object(i.a)(["\n  height: 37px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),N=m.default.button(c||(c=Object(i.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 37px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e5973;\n  border: none;\n  color: white;\n  padding: 0 10px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #283c4f;\n  }\n"]))),S=function(e){var t=e.filterText,a=e.onFilter,n=e.onClear;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(D,{id:"search",type:"text",placeholder:"Cari pegawai","aria-label":"Search Input",value:t,onChange:a}),Object(y.jsx)(N,{type:"button",onClick:n,children:"Reset"})]})},R=function(e){var t=e.handleDateChange,a=e.state;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(x.DateRange,{editableDateInputs:!0,onChange:function(e){return t(e)},moveRangeOnFirstSelection:!1,ranges:a})})},E=l.a.memo(R);t.default=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(o.useState)(!1),i=Object(r.a)(c,2),j=i[0],x=i[1],m=Object(o.useState)((new Date).getFullYear()),D=Object(r.a)(m,2),N=D[0],R=D[1],_=Object(o.useState)(!1),F=Object(r.a)(_,2),A=F[0],W=F[1],T=Object(o.useContext)(O.a),U=T.rekapAbsensiState,P=T.rekapAbsensiDispatch,z=U.data,L=U.loading,M=Object(o.useState)([{startDate:new Date,endDate:new Date,key:"selection"}]),H=Object(r.a)(M,2),I=H[0],K=H[1],Y=Object(o.useState)({startDate:"",endDate:""}),J=Object(r.a)(Y,2),B=J[0],G=J[1];Object(o.useEffect)((function(){var e,t;N&&(t=N,(e=P)({type:f.LOADING}),g.a.get("admin/pegawai/rekap-absensi?tahun=".concat(t)).then((function(t){e({type:f.SUCCESS,payload:t.data.data}),console.log(t.data)})).catch((function(t){e({type:f.ERROR}),console.log(t.response.data)})),G({startDate:"",endDate:""}))}),[P,N]),Object(o.useEffect)((function(){var e,t;B.startDate&&B.endDate&&(t=B,(e=P)({type:f.LOADING}),g.a.get("admin/pegawai/rekap-absensi-tanggal?first_date=".concat(t.startDate,"&last_date=").concat(t.endDate)).then((function(t){e({type:f.SUCCESS,payload:t.data.data}),console.log(t.data)})).catch((function(t){e({type:f.ERROR}),console.log(t.response.data)})),R(""))}),[B,P]);var X=z.filter((function(e){return!(!e.nama||!e.nama.toLowerCase().includes(a.toLowerCase()))})),q=[{name:"Nama",selector:"nama",sortable:!0,wrap:!0},{name:"Jabatan",selector:"jabatan",sortable:!0,wrap:!0},{name:"Hadir",selector:"hadir",sortable:!0,wrap:!0,maxWidth:"80px"},{name:"Izin",selector:"izin",sortable:!0,wrap:!0,maxWidth:"80px"},{name:"Sakit",selector:"sakit",sortable:!0,wrap:!0,maxWidth:"80px"},{name:"Cuti",selector:"cuti",sortable:!0,wrap:!0,maxWidth:"80px"},{name:"Tanpa Keterangan",selector:"tanpa_keterangan",sortable:!0,wrap:!0,maxWidth:"200px"},{maxWidth:"180px",name:"Action",sortable:!0,cell:function(e){return Object(y.jsxs)("div",{"data-tag":"allowRowEvents",children:[Object(y.jsxs)(d.f,{color:"warning",className:"text-white mr-1",size:"sm",onClick:function(){return Object(v.a)(e.id_pegawai)},children:["PDF ",Object(y.jsx)(u.a,{content:h.a})]}),Object(y.jsxs)(d.f,{color:"success",className:"text-white",size:"sm",onClick:function(){return Object(C.a)("absensi-per-tahun/"+e.id_pegawai)},children:["Excel ",Object(y.jsx)(u.a,{content:h.a})]})]})}}],Q=l.a.useMemo((function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(S,{onFilter:function(e){return n(e.target.value)},onClear:function(){a&&(x(!j),n(""))},filterText:a})})}),[a,j]),V=l.a.useCallback((function(e){K([e.selection]);var t=Date.parse(e.selection.startDate),a=Date.parse(e.selection.endDate),n=Object(p.a)(t,"Y-MM-dd"),c=Object(p.a)(a,"Y-MM-dd");G(Object(s.a)(Object(s.a)({},B),{},{startDate:n,endDate:c}))}),[B]);return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(d.h,{children:[Object(y.jsx)(d.l,{className:"d-flex justify-content-between my-card-header",children:Object(y.jsx)("div",{className:"title mb-2",children:Object(y.jsx)("h3",{children:"Rekap Absensi Pegawai"})})}),Object(y.jsxs)(d.i,{children:[Object(y.jsxs)(d.W,{children:[Object(y.jsx)(d.m,{md:"6",children:Object(y.jsxs)(d.h,{className:"shadow",children:[Object(y.jsx)(d.l,{className:"bg-dark",children:Object(y.jsx)("h5",{className:"mb-0",children:"Filter berdasarkan per Tahun"})}),Object(y.jsx)(d.n,{show:A,children:Object(y.jsx)(d.i,{children:Object(y.jsxs)(d.w,{children:[Object(y.jsxs)(d.x,{children:[Object(y.jsx)(d.K,{children:"Masukkan tahun"}),Object(y.jsxs)(d.X,{costum:!0,name:"filter_tahun",id:"filter_tahun",value:N,onChange:function(e){return function(e){R(e.target.value)}(e)},children:[Object(y.jsx)("option",{value:"",children:"--- Pilih Tahun ---"}),function(){for(var e=(new Date).getFullYear(),t=[],a=2015;a<=e;a++)t.push(a);return t}().map((function(e,t){return Object(y.jsx)("option",{value:e,children:e})}))]})]}),L&&Object(y.jsx)("div",{children:Object(y.jsx)(d.W,{children:Object(y.jsx)(d.m,{className:"text-center",children:Object(y.jsx)("img",{className:"mt-4 ml-3",width:30,src:k.c,alt:"load-animation"})})})})]})})}),Object(y.jsxs)(d.j,{className:"d-flex justify-content-between",children:[Object(y.jsx)(d.f,{type:"button",color:"secondary",onClick:function(){return W(!A)},children:A?"Tutup":"Klik untuk melihat"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(d.U,{content:"Cetak Rekapan Absensi Pegawai Berdasarkan Tahun",children:Object(y.jsxs)(d.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return Object(w.a)("semua",N)},children:[Object(y.jsx)("span",{className:"my-text-button",children:"Cetak Rekapan Absensi"})," ",Object(y.jsx)(u.a,{content:h.a})]})}),Object(y.jsx)(d.U,{content:"Export Rekapan Absensi Pegawai ke Excel",children:Object(y.jsxs)(d.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(C.a)("rekap-absensi-semua-pegawai/tahun",N,"filter_tahun")},children:[Object(y.jsx)("span",{className:"my-text-button",children:"Excel"})," ",Object(y.jsx)(u.a,{content:h.a})]})})]})]})]})}),Object(y.jsx)(d.m,{md:"6",children:Object(y.jsxs)(d.h,{className:"shadow",children:[Object(y.jsx)(d.l,{className:"bg-dark",children:Object(y.jsx)("h5",{className:"mb-0",children:"Filter berdasarkan tanggal"})}),Object(y.jsx)(d.n,{show:A,children:Object(y.jsxs)(d.i,{children:[Object(y.jsx)(E,{state:I,handleDateChange:V}),L&&Object(y.jsx)("div",{children:Object(y.jsx)(d.W,{children:Object(y.jsx)(d.m,{className:"text-center",children:Object(y.jsx)("img",{className:"mt-4 ml-3",width:30,src:k.c,alt:"load-animation"})})})})]})}),Object(y.jsxs)(d.j,{className:"d-flex justify-content-between",children:[Object(y.jsx)(d.f,{type:"button",color:"secondary",onClick:function(){return W(!A)},children:A?"Tutup":"Klik untuk melihat"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(d.U,{content:"Cetak Rekapan Absensi Pegawai Berdasarkan Filter Tanggal",children:Object(y.jsxs)(d.f,{type:"button",color:"info",className:"ml-2",onClick:function(){return e="semua",t=B,void window.open("".concat(localStorage.baseURL,"print-rekap-absensi-tanggal/").concat(e,"?first_date=").concat(t.startDate,"&last_date=").concat(t.endDate),"_blank");var e,t},children:[Object(y.jsx)("span",{className:"my-text-button",children:"Cetak Rekapan Absensi"})," ",Object(y.jsx)(u.a,{content:h.a})]})}),Object(y.jsx)(d.U,{content:"Export Rekapan Absensi Pegawai ke Excel",children:Object(y.jsxs)(d.f,{type:"button",color:"success",className:"ml-2",onClick:function(){return Object(C.a)("rekap-absensi-semua-pegawai/tanggal",B,"filter_tanggal")},children:[Object(y.jsx)("span",{className:"my-text-button",children:"Excel"})," ",Object(y.jsx)(u.a,{content:h.a})]})})]})]})]})})]}),z.length>0?Object(y.jsx)(b.a,{columns:q,data:X,noHeader:!0,responsive:!0,customStyles:{headCells:{style:{fontSize:"1.15em"}}},pagination:!0,subHeader:!0,subHeaderComponent:Q,highlightOnHover:!0}):Object(y.jsx)("div",{children:Object(y.jsx)(d.W,{children:Object(y.jsx)(d.m,{className:"text-center",children:Object(y.jsx)("img",{className:"mt-4 ml-3",width:30,src:k.c,alt:"load-animation"})})})})]})]})})}},638:function(e,t,a){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}a.d(t,"a",(function(){return n}))},682:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.open("".concat(localStorage.baseURL,"print-rekap-absensi/").concat(e,"?tahun=").concat(t),"_blank")}},736:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open("".concat(localStorage.baseURL,"print-rekap-absensi-pegawai/").concat(e),"_blank")}}}]);
//# sourceMappingURL=45.83b4dc2a.chunk.js.map