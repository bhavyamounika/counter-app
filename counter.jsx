import React, { Component } from "react";
class Counter extends Component {
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    //demoVar = this.props.value;
  }
  handleIncrement = () => {
    //console.log("Increment Clicked", this);
    //this.state.count++;
    this.setState({ count: this.state.count + 1 });
    console.log("props111", this.props.value);
    // var demoVar = this.props.value;
  };

  // state = {
  //   count: this.props.value,
  //   tags: ["tag1", "tag2", "tag3"],
  //   imageUrl: "https://picsum.photos/200"
  // };

  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/200"
  };
  render() {
    console.log("props", this.props);

    let classes = this.classing();
    // React.createElement("h1");
    return (
      <div>
        <h1>Hello</h1>
        <span style={{ fontSize: 10 }} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  classing() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
