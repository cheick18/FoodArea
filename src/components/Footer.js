import { Box } from '@mui/joy'
import { Breadcrumbs, Divider, Fab, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MailOutline, Home, Fastfood, Palette, Category, ContactMail, PersonAdd, LockOpen } from '@mui/icons-material';

export default function Footer() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.between('xs','sm'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const styleD = {
        color:'#EB4038',
        fontWeight:'500',
     
       };
       const mouseenter=(event)=>{
      
       event.target.style.color="#bdbdbd";

       }
       const mouseleave=(event)=>{
        event.target.style.color='white';

       }
  return (
    <Grid container sx={{bgcolor:'#212121'}}style={{padding:'5% 0'}} >
      {isSm &&(<>
        <Grid Item md={5} style={{padding:'0 5%'}}>
        <Typography color='#bdbdbd'  variant='h6' style={{fontSize:'36px',paddingBlockEnd:'32px'}}>Food<span style={styleD}>Area</span></Typography>
        <Typography variant='body2' textAlign='start' style={{color:'#bdbdbd',paddingBlockEnd:'16px',paddingLeft:'16px'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non </Typography>
        <Stack direction='row'spacing={1.5} style={{paddingLeft:'24px',paddingBlockEnd:'64px'}}>
        <Fab size="small" color="primary" aria-label="add"><FacebookOutlinedIcon /></Fab>
        <Fab size="small" color="primary" aria-label="add"><InstagramIcon /></Fab>
        <Fab size="small" color="primary" aria-label="add"><LinkedInIcon /></Fab>
        <Fab size="small" color="primary" aria-label="add"><YouTubeIcon /></Fab>
        </Stack>
        
        </Grid>
        <Grid item md={7}>


        </Grid>
        <Grid item md={12}  style={{padding:'0 15%'}}>
            <Stack direction='row' alignItems='center' justifyContent='space-around'>
            <Typography variant='h6' style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}  to='/'>Home</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'white'}}> </div>
            <Typography variant='h6'style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave} to='/recettes'>Recettes</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'white'}}> </div>
     {/**      <Typography variant='h6'style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>Theme</Link></Typography>*/}  
           
            <Typography variant='h6'style={{color:'white'}}> <Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}  to='/categories'>Categories</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'white'}}> </div>
            <Typography variant='h6' style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}  to='/contact'> Contactez nous</Link></Typography>
            </Stack>

            </Grid>
    <Grid md={12} style={{paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%'}}>
    <hr style={{opacity:0.1}}></hr>
  </Grid>
    <Grid  iTEM md={5} style={{paddingLeft:'5%'}}> 
    <Typography variant='subtitle2' style={{color:'#bdbdbd'}}>&copy; 2023 FoodArea. Tous droits réservés.</Typography>
    </Grid>

</>)}
{

isXs &&(
  <>
   <Grid Item xs={12} style={{padding:'0 5%'}}>
        <Typography color='#bdbdbd'  variant='h6' style={{fontSize:'36px',paddingBlockEnd:'32px',textAlign:'center'}}>Food<span style={styleD}>Area</span></Typography>
        <Typography variant='body2' textAlign='center' style={{color:'#bdbdbd',paddingBlockEnd:'16px',paddingLeft:'16px'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non </Typography>
        <Stack direction='row'spacing={1.5} style={{paddingBlockEnd:'64px'}} justifyContent='center'>
        <Fab size="small" color="primary" aria-label="add"><FacebookOutlinedIcon /></Fab>
        <Fab size="small" color="primary" aria-label="add"><InstagramIcon /></Fab>
        <Fab size="small" color="primary" aria-label="add"><LinkedInIcon /></Fab>
        <Fab size="small" color="primary" aria-label="add"><YouTubeIcon /></Fab>
        </Stack>
        
        </Grid>
        <Grid item xs={12} style={{padding:'0 10%'}}>
     
          <Stack  direction='row' spacing={1}> 
        <Link
            underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
       
          to="/"
           style={{textDecoration:'none', textDecorationColor:'Highlight',color:'white'}}>
          <Home sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center',color:'white' }}
          
          to="/recettes"
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'white'}}
        >
          <Fastfood sx={{ mr: 0.5 }} fontSize="inherit" />
          Recettes
        </Link>
      
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'white'}}
        
        >
          <Palette sx={{ mr: 0.5 }} fontSize="inherit" />
          Categories
        </Link>
        </Stack>
        <Stack direction='row' spacing={1}  style={{paddingBlockStart:'8px'}}>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'white'}}
        
        >
          <Palette sx={{ mr: 0.5 }} fontSize="inherit" />
          Contact
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'white'}}
        
        >
          <Palette sx={{ mr: 0.5 }} fontSize="inherit" />
          inscription
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'white'}}
        
        >
          <Palette sx={{ mr: 0.5 }} fontSize="inherit" />
          Connexion
        </Link>
        </Stack>
     
      </Grid>
      <Grid item  xs={12} style={{paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%'}}>
    <hr style={{opacity:0.1}}></hr>
  </Grid>
    <Grid item  xs={12} style={{paddingLeft:'5%'}} > 
    <Typography variant='subtitle2' style={{color:'#bdbdbd'}}>&copy; 2023 FoodArea. Tous droits réservés.</Typography>
    </Grid>
  </>
)
}
    </Grid>
  )
}
