import React from 'react';
import { Box, Grid, Container, Typography } from "@mui/material";
import {
    SiMaterialui,
    SiReact,
    SiJavascript,
    SiHtml5,
    SiCss3,
    
    } from "react-icons/si";
import worksImg from '../img/work3.jpg'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#08BDBA' : '#308fe8',
  },
}));



export default function Skills() {
  return (
    <Container sx={{ pt: 14, pb: 6 }} className="skills" >
            <Box sx={{ flexGrow: 1 }}>
                <Grid sx={{ mt:-10 }} data-aos="fade-down">
                    <Typography
                    className="title-typography"
                    variant="h4"
                    align="center"
                    >
                    My Skills
                    </Typography>
                </Grid>
                <Grid
                container spacing={2}
                alignItems='center'
                justifyContent="center"
                >
                    <Grid item lg={6} md={6} xs={12} sx={{ mt:7 }}  className="progress2">
                        <Grid item xs={10} className="progress" data-aos="fade-down" data-aos-duration="1000">
                            <Typography variant="body1" sx={{ fontSize: 18 }} className="typography">
                            <SiHtml5 />
                            &nbsp;HTML
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <BorderLinearProgress variant="determinate" value="90" />
                            </Box>
                        </Grid>

                        <Grid item xs={10} className="progress" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                            <Typography variant="body1" sx={{ fontSize: 18 }} className="typography">
                            <SiCss3 />
                            &nbsp;CSS
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <BorderLinearProgress variant="determinate" value="80" />
                            </Box>
                        </Grid>

                        <Grid item xs={10} className="progress" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                            <Typography variant="body1" sx={{ fontSize: 18 }} className="typography">
                            <SiJavascript />
                            &nbsp;JavaScript
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <BorderLinearProgress variant="determinate" value="70" />
                            </Box>
                        </Grid>

                        <Grid item xs={10} className="progress" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                            <Typography variant="body1" sx={{ fontSize: 18 }} className="typography">
                            <SiReact />
                            &nbsp;React
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <BorderLinearProgress variant="determinate" value="65" />
                            </Box>
                        </Grid>

                        <Grid item xs={10} className="progress" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
                            <Typography variant="body1" sx={{ fontSize: 18 }} className="typography">
                            <SiMaterialui />
                            &nbsp;Material UI
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <BorderLinearProgress variant="determinate" value="60" />
                            </Box>
                        </Grid>
                    </Grid>
                    
                    <Grid item lg={6} md={6} xs={12} sx={{ mt:16 }} align="center" data-aos="fade-down">
                        <Box
                            className="skill-picture"
                            component="img"
                            mx="auto"
                            alt="skills"
                            src={worksImg}
                            />
                    </Grid>
                </Grid>
            </Box>
        </Container>
  )
}
