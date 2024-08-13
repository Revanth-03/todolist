import React from "react";
import todolistdata from "./todolistdata";
import TodoList from "./TodoList";
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: todolistdata };
  }

  taskChecked = (task) => {
    const { data } = this.state;
    const taskIndex = data.indexOf(task);
    data[taskIndex].complete = !data[taskIndex].complete;
    this.setState({
      data: [...data],
    });
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        <h1>My Daily Task </h1>
        {data.map((task, index) => {
          return (
            <TodoList
              ontaskChecked={this.taskChecked}
              todoitem={task}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
