import React from 'react';
import {Link} from "react-router-dom";
import './Create.css'

const Createitem = ({item,tolink}) => {
    return (
        <li id={item}>
            <Link to={tolink}>{item}</Link>
        </li>
    );
};

export default Createitem;