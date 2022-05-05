import React,{ useEffect,useState} from "react";
import { Link } from "react-router-dom";
import  Axios  from "axios";

function Display()
{
    const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1337/api/dis').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
    },[]);


return(
    <div>
        <h1 class="heading" align="center"> User<span>Details</span> </h1>
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
                                            <th class="text-center">Password</th>
                                            
                                        </tr>
                                    </thead>
                    <tbody>

                    {list.map((val)=>{
                return(  
                    <tr>
                        <td class="text-center"> {val.id}    </td>
                        <td class="text-center"> {val.uname}    </td>
                        <td class="text-center"> {val.uemail}   </td>
                        <td class="text-center"> {val.upass}    </td>
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
 export default Display;