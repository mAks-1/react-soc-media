import React from "react";
import './videos.css';
import '../../../style.css';
import footballImg from '../../../assets/img-for-videos/football.jpg';
import musicImg from '../../../assets/img-for-videos/music.jpg';
import spidermanImg from '../../../assets/img-for-videos/spiderman.jpg';
import flowersImg from '../../../assets/img-for-videos/flowers.jpg';
import despasitoImg from '../../../assets/img-for-videos/despasito.jpg';
import godOfWarImg from '../../../assets/img-for-videos/god-of-war.jpg';
import dotaImg from '../../../assets/img-for-videos/dota.png';
import valorantImg from '../../../assets/img-for-videos/valorant.jpg';
import simpleImg from '../../../assets/img-for-videos/simpleCS.jpg';
import play from '../../../assets/play-button.png';
import Video from "./Video/Video";

//
// let videos = [
//     {href: "https://www.youtube.com/results?search_query=football", img: footballImg , id: 1},
//     {href: "https://www.youtube.com/watch?v=jfKfPfyJRdk", img: musicImg , id: 2},
//     {href: "https://www.youtube.com/watch?v=t06RUxPbp_c", img: spidermanImg , id: 3},
//     {href: "https://www.youtube.com/watch?v=aS-LUW5Jim0", img: flowersImg , id: 4},
//     {href: "https://www.youtube.com/watch?v=kJQP7kiw5Fk", img: despasitoImg , id: 5},
//     {href: "https://www.youtube.com/watch?v=hfJ4Km46A-0", img: godOfWarImg , id: 6},
//     {href: "https://www.youtube.com/watch?v=UhQmAfzaw7c", img: dotaImg , id: 7},
//     {href: "https://www.youtube.com/watch?v=STho79wEp3o", img: valorantImg , id: 8},
//     {href: "https://www.youtube.com/watch?v=R0PFpJZEzcE", img: simpleImg , id: 9}
// ];
//
// let videosElement = videos.map(video => <Video img={video.img}  key={video.id} href={video.href}/>)

const Videos = () => {
    return (
        <div className="videos-wrapper">
            <div className="block">
                <h1>Videos: 9</h1>
            </div>
            <div className="videos-block">
                <div>
                    <a target="_blank" href="https://www.youtube.com/results?search_query=football">
                        <img src={footballImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=jfKfPfyJRdk">
                        <img src={musicImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=t06RUxPbp_c">
                        <img src={spidermanImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=aS-LUW5Jim0">
                        <img src={flowersImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=kJQP7kiw5Fk">
                        <img src={despasitoImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=hfJ4Km46A-0">
                        <img src={godOfWarImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=UhQmAfzaw7c">
                        <img src={dotaImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=STho79wEp3o">
                        <img src={valorantImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/watch?v=R0PFpJZEzcE">
                        <img src={simpleImg} alt=""/>
                        <img className="play" src={play} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Videos;