import React from 'react'


class MovieList extends React.Component {
    shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text
    };

    renderMovies(movies) {
        return movies.map(movie =>
            (
                <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <p className="card-text">{this.shorten(movie.description, 100)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                        </div>
                    </div>
                </div>
            )
        )
    }

    // render() is the main function THE CONTROLLER
    render() {
        const { movies } = this.props;

        return (
            <React.Fragment>
                { this.renderMovies(movies) }
            </React.Fragment>
        )
    }
}


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