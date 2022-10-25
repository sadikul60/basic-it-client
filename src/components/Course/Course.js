import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {_id, image_url, title, details} = course;
    // console.log(course)
    return (
        <Col lg="4" className='mt-4'>
                    <Card className='bg-dark'>
                    <Image 
                        src={image_url} 
                        style={{ height: "230px", padding: "5px", borderRadius: "5px"}}  
                        />
                    <Card.Body  className='text-white'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {
                    details.length > 70 ?
                    <>{details.slice(0, 70) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
                    :
                    <>{details}</>
                }
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>
    );
};

export default Course;