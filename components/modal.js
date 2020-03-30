// DO NOT IMPORT IF NOT USING
/* ERROR MESSAGE :

        Module parse failed: Unexpected token (1:0)
        You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
        > %!PS-Adobe-3.0
        | %%Creator: (ImageMagick)
        | %%Title: (react)
        
* */
// import React from "../react";

import MovieCreateForm from "./movieCreateForm";

const Modal = (props) => {
    // Set current state to null
    let closeButton = null;

    const submitModal = () => {
        // submit form onClick
        alert('Submitting Modal');
        closeButton.click();
    };



    return (
        <>
            {/*Button trigger modal*/}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Movie
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={submitModal} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;