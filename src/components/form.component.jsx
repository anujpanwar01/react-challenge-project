import { useState } from "react";
import Button from "./button.component";
import "./form.styles.css";
import DialogBox from "./dialog/dialog.component";

const TaskAdder = (props) => {
  const [inputValue, setInputValues] = useState({
    userName: "",
    age: ""
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setInputValues((state) => {
      return { ...state, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();


    props.onPeopleData(inputValue);

    setInputValues({
      userName: "",
      age: ""
    });
  };

  return (
    <form className="task-adder" onSubmit={submitHandler}>
      <label>
        UserName
        <input
          type="text"
          onChange={inputHandler}
          name="userName"
          value={inputValue.userName}
        />
      </label>

      <label>
        Age(Years)
        <input
          type="number"
          onChange={inputHandler}
          name="age"
          value={inputValue.age}
        />
      </label>
      <Button type="submit">Add</Button>
    </form>
    
  );
};

export default TaskAdder;
