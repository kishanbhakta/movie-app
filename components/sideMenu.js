import React from 'react';
import { useState } from 'react';
import Modal from './modal';
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";

const SideMenu = (props) => {
    const { categories } = props;

    //access Modal component
    let modal = null;

    const handleCreateMovie = (movie) => { // getting props from /components/movieCreateForm.js

        createMovie(movie).then((movies) => {
            //Close modal after create
            // Because Modal is called in this component is sideMenu is not a child in a child component and reference
            // its props. Access the React.Component when that component is a class component   /components/modals.js
            console.log(JSON.stringify(movies));
        })
    };

    return(
        <div>
            {/*Modal*/}
            <Modal ref={elem => modal = elem} hasSubmit={false}>
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