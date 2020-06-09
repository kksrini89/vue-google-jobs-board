(function(t){function e(e){for(var i,s,c=e[0],l=e[1],r=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);b&&b(e);while(p.length)p.shift()();return o.push.apply(o,r||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var b=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container bg-light border border-light rounded shadow my-3"},[a("div",{attrs:{id:"main-content d-flex flex-column justify-content-center align-items-center"}},[a("div",{staticClass:"p-3"},[a("nav",{staticClass:"nav bg-dark nav-pills nav-justified"},[a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/","active-class":"active",exact:""}},[t._v("Jobs")]),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/saved","active-class":"active"}},[t._v("Saved")]),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/alerts","active-class":"active"}},[t._v("Alerts")])],1),a("JobFilter"),a("router-view")],1)])])])},o=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filters py-3 mb-3 text-left"},[a("button",{staticClass:"btn btn-light btn-sm"},[a("span",{staticClass:"badge badge-light"},[t._v("Full-time")])]),a("button",{staticClass:"btn btn-light btn-sm"},[a("span",{staticClass:"badge badge-light"},[t._v("Part-time")])]),a("button",{staticClass:"btn btn-light btn-sm"},[a("span",{staticClass:"badge badge-light"},[t._v("Remote")])]),a("button",{staticClass:"btn btn-light btn-sm"},[a("span",{staticClass:"badge badge-light"},[t._v("past 3 days")])]),a("button",{staticClass:"btn btn-light btn-sm"},[a("span",{staticClass:"badge badge-light"},[t._v("Past 30 days")])])])}],l={name:"JobFilter",data:function(){return{}}},r=l,b=a("2877"),d=Object(b["a"])(r,s,c,!1,null,"70386437",null),p=d.exports,u={name:"App",components:{JobFilter:p}},f=u,m=(a("a10e"),Object(b["a"])(f,n,o,!1,null,"55c5aca8",null)),g=m.exports,v=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobs"},t._l(t.jobs,(function(t){return a("JobItem",{key:t.id,attrs:{job:t}})})),1)},h=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("div",{staticClass:"card job mb-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-block col-1"},[a("img",{staticClass:"img-fluid",attrs:{src:t.job.company_logo,alt:"CompanyLogo"}})]),a("div",{staticClass:"col-9"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.job.title))]),a("h6",{staticClass:"card-subtitle text-muted"},[t._v(t._s(t.job.company))]),a("span",{staticClass:"badge badge-light mt-2 job-type"},[t._v(t._s(t.job.type))])]),a("a",{staticClass:"col-2 mt-2",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.onBookmark(t.job)}}},[a("i",{staticClass:"far fa-bookmark fa-2x"})])])])]):t._e()},I=[],j={name:"JobItem",props:{job:{type:Object,default:null,required:!0}},data:function(){return{}},methods:{onBookmark:function(t){console.log(t)}}},J=j,C=Object(b["a"])(J,_,I,!1,null,"ec166b56",null),F=C.exports,w={name:"JobsList",components:{JobItem:F},data:function(){return{jobs:[{id:"257d2956-39e3-4dc8-985a-6d0715640156",type:"Full Time",company:"VerifyMyAge - KYC AVC UK LTD",location:"London",title:"VP Product",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a81da32a113bf0aa5d2db823f67a9c965f4c0226/VMA_LOGO.png"},{id:"9f7d19d7-a904-4e2d-8303-4a6b7f24f810",type:"Full Time",company:"VeirfyMyAge - KYC AVC UK LTD",location:"London",title:"QA Engineer",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--398f9be36177b805b7727116818e1ecfbcd387e5/VMA_LOGO.png"},{id:"e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3",type:"Full Time",company:"Game Closure",location:"San Francisco, Mountain View, Tokyo, Remote",title:"Senior Game Engineer (REMOTE)",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTV1IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b586f79a85322f93304aae975ae4ae8556e35bfe/GClogo_small.png"},{id:"7e5a0fb2-7786-4a1d-839a-b6047da36f61",type:"Full Time",company:"Defendify",location:"Maine",title:"Full Stack Engineer",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcG1FIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--20ed44319c9fb13fadc44b99f028899632a7ffb8/Defendify_grey_R.png"},{id:"7a86dfca-8b8e-4df5-b6a6-b656e866c607",type:"Full Time",company:"VerifyMyAge - KYC AVC UK LTD",location:"London",title:"Full-Stack Web Developer",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3lFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a411824a9b1bfdea9f96bf57b66b5c0e279ff56/VMA_LOGO.png"},{id:"8677c8a3-747a-4842-a891-550b23c79c55",type:"Full Time",company:"Applied",location:"Remote",title:"Senior Full Stack Engineer",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb0dFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a82d24b46cf2fbf0f4856f0b3df60104d1f6e10f/Applied_Master%20(2)%201%20(1).png"},{id:"73baa170-e26f-4d16-b00e-3e1629a1ab8b",type:"Full Time",company:"Connected Health Solutions BV",location:"Amsterdam",title:"Service Reliability Engineer",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91cc40f8d0fe9c058f1112c764513652597a3ba5/carexs-corporate-payoff-600%20(1).png"},{id:"90b7a228-a21f-44a1-9c44-d113e06cef9d",type:"Full Time",company:"Kasisto",location:"New York",title:"Front-End Software Engineer",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8401c5084da6bb1a0cacdd3ef319e6f919fcc738/Kasisto_Logo_c90x90.png"},{id:"df3f23eb-a30c-4584-8778-08792d514e35",type:"Full Time",company:"Kinsta",location:"North America, remote",title:"Senior JavaScript Developer Trainer",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eaa682970e0218e11b80f8cd04754426bcc58df9/kinsta-logo1.png"},{id:"16140a4a-ecbf-4e69-a457-320a16a8960f",type:"Full Time",company:"InnoGames GmbH",location:"Hamburg",title:"PHP Developer & DevOps Engineer - Elvenar",company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbWlFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ca65fd58d1dc26f0c467fe0c8d8cf0fb7a897033/logo_innogames_devlop.png"}]}}},k=w,O=Object(b["a"])(k,y,h,!1,null,null,null),B=O.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("SavedJobs")])},X=[],S={name:"SavedJobs",data:function(){return{}}},H=S,M=Object(b["a"])(H,x,X,!1,null,null,null),V=M.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-3"},[t._v(" Alert Component ")])},W=[],T={name:"Alert",data:function(){return{}}},Z=T,G=Object(b["a"])(Z,L,W,!1,null,"73cc0318",null),A=G.exports;i["a"].use(v["a"]);var E=new v["a"]({mode:"history",routes:[{name:"jobs",path:"/",component:B},{name:"saved-jobs",path:"/saved",component:V},{name:"alerts",path:"/alerts",component:A}]});i["a"].config.productionTip=!1,new i["a"]({router:E,render:function(t){return t(g)}}).$mount("#app")},a10e:function(t,e,a){"use strict";var i=a("ef58"),n=a.n(i);n.a},ef58:function(t,e,a){}});
//# sourceMappingURL=app.658f66ff.js.map