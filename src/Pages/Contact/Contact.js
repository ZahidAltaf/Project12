import React from "react";
import "./Contact.css";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is Required ")
    .min(3, "First Name must be greater 3 letters "),
  lastName: Yup.string()
    .required("Last Name is Required ")
    .min(3, "First Name must be greater 3 letters "),
  email: Yup.string().email("Invalid email").required("Email is Required "),
  message: Yup.string().required("Message is Required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const buttonStyle = {
  margin: "16px 0px",
};
const iconStyle = {
  color: "white",
};
const Contact = () => {
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: () => {
      console.log( "All values:", formik.values);
    },
  });

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Typography mt={13} mb={3} align="center" variant="h3" component="h2">
          Contact Us
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && !!formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
            fullWidth
            margin="normal"
          />
          <TextField
            id="lastName"
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && !!formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="message"
            name="message"
            label="Enter Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            margin="normal"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && !!formik.errors.message}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<Send style={iconStyle} />}
            style={buttonStyle}
            type="submit"
          >
            Send
          </Button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
