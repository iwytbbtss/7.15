import React from 'react';
import { useState } from 'react';
import "./App.css"

function App() {
  const [name, setName] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <p>당신의 이름은 무엇입니까?</p>
      <input type="text" onChange={changeName}></input>
      <h3>반갑습니다 {name}님</h3>
    </div>
  );
}

export default App;
