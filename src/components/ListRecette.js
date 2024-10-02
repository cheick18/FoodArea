import { Grid, Skeleton, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import preview from './preview.png'
import { mdiBoxShadow } from '@mdi/js'
import { CardContent, CardCover } from '@mui/joy'
import et4 from './et4.jpeg'
import { Link } from 'react-router-dom'
import productData from './-db'

import { styled } from '@mui/system';

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#212121',
  '&:hover': {
    textDecoration: 'underline',
  },
}));




function ListRecette() {

  const onmouseenter=(evenet)=>{
    evenet.target.style.opacity=0.6;


  }
  const onmouseleave=(evenet)=>{
    evenet.target.style.opacity=1;

  }
  const onmouseen=(evenet)=>{
    
  
  
    }
    const onmousel=(evenet)=>{
   
  
    }
    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
 
  const isTav = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <>
    <Grid container sx={{p:'7% 5%',bgcolor:'#F3EEEE'}} justifyContent='space-around' spacing={2}>
      <Grid item md={12} xs={12}>
      <Typography variant='h4' sx={{paddingBlockEnd:'24px'}}>Decouvrez toute nos recettes <br></br>Dans un seul endroit<br></br></Typography>
      </Grid>

      <>
      
      {
        isSm&&(
        
        productData.map((p)=>{
          return(
            <Grid item md={4} xs={12} style={{ paddingLeft:'16px',paddingRight:'16px'}} key={p.id}  textAlign='center'>
  {p.image?<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>
        <Link to='/detail'>
      <img src={p.image} style={{width:'100%', height:'200px',objectFit:'cover',borderRadius:'16px'}}  />
      </Link>
      </div>: <Skeleton variant='rectangular' sx={{width:'100%',height:'200px',borderRadius:'16px'}} />}
      
      
      <Typography variant='h6' style={{paddingBlockStart:'8px',textAlign:'center'}}><Link to='/detail' style={{textDecoration:'none',color:'#212121'}}>{p.name ?p.name:<Skeleton  width={160} sx={{margin:'0 auto'}}/>}</Link></Typography>
      
      
</Grid>

          );
        }
        )
        )
       }
         {
        isXs&&(
        
        productData.map((p)=>{
          return(
            <Grid item  xs={12}  key={p.id}  textAlign='center'>
  {p.image?<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>
        <Link to='/detail'>
      <img src={p.image} style={{width:'100%', height:'200px',objectFit:'cover',borderRadius:'16px'}}  />
      </Link>
      </div>: <Skeleton variant='rectangular' sx={{width:'100%',height:'200px',borderRadius:'16px'}} />}
      
      
      <Typography variant='h6' style={{paddingBlockStart:'8px',textAlign:'center'}}><Link to='/detail' style={{textDecoration:'none',color:'#212121'}}>{p.name ?p.name:<Skeleton  width={160} sx={{margin:'0 auto'}}/>}</Link></Typography>
      
      
</Grid>

          );
        }
        )
        )
       }
       </>
      {/*
       

<Grid item md={4}  style={{ paddingLeft:'16px',paddingRight:'16px'}}>
  
       <div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>
        <Link to='/detail'>
      <img src={et4} style={{width:'100%', height:'200px',objectFit:'cover',borderRadius:'16px'}}  />
      </Link>
      </div>
      
      <Typography variant='h6' style={{paddingBlockStart:'8px',textAlign:'center'}}><CustomLink to='/detail'  >Cuisine deurope</CustomLink></Typography>
      
      
</Grid>

<Grid item md={4} textAlign='center'  style={{ paddingLeft:'16px',paddingRight:'16px'}}>
<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>

      <img src='https://images.pexels.com/photos/4040701/pexels-photo-4040701.jpeg?auto=compress&cs=tinysrgb&w=400' style={{width:'100%', height:'200px',objectFit:'cover',paddingBlockEnd:'8px',borderRadius:'16px'}}/>
      </div>
      <Typography variant='h6' style={{paddingBlockStart:'8px'}} onMouseEnter={onmouseen} onMouseLeave={onmousel}><CustomLink to='/detail'  >Cuisine d'europe</CustomLink></Typography>

 
</Grid>

<Grid item md={4} textAlign='center'  style={{ paddingLeft:'16px',paddingRight:'16px'}}>
<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>

      <img src='https://images.pexels.com/photos/1954526/pexels-photo-1954526.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'  style={{width:'100%', height:'200px',objectFit:'cover',paddingBlockEnd:'8px',borderRadius:'16px'}}/>
      </div>
      <Typography variant='h6' style={{paddingBlockStart:'8px',textAlign:'center'}}  ><CustomLink to='/detail'  >Cuisine d'afrique</CustomLink></Typography>

 
</Grid>
<Grid item md={4}  style={{ paddingLeft:'16px',paddingRight:'16px'}}>
<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>

      <img src='https://images.pexels.com/photos/14285874/pexels-photo-14285874.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'  style={{width:'100%', height:'200px',objectFit:'cover',paddingBlockEnd:'8px',borderRadius:'16px'}} />
      </div>
      <Link style={{textDecoration:'none'}}>
      <Typography variant='h6' style={{paddingBlockStart:'8px',color:'#212121',textAlign:'center'}} >Cuisine d'asie</Typography>
      </Link>
      
</Grid>
<Grid item md={4} textAlign='center'  style={{ paddingLeft:'16px',paddingRight:'16px'}}>
<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>

      <img src='https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' style={{width:'100%', height:'200px',objectFit:'cover',paddingBlockEnd:'8px',borderRadius:'16px'}}/>
      </div>
      <Link style={{textDecoration:'none'}}>
      <Typography variant='h6' style={{paddingBlockStart:'8px',color:'#212121'}}>Cuisine d'europe</Typography>
</Link>
    
</Grid>
<Grid item md={4} textAlign='center'  style={{ paddingLeft:'16px',paddingRight:'16px'}}>
<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>

      <img src='https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400'  style={{width:'100%', height:'200px',objectFit:'cover',paddingBlockEnd:'8px',borderRadius:'16px'}}/>
     </div>
     <Link style={{textDecoration:'none'}}>
      <Typography variant='h6' style={{paddingBlockStart:'8px',color:'#212121'} } underline='hover'>Cuisine d'europe</Typography>
</Link>
      
</Grid>
    */}
<Grid item md={12}>

<Typography variant='subtitle1' sx={{textAlign:'right',color:'#EB6038'}}><Link to='/recette'>Voir toutes les recettess...</Link></Typography>
</Grid>


    </Grid>
  
   
    </>
  )
}

export default ListRecette
