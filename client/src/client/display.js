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
        <div></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <table>
            {list.map((val)=>{
                return(  
                    <tr>
                        <td> {val.id}    </td>
                        <td> {val.uname}    </td>
                        <td> {val.uemail}   </td>
                        <td> {val.upass}    </td>
                    </tr>
                )
            })
            
           }
        </table>
    </div>
)
}
 export default Display;