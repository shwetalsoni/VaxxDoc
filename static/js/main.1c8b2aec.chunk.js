(this.webpackJsonpvaxxdoc=this.webpackJsonpvaxxdoc||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(30),i=c.n(n),l=(c(36),c(15)),r=c(2),o=c(8),d=c(9),j=c(11),m=c(10),b=(c(37),c.p+"static/media/inject.803f2e48.jpg"),h=c(0),x=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"body text-center",children:Object(h.jsxs)("header",{children:[Object(h.jsx)("img",{src:b,className:"hero-img",alt:"vaccination"}),Object(h.jsxs)("section",{className:"hero-text",children:[Object(h.jsx)("h1",{className:"welcome-head",children:"Welcome to VaxxDoc"}),Object(h.jsx)("p",{className:"welcome-text",children:"Securely record and access administered COVID-19 vaccinations"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("a",{href:"/patient_reg",className:"btn patient",children:"Patient"}),Object(h.jsx)("a",{href:"/doctor_login",className:"btn doctor",children:"Medical Staff"})]})]})]})})}}]),c}(s.a.Component),O=c(14),p=c.n(O),u="https://vaxxdoc.herokuapp.com",g={getUsers:function(){return p()({method:"GET",url:u+"/user"})},getUser:function(e){return p()({method:"GET",url:u+"/user/"+e})},markV1:function(e,t){var c=new FormData;return c.append("email",e),c.append("hospital",t),p()({method:"POST",url:u+"/markV1",data:c,headers:{"Content-Type":"multipart/form-data"}})},markV2:function(e){var t=new FormData;return t.append("email",e),p()({method:"POST",url:u+"/markV2",data:t,headers:{"Content-Type":"multipart/form-data"}})},register:function(e,t,c,a,s,n){var i=new FormData;return i.append("email",e),i.append("name",t),i.append("age",c),i.append("gender",a),i.append("number",s),i.append("password",n),p()({method:"POST",url:u+"/user",data:i,headers:{"Content-Type":"multipart/form-data"}})}},N=(c(57),function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={loggedin:!1},e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleAgeChange=function(t){e.setState({age:t.target.value})},e.handleGenderChange=function(t){e.setState({gender:t.target.value})},e.handleNumberChange=function(t){e.setState({number:t.target.value})},e.handlePasswordChange=function(t){e.setState({password:t.target.value})},e.handleLogin=function(){console.log(e.state.name),g.register(e.state.email,e.state.name,e.state.age,e.state.gender,e.state.number,e.state.password).then((function(t){e.setState({loggedin:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(c,[{key:"render",value:function(){return this.state.loggedin?Object(h.jsx)(r.a,{to:"/patient_info/"+this.state.email}):Object(h.jsx)("div",{className:"body",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-4 form-body mx-auto",children:[Object(h.jsxs)("form",{children:[Object(h.jsx)("h3",{className:"heading text-center",children:"Welcome to VaxxDoc"}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"name",onChange:this.handleNameChange,placeholder:"Fullname"})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",className:"form-control",id:"email",onChange:this.handleEmailChange,placeholder:"Email"})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"password",className:"form-control",id:"password",onChange:this.handlePasswordChange,placeholder:"Password"})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"age",onChange:this.handleAgeChange,placeholder:"Age"})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("select",{className:"form-control",id:"gender",onChange:this.handleGenderChange,children:[Object(h.jsx)("option",{children:"Female"}),Object(h.jsx)("option",{children:"Male"}),Object(h.jsx)("option",{children:"Prefer not to reveal"})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"number",onChange:this.handleNumberChange,placeholder:"Phone"})}),Object(h.jsx)("button",{type:"button",className:"btn-com btn-signup",onClick:this.handleLogin,children:"SIGN UP"})]}),Object(h.jsxs)("button",{className:"btn-com btn-google",children:[Object(h.jsx)("i",{className:"fa fa-google google-icon","aria-hidden":"true"}),"SIGN IN WITH GOOGLE"]}),Object(h.jsxs)("div",{className:"extra text-center",children:[Object(h.jsx)("span",{className:"small-text",children:"Already have an account?"}),Object(h.jsx)("a",{href:"/patient_login",className:"btn-2 btn-login",children:"LOGIN"})]})]})})})})}}]),c}(s.a.Component)),v=(c(63),function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"body",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-4 form-body login-form mx-auto",children:[Object(h.jsxs)("form",{children:[Object(h.jsx)("h3",{className:"heading text-center",children:"Login to Continue"}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword",placeholder:"Password"})}),Object(h.jsx)("button",{type:"submit",className:"btn-com btn-signup",children:"LOGIN"})]}),Object(h.jsxs)("button",{className:"btn-com btn-google",children:[Object(h.jsx)("i",{className:"fa fa-google google-icon","aria-hidden":"true"}),"SIGN IN WITH GOOGLE"]}),Object(h.jsxs)("div",{className:"extra text-center",children:[Object(h.jsx)("span",{className:"small",children:"Doesn't have an account?"}),Object(h.jsx)("a",{href:"/patient_reg",className:"btn-2 btn-login",children:"SIGN UP"})]})]})})})})}}]),c}(s.a.Component)),f=c(13),y=(c(64),"data:image/png;base64,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");var w=function(){var e,t,c=Object(r.g)().email,n=s.a.useState(""),i=Object(f.a)(n,2),l=i[0],o=i[1],d=s.a.useState(""),j=Object(f.a)(d,2),m=j[0],b=j[1],x=s.a.useState(""),O=Object(f.a)(x,2),p=O[0],u=O[1];Object(a.useEffect)((function(){g.getUser(c).then((function(e){o(e.data),b(!0),console.log(e)})).catch((function(e){console.log(e),b(!0),u(!0)}))}),[c]);var N=new Date(1e3*l.v1Date),v=new Date(1e3*l.v2Date);return e=l.v1?Object(h.jsxs)("div",{className:"vaccine vaccine-1 text-center",children:[Object(h.jsx)("img",{src:y,className:"syringe-icon",alt:""}),Object(h.jsxs)("span",{children:[Object(h.jsx)("h5",{className:"vacc-status",children:"Vaccinated on"}),Object(h.jsx)("h5",{className:"vacc-date",children:N.toDateString()})]})]}):Object(h.jsxs)("div",{className:"vaccine vaccine-2 text-center",children:[Object(h.jsx)("img",{src:y,className:"syringe-icon",alt:""}),Object(h.jsxs)("span",{children:[Object(h.jsx)("h5",{className:"vacc-status",children:"Dose 1"}),Object(h.jsx)("h5",{className:"vacc-date",children:"To be vaccinated"})]})]}),t=l.v2?Object(h.jsxs)("div",{className:"vaccine vaccine-1 text-center",children:[Object(h.jsx)("img",{src:y,className:"syringe-icon",alt:""}),Object(h.jsxs)("span",{children:[Object(h.jsx)("h5",{className:"vacc-status",children:"Vaccinated on"}),Object(h.jsx)("h5",{className:"vacc-date",children:v.toDateString()})]})]}):Object(h.jsxs)("div",{className:"vaccine vaccine-2 text-center",children:[Object(h.jsx)("img",{src:y,className:"syringe-icon",alt:""}),Object(h.jsxs)("span",{children:[Object(h.jsx)("h5",{className:"vacc-status",children:"Dose 2"}),Object(h.jsx)("h5",{className:"vacc-date",children:"To be vaccinated"})]})]}),console.log(c),m?p?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Not Found"}),Object(h.jsx)("p",{children:"If you created the account just now, wait atleast 20s. It takes some time to update the blockchain."})]}):Object(h.jsx)("div",{className:"body",children:Object(h.jsxs)("div",{className:"container",children:[p?Object(h.jsx)("h1",{className:"text-center",children:"Not Found!"}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("div",{className:"row vacc-div",children:Object(h.jsx)("div",{className:"col-12 col-sm-8 col-md-8 col-lg-6 mx-auto",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-6",children:e}),Object(h.jsx)("div",{className:"col-6",children:t})]})})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12 text-center",children:Object(h.jsx)("h1",{className:"patient-head",children:l.hospital})}),Object(h.jsxs)("div",{className:"col-12 col-sm-8 col-md-8 col-lg-6 mx-auto",children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Name"}),Object(h.jsx)("span",{className:"detail form-control",children:l.name})]}),Object(h.jsxs)("span",{className:"flex",children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Gender"}),Object(h.jsx)("span",{className:"detail form-control",children:l.gender})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Age"}),Object(h.jsx)("span",{className:"detail form-control",children:l.age})]})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Email"}),Object(h.jsx)("span",{className:"detail form-control",children:c})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Phone Number"}),Object(h.jsx)("span",{className:"detail form-control",children:l.number})]})]})]})]})}):Object(h.jsx)("h1",{children:"Loading..."})},A=(c(65),function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={loggedin:!1},e.handleLogin=function(){e.setState({loggedin:!0})},e}return Object(d.a)(c,[{key:"render",value:function(){return this.state.loggedin?Object(h.jsx)(r.a,{to:"/patient_display"}):Object(h.jsx)("div",{className:"body",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-4 doctor-form-body mx-auto",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("h3",{className:"heading text-center",children:"Login to Edit Details"}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword",placeholder:"Password"})}),Object(h.jsx)("button",{type:"button",onClick:this.handleLogin,className:"btn-com btn-signup",children:"LOGIN"})]})})})})})}}]),c}(s.a.Component));c(66);var C=function(){var e=Object(r.g)().email,t=s.a.useState(""),c=Object(f.a)(t,2),n=c[0],i=c[1],l=s.a.useState(""),o=Object(f.a)(l,2),d=o[0],j=o[1];return Object(a.useEffect)((function(){g.getUser(e).then((function(e){i(e.data),console.log(e)})).catch((function(e){console.log(e),j(!0)}))}),[e]),new Date(1e3*n.v1Date),new Date(1e3*n.v2Date),Object(h.jsx)("div",{className:"body",children:Object(h.jsxs)("div",{className:"container",children:[d?Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h1",{children:"Not Found"})}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-lg-5 col-md-8 col-sm-10 mx-auto",children:[Object(h.jsx)("h1",{className:"name text-center",children:n.name}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Hospital"}),Object(h.jsx)("span",{className:"detail form-control",children:n.name})]}),Object(h.jsxs)("span",{className:"flex",children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Gender"}),Object(h.jsx)("span",{className:"detail form-control",children:n.gender})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Age"}),Object(h.jsx)("span",{className:"detail form-control",children:n.age})]})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Email"}),Object(h.jsx)("span",{className:"detail form-control",children:e})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Phone Number"}),Object(h.jsx)("span",{className:"detail form-control",children:n.number})]}),Object(h.jsxs)("span",{className:"check-span",children:[Object(h.jsxs)("div",{className:"dose1",children:[Object(h.jsx)("p",{className:"label-btn",children:"Dose 1"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-toggle1",onClick:function(){g.markV1(e,"AIIMS").then((function(e){n.v1=!0,i(n)})).catch((function(e){console.log(e)}))},children:n.v1?"Vaccinated":"Mark as Vaccinated"})]}),Object(h.jsxs)("div",{className:"dose2",children:[Object(h.jsx)("p",{className:"label-btn",children:"Dose 2"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-toggle2",onClick:function(){g.markV2(e).then((function(e){n.v2=!0,i(n)})).catch((function(e){console.log(e)}))},children:n.v2?"Vaccinated":"Mark as Vaccinated"})]})]})]})})]})})},D=(c(67),function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{}},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;g.getUsers().then((function(t){e.setState({data:t.data}),console.log("asdasfsa",e.state.data),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"body",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-lg-5 col-md-8 col-sm-10 mx-auto",children:Object(h.jsxs)("form",{className:"edit-form",children:[Object(h.jsx)("input",{className:"form-control",type:"search",placeholder:"Browse patients to edit info below","aria-label":"Search"}),Object(h.jsx)("button",{className:"btn btn-search  my-2 my-sm-0",type:"submit",children:"Search"})]})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-10 mx-auto",children:Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Name"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"Dose 1"}),Object(h.jsx)("th",{scope:"col",children:"Dose 2"})]})}),Object(h.jsx)("tbody",{children:Object.keys(this.state.data).map((function(t,c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:Object(h.jsx)("a",{href:"/doctor_edit/"+t,children:c+1})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"/doctor_edit/"+t,children:e.state.data[t].name})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"/doctor_edit/"+t,children:t})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn vac-btn btn-sm",children:"Vaccinated"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn novac-btn btn-sm",children:"Not Vaccinated"})})]},c)}))})]})})})]})})}}]),c}(s.a.Component));function E(){return Object(h.jsx)("div",{children:Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{exact:!0,path:"/",component:x}),Object(h.jsx)(r.b,{exact:!0,path:"/patient_reg",component:N}),Object(h.jsx)(r.b,{exact:!0,path:"/patient_login",component:v}),Object(h.jsx)(r.b,{exact:!0,path:"/patient_info/:email",component:w}),Object(h.jsx)(r.b,{exact:!0,path:"/doctor_login",component:A}),Object(h.jsx)(r.b,{exact:!0,path:"/doctor_edit/:email",component:C}),Object(h.jsx)(r.b,{exact:!0,path:"/patient_display",component:D})]})})}var I=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(l.a,{children:Object(h.jsx)(E,{})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.1c8b2aec.chunk.js.map