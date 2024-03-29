import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';
import Spinner from '../Spinner';

function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

export default Loader;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
