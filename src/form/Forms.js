import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import * as Yup from "yup";

const Forms = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Enter your first name")
      .min(2, "Enter a valid first name"),
    lastName: Yup.string()
      .required("Enter your last name")
      .min(2, "Enter a valid last name"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Enter your email address"),
    phone: Yup.string()
      .required("Enter your phone number")
      .matches(
        /\(\d{3}\) \d{3} \d{2} \d{2}$/,
        "Enter in (xxx) xxx xx xx format"
      ),
  });

  const onSubmit = (values) => {
    alert("OK");
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="mt-5">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label>First name</Label>
          <Input
            type="text"
            placeholder="Enter your first name"
            {...formik.getFieldProps("firstName")}
            invalid={formik.errors.firstName && formik.touched.firstName}
            valid={!formik.errors.firstName}
          />
          <FormFeedback>{formik.errors.firstName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input
            type="text"
            placeholder="Enter your last name"
            {...formik.getFieldProps("lastName")}
            invalid={formik.errors.lastName && formik.touched.lastName}
            valid={!formik.errors.lastName}
          />
          <FormFeedback>{formik.errors.lastName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            placeholder="Enter your email address"
            {...formik.getFieldProps("email")}
            invalid={formik.errors.email && formik.touched.email}
            valid={!formik.errors.email}
          />
          <FormFeedback>{formik.errors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Phone number</Label>
          <Input
            type="text"
            placeholder="Enter your phone number"
            {...formik.getFieldProps("phone")}
            invalid={formik.errors.phone && formik.touched.phone}
            valid={!formik.errors.phone}
          />
          <FormFeedback>{formik.errors.phone}</FormFeedback>
        </FormGroup>
        <Button
          className="mt-3"
          color="info"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default Forms;
