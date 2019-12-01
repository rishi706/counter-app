import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 3 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <br />
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <div>
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              counter={counter}
            ></Counter>
          </div>
        ))}
      </div>
    );
  }

  handleDelete = counterId => {
    console.log("Event Handler Called WHY?", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
}

export default Counters;
