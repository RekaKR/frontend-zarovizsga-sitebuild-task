import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  cont: {
    width: '85px',
    height: '85px',
    backgroundColor: 'rgb(239, 213, 146)',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media (max-width: 600px)': {
      width: '75px',
      height: '75px',
    },
    '@media (max-width: 435px)': {
      width: '65px',
      height: '65px',
    }
  },
  menu: {
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: '25px',
    right: '25px',
    '@media (max-width: 1160px)': {
      width: '80px',
      height: '80px',
    },
    '@media (max-width: 600px)': {
      width: '70px',
      height: '70px',
    },
    '@media (max-width: 435px)': {
      width: '60px',
      height: '60px',
    }
  },
  iconB: {
    width: '100%',
    minWidth: '60px',
    height: '100%',
    color: 'rgb(239, 213, 146)',
    backgroundColor: 'rgb(36, 45, 56)',
    border: 'rgb(239, 213, 146)',
    '&:hover': {
      fill: 'rgb(36, 45, 56)',
      color: 'rgb(36, 45, 56)',
      backgroundColor: 'rgb(239, 213, 146)',
      border: 'rgb(239, 213, 146)',
    },
  },
  icon: {
    fontSize: '70px',
    '@media (max-width: 1160px)': {
      fontSize: '50px',
    },
    '@media (max-width: 600px)': {
      fontSize: '45px',
    },
    '@media (max-width: 435px)': {
      fontSize: '38px',
    }
  },
});

const options = [
  'Home',
  'About this',
  'Other',
];

function HMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
      <div className={classes.cont}></div>
      <IconButton className={classes.iconB} aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.icon} />
      </IconButton>

      <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} PaperProps={{
        style: {
          width: '150px',
          maxHeight: '150px',
          color: 'rgb(239, 213, 146)',
          backgroundColor: 'rgb(36, 45, 56)',
        }
      }}>
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default HMenu;
