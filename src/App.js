import React, { Component } from 'react';
import AddTask from './components/add-todo';
import TodoUI from './components/todo-ui'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[
        // { id: 1, task: 'write code', date: 'Aug 8, 2020', time:'8:00AM' },
        // { id: 2, task: 'read article', date: 'Aug 8, 2020', time: '8:00AM' },
        // { id: 3, task: 'search for jobs', date: 'Aug 8, 2020', time: '8:00AM' }
      ],
      date: '9' 
    }
  }

  addTodo = (newTask) => {
    newTask.id = Math.floor(Math.random() * 1000);
    if (newTask.id !== this.state.todos.id) {
      // console.log(newTask.id);
      let newTodos = [...this.state.todos, newTask];
      this.setState({
        todos: newTodos
      })
    }
    else {
      return null
    }
  }

  deleteTask = (delTask) => {
    // console.log(id)
    const taskLeft = this.state.todos.filter(todo => {
      return todo.id !== delTask;
    });
    this.setState({
      todos: taskLeft
    })
    // console.log(filterTodo);
  }
 
  render() {
    return (
      <div className="App">
        <h2 className="" id="task-header">
          Task Scheduler
        </h2>
        <AddTask addTodo={this.addTodo}/>
        <TodoUI todos={this.state.todos} date={this.state.date} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}


export default App;
