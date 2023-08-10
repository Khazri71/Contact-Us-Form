import React, { useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import * as Yup from "yup";
import ModalMessage from "./ModalMessage";

const initialValues = {
  firstname: "",
  lastname: "",
  age: 18,
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string("Your firstname must be a string !").required(
    "Your firstname is required !"
  ),
  lastname: Yup.string("Your lastname must be a string !").required(
    "Your lastname is required !"
  ),
  age: Yup.number().required("Your age is required !").positive().integer(),
  email: Yup.string()
    .required("Your email is required !")
    .email("You must enter your email in format aaa@gmail.com!"),
  message: Yup.string("Your message must be a string !")
    .required("Your Message is required !")
    .min(6, "You must enter minimum 6 characters !")
    .max(90, "You must enter maximum 90 characters  !"),

  //     phoneNumber: Yup.string()
  //     .required("Phone number is required")
  //     .matches(
  // /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
  //       "Invalid phone number"
  //     ),
});

const FormMultiStep = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userInfo, setUserInfo] = useState(initialValues);

  const submitForm = (values, { resetForm }) => {
    setUserInfo(values);
    handleOpen();
    resetForm({ values: initialValues });
  };

  return (
    <Box
      component="main"
      sx={{
        padding: 20 + "px",
        width: 60 + "%",
        width: { xs: "80%", md: "40%" },
        mx: "auto",
        borderRadius: "15px",
      }}
    >
      <ModalMessage
        {...{
          open,
          handleClose,
          userInfo,
        }}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({
          handleChange,
          handleBlur,
          isSubmitting,
          values,
          errors,
          touched,
          resetForm,
        }) => (
          <Form autoComplete="off">
            <TextField
              error={touched.firstname && errors.firstname ? true : false}
              type="text"
              name="firstname"
              id="outlined-firstname-input"
              variant="outlined"
              label="Your Firstname"
              sx={{ marginBottom: "15px" }}
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.firstname || ""}
            />
            <ErrorMessage name="firstname">
              {(errorMessage) => <span className="error">{errorMessage} </span>}
            </ErrorMessage>

            <br />
            <TextField
              error={touched.lastname && errors.lastname ? true : false}
              fullWidth
              id="outlined-lastname-input"
              autoComplete="current-lastname"
              type="text"
              name="lastname"
              label="Your Lastname"
              sx={{ marginBottom: "15px" }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.lastname || ""}
            />
            <ErrorMessage name="lastname">
              {(errorMessage) => <span className="error">{errorMessage} </span>}
            </ErrorMessage>

            <br />
            <TextField
              error={touched.age && errors.age ? true : false}
              fullWidth
              id="outlined-age-input"
              autoComplete="current-age"
              type="number"
              name="age"
              label="Your Age"
              sx={{ marginBottom: "15px" }}
              min={0}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.age || "18"}
            />
            <ErrorMessage name="age">
              {(errorMessage) => <span className="error">{errorMessage} </span>}
            </ErrorMessage>

            <br />
            <TextField
              error={touched.email && errors.email ? true : false}
              fullWidth
              id="outlined-email-input"
              autoComplete="current-age"
              type="text"
              name="email"
              label="Your Email"
              sx={{ marginBottom: "15px" }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.email || ""}
            />
            <ErrorMessage name="email">
              {(errorMessage) => <span className="error">{errorMessage} </span>}
            </ErrorMessage>
            <br />
            <TextField
              error={touched.message && errors.message ? true : false}
              fullWidth
              id="outlined-message-multiline-flexible"
              multiline
              maxRows={4}
              type="text"
              name="message"
              label="Your Message"
              sx={{ marginBottom: "15px" }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.message || ""}
            />
            <ErrorMessage name="message">
              {(errorMessage) => <span className="error">{errorMessage} </span>}
            </ErrorMessage>

            <br />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ mr: 10 + "px" }}
              type="submit"
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormMultiStep;
