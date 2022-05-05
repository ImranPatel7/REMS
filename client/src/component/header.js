import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';

function Header()
{
  let user=JSON.parse(localStorage.getItem('mydata'));
  
  function logout()
{
    localStorage.clear();
    window.location = "/" 
}
const [money,setMoney]=useState();
const postData=() => {

console.log(money);

}


    return(
        <div>           
         <div class="click-closed"></div>
    <div class="box-collapse">
    <div class="title-box-d">
      <h3 class="title-d">Search Property</h3>
    </div>
    <span class="close-box-collapse right-boxed ion-ios-close"></span>
    <div class="box-collapse-wrap form">
     
        <div class="row">
          <div class="col-md-12 mb-2">
            <div class="form-group">
              <label for="Type">Keyword</label>
              <input type="text" class="form-control form-control-lg form-control-a" placeholder="Keyword"/>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="Type">Type</label>
              <select class="form-control form-control-lg form-control-a" id="Type">
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="city">City</label>
              <select class="form-control form-control-lg form-control-a" id="city">
                <option>All City</option>
                <option>Bharuch</option>
                <option>Surat</option>
                <option>Vadodara</option>
                <option>Ahmedabad</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="bedrooms">Bedrooms</label>
              <select class="form-control form-control-lg form-control-a" id="bedrooms">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="Halls">Hall</label>
              <select class="form-control form-control-lg form-control-a" id="halls">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="kitchens">Kitchen</label>
              <select class="form-control form-control-lg form-control-a" id="kitchens">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="price">Min Price</label>
              <select class="form-control form-control-lg form-control-a" id="price"  onChange={(e) => setMoney(e.target.value)}>
                <option>Unlimite</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000</option>
              </select>
            </div>
          </div>
          <div class="col-md-12" align="center">
            <button type="submit" class="btn btn-b"  onClick={postData}>Search Property</button>
          </div>
        </div>
     
     
    </div>
    </div>
 
  
  
  <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div class="container">
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a class="navbar-brand text-brand" href="index.html">Estate<span class="color-b">Agency</span></a>
      <button type="button" class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
        data-target="#navbarTogglerDemo01" aria-expanded="false">
        <span class="fa fa-search" aria-hidden="true"></span>
      </button>
      <div class="navbar-collapse collapse justify-content-center" id="navbarDefault" style={{width:"100%"}}>
        <ul class="navbar-nav" >
          

          <li class="nav-item">
          {/*<Link class="nav-link" to="/">Home</Link> */}
          <Link class="nav-link" to="" onClick={() => {window.location.href="/"}}>Home</Link>
          </li>

          <li class="nav-item">
          <Link class="nav-link" to="/About">AboutUs</Link>
          </li>

          <li class="nav-item">
            <Link to="/property" class="nav-link">Properties</Link>
          </li>
          {/*<li class="nav-item">
            <Link to="/payment" class="nav-link" href="property-grid.html">Payment</Link>
            </li> 
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Pages
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="property-single.html">1</a>
              <a class="dropdown-item" href="blog-single.html">2</a>
              <a class="dropdown-item" href="agents-grid.html">3</a>
              <a class="dropdown-item" href="agent-single.html">4</a>
            </div>
          </li> */}

          <li class="nav-item">
            <Link class="nav-link" to="/Contact">ContactUs</Link>
          </li>
          
          {/*<li class="nav-item">
            <Link class="nav-link" to="/Upload">Upload</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/Display">Display</Link>
            </li>*/}

          
          {
            localStorage.getItem("mydata") == null?
            <>
          <li class="nav-item">
          <Link class="nav-link" to="/Login">Login</Link>
          </li>

         
          </>
          :
          <>
          

         

          <li class="nav-item">
            <a type=""  class="nav-link active" >Welcome {user && user.sname}</a>
          </li>


                   
          <li class="nav-item">
          <button type="submit" class="nav-link btn"  onClick={logout}>logout</button>
          </li>

         



          {/*<div class="col-md-12">
          <li class="nav-item">
          <h3>{user && user.sname}</h3>
          </li>
          </div>*/}
        
          </>
          }



{/*

          <li class="nav-item">
         
          {
            localStorage.getItem("mydata") == null?
            <>
            <Link class="nav-link" to="/Login">Login</Link>
            </>
            :
            <>
          

            <button type="submit" class="nav-link btn" onClick={logout}>logout</button>
          
         <h6>hkhkh</h6>
            </>
          }
         
          </li>
        */}
          
        </ul>
      </div>
      <button type="button" class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse"
        data-target="#navbarTogglerDemo01" aria-expanded="false">
        <span class="fa fa-search" aria-hidden="true"></span>
      </button> 


      

      
    </div>

    
   
  </nav>
 
  </div> 
        
        
        );
}

export default Header;