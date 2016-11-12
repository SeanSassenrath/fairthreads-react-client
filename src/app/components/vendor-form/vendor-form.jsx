import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './vendor-form.css';

class VendorForm extends Component {

	constructor(...args) {
		super(...args)
		this.state = {
			firstName: '',
			lastName: '',
      brandName: '',
			email: '',
      website: '',
      // message: '',
			error: false,
      visible: false
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
			if (this.state[key].length <= 0 && key !== "website" && key !== "message" && key !== "error") {
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
			"entry.1898011259": this.state.firstName,
			"entry.330617485": this.state.lastName,
      "entry.1024609059": this.state.brandName,
			"emailAddress": this.state.email,
      "entry.1673368196": this.state.website,
      "entry.113328477": this.state.message
		}

		$.ajax({
			url: 'https://docs.google.com/forms/d/e/1FAIpQLSeH7xI66PU5sauJvgxkqquiz5VnpVLw7ao0MQ9MEA0VHTm7Ag/formResponse',
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
      brandName: '',
			email: '',
      website: '',
      message: '',
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
                placeholder="First name"
                value={this.state.firstName}
                onChange={this.handleInputUpdate}
                styleName={this.state.error && this.state.firstName.length <= 0 ? "text-input-error" : "text-input" }
              />
  						<input
  							id='lastName'
  							type="text"
  							placeholder="Last name"
  							value={this.state.lastName}
  							onChange={this.handleInputUpdate}
  							styleName={this.state.error && this.state.lastName.length <= 0 ? "text-input-error" : "text-input" }
  						/>
              <input
                id='brandName'
                type="text"
                placeholder="Brand name"
                value={this.state.brandName}
                onChange={this.handleInputUpdate}
                styleName={this.state.error && this.state.brandName.length <= 0 ? "text-input-error" : "text-input" }
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
  							id='website'
  							type="text"
  							placeholder="Website"
  							value={this.state.website}
  							onChange={this.handleInputUpdate}
  							styleName="text-input"
  						/>
  						{/*<textarea
  							id='message'
  							placeholder="Comment"
  							value={this.state.message}
  							onChange={this.handleInputUpdate}
  							styleName={this.state.error && this.state.message.length <= 0 ? "message-error" : "message"}
  						/>*/}
  						<input type="submit" value="Submit" styleName="submit" />
  					</form>
  				</div>
  			</div>
			</div>
		)
	}
}

export default CSSModules(VendorForm, styles);
