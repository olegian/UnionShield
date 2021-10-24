import * as React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'shards-react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function SurveyContent(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div className="m-0 p-3">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {props.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        ESS<sup>&#174;</sup> Score: {props.total}
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        See how {props.name} breaks down:
                    </Typography>
                    <Container className="m-0 mt-3 p-0">
                        <Row>
                            <Col className="md-4">
                                <Container className="m-0 p-0">
                                    <Row>
                                        <Col className="md-3">
                                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                                <CircularProgress variant="determinate" value={props.ascore} />
                                                <Box
                                                    sx={{
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                    position: 'absolute',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    }}
                                                >
                                                <Typography variant="caption" component="div" color="text.secondary">
                                                {props.ascore}%
                                                </Typography>
                                                </Box>
                                            </Box>
                                        </Col>
                                        <Col className="md-9">
                                            <Typography>Fair Compensation ({props.acount} reports total)</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="md-3">
                                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                                <CircularProgress variant="determinate" value={props.bscore} />
                                                <Box
                                                    sx={{
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                    position: 'absolute',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    }}
                                                >
                                                <Typography variant="caption" component="div" color="text.secondary">
                                                {props.bscore}%
                                                </Typography>
                                                </Box>
                                            </Box>
                                        </Col>
                                        <Col className="md-9">
                                            <Typography>Fair Compensation ({props.bcount} reports total)</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="md-3">
                                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                                <CircularProgress variant="determinate" value={props.cscore} />
                                                <Box
                                                    sx={{
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                    position: 'absolute',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    }}
                                                >
                                                <Typography variant="caption" component="div" color="text.secondary">
                                                {props.cscore}%
                                                </Typography>
                                                </Box>
                                            </Box>
                                        </Col>
                                        <Col className="md-9">
                                            <Typography>Fair Compensation ({props.ccount} reports total)</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="md-3">
                                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                                <CircularProgress variant="determinate" value={props.dscore} />
                                                <Box
                                                    sx={{
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                    position: 'absolute',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    }}
                                                >
                                                <Typography variant="caption" component="div" color="text.secondary">
                                                {props.dscore}%
                                                </Typography>
                                                </Box>
                                            </Box>
                                        </Col>
                                        <Col className="md-9">
                                            <Typography>Fair Compensation ({props.dcount} reports total)</Typography>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="md-4">
                                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                    <CircularProgress variant="determinate" size={200} thickness={6} value={props.total} />
                                    <Box
                                        sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        }}
                                    >
                                        <Typography variant="caption" component="div" color="text.secondary">
                                        ESS: {props.total}%
                                        </Typography>
                                    </Box>
                                </Box>
                            </Col>
                            <Col className="md-4">

                            </Col>
                        </Row>
                    </Container>
                    
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}