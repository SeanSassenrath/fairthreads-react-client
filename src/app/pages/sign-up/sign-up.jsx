import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import CSSModules from 'react-css-modules';
import styles from './sign-up.css';

class SignUp extends Component {

	constructor(...args) {
		super(...args)
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			error: false,
		}

		this.handleInputUpdate = this.handleInputUpdate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.sendForm = this.sendForm.bind(this);
	}

	handleInputUpdate(e) {
		this.setState({[e.target.id]: e.target.value})
	}

	errorValidation(sendForm) {
		for (var key in this.state) {
			if (this.state[key].length <= 0 && key !== "subject" && key !== "error") {
				this.setState({error: true})
				return;
			} else {
				this.setState({error: false});
			}
		}
		sendForm();
	}

	sendForm() {
		let form = {
			"entry.1498862273": this.state.firstName,
			"entry.141429714": this.state.lastName,
			"emailAddress": this.state.email
		}

		$.ajax({
			url: 'https://docs.google.com/forms/d/e/1FAIpQLScOXoMNgzU3QWpNfbEgaII44J36UnoVS1cRUC4btO3UMrCTsA/formResponse',
			method: 'POST',
			data: form,
		}).done(function() {
			console.log('Success');
		}).fail(function(err) {
			console.log("Error", err);
		})

		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			error: false,
		})
	}

	handleFormSubmit(e) {
		e.preventDefault();

		this.errorValidation(this.sendForm);
	}

	render() {

		return (
			<div styleName="signin-container">
			<div styleName="contact-container">
				<h1>Sign up to receive updates, resources, and special offers</h1>
				<div styleName="contact-form">
					<form onSubmit={this.handleFormSubmit}>
						<input
							id='firstName'
							type="text"
							placeholder="First Name"
							value={this.state.firstName}
							onChange={this.handleInputUpdate}
							styleName={this.state.error && this.state.firstName.length <= 0 ? "text-input-error" : "text-input" }
						/>
						<input
							id='lastName'
							type="text"
							placeholder="Last Name"
							value={this.state.lastName}
							onChange={this.handleInputUpdate}
							styleName={this.state.error && this.state.lastName.length <= 0 ? "text-input-error" : "text-input" }
						/>
						<input
							id='email'
							type="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleInputUpdate}
							styleName={this.state.error && this.state.email.length <= 0 ? "text-input-error" : "text-input"}
						/>
						<input type="submit" value="Submit" styleName="submit" />
					</form>
				</div>
			</div>
			</div>
		)
	}
}

export default CSSModules(SignUp, styles);
