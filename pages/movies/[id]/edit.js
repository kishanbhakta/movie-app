import { Component } from "react";
import MovieCreateForm from "../../../components/movieCreateForm"
import { getMovieById } from "../../../actions";




class EditMovies extends Component {

    // Get query server side 
    static getInitialProps({query}) {
        return {query}
    }

    state = {
        movie: {}
    }

    componentDidMount() {
        const{ id } = this.props.query
        getMovieById(id).then(movie => {
            this.setState({movie})
        })
    }

    render () {
        return (
            <>
                <div className="container" >
                    <h1>Edit the Movie</h1>
                    { JSON.stringify(this.state.movie) }
                    <MovieCreateForm />
                </div>
            </>
        );
    }
}

export default EditMovies