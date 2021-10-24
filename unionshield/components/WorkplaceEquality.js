import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter } from "shards-react";

export default class WorkplaceEquality extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            points: 0,
        }
        this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.submit(this.state.points, 2);
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
            <h1>Workplace Equality</h1>
                <Card className="content m-5 p-5">
                    
                    <div className="m-5 ">
                        <p>Have you ever felt discriminated against on the basis of your race?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Have you ever felt discriminated against on the basis of your sex or gender?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Have you ever felt discriminated against on the basis of your sexual orientation?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Have you ever felt discriminated against on the basis of your religion?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Have you ever been harrassed (including being called slurs, unwanted advances, or even simply ridicule)?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Have you ever filed a discrimination report with an official federal agency?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>No, I haven't felt the need to</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>No, I feared repercussions</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>If you wanted to quit your job, would you be able to do so without complications?</p>
                        <Container>
                            <Row>
                                <Col><Button outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>


                    <CardFooter>    
                        <Button outline style="dark" onClick={this.handleClick} style={{height: '40px', width : '80%'}}>Submit</Button>
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