import React, { useState } from 'react'
import Users from './Users';

const Login = () => {
  const [azam_users, setUsers] = useState(null)

  const [ user, setUser ] = useState({
    username: '',
    password: '',
  })

  const { username, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()

    if (username === '' || password === '') {
      alert("Please provide all fields")
    } else {
      await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json "},
          body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => {
        alert(error.message);
      });
    }
  }

  if (azam_users !== null) {
    return <Users users={azam_users}/>
  }

  return (
    <div className="form-container">
      <h1>Account <span className="text-primary">Login</span></h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name</label>  
          <input type="text" name="username" value={username} onChange={onChange} required/>
        </div> 
        <div className="form-group">
          <label htmlFor="password">Password</label>  
          <input type="password" name="password" value={password} onChange={onChange} maxLength="4" required/>
        </div> 
        <input type="submit" value="Login" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}



export default Login