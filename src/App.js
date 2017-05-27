import React, { Component } from 'react';
import './App.css';
import BaoQuestion from './components/BaoQuestion';
//component that will render question
import quizTime from './api/quizTime';
//api component containing the questions
import Baoscore from './components/Baoscore';
//component containing quiz score
import answerChoices from './components/answerchoices';
//component created to render multiple choices
import Test from './components/Test.jsx';
<<<<<<< HEAD
import Everything from './components/Everything';
import QNA from './components/QNA';
import {
  BrowserRouter as Router,
  Route, 
  Link,
  NavLink,
} from 'react-router-dom';

let Home = () => { return <div>Home wya</div>} /*2 routes '/', n '/home'*/

let About = () => { return <div>Aboutus</div>} /*when u click this pops up*/

let Contacts = () => { return <div>Contacts us</div>}
/* is Error a reserved word in react */
let Errors = () => { return <div>Welcome to Mars👽👹</div>}

let Nav = () => {
  return (<ul id="target">
          <li id="home"><NavLink to="/" className="wh">Homeskillet</NavLink></li>
          </ul>)
}














=======
//component created for actual test div
import axios from 'axios';
>>>>>>> eb1b7f23e1423c25403e282ab728535976d77862

class App extends Component {
//extending component class
 constructor(props) {
    super(props);
//calling parent component

    this.state = {
      counter: 0,
//counter set to zero at beginning of game
      baoQuestionId: 1,
//question set to 1 at beginning of the game
      baoQuestion: '',
//question content
      answerOptions: [],
//array with multiple choice options
      answer: '',
//actual answer content
      Baoscore: {
//keeping count
        User: 0,
//user score set to zero at beginning of the game
      },
      result: ''

    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
//will bind answers to this
  }

  componentWillMount() {
//initial lifecycle method called before initial render
    const shuffledAnswerChoices = quizTime.map((question) => this.shuffleArray(question.answers));
//will shuffle questions and answers..    
    this.setState({
      question: quizTime[0].question,
//
      answerChoices: shuffledAnswerChoices[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleThisAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.baoQuestionId < quizTime.length) {
        setTimeout(() => this.setNextQuestion(), 200);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 200);
    }
  }

  setThisUserAnswer(answer) {
    {/*const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });*/}
  }

  setThisToNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        BaoScore: BaoScore,
        BaoQuestionId: BaoQuestionId,
        BaoQuestion: quizTime[counter].BaoQuestion,
        answerChoices: quizTime[counter].answers,
        answer: ''
    });
  }

  getTheseScores() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderTest() {
    return (
      <Test
        answer={this.state.answer}
        answerchoices={this.state.answerChoices}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.answerChoices.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      {/*<Result testResult={this.state.result} />*/}
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
         <div className="App-header">
          <h2>BAO BAO BAO</h2>
          </div>{this.state.result ? this.renderResult() : this.renderTest()}
          <Everything />
          <QNA />
          <Link to="/home" className="target">Homework</Link>&nbsp;&nbsp;
          <Link to="/about">About</Link>&nbsp;&nbsp;
          <Link to="/contacts">Contacts</Link>&nbsp;&nbsp;

          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contacts" component={Contacts}/>
        {/*  <Route component={Errors}/>*/}
        </div>
      </Router>
      
    );
  }

}

export default App;
