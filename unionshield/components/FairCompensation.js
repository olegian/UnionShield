import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter } from "shards-react";

export default class FairCompensation extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            points: 0,
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
            <h1>Fair Compensation</h1>
                <Card className="content m-5 p-5">
                    
                    <div className="m-5 ">
                        <p>Are you paid at or above your state's minimum wage?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.question1} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>How many hours a week do you work?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>Less than 40</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>More than 40</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Do you (or your coworkers) receive overtime pay during a 40+ hour work week?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>Not sure</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Do you believe you have received unfair compensation for your work?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add10} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
    
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Do you believe you would be fired or demoted if you took an up to 12 weeks of unpaid sick/medical leave a year?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>Not sure</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Have you ever attempted to file a report regarding unfair pay?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Never wanted / tried to</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>Yes, but I fear repercussions</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Have you ever reviewed your wage records as kept by your employer?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>No, I fear repercussions</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <CardFooter>    
                        <Button outline style="dark" style={{height: '40px', width : '80%'}}>Submit</Button>
                    </CardFooter>
                </Card>
                <p>points = {this.state.points}</p>
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