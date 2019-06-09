import React from "react";
import SignIn from "./SignIn";
import { Paper, Container } from "@material-ui/core";

function SignInPage() {
  return (
    <Container>
      <Paper>
        <SignIn />
      </Paper>
    </Container>
  );
}

export default SignInPage;
