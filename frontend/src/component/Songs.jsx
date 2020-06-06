import React, { Component } from 'react';
import '../style/songs.css';
import Slider from "react-slick";
import SongCard from './SongCard';

class Songs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }
    componentDidMount() {
        fetch("/api/songs")
        .then(response => response.json())
        .then(data => {
            this.setState({songs: data});
        })
    }
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
                    {this.state.songs.map((song) => {
                        return <SongCard detail={song} />
                    })}
                </Slider>
            </div>
        );
    }
}

export default Songs;