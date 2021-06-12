import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/counter';
// import Greeting from '../../components/greeting';
import Welcome from '../../components/welcome';
import { useFetch } from '../../hooks/useFetch';
import { getBooksActionAsync } from '../../redux/actions/book-actions';
import { booksSelector } from '../../redux/selectors';

function HomePage() {
  const dispatch = useDispatch();
  const booksList = useSelector(booksSelector);

  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/todos?_start=0&_limit=200`
  );

  useEffect(() => {
    dispatch(getBooksActionAsync(20));
  }, [dispatch]);

  const renderFetchData = () => {
    if (loading) {
      return <h3 className="text-white">Fetch Data loading...</h3>;
    }
    if (error) {
      return (
        <div className="alert alert-danger">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      );
    }

    return (
      <div className="row">
        <h3>Loaded Data length - {data.length}</h3>
      </div>
    );
  };

  return (
    <div className="row">
      <h1 className="text-white">Home Page</h1>
      <Welcome message="Counter Welcome" color="wetAsphalt" />
      <Welcome
        color="white"
        message={`Loaded books via async action using thunk - ${booksList.length}`}
      />
      <hr />
      {renderFetchData()}
      <Counter />
    </div>
  );
}

export default HomePage;
