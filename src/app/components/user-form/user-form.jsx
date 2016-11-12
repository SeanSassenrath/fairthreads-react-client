import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './user-form.css';

class UserForm extends Component {

	constructor(...args) {
		super(...args)
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			error: false,
		}
    // autoBind(this)
		this.handleInputUpdate = this.handleInputUpdate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.sendForm = this.sendForm.bind(this);
	}

	handleInputUpdate(e) {
		this.setState({[e.target.id]: e.target.value})
	}

	errorValidation(sendForm) {
		for (var key in this.state) {
			if (this.state[key].length <= 0 && key !== "error") {
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

    let {
      onClose
    } = this.props;

    return (
			<div styleName="signin-container" {...this.props}>
				<div styleName="contact-container">
					<div styleName="contact-form">
            {/*<span styleName="close" onClick={() => onClose()} />*/}
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

export default CSSModules(UserForm, styles);
