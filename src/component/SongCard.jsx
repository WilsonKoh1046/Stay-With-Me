import React, { Component } from 'react';
import '../style/songs.css';

class SongCard extends Component {
    render() {
        return (
            <div className="song-card">
                <h3>~ {this.props.name} ~</h3>
                <a href={this.props.fullSongList[this.props.ytlinkIndex]} rel="noopener noreferrer" target="_blank">Listen Now!</a>
            </div>
        );
    }
}

export default SongCard;