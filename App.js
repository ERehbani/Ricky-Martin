import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/About'
import Profile from './components/Profile'
import Person from './components/Person'

function App() {
  return (
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}>
          <Route path=':person' element={<Person/>}/>
        </Route>
      </Routes>
  );
}

export default App;
