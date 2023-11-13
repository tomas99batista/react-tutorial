import { FC } from "react";

export const TodoItem: FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};
