
// Question.js
 
import React, {Component} from "react";
import Options from "./Option";
import Score from "./Score";
 import "./TestStyles.css";
 
class Question extends Component{
    render() {
        const {question, selectedOption, onOptionChange, onSubmit} = this.props;
 
        return(
            <div className="question">
                <h3>Question {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit}>
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                      
                    />
                    <div className = "btn" >
                        <button  className='btn1' > Submit </button>
                    </div>
                </form>
                 
            </div>
        )
    }
}

export default Question;
 