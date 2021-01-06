// Stateless functional component
import React from "react";

const Header = (props) => (
    /*Header has been called with 2 args, these become props*/
    <div className="header">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
)

Header.defaultProps = {
    title: 'My Application Title'
}

export default Header