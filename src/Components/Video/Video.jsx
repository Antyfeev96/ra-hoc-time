import './Video.scss';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import DateTime from '../DateTime/DateTime';
import withDate from '../DateTimePretty/DateTimePretty';

const DateTimePretty = withDate(DateTime);

export default function Video(props) {
  return (
    <div className="video">
      <iframe title={nanoid(5)} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty {...props} />
    </div>
  )
}

Video.propTypes = {
  props: PropTypes.shape({
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
}