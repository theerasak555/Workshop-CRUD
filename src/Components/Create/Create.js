import React from 'react';
import Createitem from './Createitem.js'
import { Button, Table } from 'react-bootstrap'

const Create = () => {
    return (
        <div>
        <div className="topnav-button">
        <Button variant="primary" size="sm">Preview</Button>{" "}
        <Button variant="success" size="sm">Save</Button>{" "}
        <Button variant="danger" size="sm">Close</Button>
        </div>
        <nav>
            <ul>
                <Createitem item="Basic Data" tolink="/form"></Createitem>
                <Createitem item="Data" tolink="data"></Createitem>
                <Createitem item={"Note&Attachment"} tolink={"Note&Attachment"}></Createitem>
            </ul>
        </nav>
        </div>
    );
};

export default Create;