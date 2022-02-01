import React from 'react';
import { Link, IconButton } from '@mui/material';
import GithubLogo from '@mui/icons-material/GitHub'

export default function Github() {
  return (
        <IconButton>
            <Link to="https://github.com/fahmikdp" className='link'>
                <GithubLogo sx={{color: '#08BDBA'}} />
            </Link>
        </IconButton>
  )
}
