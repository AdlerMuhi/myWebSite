import React, { useState, useEffect } from "react";
import MyButton from "./component/UI/button/MyButton";
import SubjectBox from "./component/subjectBox";
import MyInput from "./component/UI/input/MyInput";

function Subjects() {
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = () => {
    fetch('http://192.168.0.133:5000/api/homework')
      .then(response => response.json())
      .then(data => setSubjects(data))
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="Subjects">
      <div className="SubjectsNav">
        <h1>Предметы</h1>
        <MyInput placeholder="Поиск" className="inputInHeader" />
      </div>
        {subjects && subjects.length > 0 ? 
        (subjects.map(item => (
          <SubjectBox key={item.id} name={item.subject} description={item.description} date={item.date}/>
        )))
        :
        (<p>нет данных</p>)
        }
      <MyButton to="/">домой</MyButton>
    </div>
  );
}

export default Subjects;
