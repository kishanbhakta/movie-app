import App from 'next/app';
import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import '../styles/index.scss'

class MovieApp extends App {

    // TODO: execute <-- HERE --> getInitialProps and pass this data to the page
    static async getInitialProps(appContext) {
        /*
        * MovieApp is acting as a wrapper class we have to call all methods associated with each component
        *
        * Look at _app.js and index.js for console.log to understand how this works
        *
        * */
        //console.log('Calling getInitialProps from _app');
        const appProps = await App.getInitialProps(appContext);

        //destructure appProps here so you don't have to call ...appProps.pageProps in component
        return { ...appProps };
    };

    render() {
        // Component hold the page you are navigating to
        const { Component, pageProps } = this.props;

        return (
            <div>
                {/*Head*/}
                <Head>
                    <title>Home</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                </Head>
                {/*NAVBAR*/}
                <NavBar />
                {/*Component*/}
                <div className="base-page">
                    <Component { ...pageProps }/>
                </div>
                {/*FOOTER*/}
                <Footer />
                {/*STYLES*/}
                <style jsx>{`
                    .base-page {
                        padding-top: 100px;
                        padding-bottom: 200px;
                    }
                `}
                </style>
            </div>
        );
    };
}

export default MovieApp;

/*
* NOTES:
* - _app.js file serves as wrapper page for the other components, and is responsible for rendering all the other pages.
* -
*/