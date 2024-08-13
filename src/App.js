import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      title: "My task",
      complete: false,
    };
  }

  taskChecked = () => {
    this.setState(
      {
        complete: !this.state.complete,
      },
      () => {
        console.log(this.state.complete);
      },
    );
  };
  render() {
    const { complete, title, id } = this.state;

    return (
      <div className="App">
        <h1>My Daily Task </h1>
        {/* {console.log(this)} */}
        <input
          type="checkbox"
          id="task"
          name="taskCompleted"
          value="taskCompleted"
          onChange={this.taskChecked}
        />
        <label htmlFor="task">{title}</label>
      </div>
    );
  }
}

export default App;
