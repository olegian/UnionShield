import React from 'react';
import { Container, Row, Col, Button } from "shards-react";

export default class Landing extends React.Component {
    render() {
        return (
            <>
                <div className="landing">
                    <Container className="p-0 pt-3">
                        <Row className="m-0 p-0">
                            <h1 className="pt-5"> Diagnose your employer. </h1>
                            <Col md={6} className="m-0 p-0">
                                <h4> Anonymous submission. Endless support. </h4>
                                <Button href="#" style={{height: '40px', width : '400px'}} className="mainbutton" outline theme="dark">Learn about your employer</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <style jsx>{`
                    .landing{
                        min-height: 80vh;
                        text-align: center;
                        padding: 5% 5% 0% 5%;
                        background-image: url("landingphoto.png");
                    } 
                    .mainbutton{
                        height: "100px";
                        width: "100px";
                    } 
                `}</style>
            </>
        );
    }
}