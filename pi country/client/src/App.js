import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"
import { HomePage, LandingPage, Detail, Form } from './components';
import NavBar from './views/NavBar/NavBar';




function App() {
  const {pathname} = useLocation();
  return (
    <div className="App">
    {pathname !== "/" && <NavBar></NavBar>} 
      <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/home' element={<HomePage/>}></Route>
    <Route path='/detail/:id' element={<Detail/>}></Route>
    <Route path='/create' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
