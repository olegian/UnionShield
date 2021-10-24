import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

export default class HomeContent extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Card className="cardstyle">
                        <CardBody>
                            <CardTitle>The labor movement is in full swing.</CardTitle>
                            <CardSubtitle>The time to act is now.</CardSubtitle>
                            As the world returns to a pre-pandemic economy, we must use this precious moment in history to ensure workers across the country can return to a safe and equitable workplace.
                            Unionization enables workers like you to get higher wages, better healthcare benefits, more paid sick days, and a safer work environment.
                            We must pass acts like the PRO Act and the Public Safety Employer-Employee Cooperation Act to arm us with the tools to effectively voice our needs and guarantee that they are met.
                            Use Union Shield as a tool to determine areas where your employer needs to improve and as a platform to connect with other discontent workers to push for change in your company.
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