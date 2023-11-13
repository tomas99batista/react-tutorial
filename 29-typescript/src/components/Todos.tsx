import { FC } from "react";
import { Todo } from "../models/todo";

export const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
