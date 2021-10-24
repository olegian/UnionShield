import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter } from "shards-react";

export default class Unionization extends React.Component {
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
            <h1>Unionization</h1>
                <Card className="content m-5 p-5">
                    
                    <div className="m-5 ">
                        <p>Are you or your coworkers a part of any unions?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>
                    
                    <div className="m-5 ">
                        <p>Are you able to freely discuss unions, and make complaints regarding wages and working conditions?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>No</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add10} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Have you ever filed a formal complaint against your employer to a union official or the NLRB?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5} outline style="dark" style={{height: '40px', width : '80%'}}>No, I haven't felt the need to</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add1} outline style="dark" style={{height: '40px', width : '80%'}}>No, I feared repercussions</Button></Col>
                                <Col style={{borderLeft:"1px solid black"}}><Button onClick={this.add3} outline style="dark" style={{height: '40px', width : '80%'}}>Yes</Button></Col>
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