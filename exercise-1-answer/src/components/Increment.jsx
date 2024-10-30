import { useDispatch } from 'react-redux';
import { add } from '../redux/actions/actionCreators';

function Increment() {
  const dispatch = useDispatch();
  return (
    <button onClick = {() => {dispatch(add())}}>Increment</button>
  )
}

export default Increment;