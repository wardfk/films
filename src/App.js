import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Add from './pages/Add';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Contact from './pages/Contact';



function App() {
  return (
     <BrowserRouter>
     
      <Routes>
      
        <Route path='/' element={<Home />} />

        <Route path='/movies' element={<Movies />} />
          
        <Route path='/series' element={<Series />} />

        {/* <Route path='/contact' element={<Contact />} /> */}
          
        <Route path='/add' element={<Add />} />
      </Routes>
     </BrowserRouter>
      

    )
  
}

export default App;
