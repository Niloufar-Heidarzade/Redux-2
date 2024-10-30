import { useDispatch } from 'react-redux';
import { minus } from '../redux/actions/actionCreators';

function Decrement() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => {dispatch(minus())}}>Decrement</button>
  )
}

export default Decrement;