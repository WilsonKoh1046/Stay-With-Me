import React, { Component } from 'react';
import '../style/landing.css';
import Slider from "react-slick";

class Landing extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            className: "landing-slider"
          };
        return (
            <Slider {...settings}>
                <div>
                    <img src="/miki-matsubara-pic1.jpg" alt="miki matsubara" />
                </div>
                <div>
                    <img src="/miki-matsubara-pic2.jpg" alt="miki matsubara" />
                </div>
                <div>
                    <img src="/miki-matsubara-pic3.jpg" alt="miki matsubara" />
                </div>
                <div>
                    <img src="/miki-matsubara-pic4.jpg" alt="miki matsubara" />
                </div>
            </Slider>
        );
    }
}

export default Landing;