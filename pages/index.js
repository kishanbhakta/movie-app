import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import NavBar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";

// Import getter methods from ../actions
import { getMovies } from "../actions";

class Home extends React.Component {
    /*
    * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    *
    * Instantiate Network Request from remote endpoint(s) here.
    *
    * You may call setState() immediately in componentDidMount().
    * - It will happen before the browser updates the screen
    * - User will not see the intermediate states and can cause performance issues
    * - Assign initial state in the constructor instead
    *
    * */
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        getMovies().then((movies) => {
            this.setState({movies})
        })
    }

    render() {
        const { movies } = this.state;
        return (
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
    }

};

export default Home;