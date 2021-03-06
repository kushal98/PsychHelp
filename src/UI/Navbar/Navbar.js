import React from "react";
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const style = {
        color: "white",
    };
    return (
        <nav className={classes.Navbar}>
            <Link style={style} to="/">
                <h3 className={classes.title}>PsychHelp</h3>
            </Link>
            <ul className={classes.navLinks}>
                <Link style={style} to="/login">
                    <li className={classes.item}>Login</li>
                </Link>
                <Link style={style} to="/signup">
                    <li className={classes.item}>Signup</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
