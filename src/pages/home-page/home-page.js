import Counter from "../../components/counter";
import Welcome from "../../components/welcome";
function HomePage() {
  return (
    <div className="row">
      <h1>Home Page</h1>
      <Welcome message="Counter Welcome" color="carrot" />
      <hr />
      <Counter />
    </div>
  );
}

export default HomePage;
