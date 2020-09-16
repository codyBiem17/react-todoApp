// I like to leave my commented code to show my
// coding progress with many trials

import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";

const TodoUI = ({
  todos,
  deleteTask,
  toggleCheckbox,
  allCheckedUnchecked,
  handleCheckUncheck,
}) => {
  // const [isChecked, setIsChecked] = useState(false)
  // const handleChange = () => setIsChecked(!isChecked)

  const taskList = todos.length ? (
    todos.map((todo) => {
      let newTodoDate = new Date(todo.date);
      newTodoDate = newTodoDate.toDateString();
      // if (newTodoDate === curr_date) {
      return (
        // <div className="list-groups">
        <ListGroupItem className="my-tasks" key={todo.id}>
          <ListGroupItemHeading>{newTodoDate}</ListGroupItemHeading>
          <div>
            <Form className="todo-item">
              <FormGroup check>
                <Input
                  type="checkbox"
                  id={todo.id}
                  name={todo.name}
                  checked={todo.isChecked}
                  onChange={(e) => handleCheckUncheck(e)}
                />{" "}
              </FormGroup>
              <p>{todo.task}</p>
              <p>{todo.time}</p>
            </Form>
            {/* <p>{todo.date}</p> */}
          </div>
        </ListGroupItem>
        // </div>
      );
      // }
    })
  ) : (
    <p id="addTask">You have no task added</p>
  );

  return (
    <div className="task-list">
      <Container>
        <Row>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <div>
              <h3 id="schedule">{todos.length ? "My Todos" : null}</h3>
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
            {todos.length ? (
              <Form>
                <FormGroup row>
                  <Col xs={8}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="checkUncheckAll"
                          checked={allCheckedUnchecked}
                          onChange={(e) => handleCheckUncheck(e)}
                        />
                        <span value="selectUnselectAll">
                          Select/Unselect All
                        </span>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger" onClick={deleteTask} id="delete">
                      Delete
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoUI;
