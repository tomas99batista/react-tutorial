import { FormEvent } from "react";

export const NewTodo = () => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
