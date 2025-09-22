import React from "react";
import '../style/App.css';

const SubjectBox = ({name, description, date}) => {
    return (
        <div className="subjectBox">
            <div className="leftSubBox">
                <div className="subjectName">
                    <h2>{name}</h2>
                </div>
                <div className="subjectDesc">
                    <p>{description}</p>
                </div>
            </div>
            <div className="rightSubBox">
                <p>{date}</p>
            </div>
        </div>
    );
};

export default SubjectBox;