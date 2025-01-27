import React from 'react'
//import { Autocomplete } from '@react-google-maps/api'
import { AppBar,Toolbar, Typography,InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search' 
import useStyles from './Styles'
const Header = () => {
    const classes=useStyles();
  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                Travel Advisor
            </Typography>
            <Box display='flex'>
            <Typography variant='h6' className={classes.title}>
                Explore New Places
            </Typography>
            {/* <Autocomplete> */}
                <div className={classes.Search}>
                    <div className={classes.searchIcon}>
                             <SearchIcon/>
                    </div>
                    <InputBase placeholder='Search' classes={{root:classes.inputRoot,input:classes.inputInput}} inputProps={{ 'aria-label': 'search' }}></InputBase>
                </div>
            {/* </Autocomplete> */}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header