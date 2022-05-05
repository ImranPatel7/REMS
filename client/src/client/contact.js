import React, {useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function Contact() 
{
  var required = true;
  var disabled = false;
  const [cname,setname]=useState('');
  const [cemail,setemail]=useState('');
  const [csubject,setsubject]=useState('');
  const [cmsg,setmsg]=useState('');

  const postData = () => {
    

    Axios.post('http://localhost:1337/api/contact',{cusname:cname,cusemail:cemail,cussub:csubject,cusmsg:cmsg}
    
    ).then((response)=>{
        if(response.data.message)
        {
            alert(response.data.message);
            window.location = "/contact" 
        }
        else{
        

alert('Success');
window.location = "/"
        
        }
    });


    } 


  return(

<div>

<section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">Contact US</h1>
            <span class="color-text-a">Any Feedback or suggestions</span>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
              <Link to ="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>

<section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="contact-map box">
            <div id="map" class="contact-map">
              {/*<iframe src={"https://www.google.com/maps/place/Enlighten+Infosystems/@22.3101757,73.1741936,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNtruzwvhYrdhcCP_uZTP9dDVo8ObFvrANk-hQi!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNtruzwvhYrdhcCP_uZTP9dDVo8ObFvrANk-hQi%3Dw114-h86-k-no!7i832!8i624!4m5!3m4!1s0x395fc9a8431cd085:0x7de25899a4132ad4!8m2!3d22.3101879!4d73.1740962?hl=en-US"}
               style={{width:"100%",height:"450px", frameborder:"0",border:"0"}} allowfullscreen ></iframe>*/}
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1494251587187!2d73.17190751744384!3d22.31018790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9a8431cd085%3A0x7de25899a4132ad4!2sEnlighten%20Infosystems!5e0!3m2!1sen!2sve!4v1648019472960!5m2!1sen!2sve" 
               style={{width:"100%",height:"450px", frameborder:"0",border:"0"}} allowfullscreen ></iframe>
            </div>
          </div>
    </div>
        <div class="col-sm-12 section-t8">
          <div class="row">
            <div class="col-md-7">
             
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input type="text"  class="form-control form-control-lg form-control-a" placeholder="Your Name"  required={required}
                       onChange={(e) => setname(e.target.value)} />

                  
                    
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <input name="email" type="email" class="form-control form-control-lg form-control-a" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                       onChange={(e) => setemail(e.target.value)} />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <input type="text" name="subject" class="form-control form-control-lg form-control-a" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"
                       onChange={(e) => setsubject(e.target.value)} />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <textarea name="message" class="form-control" name="message" cols="45" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message" 
                       onChange={(e) => setmsg(e.target.value)}></textarea>
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button type="submit"  class="btn btn-a" onClick={postData}>Send Message</button>
                  </div>
                </div>
             
            </div>
            <div class="col-md-5 section-md-t3">
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-paper-plane"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Say Hello</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">Email.
                      <span class="color-a">contact@example.com</span>
                    </p>
                    <p class="mb-1">Phone.
                      <span class="color-a">+91 356 945234</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="icon-box section-b2">
                <div class="icon-box-icon">
                  <span class="ion-ios-pin"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Find us in</h4>
                  </div>
                  <div class="icon-box-content">
                    <p class="mb-1">
                      Bharuch,
                      <br/> Vadodara.
                    </p>
                  </div>
                </div>
              </div>
              <div class="icon-box">
                <div class="icon-box-icon">
                  <span class="ion-ios-redo"></span>
                </div>
                <div class="icon-box-content table-cell">
                  <div class="icon-box-title">
                    <h4 class="icon-title">Social networks</h4>
                  </div>
                  <div class="icon-box-content">
                    <div class="socials-footer">
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
    </div>

    );
}

export default Contact;