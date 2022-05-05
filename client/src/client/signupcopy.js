import React, {useState} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

 /*class register extends React.Component{
    render() */
     function Signupcopy()   {
	
	const [formErrors, setFormErrors] = useState({});
	const [uname,setname]=useState('');
    const [uemail,setemail]=useState('');
	const [upass,setpassword]=useState('');
	

	const valid=()=>
	{
	const errors = {};
	const regex=/^[a-zA-Z]+$/;
	if(uname=="" || !regex.test(uname))
	{
	errors.user="Enter Your Name";
	}
	
	if(!uemail.includes("@") || uemail=="" )
	{
	errors.uemail="@ Missing ";
	}
	
	if(upass=="")
	{
	errors.password="Enter Passsword";
	}

	return errors;
	};

	const postData = () => {
		if(setFormErrors(valid())){
					
	   {/*let formData=new FormData();
	   //formData.append("file", file);
		formData.append("uname",setname); 
		formData.append("uemail",setemail); 
		formData.append("upass",setpassword); 
	
    const postData = () => {*/}
        console.log(uname);
       	console.log(uemail);
		console.log(upass);

		{/*Axios.post('http://localhost:1337/api/insert',formData,
		{headers:{"Content-Type":"multipart/form-data"}}
			//{sname:sname,email:email,pass:password }
			).then((response)=>{*/}
		   
Axios.post('http://localhost:1337/api/insert', 
			{name:uname,email:uemail,pass:upass }).then((response)=>{
		
		if(response.data.message)
		{
			alert(response.data.message);
			window.location = "/signup///" 
		}
		else{
		console.log(response);
		alert('Success');
		window.location = "/"
		}

	});
	}

    
    return(
    <div>

	<div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body" align="center">
				<div class="login p-4 mx-auto">
					<br/><br/><br/>
					<h2 class="text-center mb-4">Register Now</h2>



	<table cellspacing="3" align="center" cellpadding="12" border="0">

	<tr>
	<td>Enter your Name :</td>
	<td><input type="text" class="form-control" placeholder="Your Name" data-rule="username"  data-msg="Enter your name" required="" 
	onChange={(e) => setname(e.target.value)}/></td>
	<p style={{color:"red",fontSize:"14px"}}>{formErrors.user}</p>
	</tr>
	
	<tr>
	<td>Enter User Email :</td>
	<td><input  name="email" type="email" class="form-control"  placeholder="Email Address" data-rule="email" data-msg="Please enter a valid email"  
	onChange={(e) => setemail(e.target.value)}/></td>
	<p style={{color:"red",fontSize:"14px"}}>{formErrors.uemail}</p>
	</tr>
	
	<tr>
	<td>Enter Password :</td>
	<td><input type="password" class="form-control"  id="password1" placeholder="Password" data-rule="password" data-msg="Please enter password"  
	onChange={(e) => setpassword(e.target.value)}/></td>
	<p style={{color:"red",fontSize:"14px"}}>{formErrors.password}</p>
	</tr>
	</table>
				
						
						
						
						
						<div class="mt-4" align="center">
						<button type="submit" class="btn btn-b" onClick={postData}>Register</button>
						</div>
						<br/><br/>
						<p class="account-w3ls text-center text-da">Already Registered...  <Link to="/Login">Login now</Link></p>
					
				</div>
			</div>
		</div>
	</div>

        </div>

);
}
	}	
//}
export default Signupcopy;



