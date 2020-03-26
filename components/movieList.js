import  React from 'react';

/*
* React.Fragment creates a node not registered by the DOM but can be keyed
* */
class MovieList extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           count: 0
       };
       // .bind(this) binds the this context to the function !written as ` functionName => () {}`
       this.increment = this.increment.bind(this);
   };

    increment (){
        // Utilize State inside Component
        const { count } = this.state;

        // Access Debugger and remember to `//` when !USING
        //debugger

        // Using React.Component functions to access and mutate the state property
        this.setState({
            count: count + 1,
        })
    };

    /*
    *
    * NOTICE THE DIFFERENCE IN HOW THE INCREMENT AND DECREMENT FUNCTIONS ARE DECLARED
    *   - CHECKOUT THE CONSTRUCTOR
    *   - HOW IS IT UTILIZED?
    *
    * */
    decrement = () => {
        const { count } = this.state;

        this.setState({
            count: count - 1,
        })
    };


    render() {
        // Access Debugger and remember to `//` when !USING
        // debugger

        return (
            <React.Fragment>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Item One</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Item Two</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Item Three</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Item Four</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Item Five</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Item Six</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

};

export default MovieList;

/*
***Summary***
`State` is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component.

`Props` make components reusable by giving components the ability to receive data from the parent component in the form of props.

	`this.prop.propertyName` to access the attributes

	pass as argument `(propertyName)` ========> utilize in code `${propertyName}`

***Common Mistakes***
!USING arrow functions to continue to bind the this context to the function.
*/