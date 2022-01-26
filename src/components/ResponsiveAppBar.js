import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu, 
  Container,
  Button,
  MenuItem, 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{bgcolor: "#fff", color: "#000"}} className='nav'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            className="app-bar"
            component="div"
            sx={{ mr: 4, flexGrow:'10',
               display: {
                  xs: 'none',
                  md: 'flex' } }}
          >
          My Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ flexGrow: 0}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }} className='app-bar'
            >
              <Link to="/" className="btn">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                </Link>

                <Link to="/about" className="btn">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                </Link>

                <Link to="/skills" className="btn">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Skills</Typography>
                </MenuItem>
                </Link>

                <Link to="/works" className="btn">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Works</Typography>
                </MenuItem>
                </Link>

                <Link to="/contact" className="btn">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
                </Link>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            className="app-bar"
            sx={{ flexGrow: 1.5, display: { xs: 'flex', md: 'none' } }}
          >
            My Portfolio
          </Typography>
          
        
          <Box sx={{ flexGrow: 1.5, float:'right', display: { xs: 'none', md: 'flex' }}}>
          <Link to="/" className="btn">
              <Button
                className='btn-link'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Home
              </Button>
            </Link>
            <Link to="/about" className="btn">
              <Button
                className='btn-link'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                About
              </Button>
            </Link>
            <Link to="/skills" className="btn">
              <Button
                className='btn-link'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Skills
              </Button>
            </Link>
            <Link to="/works" className="btn">
              <Button
                className='btn-link'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Works
              </Button>
            </Link>
            <Link to="/contact" className="btn">
              <Button
                className='btn-link'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;