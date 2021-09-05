(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{111:function(e,a,t){e.exports={welcome:"views_welcome__deamk",registerForm:"views_registerForm__3QUsL",text_muted:"views_text_muted__3XUeo",contactList:"views_contactList__34bVV",container:"views_container__38k8r"}},112:function(e,a,t){"use strict";var c=function(){};e.exports=c},113:function(e,a,t){"use strict";var c=t(7),s=t(22),i=t(34),r=t.n(i),o=t(2),l=t.n(o),n=t(0),d=t(1),b=["as","className","type","tooltip"],f={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},j=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,l=e.type,n=void 0===l?"valid":l,f=e.tooltip,j=void 0!==f&&f,m=Object(s.a)(e,b);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},m),{},{ref:a,className:r()(o,"".concat(n,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=f;var m=j,v=n.createContext({}),O=t(35),u=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.className,l=e.type,b=void 0===l?"checkbox":l,f=e.isValid,j=void 0!==f&&f,m=e.isInvalid,p=void 0!==m&&m,x=e.as,N=void 0===x?"input":x,h=Object(s.a)(e,u),y=Object(n.useContext)(v).controlId;return i=Object(O.a)(i,"form-check-input"),Object(d.jsx)(N,Object(c.a)(Object(c.a)({},h),{},{ref:a,type:b,id:t||y,className:r()(o,i,j&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,N=["bsPrefix","className","htmlFor"],h=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.htmlFor,l=Object(s.a)(e,N),b=Object(n.useContext)(v).controlId;return t=Object(O.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:a,htmlFor:o||b,className:r()(i,t)}))}));h.displayName="FormCheckLabel";var y=h,w=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],P=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,b=void 0!==l&&l,f=e.disabled,j=void 0!==f&&f,u=e.isValid,p=void 0!==u&&u,N=e.isInvalid,h=void 0!==N&&N,P=e.feedbackTooltip,I=void 0!==P&&P,F=e.feedback,g=e.className,k=e.style,C=e.title,_=void 0===C?"":C,R=e.type,L=void 0===R?"checkbox":R,V=e.label,z=e.children,S=e.as,T=void 0===S?"input":S,U=Object(s.a)(e,w);i=Object(O.a)(i,"form-check"),o=Object(O.a)(o,"form-switch");var H=Object(n.useContext)(v).controlId,G=Object(n.useMemo)((function(){return{controlId:t||H}}),[H,t]),J=null!=V&&!1!==V&&!z,M=Object(d.jsx)(x,Object(c.a)(Object(c.a)({},U),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:p,isInvalid:h,disabled:j,as:T}));return Object(d.jsx)(v.Provider,{value:G,children:Object(d.jsx)("div",{style:k,className:r()(g,V&&i,b&&"".concat(i,"-inline"),"switch"===L&&o),children:z||Object(d.jsxs)(d.Fragment,{children:[M,J&&Object(d.jsx)(y,{title:_,children:V}),(p||h)&&Object(d.jsx)(m,{type:p?"valid":"invalid",tooltip:I,children:F})]})})})}));P.displayName="FormCheck";var I=Object.assign(P,{Input:x,Label:y}),F=t(6),g=(t(112),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=n.forwardRef((function(e,a){var t,i,o=e.bsPrefix,l=e.type,b=e.size,f=e.htmlSize,j=e.id,m=e.className,u=e.isValid,p=void 0!==u&&u,x=e.isInvalid,N=void 0!==x&&x,h=e.plaintext,y=e.readOnly,w=e.as,P=void 0===w?"input":w,I=Object(s.a)(e,g),k=Object(n.useContext)(v).controlId;(o=Object(O.a)(o,"form-control"),h)?t=Object(F.a)({},"".concat(o,"-plaintext"),!0):(i={},Object(F.a)(i,o,!0),Object(F.a)(i,"".concat(o,"-").concat(b),b),t=i);return Object(d.jsx)(P,Object(c.a)(Object(c.a)({},I),{},{type:l,size:f,ref:a,readOnly:y,id:j||k,className:r()(m,t,p&&"is-valid",N&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));k.displayName="FormControl";var C=Object.assign(k,{Feedback:m}),_=/-(.)/g;var R=["className","bsPrefix","as"],L=function(e){return e[0].toUpperCase()+(a=e,a.replace(_,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var V=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,i=void 0===t?L(e):t,o=a.Component,l=a.defaultProps,b=n.forwardRef((function(a,t){var i=a.className,l=a.bsPrefix,n=a.as,b=void 0===n?o||"div":n,f=Object(s.a)(a,R),j=Object(O.a)(l,e);return Object(d.jsx)(b,Object(c.a)({ref:t,className:r()(i,j)},f))}));return b.defaultProps=l,b.displayName=i,b}("form-floating"),z=["controlId","as"],S=n.forwardRef((function(e,a){var t=e.controlId,i=e.as,r=void 0===i?"div":i,o=Object(s.a)(e,z),l=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(v.Provider,{value:l,children:Object(d.jsx)(r,Object(c.a)(Object(c.a)({},o),{},{ref:a}))})}));S.displayName="FormGroup";var T=S,U=t(27),H=["as","bsPrefix","className"],G=["className"],J=["xxl","xl","lg","md","sm","xs"];var M=n.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,i=e.className,o=Object(s.a)(e,H);t=Object(O.a)(t,"col");var l=[],n=[];return J.forEach((function(e){var a,c,s,i=o[e];if(delete o[e],"object"===typeof i&&null!=i){var r=i.span;a=void 0===r||r,c=i.offset,s=i.order}else a=i;var d="xs"!==e?"-".concat(e):"";a&&l.push(!0===a?"".concat(t).concat(d):"".concat(t).concat(d,"-").concat(a)),null!=s&&n.push("order".concat(d,"-").concat(s)),null!=c&&n.push("offset".concat(d,"-").concat(c))})),[Object(c.a)(Object(c.a)({},o),{},{className:r.a.apply(void 0,[i].concat(n,l))}),{as:a,bsPrefix:t,spans:l}]}(e),i=Object(U.a)(t,2),o=i[0],l=o.className,n=Object(s.a)(o,G),b=i[1],f=b.as,j=void 0===f?"div":f,m=b.bsPrefix,v=b.spans;return Object(d.jsx)(j,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:r()(l,!v.length&&m)}))}));M.displayName="Col";var E=M,Q=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],X=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,o=e.bsPrefix,l=e.column,b=e.visuallyHidden,f=e.className,j=e.htmlFor,m=Object(s.a)(e,Q),u=Object(n.useContext)(v).controlId;o=Object(O.a)(o,"form-label");var p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));var x=r()(f,o,b&&"visually-hidden",l&&p);return j=j||u,l?Object(d.jsx)(E,Object(c.a)({ref:a,as:"label",className:x,htmlFor:j},m)):Object(d.jsx)(i,Object(c.a)({ref:a,className:x,htmlFor:j},m))}));X.displayName="FormLabel",X.defaultProps={column:!1,visuallyHidden:!1};var q=X,A=["bsPrefix","className","id"],B=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.id,l=Object(s.a)(e,A),b=Object(n.useContext)(v).controlId;return t=Object(O.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:a,className:r()(i,t),id:o||b}))}));B.displayName="FormRange";var D=B,K=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],W=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,b=e.isValid,f=void 0!==b&&b,j=e.isInvalid,m=void 0!==j&&j,u=e.id,p=Object(s.a)(e,K),x=Object(n.useContext)(v).controlId;return t=Object(O.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:o,ref:a,className:r()(l,t,i&&"".concat(t,"-").concat(i),f&&"is-valid",m&&"is-invalid"),id:u||x}))}));W.displayName="FormSelect";var Y=W,Z=["bsPrefix","className","as","muted"],$=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,n=e.muted,b=Object(s.a)(e,Z);return t=Object(O.a)(t,"form-text"),Object(d.jsx)(l,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:r()(i,t,n&&"text-muted")}))}));$.displayName="FormText";var ee=$,ae=n.forwardRef((function(e,a){return Object(d.jsx)(I,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));ae.displayName="Switch";var te=Object.assign(ae,{Input:I.Input,Label:I.Label}),ce=["bsPrefix","className","children","controlId","label"],se=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,n=e.label,b=Object(s.a)(e,ce);return t=Object(O.a)(t,"form-floating"),Object(d.jsxs)(T,Object(c.a)(Object(c.a)({ref:a,className:r()(i,t),controlId:l},b),{},{children:[o,Object(d.jsx)("label",{htmlFor:l,children:n})]}))}));se.displayName="FloatingLabel";var ie=se,re=["className","validated","as"],oe={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},le=n.forwardRef((function(e,a){var t=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,n=Object(s.a)(e,re);return Object(d.jsx)(l,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:r()(t,i&&"was-validated")}))}));le.displayName="Form",le.propTypes=oe;a.a=Object.assign(le,{Group:T,Control:C,Floating:V,Check:I,Switch:te,Label:q,Text:ee,Range:D,Select:Y,FloatingLabel:ie})}}]);
//# sourceMappingURL=0.32e09d17.chunk.js.map