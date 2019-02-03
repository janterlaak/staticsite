import React from 'react'
import { withSiteData } from 'react-static'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '../components/card.js'
import PaperSheet from '../components/papersheet'
import { SocialIcon } from 'react-social-icons';
import Mailto from '../components/Mailto'
import States from '../components/States'






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
    <br/>
    <br/>
    <SocialIcon network="twitter" bgColor="#ff5a01" url="https://twitter.com/DesignDapp/" />
    <br/>
    <br/>
    <SocialIcon url="https://github.com/janterlaak" />
    <br/>
    <br/>
    <Mailto email="jan@terlaak.name" obfuscate={ true }>
      Email me!
    </Mailto>
    <Typography variant="h3" gutterBottom align="center">
      <Card />
    </Typography>
    <PaperSheet/>
    <Typography variant="h5" gutterBottom align="center">
      Guessing Game: Whitch State are you looking at?
    </Typography>
    <States />
  </MuiThemeProvider>
))


