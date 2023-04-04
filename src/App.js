import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AboutMe from './pages/AboutMe'
import ConnectMe from './pages/ConnectMe';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Pages from './pages/Pages';
import NotFound from './pages/NotFound';
import HashLoader from "react-spinners/HashLoader";

import { useState,useEffect } from 'react';

// Aos animations
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
    <div className='appjsx'>
     {
      loading?
      <HashLoader

        color={'fff'}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div className='real-gangsta'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>


          <Routes>

             <Route path='/' element={<Pages/>} />
             <Route path='*' element={<NotFound />} />
             <Route path='/aboutme' element={<AboutMe />} />
             <Route path='/contact' element={<ConnectMe />}/>

          </Routes>

      </BrowserRouter>
      </div>
     }
    
    
 
    
    </div>
  );
}

export default App;
