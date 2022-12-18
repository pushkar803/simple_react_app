import { useState, useEffect } from "react";
import { Button, ListGroup, Row, Col } from 'react-bootstrap';

const Artical = () => {

    const [totalPages, setTotalPages] = useState(0)
    const [articals, setArticals] = useState([])

    async function getArticals(pageNo) {

        const response = await fetch("https://jsonmock.hackerrank.com/api/articles?page=" + pageNo, {
            "method": "GET"
        }).then((response) => response.json());

        setArticals(response.data);
        setTotalPages(response.total_pages)
    }

    const CallNewPage = (e) => {
        let pageNo = e.target.innerHTML
        getArticals(pageNo)
    }

    useEffect(() => {
        getArticals(1)
    }, [])


    return (
        <>
            <Row>
                <Col xs={8}>
                    <h2>Fetch paginated articals by api call</h2>
                    <br></br>
                    <ListGroup as="ul">
                        {
                            articals.map((i) => {
                                return <ListGroup.Item as="li" key={i.title ? i.title : i.story_title}>
                                    {i.title ? i.title : i.story_title}
                                </ListGroup.Item>
                            })
                        }
                    </ListGroup>
                    <br></br>
                    <Row>
                        <Col xs={4}></Col>
                        <Col xs={4}>
                            {
                                Array(totalPages).fill().map((page, index) => {
                                    return < Button variant="success" key={index + 1} style={{ margin: "2px" }} onClick={CallNewPage} > {index + 1}</Button>
                                })
                            }
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Artical