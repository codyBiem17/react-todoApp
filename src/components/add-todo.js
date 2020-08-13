import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from "reactstrap";

class AddTask extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     task: "",
        //     date: "",
        //     time: ""
        // }
    }


    render() {

        const { handleChange, handleSubmit, deleteTask } = this.props;
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
                            <Form onSubmit={handleSubmit}>
                                <FormGroup row>
                                    <Col xs="12" className="form-columns">
                                        <Input onChange={handleChange} type="text" id="task" placeholder="Enter Your Task" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col xs="7" className="form-columns"> 
                                        <Input onChange={handleChange} type="date" id="date" />
                                    </Col>
                                    <Col xs="5" className="form-columns">
                                        <Input onChange={handleChange} type="select" name="select" id="time">
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
                                        <Button id="add-todo" color="success">Add Task</Button>
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