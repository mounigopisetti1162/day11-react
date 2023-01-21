import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './compo/Login';
import './App.css';
import Action from './compo/Action';
import Protected from './compo/Protectedroutes';
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './compo/Student';
import Teacher from './compo/Teacher';
import Home from './compo/Home';
import Allpeople from './compo/Allpeople';
import Navbar from './compo/Navbar';
import Provider from './compo/Provider';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const islogged=localStorage.getItem('islogged')|| false
  return (
    <>
    <Provider>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/Home' element={<Protected islogged={islogged}> <Home/></Protected>}/>
      <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Protected>{<Home/>}</Protected>}/>
        <Route path='/people' element={<Protected>{<Allpeople/>}</Protected>}/>
        <Route path='/action' element={<Protected>{<Action/>}</Protected>}/>
        <Route path='/action/:id' element={<Protected>{<Action/>}</Protected>}/>
        <Route path='/student'element={<Protected>{<Student/>}</Protected>}/>
        <Route path='/teacher' element={<Protected>{<Teacher/>}</Protected>}/>
        
        
      
    </Routes>
    
    
    </BrowserRouter>
        </Provider>
    </>
  );
}

export default App;
