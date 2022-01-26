import React from 'react'
import { Box, Grid, Container, Typography } from "@mui/material";
import profilImg from '../img/profile.jpeg'


export default function About() {
    return (
        <Container sx={{ pt: 14, pb: 6 }} className="about" data-aos="zoom-out">
            <Box sx={{ flexGrow: 1 }}>
                <Grid sx={{ mt:-10 }}>
                    <Typography
                    className="title-typography"
                    variant="h4"
                    align="center"
                    >
                    About Me
                    </Typography>
                </Grid>
                <Grid
                container spacing={2}
                justifyContent="center"
                >
                    <Grid item lg={6} md={6} xs={12} sx={{ mt:16 }} align="center">
                        <Box
                            className="profile-picture"
                            component="img"
                            mx="auto"
                            alt="Fahmi Kurnia"
                            src={profilImg}
                            />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} sx={{ mt:14 }} align="center">
                        <Typography className="typo-name">
                            Fahmi Kurnia Dwiputra
                        </Typography>
                        <Typography className='typography'>
                            a Student from SMKN 1 Kota Bekasi who's studying programming, love website design and interested in layout editing
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
