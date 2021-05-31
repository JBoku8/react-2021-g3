import Counter from '../../components/counter';
import Welcome from '../../components/welcome';
import { useFetch } from '../../hooks/useFetch';

function HomePage() {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/todos?_start=0&_limit=200`
  );

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
      <h1>Home Page</h1>
      <Welcome message="Counter Welcome" color="wetAsphalt" />
      <hr />
      {renderFetchData()}
      <Counter />
    </div>
  );
}

export default HomePage;
