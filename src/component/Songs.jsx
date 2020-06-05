import React, { Component } from 'react';
import '../style/songs.css';
import songs from '../songs';
import Slider from "react-slick";

class Songs extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 5000,
            className: "songs-slider"
          };
        return (
            <div className="songs-section">
                <h2 style={{color: "black"}}>Songs</h2>
                <h3>Enjoy The Sweetness Of Miki's Beautiful Voice</h3>
                <Slider {...settings}>
                    {songs.songList.map((song, index) => {
                        return (<div className="song-card">
                            <h3>~ {song} ~</h3>
                            <a href={songs.songYTLink[index]} rel="noopener noreferrer" target="_blank">Listen Now!</a>
                        </div>)
                    })}
                </Slider>
            </div>
        );
    }
}

export default Songs;