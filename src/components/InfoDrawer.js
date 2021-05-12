import React, {useState} from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import StarIcon from '@material-ui/icons/Star';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import {Menu} from '@material-ui/icons';
import GetAppIcon from '@material-ui/icons/GetApp';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',

  },
});

export default function TemporaryDrawer() {
  // const [skillsExpanded, setSkillsExpanded] = useState(false);
  //   const [contactExpanded, setContactExpanded] = useState(false);
  //   const [aboutMeExpanded, setAboutExpanded] = useState(false);

  //   const handleSkillsExpansion = () => {
  //       if (skillsExpanded) {
  //           document.getElementById('skillsContentSection').style.cssText = `
  //               visibility: hidden;
  //               transform: translateY(-20%);
  //               transition: 0.3s ease-in-out;
  //               opacity: 0;
  //               z-index: -1;
  //           `;
  //       } else {
  //           if (aboutMeExpanded) {
  //               handleAboutMeExpansion();
  //           }
  //           document.getElementById('skillsContentSection').style.cssText = `
  //               visibility: visible;
  //               transform: translateY(15%);
  //               transition: 0.3s ease-in-out;
  //               opacity: 0.95;
  //               z-index: 4;

  //           `;
  //       }

  //       setSkillsExpanded(!skillsExpanded);
  //   }


  //   const handleContactExpansion = () => {
  //       if (contactExpanded) {
  //           document.getElementById('immediateContact').style.cssText = `
  //               visibility: hidden;
  //               transform: translateY(-70%);
  //               transition: 0.3s ease-in-out;
  //               opacity: 0;
  //               z-index: -1;
  //           `;
  //       } else {
  //           document.getElementById('immediateContact').style.cssText = `
  //               visibility: visible;
  //               transform: translateY(70%);
  //               transition: 0.3s ease-in-out;
  //               opacity: 0.95;
  //               z-index: 4;

  //           `;
  //       }

  //       setContactExpanded(!contactExpanded);
  //   }

  //   const handleAboutMeExpansion = () => {
  //       if (aboutMeExpanded) {
  //           document.getElementById('aboutMe-article').style.cssText = `
  //               visibility: hidden;
  //               width: 0;
  //               height: 0;
  //               margin-left: 0;
  //               transition: 0.5s ease-in-out;
  //               opacity: 0;
  //               z-index: -1;
  //           `;

  //           document.getElementById('hero-section').style.filter = 'none';
  //       } else {
  //           if (skillsExpanded) {
  //               handleSkillsExpansion();
  //           }

  //           if (contactExpanded) {
  //               handleContactExpansion();
  //           }
            
  //           document.getElementById('aboutMe-article').style.cssText = `
  //               visibility: visible;
  //               width: 80vw;
  //               height: fit-content;
  //               margin-left: -40vw;
  //               transition: 0.3s ease-in-out;
  //               opacity: 0.8;
  //               z-index: 4;

  //           `;
  //           document.getElementById('hero-section').style.cssText = `
  //               filter: blur(10px);
  //               -webkit-filter: blur(10px);
  //               transition: 0.3s ease-in-out;            
  //           `;
            
  //       }
  //       setAboutExpanded(!aboutMeExpanded); 
        
        
  //   }

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr', justifyItems: 'center'}}>
          <Avatar src="https://www.iconfinder.com/data/icons/diversity-avatars-volume-01-v2/64/man-beard-glasses-african-512.png" alt="avatar" ></Avatar>

          Phone: 519-619-3930<br></br>
          Email: bdejene19@gmail.com<br></br>
        </div>
            {/* tool tipped contact info */}
            {/* <ContactToolTip></ContactToolTip> */}
          </div>
          <div style={{paddingTop: '2em'}}>
          {['About Bemnet Dejene', 'Projects', 'Skills', 'Download Resume', 'Contact Info'].map((text, index) => {
            let icon = '';
            let attachedFunction = '';
            if (index === 0) {
              icon = <InfoIcon></InfoIcon>;
                // attachedFunction = handleAboutMeExpansion();
            } else if (index === 1) {
              icon = <WorkIcon></WorkIcon>
              attachedFunction = window.location.href = '#projects';
            } else if (index === 2) {
              icon =  <StarIcon></StarIcon>
              // attachedFunction = handleSkillsExpansion();
            } else if (index === 3) {
              icon = <GetAppIcon></GetAppIcon>
            }else {
              icon = <ContactSupportIcon></ContactSupportIcon>
              // attachedFunction = handleContactExpansion();
            }
            return (
              <ListItem button key={text} onClick={() => attachedFunction}>
                 <ListItemIcon>{icon}</ListItemIcon>
                 <ListItemText primary={text} />
              </ListItem>
              
            )
         
        })}

          </div>
       
      </List>
    </div>
  );

  return (
    <div style={{backgroundColor: '#1B69DE'}}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div style={{padding: '0.5em', paddingLeft: '0.75em'}}>
          <Menu onClick={toggleDrawer(anchor, true)} id='menu-icon' style={{color: 'white'}}></Menu>


          </div>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}



const Avatar = styled.img`
  width: 45vw;
`;