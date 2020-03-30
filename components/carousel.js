import React from 'react';

const Carousel = (props) => {

    const { images, movies } = props;

    return(
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                { images.map((image, index) => (
                        <li
                            key={image.id}
                            data-target="#carouselExampleIndicators"
                            data-slide-to={index}
                            className={index === 0 ? 'active' : ''}>

                        </li>
                        )
                    )

                }
            </ol>
            <div className="carousel-inner" role="listbox">
                { images.map((image, index) => (
                        <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}> {/*insert key prop here because a new div is being generated, not a new image*/}
                            <img
                                className="d-block img-fluid"
                                src={image.url}
                                alt={image.name} />
                        </div>
                        )
                    )
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <style jsx>{`
                .carousel-item {
                    max-height: px;
                }
            `}</style>
        </div>

    );
};

export default Carousel;