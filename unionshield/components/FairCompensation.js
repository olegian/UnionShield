import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardFooter } from "shards-react";

export default class FairCompensation extends React.Component {
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
        n += 5
        this.setState({
            points: n
        });
    }
    

    render() {
        return (
            <>
                <Card className="content m-5 p-5">
                    
                    <div className="m-5 ">
                        <p>Are you paid at or above your state's minimum wage?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5}>Yes</Button></Col>
                                <Col><Button>No</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Are you paid at or above your state's minimum wage?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5}>Yes</Button></Col>
                                <Col><Button>No</Button></Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="m-5 ">
                        <p>Are you paid at or above your state's minimum wage?</p>
                        <Container>
                            <Row>
                                <Col><Button onClick={this.add5}>Yes</Button></Col>
                                <Col><Button>No</Button></Col>
                            </Row>
                        </Container>
                    </div>


                    <CardFooter>    
                        <Button>Submit</Button>
                    </CardFooter>
                </Card>
                <p>Points = {this.state.points}</p>
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