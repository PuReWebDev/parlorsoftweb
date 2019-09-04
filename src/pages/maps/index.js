import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

//Subscribe to realtime markers
class Maps extends Component {

  constructor() {
    super()
  }

  componentRecivedProps() {

  }

  render() {
    //Small version of the schedule which highlights current and next
    //appointments within the day
    //<GoogleCalendarApi />
    //
    //
    return (
        <GoogleMapApi
           user={this.props.user}
           clients={this.props.user.activeClient}
        />
    );
  }
}

Maps.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
}

const mapStateToProps = state => ({
    user: user.authenticationReducer.user
})

const mapActionToProps = dispatch => ({

})

export default connect(mapStateToProps,mapActionToProps)(Maps)
