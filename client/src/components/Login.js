import React, { useState } from "react";
import axios from "axios";


const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        console.log("Login successful! Server response: ", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(err => console.log("Error logging in: ", err));
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={creds.username} onChange={handleChanges} placeholder="Username" />
        <input type="password" name="password" value={creds.password} onChange={handleChanges} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
