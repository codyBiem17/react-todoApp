import React from 'react'
import {
            Container, Row, Col, Button, Form, FormGroup, Input, Label,
            ListGroup, ListGroupItem
        } from "reactstrap";

const TodoUI = ({ todos, date, deleteTask, handleSubmit }) => {
 
  const curr_date = new Date().getDate();
  // const taskLeft = todos.map(todo => {
    let todoDate = new Date(date);
    todoDate = todoDate.getDate();
  // })
  
  
  

    const taskList = todos.length ?
      (
        todos.map(todo => {
          let newTodoDate = new Date(todo.date);
          newTodoDate = newTodoDate.getDate();
          if (newTodoDate === curr_date) {
            return (
              // <div className="list-groups">
              <ListGroupItem className="my-tasks date-time" key={todo.id}>
                <Form>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> <span>{todo.task}</span>
                    </Label>
                  </FormGroup>
                </Form>
                {/* <p>{todo.date}</p> */}
                <p>{todo.time}</p>
              </ListGroupItem>
              // </div>
            );
          }
          
          if (newTodoDate !== curr_date) {
            return (
              // <div className="list-groups">
              <ListGroupItem className="my-tasks date-time" key={todo.id}>
                <Form>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> <span>{todo.task}</span>
                    </Label>
                  </FormGroup>
                </Form>
                {/* <p>{todo.date}</p> */}
                <p>{todo.time}</p>
              </ListGroupItem>
              // </div>
            );
          }
          
        })
      ) :
      (
        <p id="addTask">You have no task added</p>
      )

  // const scheduleList = () => {
  //   if (date !== today) {
  //     return null
  //   }
  //   else {
  //     return (
  //       // <div>
  //         <h3>Today-{date}</h3>
  //       // </div>
  //     )
  //   }
    
  // }
  
    return (
      <div className="task-list">
        <Container>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              {
                todos.length ? 
                  (
                    <div>
                      <h3 id="schedule">
                        {todoDate === curr_date ? "Today" : "Upcoming"}
                      </h3>
                    </div>
                  ) :
                  null
              }
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <ListGroup>{taskList}</ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }} className="select-all">
              {todos.length ? (
                <Form>
                  <FormGroup row>
                    <Col xs={5}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />
                          <span>Select All</span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col xs={2}>
                      <Button color="danger">Delete</Button>
                    </Col>
                  </FormGroup>
                </Form>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default TodoUI;