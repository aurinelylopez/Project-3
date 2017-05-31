import React, { Component } from 'react';


class Everything extends Component {
        constructor(props) {
            super(props);
            this.state = {
                Toggle: true
            };
            this.handleEdit = this.handleEdit.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
        }
        handleEdit(){
            this.setState(prevState => ({
                Toggle: !prevState.Toggle
            }))
        }
        handleDelete(){
            this.setState(prevState => ({
                Toggle: !prevState.Toggle
            }))
        }
	render(){ 

			console.log('here', this.props)

		return(
			<div className="container">
				<ul className="question">{this.props.quiz.question}>
				    <li>{this.props.quiz.a} </li>
				    <li>{this.props.quiz.b} </li>
				    <li>{this.props.quiz.c} </li>
                </ul>
                <button className="edit" onClick={this.handleEdit}>Edit</button>
                <button className="delete" onClick={this.handleDelete}>Delete</button>
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