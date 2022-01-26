import React from 'react';
import { Box, Grid, Container, Typography, TextField, Link, Button } from "@mui/material";


export default function Contact() {
  return (
    <Container sx={{ pt: 14, pb: 6 }} className="contact" data-aos="zoom-in">
            <Box sx={{ flexGrow: 1 }}>
                <Grid sx={{ mt:-10 }}>
                    <Typography
                    className="title-typography"
                    variant="h4"
                    align="center"
                    >
                    Contact
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ mb: 2, textAlign:'center', pt: 3 }}>
                <TextField
                    className="input"
                    required
                    id="outlined-required"
                    label="Name"
                    type='email'
                    placeholder="Your Name"
                  >
                  </TextField>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ mb: 2, textAlign:'center' }}>
                  <TextField
                    className="input"
                    required
                    id="outlined-required"
                    label="Email"
                    type="email"
                    placeholder="Your Email"
                  >
                  </TextField>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ mb: 2, textAlign:'center' }}>
                  <TextField
                    sx={{ mb: 3 }}
                    rows={3}
                    multiline
                    className="input comment"
                    required
                    id="outlined-required"
                    label="Massage"
                    type="email"
                    placeholder="Enter a Massage"
                  >
                  </TextField>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ textAlign:'center' }}>
                  <Link to='/project-mui/work' className='link'>
                    <Button variant="contained" className="btncontact" letterSpacing={1}>
                      
                      Send
                    </Button>
                  </Link>
              </Grid>
            </Box>
            
        </Container>
  )
}
