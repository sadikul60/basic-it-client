import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import {  Link, useLoaderData  } from 'react-router-dom';
import Categories from '../Categories/Categories';
import ReactTooltip from 'react-tooltip';




const Category = () => {
    const categoryAll = useLoaderData();
    const {_id, image_url, title, details} = categoryAll;
   


    return (
        <Container>
            <Row>
                <Col lg="4">
                    <Categories></Categories>
                </Col>
                <Col lg="7" className='mt-4'>
                    <Card className='bg-dark'>
                        <Image 
                            src={image_url} 
                            style={{ height: "330px", padding: "5px", borderRadius: "5px"}}  
                            />
                        <Card.Body  className='text-white'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {
                            details.length > 150 ?
                            <>{details.slice(0, 150) + '...'} <Link to={`/courses/${_id}`}>Read More</Link></>
                            :
                            <>{details}</>
                        }
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;