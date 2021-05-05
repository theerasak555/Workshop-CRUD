import React, { useState, createContext } from "react";

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  
    const [orders, setOrders] = useState([
        {id:1,date:"20/04/2561",no:"123456",codesale:"123456",salename:"ธีรศักดิ์ พันสาย",totalprice:25000,status:"Open",dename:"พรอรุณ เพ็งพิทักษ์"},
        {id:2,date:"20/04/2561",no:"123456",codesale:"123456",salename:"ธีรศักดิ์ พันสาย",totalprice:25000,status:"Open",dename:"พรอรุณ เพ็งพิทักษ์"},
        {id:3,date:"20/04/2561",no:"123456",codesale:"123456",salename:"ธีรศักดิ์ พันสาย",totalprice:25000,status:"Open",dename:"พรอรุณ เพ็งพิทักษ์"}
  ]);

  return (
    <OrderContext.Provider value={[orders, setOrders]}>
      {props.children}
    </OrderContext.Provider>
  );
};


