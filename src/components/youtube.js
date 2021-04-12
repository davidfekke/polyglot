import React from "react"

const Youtube = props => {
    const src = `https://www.youtube.com/embed/${props.id}`;
   return (
    <iframe width="560" height="315" title={src} src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   )
}

export default Youtube;
