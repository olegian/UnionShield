import React from 'react';
import { Container, Row, Col, Button } from "shards-react";

export default class HomeContent extends React.Component {
    render() {
        return (
            <>
            <div className="footer">
                <div className="row align-items-end">
                    <div className="col" href="/index">
                        <img className="icon" src="largelogo.png"></img>
                    </div>
                    <div className="col">
                        <Button style={{height: '40px', width : '100%'}} href="/employers" outline theme="dark">Employer search</Button>
                    </div>
                    <div className="col">
                        <Button style={{height: '40px', width : '100%'}} href="/fullsurvey" outline theme="dark">Take the survey</Button>
                    </div>
                    <div className="col">
                        <h6 >Made by the fellas</h6>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer {
                    min-height: 7vh;
                    padding: 2% 5% 2% 5%;
                    background-color: #B9D6F2;
                    display: block;
                    width: 100%;
                    text-align: center;
                }
                .icon{
                    height: 40px;
                }
            `}</style>
            </>
        )
    }
}