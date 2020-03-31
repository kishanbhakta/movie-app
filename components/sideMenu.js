import React from 'react';
import { useState } from 'react';
import Modal from './modal';
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";
// Introduce count prop as an argument `(props)` and access the attribute by `props.attributeName`
const SideMenu = (props) => {
    const { categories } = props;

    const handleCreateMovie = (movie) => { // getting props from /components/movieCreateForm.js
        //debugger
        // /actions/index.js
        createMovie(movie).then((movies) => {
            //debugger
            console.log(JSON.stringify(movies)); // Resolved movies from /actions/index.js
        })
    };

    return(
        <div>
            {/*Modal*/}
            <Modal hasSubmit={false}>
                {/* 2. hasSubmit is a value set to track the state of MovieCreateForm
                    default is set to false  /components/modal.js  `props.hasSubmit ` */}
                <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
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