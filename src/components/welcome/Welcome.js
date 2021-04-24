import "./welcome.css";

function Welcome({ color, message, className = "" }) {
  const colors = ["red", "greenSea", "carrot", "wetAsphalt"];

  if (!colors.includes(color)) {
    return (
      <div className="alert alert-danger">
        <p>Please specify the supported color.</p>
      </div>
    );
  }
  
  return (
    <div className="row">
      <h2 className={["welcome-title", className, `text-${color}`].join(" ")}>
        {message}
      </h2>
    </div>
  );
}

export default Welcome;
