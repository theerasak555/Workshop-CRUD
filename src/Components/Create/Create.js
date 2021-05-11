import React from 'react';
import Createitem from './Createitem.js'
import { Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Create = () => {
    return (
        <div className="create">
        <div className="topnav-menu">
            <h5>{"< New Purchase"}</h5>
        <div className="topnav-button">
        <Button variant="primary" size="sm">Preview</Button>{" "}
        <Link to="/"><Button variant="success" size="sm">Save</Button></Link>{" "}
        <Button variant="danger" size="sm">Close</Button>
        </div>
        </div>
       
        <nav>
            <ul>
                <Createitem item="Basic Data" to="/form/basicdata"></Createitem>
                <Createitem item="Data" to="data"></Createitem>
                <Createitem item={"Note&Attachment"} to={"Note&Attachment"}></Createitem>
            </ul>
        </nav>
        </div>
    );
};

export default Create;