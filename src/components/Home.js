import React from 'react'
import {
    Container,
    Grid,
    Box,
    Typography,
    IconButton,
    Button} from '@mui/material'
import { Link } from "react-router-dom";
import profilImg from '../img/homepoto.png'
import GithubLogo from '@mui/icons-material/GitHub'
import IgLogo from '@mui/icons-material/Instagram'
import WorkIcon from '@mui/icons-material/Work'
import ContactIcon from '@mui/icons-material/Call'

export default function Home() {
    return (
        <Container className='home'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item
                        lg={6}
                        md={6}
                        xs={12}
                        sx={{ mt: 1 }}
                        data-aos="fade-right">
                        <Typography
                            variant='h3'
                            letterSpacing={0.9}
                            className='home-text'
                            >
                            Hi, <br /> I am <span>Fahmi</span> <br />Front-End Developer
                        </Typography>
                        <IconButton className='btn-home'>
                            <Link href='https://github.com/fahmikdp' className='link'>
                                <GithubLogo sx={{color: '#08BDBA'}} />
                            </Link>
                        </IconButton>
                        <IconButton className='btn-home'>
                            <Link href='https://instagram.com/fahmikdp' className='link'>
                                <IgLogo  sx={{color: '#08BDBA'}} />
                            </Link>
                        </IconButton>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} align="center" data-aos="fade-left">
                        <Box
                        className="profile-picture"
                        component="img"
                        mx="auto"
                        alt="Fahmi Kurnia"
                        src={profilImg}/>

                        <Link to='/MyPortfolio-mui/works' className='link'>
                            <Button variant="contained" className="btn" letterSpacing={1}>
                                <WorkIcon fontSize='medium' />
                                &nbsp;My Projects
                            </Button>
                        </Link>
                        <Link to='/MyPortfolio-mui/contact' className='link'>
                            <Button variant="contained" className="btn" letterSpacing={1}>
                                <ContactIcon fontSize="medium" />
                                &nbsp;contact me
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}