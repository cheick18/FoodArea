
import { Button, Grid, IconButton, Input, InputAdornment, InputBase, Paper, TextField, ThemeProvider, Typography, createTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import cat3 from '../components/cat3.jpeg'
import cat4 from '../components/cat4.jpeg'
//import food4 from '../components/food4.png'
import Separator from '../components/Separator'
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../components/Footer'
import ListRecette from '../components/ListRecette'
import food4 from '../food4.jpeg'
import { useEffect } from 'react'


export default function Rexettes() {
    const isXs = useMediaQuery((them) => them.breakpoints.only('xs'));
    const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const istab = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    useEffect(() => {
   
        window.scrollTo(0, 0);
    
      
        return () => {
         
        };
      }, []);

    return (
        <div>
            {
                isSm&&(
        <>
        <Separator />
        <Grid container style={{ paddingLeft: '5%',paddingRight:'5%' }} justifyContent='space-between' alignItems='center'>
            <Grid Item md={6}>
                <Typography variant='h3' style={{ fontSize: '32px',paddingBlockEnd:'24px' }}>Decouvrez toute nos recettes  à trvaers nos themes et categorie</Typography>
           
           
                <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',width:'300px'}}
    >
       <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Trouvez une recette..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    
    </Paper>
            </Grid>


            <Grid Item md={5}  >

             <Grid container justifyContent='space-between' >
                <Grid md={6}  style={{paddingRight:'8px'}}>
                    <img src={cat3} style={{width:'100%',height:'380px',objectFit:'cover'}} />

                </Grid>
                <Grid md={6}>
                <Grid container justifyContent='space-between' >
                <Grid md={12} style={{paddingLeft:'8px'}} >
                    <img src={cat4} style={{width:'100%',height:'182px',objectFit:'cover'}} />
                </Grid>
                <Grid md={12} sx={{paddingTop:'12px',paddingLeft:'8px'}} >
                    <img src={food4} style={{width:'100%',height:'182px',objectFit:'cover'}} />
                </Grid>


                 </Grid>
                  
                </Grid>


             </Grid>
               
               
              

                </Grid>
           




        </Grid>
        <Separator />
        <Separator />

        
    <ListRecette />
    
      
        </>
        )

    }
    {
        isXs&&(
            <>
            <Separator/>
            <Grid container  p='0 5%' >
                <Grid xs={12} >
                    <img src={cat3} style={{width:'100%',height:'300px',objectFit:'cover'}} />

                </Grid>
              
                <Grid Item xs={12}>
                <Typography variant='h3' style={{ fontSize: '19px',paddingBlockEnd:'24px',paddingBlockStart:'16px'}}>Decouvrez toute nos recettes  à travaers nos themes et categorie</Typography>
             

                <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
    >
       <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Trouvez une recette..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    
    </Paper>
            </Grid>
          

                </Grid>
            </>
        )
    }
    <Separator />
        <Footer />
        </div>

    
  )
}
