import React, { Component } from 'react';
import QNA from './components/QNA';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import Baoquestion from './components/Baoquestion';
import quiztime from './api/quiztime';
import Baoscore from './components/Baoscore';
import answerChoices from './components/answerchoices';
import Test from './components/Test';
import Post from './components/Post'
import Everything from './components/Everything';
let Create = () => {return <div>Create compoment for axios.post</div>}
let Quiz = () => {return <div><QNA /></div>}
let Home = () => {return <div>Home what ya want the front page to look like</div>}
let About = () => {return <div>About/Result page about can go on home</div>}
let contacts = () => {return <div>Contact</div>}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      ansCounter: {
        User: 0,

      },
      result: ''
    };

    this.handleThisAnswerSelected = this.handleThisAnswerSelected.bind(this);
  }

  componentWillMount() {
    let randomAnswerChoices = quiztime.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quiztime[0].question,
      answerChoices: randomAnswerChoices[0]
    });
  }

  randomArray(array) {
    let tempIndex = array.length, tempVal, shuffledIndex;

    // While there remain elements to shuffle...
    while (0 !== tempIndex) {

      // Pick a remaining element...
      shuffledIndex = Math.floor(Math.random() * tempIndex);
      tempIndex -= 1;

      // And swap it with the current element.
      tempVal = array[tempIndex];
      array[tempIndex] = array[shuffledIndex];
      array[shuffledIndex] = tempVal;
    }

    return array;
  };

  handleThisAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quiztime.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    {/*const updatedAnswersCount = update(this.state.ansCounter, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
        ansCounter: updatedAnswersCount,
        answer: answer
    });*/}
  }

  setThisNextQuestion() {
    let counter = this.state.counter + 1;
    let questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quiztime[counter].question,
        answerOptions: quiztime[counter].answers,
        answer: ''
    });
  }

  getTheseResults() {
    let ansCounter = this.state.ansCounter;
    let ansCountKeys = Object.keys(ansCounter);
    let ansCountVal = ansCountKeys.map((key) => ansCounter[key]);
    let maxAnswerCount = Math.max.apply(null, ansCountVal);

    return ansCountKeys.filter((key) => ansCounter[key] === maxAnswerCount);
  }

  setTheseResults(result) {
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
        onAnswerSelected={this.handleThisAnswerSelected}
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
          </div> {this.renderTest()}
         {/* <QNA />*/}
        {/* <One2 />*/}
        <Post/>
         <ul>
          <li className="home"><Link to="/">Home</Link></li>&nbsp;&nbsp;
          <li className="about"><Link to="/about">About/Result</Link></li>&nbsp;&nbsp;
          <li className="quiz"><Link to="/quiz">Quiz</Link></li>&nbsp;&nbsp;
          <li className="create"><Link to="/create">Create</Link></li>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/quiz" component={Quiz}></Route>
          <Route path="/create" component={Create}></Route>
         </ul>
       </div>
      </Router>
      
    );
  }
}
export default App;
