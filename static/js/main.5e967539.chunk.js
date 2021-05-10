(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{85:function(n,e,t){},86:function(n,e,t){},95:function(n,e,t){"use strict";t.r(e);var i,a,o=t(0),s=t.n(o),c=t(12),d=t.n(c),r=(t(85),t(86),t(9)),l=t(21),p=t(10),m=t(134),h=t(2);function b(n){var e=n.newTools,t=n.improvements;return Object(h.jsxs)(x,{className:"myProject",children:[Object(h.jsxs)("div",{className:"flex-content",children:[Object(h.jsx)("div",{className:"project-display",children:Object(h.jsx)("img",{src:"/updatedPortfolio/"+n.projectImg,alt:n.projectImg})}),Object(h.jsxs)(u,{children:[Object(h.jsx)("h3",{children:n.title}),Object(h.jsx)("div",{className:"project-display",id:"smallScreen-display",children:Object(h.jsx)("img",{src:"/updatedPortfolio/"+n.projectImg,alt:n.projectImg})}),Object(h.jsx)("p",{children:n.about}),Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsx)("i",{children:"What I learned:"}),e.map((function(n,e){return Object(h.jsx)("li",{children:n},e)}))]}),Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsx)("i",{children:"What/How I would improve:"}),t.map((function(n,e){return Object(h.jsx)("li",{children:n},e)}))]})]})]}),Object(h.jsxs)("div",{className:"btns-container",children:[Object(h.jsx)(m.a,{variant:"contained",color:"primary",className:"btn",target:"_blank",href:n.sourceCode,children:"SOURCE"}),Object(h.jsx)(m.a,{variant:"contained",className:"btn webpage",target:"_blank",href:n.webpage,children:"WEBPAGE"})]})]})}var j,g,x=p.a.article(i||(i=Object(r.a)(["\n    padding-top: 2em;\n    width: 100%;\n    height: 70vh;\n    padding-left: 5em;\n\n    \n    .flex-content {\n        display: flex;\n        height: 85%;\n        .project-display {\n            height: 100%;\n            width: 100%;\n\n            img {\n                width: 45vw;\n            }\n        }\n    }\n   \n    .btns-container {\n        display: grid;\n        justify-items: center;\n        column-gap: 3rem;\n        grid-template-columns: 10vw 10vw;\n        padding-left: 5rem;\n        .webpage {\n            background-color: orange;\n            color: white;\n        }\n\n        .btn {\n            font-weight: 600;\n            width: 8vw;\n        }\n    }\n\n    @media screen and (max-width: 1024px) {\n        height: fit-content;\n    }\n\n    @media screen and (max-width: 900px) {\n        padding-left: 1.5em;\n    }\n\n    @media screen and (max-width: 600px) {\n        .project-display {\n            display: none;\n        }\n\n        .btns-container {\n            padding-top: 2em;\n            /* padding-left: 8em; */\n            display: flex;\n           \n        }\n\n    }\n\n    @media screen and (max-width: 375px) {\n        \n        height:  90vh;\n        padding-left: 0;\n         \n\n\n        .btns-container {\n            padding-top: 3em;\n            padding-left: 0;\n            justify-content: center;\n            column-gap: 3em;\n            /* justify-content: center; */ \n        }\n\n        .flex-content {\n            padding-left: 0;\n\n        }\n    }\n\n\n   \n"]))),u=p.a.div(a||(a=Object(r.a)(["\n    width: max-content;\n    margin-right: 2em;\n    justify-content: center;\n    height: fit-content;\n    padding-left: 2em;\n    #smallScreen-display {\n            display: none;\n    }\n    \n\n    p {\n        padding: 0em;\n        margin: 0;\n        font-size: 24px;\n    }\n    \n    .list {\n        font-size: 24px;\n        color: white;\n        padding: 1em;\n        font-weight: 600;\n        padding-bottom: 0;\n\n        li {\n            font-weight: 300;\n            font-size: 20px;\n        }\n    }\n\n    @media screen and (max-width: 600px) {\n        .flex-content {\n            display: grid;\n            grid-template-columns: 1fr;\n            width: 100vw;\n            /* grid-template-rows: 1fr; */\n        }\n\n        #smallScreen-display {\n            display: block;\n            height: 25vh; \n            \n        }\n        #largeScreen-display {\n            display: none;\n        }\n\n        .list {\n            font-size:20px;\n\n            li {\n                font-size: 16px;\n            }\n        }\n\n        p {\n            font-size: 20px;\n        }\n    }\n\n    @media screen and (max-width: 375px){\n        padding-left: 0;\n        .list {\n            font-size: 18px;\n        }\n\n       \n    }\n\n\n\n\n"]))),f=[{name:"EXP|CON Concert",technologies:["React","Material-UI","JS","CSS"],description:"Implemented UX wireframes and built multipage react desktop app, that acts as the frontline for ticket sales and digitally presents the concert experience.",newSkills:["Wireframe Implementation","React Router","Page Layout Design Patterns"],howToImprove:["Responive Design","Backend introduction of Express/Django for Stripe payments"],projectDisplay:"expconDisplay.svg",sourceCode:"https://github.com/bdejene19/ConcertWebpage",liveVersion:"https://focused-heyrovsky-378c47.netlify.app/"},{name:"Digital Marketing Landing Page",technologies:["React","Material-UI","Responsive Design"],description:"Created landing-page clone of a digital marketing agency, making it fully responsive to be viewable on all devices.",newSkills:["Styled-components responsive design","Power and flexibility of grid/flexbox combination"],howToImprove:["Learn how to use Figma editor/SVGs for controlled styling","Audio or video background window effects"],projectDisplay:"dmLandingDisplay.svg",sourceCode:"https://github.com/bdejene19/DigitalMarketingLandPage",liveVersion:"https://bdejene19.github.io/DigitalMarketingLandPage/"},{name:"Student Test Scores",technologies:["React","CSS","JS"],description:"Implement RESTful API call, presenting the data in an expandable view. Also provides ability to search by student name.",newSkills:["Search-Bar Filter","React Hooks","Hook Life-cycles"],howToImprove:["Tag-filter","Views based on authentication"],projectDisplay:"studentScores.svg",sourceCode:"https://github.com/bdejene19/SearchStudents-AddTags",liveVersion:"https://boring-banach-788d03.netlify.app/"},{name:"Arsenal Fan's Soccer Page",technologies:["React","JS","CSS","HTML"],description:"First front-end project: a single-page app meant to showcase the past, present and future of the soccer club, Arsenal. Is a static HTML site, however, has dynanism through use of state.",newSkills:["React States","React Life-Cycles","DOM manipulation"],howToImprove:["Fetch data from API","Add grid/flexbox layout for consistency/efficiency"],projectDisplay:"arsenalFans.svg",sourceCode:"https://github.com/bdejene19/ArsenalSoccerFansPage",liveVersion:"https://bdejene19.github.io/ArsenalSoccerFansPage/"}],O=t(64),v=t.n(O),y=t(63),w=t.n(y);function k(){var n=Object(o.useState)(0),e=Object(l.a)(n,2),t=e[0],i=e[1],a=function(n){var e=document.querySelectorAll(".myProject");"right"===n?(0===t&&(document.getElementById("left-btn").style.visibility="visible"),e.forEach((function(n){n.style.cssText="\n                    transform: translateX(".concat(t-100,"%);\n                    transition: 0.5s linear\n                ")})),-200===t&&(document.getElementById("right-btn").style.visibility="hidden"),i(t-100)):(document.getElementById("right-btn").style.visibility="visible",e.forEach((function(n){n.style.cssText="\n                    transform: translateX(".concat(t+100,"%);\n                    transition: 0.5s linear; \n                ")})),-100===t&&(document.getElementById("left-btn").style.visibility="hidden"),i(t+100))};return Object(o.useEffect)((function(){})),Object(h.jsxs)(C,{children:[Object(h.jsx)("h2",{id:"currentProjects",children:"Projects"}),Object(h.jsx)(P,{children:f.map((function(n){return Object(h.jsx)(b,{title:n.name,projectImg:n.projectDisplay,about:n.description,newTools:n.newSkills,improvements:n.howToImprove,sourceCode:n.sourceCode,webpage:n.liveVersion},n.name)}))}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"btnsContainer",children:[Object(h.jsx)(w.a,{id:"left-btn",className:"slideChanger",onClick:function(){return a("left")}}),Object(h.jsx)(v.a,{id:"right-btn",className:"slideChanger",onClick:function(){return a("right")}})]})]})}var S,I,C=p.a.section(j||(j=Object(r.a)(["\n    width: 100vw;\n    background-image: url('","/projectsBackground.svg');\n    background-size: cover;\n    padding-top: 15em;\n    overflow: hidden;\n    padding-bottom: 2em;\n\n    padding-left: 4.5em;\n\n    h2 {\n        height: fit-content;\n    }\n\n    .btnsContainer {\n        display: grid;\n        justify-items: center;\n        grid-template-columns: auto auto;\n        align-items: flex-start;\n        margin-top: -1em;\n        z-index: 4;\n        .slideChanger {\n            font-size: 100px;\n            cursor: pointer;\n            color: #00fff1;\n            z-index: 4;\n        }\n\n        #left-btn {\n            visibility: hidden;\n        }\n    }\n\n\n    @media screen and (max-width: 1200px) {\n        padding-top: 12em;\n        padding-left: 2.5em;\n    }\n\n    @media screen and (max-width: 900px) {\n        background-image: url('","/ipadmini-projectsBG.svg');\n        background-position: center;\n        padding-top: 6em;\n    }\n\n    @media screen and (max-width: 375px) {\n        padding-top: 8em;\n        padding-left: 1em;\n        .btnsContainer {\n            padding-top: 0;\n            margin-top: -4em;\n        }\n        \n    }\n\n    \n"])),"/updatedPortfolio","/updatedPortfolio"),P=p.a.article(g||(g=Object(r.a)(["\n    width: 100%;\n    display: flex;\n    height: fit-content;\n  \n    .myProject {\n        width: 100%;\n    }\n\n"]))),z=t(144),E=t(65),B=t.n(E);function N(){return Object(h.jsxs)(D,{children:[Object(h.jsx)("h2",{children:"Like what you see? Get in touch!"}),Object(h.jsxs)(L,{onSubmit:function(n){n.preventDefault(),B.a.sendForm("service_a131xpb","template_mt5oo0i",n.target,"user_71zio4iG3zN4oS8hSre19").then((function(n){console.log(n.text)}),(function(n){console.log(n.text)})),n.target.reset(),document.getElementById("comments-submission").style.display="block",setTimeout((function(){document.getElementById("comments-submission").style.display="none"}),5e4)},children:[Object(h.jsx)(z.a,{className:"commentInput",name:"name",label:"Name",required:!0}),Object(h.jsx)(z.a,{className:"commentInput",name:"contactReason",label:"Contact Reason"}),Object(h.jsxs)("div",{className:"comments-section",children:[Object(h.jsx)("label",{for:"comments",children:"Leave a comment, additional details and/or contact info:"}),Object(h.jsx)("textarea",{name:"comments",id:"comments",required:!0})]}),Object(h.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]}),Object(h.jsx)("p",{id:"comments-submission",children:"Thanks for reaching out, I'll get back to you as soon as I can!"})]})}var T,D=p.a.section(S||(S=Object(r.a)(["\n    width: 100%;\n    height: fit-content;\n    padding: 1em;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    background: linear-gradient(45deg, #00fff1, slateblue 60%);\n    padding-bottom: 3em;\n    h2 {\n        font-size: 32px;\n        justify-self: left;\n        padding-left: 2em;\n        padding-bottom: 1em;\n        padding-top: 1em;\n    }\n\n    p {\n        padding-top: 2em;\n        /* padding-left: 1em; */\n        text-align: center;\n        font-weight: 900;\n        display: none;\n        font-size: 24px;\n    }\n\n    @media screen and (max-width: 375px) {\n        h2 {\n            padding-left: 1em;\n        }\n    }\n\n"]))),L=p.a.form(I||(I=Object(r.a)(["\n    opacity: 0.8;\n    padding: 2em;\n    box-shadow: 5px 5px 0  skyblue;\n    background-color: white;\n    width: 50vw;\n    /* height: 65vh; */\n    display: flex;\n    flex-direction: column;\n    row-gap: 2em;\n    border-radius: 3px 3px 3px 3px;\n\n    \n\n    .comments-section {\n        width: 100%;\n       \n\n        textarea {\n            margin-top: 1em;\n            width: 100%;\n            height: 15vh;\n            resize: vertical;\n            max-height: 25vh;\n            padding: 0.5em;\n            font-size: 16px;\n        }\n    }\n\n    @media screen and (max-width: 375px) {\n        width: 80vw;\n\n       \n    }\n\n"])));function M(){return Object(h.jsxs)(A,{children:[Object(h.jsxs)("div",{className:"tooltip",children:[Object(h.jsx)("span",{className:"tooltiptext",children:"Github"}),Object(h.jsx)("a",{href:"https://github.com/bdejene19",children:Object(h.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",alt:"github",className:"contact-icon"})})]}),Object(h.jsxs)("div",{className:"tooltip",children:[Object(h.jsx)("span",{className:"tooltiptext",children:"LinkedIn"}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/",children:Object(h.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png",alt:"LinkedIn",className:"contact-icon",id:"linkedin-icon"})})]})]})}var F,A=p.a.div(T||(T=Object(r.a)(['\n    display: flex;\n    column-gap: 3em;\n    .tooltip {\n        position: relative;\n        display: inline-block;\n    }\n    .tooltip .tooltiptext {\n        visibility: hidden;\n        width: 100px;\n        background-color: black;\n        color: #fff;\n        text-align: center;\n        border-radius: 6px;\n        padding: 5px 0;\n        position: absolute;\n        z-index: 1;\n        top: 120%;\n        left: 50%;\n        margin-left: -60px;\n    }\n    .tooltip .tooltiptext::after {\n        content: "";\n        position: absolute;\n        bottom: 100%;\n        left: 50%;\n        margin-left: 0px;\n        border-width: 5px;\n        border-style: solid;\n        border-color: transparent transparent black transparent;\n    }\n    .tooltip:hover .tooltiptext {\n        visibility: visible;\n    }\n    .contact-icon {\n        cursor: pointer;\n        width: 10vw;\n        height: 15vh;\n\n    }\n\n    \n    #linkedin-icon {\n        width: 8vw;\n        height: 12vh;\n        margin-top: 1em;\n    }\n\n\n    @media screen and (max-width: 375px) {\n        column-gap: 1.5em;\n    }\n\n'])));function R(){return Object(h.jsxs)(X,{id:"hero-section",children:[Object(h.jsxs)("div",{className:"intro-text",children:[Object(h.jsx)("h1",{children:"Who am I"}),Object(h.jsx)("p",{children:"A self driven Software Engineer focusing on the JavaScript stacks like React for Front End Development. Also experienced in Python OOP data analytics. "})]}),Object(h.jsx)("img",{src:"/updatedPortfolio/herobackground.svg",alt:"hero background",className:"bg-photo",id:"desktop-bg"}),Object(h.jsx)("img",{src:"/updatedPortfolio/resized-ipadMini-bg.svg",alt:"hero background",className:"bg-photo",id:"ipadmini-bg"}),Object(h.jsx)("img",{src:"/updatedPortfolio/iphoneX-bg.svg",alt:"iphone BG background",className:"bg-photo",id:"iphoneX-bg"}),Object(h.jsx)("div",{className:"quick-contact",children:Object(h.jsx)(M,{})})]})}var q,H,X=p.a.section(F||(F=Object(r.a)(["\n    height: fit-content;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n\n    .bg-photo {\n        width: 100vw;\n        z-index: -1;\n    }\n\n    .quick-contact {\n        position: absolute;\n        right: 3em;\n        top: 40%;\n        align-self: center;\n        display: flex;\n    }\n\n    .intro-text {\n        z-index: 0;\n        position: absolute;\n        padding-top: 5em;\n        padding-left: 4.5em; \n\n        p {\n\n            padding-top: 2em;\n            width: 45%;\n            font-size: 32px;\n        }\n    }\n\n    #ipadmini-bg, #iphoneX-bg {\n        display: none;\n    }\n\n    @media screen and (max-width: 1200px) {\n        .intro-text {\n            /* padding-top: 3em; */\n            padding-left: 2.25em;\n\n            p {\n                font-size: 28px;\n                padding-top: 1em;\n            }\n        }\n        .quick-contact {\n            top: 20%;\n            .contact-icon {\n                width: minmax(4vw, 7vw);\n            }\n\n            #linkedin-icon {\n                height: 9vh;\n                margin-top: 1.3em;\n            }\n        }\n    }\n\n    @media screen and (max-width: 1024px) {\n        .quick-contact {\n            top: 18%;\n\n            .contact-icon {\n                height: 6em;\n                margin-top: 0.6em;\n            }\n            #linkedin-icon {\n                height: 5em;\n            }\n\n            \n        }\n\n        \n    }\n\n\n    @media screen and (max-width: 900px) {\n        #desktop-bg {\n            display: none;\n        }\n\n        #ipadmini-bg {\n            display: block;\n            /* height: 60vh; */\n        }\n        .intro-text {\n            top: 37%;\n            p {\n                padding-top: 2em;\n                width: 60%;\n            }\n\n           \n        }\n\n        .quick-contact {\n            top: 10%;\n            left: 55%;\n           \n        }\n   \n    }\n\n    @media screen and (max-width: 768px) {\n        .intro-text {\n            top: minmax(30%, 42%);\n            p {\n                width: 55%;\n            }\n        }\n    }\n\n    @media screen and (max-width: 600px) {\n        .intro-text {\n            top: 30%;\n            padding-left: 1em;\n            padding-top: 1em;\n\n            p {\n                font-size: 20px;\n                padding-top: 3.5em;\n            }\n        }\n    }\n\n    @media screen and (max-width: 375px) {\n        #ipadmini-bg {\n            display: none;\n        }\n\n        #iphoneX-bg {\n            display: block;\n            \n        }\n        \n        .intro-text {\n            top: 15%;\n\n            p {\n                padding-top: 1.5em;\n            }\n        }\n\n        .quick-contact {\n            left: 10%;\n            top: 90%;\n            column-gap: 0;\n\n            .contact-icon, #linkedin-icon {\n                width: 15vw;\n            }\n        }\n    }\n   \n      \n"])));function G(){return Object(h.jsxs)(V,{id:"immediateContact",children:[Object(h.jsxs)(U,{children:[Object(h.jsx)("h4",{children:"Phone:"}),Object(h.jsx)("p",{style:{width:"max-content"},children:"519-619-3930"})]}),Object(h.jsxs)(U,{children:[Object(h.jsx)("h4",{children:"Email:"}),Object(h.jsx)("p",{children:"bdejene19@gmail.com"})]}),Object(h.jsxs)(U,{children:[Object(h.jsx)("h4",{children:"LinkedIn:"}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/",children:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/"})]}),Object(h.jsxs)(U,{children:[Object(h.jsx)("h4",{children:"Github:"}),Object(h.jsx)("a",{href:"https://github.com/bdejene19",children:"https://github.com/bdejene19"})]})]})}var J,W,V=p.a.article(q||(q=Object(r.a)(["\n    width: fit-content;\n    height: 40vh;\n    padding: 0.5em;\n    right: 0;\n    top: -20%;\n    border-radius: 2px 2px 2px 2px;\n    position: absolute;\n    display: grid;\n    grid-template-rows: repeat(4,);;\n    z-index: 2;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    box-shadow: 0 5px 25px 10px #1B69DE;\n    opacity: 0;\n    visibility: hidden;  \n    overflow: hidden;\n    z-index: -1;  \n    h4 {\n        opacity: 1;\n        border-bottom: solid skyblue 1px;\n    }\n\n    p, a {\n        padding-top: 0.5em;\n        width: min-content;\n        height: fit-content;\n\n        @media screen and (max-width: 1024px) {\n            width: 28vw;\n            /* p, a {\n                width: 70%;\n                border: solid green 3px;\n            } */\n        }\n    }\n\n    @media screen and (max-width: 900px) {\n        width: 40%;\n\n    }\n"]))),U=p.a.div(H||(H=Object(r.a)(["\n    display: flex;\n    height: fit-content;\n    flex-direction: column;\n"])));function _(){var n=Object(o.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1],a=Object(o.useState)(!1),s=Object(l.a)(a,2),c=s[0],d=s[1],r=Object(o.useState)(!1),p=Object(l.a)(r,2),m=p[0],b=p[1],j=function(){t?document.getElementById("skillsContentSection").style.cssText="\n                visibility: hidden;\n                transform: translateY(-20%);\n                transition: 0.3s ease-in-out;\n                opacity: 0;\n                z-index: -1;\n            ":(m&&x(),document.getElementById("skillsContentSection").style.cssText="\n                visibility: visible;\n                transform: translateY(15%);\n                transition: 0.3s ease-in-out;\n                opacity: 0.95;\n                z-index: 4;\n\n            "),i(!t)},g=function(){document.getElementById("immediateContact").style.cssText=c?"\n                visibility: hidden;\n                transform: translateY(-70%);\n                transition: 0.3s ease-in-out;\n                opacity: 0;\n                z-index: -1;\n            ":"\n                visibility: visible;\n                transform: translateY(70%);\n                transition: 0.3s ease-in-out;\n                opacity: 0.95;\n                z-index: 4;\n\n            ",d(!c)},x=function(){m?(document.getElementById("aboutMe-article").style.cssText="\n                visibility: hidden;\n                width: 0;\n                height: 0;\n                margin-left: 0;\n                transition: 0.5s ease-in-out;\n                opacity: 0;\n                z-index: -1;\n            ",document.getElementById("hero-section").style.filter="none"):(t&&j(),c&&g(),document.getElementById("aboutMe-article").style.cssText="\n                visibility: visible;\n                width: 80vw;\n                height: fit-content;\n                margin-left: -40vw;\n                transition: 0.3s ease-in-out;\n                opacity: 0.8;\n                z-index: 4;\n\n            ",document.getElementById("hero-section").style.cssText="\n                filter: blur(10px);\n                -webkit-filter: blur(10px);\n                transition: 0.3s ease-in-out;            \n            "),b(!m)};return Object(h.jsxs)($,{children:[Object(h.jsx)(nn,{navBtnColor:"#00FFF1",className:"name",id:"nav-aboutMe",onClick:function(){return x()},children:"Bemnet Dejene"}),Object(h.jsx)("a",{href:"#currentProjects",children:Object(h.jsx)(nn,{className:"sub-nav",id:"nav-project",children:"Projects"})}),Object(h.jsx)(nn,{className:"sub-nav",id:"nav-skills",onClick:function(){return j()},children:"Skills"}),Object(h.jsx)(nn,{className:"sub-nav",onClick:function(){return window.location.href="/updatedPortfolio/BemnetDejeneDevResume_wordType.pdf"},id:"nav-resume",children:"Resume"}),Object(h.jsx)(nn,{className:"sub-nav",id:"nav-contactNow",onClick:function(){return g()},children:"Contact Info"})]})}var Y,K,Q,Z,$=p.a.nav(J||(J=Object(r.a)(["\n    width: 100vw;\n    height: 8vh;\n    background-color: #1B69DE;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    align-items: center;\n    .name {\n        grid-column: 1/3;\n        padding-left: 3em;\n    }\n\n    #nav-resume {\n        transform: translateX(-5vw);\n    }\n    #nav-contactNow {\n        justify-self: center;\n    }\n\n    #nav-resume {\n        justify-self: right;\n    }\n  \n    /* .sub-nav {\n        width: max-content;\n    } */\n\n    @media screen and (max-width: 1200px) {\n        width: 100%;\n\n        #nav-resume, #nav-contactNow {\n            text-align: center;\n            justify-self: normal;\n        }\n\n        .name {\n\n            padding-left: 1.5em;\n        }\n    }\n\n    @media screen and (max-width: 600px) {\n       display: none;\n    }\n"]))),nn=p.a.button(W||(W=Object(r.a)(["\n    width: max-content;\n    cursor: pointer;\n    height: 7vh;\n    border: none;\n    font-size: 24px;\n    color: ",";\n    background-color: transparent;\n\n    @media screen and (max-width: 900px) {\n        height: 5vh;\n        width: fit-content;\n        font-size: 18px;\n    }\n\n    @media screen and (max-width: 600px) {\n        display: none;\n\n        \n    }\n  \n"])),(function(n){return n.navBtnColor||"white"})),en=function(){var n=Object(o.useState)("frontend"),e=Object(l.a)(n,2),t=e[0],i=e[1],a=function(n){document.getElementById("".concat(t,"-content")).style.visibility="hidden",document.getElementById(t).style.borderBottom="none",document.getElementById("".concat(n,"-content")).style.visibility="visible",document.getElementById(n).style.borderBottom="frontend"===n?"solid 3px #00fff1":"solid 3px orange",i(n)};return Object(h.jsxs)(tn,{id:"skillsContentSection",children:[Object(h.jsxs)(on,{children:[Object(h.jsx)("h3",{onClick:function(){return a("frontend")},id:"frontend",children:"Front-End"}),Object(h.jsx)("h3",{onClick:function(){return a("backend")},id:"backend",children:"Back-End"})]}),Object(h.jsxs)(an,{id:"frontend-content",children:[Object(h.jsxs)("ul",{children:["React",Object(h.jsx)("li",{children:"Async/Await"}),Object(h.jsx)("li",{children:"Hooks (useState, useEffect, useMemo, etc.)"})]}),Object(h.jsxs)("ul",{children:["JavaScript",Object(h.jsx)("li",{children:"Modern ES6/8 syntax - e.g. arrow functions, block-scoped constructs (Let and Const), template literals"}),Object(h.jsx)("li",{children:"AJAX & Fetch API methodologies"}),Object(h.jsx)("li",{children:"Object-Oriented Programming (OOP)"})]}),Object(h.jsxs)("ul",{children:["Figma",Object(h.jsx)("li",{children:'Pre-development wireframing of design to prevent "coding blind"'}),Object(h.jsx)("li",{children:"Neumorphic Design"})]}),Object(h.jsxs)("ul",{children:["HTML",Object(h.jsx)("li",{children:"Semantic HTML"})]}),Object(h.jsxs)("ul",{children:["CSS",Object(h.jsx)("li",{children:"Grid/FlexBox layout"}),Object(h.jsx)("li",{children:"CSS pre-processors such as Sass for dynamic CSS"})]})]}),Object(h.jsxs)(an,{id:"backend-content",children:[Object(h.jsxs)("ul",{children:["Express",Object(h.jsx)("li",{children:"Restful API"}),Object(h.jsx)("li",{children:"HTTP protocol requests"})]}),Object(h.jsxs)("ul",{children:["MongoDB (NoSQL)",Object(h.jsx)("li",{children:"User data storage for persistence"}),Object(h.jsx)("li",{children:"Database queries and manipulation through HTTP requests"}),Object(h.jsx)("li",{children:"Object Module Schemas"})]}),Object(h.jsxs)("ul",{children:["Python",Object(h.jsx)("li",{children:"Data analytics using Pandas for dataframe manipulation/queries"}),Object(h.jsx)("li",{children:"Exposure to ML libraries such as Tensorflow and Keras"})]})]})]})},tn=p.a.section(Y||(Y=Object(r.a)(["\n    height: 70vh;\n    width: 80vw;\n    z-index: 1;\n    position: absolute;\n    transform: translateY(-20%);\n    left: 50%;\n    margin-left: -40vw;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    border-radius: 1rem 1rem 1rem 1rem;\n    box-shadow: 0 5px 15px 10px #1B69DE;\n    visibility: hidden;\n    opacity: 0;\n    z-index: -1;\n    \n    #frontend {\n        border-bottom: solid 3px #00fff1;\n    }\n\n    #backend-content {\n        visibility: hidden;\n    }\n"]))),an=p.a.article(K||(K=Object(r.a)(["\n    width: 100%;\n    padding-left: 1.5em;\n    height: 90%;\n    position: absolute;\n    padding-top: 1em;\n\n    ul {\n        padding: 0.5em;\n        font-size: 20px;\n        font-weight: 700;\n\n        li {\n            font-weight: 300;\n            font-size: 18px;\n        }\n    }\n"]))),on=p.a.div(Q||(Q=Object(r.a)(["\n    padding-top: 1em;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n\n    h3 {\n        font-size: 1.75rem;\n        cursor: pointer;\n    }\n\n    div {\n\n    }\n\n    \n"])));function sn(){return Object(h.jsxs)(dn,{id:"aboutMe-article",children:[Object(h.jsx)("h3",{children:"Life Outside of Work"}),Object(h.jsx)("p",{children:"On paper, I am currently located in London, Ontario and have a Double Major in Medical Sciences and Biology from the University of Western Ontario. Between the lines, I am an easy going person who's always smiling and love to express my creative thinking through code, piano, guitar and even freestyle rapping \ud83c\udfb6 (no sound cloud, haha)."}),Object(h.jsx)("p",{children:"The reason I fell in love with code was that it enabled my creative and logistic STEM halves of myself to work in tandem to create something meaningful and has an impact on other peoples lives."})]})}var cn,dn=p.a.article(Z||(Z=Object(r.a)(["\n    width: 0;\n    height: 0;\n    padding: 1em;\n    position: absolute;\n    left: 50%;\n    margin-left: 0vw;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    border-radius: 20px 20px 20px 20px;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    row-gap: 1em;\n    top: 20%;\n    visibility: hidden;\n    overflow: hidden;\n    opacity: 0;\n    z-index: 4;\n\n    p {\n        font-size: 18px;\n        font-weight: 600;\n    }\n\n    @media screen and (max-width: 900px) {\n        \n    }\n"]))),rn=t(43),ln=t(52),pn=t(4),mn=t(140),hn=t(146),bn=t(139),jn=t(68),gn=t.n(jn),xn=t(141),un=t(142),fn=t(147),On=t(67),vn=t.n(On),yn=t(143),wn=t(69),kn=t.n(wn),Sn=t(66),In=t.n(Sn),Cn=t(70),Pn=t.n(Cn),zn=Object(mn.a)({list:{width:250},fullList:{width:"auto"}});function En(){var n=zn(),e=s.a.useState({left:!1}),t=Object(l.a)(e,2),i=t[0],a=t[1],o=function(n,e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(Object(ln.a)(Object(ln.a)({},i),{},Object(rn.a)({},n,e)))}},c=function(e){return Object(h.jsx)("div",{className:Object(pn.a)(n.list,Object(rn.a)({},n.fullList,"top"===e||"bottom"===e)),role:"presentation",onKeyDown:o(e,!1),children:Object(h.jsxs)(bn.a,{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr",justifyItems:"center"},children:[Object(h.jsx)(Tn,{src:"https://www.iconfinder.com/data/icons/diversity-avatars-volume-01-v2/64/man-beard-glasses-african-512.png",alt:"avatar"}),"Phone: 519-619-3930",Object(h.jsx)("br",{}),"Email: bdejene19@gmail.com",Object(h.jsx)("br",{})]})}),Object(h.jsx)("div",{style:{paddingTop:"2em"},children:["About Bemnet Dejene","Projects","Skills","Download Resume","Contact Info"].map((function(n,e){var t="";return t=0===e?Object(h.jsx)(In.a,{}):1===e?Object(h.jsx)(vn.a,{}):2===e?Object(h.jsx)(gn.a,{}):3===e?Object(h.jsx)(kn.a,{}):Object(h.jsx)(Pn.a,{}),Object(h.jsxs)(xn.a,{button:!0,children:[Object(h.jsx)(un.a,{children:t}),Object(h.jsx)(fn.a,{primary:n})]},n)}))})]})})};return Object(h.jsx)("div",{style:{backgroundColor:"#1B69DE"},children:["left"].map((function(n){return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{style:{padding:"0.5em",paddingLeft:"0.75em"},children:Object(h.jsx)(yn.a,{onClick:o(n,!0),id:"menu-icon",style:{color:"white"}})}),Object(h.jsx)(hn.a,{anchor:n,open:i[n],onClose:o(n,!1),children:c(n)})]},n)}))})}var Bn,Nn,Tn=p.a.img(cn||(cn=Object(r.a)(["\n  width: 45vw;\n"])));function Dn(){return Object(h.jsx)(Ln,{children:Object(h.jsx)(En,{})})}var Ln=p.a.nav(Bn||(Bn=Object(r.a)(["\n    display: none; \n    \n\n    @media screen and (max-width: 600px) {\n        display: block;\n        \n    }\n\n"])));p.a.div(Nn||(Nn=Object(r.a)(["\n    padding: 0.5em;\n    display: flex;\n    flex-direction: column;\n"])));var Mn=function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)(_,{}),Object(h.jsx)(en,{}),Object(h.jsx)(sn,{}),Object(h.jsx)(Dn,{}),Object(h.jsx)(G,{})]}),Object(h.jsxs)("main",{children:[Object(h.jsx)(R,{}),Object(h.jsx)(k,{},"1")]}),Object(h.jsx)("footer",{children:Object(h.jsx)(N,{})})]})},Fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,149)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;t(n),i(n),a(n),o(n),s(n)}))};d.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(Mn,{})}),document.getElementById("root")),Fn()}},[[95,1,2]]]);
//# sourceMappingURL=main.5e967539.chunk.js.map