import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ResultModal = (props) => {
    const [isVisible, setIsVisible] = useState(props.isVisible);
    const toggleVisibility = () => props.setVisibility(!isVisible);

    useEffect(() => {
        setIsVisible(props.isVisible);
    }, [props.isVisible]);

    return (
        <div>
            <Modal isOpen={isVisible} toggle={toggleVisibility}>
               <ModalHeader toggle={toggleVisibility}>Results</ModalHeader> 
               <ModalBody>{props.content}</ModalBody>
               <ModalFooter>
                   <Button color="primary" onClick={toggleVisibility}>Close</Button>
               </ModalFooter>
            </Modal>
        </div>
    )
}

export default ResultModal;