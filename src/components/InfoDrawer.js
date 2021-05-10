import React from 'react';
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
            if (index === 0) {
              icon = <InfoIcon></InfoIcon>;
            } else if (index === 1) {
              icon = <WorkIcon></WorkIcon>
            } else if (index === 2) {
              icon =  <StarIcon></StarIcon>
            } else if (index === 3) {
              icon = <GetAppIcon></GetAppIcon>
            }else {
              icon = <ContactSupportIcon></ContactSupportIcon>
            }
            return (
              <ListItem button key={text}>
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