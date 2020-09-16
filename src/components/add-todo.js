import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      date: "",
      time: "",
      // isChecked: false
    };
  }

  handleChange = (e) => {
    this.setState({
      //set id for input field to be same as state properties above
      // grab the id of the target element and
      // update the state properties
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    if (this.state.task === "" && this.state.time === "") {
      return null;
    } else {
      this.props.addTodo(this.state);
      this.setState({
        task: "",
        date: "",
        time: "",
        // isChecked: false
      });
    }
  };

  render() {
    // const { handleChange, handleSubmit, deleteTask } = this.props;
    // const deleteTodo = todos.map((todo) => {
    //   let todoDate = new Date(todo.date);
    //   todoDate = todoDate.getDate();
    //   return todoDate === curr_date ? "Today" : "Upcoming";
    // });

    return (
      <div className="input-fields">
        <Container>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Col xs="12" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      id="task"
                      placeholder="Enter Your Task"
                      value={this.state.task}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="7" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="date"
                      id="date"
                      value={this.state.date}
                    />
                  </Col>
                  <Col xs="5" className="form-columns">
                    <Input
                      onChange={this.handleChange}
                      type="select"
                      name="select"
                      id="time"
                      value={this.state.time}
                    >
                      <option>Select Time</option>
                      <option>5:00am</option>
                      <option>9:00am</option>
                      <option>4:00pm</option>
                      {/* <option>5</option> */}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="5" className="form-columns">
                    <Button id="add-todo" color="success">
                      Add Task
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddTask;
