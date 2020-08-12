import React from "react"
import Container from "./container.js"

const Youtubeplaylist = props => {
    const src = `https://www.youtube.com/embed/videoseries?list=${props.list_id}`; //PL1pnJRf1rXvib5fpvNOH0jXOeEK8NOrlm
    return (
        <iframe width="560" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    )
}

export default Youtubeplaylist;
