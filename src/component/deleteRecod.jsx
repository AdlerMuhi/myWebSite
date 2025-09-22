import '../style/App.css';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useState } from 'react';

const DeleteRecord = () => {
     const [homeworkData, setHomeworkData] = useState({
        subject: '',
        date: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHomeworkData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleDeleteHomework = async () => {
        if (!homeworkData.subject || !homeworkData.date) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        const response = await fetch('http://192.168.0.133:5000/api/homework', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({subject: homeworkData.subject, date: homeworkData.date})
        });

        if (response.ok) {
            alert('Домашнее задание успешно удалено!');
            setHomeworkData({
                subject: '',
                date: ''
            });
              
        } else {
            alert('Ошибка при удалении домашнего задания');
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
           <p>Дата:</p>
           <MyInput
                name="date"
                value={homeworkData.date}
                onChange={handleInputChange}
           />
           <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}><MyButton style={{color: 'red', border: '1px solid red'}} onClick={handleDeleteHomework}>Удалить</MyButton></div>
        </div>
    );
};

export default DeleteRecord;