import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import NavBar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";

// Import getter methods from ../actions
import { getMovies } from "../actions";

const Home = () => {
    // IMPORTANT!!!
    // Getter and Setters to transfer data from async call
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState([]);


    /*
    * The function passed to useEffect will run after the render is committed to the screen.
    *
    * - By default `effects` run after every completed render, but you can choose to fire them
    *   only when certain values have changed
    *
    * -
    */
    useEffect(() => {

        // Access Debugger and remember to `//` when !USING
        debugger

        getMovies().then((movies) => {
            setMovies(movies); // Just calling setMovies causes an infinite loop!
        });
    }, [count]); // add more arg to useEffect()

    return(
        <div>
            <Head>
                <title>Home</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            </Head>
            {/*NAVBAR*/}
            <NavBar />

            {/*BODY*/}
            <div className="home-page">
                <div className="container">
                    <button onClick={() => setCount(count + 1)}>Click Me!</button>
                    <div className="row">
                        <div className="col-lg-3">
                            {/*Utilize props by setting someName={propName}*/}
                            <SideMenu
                                appName={"Movie DB"}/>
                        </div>

                        <div className="col-lg-9">
                            <Carousel />
                            <div className="row">
                                <MovieList movies={movies}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*STYLES*/}
            <style jsx>{`
                .home-page {
                    padding-top: 80px;
                }
            `}
            </style>

            {/*FOOTER*/}
            <Footer />

        </div>
    );
};

export default Home;