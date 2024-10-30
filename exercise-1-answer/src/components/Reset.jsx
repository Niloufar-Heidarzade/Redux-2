import { useDispatch } from 'react-redux';
import { reset } from '../redux/actions/actionCreators';

function Reset() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => {dispatch(reset())}}>Reset</button>
  )
}

export default Reset;