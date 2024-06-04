import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper,Typography, useMediaQuery } from '@mui/material'
//import { LocationOnOutlined } from '@mui/icons-material/LocationOnOutlined'
//import Rating from '@mui/material/Rating'
import useStyles from './Styles'

const Map = () => {
  const classes=useStyles();
  const isMobile=useMediaQuery('(min-width:600px)');

  const coordinates={lat:0, lng:0};
  return (
    <>
    <div className={classes.mapContainer}>
      <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyDQ_TQrqyRMDp6z6Zo71xdDKKzDEDQ5Y9c'}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={10}
      margin={[50,50,50,50]}
      options={''}  // If there are any options, specify them here
      onChange={''}  // Define a function to handle map change events
      onChildClick={''}  // Define a function to handle clicks on child components
      > 
        
      </GoogleMapReact>

    </div>
    </>
  )
}

export default Map