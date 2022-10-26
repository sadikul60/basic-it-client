import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';

const CourseDetails = () => {
    const courses = useLoaderData();
    const category = useLoaderData();
    const { image_url, title, details } = courses;
    const {_id} = category;
    // console.log(category._id)
    return (
        <Container className='my-5'>
            <Row>
                <Col lg="4">
                    <Categories></Categories>
                </Col>
                <Col lg="8">
                    <Card className='bg-dark'>
                        <Image 
                            src={image_url} 
                            style={{ height: "330px", padding: "5px", borderRadius: "5px"}}  
                            />
                        <Card.Body  className='text-white'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{details}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <button className='btn btn-outline-primary w-100 mx-auto'>Get Primium Access</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
};

export default CourseDetails;