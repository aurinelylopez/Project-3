import React, { Component } from 'react';
import Qna from './QNA';
import axios from 'axios';


class Everything extends Component {
	render(){
			// console.log(this.props.quiz)

		return(
			
			
		<div>
				<div>{this.props.questionsNanswers}</div>
				<div>{this.props.quiz}</div>
				<script>axios.get("http://localhost:2000/")
    					.then((res) =>(
       						console.log(res) )
				</script>

		</div>
			
			
		)
	}
}

export default Everything;