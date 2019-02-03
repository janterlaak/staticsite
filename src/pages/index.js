import React from 'react'
import { withSiteData } from 'react-static'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '../components/card.js'
import PaperSheet from '../components/papersheet'
import { SocialIcon } from 'react-social-icons';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true
  },
});




export default withSiteData(() => (
  <MuiThemeProvider theme={ theme }>
    <CssBaseline />
    <SocialIcon url="https://twitter.com/DesignDapp/" />
    <Typography variant="h3" gutterBottom align="center">
      <Card />
    </Typography>
    <PaperSheet/>
  </MuiThemeProvider>
))
