import React,{ useEffect,useState} from "react";
import { Link } from "react-router-dom";
import  Axios  from "axios";

function Feedback()
{
    const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1337/api/feedbackdis').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
    },[]);


return(
    <div>
        <h1 class="heading" align="center"> User<span>Feedback/complain</span> </h1>
        <br/>
        <div class="col-md-12 mb-4">
        <section>
           
        <div class="card shadow mb-4">
                        
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Id</th>
                                            <th class="text-center">Name</th>
                                            <th class="text-center">Email</th>
                                            <th class="text-center">Subject</th>
                                            <th class="text-center">Message</th>
                                            
                                        </tr>
                                    </thead>
                    <tbody>

                    {list.map((val)=>{
                return(  
                    <tr>
                        <td class="text-center"> {val.id}    </td>
                        <td class="text-center"> {val.lname}    </td>
                        <td class="text-center"> {val.lemail}   </td>
                        <td class="text-center"> {val.subject}    </td>
                        <td class="text-center"> {val.msg}    </td>
                    </tr>
                )
            })
            
           }

                    </tbody>
                </table>
                </div> 
               </div>
               </div>
                </section>
                </div>
    </div>
)
}
 export default Feedback;