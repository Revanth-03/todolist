import React from "react";

function TodoList({ todoitem, ontaskChecked }) {
  return (
    <div>
      <input
        type="checkbox"
        id={todoitem.id}
        name="todolist"
        value={todoitem.title}
        onChange={() => ontaskChecked(todoitem)}
      />
      <label htmlFor={todoitem.id}>{todoitem.title}</label>
    </div>
  );
}

export default TodoList;
