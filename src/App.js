import React, { Component } from 'react';
import AddTask from './components/add-todo';
import TodoUI from './components/todo-ui'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isChecked: false
    };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  addTodo = (newTask) => {
    newTask.id = Math.floor(Math.random() * 1000);
    if (newTask.id !== this.state.todos.id) {
      // console.log(newTask.id);
      let newTodos = [...this.state.todos, newTask];
      this.setState({
        todos: newTodos,
      });
      // console.log(newTodos);
    } else {
      return null;
    }
  };

  // deleteTask = (delTask) => {
  // console.log(id)
  // const taskLeft = this.state.todos.filter((todo) => {
  //   return todo.id !== delTask;
  // });
  // this.setState({
  //   todos: taskLeft,
  // });
  // console.log(filterTodo);
  // };

  deleteTask = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => !todo.checked),
    }));
  };

  render() {
    return (
      <div className="App">
        <h2 className="" id="task-header">
          Task Scheduler
        </h2>
        <AddTask addTodo={this.addTodo} />
        <TodoUI todos={this.state.todos} deleteTask={this.deleteTask} />
      </div>
    );
  }
}


export default App;
