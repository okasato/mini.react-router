import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Paper from '@material-ui/core/Paper';

const InnerMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 49.236427, lng: -123.12187 }}
    center={{ lat: 49.236427, lng: -123.12187 }}
  >
    <Marker
      position={{ lat: 49.236427, lng: -123.12187 }}
    />
  </GoogleMap>
);


export default class Map extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Paper className='map'>
        <InnerMap
          containerElement={(<div />)}
          mapElement={(<div className='mapElement'/>)}
        />
      </Paper>
    )
  }
} 