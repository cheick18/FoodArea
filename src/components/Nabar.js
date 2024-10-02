
import { AppBar, Box,Button,Stack,Toolbar,Typography ,IconButton, Avatar, useMediaQuery, ListItem, ListItemText, Drawer, List, ListItemIcon, ListItemButton} from '@mui/material'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { MailOutline, Home, Fastfood, Palette, Category, ContactMail, PersonAdd, LockOpen } from '@mui/icons-material';

export default function Nabar() {
  const menuItems = [
    { text: 'Home', icon: <Home />,lien:'/' },
    { text: 'Recettes', icon: <Fastfood /> ,lien:'/recettes' },
    { text: 'Theme', icon: <Palette />,lien:'/theme'  },
    { text: 'Categories', icon: <Category /> ,lien:'/categories' },
    { text: 'Contact-nous', icon: <ContactMail /> ,lien:'/contact' },
    { text: 'Inscription', icon: <PersonAdd /> ,lien:'/inscription' },
    { text: 'Se connecter', icon: <LockOpen />,lien:'/connexion'  },
  ];
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
 
  const isTav = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const [openDrawer, setOpenDrawer] = React.useState(false);
 

  const styleD = {
   color:'#EB4038',
   fontWeight:'500',

  };
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{position:'static',boxShadow:'none'}}>
      <Toolbar sx={{bgcolor:'white'}} style={{padding:'0 5%',position:'sticky'}}>
      {isXs && (
        <>
            <IconButton size="large" edge="start" color="primary" aria-label="menu" onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
             <Typography color='#9e9e9e' flexGrow={1} variant='h6' ><Link to='/' style={{textDecoration:'none',color:'#9e9e9e'}}>Food<span style={styleD}>Area</span></Link></Typography>
         </>
          )}
             {isTav && (
        <>
            <IconButton size="large" edge="start" color="primary" aria-label="menu" onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
             <Typography color='#9e9e9e' flexGrow={1} variant='h6' ><Link to='/' style={{textDecoration:'none',color:'#9e9e9e'}}>Food<span style={styleD}>Area</span></Link></Typography>
         </>
          )}
     
    
   {isSm && (
    <>
     <Typography color='#9e9e9e' flexGrow={1} variant='h6' ><Link to='/' style={{textDecoration:'none',color:'#9e9e9e', fontSize:'32px'}} >Food<span style={styleD}>Area</span></Link></Typography>
     <Stack direction='row'spacing={2}>
     <Link to='/'><Button style={{color:'#212121'}}>Home</Button></Link>
    <Link to='/recettes'><Button style={{color:'#212121'}}>Recettes</Button></Link>
 
    <Link to='/categories'>     <Button style={{color:'#212121'}}>Categories</Button></Link>
     <Link to='/contact'> <Button style={{color:'#212121'}}>Contactez-nous</Button></Link>
     <Button variant='contained' ><Link to='/inscription' style={{color:'white',textDecoration:'none'}}>S'inscrire</Link></Button>
   <Link to='/connexion'> <Button variant='outlined' color='secondary'>Se connecter</Button></Link> 
          </Stack>
          </>
   )
}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        
        <List>
      {  menuItems.map((text, index) => (
            <ListItem button key={text}>
              <Link  to={text.lien} style={{textDecoration:'none'}}> <ListItemButton>
               
              <ListItemIcon style={{color:'#EB4038'}}>
              {text.icon}
              </ListItemIcon>
             <ListItemText primary={text.text} style={{color:'gray'}}  />
             
              </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>


  )
}
