import React,{useContext} from 'react';
import {useParams} from 'react-router-dom'
import {OrderContext} from '../OrderContext/OrderContext.js'
import {Link} from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import './Delete.css'

const Delete = () => {
  const [orders, setOrders] = useContext(OrderContext); 
  const {Inform_id} = useParams();

  const deleteUser = (Inform_id) => {
    const order = orders.filter((order) => order.Inform_id != Inform_id);
    setOrders([...order]);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>คุณต้องการลบ ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="delete__btn" variant="info">ยกเลิก</Button>{" "}
            <Button onClick={() => deleteUser(Inform_id)} variant="danger">ลบ</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;