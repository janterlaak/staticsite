import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Mailto from '../components/Mailto'
import { T1, T2, T3, T4 } from '../assets/Content'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    width: "75%",
    maxWidth: 1000,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

function PaperSheet(props) {
  const {classes} = props;


  return (
    <div>
      <Paper className={ classes.root } elevation={ 1 }>
        <Typography variant="h5" component="h3">
          Hi, I'm Jan ter Laak
        </Typography>
        <Typography component="p">
          <T1 />
        </Typography>
      </Paper>
      <br />
      <br />
      <Paper className={ classes.root } elevation={ 1 }>
        <Typography variant="h5" component="h3">
          Member of Dapp.design
        </Typography>
        <Typography component="p">
          <T2 />
        </Typography>
      </Paper>
      <br />
      <br />
      <Paper className={ classes.root } elevation={ 1 }>
        <Typography variant="h5" component="h3">
          E-commerce
        </Typography>
        <Typography component="p">
          <T3 />
          <Mailto email="jan@dapp.design" obfuscate={ true }>
            Email me!
          </Mailto>
          <T4 />
          <br /> Thank you! ❤️
        </Typography>
      </Paper>
    </div>
    );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
