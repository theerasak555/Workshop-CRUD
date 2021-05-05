import React,{useContext} from 'react';
import {useParams} from 'react-router-dom'
import {OrderContext} from '../OrderContext/OrderContext.js'
import {Link} from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import './Delete.css'

const Delete = () => {
    const [orders,setOrders] = useContext(OrderContext);
    const {id} =useParams();
  console.log(orders);

    const deleteORder = (id) =>{
    const order = orders.filter(order => order.id != id);
        setOrders(order) 
} 
    return (
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>คุณแน่ใจที่จะลบ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="delete__btn" variant="info">ยกเลิก</Button>{" "}
            <Button onClick={()=> deleteORder(id)} variant="danger">
              ลบ
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    );
};

export default Delete;