import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter } from "shards-react";

export default class HealthSafety extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            points: 1,
        }
        this.add5 = this.add5.bind(this);
    }

    add5 = () => {
        var n = this.state.points;
        n += 5
        this.setState({
            points: n
        });
    }
    add1 = () => {
        var n = this.state.points;
        n += 1
        this.setState({
            points: n
        });
    }
    add3 = () => {
        var n = this.state.points;
        n += 3
        this.setState({
            points: n
        });
    }
    add10 = () => {
        var n = this.state.points;
        n += 3
        this.setState({
            points: n
        });
    }
     

    render() {
        return (
            <>
            <h1>Health and Safety</h1>
                <Card className="content m-5 p-5">
                    
                    <div className="m-5 ">
                        <p>Is your job classfied as hazardous by a government agency such as OSHA?</p>
                        <Container>
                            <Row>
                                <Col><Button outline style="dark"  onClick={this.add3} style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p> Are you provided with nessecary safety equipment to perform your job?</p>
                        <Container>
                            <Row>
                                <Col><Button outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" onClick={this.add10} style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Did you receive safety training?</p>
                        <Container>
                            <Row>
                                <Col><Button outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Do you have to operate heavy machinery as a part of your job?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>Yes, without training</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>Yes, I recieved training</Button></Col>
    
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Have you ever requested a safety inspection from OSHA?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>No, I haven't felt the need to</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>No, I feared repercussions</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Have you ever reviewed your work safety records as kept by your employer?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>Never wanted / tried to</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>Yes, but I fear repercussions</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <CardFooter>    
                        <Button outline style="dark" style={{height: '40px', width : '80%'}}>Submit</Button>
                    </CardFooter>
                </Card>
                <style jsx>{`
                    .content{
                        width: 100%;
                        background-color: #ffffff;
                    }
                `}</style>
            </>
        )
    }
}