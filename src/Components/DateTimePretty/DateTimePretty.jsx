import moment from 'moment/min/moment-with-locales';
import React from 'react'

const withDate = (Component) => class extends React.Component {
  render() {
    let date = moment(this.props.date).fromNow();
    return (<Component {...this.props} date={date}  />)
  }
};

export default withDate;