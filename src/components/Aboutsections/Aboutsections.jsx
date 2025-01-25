import React, {Component}  from 'react';
import './Aboutsections.css';




const Aboutsections = () => {
   return <div class="container">

   <div class="firstsection p-2 m-auto d-flex">
       <div class="lsection w-50 me-4 ">
         <img class="img-fluid h-100" src="assets/1733808183235.jpg" alt=""/>
       </div>
       <div class="rsection w-50 d-flex flex-column justify-content-center p-2">
          <div class="title">How does Reddit work?</div>
          <p>Every day, millions of people around the world post, vote, and comment in communities organized around their interests.</p>
          <button  class="secbtn rounded-pill">Visit redit</button>
       </div>
   </div>
 
   <div class="secondsection flex-row-reverse p-2 m-auto d-flex align-items-center">
       <div class="lsection w-50 me-4">
          <img class="img-fluid rounded" src="assets/1733808183235.jpg" alt=""/>
       </div>
       <div class="rsection w-75 d-flex flex-column justify-content-center">
          <div class="title">Post</div>
          <p>The community can share content by posting stories, links, images, and videos.</p>
       </div>
   </div>
   <div class="secondsection  p-2 m-auto d-flex align-items-center">
       <div class="lsection w-50 me-4">
          <img class="img-fluid rounded" src="assets/1733808183235.jpg" alt=""/>
       </div>
       <div class="rsection w-75 d-flex flex-column justify-content-center">
          <div class="title">Post</div>
          <p>The community can share content by posting stories, links, images, and videos.</p>
       </div>
   </div>
 
   
 
   <div class="secondsection flex-row-reverse p-2 m-auto d-flex align-items-center">
       <div class="lsection w-50 me-4">
          <img class="img-fluid rounded" src="assets/1733808183235.jpg" alt=""/>
       </div>
       <div class="rsection w-75 d-flex flex-column justify-content-center">
          <div class="title">Post</div>
          <p>The community can share content by posting stories, links, images, and videos.</p>
       </div>
   </div>
 
 
 </div>;
 };
 
 export default Aboutsections;

