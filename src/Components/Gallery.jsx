import React from 'react'

function Gallery() {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <div className="slider-img slider-one">
                        <div className="carousel-caption tan text-light">
                            <h5>Nelson Mandela</h5>
                            <p>"Education is the most powerful weapon which you can use to change the world.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <div className="slider-img slider-two">
                        <div className="carousel-caption tan text-light">
                            <h5>William Butler Yeats</h5>
                            <p>Education is not the filling of a pail, but the lighting of a fire.</p>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div className="slider-img slider-three">
                        <div className="carousel-caption tan text-light">
                            <h5> B.B. King  </h5>
                            <p>The beautiful thing about learning is that no one can take it away from you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Gallery
