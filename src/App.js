// I like to leave my commented code to show my
// coding progress with many trials

import React, { Component } from 'react';
import AddTask from './components/add-todo';
import TodoUI from './components/todo-ui'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      checked: false,
      allUncheckedUnchecked: false,
    };
  }

  addTodo = (newTask) => {
    newTask.id = Math.floor(Math.random() * 1000);

    const randomChars = (length) => {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    if (newTask.id !== this.state.todos.id) {
      // console.log(newTask.id);
      // const todos = this.state.todos.map(item => {
      newTask.isChecked = false;
      newTask.name = randomChars(5);
      // })
      // const check = this.state.checked;
      let newTodos = [...this.state.todos, newTask];
      this.setState({
        // state.todos.isChecked = !state.todos.isChecked;
        todos: newTodos,
      });
      console.log(newTodos);
    } else {
      return null;
    }
  };

  deleteTask = () => {
    // console.log(id)
    const taskLeft = this.state.todos.filter((todo) => {
      // if (todo.isChecked === false) {
      //   todo.isChecked = true
      // }
      // else {
      //   todo.isChecked = false;
      // }
      // todo.isChecked = this.handleCheckUncheck
      return todo.isChecked !== true ? todo : null;
    });

    this.setState({
      todos: taskLeft,
    });
    console.log(taskLeft);
  };


  handleCheckUncheck = (e) => {
    debugger;
    let itemName = e.target.name;
    let checked = e.target.checked;

    this.setState((prevState) => {
      let { todos, allCheckedUnchecked } = prevState;
      if (itemName === "checkUncheckAll") {
        allCheckedUnchecked = checked;
        todos = todos.map((item) => ({ ...item, isChecked: checked }));
      } else {
        todos = todos.map((item) =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allCheckedUnchecked = todos.every((item) => item.isChecked);
        // console.log(allCheckedUnchecked)
      }

      return { todos, allCheckedUnchecked };
    });
    console.log(checked);
  };

  render() {
    return (
      <div className="App">
        <h2 className="" id="task-header">
          Task Scheduler
        </h2>
        <AddTask addTodo={this.addTodo} />
        <TodoUI
          todos={this.state.todos}
          deleteTask={this.deleteTask}
          toggleCheckbox={this.toggleCheckbox}
          handleCheckUncheck={this.handleCheckUncheck}
          allCheckedUnchecked={this.state.allCheckedUnchecked}
        />
      </div>
    );
  }
}


export default App;
