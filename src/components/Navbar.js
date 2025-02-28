import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <AppBar position='fixed' className='nav' elevation={1}>
        <Toolbar variant='dense'>
          <div className='container nav-container'>
            <img
              className='nav-logo'
              src='/img/warzone.svg'
              alt='Warzone logo'
            />
            <Typography variant='h6' color='inherit' className='nav-grow'>
              <Link to='/' className='nav-link white'>
                Warzone
              </Link>
            </Typography>
            <Link to='/play' className='nav-button white'>
              Play
            </Link>
            <a href='https://tgmwarzone.tebex.io/' className='nav-button white'>
              Store
            </a>
            <a href='https://discord.gg/uCxjNhS' className='nav-button white'>
              Discord
            </a>
            <Link to='/leaderboard' className='nav-button white'>
              Leaderboard
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
