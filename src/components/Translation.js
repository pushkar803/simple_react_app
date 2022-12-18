import { useState } from "react";
import { Form, Row, Col } from 'react-bootstrap';

const Translation = (props) => {

    const [translation] = useState(props.translation)
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <Row>
                <Col xs={6}>
                    <div>
                        <h2>Following map used to demonstrate translation</h2>
                        <p>
                            ['ball', 'pelota'],
                            ['house', 'casa'],
                            ['dog', 'perro'],
                            ['dogs', 'perros'],
                            ['milk', 'leche'],
                            ['orange', 'naranja'],
                        </p>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter text:</Form.Label>
                            <Form.Control type="text" placeholder="House" onChange={(e) => { setSearchTerm(e.target.value) }} />
                        </Form.Group>
                    </Form>

                    <p>{
                        translation.get(searchTerm)
                    }</p>
                </Col>
            </Row>
        </>
    )
}

export default Translation