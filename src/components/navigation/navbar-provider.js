import React, {Component} from 'react'
import { GuestRoutes } from '../../routes/guest-routes'
import { AuthRoutes } from '../../routes/auth-routes'

class NavbarProvider extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
    }
  }

  renderContent = () => {
    if( !this.state.isAuthenticated ) {
      return (<GuestRoutes />)
    } else {
      return (<AuthRoutes />)
    }
  }

  render() {
    return(
      <>
          {this.renderContent()}
      </>
    )
  }
}

export default NavbarProvider
