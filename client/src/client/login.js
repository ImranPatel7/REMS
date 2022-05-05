import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Swal from "sweetalert";



function Login() {
	
    const [uemail,setemail]=useState('');
    const [upass,setpassword]=useState('');

	//const [loginstatus,setloginstatus]=useState('');
    var postData = () => {
		
	Axios.post('http://localhost:1337/api/verify',
	{email:uemail,pass:upass }).then((response)=>{
		
		if(response.data.message)
		{
			alert(response.data.message);
			window.location = "/login" 
		}
		else
		{
			let obj={sname:response.data[0].uname,email:uemail}
			localStorage.setItem('mydata',JSON.stringify(obj));
			alert('Welcome '+ response.data[0].uname);
			/*Swal.fire({  
				title: 'Success',  
				type: 'success',  
				text: 'Your work has been saved.',  
				timer: 1000,
			  });  */

			  /*Swal.fire({
				title: "Success",
				text: "Login You are!!!!",
				type: "success",
				button: "OK",
				icon: "success",
				timer: 10000,
			
			} );*/

			window.location = "/" 
		}
//console.log(response);
//alert('Success');*/



	});


    }
return(
	<div>

<div class="py-9">
		<div class="container py-xl-5 py-3">
			<div class="login-body"  >
				<div class="login p-4 mx-auto">
					<br/><br/><br/><br/><br/>
					<h2 class="text-center mb-5">Login Now</h2>
				
									
	
	<table cellspacing="3" align="center" cellpadding="12" border="10">
	
	<tr>
	<td>Enter User mail :</td>
	<td><input name="email" type="email" placeholder="Enter your mail here" data-rule="email" data-msg="Please enter a valid email" id="email" class="tb" 
	onChange = {(e) => setemail(e.target.value)} /></td>
	</tr>
	
	<tr>
	<td>Enter Password :</td>
	<td><input type="password" placeholder="Enter Password here" id="pwd1" class="tb"
	onChange = {(e) => setpassword(e.target.value)} /></td>
	</tr>
	</table>
	
	
	<div class="mt-4" align="center">
    <button type="submit" class="btn btn-b" onClick={postData}>login</button>
	</div>

	
	
	
	<br></br>
	<p class="account-w3ls text-center text-da">Don't have an account?  <Link to="/Signup">Create one now</Link></p>	
	</div>
	</div>
	</div>
	</div>	</div>





);
}

export default Login;