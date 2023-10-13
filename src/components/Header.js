import React from 'react';
import '../css/Header.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <div className="header__left">
        <h2> HkWorld</h2>
      </div>

      <div className="header__center">
        {(location.pathname !== '/') && <IconButton onClick={() => navigate('/')}><ArrowBackIcon fontSize="medium" /></IconButton>}

      </div>

      <div>
        <IconButton>
          <MicIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default Header;
