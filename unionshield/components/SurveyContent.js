import React from 'react';
import { Container, Row, Col, Button} from "shards-react";
import FairCompensation from '../components/FairCompensation'
import HealthSafety from './HealthSafety';
import Unionization from './Unionization';
import WorkplaceEquality from './WorkplaceEquality';


export default function SurveyContent(props) {
    return (
        <>
            <div className="surveycontent">
                {(props.type=="full" || props.type=="fairCompensation") &&
                    <FairCompensation />               
                }

                {(props.type=="full" || props.type=="healthSafety") &&
                    <HealthSafety />               
                }

                {(props.type=="full" || props.type=="workplaceEquality") &&
                    <WorkplaceEquality />               
                }
                
                {(props.type=="full" || props.type=="unionization") &&
                    <Unionization />               
                }

            </div>
            <style jsx>{`
                .surveycontent{
                    min-height: 100vh;
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