import React from "react";
import Header from "./Header";
import { Container, Typography } from "@mui/material";
import FormMultiStep from "./FromMultiStep";
import ModalMessage from "./ModalMessage";

const Home = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h3"
        color="initial"
        sx={{ color: "grey", textAlign: "center", marginTop: "20px" }}
      >
        Contact Us
      </Typography>
      <Container maxWidth="lg">
        <FormMultiStep />
        <ModalMessage />
      </Container>
    </>
  );
};

export default Home;
