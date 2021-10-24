import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

export default class HomeContent extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Card className="cardstyle">
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            Nunc quis nisl ac justo elementum sagittis in quis justo.
                        </CardBody>
                    </Card>
                    <h1>
                        Unions Good!
                    </h1>
                    <p>
                        Bezos bad.
                    </p>
                </div>
                <style jsx>{`
                    .content{
                        min-height: 10vh;
                        padding: 5% 5% 0% 5%;
                        background-color: #ffffff;
                    }  
                    .cardstyle{
                        width: 40%;
                    }
                `}</style>
            </>
        )
    }
}