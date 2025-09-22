import '../style/App.css';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useState } from 'react';

const AddHomework = () => {

     const [homeworkData, setHomeworkData] = useState({
        subject: '',
        description: '',
        date: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHomeworkData(prev => ({
            ...prev,
            [name]: value
        }));
    };

     const handleAddHomework = async () => {
        if (!homeworkData.subject || !homeworkData.description || !homeworkData.date) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        const response = await fetch('http://192.168.0.133:5000/api/homework', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(homeworkData)
        });

        if (response.ok) {
            alert('Домашнее задание добавлено успешно!');
            setHomeworkData({
                subject: '',
                description: '',
                date: ''
            });
              
        } else {
            alert('Ошибка при добавлении домашнего задания');
        }
    };


    return (
        <div>
            <p>Предмет:</p>
            <MyInput
                name="subject"
                value={homeworkData.subject}
                onChange={handleInputChange}
            />
            <p>Задание:</p>
            <textarea rows="4" cols="50" style={{width: '100%', padding: '5px 15px', border: '1px solid', resize: 'none'}}
                name="description"
                value={homeworkData.description}
                onChange={handleInputChange}
            ></textarea>
            <p>Дата:</p>
            <MyInput 
                name="date"
                value={homeworkData.date}
                onChange={handleInputChange}
                placeHolder="в формате 01.01.2025"/>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}} onClick={handleAddHomework}><MyButton>Подтвердить</MyButton></div>
        </div>
    );
};

export default AddHomework;