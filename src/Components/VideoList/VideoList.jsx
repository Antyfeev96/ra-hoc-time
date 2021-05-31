import './VideoList.scss';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import Video from '../Video/Video';

export default function VideoList(props) {
  return (
    props.list.map(item => <Video key={nanoid(5)} url={item.url} date={item.date} />)
  );
}

VideoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
}


