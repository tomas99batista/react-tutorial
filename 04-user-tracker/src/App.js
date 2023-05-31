import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      {
        id: Math.random().toString(),
        username,
        age,
      },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
