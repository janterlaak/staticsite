import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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

  const T1 = () => (
    <Typography component="p">
      <br />A Solution Designer and Blockchain specialist in the Nederlands.
      <br /> You can find me on Twitter, Github and Linkedin, or just send me an Email.
      <br /> Also, make sure to check out a few of my 👨‍💻 projects or take a look at my recent work below: 👇
    </Typography>
  );

  return (
    <div>
      <Paper className={ classes.root } elevation={ 1 }>
        <Typography variant="h5" component="h3">
          Hi, I'm Jan ter Laak
        </Typography>
        <T1 />
      </Paper>
      <br />
      <br />
      <Paper className={ classes.root } elevation={ 1 }>
        <Typography variant="h5" component="h3">
          Member of Dapp.design
        </Typography>
        <Typography component="p">
          Building Apps with the blockchain in mind. This group is building Apps for the social and commercial domains.
          <br /> We are a team of solution designers building on javascript and Smart Contracts dedicated to Ethereum and Parity chains. This can be private or public just
          what you needs are.
          <br /> Thank you! ❤️
        </Typography>
      </Paper>
      <br />
      <br />
      <Paper className={ classes.root } elevation={ 1 }>
        <Typography variant="h5" component="h3">
          E-commerce
        </Typography>
        <Typography component="p">
          To build, implement and maintain good E-commerce site is a hard thing to do. Integration in ERP and third party software even harder.
          <br /> Together with a dedicated team of IT-specialist we can make that E-commerce dream a reality. Plz contact me if you need an E-commerce solution, webshop and/or
          integration with business processes. We use the latest google technologies so customers find your Shop.
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
