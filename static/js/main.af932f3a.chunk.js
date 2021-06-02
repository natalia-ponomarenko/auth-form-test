(this["webpackJsonpauth-form-test"]=this["webpackJsonpauth-form-test"]||[]).push([[0],{35:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r.n(a),c=r(22),n=r.n(c),i=r(2),o="/home",l="/sign",d=(r(6),r(12)),j=r.n(d),m=r(15),b=r(10),u=r(1),h=function(e){var t=e.className,r=e.onClick,a=e.children;return Object(u.jsx)("button",{type:"submit",className:t,onClick:r,children:a})};h.defaultProps={className:"form__button",onClick:function(){}};var O=h,p=r(16),x=r(11),_=r.n(x),f={name:_.a.string.isRequired,labelText:_.a.string.isRequired,onChange:_.a.func},v=Object(a.forwardRef)((function(e,t){var r=e.name,a=e.labelText,s=Object(p.a)(e,["name","labelText"]);return Object(u.jsx)("div",{className:"form__input-group",children:Object(u.jsxs)("label",{htmlFor:r,className:"form__label",children:[Object(u.jsx)("input",Object(i.a)(Object(i.a)({},s),{},{type:"checkbox",id:r,name:r,className:"form__checkmark",ref:t})),a]})})}));v.propTypes=f,v.defaultProps={onChange:function(){}};var g=v,N=Object(a.forwardRef)((function(e,t){var r=e.className,a=e.type,s=e.placeholder,c=e.error,n=Object(p.a)(e,["className","type","placeholder","error"]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(i.a)(Object(i.a)({},n),{},{className:r,type:a,placeholder:s,ref:t})),c&&Object(u.jsx)("div",{className:"form__error",children:c})]})}));N.defaultProps={type:"text",className:"",placeholder:"",error:""};var w=N,y=function(){var e,t,r,a,s=Object(m.a)(),c=s.register,n=s.handleSubmit,o=s.formState.errors,l=s.reset;return Object(u.jsxs)("form",{className:"form",onSubmit:n((function(e){console.log(e),l()})),children:[Object(u.jsx)(w,Object(i.a)(Object(i.a)({className:j()("form__input form__input--email",{error:null===(e=o.email)||void 0===e?void 0:e.message}),type:"text"},c("email",{required:"Enter the email!",pattern:{value:/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"Email is invalid!"}})),{},{placeholder:"Email",error:null===(t=o.email)||void 0===t?void 0:t.message})),Object(u.jsx)(w,Object(i.a)(Object(i.a)({className:j()("form__input form__input--password",{error:null===(r=o.password)||void 0===r?void 0:r.message}),type:"password"},c("password",{required:"Enter the password!"})),{},{placeholder:"Password",error:null===(a=o.password)||void 0===a?void 0:a.message})),Object(u.jsx)(b.b,{to:"/restore",replace:!0,children:Object(u.jsx)(O,{className:"form__forgot-password",children:"Forgot password?"})}),Object(u.jsx)(g,Object(i.a)(Object(i.a)({},c("RememberMe")),{},{labelText:"Remember me"})),Object(u.jsx)(O,{children:"Continue"})]})},k=function(e){var t=e.title,r=e.subtitle,a=e.onClick,s=e.buttonText,c=e.route;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"card__title",children:t}),Object(u.jsxs)("div",{className:"card__subtitle-wrapper",children:[Object(u.jsx)("div",{className:"card__subtitle",children:r}),Object(u.jsx)(b.b,{to:c,replace:!0,children:Object(u.jsx)(O,{type:"button",className:"card__sign-button",onClick:a,children:s})})]})]})};k.defaultProps={route:"",buttonText:"",title:"",subtitle:"",onClick:function(){}};var C=k,E=function(e){var t=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("hr",{className:"card__decoration"}),Object(u.jsx)("div",{className:"card__middle-paragraph",children:t})]})},S=function(){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)(C,{title:"Log in",subtitle:"Don't have an account?",buttonText:"Sign in",route:l}),Object(u.jsxs)("div",{className:"card__button-wrapper",children:[Object(u.jsx)(O,{className:"card__button-google",children:"Continue with Google"}),Object(u.jsx)(O,{className:"card__button-microsoft",children:"Continue with Microsoft"})]}),Object(u.jsx)(E,{children:"or"}),Object(u.jsx)(y,{})]})},A=r(3),T=/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,z=function(){var e,t,r=Object(m.a)(),a=r.register,s=r.handleSubmit,c=r.formState.errors,n=r.reset;return Object(u.jsxs)("form",{className:"form",onSubmit:s((function(e){console.log(e),n()})),children:[Object(u.jsx)(w,Object(i.a)(Object(i.a)({className:j()("form__input form__input--email",{error:null===(e=c.email)||void 0===e?void 0:e.message}),type:"text"},a("email",{required:"Enter the email!",pattern:{value:T,message:"Email is invalid!"}})),{},{placeholder:"Email",error:null===(t=c.email)||void 0===t?void 0:t.message})),Object(u.jsx)(O,{children:"Send reset link"}),Object(u.jsx)("div",{className:"restore-password__button-wrapper",children:Object(u.jsx)(b.b,{to:o,children:Object(u.jsx)(O,{type:"button",className:"card__sign-button",route:o,children:"Back to Log in"})})})]})},Z=function(){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)(C,{title:"Reset password",subtitle:"Enter your email address and we'll send you a link to reset password",route:l}),Object(u.jsx)(z,{})]})},q=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(Z,{})})},P=function(){var e,t,r,a,s,c,n=Object(m.a)(),o=n.register,l=n.handleSubmit,d=n.formState.errors,b=n.reset;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"form",onSubmit:l((function(e){console.log(e),b()})),children:[Object(u.jsx)(w,Object(i.a)(Object(i.a)({className:j()("form__input form__input--email",{error:null===(e=d.name)||void 0===e?void 0:e.message}),type:"text"},o("name",{maxLength:{value:20,message:"You exceeded the max lenth!"},required:"Enter the name!"})),{},{placeholder:"Name",error:null===(t=d.name)||void 0===t?void 0:t.message})),Object(u.jsx)(w,Object(i.a)(Object(i.a)({className:j()("form__input form__input--email",{error:null===(r=d.email)||void 0===r?void 0:r.message}),type:"text"},o("email",{required:"Enter the email!",pattern:{value:/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"Email is invalid!"}})),{},{placeholder:"Email",error:null===(a=d.email)||void 0===a?void 0:a.message})),Object(u.jsx)(w,Object(i.a)(Object(i.a)({className:j()("form__input form__input--password",{error:null===(s=d.password)||void 0===s?void 0:s.message}),type:"password"},o("password",{required:"Enter the password!"})),{},{placeholder:"Password",error:null===(c=d.password)||void 0===c?void 0:c.message})),Object(u.jsx)(O,{children:"Continue"})]}),Object(u.jsxs)("div",{className:"signIn__paragraph",children:["By signing up, you agree to our"," ",Object(u.jsx)("a",{href:".",className:"signIn__link",children:"Terms of Use"})," ","and"," ",Object(u.jsxs)("a",{href:".",className:"signIn__link",children:[" ","Privacy Policy."]})]})]})},R=function(){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)(C,{title:"Sign in",subtitle:"Already have an account?",buttonText:"Log in",route:o}),Object(u.jsxs)("div",{className:"card__button-wrapper",children:[Object(u.jsx)(O,{className:"card__button-google",children:"Continue with Google"}),Object(u.jsx)(O,{className:"card__button-microsoft",children:"Continue with Microsoft"})]}),Object(u.jsx)(E,{children:"or"}),Object(u.jsx)(P,{})]})},F=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(R,{})})},$=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(A.c,{children:[Object(u.jsx)(A.a,{path:"/home",children:Object(u.jsx)(S,{})}),Object(u.jsx)(A.a,{path:"/sign",children:Object(u.jsx)(F,{})}),Object(u.jsx)(A.a,{path:"/restore",children:Object(u.jsx)(q,{})})]})})};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b.a,{basename:"/",children:Object(u.jsx)($,{})})}),document.getElementById("root"))},6:function(e,t,r){}},[[35,1,2]]]);
//# sourceMappingURL=main.af932f3a.chunk.js.map