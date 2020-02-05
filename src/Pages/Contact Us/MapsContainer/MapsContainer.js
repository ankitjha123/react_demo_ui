    import React, {Component} from 'react';
    import {
        withScriptjs,
        withGoogleMap,
        GoogleMap,
        Marker,
        InfoBox
      } from "react-google-maps";
    import {Card,Container,Row,Col, Jumbotron} from 'react-bootstrap'
    
    import classes from './MapsContainer.css'
    const google = window.google;
    
    
    const MAP_API = "YOUR_API_KEY";
    
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat:17.460543, lng: 78.352873 }}
        >
          <Marker
            position={{ lat:17.460543, lng: 78.352873}}
            
          />
        </GoogleMap>
      )); 
    
    
    class MapsContainer extends Component {
         
          render() {
            return (
               
               <Card >
                <Card.Body >
                    <MapWithAMarker 
                    googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${MAP_API}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    
                    />
                 </Card.Body>
                </Card>
                 
            );
          }
    }
    
    export default MapsContainer;
    
    