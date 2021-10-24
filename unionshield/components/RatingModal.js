import React from "react";
import { Modal, ModalBody, ModalHeader, Button, Row, Col, Container } from "shards-react";

class RatingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal className="modal-lg" open={this.props.open} toggle={this.props.toggle}>
          <ModalHeader>
              <h5>Would you like to diagnose any specific section?</h5>
              <button className='close' style={{textalign:"right"}} onClick={this.props.toggle}>&times;</button>
          </ModalHeader>
          <ModalBody>
                <Container>
                    <Row className="sm align-items-center">
                        <Col>
                            <Button type="button" href="" style={{height: '40px', width : '200px'}} className="vertbutton" outline theme="dark">
                                Take Full Survey
                            </Button>
                        </Col>
                        <Col style={{borderLeft:"1px solid black"}}>
                            <Button type="button" href="/faircompensation" style={{height: '40px', width : '200px'}} className="m-2" outline theme="dark">
                                Fair Compensation 
                            </Button>
                            <Button  type="button" href="/healthsafety" style={{height: '40px', width : '200px'}} className="m-2" outline theme="dark">
                                Safety + Health
                            </Button>
                            <Button type="button" href="/workplaceequality" style={{height: '40px', width : '200px'}} className="m-2" outline theme="dark">
                                Workplace Equality
                            </Button>
                            <Button type="button" href="/unionization" style={{height: '40px', width : '200px'}} className="m-2" outline theme="dark">
                                Unionization
                            </Button>
                        </Col>  
                    </Row>
                </Container>
          </ModalBody>
        </Modal>
        <style jsx>{`
            modal{
                
            }
            h5 {
                display: inline;
            }
            button {
                position: absolute;
                right: 4%;
            }
            p {
                font-size: 20px;
                color: black;
            }
            b {
                margin-right: 2%;
            }
            .vertbutton {
                vertical-align: middle;
            }
        `}</style>
      </>
    );
  }
}

export default RatingModal