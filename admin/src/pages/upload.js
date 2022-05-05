import React, {useState} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
 
    function Upload()   {
        
    const [ProAdd,setaddress]=useState('');
    const [Area,setarea]=useState('');
    const [Beds,setbeds]=useState('');
    const [Halls,sethalls]=useState('');
    const [Kitchens,setkitchens]=useState('');
    const [Rent,setrent]=useState('');
    const [ProImage, setimage] = useState(""); 

    const postData = () => {
        console.log(ProImage);
       

    let formData=new FormData();
       
        formData.append("address", ProAdd); 
        formData.append("parea",Area); 
        formData.append("bed",Beds); 
        formData.append("halls",Halls);
        formData.append("kitchens",Kitchens);
        formData.append("prent",Rent);
        formData.append("image",ProImage);

Axios.post('http://localhost:1337/api/up',formData,{headers:{"Content-Type":"multipart/form-data"}}
    
    ).then((response)=>{
        if(response.data.message)
        {
            alert(response.data.message);
            window.location = "/upload" 
        }
        else{
        

alert('Success');
window.location = "/"
        
        }
    });


    } 


    return(
        
<div>

    <div class="login-contect py-2">
        <div class="container py-xl-3 py-1">
            <div class="login-body">
                <div class="login p-4 mx-auto">
                    <h3 class="text-center mb-4">Upload Property</h3>


                        <div class="form-group">
                            <label>Property Address</label>
                            <input type="text" class="form-control"  placeholder="Write Address" required="" 
                            onChange={(e) => setaddress(e.target.value)}/>
                        </div>

                        <div class="form-group">
                            <label>Area Of Property(m²)</label>
                            <input type="text" class="form-control"  placeholder="Area in m²" required=""  onChange={(e) => setarea(e.target.value)}/>
                        </div>

                        <div class="form-group">
                            <label class="mb-2">Beds</label>
                            <input type="int" class="form-control" placeholder="No. of Beds"
                                required=""  onChange={(e) => setbeds(e.target.value)}/>
                        </div>

                        <div class="form-group">
                            <label class="mb-2">Hall</label>
                            <input type="int" class="form-control" placeholder="No. of Halls"
                                required=""  onChange={(e) => sethalls(e.target.value)}/>
                        </div>

                        <div class="form-group">
                            <label class="mb-2">Kitchen</label>
                            <input type="int" class="form-control" placeholder="No. of Kitchens"
                                required=""  onChange={(e) => setkitchens(e.target.value)}/>
                        </div>

                        <div class="form-group">
                            <label class="mb-2">Rent</label>
                            <input type="int" class="form-control" placeholder="Rent of Property in ₹"
                                required=""  onChange={(e) => setrent(e.target.value)}/>
                        </div>
                        
                        <div class="form-group">
                            <label class="mb-2">Image</label>
                            <input type="file" class="form-control"   placeholder="" accept="image/png, image/jpg, image/jpeg"
                                required=""  onChange={(e) => setimage(e.target.files[0])}/>
                        </div>
                        
                        
                        <div class="mt-4" align="center">
                        <button type="submit" class="btn" onClick={postData}>Upload</button>
                        </div>
                        
                    
                </div>
            </div>
        </div>
    </div>
</div>

)
}

export default Upload
