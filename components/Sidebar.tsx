import React from "react";
import Head from "next/head";
import {
    Row,
    Container,
    Col,
    Image,
} from "react-bootstrap"

const Sidebar = () => {

    return (
        <>
            <Col className="bg-draccurrent rounded border border-dracforeground text-dracforeground p-3">
                <Row>
                    <Image className="shadow-lg border rounded border-dracforeground mx-auto d-inline-block" width={"75%"} height={"100%"} src="/Me.jpg" />
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        <h4>Links</h4>
                        <Row>
                            <Col>
                                <i className="text-dracpink far fa-envelope"></i>
                            </Col>
                            <Col className="text-left">
                                <a href="mailto:contact@devshaheen.com">  Email</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <i className="text-dracpink fab fa-github"></i>
                            </Col>
                            <Col className="text-left">
                                <a href="https://github.com/shaheensarafa/">   GitHub</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <i className="text-dracpink fab fa-linkedin"></i>
                            </Col>
                            <Col className="text-left">
                                <a href="https://www.linkedin.com/in/shaheen-sarafa-5427a0204/"> Linkedin</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </>
    )

}

export default Sidebar;
