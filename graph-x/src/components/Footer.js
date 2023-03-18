// Footer.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
