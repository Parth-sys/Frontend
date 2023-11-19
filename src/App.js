
import './App.css';
import 'bootstrap'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Mobile from './components/Mobiles';
function App() {
  return (
    <Routes>
     
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/signup' element={<Signup></Signup>}></Route>
   <Route path='/mobiles' element={<Mobile></Mobile>}></Route>
    </Routes>
  );
}

export default App;
