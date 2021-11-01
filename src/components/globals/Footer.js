import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-bootstrap';


function Copyright() {
  return (
    <Typography variant="body2" color="white"  marginLeft="-70%">
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Footer extends React.Component {
  render() {
    return (
      <Box
        
      >
       

        <Box
          component="footer"
          sx={{
            py: 1,
            px: 1,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[900]
                : theme.palette.grey[400],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" color="white" marginLeft="-70%">
              Bedu Music
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    );
  }
}

export default Footer;