(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{66:function(n,e,t){},67:function(n,e,t){},74:function(n,e,t){"use strict";t.r(e);var i,o,a=t(0),s=t.n(a),c=t(11),r=t.n(c),d=(t(66),t(67),t(9)),l=t(19),h=t(10),p=t(109),m=t(2);function b(n){var e=n.newTools,t=n.improvements;return Object(m.jsxs)(u,{className:"myProject",children:[Object(m.jsxs)("div",{className:"flex-content",children:[Object(m.jsx)("div",{className:"project-display",children:Object(m.jsx)("img",{src:n.projectImg,alt:n.projectImg})}),Object(m.jsxs)(x,{children:[Object(m.jsx)("h3",{children:n.title}),Object(m.jsx)("p",{children:n.about}),Object(m.jsxs)("ul",{className:"list",children:[Object(m.jsx)("i",{children:"What I learned:"}),e.map((function(n){return Object(m.jsx)("li",{children:n})}))]}),Object(m.jsxs)("ul",{className:"list",children:[Object(m.jsx)("i",{children:"What/How I would improve:"}),t.map((function(n){return Object(m.jsx)("li",{children:n})}))]})]})]}),Object(m.jsxs)("div",{className:"btns-container",children:[Object(m.jsx)(p.a,{variant:"contained",color:"primary",className:"btn",target:"_blank",href:n.sourceCode,children:"SOURCE"}),Object(m.jsx)(p.a,{variant:"contained",className:"btn webpage",target:"_blank",href:n.webpage,children:"WEBPAGE"})]})]})}var j,g,u=h.a.article(i||(i=Object(d.a)(["\n    padding-top: 2em;\n    width: 100%;\n    height: 80vh;\n\n    .flex-content {\n        display: flex;\n        height: 85%;\n        .project-display {\n            height: 100%;\n            width: 100%;\n\n            img {\n                width: 45vw;\n            }\n        }\n    }\n   \n    .btns-container {\n        display: flex;\n        justify-items: center;\n        column-gap: 3rem;\n        padding-left: 5rem;\n        .webpage {\n            background-color: orange;\n            color: white;\n        }\n\n        .btn {\n            font-weight: 600;\n            width: 8vw;\n        }\n    }\n\n    @media screen and (max-width: 1024px) {\n        height: fit-content;\n    }\n\n"]))),x=h.a.div(o||(o=Object(d.a)(["\n    width: max-content;\n    margin-right: 3em;\n    justify-content: center;\n    height: fit-content;\n\n    p {\n        padding: 1em;\n        font-size: 24px;\n    }\n    \n    .list {\n        font-size: 24px;\n        color: white;\n        padding: 1em;\n        font-weight: 600;\n        padding-bottom: 0;\n\n        li {\n            font-weight: 300;\n            font-size: 20px;\n        }\n    }\n\n\n\n"]))),f=[{name:"EXP|CON Concert",technologies:["React","Material-UI","JS","CSS"],description:"Implemented UX wireframes and built multipage react desktop app, that acts as the frontline for ticket sales and digitally presents the concert experience.",newSkills:["Wireframe Implementation","React Router","Page Layout Design Patterns"],howToImprove:["Responive Design","Backend introduction of Express/Django for Stripe payments"],projectDisplay:"expconDisplay.svg",sourceCode:"https://github.com/bdejene19/ConcertWebpage",liveVersion:"https://focused-heyrovsky-378c47.netlify.app/"},{name:"Digital Marketing Landing Page",technologies:["React","Material-UI","Responsive Design"],description:"Created landing-page clone of a digital marketing agency, making it fully responsive to be viewable on all devices.",newSkills:["Styled-components responsive design","Power and flexibility of grid/flexbox combination"],howToImprove:["Learn how to use Figma editor/SVGs for controlled styling","Audio or video background window effects"],projectDisplay:"dmLandingDisplay.svg",sourceCode:"https://github.com/bdejene19/DigitalMarketingLandPage",liveVersion:"https://bdejene19.github.io/DigitalMarketingLandPage/"},{name:"Student Test Scores",technologies:["React","CSS","JS"],description:"Implement RESTful API call, presenting the data in an expandable view. Also provides ability to search by student name.",newSkills:["Search-Bar Filter","React Hooks","Hook Life-cycles"],howToImprove:["Tag-filter","Views based on authentication"],projectDisplay:"studentScores.svg",sourceCode:"https://github.com/bdejene19/SearchStudents-AddTags",liveVersion:"https://boring-banach-788d03.netlify.app/"},{name:"Arsenal Fan's Soccer Page",technologies:["React","JS","CSS","HTML"],description:"First front-end project: a single-page app meant to showcase the past, present and future of the soccer club, Arsenal. Is a static HTML site, however, has dynanism through use of state.",newSkills:["React States","React Life-Cycles","DOM manipulation"],howToImprove:["Fetch data from API","Add grid/flexbox layout for consistency/efficiency"],projectDisplay:"arsenalFans.svg",sourceCode:"https://github.com/bdejene19/ArsenalSoccerFansPage",liveVersion:"https://bdejene19.github.io/ArsenalSoccerFansPage/"}],v=t(56),O=t.n(v),y=t(55),w=t.n(y);function k(){var n=Object(a.useState)(0),e=Object(l.a)(n,2),t=e[0],i=e[1],o=function(n){var e=document.querySelectorAll(".myProject");"right"===n?(0===t&&(document.getElementById("left-btn").style.visibility="visible"),e.forEach((function(n){n.style.cssText="\n                    transform: translateX(".concat(t-100,"%);\n                    transition: 0.5s linear\n                ")})),-200===t&&(document.getElementById("right-btn").style.visibility="hidden"),i(t-100)):(document.getElementById("right-btn").style.visibility="visible",e.forEach((function(n){n.style.cssText="\n                    transform: translateX(".concat(t+100,"%);\n                    transition: 0.5s linear; \n                ")})),-100===t&&(document.getElementById("left-btn").style.visibility="hidden"),i(t+100))};return Object(m.jsxs)(C,{children:[Object(m.jsx)("h2",{id:"currentProjects",children:"Projects"}),Object(m.jsx)(E,{children:f.map((function(n){return Object(m.jsx)(b,{title:n.name,projectImg:n.projectDisplay,about:n.description,newTools:n.newSkills,improvements:n.howToImprove,sourceCode:n.sourceCode,webpage:n.liveVersion})}))}),Object(m.jsxs)("div",{className:"btnsContainer",children:[Object(m.jsx)(w.a,{id:"left-btn",className:"slideChanger",style:{visibility:"hidden"},onClick:function(){return o("left")}}),Object(m.jsx)(O.a,{id:"right-btn",className:"slideChanger",onClick:function(){return o("right")}})]})]})}var S,I,C=h.a.section(j||(j=Object(d.a)(["\n    width: 100vw;\n    background-image: url('projectsBackground.svg');\n    background-size: cover;\n    padding-top: 15em;\n    overflow: hidden;\n    padding-bottom: 2em;\n\n    padding-left: 4.5em;\n\n    h2 {\n        height: fit-content;\n    }\n\n    .btnsContainer {\n        display: grid;\n        justify-items: center;\n        grid-template-columns: auto auto;\n        align-items: flex-start;\n        margin-top: -3em;\n        .slideChanger {\n            font-size: 100px;\n            cursor: pointer;\n            color: #00fff1;\n        }\n    }\n\n\n    @media screen and (max-width: 1200px) {\n        padding-top: 12em;\n    }\n\n    /* @media screen and (max-width:) */\n    \n"]))),E=h.a.article(g||(g=Object(d.a)(["\n    width: 100%;\n    display: flex;\n    height: fit-content;\n    /* padding-left: 3em; */\n        /* padding-top: 1em; */\n    .myProject {\n        width: 100%;\n    }\n\n"]))),P=t(108);function B(){return Object(m.jsxs)(T,{children:[Object(m.jsx)("h2",{children:"Like what you see? Get in touch!"}),Object(m.jsxs)(D,{method:"POST","data-netlify":"true",children:[Object(m.jsx)(P.a,{className:"commentInput",label:"Name"}),Object(m.jsx)(P.a,{className:"commentInput",label:"Contact Info"}),Object(m.jsxs)("div",{className:"comments-section",children:[Object(m.jsx)("label",{for:"comments",children:"Leave a comment or additional details:"}),Object(m.jsx)("textarea",{name:"comments",id:"comments"})]}),Object(m.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})]})}var N,T=h.a.section(S||(S=Object(d.a)(["\n    width: 100%;\n    height: fit-content;\n    padding: 1em;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    background: linear-gradient(45deg, #00fff1, slateblue 60%);\n    padding-bottom: 3em;\n    h2 {\n        font-size: 32px;\n        justify-self: left;\n        padding-left: 2em;\n        padding-bottom: 1em;\n        padding-top: 1em;\n    }\n\n"]))),D=h.a.form(I||(I=Object(d.a)(["\n    opacity: 0.8;\n    padding: 2em;\n    box-shadow: 5px 5px 0  skyblue;\n    background-color: white;\n    width: 50vw;\n    /* height: 65vh; */\n    display: flex;\n    flex-direction: column;\n    row-gap: 2em;\n    border-radius: 3px 3px 3px 3px;\n\n    \n\n    .comments-section {\n        width: 100%;\n       \n\n        textarea {\n            margin-top: 1em;\n            width: 100%;\n            height: 15vh;\n            resize: vertical;\n            max-height: 25vh;\n            padding: 0.5em;\n            font-size: 16px;\n        }\n    }\n\n"])));function L(){return Object(m.jsxs)(z,{children:[Object(m.jsxs)("div",{className:"tooltip",children:[Object(m.jsx)("span",{className:"tooltiptext",children:"LinkedIn"}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/",children:Object(m.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png",alt:"LinkedIn",className:"contact-icon",id:"linkedin-icon"})})]}),Object(m.jsxs)("div",{className:"tooltip",children:[Object(m.jsx)("span",{className:"tooltiptext",children:"GitHub"}),Object(m.jsx)("a",{href:"https://github.com/bdejene19",children:Object(m.jsx)("img",{src:"/updatedPortfoliohttps://www.flaticon.com/svg/vstatic/svg/25/25231.svg?token=exp=1620068739~hmac=28d4e67bd5da4d0b2d4f21e3812f2031",alt:"github",className:"contact-icon"})})]})]})}var M,z=h.a.div(N||(N=Object(d.a)(['\n    display: flex;\n    column-gap: 3em;\n    .tooltip {\n        position: relative;\n        display: inline-block;\n    }\n    .tooltip .tooltiptext {\n        visibility: hidden;\n        width: 100px;\n        background-color: black;\n        color: #fff;\n        text-align: center;\n        border-radius: 6px;\n        padding: 5px 0;\n        position: absolute;\n        z-index: 1;\n        top: 120%;\n        left: 50%;\n        margin-left: -60px;\n    }\n    .tooltip .tooltiptext::after {\n        content: "";\n        position: absolute;\n        bottom: 100%;\n        left: 50%;\n        margin-left: 0px;\n        border-width: 5px;\n        border-style: solid;\n        border-color: transparent transparent black transparent;\n    }\n    .tooltip:hover .tooltiptext {\n        visibility: visible;\n    }\n    .contact-icon {\n        cursor: pointer;\n        width: 10vw;\n        height: 15vh;\n\n    }\n\n    \n    #linkedin-icon {\n        width: 8vw;\n        height: 14vh;\n    }\n\n\n'])));function A(){return Object(m.jsxs)(H,{id:"hero-section",children:[Object(m.jsxs)("div",{className:"intro-text",children:[Object(m.jsx)("h1",{children:"Who am I"}),Object(m.jsx)("p",{children:"A self driven Software Engineer focusing on the JavaScript stacks like React for Front End Development. Also experienced in Python OOP data analytics. "})]}),Object(m.jsx)("img",{src:"/updatedPortfolio/herobackground.svg",alt:"hero background",className:"bg-photo"}),Object(m.jsx)("div",{className:"quick-contact",children:Object(m.jsx)(L,{})})]})}var F,R,H=h.a.section(M||(M=Object(d.a)(["\n    height: fit-content;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n\n    .bg-photo {\n        width: 100vw;\n        z-index: -1;\n    }\n\n    .quick-contact {\n        position: absolute;\n        right: 3em;\n        top: 40%;\n        align-self: center;\n        display: flex;\n        column-gap: 3em;\n    }\n\n    .intro-text {\n        z-index: 0;\n        position: absolute;\n        padding-top: 5em;\n        padding-left: 4.5em; \n\n        p {\n\n            padding-top: 2em;\n            width: 45%;\n            font-size: 32px;\n        }\n    }\n\n    @media screen and (max-width: 1200px) {\n        .intro-text {\n            padding-top: 3em;\n            padding-left: 2.25em;\n\n            p {\n                font-size: 28px;\n                padding-top: 1em;\n            }\n        }\n        .quick-contact {\n\n            .contact-icon {\n                width: 7vw\n            }\n\n            #linkedin-icon {\n                height: 9vh;\n                margin-top: 1.3em;\n            }\n        }\n    }\n\n    @media screen and (max-width: 1024px) {\n        .quick-contact {\n            top: 18%;\n\n            #linkedin-icon {\n                height: 5em;\n                margin-top: 4em;\n                /* border: solid black 3px; */\n            }\n        }\n\n        \n    }\n\n\n    @media screen and (max-width: 900px) {\n        .intro-text {\n            padding-top: 2em;\n\n            #linkedin-icon {\n                height: 4em;\n                width: 3vw;\n                margin-top: 1.5em;\n            }\n        }\n        \n    }\n\n   \n      \n"])));function q(){return Object(m.jsxs)(V,{id:"immediateContact",children:[Object(m.jsxs)(G,{children:[Object(m.jsx)("h4",{children:"Phone:"}),Object(m.jsx)("p",{style:{width:"max-content"},children:"519-619-3930"})]}),Object(m.jsxs)(G,{children:[Object(m.jsx)("h4",{children:"Email:"}),Object(m.jsx)("p",{children:"bdejene19@gmail.com"})]}),Object(m.jsxs)(G,{children:[Object(m.jsx)("h4",{children:"LinkedIn:"}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/",children:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/"})]}),Object(m.jsxs)(G,{children:[Object(m.jsx)("h4",{children:"Github:"}),Object(m.jsx)("a",{href:"https://github.com/bdejene19",children:"https://github.com/bdejene19"})]})]})}var J,W,V=h.a.article(F||(F=Object(d.a)(["\n    width: fit-content;\n    height: 40vh;\n    padding: 0.5em;\n    right: 0;\n    top: -20%;\n    border-radius: 2px 2px 2px 2px;\n    position: absolute;\n    display: grid;\n    grid-template-rows: repeat(4,);;\n    z-index: 2;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    box-shadow: 0 5px 25px 10px #1B69DE;\n    opacity: 0;\n    visibility: hidden;    \n    h4 {\n        opacity: 1;\n        border-bottom: solid skyblue 1px;\n    }\n\n    p, a {\n        padding-top: 0.5em;\n        width: min-content;\n        height: fit-content;\n\n        @media screen and (max-width: 1024px) {\n            width: 28vw;\n            /* p, a {\n                width: 70%;\n                border: solid green 3px;\n            } */\n        }\n    }\n"]))),G=h.a.div(R||(R=Object(d.a)(["\n    display: flex;\n    height: fit-content;\n    flex-direction: column;\n"])));function U(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),c=s[0],r=s[1],d=Object(a.useState)(!1),h=Object(l.a)(d,2),p=h[0],b=h[1],j=function(){t?document.getElementById("skillsContentSection").style.cssText="\n                visibility: hidden;\n                transform: translateY(-20%);\n                transition: 0.3s ease-in-out;\n                opacity: 0;\n            ":(p&&u(),document.getElementById("skillsContentSection").style.cssText="\n                visibility: visible;\n                transform: translateY(15%);\n                transition: 0.3s ease-in-out;\n                opacity: 0.95;\n\n            "),i(!t)},g=function(){document.getElementById("immediateContact").style.cssText=c?"\n                visibility: hidden;\n                transform: translateY(-70%);\n                transition: 0.3s ease-in-out;\n                opacity: 0;\n            ":"\n                visibility: visible;\n                transform: translateY(70%);\n                transition: 0.3s ease-in-out;\n                opacity: 0.95;\n\n            ",r(!c)},u=function(){p?(document.getElementById("aboutMe-article").style.cssText="\n                visibility: hidden;\n                width: 0;\n                height: 0;\n                margin-left: 0;\n                transition: 0.5s ease-in-out;\n                opacity: 0;\n            ",document.getElementById("hero-section").style.filter="none"):(t&&j(),c&&g(),document.getElementById("aboutMe-article").style.cssText="\n                visibility: visible;\n                width: 50vw;\n                height: fit-content;\n                margin-left: -25vw;\n                transition: 0.3s ease-in-out;\n                opacity: 0.8;\n\n            ",document.getElementById("hero-section").style.cssText="\n                filter: blur(10px);\n                -webkit-filter: blur(10px);\n                transition: 0.3s ease-in-out;            \n            "),b(!p)};return Object(m.jsxs)(Q,{children:[Object(m.jsx)(Z,{navBtnColor:"#00FFF1",className:"name",id:"nav-aboutMe",onClick:function(){return u()},children:"Bemnet Dejene"}),Object(m.jsx)("a",{href:"#currentProjects",children:Object(m.jsx)(Z,{className:"sub-nav",id:"nav-project",children:"Projects"})}),Object(m.jsx)(Z,{className:"sub-nav",id:"nav-skills",onClick:function(){return j()},children:"Skills"}),Object(m.jsx)("a",{target:"_blank",href:"/BemnetDejeneDevResume_pdfType.pdf",children:Object(m.jsx)(Z,{className:"sub-nav",id:"nav-resume",children:"Resume"})}),Object(m.jsx)(Z,{className:"sub-nav",id:"nav-contactNow",onClick:function(){return g()},children:"Contact Info"})]})}var X,Y,_,K,Q=h.a.nav(J||(J=Object(d.a)(["\n    width: 100vw;\n    height: 8vh;\n    background-color: #1B69DE;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    align-items: center;\n    .name {\n        grid-column: 1/3;\n        padding-left: 3em;\n    }\n\n    #nav-resume, #nav-contactNow {\n        justify-self: center;\n    }\n\n    #nav-resume {\n        justify-self: right;\n    }\n  \n    /* .sub-nav {\n        width: max-content;\n    } */\n\n    @media screen and (max-width: 1200px) {\n        width: 100%;\n\n        #nav-resume, #nav-contactNow {\n            text-align: center;\n            justify-self: normal;\n        }\n\n        .name {\n\n            padding-left: 1.5em;\n        }\n    }\n"]))),Z=h.a.button(W||(W=Object(d.a)(["\n    width: max-content;\n    cursor: pointer;\n    height: 7vh;\n    border: none;\n    font-size: 24px;\n    color: ",";\n    background-color: transparent;\n\n    @media screen and (max-width: 900px) {\n        height: 5vh;\n        width: fit-content;\n        font-size: 18px;\n    }\n  \n"])),(function(n){return n.navBtnColor||"white"})),$=function(){var n=Object(a.useState)("frontend"),e=Object(l.a)(n,2),t=e[0],i=e[1],o=function(n){document.getElementById("".concat(t,"-content")).style.visibility="hidden",document.getElementById(t).style.borderBottom="none",document.getElementById("".concat(n,"-content")).style.visibility="visible",document.getElementById(n).style.borderBottom="frontend"===n?"solid 3px #00fff1":"solid 3px orange",i(n)};return Object(m.jsxs)(nn,{id:"skillsContentSection",children:[Object(m.jsxs)(tn,{children:[Object(m.jsx)("h3",{onClick:function(){return o("frontend")},id:"frontend",children:"Front-End"}),Object(m.jsx)("h3",{onClick:function(){return o("backend")},id:"backend",children:"Back-End"})]}),Object(m.jsxs)(en,{id:"frontend-content",children:[Object(m.jsxs)("ul",{children:["React",Object(m.jsx)("li",{children:"Async/Await"}),Object(m.jsx)("li",{children:"Hooks (useState, useEffect, useMemo, etc.)"})]}),Object(m.jsxs)("ul",{children:["JavaScript",Object(m.jsx)("li",{children:"Modern ES6/8 syntax - e.g. arrow functions, block-scoped constructs (Let and Const), template literals"}),Object(m.jsx)("li",{children:"AJAX & Fetch API methodologies"}),Object(m.jsx)("li",{children:"Object-Oriented Programming (OOP)"})]}),Object(m.jsxs)("ul",{children:["Figma",Object(m.jsx)("li",{children:'Pre-development wireframing of design to prevent "coding blind"'}),Object(m.jsx)("li",{children:"Neumorphic Design"})]}),Object(m.jsxs)("ul",{children:["HTML",Object(m.jsx)("li",{children:"Semantic HTML"})]}),Object(m.jsxs)("ul",{children:["CSS",Object(m.jsx)("li",{children:"Grid/FlexBox layout"}),Object(m.jsx)("li",{children:"CSS pre-processors such as Sass for dynamic CSS"})]})]}),Object(m.jsxs)(en,{id:"backend-content",children:[Object(m.jsxs)("ul",{children:["Express",Object(m.jsx)("li",{children:"Restful API"}),Object(m.jsx)("li",{children:"HTTP protocol requests"})]}),Object(m.jsxs)("ul",{children:["MongoDB (NoSQL)",Object(m.jsx)("li",{children:"User data storage for persistence"}),Object(m.jsx)("li",{children:"Database queries and manipulation through HTTP requests"}),Object(m.jsx)("li",{children:"Object Module Schemas"})]}),Object(m.jsxs)("ul",{children:["Python",Object(m.jsx)("li",{children:"Data analytics using Pandas for dataframe manipulation/queries"}),Object(m.jsx)("li",{children:"Exposure to ML libraries such as Tensorflow and Keras"})]})]})]})},nn=h.a.section(X||(X=Object(d.a)(["\n    height: 70vh;\n    width: 60vw;\n    z-index: 1;\n    position: absolute;\n    transform: translateY(-20%);\n    left: 50%;\n    margin-left: -30vw;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    border-radius: 1rem 1rem 1rem 1rem;\n    box-shadow: 0 5px 15px 10px #1B69DE;\n    visibility: hidden;\n    opacity: 0;\n    \n    #frontend {\n        border-bottom: solid 3px #00fff1;\n    }\n\n    #backend-content {\n        visibility: hidden;\n    }\n"]))),en=h.a.article(Y||(Y=Object(d.a)(["\n    width: 100%;\n    padding-left: 1.5em;\n    height: 90%;\n    position: absolute;\n    padding-top: 1em;\n\n    ul {\n        padding: 0.5em;\n        font-size: 20px;\n        font-weight: 700;\n\n        li {\n            font-weight: 300;\n            font-size: 18px;\n        }\n    }\n"]))),tn=h.a.div(_||(_=Object(d.a)(["\n    padding-top: 1em;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n\n    h3 {\n        font-size: 1.75rem;\n        cursor: pointer;\n    }\n\n    div {\n\n    }\n\n    \n"])));function on(){return Object(m.jsxs)(an,{id:"aboutMe-article",children:[Object(m.jsx)("h3",{children:"Life Outside of Work"}),Object(m.jsx)("p",{children:"On paper, I am currently located in London, Ontario and have a Double Major in Medical Sciences and Biology from the University of Western Ontario. Between the lines, I am an easy going person who's always smiling and love to express my creative thinking through code, piano, guitar and even freestyling rapping \ud83c\udfb6 (no sound cloud, haha)."}),Object(m.jsx)("p",{children:"The reason I fell in love with code was that it enabled my creative and logistic STEM halves of myself to work in tandem to create something that meaningful and has an impact on other peoples lives."})]})}var an=h.a.article(K||(K=Object(d.a)(["\n    width: 0;\n    height: 0;\n    padding: 1em;\n    position: absolute;\n    left: 50%;\n    margin-left: 0vw;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    border-radius: 20px 20px 20px 20px;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    row-gap: 1em;\n    top: 20%;\n    visibility: hidden;\n    opacity: 0;\n    overflow: hidden;\n\n    p {\n        font-size: 18px;\n        font-weight: 600;\n    }\n"])));var sn=function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)(U,{}),Object(m.jsx)($,{}),Object(m.jsx)(on,{}),Object(m.jsx)(q,{})]}),Object(m.jsxs)("main",{children:[Object(m.jsx)(A,{}),Object(m.jsx)(k,{})]}),Object(m.jsx)("footer",{children:Object(m.jsx)(B,{})})]})},cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,111)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;t(n),i(n),o(n),a(n),s(n)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(sn,{})}),document.getElementById("root")),cn()}},[[74,1,2]]]);
//# sourceMappingURL=main.83f9b95d.chunk.js.map