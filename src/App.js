import Header from './components/Header';
import Nabar from './components/Nabar';
import { ThemeProvider } from '@emotion/react';
import Separator from './components/Separator';
import { Box, Slider, Typography, createTheme } from '@mui/material';
import { Book, Description } from '@mui/icons-material';
import Text_image from './components/Text_image';
import ThirdSection from './components/ThirdSection';
import SliderThemes from './components/SliderThemes';
import ListRecette from './components/ListRecette';
import Home from './Pages/Home';
import DetailsRecettes from './components/DetailsRecettes';
import AboutRecettes from './Pages/AboutRecettes';
import { BrowserRouter,Outlet,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Rexettes from './Pages/Rexettes';
import Themes from './Pages/Themes';
import Contact from './Pages/Contact';
import Categories from './Pages/Categories';
import Choix_inscription from './components/Choix_inscription';
import ChoixConnexion from './components/ChoixConnexion';

function App() {
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
        md: 1100,
        lg: 1200,
        xl: 1536,
      },
    },
 
  });
  return (
 

    <div className="App">
       <ThemeProvider theme={theme}>
        <>
        <Nabar />
       <Outlet />
     
       <Routes>
       <Route  path='/' element={ <Home />} />
       <Route  path='/detail' element={ <DetailsRecettes />} />
       <Route  path='/recettes' element={ <Rexettes />} />
       <Route  path='/theme' element={ <Themes />} />
       <Route  path='/contact' element={ <Contact/>} />
       <Route  path='/categories' element={ <Categories/>} />
       <Route  path='/inscription' element={ <Choix_inscription/>} />
       <Route  path='/connexion' element={ <ChoixConnexion/>} />
       </Routes>
       
       
     
   
       </>

     </ThemeProvider>
    </div>
 


 
  );
}

export default App;
