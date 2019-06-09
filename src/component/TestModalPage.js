import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import SignIn from "../signin/SignIn";

class TestModalPage extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          Open dialog
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <SignIn />
        </Dialog>
      </div>
    );
  }
}

export default TestModalPage;
