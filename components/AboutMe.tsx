import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";


const AboutMe = () => {
    return (
        <Container>

            <Row>
                <Col>
                    <Header />
                    <Row>
                        <Sidebar />
                        <Col>
                            <Container className="shadow-lg p-4 px-5 rounded border bg-dracforeground">
                                <Row>
                                    <Col>
                                        <Row> <h4 className="text-dracpink">About Me</h4> </Row>
                                        <Row>
                                        <p>{`I'm a developer based who's obsessed with tech in all its forms, and just like
                                            every other developer out there, I decided 'Hey I should create a blog'. So this is what
                                            this whole site is. But I digress. I like developing in multiple stacks, 
                                            including C++, C#, javascript, typescript and the like. Efficient code is
                                            basically what motivates me to keep going and so does writing my thoughts. So here we are.`}</p> 
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default AboutMe;
