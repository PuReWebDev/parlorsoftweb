import React, { Component } from 'react'
import * as Sentry from '@sentry/browser';

export default class ErrorBoundry extends Component {

  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
        scope.setExtras(errorInfo);
        const eventId = Sentry.captureException(error);
        this.setState({eventId});
    });
  }

  static getDerivedStateFromError(error) {
       return { hasError: true };
   }

   renderErrorUi = () => {
     if( this.state.hasError ) {
       return(
           <>
           <h3>Whoops! Insert funny barber related error here</h3>
           <button onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</button>
           </>
       )
     } else {
       return this.props.children
     }
   }

  render () {
       return(this.renderErrorUi())
  }
}
