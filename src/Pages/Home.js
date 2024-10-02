import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import React from 'react'
import Nabar from '../components/Nabar';
import Separator from '../components/Separator';
import Header from '../components/Header';
import BlocDetails from '../components/BlocDetails';
import ThirdSection from '../components/ThirdSection';
import Text_image from '../components/Text_image';
import SliderThemes from '../components/SliderThemes';
import ListRecette from '../components/ListRecette';
import Footer from '../components/Footer';
import productData from '../components/-db';
import BigSeparator from '../components/BigSeparator';
import { useEffect } from 'react';

export default function Home() {
  const isXs = useMediaQuery((them) => them.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const istab = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  useEffect(() => {
   
    window.scrollTo(0, 0);

  
    return () => {
     
    };
  }, []);
    const theme = createTheme({
        palette: {
          primary: {
            main:'#EB4038'
        },
          secondary: {
           main: '#EB6038',
           light:'#C57155'
           }, 
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 1115,
            lg: 1200,
            xl: 1536,
          },
        },
     
      });
  return (
    <ThemeProvider theme={theme}>
       <div>
      <Separator />
    <Header />
    {
      isSm &&(
        <>
 <BigSeparator />
    <BlocDetails />
    </>
      )}
       {
    istab &&(
      <>
       <Separator />
      </>
    )
  }
         {
    isXs &&(
      <>
       <Separator />
      </>
    )
  }
    <ThirdSection />

   
    <Separator />
    <SliderThemes />
  
  {
    isSm &&(
      <>
       <Separator />
      </>
    )
  }
    {
    istab &&(
      <>
       <Separator />
      </>
    )
  }
   
    <Text_image  them={theme}/>
    <ListRecette />
    <Footer />
    </div>
   </ThemeProvider>
  )
}
