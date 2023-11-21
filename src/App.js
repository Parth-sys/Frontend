
import './App.css';
import 'bootstrap'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Mobile from './components/Mobiles';
import Cloth from './components/Cloth';
import Admin from './components/Admin';
import Cart from './components/Cart';


function App() {
  return (
    <Routes>
     
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/signup' element={<Signup></Signup>}></Route>
   <Route path='/mobiles' element={<Mobile></Mobile>}></Route>
   <Route path='/cloth' element={<Cloth></Cloth>}></Route>
   <Route  path='/admin' element={<Admin/>}></Route>
   <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
  );
}

export default App;
