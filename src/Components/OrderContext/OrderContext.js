import React, { useState, createContext } from "react";

export const OrderContext = createContext();

export const OrderProvider = (props) => {

  const [orders, setOrders] = useState([
    {
      id: "1",
      Order_id: "60108-001",
      Sale_id: "VD6108-001",
      Inform_id: "P06108-002",
      Inform_date: "06/03/2561",
      Sale_name: "บริษัท ไทย จำกัด",
      Want_date: "7",
      End_date: "13/06/2561",
      Contract: "นายธีรศักดิ์ พันสาย",
      Credit: "15",
      Sent_date: "13/08/2561",
      Bill: "QU6108-001",
      Status: "Open",
      total: "40397.85"
    },
    {
      id: "2",
      Order_id: "60108-002",
      Sale_id: "VD6108-002",
      Inform_id: "P06108-003",
      Inform_date: "06/03/2561",
      Sale_name: "บริษัท จีน จำกัด",
      Want_date: "7",
      End_date: "13/06/2561",
      Contract: "นายธีรศักดิ์ พันหนึ่ง",
      Credit: "15",
      Sent_date: "13/08/2562",
      Bill: "QU6108-002",
      Status: "Open",
      total: "40397.85"
    },
    {
      id: "3",
      Order_id: "60108-003",
      Sale_id: "VD6108-003",
      Inform_id: "P06108-004",
      Inform_date: "06/03/2561",
      Sale_name: "บริษัท ลาว จำกัด",
      Want_date: "7",
      End_date: "13/06/2561",
      Contract: "นายธีรศักดิ์ พันสอง",
      Credit: "15",
      Sent_date: "13/08/2563",
      Bill: "QU6108-003",
      Status: "Open",
      total: "40397.85"
    },
    {
      id: "4",
      Order_id: "60108-004",
      Sale_id: "VD6108-004",
      Inform_id: "P06108-005",
      Inform_date: "06/03/2561",
      Sale_name: "บริษัท เวียดนาม จำกัด",
      Want_date: "7",
      End_date: "13/06/2561",
      Contract: "นายธีรศักดิ์ พันสาม",
      Credit: "15",
      Sent_date: "13/08/2564",
      Bill: "QU6108-004",
      Status: "Open",
      total: "40397.85"
    }
  ]);

  return (
    <OrderContext.Provider value={[orders, setOrders]}>
      {props.children}
    </OrderContext.Provider>
  );
};


