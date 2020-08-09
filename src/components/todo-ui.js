import React from 'react'
import {
            Container, Row, Col, Button, Form, FormGroup, Input, Label,
            ListGroup, ListGroupItem
        } from "reactstrap";

const TodoUI = ({ todos, date, deleteTask }) => {
  // const { todos } = props;
  // const d = new Date();
  // const today = d.toLocaleDateString();
  // if (date === today) {
  //   return (
  //     <h3>Today-{today}</h3>
  //   )
  // }
  // else {
  //   return (
  //     <h3>Upcoming-{date}</h3>
  //   )
  // }

    const taskList = todos.length ?
      (
          todos.map(todo => {
            return (
              // <div className="list-groups">
                <ListGroupItem className="my-tasks date-time" key={todo.id}>
                  <Form>
                    <FormGroup check>
                      <Label check>
                      <Input type="checkbox"/>{' '}
                        <span>{todo.task}</span>
                      </Label>
                    </FormGroup>
                  </Form>
                  {/* <p>{todo.date}</p> */}
                  <p>{todo.time}</p>
                </ListGroupItem>
              // </div>

             
            )

            
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
            <Col>
              <div>
                <h3>{date ? 'Today': 'upcoming'}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <ListGroup>{taskList}</ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }} className="select-all">
              {
                todos.length ?
                (
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
                ) : null
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default TodoUI;