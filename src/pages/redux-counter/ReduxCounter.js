import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  addNumberAction,
  resetNumberAction,
  subtractNumberAction,
  blockAction,
} from '../../redux/actions';
import {
  counterSelector,
  messageSelector,
} from '../../redux/selectors/common-selectors';

function ReduxCounter() {
  const dispatch = useDispatch();
  const message = useSelector(messageSelector);
  const counter = useSelector(counterSelector);
  const [storage, setStorage] = useLocalStorage('app:counter', counter);

  useEffect(() => {
    setStorage(() => counter);
  }, [counter, setStorage]);

  return (
    <div className="row">
      <div className="col-12 mb-3">
        <h2 className="text-white">Redux Counter</h2>
        <h4 className="text-white">{message}</h4>
        <hr />
        <h3>useLocalStorage: {storage}</h3>
      </div>
      <div className="col-12 d-grid gap-1">
        <h2 className="text-white">{counter}</h2>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(addNumberAction(10))}>
          Add Number - Action
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(subtractNumberAction(5))}>
          Subtract Number - Action
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(resetNumberAction())}>
          Reset Number - Action
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => dispatch(blockAction())}>
          BLOCKED_ACTION - Action
        </button>
      </div>
    </div>
  );
}

export default ReduxCounter;
