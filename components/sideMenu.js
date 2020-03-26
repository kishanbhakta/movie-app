import React from 'react';
import { useState } from 'react';
// Introduce count prop as an argument `(props)` and access the attribute by `props.attributeName`
const SideMenu = (props) => {
    return(
        <div>
            {/* appName={"Movie DB"} */}
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
        </div>
    );
};

export default SideMenu;