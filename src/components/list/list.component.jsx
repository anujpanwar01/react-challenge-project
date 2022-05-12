import "./list.styles.css";

const List=(props)=>{

    return (
    <div className="list">
      <p>{props.userName+" "+"("+props.age+" "+"years old)"}</p>
    </div>
)}
export default List;