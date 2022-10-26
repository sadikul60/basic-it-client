import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';


import Pdf from 'react-to-pdf';


const ref = React.createRef();

const CourseDetails = () => {
    const courses = useLoaderData();
    const { image_url, title, details, rating, total_view} = courses;
 
    // console.log(category._id)
    return (
        <Container className='my-5'>
            <Row>
                <Col lg="4">
                    <Categories></Categories>
                </Col>
                <Col lg="7">
                    <Card className='bg-light shadow-sm p-3  rounded'>
                    <div className='d-flex justify-content-between align-items-center text-white px-3 py-2'>
                            <h5>{title} </h5>
                            <Pdf targetRef={ref} filename="download.pdf">
                                {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                            </Pdf>
                        </div>
                        <div ref={ref}>
                            <Image 
                                src={image_url} 
                                style={{ height: "330px", width: "100%", padding: "5px", borderRadius: "5px"}}  
                                />
                            <Card.Body>
                            <div className='d-flex justify-content-between mt-4'>
                                <p>
                                    <FaStar className='text-warning'></FaStar>
                                    <FaStar className='text-warning'></FaStar>
                                    <FaStar className='text-warning'></FaStar>
                                    <FaStar className='text-warning'></FaStar>
                                    <FaStar className='text-warning'></FaStar>
                                </p>
                                <p>{rating?.number}</p>
                            </div>
                            <h6 className='mb-3 text-end'><span className='text-light'>Views:</span> {total_view}</h6>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{details}</Card.Text>
                            </Card.Body>
                        </div>
                        
                        <Link className='mb-3 mt-5 shadow-lg' to='/checkout'><button className='btn btn-outline-primary w-100 mx-auto'>Get Primium Access</button></Link>
                        
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
};

export default CourseDetails;