import React from "react"
import "./layout.css"
import "prismjs/themes/prism-solarizedlight.css"

const layout = ({children}) => {
    return (
        <div style={{ fontFamily: 'Open Sans, Helvetica', margin: '0px 0px 0px 0px' }}>
            {children}
        </div>
    )
}

export default layout;
