import { useState } from "react";
import { Form, ListGroup, Row, Col } from 'react-bootstrap';

function EmployeeList(props) {

    const [employees] = useState(props.emp)
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <Row>
                <Col xs={6}>
                    <h2>Filter employee list on input change</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter employee name:</Form.Label>
                            <Form.Control type="text" placeholder="Avery Scott" onChange={(e) => { setSearchTerm(e.target.value) }} />
                        </Form.Group>
                    </Form>

                    <ListGroup as="ul">
                        {
                            employees.map((i) => {
                                if (i.name.includes(searchTerm)) {
                                    return <ListGroup.Item as="li" key={i.name}>{i.name}</ListGroup.Item>
                                } else {
                                    return ""
                                }
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default EmployeeList