import React, { useState } from "react"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = {
    email: "palak@gmail.com",
    password: "123456",
    name: "Palak"
  }
  const handleSubmit = () => {
    if (email === "" || password === ""){
      alert("Please fill in all fields")
    }
    if (email === user.email){
      if (password === user.password){
        navigate("/dashboard", { state: { user } })
      } else {
        alert("Invalid password")
      }
    } else {
      alert("Invalid email")
    }
  }
  return(
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br></br>
      <input 
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login