import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";

class RatingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal open={this.props.open} toggle={this.props.toggle}>
          <ModalHeader>
              <h5>title</h5>
              <button className='close' onClick={this.props.toggle}>&times;</button>
          </ModalHeader>
          <ModalBody>
              
          </ModalBody>
        </Modal>
        <style jsx>{`
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