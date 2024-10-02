import { Button, Fab, Grid, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Separator from '../components/Separator'
import SendIcon from '@mui/icons-material/Send';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
   
    window.scrollTo(0, 0);

  
    return () => {
     
    };
  }, []);
  const isXs = useMediaQuery((them) => them.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const istab = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <div>
      <Separator />
   {isSm&&(
     <Grid container style={{padding: '0 5%',paddingBlockEnd:'64px'}} justifyContent='space-between' justifyItems='center'>
      
      <Grid item md={5}  bgcolor='primary'>
      <Typography variant='body2' textAlign='start' style={{width:'600px',color:'#9e9e9e'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporib
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
<Separator />

        <Grid container  spacing={2.7}>
          <Grid item md={5}  >
      <TextField
          id="filled-helperText"
          label="Nom"
        
          variant="filled"
        />
        </Grid>
        <Grid item md={5} style={{textAlign:'right'}}>
      <TextField
          id="filled-helperText"
          label="Preom"
        
          variant="filled"
        />
        </Grid>
       
        <Grid item md={5} style={{paddingBlockStart:'32px'}}>
      <TextField
          id="filled-helperText"
          label="Telephone"
        
          variant="filled"
        />
        </Grid>
        <Grid item md={5} style={{paddingBlockStart:'32px',textAlign:'right'}}>
      <TextField
          id="filled-helperText"
          label="Adresse mail"
        
          variant="filled"
        />
        </Grid >
</Grid>

<Grid container style={{paddingTop:'32px'}}>
  <Grid item md={12} style={{paddingBlockEnd:'40px'}}>
<TextField
          id="filled-helperText"
          label="Votre message"
          multiline
        
          variant="filled"
       style={{width:'100%'}} />
       </Grid>
       </Grid>

       <Button variant="contained" endIcon={<SendIcon />}>
  Envoyez message
</Button>

  </Grid>
   <Grid item md={5} xs={12} >
      
        <img src='https://images.pexels.com/photos/4259138/pexels-photo-4259138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{width:'100%',height:'300px', objectFit:'cover'}}/>
      
        <Grid container >
          <Grid item md={5}>
            <Typography variant='h6'>Notre adresse</Typography>
            <Typography variant='body1'>199 long view avenue 1009 New york NFF United state</Typography>
          {/*  <Stack direction='row'spacing={1.5} style={{paddingBlockStart:'16px'}}>
        <Fab size="small" style={{backgroundColor:'#F0F0F0'}} aria-label="add"><InstagramIcon /></Fab>
        <Fab size="small" style={{backgroundColor:'#F0F0F0'}} aria-label="add"><LinkedInIcon /></Fab>
        <Fab size="small" style={{backgroundColor:'#F0F0F0'}} aria-label="add"><YouTubeIcon /></Fab>
  </Stack> */}

          </Grid>
          <Grid item md={5}>
          <Typography variant='h6'>Cordonées</Typography>

          </Grid>

        </Grid>
        
</Grid>

     </Grid>
   )}
   {
    isXs&&(
      <>
      <Grid container style={{padding: '0 5%',paddingBlockEnd:'64px'}}>
       
      <Grid item xs={12}  >
        
      <img src='https://images.pexels.com/photos/4259138/pexels-photo-4259138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{width:'100%',height:'300px', objectFit:'cover'}}/>
         {/*
      <Typography variant='body2' textAlign='cneter' style={{color:'#9e9e9e'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
   */}
<Separator />
<Typography variant='body2' textAlign='cneter' style={{color:'#9e9e9e',paddingBlockEnd:'16px'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>

</Grid>
<Grid item  xs={12}   >
      <TextField
          id="filled-helperText"
          label="Nom"
        
          variant="filled"
      style={{width:'75%'}}  />
        </Grid>
        <Grid item  xs={12} style={{paddingBlockStart:'16px'}}>
      <TextField
          id="filled-helperText"
          label="Preom"
        
          variant="filled"
          style={{width:'75%'}} 
        />
        </Grid>
       
        <Grid item xs={12} style={{paddingBlockStart:'16px'}}>
      <TextField
          id="filled-helperText"
          label="Telephone"
        
          variant="filled"
          style={{width:'75%'}} 
        />
        </Grid>
        <Grid item xs={12} style={{paddingBlockStart:'16px'}} >
      <TextField
          id="filled-helperText"
          label="Adresse mail"
        
          variant="filled"
          style={{width:'75%'}} 
        />
        </Grid >
        <Grid item xs={12} style={{paddingBlockStart:'16px'}} >
      <TextField
          id="filled-helperText"
          label="Votre message"
          multiline
        
          variant="filled"
          style={{width:'75%'}} 
         
        />
        </Grid >
        <Grid item xs={12} style={{paddingBlockStart:'32px'}} >
        <Button variant="contained" endIcon={<SendIcon />}>
  Envoyez message
</Button>
    
        </Grid >


      </Grid>
      </>
    )
   }
     <Footer />
      
    </div>
  )
}
