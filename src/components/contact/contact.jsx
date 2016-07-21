import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './contact.css';

class Contact extends Component {
	render() {
		return (
			<div styleName="contact-container">
				<div>
					<h1>Connect With Us</h1>
					<form action="MAILTO:estrada.ae@gmail.com" method="post" enctype="text/plain">
						<p>Your email address<span styleName="oblig-field">*</span></p>
						<input type="text" name="email"></input>
						<p>Subject<span styleName="oblig-field">*</span></p>
						<input type="text" name="subject"></input>
						<p styleName="comment">Please tell us about your question in more detail.</p>
						<br />
						<textarea rows="15" cols="50" name="comment" form="commntform">
						</textarea>
						<input type="submit" value="send"></input>
					</form>
					<div styleName="submit-container">
						<button>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Contact, styles);


