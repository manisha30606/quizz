import React, { Component } from 'react';
import "./TestStyles.css";
import Question from "../components/Question";
import Qbank from "../components/Qbank";
import Score from "../components/Score";
// import Timer from "../components/Timer";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: Qbank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
      timer : 60,
      countdown : 0,
 

     
    };
    this.countdown = null;
  }


  componentDidMount() {
    this.handleTime(); // Start the timer when the component is mounted
  }


  handleTime = () => {
    const { timer, quizEnd } = this.state;
    this.countdown = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.timer > 0) {
          const minutes = Math.floor(prevState.timer / 60);
          const seconds = prevState.timer % 60;
          return { timer: prevState.timer - 1, minutes, seconds };
        } else {
          clearInterval(this.countdown);
          alert('Your Time is up');
          return { quizEnd: true };
        }
      });
    }, 1000);
  };
  
  
  
  // Option change
  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  // Submit
  handleFormSubmit = (e) => {

    const{selectedOption} = this.state;
    if(selectedOption == ""){
    alert("Select any option");
    }
    else{

    this.handleNextQuestion();
    }
    e.preventDefault();
    this.checkAnswer();
  };

  // Check answer
  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, score } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  //grade
 
  
  // Next question
  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      clearInterval(this.countdown);
      this.setState({ quizEnd: true });
    }
  };
  
  

  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd ,timer,minutes, seconds} = this.state;

    return (
      <>
        <div className="frontpage">
          <div className="container">
            <h1>QuizGenius</h1>
            <h4>Time Left: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
            {!quizEnd ? (
              <>
                {/* <Timer /> */}
                <Question
                  question={questionBank[currentQuestion]}
                  selectedOption={selectedOption}
                  onOptionChange={this.handleOptionChange}
                  onSubmit={this.handleFormSubmit}
                  isQuizEnd={quizEnd} // Pass the isQuizEnd state as a prop to Question
                />
              </>
            ) : (
              <Score
                score={score}
                onNextQuestion={this.handleNextQuestion}
                className="score"
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Test;
