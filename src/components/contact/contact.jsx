import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import CSSModules from 'react-css-modules';
import styles from './contact.css';

class Contact extends Component {

	constructor(...args) {
		super(...args)
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			subject: '',
			message: '',
		}

		this.handleInputUpdate = this.handleInputUpdate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputUpdate(e) {
		this.setState({[e.target.id]: e.target.value})
	}

	handleFormSubmit(e) {
		e.preventDefault();
		let email = {
			name: this.state.firstName + " " + this.state.lastName,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message
		}

		$.ajax({
			url: 'https://fairthreads-api.herokuapp.com/contact/contact-us',
			method: 'POST',
			data: email,
		}).done(function() {
			console.log('Success');
		}).fail(function(err) {
			console.log("Error", err);
		})

		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			subject: '',
			message: '',
		})
	}

	render() {

		return (
			<div styleName="contact-container">
				<h1>Contact Us</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec neque nec turpis lobortis mollis non ut magna. Mauris porta, est ut malesuada tempus, erat dolor ullamcorper libero, at gravida mi lorem at nulla.</p>
				<div>
					<form onSubmit={this.handleFormSubmit}>
						<input id='firstName' type="text" placeholder="First name" value={this.state.firstName} onChange={this.handleInputUpdate}/>
						<input id='lastName' type="text" placeholder="Last name" value={this.state.lastName} onChange={this.handleInputUpdate} />
						<input id='email' type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputUpdate} />
						<input id='subject' type="text" placeholder="Subject" value={this.state.subject} onChange={this.handleInputUpdate} />
						<textarea id='message' placeholder="Questions and feedback here" value={this.state.message} onChange={this.handleInputUpdate} />
						<input type="submit" value="Submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default CSSModules(Contact, styles);
