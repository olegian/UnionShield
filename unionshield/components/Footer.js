import React from 'react';
import { Container, Row, Col, Button } from "shards-react";

export default class HomeContent extends React.Component {
    render() {
        return (
            <>
            <div className="footer">
                <div className="row align-items-end">
                    <div className="col">
                        <h4>Sitemap</h4>
                        <div className="row">
                            <div className="col">page1</div>
                            <div className="col">page2</div>
                        </div>
                        <div className="row">
                            <div className="col">page3</div>
                            <div className="col">page4</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <p>logo placeholder</p>
                    </div>
                    <div className="col">
                        <h4>the fellas</h4>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer {
                    min-height: 20vh;
                    padding: 2% 5% 2% 5%;
                    background-color: #B9D6F2;
                    display: block;
                    width: 100%;
                    text-align: center;
                }
            `}</style>
            </>
        )
    }
}