import React from "react"
import Youtube from "./youtube"

const YoutubeItem = (props) => {
    return (
        <div id={props.videoId}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Youtube id={props.videoId} />
        </div>
    );
}

export default YoutubeItem;
