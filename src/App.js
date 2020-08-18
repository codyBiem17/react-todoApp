import React, { Component } from 'react';
import AddTask from './components/add-todo';
import TodoUI from './components/todo-ui'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      checked: false,
      allUncheckedUnchecked: false
    };
  }

  addTodo = (newTask) => {
    newTask.id = Math.floor(Math.random() * 1000);
    if (newTask.id !== this.state.todos.id) {
      // console.log(newTask.id);
      // const todos = this.state.todos.map(item => {
        newTask.isChecked = this.state.checked
      // })
      // const check = this.state.checked;
      let newTodos = [...this.state.todos, newTask];
      this.setState({
        // state.todos.isChecked = !state.todos.isChecked;
        todos: newTodos 
      })
      console.log(newTodos);
    }
    
    else {
      return null;
    }
  };
  

  deleteTask = () => {
    // console.log(id)
    const taskLeft = this.state.todos.filter((todo) => {
      if (todo.isChecked === false) {
        todo.isChecked = true
      }
      else {
        todo.isChecked = false;
      }
      // todo.isChecked = this.handleCheckUncheck
      return todo.isChecked !== true;
    });
    this.setState({
      todos: taskLeft,
    });
    console.log(taskLeft);
  };

  toggleCheckbox = (delTask) => {
    if (delTask.isChecked === false) {
      delTask.isChecked = true;
    } else {
      delTask.isChecked = false;
    }
  };

  handleCheckUncheck = (e, id) => {
    
    let itemId = e.target.id;
    let checked = e.target.checked;
    // this.setState((prevState) => {
    //   let { todos, allUnchecked } = prevState;
    //   if (itemId === "check-uncheck-all") {
    //     allUnchecked = checked;
    //     todos = todos.map((item) => ({ ...item, isChecked: checked }));
    //     console.log(todos)
    //   } else {
    //     todos = todos.map((item) =>
    //       item.id === itemId ? { ...item, isChecked: checked } : item
    //     );
    //     allUnchecked = todos.every((item) => item.isChecked);
    //     console.log(todos);
    //   }
    //   return { todos, allUnchecked };
    this.setState({ checked: !this.state.checked });
    const todoChecks = this.state.todos.map((itemChecks) => {
      // this.setState({ checked: !this.state.checked });
      // if (itemChecks.id === id) {
        return { ...itemChecks, isChecked: e.target.checked };  
      // }
      
      // return itemChecks.isChecked = e.target.checked;
    });
    console.log(e.target.checked);
    console.log(todoChecks)
    
  }

  checkUncheckAll = (e) => {
    // let checked = e.target.checked;
    let checkboxName = e.target.name;
    if (checkboxName === 'check-uncheck-all') {
      // let todosChecked = this.state.todos.map(todo => {
      //   return todo.isChecked = checked;
      // })
      this.setState({ allUncheckedUnchecked: !this.state.allUncheckedUnchecked});
      // console.log(checked);
    }
 
      // this.setState({ allUncheckedUnchecked: !this.state.allUncheckedUnchecked });
   
    
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
          handleCheckUncheck={this.handleCheckUncheck}
          checked={this.state.checked}
          allUncheckedUnchecked={this.state.allUncheckedUnchecked}
          checkUncheckAll={this.checkUncheckAll}
        />
      </div>
    );
  }
}


export default App;
