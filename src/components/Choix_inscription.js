import { Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import header from './header.jpeg'
import goo from './goo.png'
import Footer from './Footer'
import 'firebaseui/dist/firebaseui.css';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig ,firebase, uiConfigMail} from '../firebase.config'

export default function Choix_inscription() {
 /* const showFirebaseUI = () => {
 
   
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    
  };
*/
    const [showUI, setShowUI] = useState(false);
    /*
    const showFirebaseUI = () => {
      const uiContainer = document.getElementById('firebaseui-auth-container');
  
      if (uiContainer) {
        const existingUI = firebaseui.auth.AuthUI.getInstance(firebase.auth());
    
        if (existingUI) {
          // Si une instance existe déjà, réutilisez-la plutôt que d'en créer une nouvelle.
          existingUI.reset();
        } else {
          // Si aucune instance n'existe, créez une nouvelle instance.
          const ui = new firebaseui.auth.AuthUI(firebase.auth());
          ui.start('#firebaseui-auth-container', uiConfig);
        }
      }
    };
    useEffect(() => {
      
      showFirebaseUI();
    }, []);
    */

    const handleInscriptionClick = () => {
      setShowUI(true);
    };
  
    const handleConnectionClick = () => {
      setShowUI(true);
    };
  
    const handleCloseUI = () => {
      setShowUI(false);
    };
  return (
    <>
    <Grid container style={{padding:" 5% 5%"}}   spacing={6} alignItems='center' >
      <Grid item md={12}>
      <div id="firebaseui-auth-container" ></div>
      </Grid>
   
        <Grid item md={5} xs={12}>
<img src={header}  style={{width:'100%', height:'280px',objectFit:'cover',borderRadius:'16px'}}/>
        </Grid>
        <Grid item md={4} xs={12}>
            <Typography variant='h4' style={{fontSize:'33px',fontWeight:'thin', color:'gray',paddingBlockEnd:'32px'}}>Inscrivez vous</Typography>
            <Stack>
            
            <Button variant='outlined' sx={{ color: '#424242' }} startIcon={<img src={goo} style={{ width: '32px', objectFit: 'cover' }}  /> }>
            Inscription via Google
          </Button>
            <div style={{display:'block', height:'16px'}}></div>

            <Button variant='contained'>Créer un compte</Button>
            </Stack>
           
</Grid>

    </Grid>
  
    <Footer />
    </>
  )
}
