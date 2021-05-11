import React from 'react';
import {Link} from "react-router-dom";
import './Create.css'

const Createitem = ({item,to}) => {
    return (
        <li id={item}>
            <Link to={to}>{item}</Link>
        </li>
    );
};

export default Createitem;