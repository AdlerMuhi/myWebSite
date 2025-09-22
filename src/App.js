import { useState } from "react";
import MyButton from "./component/UI/button/MyButton";
import Modal from "./component/UI/Modal/Modal";
import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Subjects from "./Subjects";
import Dates from './Dates';
import AddHomework from "./component/addHomework";
import DeleteRecord from "./component/deleteRecod";

function App() {

  const [modalActive, setModalActive] = useState(false)
  const [selectedComponent, setSelectedComponent] = useState(null)
  

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Домашние задания.</h1>
      
      <Routes>
        <Route path="/" element={
          <div className="mainContainer">
            <div className="container">
              <MyButton to="/Subjects" style={{width: '100%'}}>Предметы</MyButton>
              <MyButton to="/Dates" style={{width: '100%'}}>Даты</MyButton>
            </div>
            <div className="infoConainer">
              <MyButton onClick={() => window.open('https://t.me/+ImTt3D1aopNkMzEy') } style={{width: '100%'}}>Нововсти</MyButton>
            </div>
          </div>
        } />
        <Route path="/Subjects" element={<Subjects/>} />
        <Route path="/Dates" element={<Dates/>} />
      </Routes>
      <MyButton style={{position: 'fixed', bottom: 0, right: 0, margin: '0px 20px 20px 0px'}} onClick={() => setModalActive(true)}>?</MyButton>

      <Modal active={modalActive} setActive={setModalActive}>
        <h2  style={{margin: '0 0 4px 0'}}>Панель администратора.</h2>
        <div style={{marginBottom: '5px'}}>
          <MyButton onClick={() => setSelectedComponent('add')}>добавить предмет</MyButton>
          <MyButton onClick={() => setSelectedComponent('delete')}>удалить запись</MyButton>
        </div>
        {selectedComponent === 'add' && <AddHomework />}
        {selectedComponent === 'delete' && <DeleteRecord />}
      </Modal>
    </div>
  );
}

export default App;
