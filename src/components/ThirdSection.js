import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import red from './red.jpeg'



export default function ThirdSection() {

  const onmouseleave =(event)=>{
    event.target.style.backgroundColor='#F3EEEE';
   event.target.parentNode.parentNode.style.backgroundColor='#F3EEEE';
   event.target.parentNode.parentNode.children[0].children[0].style.backgroundColor="#EB4038";
  
  
  
}
const onmouseenter =(event)=>{
    event.target.style.backgroundColor='white';
   event.target.parentNode.parentNode.style.backgroundColor='white';
   event.target.parentNode.parentNode.children[0].children[0].style.backgroundColor="#EB6038";
  
  
  

}

  return (
    <Box sx={{backgroundColor:'#F3EEEE'}}>
    <Grid container style={{padding:" 8% 5%"}} justifyContent='space-between'>
        <Grid item md={5}>
       <Typography variant='h4'>4 Astuces de Cuisine pour 
Simplifier la vie en Cuisine </Typography>

            <List  sx={{paddingLeft:'24px', paddingTop:'24px'}}>
          
                <ListItem  >
                <ListItemAvatar>
          <Avatar sx={{bgcolor:'#EB4038'}} className='avatar'> 1</Avatar>
        </ListItemAvatar>
                  <ListItemText className='whiteColoronhover' onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}><Typography variant='body2'>Organisez tous vos ingrédients avant de commencer à cuisiner.</Typography></ListItemText>
                </ListItem>
                <ListItem >
                <ListItemAvatar>
          <Avatar sx={{bgcolor:'#EB4038'}}>2</Avatar>
        </ListItemAvatar>
                 
                  <ListItemText  className='whiteColoronhover' onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}><Typography  variant='body2'>Préparez tous les légumes et ingrédients avant de mettre le feu sous la casserole</Typography></ListItemText>
                </ListItem>
                <ListItem >
                <ListItemAvatar>
          <Avatar sx={{bgcolor:'#EB4038'}}>3</Avatar>
        </ListItemAvatar>
                
                  <ListItemText className='whiteColoronhover' onMouseEnter={onmouseenter} onMouseLeave={onmouseleave} ><Typography  variant='body2' color='#424242'>Mise en place d'un "mise en place" efficace pour une cuisson fluide.</Typography></ListItemText>
                </ListItem>
                <ListItem  >
                <ListItemAvatar>
          <Avatar sx={{bgcolor:'#EB4038'}}>4</Avatar>
        </ListItemAvatar>
                  <ListItemText  className='whiteColoronhover' onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}><Typography variant='body2' color='#424242'>Mise en place d'un "mise en place" efficace pour une cuisson fluide.</Typography></ListItemText>
                </ListItem>
            
            </List>
        
        </Grid>
        <Grid item md={5} >
           
       <img  src={red}
            alt="de l'image"
            style={{ width: '100%', height: '430px', borderRadius:8}}
          />
        </Grid>

    </Grid>
  


  
</Box>
  )
  }
