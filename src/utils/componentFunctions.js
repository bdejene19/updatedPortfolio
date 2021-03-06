import emailjs from "emailjs-com";
import { logos } from "./codeLogos";
// used in AllProjects
export const slide = (direction, slideValue) => {
  let leftScrollLimit = 0;
  let rightScrollLimit = -300;
  let projectsArray = document.querySelectorAll(".myProject");
  if (direction === "right") {
    if (slideValue < leftScrollLimit) {
      document.getElementById("left-btn").style.visibility = "visible";
    }
    projectsArray.forEach((project) => {
      project.style.cssText = `
                transform: translateX(${slideValue}%);
                transition: 0.5s linear
            `;
    });
    if (slideValue === rightScrollLimit) {
      document.getElementById("right-btn").style.visibility = "hidden";
    }
  }
  if (direction === "left") {
    document.getElementById("right-btn").style.visibility = "visible";
    projectsArray.forEach((project) => {
      project.style.cssText = `
                transform: translateX(${slideValue}%);
                transition: 0.5s linear; 
            `;
    });

    if (slideValue === leftScrollLimit) {
      document.getElementById("left-btn").style.visibility = "hidden";
    }
  }
};
// used in allprojects
export const selectProjectTitle = (titleIndex) => {
  let paginationTargets = document.getElementById(
    "all-project-types-display"
  ).children;
  // let btns = document.querySelector('.btnsContainer');

  let rightCounter = 0;
  while (rightCounter < paginationTargets.length) {
    if (rightCounter === titleIndex) {
      paginationTargets[rightCounter].style.display = "flex";

      if (titleIndex === 1) {
        // btns.style.visibility = 'visible';
      }
    } else {
      paginationTargets[rightCounter].style.display = "none";
      // btns.style.visibility = 'hidden';
    }

    rightCounter++;
  }
};

// used in ContactForm
export const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a131xpb",
      "template_mt5oo0i",
      e.target,
      "user_71zio4iG3zN4oS8hSre19"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

  e.target.reset();
  document.getElementById("comments-submission").style.display = "block";
  setTimeout(() => {
    document.getElementById("comments-submission").style.display = "none";
  }, 50000);
};

// below functions used in navBar for navdropdowns
export const handleSkillsExpansion = (isSkillsExpanded) => {
  if (!isSkillsExpanded) {
    document.getElementById("skillsContentSection").style.cssText = `
            visibility: hidden;
            transform: translateY(-20%);
            transition: 0.3s ease-in-out;
            opacity: 0;
            z-index: -1;
        `;
  } else {
    document.getElementById("skillsContentSection").style.cssText = `
            visibility: visible;
            transform: translateY(10%);
            transition: 0.3s ease-in-out;
            opacity: 0.95;
            z-index: 4;

        `;
  }
  // setSkillsExpanded(!skillsExpanded);
};

export const handleContactExpansion = (isContactExpanded) => {
  if (!isContactExpanded) {
    document.getElementById("immediateContact").style.cssText = `
            visibility: hidden;
            transform: translateY(-70%);
            transition: 0.3s ease-in-out;
            opacity: 0;
            z-index: -1;
        `;
  } else {
    document.getElementById("immediateContact").style.cssText = `
            visibility: visible;
            transform: translateY(70%);
            transition: 0.3s ease-in-out;
            opacity: 0.95;
            z-index: 4;
        `;
  }
};

export const handleAboutMeExpansion = (isAboutMeExpaned) => {
  if (!isAboutMeExpaned) {
    document.getElementById("aboutMe-article").style.cssText = `
            visibility: hidden;
            width: 0;
            height: 0;
            margin-left: 0;
            transition: 0.5s ease-in-out;
            opacity: 0;
            z-index: -1;
        `;

    document.getElementById("hero-section").style.filter = "none";
  } else {
    document.getElementById("aboutMe-article").style.cssText = `
            visibility: visible;
            width: 80vw;
            height: fit-content;
            margin-left: -40vw;
            transition: 0.3s ease-in-out;
            opacity: 0.8;
            z-index: 4;

        `;
    document.getElementById("hero-section").style.cssText = `
            filter: blur(10px);
            -webkit-filter: blur(10px);
            transition: 0.3s ease-in-out;            
        `;
  }
};

export const downloadResume = () => {
  window.location.href = process.env.PUBLIC_URL + "/BemnetDejene__Resume.pdf";
};

// used within skills modal box
export const handleTabSelection = (newTab) => {
  /** Want to make previous newTab section invisible, and display current section */

  let backendContent = document.getElementById("backend-content");
  let frontendContent = document.getElementById("frontend-content");
  let underlineColor = "";
  if (newTab === "frontend") {
    backendContent.style.visibility = "hidden";
    document.getElementById("backend").style.borderBottom = "none";
    underlineColor = "#00fff1";
  } else {
    frontendContent.style.visibility = "hidden";
    document.getElementById("frontend").style.borderBottom = "none";
    underlineColor = "orange";
  }

  document.getElementById(
    `${newTab}`
  ).style.borderBottom = `solid 3px ${underlineColor}`;
  document.getElementById(`${newTab}-content`).style.visibility = "visible";
};

export const handleLanguageLogo = (language) => {
  let imgPath = "";
  if (language === "HTML") {
    imgPath = logos.HTML;
  } else if (language === "CSS") {
    imgPath = logos.CSS;
  } else if (language === "JS") {
    imgPath = logos.JS;
  } else if (language === "MUI") {
    imgPath = logos.MUI;
  } else if (language === "Figma") {
    imgPath = logos.Figma;
  } else if (language === "MySQL2") {
    imgPath = logos.MySQL2;
  } else if (language === "MongoDB") {
    imgPath = logos.MongoDB;
  } else if (language === "Handlebars") {
    imgPath = logos.Handlebars;
  } else if (language === "Express") {
    imgPath = logos.Express;
  } else if (language === "Sequelize") {
    imgPath = logos.Sequelize;
  } else if (language === "Node") {
    imgPath = logos.Node;
  } else if (language === "React") {
    imgPath = logos.React;
  } else if (language === "Heroku") {
    imgPath = logos.Heroku;
  } else if (language === "graphQL") {
    imgPath = logos.graphQL;
  }
  return <img src={imgPath} alt={language + "logo"} key={language}></img>;
};
