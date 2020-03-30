import React from 'react';
import { useState } from 'react';
import Modal from './modal';
import MovieCreateForm from "./movieCreateForm";
// Introduce count prop as an argument `(props)` and access the attribute by `props.attributeName`
const SideMenu = (props) => {
    const { categories } = props;
    return(
        <div>
            {/*Modal*/}
            <Modal>
                {/* Containment within another component and can
                    receive as children inside props object
                     {props.children} in parent component  */}
                <MovieCreateForm />
            </Modal>
            {/* appName={"Movie DB"} */}
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                { categories.map(category => (
                        <a
                            key={category.id}
                            href="#"
                            className="list-group-item">{category.name}</a>
                    )
                )
                }

            </div>
        </div>
    );
};

export default SideMenu;