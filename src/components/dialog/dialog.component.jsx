import Button from "../button.component";
import "./dialog.styles.css";

const DialogBox = (props) => {

  const { content } = props;
  return (
    <div className="dialog">
      <h2 className="dialog-heading">Invalid input</h2>
      <p className="dialog-para">Please enter a valid {content}</p>
      <Button onClick={props.dialogHandler} type="button" className="dialog-btn">
        Okay
      </Button>
    </div>
  );
};

export default DialogBox;
