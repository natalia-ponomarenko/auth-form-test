(this["webpackJsonpauth-form-test"]=this["webpackJsonpauth-form-test"]||[]).push([[0],{35:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r.n(a),c=r(22),n=r.n(c),i=r(2),o="/home",l=(r(6),r(12)),d=r.n(l),j=r(15),m=r(10),b=r(1),u=function(e){var t=e.className,r=e.onClick,a=e.children;return Object(b.jsx)("button",{type:"submit",className:t,onClick:r,children:a})};u.defaultProps={className:"form__button",onClick:function(){}};var h=u,O=r(16),p=r(11),x=r.n(p),_=r.p+"static/media/check.a9d3074b.svg",f={name:x.a.string.isRequired,labelText:x.a.string.isRequired,onChange:x.a.func},v=Object(a.forwardRef)((function(e,t){var r=e.name,a=e.labelText,s=Object(O.a)(e,["name","labelText"]);return Object(b.jsx)("div",{className:"form__input-group",children:Object(b.jsxs)("label",{htmlFor:r,className:"form__label",children:[Object(b.jsx)("input",Object(i.a)(Object(i.a)({},s),{},{type:"checkbox",id:r,name:r,className:"form__checkmark",ref:t})),Object(b.jsx)("div",{className:"form__container",children:Object(b.jsx)("img",{src:_,alt:"checkmark",className:"form__icon"})}),a]})})}));v.propTypes=f,v.defaultProps={onChange:function(){}};var g=v,N=Object(a.forwardRef)((function(e,t){var r=e.className,a=e.type,s=e.placeholder,c=e.error,n=Object(O.a)(e,["className","type","placeholder","error"]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(i.a)(Object(i.a)({},n),{},{className:r,type:a,placeholder:s,ref:t})),c&&Object(b.jsx)("div",{className:"form__error",children:c})]})}));N.defaultProps={type:"text",className:"",placeholder:"",error:""};var w=N,y=function(){var e,t,r,a,s=Object(j.a)(),c=s.register,n=s.handleSubmit,o=s.formState.errors,l=s.reset;return Object(b.jsxs)("form",{className:"form",onSubmit:n((function(e){console.log(e),l()})),children:[Object(b.jsx)(w,Object(i.a)(Object(i.a)({className:d()("form__input form__input--email",{error:null===(e=o.email)||void 0===e?void 0:e.message}),type:"text"},c("email",{required:"Enter the email!",pattern:{value:/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"Email is invalid!"}})),{},{placeholder:"Email",error:null===(t=o.email)||void 0===t?void 0:t.message})),Object(b.jsx)(w,Object(i.a)(Object(i.a)({className:d()("form__input form__input--password",{error:null===(r=o.password)||void 0===r?void 0:r.message}),type:"password"},c("password",{required:"Enter the password!"})),{},{placeholder:"Password",error:null===(a=o.password)||void 0===a?void 0:a.message})),Object(b.jsx)(m.b,{to:"/restore",children:Object(b.jsx)(h,{className:"form__forgot-password",children:"Forgot password?"})}),Object(b.jsx)(g,Object(i.a)(Object(i.a)({},c("RememberMe")),{},{labelText:"Remember me"})),Object(b.jsx)(h,{children:"Continue"})]})},k=function(e){var t=e.title,r=e.subtitle,a=e.onClick,s=e.buttonText,c=e.route;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"card__title",children:t}),Object(b.jsxs)("div",{className:"card__subtitle-wrapper",children:[Object(b.jsx)("div",{className:"card__subtitle",children:r}),Object(b.jsx)(m.b,{to:c,children:Object(b.jsx)(h,{type:"button",className:"card__sign-button",onClick:a,children:s})})]})]})};k.defaultProps={route:"",buttonText:"",title:"",subtitle:"",onClick:function(){}};var C=k,E=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("hr",{className:"card__decoration"}),Object(b.jsx)("div",{className:"card__middle-paragraph",children:t})]})},S=function(){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)(C,{title:"Log in",subtitle:"Don't have an account?",buttonText:"Sign in",route:"/sign"}),Object(b.jsxs)("div",{className:"card__button-wrapper",children:[Object(b.jsx)(h,{className:"card__button-google",children:"Continue with Google"}),Object(b.jsx)(h,{className:"card__button-microsoft",children:"Continue with Microsoft"})]}),Object(b.jsx)(E,{children:"or"}),Object(b.jsx)(y,{})]})},A=r(3),T=/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,z=function(){var e,t,r=Object(j.a)(),a=r.register,s=r.handleSubmit,c=r.formState.errors,n=r.reset;return Object(b.jsxs)("form",{className:"form",onSubmit:s((function(e){console.log(e),n()})),children:[Object(b.jsx)(w,Object(i.a)(Object(i.a)({className:d()("form__input form__input--email",{error:null===(e=c.email)||void 0===e?void 0:e.message}),type:"text"},a("email",{required:"Enter the email!",pattern:{value:T,message:"Email is invalid!"}})),{},{placeholder:"Email",error:null===(t=c.email)||void 0===t?void 0:t.message})),Object(b.jsx)(h,{children:"Send reset link"}),Object(b.jsx)("div",{className:"restore-password__button-wrapper",children:Object(b.jsx)(m.b,{to:o,children:Object(b.jsx)(h,{type:"button",className:"card__sign-button",route:o,children:"Back to Log in"})})})]})},Z=function(){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)(C,{title:"Reset password",subtitle:"Enter your email address and we'll send you a link to reset password",route:"/sign"}),Object(b.jsx)(z,{})]})},q=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(Z,{})})},P=function(){var e,t,r,a,s,c,n=Object(j.a)(),o=n.register,l=n.handleSubmit,m=n.formState.errors,u=n.reset;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{className:"form",onSubmit:l((function(e){console.log(e),u()})),children:[Object(b.jsx)(w,Object(i.a)(Object(i.a)({className:d()("form__input form__input--email",{error:null===(e=m.name)||void 0===e?void 0:e.message}),type:"text"},o("name",{maxLength:{value:20,message:"You exceeded the max lenth!"},required:"Enter the name!"})),{},{placeholder:"Name",error:null===(t=m.name)||void 0===t?void 0:t.message})),Object(b.jsx)(w,Object(i.a)(Object(i.a)({className:d()("form__input form__input--email",{error:null===(r=m.email)||void 0===r?void 0:r.message}),type:"text"},o("email",{required:"Enter the email!",pattern:{value:/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"Email is invalid!"}})),{},{placeholder:"Email",error:null===(a=m.email)||void 0===a?void 0:a.message})),Object(b.jsx)(w,Object(i.a)(Object(i.a)({className:d()("form__input form__input--password",{error:null===(s=m.password)||void 0===s?void 0:s.message}),type:"password"},o("password",{required:"Enter the password!"})),{},{placeholder:"Password",error:null===(c=m.password)||void 0===c?void 0:c.message})),Object(b.jsx)(h,{children:"Continue"})]}),Object(b.jsxs)("div",{className:"signIn__paragraph",children:["By signing up, you agree to our"," ",Object(b.jsx)("a",{href:".",className:"signIn__link",children:"Terms of Use"})," ","and"," ",Object(b.jsxs)("a",{href:".",className:"signIn__link",children:[" ","Privacy Policy."]})]})]})},R=function(){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)(C,{title:"Sign in",subtitle:"Already have an account?",buttonText:"Log in",route:"/home"}),Object(b.jsxs)("div",{className:"card__button-wrapper",children:[Object(b.jsx)(h,{className:"card__button-google",children:"Continue with Google"}),Object(b.jsx)(h,{className:"card__button-microsoft",children:"Continue with Microsoft"})]}),Object(b.jsx)(E,{children:"or"}),Object(b.jsx)(P,{})]})},F=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(R,{})})},$=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(A.c,{children:[Object(b.jsx)(A.a,{path:"/home",children:Object(b.jsx)(S,{})}),Object(b.jsx)(A.a,{path:"/sign",children:Object(b.jsx)(F,{})}),Object(b.jsx)(A.a,{path:"/restore",children:Object(b.jsx)(q,{})})]})})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)($,{})})}),document.getElementById("root"))},6:function(e,t,r){}},[[35,1,2]]]);
//# sourceMappingURL=main.e7745965.chunk.js.map