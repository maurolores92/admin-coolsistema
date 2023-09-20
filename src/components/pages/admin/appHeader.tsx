import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppHeader: React.FC = () => {
    const [state, setState] = useState<{ [key: string]: boolean }>({
      left: false,
      right: false,
      top: false,
      bottom: false,
    });
  
    const toggleDrawer = (anchor: string, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent
    ) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor: string) => (
      <div
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem button key="Option 1">
            <ListItemText primary="Option 1" />
          </ListItem>
          <ListItem button key="Option 2">
            <ListItemText primary="Option 2" />
          </ListItem>
          <ListItem button key="Option 3">
            <ListItemText primary="Option 3" />
          </ListItem>
        </List>
      </div>
    );
  
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {(['left'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  export default AppHeader;