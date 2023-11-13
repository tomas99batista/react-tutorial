import { FC } from "react";
import classes from "./TodoItem.module.css";

export const TodoItem: FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};
