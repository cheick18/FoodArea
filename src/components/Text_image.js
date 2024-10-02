import { Box , Button, Grid, Typography, useMediaQuery} from '@mui/material'
import React from 'react'
import font from './font.jpeg'
import { Link } from 'react-router-dom';



export default function Text_image({them}) {
  const isXs = useMediaQuery((them) => them.breakpoints.only('xs'));
  const isSm = useMediaQuery((them) => them.breakpoints.up('sm'))
  return (
    <Box sx={{backgroundColor:'#EB6038'}}>
      {isSm &&(
        <Grid container style={{padding:" 8% 5%"}} justifyContent='space-between' alignItems='center'>
            <Grid item md={5} sx={12}>
            <img
            src={font}
            alt="de l'image"
            style={{ width: '100%', height: '430px', borderRadius:8}}
          />
          </Grid>
          <Grid item md={5} sx={12} >
                <Typography variant='h5' style={{color:'white'}}> Notre passion pour la cuisine</Typography>
                <div style={{display:'block',height:'20px'}}></div>
                <Typography variant='body2' style={{color:'white'}}> quos unde est voluptatem tempore 33 sunt impedit et tempora consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda</Typography>
                <div style={{display:'block',height:'20px'}}></div>
 <Link to='/contact'><Button size="small"  variant='contained' style={{backgroundColor:them.palette.secondary.light}}>Contactez-nous</Button></Link>

            </Grid>

        </Grid>
      

      )}
      {
        isXs &&(
          <>
          <Grid contained style={{padding:" 8% 5%"}}>
            <Grid item sx={12}>
            <Typography variant='h5' style={{color:'white',textAlign:'center'}}> Notre passion pour la cuisine</Typography>
                <div style={{display:'block',height:'20px'}}></div>
                <Typography variant='body2' style={{color:'white',textAlign:'center'}}> quos unde est voluptatem tempore 33 sunt impedit et tempora consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda</Typography>
                <div style={{display:'block',height:'20px'}}></div>


            </Grid>
            <Grid item sx={12}>
            <img
            src={font}
            alt="de l'image"
            style={{ width: '100%', height: '430px',borderRadius:'8px'}}
          />

            </Grid>

          </Grid>
          </>
        )
      }
      
    </Box>
  )
}
