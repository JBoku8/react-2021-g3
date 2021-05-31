import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/ui/button';

export class ClassCounter extends React.Component {
  state = {
    count: 0,
    prevTitle: '',
  };

  componentDidMount() {
    const { initialValue, title } = this.props;
    this.setState({
      count: initialValue,
      prevTitle: document.title,
    });

    document.title = title;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // eslint-disable-next-line
    document.title = this.state.prevTitle;
  }

  onIncrement = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  onDecrement = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };

  onReset = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: 0,
    }));
  };

  render() {
    const { title } = this.props;
    const { count } = this.state;
    return (
      <div className="row mt-3 mb-3">
        <h3>{title}</h3>
        <hr />
        <h4>Counted - {count}</h4>
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
  initialValue: PropTypes.number.isRequired,
};

export default ClassCounter;
