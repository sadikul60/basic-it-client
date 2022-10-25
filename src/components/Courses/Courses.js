import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Course from '../Course/Course';


const Courses = () => {
    const {user} = useContext(AuthContext)
    const courses = useLoaderData();
    // console.log(courses)
    return (
        <Container>
            <Row>
                <Col lg="4">
            
                </Col>
                <Col lg="8">
                      <Row>
                        {
                            courses.map(course => <Course 
                                    key={course._id}
                                    course = {course}
                                ></Course>)
                        }
                      </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;