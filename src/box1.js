import React, { Component } from 'react';
import './App.css';
import {observable} from "mobx";
import {observer} from "mobx-react";


const Box1 = ({store}) => {

    return (
        <div className="counter_area">
            <div className="counter_box"> count: {store.count}  </div>
        </div>
    )

}

export default Box1;