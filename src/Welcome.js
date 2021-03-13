function Welcome(props) {
  console.log(props);
  const styles = {
    color: props.color,
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={styles}>{props.message}</h2>
    </div>
  );
}

export default Welcome;
