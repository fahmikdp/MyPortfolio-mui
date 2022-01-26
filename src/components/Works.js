import React from 'react';
import { Box,
    Grid,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia, } from "@mui/material";
import crud from "../img/crud.jpg"
import calculator from "../img/kalkulator_php.png"
import landingpage from "../img/landingpage.png"

export default function Works() {
  return (
    <Container sx={{ pt: 14, pb: 6 }} className="works">
            <Box sx={{ flexGrow: 1 }} >
                <Grid sx={{ mt:-10 }}>
                    <Typography
                    className="title-typography"
                    variant="h4"
                    align="center"
                    data-aos="zoom-in"
                    >
                    Projects
                    </Typography>
                </Grid>
                <Grid
                container spacing={4}
                justifyContent="center"
                
                >
                    <Grid item xs={12} md={6} lg={4} align="center" data-aos="zoom-in" data-aos-duration="1000">
                        <Card sx={{ maxWidth: 235 }} className="card-works">
                            <CardMedia component="img" alt="green iguana" image={crud} />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='typography'>
                                Simple CRUD App
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4} align="center" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                        <Card sx={{ width: 235 }} className="card-works cardtocard"> 
                            <CardMedia component="img" alt="green iguana" image={calculator}  sx={{ width: 240, height: 180 }} />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='typography'>
                                Calculator with PHP
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4} align="center" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        <Card sx={{ width: 235 }} className="card-works cardtocard"> 
                            <CardMedia component="img" alt="green iguana" image={landingpage} />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='typography'>
                                Simple Landing Page Website
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
  )
}
