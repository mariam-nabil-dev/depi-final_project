import React, { Component } from 'react';
import './Aboutfirst.css';
class Aboutfirst extends Component{
state ={}
render(){
    return(
        <React.Fragment>
            
<div class="container">
  <div class="aboutcontainer position-relative">
   <div class="imgcontainer">
      <img  width="1300"  height="300" src="https://www.ul7travel.com/wp-content/uploads/2018/09/single-post-1-img-2-1.jpg" className="attachment-full size-full" alt="a" srcset="https://www.ul7travel.com/wp-content/uploads/2018/09/single-post-1-img-2-1.jpg 1300w, https://www.ul7travel.com/wp-content/uploads/2018/09/single-post-1-img-2-1-300x156.jpg 300w, https://www.ul7travel.com/wp-content/uploads/2018/09/single-post-1-img-2-1-1024x534.jpg 1024w, https://www.ul7travel.com/wp-content/uploads/2018/09/single-post-1-img-2-1-768x401.jpg 768w, https://www.ul7travel.com/wp-content/uploads/2018/09/single-post-1-img-2-1-600x313.jpg 600w" sizes="(max-width: 1300px) 100vw, 1300px"/>	
   </div>
   <h2 class="position-absolute top-50 start-50 translate-middle text-white fw-normal fs-1">About</h2>
   </div>
   

  

  <div class="firstsection flex-row p-2 m-0 d-flex align-items-center">
      
      <div class="rsection col-6 d-flex flex-column justify-content-center">
         <div class="title">Hi!Im Melissa</div><div>  Lets go travel</div>
         <p>Lorem Ipsum Nam nec tellus a odio tincidunt auctor. Proin gravida nibh vel velit auctor aliquet. Bendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
         <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor Class aptent taciti sociosqu ad litora torquen ? 😎</p>
         <p>Want to know more? Read our<a href="#" >Most asked questions.</a></p>
        <div class="links d-flex gap-3">
           <a href="http://www.facebook.com"><img class="rounded-circle" style="width: 50px; height: 50px" src="assets/facebook-logo.png"/></a>
           <a href="https://www.pinterest.com/"><img class="rounded-circle" style="width: 50px; height: 50px" src="assets/paintrest.png"/></a>
           <a href="https://www.twitter.com/"><img class="rounded-circle" style="width: 50px; height: 50px" src="assets/twitter.png"/></a>
        </div>
     </div>

     <div class="lsection col-6  flex-column" >
        
       <div class="border border-dark border-opacity-50">
          <img class="img-fluid rounded zoomin  p-4" src="assets/travel.jpg" alt=""/>
        </div>

        <div class="d-flex p-2">
         <img class="p-2"src="assets/about-icon-1.png"/>
         <p class="p-2">Morbi accumsan ipsum velit. nam nec tellus a odio tincidunt auctor a ornare odio.</p>
       </div>
    </div>
 </div>


</div>

        </React.Fragment>


    );
}
}
export default Aboutfirst;