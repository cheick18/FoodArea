import { useMediaQuery } from '@mui/material';
import React from 'react'

export default function BigSeparator() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
   
    <div>
        {
            isXs && (
                <>
                 <div style={{display:'block',height:'48px'}}></div>

                </>
            )
        }
        { isSm && (     
         <div style={{display:'block',height:'208px'}}></div>)
}

    </div>
  )
}
