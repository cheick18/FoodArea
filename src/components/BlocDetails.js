import { Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function BlocDetails() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const istab = useMediaQuery((theme) => theme.breakpoints.between('sm','md'));

  return (
     <Box>
     
      { /*isXs &&(
         <Typography variant='h5' align='center' color='#424242'>Notre passion pour la cuisine</Typography>
      <div style={{display:'block',height:'24px'}}></div>
        <Typography variant='body2'  align='center' color='#9e9e9e' padding='0 10%' style={{paddingBlockEnd:'208px'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
        consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda
        quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>

      ) */}
       {isSm &&(
        <>
         <Typography variant='h5' align='center' color='#424242'>Noous construisons l'avenir ensemble</Typography>
      <div style={{display:'block',height:'24px'}}></div>
      <Typography variant='body2'  align='center' color='#9e9e9e' padding='0 35%' style={{paddingBlockEnd:'208px'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
</>)
       }
       {
        istab&&(
          <>
          </>
        )
       }
       
</Box>
      

  )
}
