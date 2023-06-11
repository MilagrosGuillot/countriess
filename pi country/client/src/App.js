import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"
import { HomePage, LandingPage, Detail, Form } from './views';
import NavBar from './components/NavBar/NavBar';
import SearchBarName from './components/SearchBar/SearchBarName';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001"

function App() {

  const {pathname} = useLocation();
  return (
    <div className="App">
    {pathname !== "/" && <NavBar></NavBar>} 
      <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/home' element={<HomePage />}></Route>
    <Route path='/detail/:id' element={<Detail/>}></Route>
    <Route path='/create' element={<Form/>}></Route>
    <Route path='/search/:name' element={<SearchBarName/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
