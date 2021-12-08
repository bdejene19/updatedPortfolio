import emailjs from 'emailjs-com';

// used in AllProjects
export const slide = (direction, slideValue) => {
    let leftScrollLimit = 0;
    let rightScrollLimit = -300;
    let projectsArray = document.querySelectorAll('.myProject');
    if (direction === 'right') {
        if (slideValue < leftScrollLimit) {
            document.getElementById('left-btn').style.visibility = 'visible';

        }
        projectsArray.forEach((project) => {
            project.style.cssText = `
                transform: translateX(${slideValue}%);
                transition: 0.5s linear
            `;
        })
        if (slideValue === rightScrollLimit) {
            document.getElementById('right-btn').style.visibility = 'hidden';
        }
    } 
    if (direction === 'left') {
        document.getElementById('right-btn').style.visibility = 'visible';
        projectsArray.forEach((project) => {
            project.style.cssText = `
                transform: translateX(${slideValue}%);
                transition: 0.5s linear; 
            `;
        })
       
        if (slideValue === leftScrollLimit) {
            document.getElementById('left-btn').style.visibility = 'hidden';
        }
    }

}

// used in ContactForm
export const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a131xpb', 'template_mt5oo0i', e.target, 'user_71zio4iG3zN4oS8hSre19')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });

    e.target.reset();
    document.getElementById('comments-submission').style.display = 'block';
    setTimeout(() => {
        document.getElementById('comments-submission').style.display = 'none';
    }, 50000)
    
}

// below functions used in navBar for navdropdowns
export const handleSkillsExpansion = (isSkillsExpanded) => {
    if (!isSkillsExpanded) {
        document.getElementById('skillsContentSection').style.cssText = `
            visibility: hidden;
            transform: translateY(-20%);
            transition: 0.3s ease-in-out;
            opacity: 0;
            z-index: -1;
        `;
    } else {
        document.getElementById('skillsContentSection').style.cssText = `
            visibility: visible;
            transform: translateY(10%);
            transition: 0.3s ease-in-out;
            opacity: 0.95;
            z-index: 4;

        `;
    }
    // setSkillsExpanded(!skillsExpanded);
}


export const handleContactExpansion = (isContactExpanded) => {
    if (!isContactExpanded) {
        document.getElementById('immediateContact').style.cssText = `
            visibility: hidden;
            transform: translateY(-70%);
            transition: 0.3s ease-in-out;
            opacity: 0;
            z-index: -1;
        `;
    } else {
        document.getElementById('immediateContact').style.cssText = `
            visibility: visible;
            transform: translateY(70%);
            transition: 0.3s ease-in-out;
            opacity: 0.95;
            z-index: 4;
        `;
    }
}

export const handleAboutMeExpansion = (isAboutMeExpaned) => {
    if (!isAboutMeExpaned) {
        document.getElementById('aboutMe-article').style.cssText = `
            visibility: hidden;
            width: 0;
            height: 0;
            margin-left: 0;
            transition: 0.5s ease-in-out;
            opacity: 0;
            z-index: -1;
        `;

        document.getElementById('hero-section').style.filter = 'none';
    } else {
        document.getElementById('aboutMe-article').style.cssText = `
            visibility: visible;
            width: 80vw;
            height: fit-content;
            margin-left: -40vw;
            transition: 0.3s ease-in-out;
            opacity: 0.8;
            z-index: 4;

        `;
        document.getElementById('hero-section').style.cssText = `
            filter: blur(10px);
            -webkit-filter: blur(10px);
            transition: 0.3s ease-in-out;            
        `;
        
    }
}

export const downloadResume = () => {
    window.location.href =  process.env.PUBLIC_URL + '/BemnetDejene__Resume.pdf';
}

// used within skills modal box 
export  const handleTabSelection = (newTab) => {
    /** Want to make previous newTab section invisible, and display current section */
    
    let backendContent = document.getElementById('backend-content');
    let frontendContent = document.getElementById('frontend-content');
    let underlineColor = '';
    if (newTab === 'frontend') {
        backendContent.style.visibility = 'hidden';
        document.getElementById('backend').style.borderBottom = 'none';
        underlineColor = '#00fff1';
    } else {
        frontendContent.style.visibility = 'hidden';
        document.getElementById('frontend').style.borderBottom = 'none';
        underlineColor = 'orange';

    }  

    document.getElementById(`${newTab}`).style.borderBottom = `solid 3px ${underlineColor}`
    document.getElementById(`${newTab}-content`).style.visibility = 'visible';

}   