import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='w-75 mx-auto my-5'>
             <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Web Design?</Accordion.Header>
                    <Accordion.Body>
                    Web design refers to the design of websites that are displayed on the internet. 
                    It usually refers to the user experience aspects of website development rather 
                    than software development. Web designers plan, create and code internet sites 
                    and web pages, many of which combine text with sounds, pictures, graphics and video 
                    clips. A web designer is responsible for creating the design and layout of a website or 
                    web pages. It and can mean working on a brand new website or updating an already existing site.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Web development?</Accordion.Header>
                    <Accordion.Body>
                    Web developers create and maintain websites. They are also responsible for the site's 
                    technical aspects, such as its performance and capacity, which are measures of a website's 
                    speed and how much traffic the site can handle. In addition, web developers may create content 
                    for the site. Web development is the building and maintenance of websites; it's the work that 
                    happens behind the scenes to make a website look great, work fast and perform well with a 
                    seamless user experience. Web developers, or 'devs', do this by using a variety of coding languages.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is Mobile development?</Accordion.Header>
                    <Accordion.Body>
                    Mobile application development is the process of creating software applications that run on a 
                    mobile device, and a typical mobile application utilizes a network connection to work with 
                    remote computing resources. Firstly Java was the official language for Android App Development 
                    (but now it was replaced by Kotlin) and consequently, it is the most used language as well. 
                    Many of the apps in the Play Store are built with Java, and it is also the most supported language by Google.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Graphics Design?</Accordion.Header>
                    <Accordion.Body>
                    According to the American Institute of Graphic Arts (AIGA), graphic design is defined as “the art
                    and practice of planning and projecting ideas and experiences with visual and textual content.” 
                    In other terms, graphic design communicates certain ideas or messages in a visual way. Graphic 
                    design is the practice of composing and arranging the visual elements of a project. Designing 
                    the layout of a magazine, creating a poster for a theatre performance, 
                    and designing packaging for a product are all examples of graphic design.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;