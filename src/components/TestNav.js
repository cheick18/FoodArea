import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function TestNav() {
    

    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  
    const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <div>
           <AppBar position="static">
        <Toolbar>
          {isXs && (
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon Site
          </Typography>
          {isSm && (
            <>
              <Button color="inherit">Accueil</Button>
              <Button color="inherit">À Propos</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Contact</Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer pour le menu déroulant sur les écrans plus petits */}
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {['Accueil', 'À Propos', 'Services', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </div>
  )
}

export default TestNav
