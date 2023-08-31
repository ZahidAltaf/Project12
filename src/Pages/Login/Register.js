import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Button, Container, TextField } from '@mui/material'
const buttonStyle = {
  margin: "16px 0px",
};
const iconStyle = {
  color: "white",
};

const Register = () => {
    return (
      <>
        <Navbar />
        <Container maxWidth="sm">
          <form>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
            variant="contained"
            color="primary"
      
            style={buttonStyle}
            type="submit"
            
          >Register</Button>
          </form>
        </Container>
        <Footer />
      </>
    );
}

export default Register


