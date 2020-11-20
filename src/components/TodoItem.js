import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
      const completedStyle = {
        fontStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
      };
      const { completed, id, title} = this.props.todo;
    return (
      <div>
        <li className="todo-item">
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button
            onClick={() => this.props.deltetTodoProps(id)}
          >
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </li>
      </div>
    );
  }
}

export default TodoItem;

// import React from 'react'

// function TodoItem(props) {
//     return (
//         <div>
//             <li>{props.todo.title}</li>
//         </div>
//     )
// }

// export default TodoItem
