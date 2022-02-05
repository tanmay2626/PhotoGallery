import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { ErrorOutlineOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion'

const DeleteModal = ({setConfirm,setDelClick}) => {

    const handleConfirm = () =>{
        setConfirm(true)
        setDelClick(false)
    }

    const handleCancel = () =>{
        setConfirm(false)
        setDelClick(false)
    }

  return (
      <motion.div className="backdrop"
       initial={{y:'-100vh'}} animate={{y:'0'}} 
       >
    <Modal.Dialog  className="modal-del">
      <Modal.Body>
      <ErrorOutlineOutlined  sx={{ fontSize: 110 }} />
        <p>Are you sure?</p>
        <Row>
        <Col sm={6} md={6} lg={6}>
         <Button  variant="primary" onClick={handleCancel}>Cancel</Button>  
        </Col>
        <Col sm={6} md={6} lg={6}>
         <Button  variant="danger" onClick={handleConfirm}>Confirm</Button>
        </Col>
        </Row>
      </Modal.Body>
    </Modal.Dialog>
    </motion.div>
  );
};

export default DeleteModal;
