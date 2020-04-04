import { Component } from "react";
import MovieCreateForm from "../../../components/movieCreateForm"
import { getMovieById } from "../../../actions";




class EditMovies extends Component {

    // Get query server side 
    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id)
        return { movie } 
    }


    render () {
        const { movie } = this.props
        return (
            <>
                <div className="container" >
                    <h1>Edit the Movie</h1>
                    <MovieCreateForm initialData={movie} /> 
                </div>
            </>
        );
    }
}

export default EditMovies