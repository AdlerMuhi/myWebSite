import React from "react";
import classes from './MyButton.module.css';
import { useNavigate } from "react-router-dom";

const MyButton = ({children, to, onClick, ...props}) => {
    const navigate = useNavigate();

    const handleCLick = () => {
        if (to) {
        navigate(to);
        }
        if (onClick) {
            onClick();
        }
    }
    

    return (
        <button {...props} onClick={handleCLick} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;