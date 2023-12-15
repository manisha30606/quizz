import "./DescStyles.css";
import { Link } from "react-router-dom";

import React from 'react'

const Desc = () => {
  return (
    <>
     <div className = "frontpage" >
       <div className = "container" >
        <h1>Welcome To  QuizGenius</h1>
           <div className = "heading" >
               Instructions
            </div> 
  
         <ul className = "points" >
           <li className="list">
            <p>This Test is Taken for check your IQ level.</p>
            </li>
            <li className="list">
            <p>You are given 1 mintues to solve all the question.</p>
            </li>
            <li className="list">
            <p>This test consists 10 multiple type Questions. Answer all the Questions.</p>
            </li>
            <li className="list">
            <p>Choose the only one  option at a time.</p>
            </li>
            <li className="list">
            <p> Make sure you have a good internet connection.</p>
            </li>
            <li className="list">
            <p>After ending of test your results will be shown.</p>
            </li>
            <li className="list">
            <p>Click the <span>start test</span>  button to start the test and <span>Best Of Luck</span>.</p>
            </li>

         </ul> 
        <div className = "btn" >
         <Link to='/quizz' className='btn1'> Start Test</Link>
 </div>
 </div> 
</div> 
 </>
  )
}

export default Desc;
