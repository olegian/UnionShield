import React from 'react';
import { Container, Row, Col, Button } from "shards-react";

export default class Landing extends React.Component {
    render() {
        return (
            <>
                <div className="landing">
                    <h1>Big stuff</h1>
                    <h4>
                        Little stuff
                    </h4>

                    <Container className="p-0 pt-3">
                        <Row className="m-0 p-0">
                            <Col md={6} className="m-0 p-0">
                                <h2 className={`pt-5`}>Stuff</h2>
                                <h5 className={``}>
                                    <strong>Stuff </strong>
                                </h5>
                            </Col>
                            <Col md={6} className="m-0 p-0 pt-5" style={{ display: "grid", placeItems: "center" }}>
                                <Container className="m-0 p-0">
                                    <Row style={{ padding: 20 }}>
                                        <Col>
                                            <Button href="#">buttun</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button href="/">butt</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <style jsx>{`
                    .landing{
                        min-height: 80vh;
                        text-align: center;
                        padding: 5% 5% 0% 5%;
                        background-color: #ddeedd;
                    }  
                `}</style>
            </>
        );
    }
}