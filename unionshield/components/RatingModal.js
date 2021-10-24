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
              <h5>Rate your employer</h5>
              <button className='close' onClick={this.props.toggle}>&times;</button>
          </ModalHeader>
          <ModalBody>
                <Container>
                    <Row className="sm">
                        <Col>
                            <Button type="button" href="" style={{height: '40px', width : '400px'}} className="mainbutton" outline theme="dark">
                                Butun
                            </Button>
                        </Col>
                        <Col>
                            <Button type="button" href="" style={{height: '40px', width : '400px'}} className="mainbutton" outline theme="dark">
                                Lots
                            </Button>
                            <Button type="button" href="" style={{height: '40px', width : '400px'}} className="mainbutton" outline theme="dark">
                                of
                            </Button>
                            <Button type="button" href="" style={{height: '40px', width : '400px'}} className="mainbutton" outline theme="dark">
                                but
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
        `}</style>
      </>
    );
  }
}

export default RatingModal