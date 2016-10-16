import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import CSSModules from 'react-css-modules';
import styles from './contact.css';

class Contact extends Component {

	constructor(...args) {
		super(...args)
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			error: false,
		}

		this.handleInputUpdate = this.handleInputUpdate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.sendEmail = this.sendEmail.bind(this);
	}

	handleInputUpdate(e) {
		this.setState({[e.target.id]: e.target.value})
	}

	errorValidation(sendEmail) {
		for (var key in this.state) {
			if (this.state[key].length <= 0 && key !== "subject" && key !== "error") {
				this.setState({error: true})
				return;
			} else {
				this.setState({error: false});
			}
		}
		sendEmail();
	}

	sendEmail() {
		let email = {
			name: this.state.name,
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
			name: '',
			email: '',
			subject: '',
			message: '',
			error: false,
		})
	}

	handleFormSubmit(e) {
		e.preventDefault();

		this.errorValidation(this.sendEmail);
	}

	render() {

		return (
			<div styleName="contact-container">
				<h1>Contact Us</h1>
				<p>Let us know your thoughts and questions. We'd love to hear from you.</p>
				<div styleName="contact-form">
					<form onSubmit={this.handleFormSubmit}>
						<input
							id='name'
							type="text"
							placeholder="Name"
							value={this.state.name}
							onChange={this.handleInputUpdate}
							styleName={this.state.error && this.state.name.length <= 0 ? "text-input-error" : "text-input" }
						/>
						<input
							id='email'
							type="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleInputUpdate}
							styleName={this.state.error && this.state.email.length <= 0 ? "text-input-error" : "text-input"}
						/>
						<input
							id='subject'
							type="text"
							placeholder="Subject"
							value={this.state.subject}
							onChange={this.handleInputUpdate}
							styleName="text-input"
						/>
						<textarea
							id='message'
							placeholder="Questions and feedback here"
							value={this.state.message}
							onChange={this.handleInputUpdate}
							styleName={this.state.error && this.state.message.length <= 0 ? "message-error" : "message"}
						/>
						<input type="submit" value="Submit" styleName="submit" />
					</form>
				</div>
			</div>
		)
	}
}

export default CSSModules(Contact, styles);
