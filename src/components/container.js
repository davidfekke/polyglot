import React from "react"

const container = ({children}) => {
    return (<div style={{ maxWidth: '1140px', 
                width: 'auto', 
                paddingRight: '15px', 
                paddingLeft: '15px', 
                marginRight: 'auto', 
                marginLeft: 'auto' }}>
        {children}
    </div>)
}

export default container;
