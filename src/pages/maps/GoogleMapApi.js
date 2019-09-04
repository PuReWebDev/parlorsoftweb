import React, { Component } from 'react'

const defaultStyle = {
  wrapper: {
    height: '100vh',
    width: '100%'
  },
  map: {}
}

export const GoogleMapApi = ({user, clients, style=defaultStyle}) => {

  function getTrackCoords(person) {
    if ( person.services.location.active ) {
        //Subscription event props
        return person.service.location.now
    } else {
        return {
          lat: person.contact.lat,
          long: person.contact.long
        }
    }
  }

  function renderMarkers() {
    const userLocal = getTrackCoords(user)
    const activeClient - getTrackCoords(client)
    return (
      <Marker
         lat={userLocal.lat}
         long={userLocal.long}
      />
      {clients.map((client,k) => {
          const coords = getTrackCoords(client)
          return (
            <Marker
              lat={coords.lat}
              long={coords.long}
            />
          )
       }
    )
  }

  return(
    // Important! Always set the container height explicitly
     <div style={style.wrapper}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
         style={style.map}
       >
       {renderMarkers()}
       </GoogleMapReact>
     </div>
  )
}
