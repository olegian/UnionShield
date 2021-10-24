import React from 'react';
import { Container, Row, Col, Button } from "shards-react";

export default class HomeContent extends React.Component {
    render() {
        return (
            <>
            <div className="footer">
                <h1>
                    footer shtuf
                </h1>
            </div>
            <style jsx>{`
                .footer {
                    display: block;
                    width: 100%;
                    text-align: center;
                }
            `}</style>
            </>
        )
    }
}