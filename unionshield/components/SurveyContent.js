import React from 'react';
import { Container, Row, Col, Button} from "shards-react";
import FairCompensation from '../components/FairCompensation'
import HealthSafety from './HealthSafety';
import Unionization from './Unionization';
import WorkplaceEquality from './WorkplaceEquality';


export default class SurveyContent extends React.Component {
    constructor(props){
        super(props);
        this.submit.bind(this);
    }

    submit = (value, index) => {
        this.props.changeArray(value, index);
    }

    render(){
        return (
            <>
                <div className="surveycontent">

                    {(this.props.type=="full" || this.props.type=="fairCompensation") &&
                        <FairCompensation submit={this.submit}/>               
                    }

                    {(this.props.type=="full" || this.props.type=="healthSafety") &&
                        <HealthSafety submit={this.submit}/>               
                    }

                    {(this.props.type=="full" || this.props.type=="workplaceEquality") &&
                        <WorkplaceEquality submit={this.submit}/>               
                    }
                    
                    {(this.props.type=="full" || this.props.type=="unionization") &&
                        <Unionization submit={this.submit}/>               
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
}