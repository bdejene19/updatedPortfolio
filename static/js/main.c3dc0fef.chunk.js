(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{66:function(n,e,t){},67:function(n,e,t){},74:function(n,e,t){"use strict";t.r(e);var i,a,o=t(0),s=t.n(o),c=t(11),d=t.n(c),r=(t(66),t(67),t(9)),l=t(19),p=t(10),h=t(109),m=t(2);function b(n){var e=n.newTools,t=n.improvements;return Object(m.jsxs)(x,{className:"myProject",children:[Object(m.jsxs)("div",{className:"flex-content",children:[Object(m.jsx)("div",{className:"project-display",children:Object(m.jsx)("img",{src:"/updatedPortfolio/"+n.projectImg,alt:n.projectImg})}),Object(m.jsxs)(u,{children:[Object(m.jsx)("h3",{children:n.title}),Object(m.jsx)("div",{className:"project-display",id:"smallScreen-display",children:Object(m.jsx)("img",{src:"/updatedPortfolio/"+n.projectImg,alt:n.projectImg})}),Object(m.jsx)("p",{children:n.about}),Object(m.jsxs)("ul",{className:"list",children:[Object(m.jsx)("i",{children:"What I learned:"}),e.map((function(n,e){return Object(m.jsx)("li",{children:n},e)}))]}),Object(m.jsxs)("ul",{className:"list",children:[Object(m.jsx)("i",{children:"What/How I would improve:"}),t.map((function(n,e){return Object(m.jsx)("li",{children:n},e)}))]})]})]}),Object(m.jsxs)("div",{className:"btns-container",children:[Object(m.jsx)(h.a,{variant:"contained",color:"primary",className:"btn",target:"_blank",href:n.sourceCode,children:"SOURCE"}),Object(m.jsx)(h.a,{variant:"contained",className:"btn webpage",target:"_blank",href:n.webpage,children:"WEBPAGE"})]})]})}var g,j,x=p.a.article(i||(i=Object(r.a)(["\n    padding-top: 2em;\n    width: 100%;\n    height: 70vh;\n    padding-left: 5em;\n\n    \n    .flex-content {\n        display: flex;\n        height: 85%;\n        .project-display {\n            height: 100%;\n            width: 100%;\n\n            img {\n                width: 45vw;\n            }\n        }\n    }\n   \n    .btns-container {\n        display: flex;\n        justify-items: center;\n        column-gap: 3rem;\n        padding-left: 5rem;\n        .webpage {\n            background-color: orange;\n            color: white;\n        }\n\n        .btn {\n            font-weight: 600;\n            width: 8vw;\n        }\n    }\n\n    @media screen and (max-width: 1024px) {\n        height: fit-content;\n    }\n\n    @media screen and (max-width: 900px) {\n        padding-left: 1.5em;\n    }\n\n    @media screen and (max-width: 600px) {\n        .project-display {\n            display: none;\n        }\n\n        .btns-container {\n            padding-top: 2em;\n            padding-left: 8em;\n            display: flex;\n            .btn {\n                justify-items: center;\n            }\n        }\n\n    }\n\n    @media screen and (max-width: 375px) {\n        height: 105vh;\n        padding-left: 0;\n\n        .btns-container {\n            padding-top: 0;\n            padding-left: 3em;\n        }\n\n        .flex-content {\n            padding-left: 0;\n\n        }\n    }\n\n\n   \n"]))),u=p.a.div(a||(a=Object(r.a)(["\n    width: max-content;\n    margin-right: 2em;\n    justify-content: center;\n    height: fit-content;\n    padding-left: 2em;\n    #smallScreen-display {\n            display: none;\n    }\n    \n\n    p {\n        padding: 0em;\n        margin: 0;\n        font-size: 24px;\n    }\n    \n    .list {\n        font-size: 24px;\n        color: white;\n        padding: 1em;\n        font-weight: 600;\n        padding-bottom: 0;\n\n        li {\n            font-weight: 300;\n            font-size: 20px;\n        }\n    }\n\n    @media screen and (max-width: 600px) {\n        .flex-content {\n            display: grid;\n            grid-template-columns: 1fr;\n            width: 100vw;\n            /* grid-template-rows: 1fr; */\n        }\n\n        #smallScreen-display {\n            display: block;\n            height: 25vh; \n            \n        }\n        #largeScreen-display {\n            display: none;\n        }\n\n        .list {\n            font-size:20px;\n\n            li {\n                font-size: 16px;\n            }\n        }\n\n        p {\n            font-size: 20px;\n        }\n    }\n\n    @media screen and (max-width: 375px){\n        padding-left: 0;\n        .list {\n            font-size: 18px;\n        }\n\n       \n    }\n\n\n\n\n"]))),f=[{name:"EXP|CON Concert",technologies:["React","Material-UI","JS","CSS"],description:"Implemented UX wireframes and built multipage react desktop app, that acts as the frontline for ticket sales and digitally presents the concert experience.",newSkills:["Wireframe Implementation","React Router","Page Layout Design Patterns"],howToImprove:["Responive Design","Backend introduction of Express/Django for Stripe payments"],projectDisplay:"expconDisplay.svg",sourceCode:"https://github.com/bdejene19/ConcertWebpage",liveVersion:"https://focused-heyrovsky-378c47.netlify.app/"},{name:"Digital Marketing Landing Page",technologies:["React","Material-UI","Responsive Design"],description:"Created landing-page clone of a digital marketing agency, making it fully responsive to be viewable on all devices.",newSkills:["Styled-components responsive design","Power and flexibility of grid/flexbox combination"],howToImprove:["Learn how to use Figma editor/SVGs for controlled styling","Audio or video background window effects"],projectDisplay:"dmLandingDisplay.svg",sourceCode:"https://github.com/bdejene19/DigitalMarketingLandPage",liveVersion:"https://bdejene19.github.io/DigitalMarketingLandPage/"},{name:"Student Test Scores",technologies:["React","CSS","JS"],description:"Implement RESTful API call, presenting the data in an expandable view. Also provides ability to search by student name.",newSkills:["Search-Bar Filter","React Hooks","Hook Life-cycles"],howToImprove:["Tag-filter","Views based on authentication"],projectDisplay:"studentScores.svg",sourceCode:"https://github.com/bdejene19/SearchStudents-AddTags",liveVersion:"https://boring-banach-788d03.netlify.app/"},{name:"Arsenal Fan's Soccer Page",technologies:["React","JS","CSS","HTML"],description:"First front-end project: a single-page app meant to showcase the past, present and future of the soccer club, Arsenal. Is a static HTML site, however, has dynanism through use of state.",newSkills:["React States","React Life-Cycles","DOM manipulation"],howToImprove:["Fetch data from API","Add grid/flexbox layout for consistency/efficiency"],projectDisplay:"arsenalFans.svg",sourceCode:"https://github.com/bdejene19/ArsenalSoccerFansPage",liveVersion:"https://bdejene19.github.io/ArsenalSoccerFansPage/"}],v=t(56),y=t.n(v),w=t(55),O=t.n(w);function k(){var n=Object(o.useState)(0),e=Object(l.a)(n,2),t=e[0],i=e[1],a=function(n){var e=document.querySelectorAll(".myProject");"right"===n?(0===t&&(document.getElementById("left-btn").style.visibility="visible"),e.forEach((function(n){n.style.cssText="\n                    transform: translateX(".concat(t-100,"%);\n                    transition: 0.5s linear\n                ")})),-200===t&&(document.getElementById("right-btn").style.visibility="hidden"),i(t-100)):(document.getElementById("right-btn").style.visibility="visible",e.forEach((function(n){n.style.cssText="\n                    transform: translateX(".concat(t+100,"%);\n                    transition: 0.5s linear; \n                ")})),-100===t&&(document.getElementById("left-btn").style.visibility="hidden"),i(t+100))};return Object(o.useEffect)((function(){})),Object(m.jsxs)(C,{children:[Object(m.jsx)("h2",{id:"currentProjects",children:"Projects"}),Object(m.jsx)(P,{children:f.map((function(n){return Object(m.jsx)(b,{title:n.name,projectImg:n.projectDisplay,about:n.description,newTools:n.newSkills,improvements:n.howToImprove,sourceCode:n.sourceCode,webpage:n.liveVersion},n.name)}))}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"btnsContainer",children:[Object(m.jsx)(O.a,{id:"left-btn",className:"slideChanger",onClick:function(){return a("left")}}),Object(m.jsx)(y.a,{id:"right-btn",className:"slideChanger",onClick:function(){return a("right")}})]})]})}var S,I,C=p.a.section(g||(g=Object(r.a)(["\n    width: 100vw;\n    background-image: url('","/projectsBackground.svg');\n    background-size: cover;\n    padding-top: 15em;\n    overflow: hidden;\n    padding-bottom: 2em;\n\n    padding-left: 4.5em;\n\n    h2 {\n        height: fit-content;\n    }\n\n    .btnsContainer {\n        display: grid;\n        justify-items: center;\n        grid-template-columns: auto auto;\n        align-items: flex-start;\n        margin-top: -1em;\n        z-index: 4;\n        .slideChanger {\n            font-size: 100px;\n            cursor: pointer;\n            color: #00fff1;\n            z-index: 4;\n        }\n\n        #left-btn {\n            visibility: hidden;\n        }\n    }\n\n\n    @media screen and (max-width: 1200px) {\n        padding-top: 12em;\n        padding-left: 2.5em;\n    }\n\n    @media screen and (max-width: 900px) {\n        background-image: url('","/ipadmini-projectsBG.svg');\n        background-position: center;\n        padding-top: 6em;\n    }\n\n    @media screen and (max-width: 375px) {\n        padding-top: 8em;\n        padding-left: 1em;\n        .btnsContainer {\n            padding-top: 0;\n            margin-top: -2em;\n        }\n        \n    }\n\n    \n"])),"/updatedPortfolio","/updatedPortfolio"),P=p.a.article(j||(j=Object(r.a)(["\n    width: 100%;\n    display: flex;\n    height: fit-content;\n  \n    .myProject {\n        width: 100%;\n    }\n\n"]))),z=t(108);function E(){return Object(m.jsxs)(B,{children:[Object(m.jsx)("h2",{children:"Like what you see? Get in touch!"}),Object(m.jsxs)(T,{method:"POST","data-netlify":"true",children:[Object(m.jsx)(z.a,{className:"commentInput",label:"Name"}),Object(m.jsx)(z.a,{className:"commentInput",label:"Contact Info"}),Object(m.jsxs)("div",{className:"comments-section",children:[Object(m.jsx)("label",{for:"comments",children:"Leave a comment or additional details:"}),Object(m.jsx)("textarea",{name:"comments",id:"comments"})]}),Object(m.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})]})}var N,B=p.a.section(S||(S=Object(r.a)(["\n    width: 100%;\n    height: fit-content;\n    padding: 1em;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    background: linear-gradient(45deg, #00fff1, slateblue 60%);\n    padding-bottom: 3em;\n    h2 {\n        font-size: 32px;\n        justify-self: left;\n        padding-left: 2em;\n        padding-bottom: 1em;\n        padding-top: 1em;\n    }\n\n    @media screen and (max-width: 375px) {\n        h2 {\n            padding-left: 1em;\n        }\n    }\n\n"]))),T=p.a.form(I||(I=Object(r.a)(["\n    opacity: 0.8;\n    padding: 2em;\n    box-shadow: 5px 5px 0  skyblue;\n    background-color: white;\n    width: 50vw;\n    /* height: 65vh; */\n    display: flex;\n    flex-direction: column;\n    row-gap: 2em;\n    border-radius: 3px 3px 3px 3px;\n\n    \n\n    .comments-section {\n        width: 100%;\n       \n\n        textarea {\n            margin-top: 1em;\n            width: 100%;\n            height: 15vh;\n            resize: vertical;\n            max-height: 25vh;\n            padding: 0.5em;\n            font-size: 16px;\n        }\n    }\n\n    @media screen and (max-width: 375px) {\n        width: 80vw;\n\n       \n    }\n\n"])));function D(){return Object(m.jsxs)(M,{children:[Object(m.jsxs)("div",{className:"tooltip",children:[Object(m.jsx)("span",{className:"tooltiptext",children:"Github"}),Object(m.jsx)("a",{href:"https://github.com/bdejene19",children:Object(m.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",alt:"github",className:"contact-icon"})})]}),Object(m.jsxs)("div",{className:"tooltip",children:[Object(m.jsx)("span",{className:"tooltiptext",children:"LinkedIn"}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/",children:Object(m.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png",alt:"LinkedIn",className:"contact-icon",id:"linkedin-icon"})})]})]})}var L,M=p.a.div(N||(N=Object(r.a)(['\n    display: flex;\n    column-gap: 3em;\n    .tooltip {\n        position: relative;\n        display: inline-block;\n    }\n    .tooltip .tooltiptext {\n        visibility: hidden;\n        width: 100px;\n        background-color: black;\n        color: #fff;\n        text-align: center;\n        border-radius: 6px;\n        padding: 5px 0;\n        position: absolute;\n        z-index: 1;\n        top: 120%;\n        left: 50%;\n        margin-left: -60px;\n    }\n    .tooltip .tooltiptext::after {\n        content: "";\n        position: absolute;\n        bottom: 100%;\n        left: 50%;\n        margin-left: 0px;\n        border-width: 5px;\n        border-style: solid;\n        border-color: transparent transparent black transparent;\n    }\n    .tooltip:hover .tooltiptext {\n        visibility: visible;\n    }\n    .contact-icon {\n        cursor: pointer;\n        width: 10vw;\n        height: 15vh;\n\n    }\n\n    \n    #linkedin-icon {\n        width: 8vw;\n        height: 12vh;\n        margin-top: 1em;\n    }\n\n\n    @media screen and (max-width: 375px) {\n        column-gap: 1.5em;\n    }\n\n'])));function A(){return Object(m.jsxs)(q,{id:"hero-section",children:[Object(m.jsxs)("div",{className:"intro-text",children:[Object(m.jsx)("h1",{children:"Who am I"}),Object(m.jsx)("p",{children:"A self driven Software Engineer focusing on the JavaScript stacks like React for Front End Development. Also experienced in Python OOP data analytics. "})]}),Object(m.jsx)("img",{src:"/updatedPortfolio/herobackground.svg",alt:"hero background",className:"bg-photo",id:"desktop-bg"}),Object(m.jsx)("img",{src:"/updatedPortfolio/resized-ipadMini-bg.svg",alt:"hero background",className:"bg-photo",id:"ipadmini-bg"}),Object(m.jsx)("img",{src:"/updatedPortfolio/iphoneX-bg.svg",alt:"iphone BG background",className:"bg-photo",id:"iphoneX-bg"}),Object(m.jsx)("div",{className:"quick-contact",children:Object(m.jsx)(D,{})})]})}var F,R,q=p.a.section(L||(L=Object(r.a)(["\n    height: fit-content;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n\n    .bg-photo {\n        width: 100vw;\n        z-index: -1;\n    }\n\n    .quick-contact {\n        position: absolute;\n        right: 3em;\n        top: 40%;\n        align-self: center;\n        display: flex;\n    }\n\n    .intro-text {\n        z-index: 0;\n        position: absolute;\n        padding-top: 5em;\n        padding-left: 4.5em; \n\n        p {\n\n            padding-top: 2em;\n            width: 45%;\n            font-size: 32px;\n        }\n    }\n\n    #ipadmini-bg, #iphoneX-bg {\n        display: none;\n    }\n\n    @media screen and (max-width: 1200px) {\n        .intro-text {\n            /* padding-top: 3em; */\n            padding-left: 2.25em;\n\n            p {\n                font-size: 28px;\n                padding-top: 1em;\n            }\n        }\n        .quick-contact {\n            top: 20%;\n            .contact-icon {\n                width: minmax(4vw, 7vw);\n            }\n\n            #linkedin-icon {\n                height: 9vh;\n                margin-top: 1.3em;\n            }\n        }\n    }\n\n    @media screen and (max-width: 1024px) {\n        .quick-contact {\n            top: 18%;\n\n            .contact-icon {\n                height: 6em;\n                margin-top: 0.6em;\n            }\n            #linkedin-icon {\n                height: 5em;\n            }\n\n            \n        }\n\n        \n    }\n\n\n    @media screen and (max-width: 900px) {\n        #desktop-bg {\n            display: none;\n        }\n\n        #ipadmini-bg {\n            display: block;\n            /* height: 60vh; */\n        }\n        .intro-text {\n            top: 37%;\n            p {\n                padding-top: 2em;\n                width: 60%;\n            }\n\n           \n        }\n\n        .quick-contact {\n            top: 10%;\n            left: 55%;\n           \n        }\n   \n    }\n\n    @media screen and (max-width: 768px) {\n        .intro-text {\n            top: minmax(30%, 42%);\n            p {\n                width: 55%;\n            }\n        }\n    }\n\n    @media screen and (max-width: 600px) {\n        .intro-text {\n            top: 30%;\n            padding-left: 1em;\n            padding-top: 1em;\n\n            p {\n                font-size: 20px;\n                padding-top: 3.5em;\n            }\n        }\n    }\n\n    @media screen and (max-width: 375px) {\n        #ipadmini-bg {\n            display: none;\n        }\n\n        #iphoneX-bg {\n            display: block;\n        }\n        \n        .intro-text {\n            top: 15%;\n\n            p {\n                padding-top: 1.5em;\n            }\n        }\n\n        .quick-contact {\n            left: 10%;\n            top: 75%;\n            column-gap: 0;\n\n            .contact-icon, #linkedin-icon {\n                width: 15vw;\n            }\n        }\n    }\n   \n      \n"])));function H(){return Object(m.jsxs)(J,{id:"immediateContact",children:[Object(m.jsxs)(W,{children:[Object(m.jsx)("h4",{children:"Phone:"}),Object(m.jsx)("p",{style:{width:"max-content"},children:"519-619-3930"})]}),Object(m.jsxs)(W,{children:[Object(m.jsx)("h4",{children:"Email:"}),Object(m.jsx)("p",{children:"bdejene19@gmail.com"})]}),Object(m.jsxs)(W,{children:[Object(m.jsx)("h4",{children:"LinkedIn:"}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/",children:"https://www.linkedin.com/in/bemnet-dejene-8663521b1/"})]}),Object(m.jsxs)(W,{children:[Object(m.jsx)("h4",{children:"Github:"}),Object(m.jsx)("a",{href:"https://github.com/bdejene19",children:"https://github.com/bdejene19"})]})]})}var X,G,J=p.a.article(F||(F=Object(r.a)(["\n    width: fit-content;\n    height: 40vh;\n    padding: 0.5em;\n    right: 0;\n    top: -20%;\n    border-radius: 2px 2px 2px 2px;\n    position: absolute;\n    display: grid;\n    grid-template-rows: repeat(4,);;\n    z-index: 2;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    box-shadow: 0 5px 25px 10px #1B69DE;\n    opacity: 0;\n    visibility: hidden;  \n    overflow: hidden;\n    z-index: -1;  \n    h4 {\n        opacity: 1;\n        border-bottom: solid skyblue 1px;\n    }\n\n    p, a {\n        padding-top: 0.5em;\n        width: min-content;\n        height: fit-content;\n\n        @media screen and (max-width: 1024px) {\n            width: 28vw;\n            /* p, a {\n                width: 70%;\n                border: solid green 3px;\n            } */\n        }\n    }\n\n    @media screen and (max-width: 900px) {\n        width: 40%;\n\n    }\n"]))),W=p.a.div(R||(R=Object(r.a)(["\n    display: flex;\n    height: fit-content;\n    flex-direction: column;\n"])));function V(){var n=Object(o.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1],a=Object(o.useState)(!1),s=Object(l.a)(a,2),c=s[0],d=s[1],r=Object(o.useState)(!1),p=Object(l.a)(r,2),h=p[0],b=p[1],g=function(){t?document.getElementById("skillsContentSection").style.cssText="\n                visibility: hidden;\n                transform: translateY(-20%);\n                transition: 0.3s ease-in-out;\n                opacity: 0;\n                z-index: -1;\n            ":(h&&x(),document.getElementById("skillsContentSection").style.cssText="\n                visibility: visible;\n                transform: translateY(15%);\n                transition: 0.3s ease-in-out;\n                opacity: 0.95;\n                z-index: 4;\n\n            "),i(!t)},j=function(){document.getElementById("immediateContact").style.cssText=c?"\n                visibility: hidden;\n                transform: translateY(-70%);\n                transition: 0.3s ease-in-out;\n                opacity: 0;\n                z-index: -1;\n            ":"\n                visibility: visible;\n                transform: translateY(70%);\n                transition: 0.3s ease-in-out;\n                opacity: 0.95;\n                z-index: 4;\n\n            ",d(!c)},x=function(){h?(document.getElementById("aboutMe-article").style.cssText="\n                visibility: hidden;\n                width: 0;\n                height: 0;\n                margin-left: 0;\n                transition: 0.5s ease-in-out;\n                opacity: 0;\n                z-index: -1;\n            ",document.getElementById("hero-section").style.filter="none"):(t&&g(),c&&j(),document.getElementById("aboutMe-article").style.cssText="\n                visibility: visible;\n                width: 80vw;\n                height: fit-content;\n                margin-left: -40vw;\n                transition: 0.3s ease-in-out;\n                opacity: 0.8;\n                z-index: 4;\n\n            ",document.getElementById("hero-section").style.cssText="\n                filter: blur(10px);\n                -webkit-filter: blur(10px);\n                transition: 0.3s ease-in-out;            \n            "),b(!h)};return Object(m.jsxs)(Q,{children:[Object(m.jsx)(Z,{navBtnColor:"#00FFF1",className:"name",id:"nav-aboutMe",onClick:function(){return x()},children:"Bemnet Dejene"}),Object(m.jsx)("a",{href:"#currentProjects",children:Object(m.jsx)(Z,{className:"sub-nav",id:"nav-project",children:"Projects"})}),Object(m.jsx)(Z,{className:"sub-nav",id:"nav-skills",onClick:function(){return g()},children:"Skills"}),Object(m.jsx)(Z,{className:"sub-nav",onClick:function(){return window.location.href="/updatedPortfolio/BemnetDejeneDevResume_wordType.pdf"},id:"nav-resume",children:"Resume"}),Object(m.jsx)(Z,{className:"sub-nav",id:"nav-contactNow",onClick:function(){return j()},children:"Contact Info"})]})}var U,Y,_,K,Q=p.a.nav(X||(X=Object(r.a)(["\n    width: 100vw;\n    height: 8vh;\n    background-color: #1B69DE;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    align-items: center;\n    .name {\n        grid-column: 1/3;\n        padding-left: 3em;\n    }\n\n    #nav-resume {\n        transform: translateX(-5vw);\n    }\n    #nav-contactNow {\n        justify-self: center;\n    }\n\n    #nav-resume {\n        justify-self: right;\n    }\n  \n    /* .sub-nav {\n        width: max-content;\n    } */\n\n    @media screen and (max-width: 1200px) {\n        width: 100%;\n\n        #nav-resume, #nav-contactNow {\n            text-align: center;\n            justify-self: normal;\n        }\n\n        .name {\n\n            padding-left: 1.5em;\n        }\n    }\n"]))),Z=p.a.button(G||(G=Object(r.a)(["\n    width: max-content;\n    cursor: pointer;\n    height: 7vh;\n    border: none;\n    font-size: 24px;\n    color: ",";\n    background-color: transparent;\n\n    @media screen and (max-width: 900px) {\n        height: 5vh;\n        width: fit-content;\n        font-size: 18px;\n    }\n  \n"])),(function(n){return n.navBtnColor||"white"})),$=function(){var n=Object(o.useState)("frontend"),e=Object(l.a)(n,2),t=e[0],i=e[1],a=function(n){document.getElementById("".concat(t,"-content")).style.visibility="hidden",document.getElementById(t).style.borderBottom="none",document.getElementById("".concat(n,"-content")).style.visibility="visible",document.getElementById(n).style.borderBottom="frontend"===n?"solid 3px #00fff1":"solid 3px orange",i(n)};return Object(m.jsxs)(nn,{id:"skillsContentSection",children:[Object(m.jsxs)(tn,{children:[Object(m.jsx)("h3",{onClick:function(){return a("frontend")},id:"frontend",children:"Front-End"}),Object(m.jsx)("h3",{onClick:function(){return a("backend")},id:"backend",children:"Back-End"})]}),Object(m.jsxs)(en,{id:"frontend-content",children:[Object(m.jsxs)("ul",{children:["React",Object(m.jsx)("li",{children:"Async/Await"}),Object(m.jsx)("li",{children:"Hooks (useState, useEffect, useMemo, etc.)"})]}),Object(m.jsxs)("ul",{children:["JavaScript",Object(m.jsx)("li",{children:"Modern ES6/8 syntax - e.g. arrow functions, block-scoped constructs (Let and Const), template literals"}),Object(m.jsx)("li",{children:"AJAX & Fetch API methodologies"}),Object(m.jsx)("li",{children:"Object-Oriented Programming (OOP)"})]}),Object(m.jsxs)("ul",{children:["Figma",Object(m.jsx)("li",{children:'Pre-development wireframing of design to prevent "coding blind"'}),Object(m.jsx)("li",{children:"Neumorphic Design"})]}),Object(m.jsxs)("ul",{children:["HTML",Object(m.jsx)("li",{children:"Semantic HTML"})]}),Object(m.jsxs)("ul",{children:["CSS",Object(m.jsx)("li",{children:"Grid/FlexBox layout"}),Object(m.jsx)("li",{children:"CSS pre-processors such as Sass for dynamic CSS"})]})]}),Object(m.jsxs)(en,{id:"backend-content",children:[Object(m.jsxs)("ul",{children:["Express",Object(m.jsx)("li",{children:"Restful API"}),Object(m.jsx)("li",{children:"HTTP protocol requests"})]}),Object(m.jsxs)("ul",{children:["MongoDB (NoSQL)",Object(m.jsx)("li",{children:"User data storage for persistence"}),Object(m.jsx)("li",{children:"Database queries and manipulation through HTTP requests"}),Object(m.jsx)("li",{children:"Object Module Schemas"})]}),Object(m.jsxs)("ul",{children:["Python",Object(m.jsx)("li",{children:"Data analytics using Pandas for dataframe manipulation/queries"}),Object(m.jsx)("li",{children:"Exposure to ML libraries such as Tensorflow and Keras"})]})]})]})},nn=p.a.section(U||(U=Object(r.a)(["\n    height: 70vh;\n    width: 80vw;\n    z-index: 1;\n    position: absolute;\n    transform: translateY(-20%);\n    left: 50%;\n    margin-left: -40vw;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    border-radius: 1rem 1rem 1rem 1rem;\n    box-shadow: 0 5px 15px 10px #1B69DE;\n    visibility: hidden;\n    opacity: 0;\n    z-index: -1;\n    \n    #frontend {\n        border-bottom: solid 3px #00fff1;\n    }\n\n    #backend-content {\n        visibility: hidden;\n    }\n"]))),en=p.a.article(Y||(Y=Object(r.a)(["\n    width: 100%;\n    padding-left: 1.5em;\n    height: 90%;\n    position: absolute;\n    padding-top: 1em;\n\n    ul {\n        padding: 0.5em;\n        font-size: 20px;\n        font-weight: 700;\n\n        li {\n            font-weight: 300;\n            font-size: 18px;\n        }\n    }\n"]))),tn=p.a.div(_||(_=Object(r.a)(["\n    padding-top: 1em;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n\n    h3 {\n        font-size: 1.75rem;\n        cursor: pointer;\n    }\n\n    div {\n\n    }\n\n    \n"])));function an(){return Object(m.jsxs)(on,{id:"aboutMe-article",children:[Object(m.jsx)("h3",{children:"Life Outside of Work"}),Object(m.jsx)("p",{children:"On paper, I am currently located in London, Ontario and have a Double Major in Medical Sciences and Biology from the University of Western Ontario. Between the lines, I am an easy going person who's always smiling and love to express my creative thinking through code, piano, guitar and even freestyle rapping \ud83c\udfb6 (no sound cloud, haha)."}),Object(m.jsx)("p",{children:"The reason I fell in love with code was that it enabled my creative and logistic STEM halves of myself to work in tandem to create something meaningful and has an impact on other peoples lives."})]})}var on=p.a.article(K||(K=Object(r.a)(["\n    width: 0;\n    height: 0;\n    padding: 1em;\n    position: absolute;\n    left: 50%;\n    margin-left: 0vw;\n    background: linear-gradient(45deg, orange, slateblue 60%);\n    border-radius: 20px 20px 20px 20px;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    row-gap: 1em;\n    top: 20%;\n    visibility: hidden;\n    overflow: hidden;\n    opacity: 0;\n    z-index: 4;\n\n    p {\n        font-size: 18px;\n        font-weight: 600;\n    }\n\n    @media screen and (max-width: 900px) {\n        \n    }\n"])));var sn=function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)(V,{}),Object(m.jsx)($,{}),Object(m.jsx)(an,{}),Object(m.jsx)(H,{})]}),Object(m.jsxs)("main",{children:[Object(m.jsx)(A,{}),Object(m.jsx)(k,{},"1")]}),Object(m.jsx)("footer",{children:Object(m.jsx)(E,{})})]})},cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,111)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;t(n),i(n),a(n),o(n),s(n)}))};d.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(sn,{})}),document.getElementById("root")),cn()}},[[74,1,2]]]);
//# sourceMappingURL=main.c3dc0fef.chunk.js.map