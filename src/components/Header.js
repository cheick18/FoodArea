import { Grid, Container, Paper, Typography, Box, Button, useMediaQuery} from '@mui/material'
import header from './header.jpeg'
import 'animate.css';

import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


export default function Header() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isTav = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
  

  return (
    <Grid container style={{padding:" 0 5%"}} justifyContent='space-between'>
      {
        isXs && (<>
          <Grid item xs={12}>
      
     
        <Paper>
          <img
            src={header}
            alt="Description de l'image"
            style={{ width: '100%', height: '300px', borderRadius:8}}
          />
        </Paper>
      
  </Grid>
  <Grid item xs={12}>
    <Box >
    <div style={{display:'block',height:'20px'}}></div>
        <Typography variant="h1" style={{fontSize:'2.986rem'}} color='#212121' className='animate__animated animate__pulse'>FoodArea- Découvrez des Recettes Délicieuses</Typography>
        <div style={{display:'block',height:'24px'}}></div>
        <Typography variant='body' align='center' style={{color:'#9e9e9e'}}>tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
<div style={{display:'block',height:'16px'}}></div>
<Button size="large" variant='contained' color='primary' startIcon={<MailIcon />}>Contactez nous</Button>
     </Box>
      
    </Grid >

        </>)}
        {
          isTav &&(
            <>
             <Grid item xs={12}>
      
     
      <Paper>
        <img
          src={header}
          alt="Description de l'image"
          style={{ width: '100%', height: '300px', borderRadius:8}}
        />
      </Paper>
    
</Grid>
<Grid item xs={12}>
  <Box >
  <div style={{display:'block',height:'20px'}}></div>
      <Typography variant="h1" style={{fontSize:'2.986rem'}} color='#212121' className='animate__animated animate__pulse'>FoodArea- Découvrez des Recettes Délicieuses</Typography>
      <div style={{display:'block',height:'24px'}}></div>
      <Typography variant='body' align='center' style={{color:'#9e9e9e'}}>tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
<div style={{display:'block',height:'16px'}}></div>
<Link to='/contact'><Button size="large" variant='contained' color='primary' startIcon={<MailIcon />}>Contactez nous</Button></Link>
   </Box>
    
  </Grid >
            </>
          )
        }
      { isSm && (

     <>
    <Grid item md={5} xs={12}>
    <Box >
    <div style={{display:'block',height:'20px'}}></div>
        <Typography variant="h1" style={{fontSize:'2.986rem'}} color='#212121' className='animate__animated animate__pulse'>FoodArea- Découvrez des Recettes Délicieuses</Typography>
        <div style={{display:'block',height:'24px'}}></div>
        <Typography variant='body' align='left' style={{color:'#9e9e9e'}}>tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
<div style={{display:'block',height:'16px'}}></div>
<Button size="large" variant='contained' color='primary' startIcon={<MailIcon />}>Contactez nous</Button>
     </Box>
      
    </Grid >
    <Grid item md={6} xs={12}>
       {/* Grid item avec une image */}
     
        <Paper>
          <img
            src={header}
            alt="Description de l'image"
            style={{ width: '100%', height: '500px', borderRadius:8}}
          />
        </Paper>
      
  </Grid>
  </>
     )

    }

  </Grid>
  )
}
