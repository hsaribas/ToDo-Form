import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || formData.firstName.length < 2) {
      alert("Please enter your first name");
      return;
    }

    if (!formData.lastName || formData.lastName.length < 2) {
      alert("Please enter your last name");
      return;
    }

    if (!formData.email) {
      alert("Please enter your email address");
      return;
    }

    if (!formData.phone) {
      alert("Please enter your phone number");
      return;
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First name</Label>
          <Input
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="text"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone number</Label>
          <Input
            name="phone"
            type="text"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleFormData}
          />
        </FormGroup>
        <Button className="mt-3" color="info" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default Forms;
