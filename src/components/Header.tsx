import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <Link to={"/counter"}>show counter</Link>
            </div>
            <div>
                <Link to={"/time"}>show time</Link>
            </div>
        </div>
    );
};

export default Header;