import React from 'react'
import _ from 'lodash'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  email: '',
                  message: '',
                  nameId: 'contact-input pure-input-2-3',
                  emailId: 'contact-input pure-input-2-3',
                  messageId: 'message-input pure-input-2-3',
                  loaderId: '',
                  nameError: '',
                  emailError: '',
                  messageError: '',
                  buttonId: 'submit-button pure-button pure-button-primary pure-input-1-2',
                  buttonText: 'Submit',
                  isDisabled: ''
                };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
    this.setState({buttonId: 'submit-button pure-button pure-button-primary pure-input-1-2'});
    this.setState({buttonText: 'Submit'});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
    this.setState({buttonId: 'submit-button pure-button pure-button-primary pure-input-1-2'});
    this.setState({buttonText: 'Submit'});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
    this.setState({buttonId: 'submit-button pure-button pure-button-primary pure-input-1-2'});
    this.setState({buttonText: 'Submit'});
  }

  handleSubmit(event) {
    let globalThis = this;
    let payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    globalThis.setState({successMessageId: 'text-hidden'})

    let data = new FormData();
    data.append("json", JSON.stringify(payload));
    let errors = {};

    if (!this.state.name || !this.nameIsValid(this.state.name)) {
      errors.name = 'Please enter a valid name';
    }

    if (!this.state.email || !this.emailIsValid(this.state.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!this.state.message) {
      errors.message = 'Please enter a message';
    }

    //Required lodash just to verify an empty object
    if (!_.isEmpty(errors)) {
      this.displayErrors(errors);
    } else {
      globalThis.setState({loaderId: 'pulse-loader'});
      fetch('/api/submit', {
        method: "POST",
        body: data
      }).then(function(response) {
        globalThis.setState({loaderId: ''});
        console.log(response);
        return response.json();
      }).then(function(data) {
        globalThis.displayErrors(data);

        console.log(data);
        if (data.success) {
          //Display a small success message
          globalThis.setState({successMessageId: 'text-visible'})
          globalThis.setState({name: ''});
          globalThis.setState({email: ''});
          globalThis.setState({message: ''});
          globalThis.setState({buttonId: 'submit-button-success pure-button pure-button-primary pure-input-1-2'});
          globalThis.setState({buttonText: 'Message Sent!'});
          globalThis.setState({isDisabled: ''});
        }
      });
    }

    event.preventDefault();
  }

  nameIsValid(input) {
    if (!input) {
      return false;
    }

    return input.match(/[0-9]/g) ? false : true;
  }

  emailIsValid(input) {
    //Source: http://emailregex.com/
    if (input.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      return true;
    }

    return false;
  }

  displayErrors(errors) {
    if (errors.name) {
      this.setState({buttonId: 'submit-button-error pure-button pure-button-primary pure-input-1-2'});
      this.setState({buttonText: errors.name});
    } else if (errors.email) {
      this.setState({buttonId: 'submit-button-error pure-button pure-button-primary pure-input-1-2'});
      this.setState({buttonText: errors.email});
    } else if (errors.message) {
      this.setState({buttonId: 'submit-button-error pure-button pure-button-primary pure-input-1-2'});
      this.setState({buttonText: errors.message});
    } else {
      this.setState({buttonId: 'submit-button pure-button pure-button-primary pure-input-1-2'});
      this.setState({buttonText: 'Submit'});
    }
  }

  render() {
    return (
      <div className="contact-section" id="contact-section">
        <h2 className="section-header">
          <span>Contact</span>
        </h2>
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <fieldset className="pure-group">
            <input className="contact-input pure-input-2-3" placeholder="Name" type="text" value={this.state.name} onChange={this.handleNameChange} />
          </fieldset>

          <fieldset className="pure-group">
            <input className="contact-input pure-input-2-3" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
          </fieldset>

          <fieldset className="pure-group">
            <textarea className="message-input pure-input-2-3" placeholder="Message" value={this.state.message} onChange={this.handleMessageChange} />
          </fieldset>
          <div className="button-box">
            <div className={this.state.loaderId}>
              <button className={this.state.buttonId} type="submit" value="Send" disabled={this.state.isDisabled}>{this.state.buttonText}</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
