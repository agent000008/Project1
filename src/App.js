import logo from './logo.svg';
import './App.css';
import Hero from './Hero/Hero';
import Registration from './Welcome/Registration';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Inf from './Nav/Inf';
import Hist from './Nav/Hist';
import Home from './Nav/Home';


function App() {
  return (
    <div>
    <Nav/>
    
      <Routes>
        <Route path='/gl' element={<Home/>}/>
        <Route path='/inf' element={<Inf/>}/>
        <Route path='/ht' element={<Hist/>}/>
      </Routes>
    
    
    </div>
  );
}

export default App;
