import React, {useState,useEffect} from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Amenities(){
  const [ProAdd,setproperty]=useState('');
    const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1337/api/property_fetch').then((response)=>{
        // console.log(response.data);
        setlist(response.data);

        });
    
    },[]);



const postData = () => {

alert(ProAdd);


    }
return(


  <div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body" align="center">
				<div class="login p-4 mx-auto">

          <br/><br/><br/>
					<h2 class="text-center mb-4">Amenities</h2>


          <table cellspacing="3" align="center" cellpadding="9" border="0">

          <tr>
          <td>Select Property :</td>
          <td><select  onChange={(e) => setproperty(e.target.value)}>{list.map((val)=>{
              return(
              <option val={"val.P_id"}>{val.proadd} </option>
              )})}
              </select>
          </td>
          </tr>

          <tr>
          <td>Select Amenities :</td>

          <td>Balcony
          <input type="checkbox"></input></td>
          <td>Parking
          <input type="checkbox"></input></td>
          <td>CableTV 
          <input type="checkbox"></input></td>
          <td>Internet 
          <input type="checkbox"></input></td>
          <td>Garden 
          <input type="checkbox"></input></td>
          <td>Store Room 
          <input type="checkbox"></input></td>
          <td>Fitness Facility 
          <input type="checkbox"></input></td>
          <td>Play Area
          <input type="checkbox"></input></td>
          <td>Security
          <input type="checkbox"></input></td>

          </tr>
          </table>



</div>
</div>
</div>
</div>

  
  
);

}
export default Amenities;

























				
						{/*<div class="form-group" align="left">
							<label>Select Property</label>
              <br/>
              <select  onChange={(e) => setproperty(e.target.value)}>{list.map((val)=>{
              return(
              <option val={"val.P_id"}>{val.proadd} </option>
              )})}
              </select>
            </div>


              <div class="form-group" align="left">
							<label>Select Amenities</label>

<div>
<label>Balcony</label>
<input type="checkbox" onChange={(e) => setbal(e.target.value)}></input>
</div>

<div>
<label>Parking</label>
<input type="checkbox"  onChange={(e) => setpark(e.target.value)}></input>
</div>

<div>
<label>CableTV</label>
<input type="checkbox"></input>
</div>

<div>
<label>Internet</label>
<input type="checkbox"></input>
</div>

<div>
<label>Garden</label>
<input type="checkbox"></input>
</div>

<div>
<label>Store Room</label>
<input type="checkbox"></input>
</div>

<div>
<label>Fitness Facility</label>
<input type="checkbox"></input>
</div>

<div>
<label>Play Area</label>
<input type="checkbox"></input>
</div>

<div>
<label>Security</label>
<input type="checkbox"></input>
</div>


              <button type="submit" class="btn submit mb-4" class="text-center mb-4" onClick={postData}>Upload</button> */}


					



































  {/*<div>
<section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">Amenities</h1>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
              <Link to="" onClick={() => {window.location.href="/"}}>Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Amenities
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>



<section>
<div>
<label>Select Property</label>
</div>
<select  onChange={(e) => setproperty(e.target.value)}>
{list.map((val)=>{
return(
<option val={"val.P_id"}>{val.proadd} </option>
)})}
</select>
</section>


<br/><br/><br/><br/>

<div>
<label>Select Amenities</label>
</div>
<div>
<label>Balcony</label>
<input type="checkbox" onChange={(e) => setbal(e.target.value)}></input>
</div>

<div>
<label>Parking</label>
<input type="checkbox"  onChange={(e) => setpark(e.target.value)}></input>
</div>

<div>
<label>CableTV</label>
<input type="checkbox"></input>
</div>

<div>
<label>Internet</label>
<input type="checkbox"></input>
</div>

<div>
<label>Garden</label>
<input type="checkbox"></input>
</div>

<div>
<label>Store Room</label>
<input type="checkbox"></input>
</div>

<div>
<label>Fitness Facility</label>
<input type="checkbox"></input>
</div>

<div>
<label>Play Area</label>
<input type="checkbox"></input>
</div>

<div>
<label>Security</label>
<input type="checkbox"></input>
</div>


<button type="submit" class="btn submit mb-4" class="text-center mb-4" onClick={postData}>Upload</button>*/}



