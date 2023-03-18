import React from "react";
// import { Typography } from '@mui/material';
import { Container, Grid, Box } from "@mui/material";
import Card from "./components/Card";
//import { styled } from '@mui/system';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;

// km
