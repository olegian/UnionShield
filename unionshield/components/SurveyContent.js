import React from 'react';
import { Container, Row, Col, Button} from "shards-react";
import FairCompensation from '../components/FairCompensation'


export default function SurveyContent(props) {
    return (
        <>
            <div className="surveycontent">
                {(props.type=="full" || props.type=="fairCompensation") &&
                <FairCompensation />               
                }
            </div>
            <style jsx>{`
                .surveycontent{
                    min-height: 80vh;
                    text-align: center;
                    padding: 5% 5% 0% 5%;
                    background-image: url("landingphoto.png");
                } 
                .mainbutton{
                    height: "100px";
                    width: "100px";
                } 
            `}</style>
        </>
    );
}