import React, { useContext, useState } from 'react';
import './Create.css'
import { Form, Col, Table, Button } from 'react-bootstrap'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { OrderContext } from '../OrderContext/OrderContext.js'
import { ProductContext } from '../ProductContext/ProductContext.js'
import { Link } from 'react-router-dom'

const Create = () => {

    //input
    const [codesale, setCodesale] = useState("");
    const [no, setNo] = useState("");
    const [date, setDate] = useState("");
    const [saleName, setSalename] = useState("");
    const [wantDate, setWantdate] = useState("");
    const [endDate, setEnddate] = useState("");
    const [contractName, setContractname] = useState("");
    const [credit, setCredit] = useState("");
    const [sentDate, setSentdate] = useState("");
    const [bill, setBill] = useState("");

    const [productNo, setProductno] = useState("");
    const [productName, setProductname] = useState("");
    const [unit, setUnit] = useState("");
    const [store, setStore] = useState("");
    const [whereStore, setWherestote] = useState("");
    const [quantity, setQuantity] = useState("");
    const [priceUnit, setPriceunit] = useState("");
    const [discount, setDiscount] = useState("");
    const [price, setPrice] = useState("");

    const [orders, setOrders] = useContext(OrderContext);
    const [products, setProducts] = useContext(ProductContext);

    //update
    const updateCodesale = (e) => {
        setCodesale(e.target.value);
    };
    const updateNo = (e) => {
        setNo(e.target.value);
    };
    const updateDate = (e) => {
        setDate(e.target.value);
    };
    const updateSalename = (e) => {
        setSalename(e.target.value);
    };
    const updateWantdate = (e) => {
        setWantdate(e.target.value);
    };
    const updateEnddate = (e) => {
        setEnddate(e.target.value);
    };
    const updateContractname = (e) => {
        setContractname(e.target.value);
    };
    const updateCredit = (e) => {
        setCredit(e.target.value);
    };
    const updateSentdate = (e) => {
        setSentdate(e.target.value);
    };
    const updateBill = (e) => {
        setBill(e.target.value);
    };
    const updateProductno = (e) => {
        setProductno(e.target.value);
    };
    const updateProductname = (e) => {
        setProductname(e.target.value);
    };
    const updateUnit = (e) => {
        setUnit(e.target.value);
    };
    const updateStore = (e) => {
        setStore(e.target.value);
    };
    const updateWherestore = (e) => {
        setWherestote(e.target.value);
    };
    const updateQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const updatePriceunit = (e) => {
        setPriceunit(e.target.value);
    };
    const updateDiscount = (e) => {
        setDiscount(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addOrders = e => {
        e.preventDefault(alert("บันทึกเรียบร้อย!"));
        setOrders([...orders, { Sale_id: codesale, Inform_id: no, Inform_date: date, Sale_name: saleName, Want_date: wantDate, End_date: endDate, Contract: contractName, Credit: credit, Sent_date: sentDate, Bill: bill }])
    };console.log(orders)

    return (
        <div className="basicdata">
            <div className="topnav-menu">
                <Link to="/"><h5>{"< New Purchase"}</h5></Link>
                <div className="topnav-button">
                    <Button variant="primary" size="sm">Preview</Button>{" "}
                    <Button className="action_btn" variant="success" size="sm" type="submit" onClick={addOrders}>Save</Button>{" "}
                    <Button variant="danger" size="sm">Close</Button>
                </div>
            </div>
            <div className="form-crud">
                <Form onSubmit={addOrders}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column sm="1"><span style={{ color: "red" }}>*</span>รหัสผู้ขาย</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    type="text"
                                    name="codesale"
                                    value={codesale}
                                    onChange={updateCodesale}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ color: "red" }}>*</span>เลขที่เอกสาร</Form.Label>
                            <Col >
                                <Form.Control
                                    type="text"
                                    name="no"
                                    value={no}
                                    onChange={updateNo}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ color: "red" }}>*</span>วันที่เอกสาร</Form.Label>
                            <Col >
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={date}
                                    onChange={updateDate}
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
                                    onChange={updateSalename}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>ต้องการภายใน (วัน)</Form.Label>
                            <Col >
                                <Form.Control
                                    type="number"
                                    name="wantDate"
                                    value={wantDate}
                                    onChange={updateWantdate}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>วันที่สิ้นสุด</Form.Label>
                            <Col >
                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    value={endDate}
                                    onChange={updateEnddate}
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
                                    onChange={updateContractname}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>เครดิต (วัน)</Form.Label>
                            <Col >
                                <Form.Control
                                    type="number"
                                    name="credit"
                                    value={credit}
                                    onChange={updateCredit}
                                />
                            </Col>
                            <Form.Label column sm="1"><span style={{ visibility: "hidden" }}>*</span>กำหนดส่งของ</Form.Label>
                            <Col >
                                <Form.Control
                                    type="date"
                                    name="sentDate"
                                    value={sentDate}
                                    onChange={updateSentdate}
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
                                    onChange={updateBill}
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

export default Create;