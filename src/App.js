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
      task:'',
      date: '',
      time:'' 
    }
  }

  handleChange = (e) => {
    this.setState({
        //set id for input field to be same as state properties above
        // grab the id of the target element and
        // update the state properties 
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
    if (this.state.task === '' && this.state.time === '') {
      return null
    }
    else {
      this.addTodo(this.state);
      
      //  this.setState({
      //     task: "",
      //     date: "",
      //     time: "",
      //   });
      
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
      console.log(newTodos);
      
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
        <AddTask
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deleteTask={this.deleteTask}
        />
        <TodoUI
          todos={this.state.todos}
          date={this.state.date}
          deleteTask={this.deleteTask}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}


export default App;
