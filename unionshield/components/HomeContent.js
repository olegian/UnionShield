import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

export default class HomeContent extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Card className="cardstyle">
                        <CardBody style={{fontSize:18}}>
                            <CardTitle style={{fontSize:43, height:53}}>The labor movement is in full swing.</CardTitle>
                            <CardSubtitle style={{fontSize:33, height:43}}>The time to act is now.</CardSubtitle>
                            As the world returns to a pre-pandemic economy, we must use this precious
                                 moment in history to ensure workers across the country can return to a safe
                                 and equitable workplace.
                            Unionization enables workers like you to get higher wages, better healthcare
                                 benefits, more paid sick days, and a safer work environment.
                            We must pass acts like the PRO Act and the Public Safety Employer-Employee
                                 Cooperation Act to arm us with the tools to effectively voice our needs
                                 and guarantee that they are met.
                            Use Union Shield as a tool to determine areas where your employer needs to
                                 improve and as a platform to connect with other discontent workers to 
                                 push for change in your company.
                        </CardBody>
                    </Card>

                    <Card className="cardstyle mt-5">
                        <CardBody><CardTitle style={{fontSize:43, height:70}}>Benefits of Unionization:</CardTitle>
                        <CardSubtitle style={{fontSize:33, height:35}}>Increase in Wage</CardSubtitle>
                        Union workers earn, on average, 11.2% more than their non-union counterparts, and reduced the income inequality by 33-37%</CardBody>
                        <CardBody><CardSubtitle style={{fontSize:33, height:35}}>Healthcare Benefits</CardSubtitle>
                        Only 68% of nonunionized workers have employer-provided health insurance, whereas 94% of unionized workers have employer-provided health insurance</CardBody>
                        <CardBody><CardSubtitle style={{fontSize:33, height:35}}>Paid leave</CardSubtitle>
                        91% of unionized workers get paid sick days while only 73% of nonunionized workers get paid sick days</CardBody>
                    </Card>
                </div>
                <style jsx>{`
                    .content{
                        min-height: 10vh;
                        padding: 5% 5% 5% 5%;
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