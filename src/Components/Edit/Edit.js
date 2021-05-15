import React, { useContext, useState } from 'react';
import './Edit.css'
import { OrderContext } from '../OrderContext/OrderContext.js'
import { useParams } from 'react-router-dom'
import { Form, Col, Table, Button } from 'react-bootstrap'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { ProductContext } from '../ProductContext/ProductContext.js'
import { Link } from 'react-router-dom'

const Edit = () => {
    const [orders, setOrders] = useContext(OrderContext);
    const { Inform_id } = useParams();

    const order = orders.filter((order) =>
        order.Inform_id == Inform_id);console.log(order)

    //input
    const [codesale, setCodesale] = useState(order[0].Sale_id);
    const [no, setNo] = useState(order[0].Inform_id);
    const [date, setDate] = useState(order[0].Inform_date);
    const [saleName, setSalename] = useState(order[0].Sale_name);
    const [wantDate, setWantdate] = useState(order[0].Want_date);
    const [endDate, setEnddate] = useState(order[0].End_date);
    const [contractName, setContractname] = useState(order[0].Contract);
    const [credit, setCredit] = useState(order[0].Credit);
    const [sentDate, setSentdate] = useState(order[0].Sent_date);
    const [bill, setBill] = useState(order[0].Bill);

    {/*const [productNo, setProductno] = useState(order[0].productNo);
    const [productName, setProductname] = useState(order[0].productName);
    const [unit, setUnit] = useState(order[0].unit);
    const [store, setStore] = useState(order[0].store);
    const [whereStore, setWherestote] = useState(order[0].whereStore);
    const [quantity, setQuantity] = useState(order[0].quantity);
    const [priceUnit, setPriceunit] = useState(order[0].priceUnit);
    const [discount, setDiscount] = useState(order[0].discount);
    const [price, setPrice] = useState(order[0].price);*/}

    //edit
    const editCodesale = (e) => {
        setCodesale(e.target.value);
        const edited_codesale = codesale;
        order[0].Sale_id = edited_codesale;
    };
    const editNo = (e) => {
        setNo(e.target.value);
        const edited_no = no;
        order[0].Inform_id = edited_no;
    };
    const editDate = (e) => {
        setDate(e.target.value);
        const edited_date = date;
        order[0].Inform_date = edited_date;
    };
    const editSalename = (e) => {
        setSalename(e.target.value);
        const edited_saleName = saleName;
        order[0].Sale_name = edited_saleName;
    };
    const editWantdate = (e) => {
        setWantdate(e.target.value);
        const edited_wantDate = wantDate;
        order[0].Want_date = edited_wantDate;
    };
    const editEnddate = (e) => {
        setEnddate(e.target.value);
        const edited_endDate = endDate;
        order[0].End_date = edited_endDate;
    };
    const editContractname = (e) => {
        setContractname(e.target.value);
        const edited_contractName = contractName;
        order[0].Contract = edited_contractName;
    };
    const editCredit = (e) => {
        setCredit(e.target.value);
        const edited_credit = credit;
        order[0].Credit = edited_credit;
    };
    const editSentdate = (e) => {
        setSentdate(e.target.value);
        const edited_sentDate = sentDate;
        order[0].Sent_date = edited_sentDate;
    };
    const editBill = (e) => {
        setBill(e.target.value);
        const edited_bill = bill;
        order[0].Bill = edited_bill;
    };
    {/*const editProductno = (e) => {
        setProductno(e.target.value);
        const edited_productNo = productNo;
        order[0].productNo = edited_productNo;
    };
    const editProductname = (e) => {
        setProductname(e.target.value);
        const edited_productName = productName;
        order[0].productName = edited_productName;
    };
    const editUnit = (e) => {
        setUnit(e.target.value);
        const edited_unit = unit;
        order[0].unit = edited_unit;
    };
    const editStore = (e) => {
        setStore(e.target.value);
        const edited_store = store;
        order[0].store = edited_store;
    };
    const editWherestore = (e) => {
        setWherestote(e.target.value);
        const edited_whereStore = whereStore;
        order[0].whereStore = edited_whereStore;
    };
    const editQuantity = (e) => {
        setQuantity(e.target.value);
        const edited_quantity = quantity;
        order[0].quantity = edited_quantity;
    };
    const editPriceunit = (e) => {
        setPriceunit(e.target.value);
        const edited_priceUnit = priceUnit;
        order[0].priceUnit = edited_priceUnit;
    };
    const editDiscount = (e) => {
        setDiscount(e.target.value);
        const edited_discount = discount;
        order[0].discount = edited_discount;
    };
    const editPrice = (e) => {
        setPrice(e.target.value);
        const edited_price = price;
        order[0].price = edited_price;
    };*/}

    const editOrder = (e) => {
        e.preventDefault();
        setOrders([...orders])
    }; console.log(editOrder)

    return (
        <div className="basicdata">
            <div className="topnav-menu">
                <Link to="/"><h5>{"< New Purchase"}</h5></Link>
                <div className="topnav-button">
                    <Button variant="primary" size="sm">Preview</Button>{" "}
                    <Button className="action_btn" variant="success" size="sm" type="submit" onSubmit={()=> editOrder}>Save</Button>{" "}
                    <Button variant="danger" size="sm">Close</Button>
                </div>
            </div>
            <div className="form-crud">
                <Form>
                    <Form.Group>
                        <Form.Label>
                            <h1>No : {order[0].Inform_id}</h1>
                        </Form.Label>
                        <Form.Row>
                            <Form.Label column sm="1"><span style={{ color: "red" }}>*</span>รหัสผู้ขาย</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="text"
                                    name="codesale"
                                    value={codesale}
                                    onChange={editCodesale}
                                    placeholder={order[0].Sale_id}
                                     />
                            </Col>
                            <Form.Label column sm="1"><span style={{ color: "red" }}>*</span>เลขที่เอกสาร</Form.Label>
                            <Col >
                                <Form.Control
                                    type="text"
                                    name="no"
                                    value={no}
                                    onChange={editNo}
                                    placeholder={order[0].Inform_id}
                                    
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ color: "red" }}>*</span>วันที่เอกสาร</Form.Label>
                            <Col >
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={date}
                                    onChange={editDate}
                                    placeholder={order[0].Inform_date}
                                    
                                />
                            </Col>
                        </Form.Row><br />
                        <Form.Row>

                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>ชื่อผู้ขาย</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="text"
                                    name="saleName"
                                    value={saleName}
                                    onChange={editSalename}
                                    placeholder={order[0].Sale_name}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>ต้องการภายใน (วัน)</Form.Label>
                            <Col >
                                <Form.Control
                                    type="number"
                                    name="wantDate"
                                    value={wantDate}
                                    onChange={editWantdate}
                                    placeholder={order[0].Want_date}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>วันที่สิ้นสุด</Form.Label>
                            <Col >
                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    value={endDate}
                                    onChange={editEnddate}
                                    placeholder={order[0].End_date}
                                />
                            </Col>
                        </Form.Row><br />
                        <Form.Row>

                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>ผู้ติดต่อ</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="text"
                                    name="contractName"
                                    value={contractName}
                                    onChange={editContractname}
                                    placeholder={order[0].Contract}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>เครดิต (วัน)</Form.Label>
                            <Col >
                                <Form.Control
                                    type="number"
                                    name="credit"
                                    value={credit}
                                    onChange={editCredit}
                                    placeholder={order[0].Credit}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>กำหนดส่งของ</Form.Label>
                            <Col >
                                <Form.Control
                                    type="date"
                                    name="sentDate"
                                    value={sentDate}
                                    onChange={editSentdate}
                                    placeholder={order[0].Sent_date}
                                />
                            </Col>
                        </Form.Row><br />
                        <Form.Row>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>ใบเสนอราคาอ้างอิง</Form.Label>
                            <Col sm="2">
                                <Form.Control
                                    type="text"
                                    name="bill"
                                    value={bill}
                                    onChange={editBill}
                                    placeholder={order[0].Bill}
                                />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
            </div>
            <div className="detail-price">
                <p>รายการสินค้า</p>
                <div className="action-menu">
                    <Button variant="light"><AddIcon />เพิ่มสินค้า</Button>
                    <Button variant="light"><PlaylistAddIcon />แทรกสินค้า</Button>
                    <Button variant="light"><DeleteIcon /></Button>
                </div>
            </div>
            <div className="table-responsive">
                <Table size="sm" responsive="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>No.</th>
                            <th>รหัสสินค้า</th>
                            <th style={{ width: "30%" }}>ชื่อสินค้า</th>
                            <th>หน่วยนับ</th>
                            <th>คลัง</th>
                            <th>ที่เก็บ</th>
                            <th>จำนวน</th>
                            <th>ราคา/หน่วย</th>
                            <th>ส่วนลด</th>
                            <th>จำนวนเงิน</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1</td>
                            <td>
                                <Form>
                                    <Form.Row>
                                        <Col sm="12">
                                            <Form.Control
                                                type="text"
                                                name="productNo"
                                            //value={productNo}
                                            //onChange={updateProductno}
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Form.Row>
                                        <Col sm="12">
                                            <Form.Control
                                                type="text"
                                                name="productName"
                                            //value={productName}
                                            //onChange={updateProductname}
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Form.Row>
                                        <Col sm="12">
                                            <Form.Control
                                                type="text"
                                                name="unit"
                                            //value={unit}
                                            //onChange={updateUnit}
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="text"
                                            name="store"
                                        //value={store}
                                        //onChange={updateStore}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="text"
                                            name="whereStore"
                                        //value={whereStore}
                                        //onChange={updateWherestore}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="number"
                                            name="quantity"
                                        //value={quantity}
                                        //onChange={updateQuantity}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="number"
                                            name="priceUnit"
                                        //value={priceUnit}
                                        //onChange={updatePriceunit}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form></td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="text"
                                            name="discount"
                                        //value={discount}
                                        //onChange={updateDiscount}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="number"
                                            name="price"
                                        //value={price}
                                        //onChange={updatePrice}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>2</td>
                            <td>
                                <Form>
                                    <Form.Row>
                                        <Col sm="12">
                                            <Form.Control
                                                type="text"
                                                name="productNo"
                                            //value={productNo}
                                            //onChange={updateProductno}
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Form.Row>
                                        <Col sm="12">
                                            <Form.Control
                                                type="text"
                                                name="productName"
                                            //value={productName}
                                            //onChange={updateProductname}
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <Form.Row>
                                        <Col sm="12">
                                            <Form.Control
                                                type="text"
                                                name="unit"
                                            //value={unit}
                                            //onChange={updateUnit}
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="text"
                                            name="store"
                                        //value={store}
                                        //onChange={updateStore}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="text"
                                            name="whereStore"
                                        //value={whereStore}
                                        //onChange={updateWherestore}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="number"
                                            name="quantity"
                                        //value={quantity}
                                        //onChange={updateQuantity}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="number"
                                            name="priceUnit"
                                        //value={priceUnit}
                                        //onChange={updatePriceunit}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form></td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="text"
                                            name="discount"
                                        //value={discount}
                                        //onChange={updateDiscount}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form>
                            </td>
                            <td><Form>
                                <Form.Row>
                                    <Col sm="12">
                                        <Form.Control
                                            type="number"
                                            name="price"
                                        //value={price}
                                        //onChange={updatePrice}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form></td>
                        </tr>
                        <tr>
                            <td rowSpan="6"></td>
                            <td rowSpan="6"></td>
                            <td rowSpan="6"></td>
                            <td rowSpan="6"></td>
                            <td rowSpan="6"></td>
                            <td rowSpan="6"></td>
                            <td colSpan="4">รวมเงิน</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td colSpan="3">ส่วนลดการค้า</td>
                            <td>10%</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td colSpan="4">เงินกาอนหักภาษี</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td colSpan="4">ฐานภาษี</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>ภาษีมูลค่าเพิ่ม</td>
                            <td colSpan="2">PO-EX7</td>
                            <td>7.00</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td colSpan="4">จำนวนเงินทั้งสิ้น</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Edit;