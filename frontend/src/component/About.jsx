import React, { Component } from 'react';
import '../style/about.css';

class About extends Component {
    render() {
        return (
            <div className="about-section">
                <h2 style={{color: "black"}}>About</h2>
                <p>
                    Miki is known from hit songs such as her debut and immediate breakthrough 
                    "Mayonaka no Door (真夜中のドア) / Stay with me" which has been covered by numerous artists, 
                    "Neat na gogo san-ji (ニートな午後3時)" and "The Winner" among others. She received a number of best new artist awards. 
                    During her music career she released 8 singles, and 12 albums. Despite her work being mainly domestic, 
                    outside of Japan she was also known for her work as an anime singer and songwriter, 
                    although recently with the popularization of city pop her other work has gained overseas fans as well. 
                    From the 1990s forwards she especially worked on anime soundtracks and music for commercials. 
                    She also had some international work with Motown jazz fusion group Dr. Strut in Los Angeles (becoming a backing band in the album recordings for "Cupid"), 
                    Tokyo and Osaka (Hall concerts), later releasing a jazz cover album entitled "BLUE EYES". Her range was that of a mezzo-soprano.
                </p>
                <p>
                In 2001 she received a diagnosis for cancer and began treatment, but on October 7, 2004 she passed away at the age of 44 due to complications from uterine cervix cancer.
                </p>
                <p>(Taken from WikiPedia)</p>
            </div>
        );
    }
}

export default About;