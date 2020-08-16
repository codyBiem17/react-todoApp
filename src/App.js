import React, { Component } from 'react';
import AddTask from './components/add-todo';
import TodoUI from './components/todo-ui'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      checked: false
    };
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

  deleteTask = () => {
    // console.log(id)
    const taskLeft = this.state.todos.filter((todo) => {
      // if (todo.isChecked === false) {

      // }
      return todo.isChecked !== true;
    });
    this.setState({
      todos: taskLeft,
    });
    // console.log(taskLeft);
  };

  toggleCheckbox = (delTask) => {
    if (delTask.isChecked === false) {
      delTask.isChecked = true;
    } else {
      delTask.isChecked = false;
    }
  };

  checkUncheckAll = (e) => {
    // if (e.target.checked === true) {
      // alert('select/unselect all boxes')
      this.setState({ checked: !this.state.checked });
      console.log(e.target.checked);
    // }
    
    // 
    // const checkUncheck = this.state.todos.map((todo) => {
    //   if (todo.isChecked === false) {
    //     return (todo.isChecked = true);
    //   } else {
    //     return (todo.isChecked = false);
    //   }
    // });
    // this.setState({ todos: checkUncheck });
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
          checkUncheckAll={this.checkUncheckAll}
          isChecked={this.state.checked}
        />
      </div>
    );
  }
}


export default App;
