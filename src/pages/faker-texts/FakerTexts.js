import { useEffect, useReducer } from 'react';
import { getFakerTexts } from '../../services';

const SET_TEXTS = 'SET_TEXTS';
const SET_FILTER = 'SET_FILTER';
const CLEAR_FILTER = 'CLEAR_FILTER';

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const textReducer = (state, action) => {
  switch (action.type) {
    case SET_TEXTS:
      return {
        ...state,
        texts: action.payload,
        oldTexts: [...action.payload],
      };
    case SET_FILTER:
      const filtered = state.texts.filter((text) =>
        text.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filter: action.payload,
        texts: filtered,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: '',
        texts: [...state.oldTexts],
      };
    default:
      throw new Error();
  }
};

const initialState = {
  error: null,
  texts: [],
  oldTexts: [],
  filter: '',
};

function FakerTexts() {
  const [state, dispatch] = useReducer(textReducer, initialState);

  const loadTextsAsync = async () => {
    const textList = await getFakerTexts({ quantity: 16 });
    dispatch({
      type: SET_TEXTS,
      payload: textList,
    });
  };

  useEffect(() => {
    loadTextsAsync();
  }, []);

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 2) {
      dispatch({
        type: SET_FILTER,
        payload: target.value,
      });
    } else if (state.filter) {
      dispatch({
        type: CLEAR_FILTER,
      });
    }
  });

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="text-muted">Faker texts</h2>
        <input
          className="form-control mb-4"
          placeholder="search"
          name="search"
          type="search"
          onKeyUp={onSearch}
        />
      </div>
      <div className="border col-12 pt-3 pb-4 shadow row m-0 justify-content-center">
        {state.texts.map((item) => (
          <div
            className="card p-1 mx-1 mb-2"
            key={item.author}
            style={{ maxWidth: '18rem' }}>
            <h2 className="card-title text-center">{item.title}</h2>
            <h4 className="text-muted">
              {item.author}, <small>{item.genre}</small>
            </h4>
            <div className="card-body">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakerTexts;
