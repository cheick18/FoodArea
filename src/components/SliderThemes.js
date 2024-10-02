import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import preview from './preview.png'
import food4 from './food4.png'
import food3 from './food3.png'
import et4 from "./et4.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 





import font from './font.jpeg';
import Slider from 'react-slick';
import { Settings } from '@mui/icons-material';


export default function SliderThemes() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isTav = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const  settings = {
    dots: true,           
  arrows: false,       
  autoplay: true,       
  autoplaySpeed: 3000,   
  slidesToShow: 3,      
  slidesToScroll: 2,
  initialSlide:0,

  };
  const  settingXS = {
    dots: true,           
  arrows: false,       
  autoplay: true,         
  slidesToShow: 1,      
  slidesToScroll: 1,

  };
  
  return (
    
    <div>
        <Typography variant='h5' textAlign='center'  style={{paddingBlockEnd:'48px'}}>Decouvrez notre varieté de theme</Typography>
      {isSm&& (

        <>
    
 
    <Grid container  sx={{p:'0 10%', }}  xs={12}>
     <Grid  md={12}>
      <Slider {...settings}>
      <Grid item md={12}  textAlign='center' sx={{paddingLeft:'64px',paddingRight:'64px',outlineColor:'transparent' }}>
      <Typography variant='h6' style={{paddingBlockEnd:'4px',color:'#424242'}}>Cuisine d'afrique</Typography>
      <img src={food4}  style={{width:'100%', height:'100%',objectFit:'cover'}}/>
      </Grid>
      <Grid item md={12}  textAlign='center'  sx={{paddingLeft:'64px',paddingRight:'64px'}}>
      <Typography variant='h6' style={{paddingBlockEnd:'4px',color:'#424242'}}>Cuisine d'asie</Typography>
      <img src={preview}  style={{width:'100%', height:'100%',objectFit:'cover'}} />
      </Grid>
      <Grid item md={12} textAlign='center' sx={{paddingLeft:'64px',paddingRight:'64px'}}>
       <Typography variant='h6' style={{paddingBlockEnd:'4px',color:'#424242'}}>Cuisine d'europe</Typography>
      <img src={preview}  style={{width:'100%', height:'100%',objectFit:'cover'}}/>
      </Grid>
      <Grid item md={12} textAlign='center' sx={{paddingLeft:'64px',paddingRight:'64px'}}>
       <Typography variant='h6' style={{paddingBlockEnd:'4px',color:'#424242'}}>Cuisine d'europe</Typography>
      <img src={preview}  style={{width:'100%', height:'100%',objectFit:'cover'}}/>
      </Grid>
      <Grid item md={12} textAlign='center' sx={{paddingLeft:'64px',paddingRight:'64px'}}>
       <Typography variant='h6' style={{paddingBlockEnd:'4px',color:'#424242'}}>Cuisine d'europe</Typography>
      <img src={preview}  style={{width:'100%', height:'100%',objectFit:'cover'}}/>
      </Grid>
      <Grid item md={12} textAlign='center' sx={{paddingLeft:'64px',paddingRight:'64px'}}>
       <Typography variant='h6' style={{paddingBlockEnd:'4px',color:'#424242'}}>Cuisine d'europe</Typography>
      <img src={preview}  style={{width:'100%', height:'100%',objectFit:'cover'}}/>
      </Grid>

</Slider>
 </Grid>
    </Grid>
    </>

      )}
      {


        isXs &&(
          <>
<Grid contained style={{padding:'5% 5%',paddingBlockEnd:'48px'}} >
  <Grid item xs={12}>
  <Slider {...settingXS}>
 <Grid item xs={12}  style={{padding:'64px 64px',outlineColor:'transparent'}}>
      
      <img src={et4}  style={{width:'100%', height:'100%',objectFit:'cover',borderRadius:'32px'}}/>
      <Typography variant='h6' textAlign='center' style={{paddingBlockEnd:'16px'}}>Cuisine d'asie</Typography>
      </Grid>
      
      <Grid item xs={12} style={{padding:'64px 64px',outlineColor:'transparent'}}>
      
      <img src={et4}  style={{width:'100%', height:'100%',objectFit:'cover',borderRadius:'32px'}}/>
      <Typography variant='h6' textAlign='center' style={{paddingBlockEnd:'16px'}}>Cuisine d'oirent</Typography>
      </Grid>
      <Grid item xs={12} style={{padding:'64px 64px',outlineColor:'transparent'}} >
      
      <img src={et4}  style={{width:'100%', height:'100%',objectFit:'cover',borderRadius:'32px'}}/>
      <Typography variant='h6' textAlign='center'>Cuisine du monde</Typography>
      </Grid>
      
       <Grid item xs={12} style={{padding:'64px 64px',outlineColor:'transparent'}}  >
      
      <img src={et4}  style={{width:'100%', height:'100%',objectFit:'cover',borderRadius:'32px'}}/>
      <Typography variant='h6' textAlign='center'>Cuisine d'afrique</Typography>
      </Grid>
     
  </Slider>
  </Grid>

</Grid>
          </>
        )
      }
    </div>
  )
}
