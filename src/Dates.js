import MyButton from "./component/UI/button/MyButton";
import './style/App.css';

function Dates() {

  return (
    <div className="Dates">
    <h1>Расписание</h1>
    <MyButton to="/">домой</MyButton>
    </div>
  );
}

export default Dates;
