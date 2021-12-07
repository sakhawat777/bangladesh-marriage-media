
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import AboutUs from './components/AboutUs/AboutUs';
import QuestionAndAnswer from './components/QuestionAndAnswer/QuestionAndAnswer';
import Contact from './components/Contact/Contact';
import Tutorial from './components/Tutorial/Tutorial';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <div>
     <BrowserRouter>
				<Routes>
					
          <Route path='/' element={<Home />} />
					<Route path='/about-us' element={<AboutUs/>} />
          <Route path='/q&a' element={<QuestionAndAnswer/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/tutorial' element={<Tutorial/>} />
          <Route path='/logIn' element={<LogIn/>} />
          <Route path='*' element={<NoMatch />} />
				
					
				</Routes>
			</BrowserRouter>
      
      
    </div>
  );
}

export default App;
