// Stateless functional component
import React from "react";

const Header = (props) => {
    return (
        /*Header has been called with 2 args, these become props*/
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'My Application Title'
}

export default Header