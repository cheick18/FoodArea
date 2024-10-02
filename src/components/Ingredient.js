import React from 'react'

export default function Ingredient({image,name, quantity}) {
  return (
    <div>
         <Stack direction='row' spacing={4} alignItems='center'>
        <img src={image}  style={{width:'70px',objectFit:'cover'}}/>
       
        <Typography variant='body2'>{image}</Typography>
        <Typography variant='h5'>{quantity}</Typography>
      </Stack>
    </div>
  )
}
