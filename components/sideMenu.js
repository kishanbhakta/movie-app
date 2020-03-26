import React from 'react';
import { useState } from 'react';
// Introduce count prop as an argument `(props)` and access the attribute by `props.attributeName`
const SideMenu = (props) => {
    return(
        <div>
            {/* clickHandler={() => { console.log("Check out the count in the console: " + {count});}} */}
            <button onClick={props.clickHandler}>Click ME!</button>

            {/* appName={"Movie DB"} */}
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
            <div>
                {/* <SideMenu whatEverIWant={count}/> */}
                <h1>{props.whatEverIWant}</h1>
            </div>
        </div>
    );
};

export default SideMenu;