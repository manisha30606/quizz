
// Score.js
 
import React, { Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'
 
class Score extends Component {
 checkGrade = () => {
  const { score } = this.props;
  let grade = '';

  if (score !== null) {
    if (score >= 0 && score <= 6) {
      grade = 'C';
    } else if (score > 6 && score < 10) {
      grade = 'B';
    } else if (score >= 10) {
      grade = 'A';
    }
  }

  return grade;
};

    render() {
     
        const { score, onNextQuestion  } = this.props;
        const grade = this.checkGrade();
        
        return (
            <>
            <div className='result'>
                <h2> Your Result</h2>
               
                <h4>Your score is {score} out of 10.</h4>

                <h2> Your Grade</h2>
               
               <h4>Your score is {grade} .</h4>
            </div>

<div className = "btn" >
<Link to='/' className='btn1'> Go Back</Link>
</div>

</>
        );
    }
}
 
export default Score;