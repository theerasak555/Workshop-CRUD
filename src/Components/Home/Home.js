import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Table, Dropdown, DropdownButton, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import './Home.css'
import { OrderContext} from '../OrderContext/OrderContext.js'
import {ProductContext} from '../ProductContext/ProductContext.js'

const Home = () => {
    const [orders, setOrders] = useContext(OrderContext);
    const [products,setProducts] =useContext(ProductContext);

    return (
        <div className="home">
            <div className="top-menu">
                <div className="new-btn"><Link to="/create"><Button variant="success" size="sm">New</Button></Link></div>
                <Link to="/form"><Button variant="success" size="sm">+</Button></Link>
            </div><hr/>
            <div className="topnav-actionmenu">
                <div className="sort-menu">
                    <div className="mb-2">
                        {[DropdownButton].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="outline-secondary"
                                title="All Order"
                            >
                                <Dropdown.Item eventKey="1">ชื่อผู้ขาย</Dropdown.Item>
                                <Dropdown.Item eventKey="2">เลขที่เอกสาร</Dropdown.Item>
                                <Dropdown.Item eventKey="3">วันที่เอกเอกสาร</Dropdown.Item>
                            </DropdownType>
                        ))}
                    </div>
                    <div>
                        <InputGroup size="sm" className="mb-2">
                            <FormControl
                                type="text"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" size="sm"><SearchIcon style={{ fontSize: 16 }} /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
                <div className="action-menu">
                    <div className="btn-act">
                        <Button size="sm" variant="outline-primary"><EditIcon style={{ fontSize: 16 }}/></Button>
                        <Button size="sm" variant="outline-primary"><DeleteIcon style={{ fontSize: 16 }}/></Button>
                    </div>
                    <div className="mb-2">
                        {[DropdownButton].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="sm"
                                variant="outline-primary"
                                title="Action"
                            >
                                <Dropdown.Item eventKey="1">Delete</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Add</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Edit</Dropdown.Item>
                            </DropdownType>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Table responsive="sm md">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
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
                        {orders.map(order =>
                            <tr key ={`${order.id+order.Inform_id}`}>
                                <td></td>
                                <td>
                                    <Link to={"/edit/"+order.Inform_id}><EditIcon color="primary"/></Link>
                                    <Link to={"/delete/" + order.Inform_id}><DeleteIcon color="secondary"/></Link>
                                </td>
                                <td>{order.Inform_date}</td>
                                <td>{order.Inform_id}</td>
                                <td>{order.Sale_id}</td>
                                <td>{order.Sale_name}</td>
                                <td>{order.total}</td>
                                <td>{order.Status}</td>
                                <td>{order.Contract}</td>
                            </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Home;