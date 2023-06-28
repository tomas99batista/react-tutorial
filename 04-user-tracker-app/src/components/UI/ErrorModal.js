import Button from "./Button";
import Card from "./Card";
import states from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={states.backdrop} onClick={props.onConfirm}></div>
      <Card className={states.modal}>
        <header className={states.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={states.content}>
          <p>{props.message}</p>
        </div>
        <footer className={states.action}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
