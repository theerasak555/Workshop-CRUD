import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Table } from 'react-bootstrap'
import './Home.css'
import {OrderContext} from '../OrderContext/OrderContext.js'

const Home = () => {
    const [orders,setOrders] = useContext(OrderContext);
    return (
        <div>
            <div className="top-menu">
            <div className="new-btn"><Link to="/form"><Button variant="success" size="sm">New</Button></Link></div>
                <Link to="/form"><Button variant="success" size="sm">+</Button></Link>
            </div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>วันที่เอกเอกสาร</th>
                            <th>เลขที่เอกสาร</th>
                            <th>รหัสผู้ขาย</th>
                            <th>ชื่อผู้ขาย</th>
                            <th>จำนวนเงินทั้งสิ้น</th>
                            <th>สถานะ</th>
                            <th>ผู้รับผิดชอบ</th>
                        </tr>
                    </thead>
                    <tbody>
                        { orders.map(order =>
                            
                        <tr key={order.id}>
                            <td><EditIcon color="primary" />
                                <Link to={"/delete/"+order.id}><DeleteIcon color="secondary" /></Link>
                                </td>
                            <td>{order.date}</td>
                            <td>{order.no}</td>
                            <td>{order.codesale}</td>
                            <td>{order.salename}</td>
                            <td>{order.totalprice}</td>
                            <td>{order.status}</td>
                            <td>{order.dename}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Home;