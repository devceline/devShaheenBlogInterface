import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";


const AboutMe = () => {
    const text = `I'm a developer based who's obsessed with tech in all its forms, and just like
                  every other developer out there, I decided 'Hey I should create a blog'. So this is what
                  this whole site is. But I digress. I like developing in multiple stacks, 
                  including C++, C#, javascript, typescript and the like. Efficient code is
                  basically what motivates me to keep going and so does writing my thoughts. So here we are.`
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/5b1b66895a.js" crossOrigin="anonymous"></script>
            </Head>
            <Container>
                <Header />
                <Row>
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <Sidebar />
                            </Col>
                            <Col>
                                <Container className="shadow-lg p-3 px-2 rounded border bg-dracforeground">
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <h4 className="text-dracpink">About Me</h4>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p> {text} </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )

}

export default AboutMe;
