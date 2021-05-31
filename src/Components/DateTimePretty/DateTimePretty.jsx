import moment from 'moment/min/moment-with-locales';
import React from 'react'

const withDate = (Component, date) => class extends React.Component {
  constructor(props) {
    super(props);
    this.date = moment(date).fromNow();
  }
  
  render() {
    return (<Component {...this.props} date={this.date} />)
  }
};

export default withDate;