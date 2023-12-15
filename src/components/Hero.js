import React from 'react';
import "./HomeStyles.css";
import { Link } from "react-router-dom";
import pic from "../img/bg2.png";

export const Hero = () => {
    return (
      <>

      
<div className = "frontpage" >
       <div className = "container" >
           <div className = "heading" >
           QuizGenius
            </div> 
        <div className = "imgbx" >
           <img src = { pic } alt = ""srcset = ""/>
        </div> 
         <div className = "para" >
            <p > QuizGenius: Unleash Your Inner Genius with Interactive Quizzes!</p>
         </div> 
        <div className = "btn" >
         <Link to='/description' className='btn1'> Start </Link>
 </div>
 </div> 
</div> 
      </>
    )
}

export default Hero;