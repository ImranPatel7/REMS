import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Home from './client/home';
import Login from './client/login';
import Signup from './client/signup';
import Signupcopy from './client/signupcopy';
import Property from './client/property';
import Contact from './client/contact';
import About from './client/about';
import Display from './client/display';
import Details from './client/details';
import Amenities from './client/amenities';
import Agent1 from './client/agent1';
import Agent2 from './client/agent2';
import Agent3 from './client/agent3';
import Payment from './client/payment';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';




function App() {
  return (
    <div>
        <Router>
<Header/>
<Routes>

<Route exact path='/' element={<Home/>} />
<Route exact path='/Login' element={<Login/>} />
<Route exact path='/Signup' element={<Signup/>} />
<Route exact path='/Signupcopy' element={<Signupcopy/>} />
<Route exact path='/Property' element={<Property/>} />
<Route exact path='/Contact' element={<Contact/>} />
<Route exact path='/About' element={<About/>} />
<Route exact path='/Display' element={<Display/>} />
<Route exact path='/Details' element={<Details/>} />
<Route exact path='/Amenities' element={<Amenities/>} />
<Route exact path='/Payment' element={<Payment/>} />
<Route exact path='/Agent1' element={<Agent1/>} />
<Route exact path='/Agent2' element={<Agent2/>} />
<Route exact path='/Agent3' element={<Agent3/>} />


</Routes>
<Footer/>

</Router>
    </div>
  );
}

export default App;
