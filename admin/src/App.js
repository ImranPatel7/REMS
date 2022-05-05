import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Up from './components/up';
import Dashboard from './pages/dashboard';
import Display from './pages/userdetails';
import PropertyDetails from './pages/propertydetails';
import Feedback from './pages/feedback';
import Upload from './pages/upload';
import Adminlogin from './pages/adminlogin';
import Adminsignup from './pages/adminsignup';
import Forgotpassword from './pages/forgotpassword';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div id="wrapper">
    
    <Router>
    <Header/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
    <Up/>
    <Routes>
    <Route exact path='/' element={<Dashboard/>}/>
    <Route exact path='/userdetails' element={<Display/>}/>
    <Route exact path='/propertydetails' element={<PropertyDetails/>}/>
    <Route exact path='/feedback' element={<Feedback/>}/>
    <Route exact path='/upload' element={<Upload/>}/>
    <Route exact path='/adminlogin' element={<Adminlogin/>}/>
    <Route exact path='/adminsignup' element={<Adminsignup/>}/>
    <Route exact path='/forgotpassword' element={<Forgotpassword/>}/>
  
    </Routes></div>
    <Footer/></div>
    </Router>
      
    </div>
  );
}

export default App;
