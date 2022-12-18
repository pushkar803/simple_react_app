import { Outlet, Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Layout = () => {
    return (
        <>



            <Container>
                <Row>
                    <div style={{ margin: "20px" }}>
                        <h1>SIMPLE REACT APP</h1>
                    </div>
                </Row>
                <Row>
                    <Col xs={2}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <Link to="/">Home</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link to="/ajaxExample">AjaxExample</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link to="/employeeList">EmployeeList</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link to="/translation">Translation</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link to="/artical">Artical</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Layout;