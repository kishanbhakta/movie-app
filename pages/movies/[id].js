
// Get input from url
import { useRouter } from 'next/router';

const Movie = () => {
    // call instance of router
    const router =  useRouter();
    // This is the file name or slug name, in this case we called it `[id]`
    const { id } = router.query;

    // SET in /components/movieList.js
    return (
        <div className="container">
            <h1>Movie with id: { id }</h1>
        </div>
    );
};

export default Movie;