import React, { Component } from 'react';


class Everything extends Component {
	render(){ 

			console.log('here', this.props)

		return(
			<div className="container">
				<ul className="question">{this.props.quiz.question}>
				    <li>{this.props.quiz.a} </li>
				    <li>{this.props.quiz.b} </li>
				    <li>{this.props.quiz.c} </li>
                </ul>
			</div>
			)
	}
}


	// console.log(this.props.quiz)

		// return(
			
			
		// <div>
		// 		<div>{this.props.questionsNanswers}</div>
		// 		<div>{this.props.quiz}</div>

		// </div>
			

		// )
	

export default Everything;