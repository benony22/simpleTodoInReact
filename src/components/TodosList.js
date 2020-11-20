import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodosList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deltetTodoProps={this.props.deltetTodoProps}
          />
        ))}
      </div>
    );
  }
}

export default TodosList;
