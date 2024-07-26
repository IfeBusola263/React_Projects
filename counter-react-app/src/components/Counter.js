import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  // const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  // get the dispatch function from the Redux store.
  const dispatch = useDispatch()

  function handleIncreament(){
    // dispatch({type: 'INCREASE'});
    dispatch(counterActions.increment());
  }

  function handleDecreament(){
    // dispatch({ type: 'DECREASE'})
    dispatch(counterActions.decrement());
  }

  function handleDoubleIncrease(){
    // dispatch({type: 'DOUBLE', payload: { value: 2 }})
    dispatch(counterActions.double({value: 2}));
  }

  function toggleCounterHandler(){
    // dispatch({type: 'TOGGLE'})
    dispatch(counterActions.toggle());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleDecreament}>Decreament</button>
        <button onClick={handleDoubleIncrease}>Double</button>
        <button onClick={handleIncreament}>Increament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
