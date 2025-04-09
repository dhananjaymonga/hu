import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(e) {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  }
  const handleSubmit = async (e) => {
    console.log("click");
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/logindata", {
        method: "post",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
        credentials : 'include'
      });
      const data = await res.json();
      if (data.success) {
         return setMsg(data.msg)
      }
      setError(data.msg)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {msg && <p>{msg}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={userData.name}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          value={userData.email}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={userData.password}
          onChange={handleInput}
        />
        <button>okt</button>
                <button>submit</button>

      </form>
      
    </div>
  );
}

export default App;
