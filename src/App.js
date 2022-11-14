import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Add from './pages/Add';
import Series from './pages/Series';
import Movies from './pages/Movies';



function App() {
  return (
     <BrowserRouter>
     
      <Routes>
      
        <Route path='/' element={<Home />} />

        <Route path='/add' element={<Add />} />
          
        <Route path='/movies' element={<Movies />} />

        <Route path='/series' element={<Series />} />
          
      </Routes>
     </BrowserRouter>
      

    )
  
}

export default App;
