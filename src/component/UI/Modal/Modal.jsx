import React from "react";
import classes from './modal.module.css';

const Modal = ({children, active, setActive}) => {
    const rootClasses = [classes.modal]
    const rootClassesContent = [classes.modal__content]

    if(active) {
        rootClasses.push(classes.active)
        rootClassesContent.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setActive(false)}>
            <div className={rootClassesContent.join(' ')} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;