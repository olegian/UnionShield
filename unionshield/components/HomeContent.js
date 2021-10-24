import React from 'react';
import { Container, Row, Col, Button } from "shards-react";

export default class HomeContent extends React.Component {
    render() {
        return (
            <>
                <div className="content">
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
                        background-color: #a2eedd;
                    }  
                `}</style>
            </>
        )
    }
}