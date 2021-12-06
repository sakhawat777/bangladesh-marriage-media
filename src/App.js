
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div>
     <BrowserRouter>
				<Routes>
					
          <Route path='/' element={<Home />} />
					<Route path='/about-us' element={<AboutUs/>} />
          <Route path='*' element={<NoMatch />} />
				
					
				</Routes>
			</BrowserRouter>
      
      
    </div>
  );
}

export default App;
