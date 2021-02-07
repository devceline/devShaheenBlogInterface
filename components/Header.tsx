import React, {useState} from "react";
import {Row, Container, Col, Button, Image, Navbar, Nav, Form, FormControl, InputGroup} from "react-bootstrap";
import Link from "next/link";

const Header = () => {

    const [tag, setTag] = useState("");

    const clickHandler = () => {
        window.location.href = `?tag=${tag}`;
    }
    return (
        <Row>
            <Col>
                <Container className="px-0">
                    <Navbar className="px-0">
                        <Row>
                            <Col>
                                <Nav className="mr-auto">
                                    <Navbar.Brand>
                                    <Link href="/">
                                    <Image rounded className="d-block align-middle" width="30" height="30" fluid src="/logo.svg" />
                                    </Link>
                                    </Navbar.Brand>

                                    <Nav.Link className="align-middle" href="/">Home</Nav.Link>
                                    <Nav.Link href="/aboutme">About Me</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Form inline onSubmit={(e) => {e.preventDefault(); clickHandler();}}>
                                        <InputGroup>

                                            <FormControl value={tag}
                                                onChange={(e) => setTag(e.target.value)} className="shadow-lg" type="text" placeholder="Search by tags!" />
                                            <InputGroup.Append>
                                            <Button 
                                            onClick={clickHandler} 
                                            className="bg-dracpink border-0 rounded"> 
                                                <i className="fas fa-search"></i> 
                                            </Button>
                                            </InputGroup.Append>

                                        </InputGroup>
                                    </Form>
                                </Nav>
                            </Col>
                        </Row>

                    </Navbar>
                </Container>
            </Col>
        </Row>
    )
}

export default Header;
