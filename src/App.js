import { Route,Routes } from 'react-router-dom';
import Nav from './front/nav';
import './App.css';
import './front/front.css'
import './front/about.css';
import About from './front/about';
import Home from './front/home'
import Details from './front/Details';
import Contact from './front/contact';
import Work from './front/service';
import Orders from './front/orders';
import Job from './front/works';
function App() {
  return (
    <>
    <Details/>
    <Nav />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Work/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/works' element={<Job/>}/>

      </Routes>
    </>
  );
}

export default App
