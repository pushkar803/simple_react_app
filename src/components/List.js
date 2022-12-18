import { useEffect, useState } from "react";
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

const EmployeeDetails = ({ data }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.avatar} />
                <Card.Body>
                    <Card.Title>{data.first_name + " " + data.last_name}</Card.Title>
                    <Card.Text>
                        <h6>{data.employment.title}</h6>{data.address.city + ", " + data.address.state + ", " + data.address.country}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Username: {data.username}</ListGroup.Item>
                    <ListGroup.Item>Email: {data.email}</ListGroup.Item>
                    <ListGroup.Item>Gender: {data.gender}</ListGroup.Item>
                    <ListGroup.Item>Phone: {data.phone_number}</ListGroup.Item>
                    <ListGroup.Item>DOB: {data.date_of_birth}</ListGroup.Item>
                    <ListGroup.Item>Skill: {data.employment.key_skill}</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}

function List() {

    const [data, setData] = useState([])

    const getApiData = async () => {
        const response = await fetch("https://random-data-api.com/api/v2/users?size=9&response_type=json", {
            "method": "GET"
        }).then((response) => response.json());
        setData(response);
    };

    useEffect(() => {
        getApiData();
    }, [])

    return (
        <>
            <h2>Simple List data from api response example</h2>
            <Row>
                {
                    data.map((item) => {
                        return <Col xs={4} style={{ margin: "20px 0px" }}>
                            <EmployeeDetails data={item} />
                        </Col>
                    })
                }
            </Row>
        </>
    )

}



export default List;
