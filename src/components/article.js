import React from "react"
import Container from "./container.js"

const article = ({children}) => {
    return (
        <article>
            <Container>
                {children}
            </Container>
        </article>
    )
}

export default article;
