import { useState } from "react";
import DialogBox from "./components/dialog/dialog.component";
import "./styles.css";
import TaskAdder from "./components/form.component";
import List from "./components/list/list.component";

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [content,setContent]=useState("");
  const [data,setData]=useState([]);
  

  const humanData = (props) => {
    const { userName, age } = props;


    if (userName === "" || age === "") {
      setIsDialogOpen(true);
      setContent("name and age (non-empty values).");
    } else if (age <= 0) {
      setIsDialogOpen(true);
      setContent("age(>0)");
    }else{
      setData((prevState)=>{
       return [{id:Math.random()*1000032,userName,age},...prevState]
      })
    }
  };


  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="App">
      <TaskAdder onPeopleData={humanData} />

    {data.length>0 && <div className="list-container">{data.map((ele)=><List key={ele.id} {...ele} />)}</div>      
    }
      {isDialogOpen && <DialogBox dialogHandler={closeDialog} content={content} />}
      {isDialogOpen && <div className="overlay" onClick={closeDialog}></div>}
    </div>
  );
}
