import React, { Component } from "react";
import Field from "./field";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit called, form is :", this.state.form);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    const { form } = this.state;
    form[name] = value;
    this.setState({
      form: { ...form }
    });
  }

  render() {
    const { firstName, lastName, phone, email } = this.state.form;

    return (
      <form onSubmit={this.handleSubmit}>
        <Field
          name="firstName"
          label="First Name"
          type="text"
          value={firstName}
          onChange={this.handleInputChange}
        />
        <Field
          name="lastName"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={this.handleInputChange}
        />
        <Field
          name="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={this.handleInputChange}
        />
        <Field
          name="phone"
          label="Phone"
          type="phone"
          value={phone}
          onChange={this.handleInputChange}
        />
        <button>Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
