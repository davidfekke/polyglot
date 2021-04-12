import React from "react"

const extlink = props => {
    return (
        <a href={ props.uri } target="_blank" rel="noopener noreferrer">{props.name}</a>
    )
}

export default extlink;
