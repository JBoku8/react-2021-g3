import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/ui/button";

export class ClassCounter extends React.Component {
  state = {
    count: 0,
    prevTitle: "",
  };

  componentDidMount() {
    this.setState({
      count: this.props.initialValue,
      prevTitle: document.title,
    });

    document.title = this.props.title;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.title = this.state.prevTitle;
  }

  onIncrement = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  onDecrement = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
  };

  onReset = (event) => {
    this.setState({
      ...this.state,
      count: 0,
    });
  };

  render() {
    return (
      <div className="row mt-3 mb-3">
        <h3>{this.props.title}</h3>
        <hr />
        <h4>Counted - {this.state.count}</h4>
        <div className="row">
          <Button
            type="button"
            className="btn btn-warning"
            onClick={this.onIncrement}
            text="Subtract -1"
          />

          <Button
            type="button"
            className="btn btn-success"
            onClick={this.onDecrement}
            text="Add +1"
          />

          <Button
            type="button"
            className="btn btn-secondary"
            onClick={this.onReset}
            text="Reset Counter"
          />
        </div>
      </div>
    );
  }
}

ClassCounter.propTypes = {
  title: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
};

export default ClassCounter;
