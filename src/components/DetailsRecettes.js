import { Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import et4 from "./et4.jpeg";
import Footer from './Footer';
import Separator from './Separator';
import ail2 from '../components/ail2.png'

export default function DetailsRecettes() {
  useEffect(() => {
    // Réinitialiser la position de défilement à 0
    window.scrollTo(0, 0);

  
    return () => {
     
    };
  }, []);
  return (

    <>
    <Separator/>
    <Grid container  style={{padding:" 0 5%"}} justifyContent='space-between' alignItems='center'>
        <Grid item md={5}>
            <img src={et4}  style={{width:'100%',height:'368px', objectFit:'cover',borderRadius:'16px'}}/>

        </Grid>

        <Grid item md={5} >
            <Typography variant='h4' style={{paddingBlockEnd:'16px'}}>Fruits de sauce bologne</Typography>
            <Typography variant='body2' sx={{color:'#9e9e9e'}}>
            Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae
            </Typography>

</Grid>
{/*
<Grid item md={12} sx={{ display:'block',height:'80px'}}></Grid>

<Grid item md={12} >
      <Typography variant='h5' color='#9e9e9e'> Incregient de la recette</Typography>

      

    </Grid>
  
    <Grid item md={12} sx={{ display:'block',height:'30px'}}></Grid>
  

    <Grid item md={7} >
      <Stack direction='row' spacing={4} alignItems='center' >
        <img src={ail2}  style={{width:'70px',objectFit:'cover'}}/>
       
        <Typography variant='h6'>Ail de cuisson</Typography>
        <Typography variant='h5' color='#9e9e9e'>300g</Typography>
      </Stack>

    </Grid>
    */}
    {/*
   
    <Grid item md={12} sx={{ display:'block',height:'30px'}}></Grid>
    <Grid item md={5}>
    <Stack direction='row' spacing={4} alignItems='center' >
        <img src={ail2}  style={{width:'70px',objectFit:'cover'}}/>
       
        <Typography variant='h6'>Ail de cuisson</Typography>
        <Typography variant='h5' color='#9e9e9e'>300g</Typography>
      </Stack>

    </Grid>
    */}
         <Grid item md={12} sx={{ display:'block',height:'80px'}}></Grid>
    </Grid>
   <Footer />

   </>
  )
}
