import React, { Component } from 'react';
import axios from 'axios';


class Everything extends Component {
        constructor(props) {
            super(props);
            this.state = {
                Toggle: true,
                quiz_id : []
            };
            this.handleEdit = this.handleEdit.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
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
        // handleDelete(){
        // let id =
        // axios.delete("https://afternoon-journey-45420.herokuapp.com" + id)
        // $(this).parent().remove();
        // location.reload();
        //     }            
        handleSubmit(){
            this.setState(prevState => ({
                Toggle: !prevState.Toggle
            }))
        }
	render(){ 

			console.log('here', this.props)
           if(this.state.Toggle) {
		return(
			<div className="container">
				<ul className="question">{this.props.quiz.question}
				    <li>{this.props.quiz.a} </li>
				    <li>{this.props.quiz.b} </li>
				    <li>{this.props.quiz.c} </li>
                </ul>
                <button className="edit" onClick={this.handleEdit}>Edit</button>
                <button className="delete" onClick={this.handleDelete}>Delete</button>
			</div>
			)
           } 
	else {
        return ( 
            <div>
                <h3 className="question">{this.props.quiz.question}</h3>
                <input defaultValue={this.props.quiz.a} />
                <input defaultValue={this.props.quiz.b} />
                <input defaultValue={this.props.quiz.c} />
                <button className="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
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