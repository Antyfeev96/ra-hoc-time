import './Video.scss';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import DateTime from '../DateTime/DateTime';

export default function Video(props) {
  return (
    <div className="video">
      <iframe title={nanoid(5)} src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTime date={props.date} />
    </div>
  )
}

Video.propTypes = {

}