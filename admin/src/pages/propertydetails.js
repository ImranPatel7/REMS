import React,{ useEffect,useState} from "react";
import { Link } from "react-router-dom";
import  Axios  from "axios";

function PropertyDetails()
{
    const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1337/api/prodis').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
    },[]);


return(
    <div>
        <h1 class="heading" align="center"> Property<span>Details</span> </h1>
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
                                            <th class="text-center">Address</th>
                                            <th class="text-center">Area(m²)</th>
                                            <th class="text-center">Bedrooms</th>
                                            <th class="text-center">Halls</th>
                                            <th class="text-center">Kitchens</th>
                                            <th class="text-center">Rent</th>
                                            <th class="text-center">Image</th>
                                            
                                        </tr>
                                    </thead>
                    <tbody>

                    {list.map((val)=>{
                return(  
                    <tr>
                        <td class="text-center"> {val.P_id}</td>
                        <td class="text-center"> {val.proadd}</td>
                        <td class="text-center"> {val.area}</td>
                        <td class="text-center"> {val.beds}</td>
                        <td class="text-center"> {val.hall}</td>
                        <td class="text-center"> {val.kitchen}</td>
                        <td class="text-center"> {val.rent}</td>
                        <td class="text-center"> {val.img}</td>
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
 export default PropertyDetails;