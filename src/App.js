import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";
import React, { useState } from "react";
import LoginPage from "./component/LoginPage";
import Chat from "./component/Chat";

function App() {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");
  const [msg, setMsg] = useState("");

  function handleChange({ currentTarget: input }) {
    setNewUser(input.value);
  }

  function logNewUser() {
    setUser(newUser);
  }

  return (
    <main className="content">
      <div className="container mt-3">
        {user && <Chat user={user} msg={msg} setMsg={setMsg} />}
        {!user && (
          <LoginPage
            newUser={newUser}
            handleChange={handleChange}
            logNewUser={logNewUser}
          />
        )}
      </div>
    </main>
  );
}

export default App;
