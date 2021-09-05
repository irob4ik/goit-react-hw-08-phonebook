(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{110:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(28),o=n.n(a),s=n(16),u=n(8),i=n(47),l=n(5),b={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getFetchingCurrentUser:function(e){return e.auth.isfetchCurrentUser}},j=n(20),d=n.n(j),f=n(1);function p(){var e=Object(u.c)(b.getIsLoggedIn),t="/goit-react-hw-08-phonebook";return Object(f.jsxs)("nav",{children:[Object(f.jsx)(s.b,{exact:!0,to:"".concat(t,"/"),className:d.a.link_title,children:"MY PhonebooK"}),e&&Object(f.jsx)(s.b,{to:"".concat(t,"/contacts"),className:d.a.link,activeClassName:d.a.activeLink,children:"MY Contacts"})]})}function h(){var e="/goit-react-hw-08-phonebook";return Object(f.jsxs)("nav",{children:[Object(f.jsx)(s.b,{to:"".concat(e,"/login"),className:d.a.link,activeClassName:d.a.activeLink,children:"Login"}),Object(f.jsx)(s.b,{to:"".concat(e,"/register"),className:d.a.link,activeClassName:d.a.activeLink,children:"Register"})]})}var O=n(17),v=n(25),g=n.n(v),x=(n(56),n(36)),m=n.p+"static/media/avatar.a6506fe1.png";function k(){var e=Object(u.b)(),t=Object(u.c)(b.getUsername),n=m;return Object(f.jsxs)("div",{className:g.a.container,children:[Object(f.jsx)("img",{src:n,alt:"",width:"24",className:g.a.avatar}),Object(f.jsxs)("span",{className:g.a.userName,children:["hello, ",t]}),Object(f.jsx)(x.a,{className:g.a.Btn,variant:"outline-light",type:"button",onClick:function(){return e(O.a.logOut())},children:"Log out"})]})}var C=n(49),w=n.n(C);function y(){var e=Object(u.c)(b.getIsLoggedIn);return Object(f.jsxs)("header",{className:w.a.navContainer,children:[Object(f.jsx)(p,{}),e?Object(f.jsx)(k,{}):Object(f.jsx)(h,{})]})}var _=n(50),L=n.n(_);function I(e){var t=e.children;return Object(f.jsx)("div",{className:L.a.container,children:t})}var N=n(51),U=n.n(N),z=n(52),T=n.n(z);function F(){return Object(f.jsx)("div",{className:T.a.Spinner,children:Object(f.jsx)(U.a,{type:"Puff",color:"#3f51b599",height:150,width:150,timeout:3e3})})}var S=n(7),B=n(22),P=["children","redirectTo"];function R(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/goit-react-hw-08-phonebook/":n,c=Object(B.a)(e,P),a=Object(u.c)(b.getIsLoggedIn);return Object(f.jsx)(l.b,Object(S.a)(Object(S.a)({},c),{},{children:a?t:Object(f.jsx)(l.a,{to:r})}))}var A=["children","restricted","redirectTo"];function J(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/goit-react-hw-08-phonebook/":c,o=Object(B.a)(e,A),s=Object(u.c)(b.getIsLoggedIn)&&r;return Object(f.jsx)(l.b,Object(S.a)(Object(S.a)({},o),{},{children:s?Object(f.jsx)(l.a,{to:a}):t}))}var M=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,118))})),E=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,119))})),K=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,120))})),Y=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,122))})),D=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,121))}));function V(){var e="/goit-react-hw-08-phonebook",t=Object(u.b)(),n=Object(u.c)(b.getFetchingCurrentUser);return Object(r.useEffect)((function(){t(O.a.fetchCurrentUser())}),[t]),Object(f.jsx)(I,{children:!n&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{}),Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(F,{}),children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(J,{exact:!0,path:"".concat(e,"/"),children:Object(f.jsx)(M,{})}),Object(f.jsx)(J,{path:"".concat(e,"/register"),restricted:!0,children:Object(f.jsx)(E,{})}),Object(f.jsx)(J,{path:"".concat(e,"/login"),restricted:!0,redirectTo:"".concat(e,"/contacts"),children:Object(f.jsx)(K,{})}),Object(f.jsx)(R,{path:"".concat(e,"/contacts"),redirectTo:"".concat(e,"/login"),children:Object(f.jsx)(Y,{})}),Object(f.jsx)(l.b,{exact:!0,path:"",component:D})]})})]})})}var W,X,q,G,H=n(4),Q=n(18),Z=n(53),$=n.n(Z),ee=n(54),te=n.n(ee),ne=n(6),re=n(55),ce=n(9),ae=n(21),oe=n(26),se=Object(H.d)([],(W={},Object(ne.a)(W,oe.a.addContact,(function(e,t){var n=t.payload;return[].concat(Object(re.a)(e),[n])})),Object(ne.a)(W,oe.a.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.number!==n}))})),Object(ne.a)(W,ae.fetchContacts.fulfilled,(function(e,t){return t.payload})),W)),ue=Object(H.d)("",Object(ne.a)({},oe.a.changeFilter,(function(e,t){return t.payload}))),ie=Object(H.d)(!1,(X={},Object(ne.a)(X,ae.fetchContacts.pending,(function(){return!0})),Object(ne.a)(X,ae.fetchContacts.fulfilled,(function(){return!0})),Object(ne.a)(X,ae.fetchContacts.rejected,(function(){return!0})),X)),le=Object(H.d)(null,(q={},Object(ne.a)(q,ae.fetchContacts.rejected,(function(e,t){return t.payload})),Object(ne.a)(q,ae.fetchContacts.pending,(function(){return null})),q)),be=Object(ce.b)({items:se,filter:ue,isLoading:ie,error:le}),je=Object(H.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isfetchCurrentUser:!1},extraReducers:(G={},Object(ne.a)(G,O.a.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(ne.a)(G,O.a.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(ne.a)(G,O.a.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isfetchCurrentUser=!1})),Object(ne.a)(G,O.a.fetchCurrentUser.pending,(function(e,t){e.isfetchCurrentUser=!0})),Object(ne.a)(G,O.a.fetchCurrentUser.rejected,(function(e,t){e.isfetchCurrentUser=!1})),Object(ne.a)(G,O.a.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),G)}).reducer,de={key:"auth",storage:$.a,whitelist:["token"]},fe=Object(H.a)({reducer:{auth:Object(Q.g)(de,je),contacts:be},middlware:function(e){return e({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}}).concat(te.a)},devTools:!1}),pe={store:fe,persistor:Object(Q.h)(fe)};n(109);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(u.a,{store:pe.store,children:Object(f.jsx)(i.a,{loading:null,persistor:pe.persistor,children:Object(f.jsx)(s.a,{children:Object(f.jsx)(V,{})})})})}),document.getElementById("root"))},17:function(e,t,n){"use strict";var r=n(3),c=n.n(r),a=n(14),o=n(15),s=n.n(o),u=n(4);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var i=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){s.a.defaults.headers.common.Authorization=""},b={register:Object(u.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,i(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),logIn:Object(u.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,i(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),logOut:Object(u.c)("auth/logout",Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/logout");case 3:l(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),fetchCurrentUser:Object(u.c)("auth/resfresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return i(a),e.prev=5,e.next=8,s.a.get("/users/current");case 8:return o=e.sent,u=o.data,console.log(u),e.abrupt("return",u);case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t,n){return e.apply(this,arguments)}}())};t.a=b},20:function(e,t,n){e.exports={link:"nav_link__2L2k6",link_title:"nav_link_title__-a5BD",activeLink:"nav_activeLink__1u7bt"}},21:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchContacts",(function(){return p})),n.d(t,"postContacts",(function(){return h})),n.d(t,"deleteContacts",(function(){return O}));var r=n(3),c=n.n(r),a=n(14),o=n(4),s=n(15),u=n.n(s);function i(){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete("/contacts/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.defaults.baseURL="https://connections-api.herokuapp.com";var p=Object(o.c)("user/fetchContacts",Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),h=Object(o.c)("user/postContacts",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),O=Object(o.c)("user/deleteContacts",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())},25:function(e,t,n){e.exports={container:"usermenu_container__1wLIn",avatar:"usermenu_avatar__JkyyK",userName:"usermenu_userName__3FmrX",Btn:"usermenu_Btn__uTu-z"}},26:function(e,t,n){"use strict";var r=n(4),c={addContact:Object(r.b)("contacts/add",(function(e){return{payload:{id:e.id,name:e.name,number:e.number}}})),deleteContact:Object(r.b)("contacts/delete"),changeFilter:Object(r.b)("contacts/changeFilter")};t.a=c},49:function(e,t,n){e.exports={navContainer:"appbar_navContainer__vRpll"}},50:function(e,t,n){e.exports={container:"container_container__3AsUb"}},52:function(e,t,n){e.exports={Spinner:"loader_Spinner__LCnTP"}}},[[110,2,3]]]);
//# sourceMappingURL=main.3230cc64.chunk.js.map