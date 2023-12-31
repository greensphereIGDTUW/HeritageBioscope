import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setname] = useState('')
    const {Register, error, isLoading} = useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await Register(name, email, password)
  }
    return (
        
        <div className="register">
            
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>name</label>
        <input className="registerInput" 
         type="name" 
         onChange={(e) => setname(e.target.value)} 
         value={name} 
         placeholder="Enter your name..."
        />

        <label>Email</label>
        <input className="registerInput" 
         type="email" 
         onChange={(e) => setEmail(e.target.value)} 
         value={email}
         placeholder="Enter your email..."
        />

        <label>Password</label>
        <input className="registerInput" 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        placeholder="Enter your password..."
        />
        <button className="registerButton" disabled={isLoading}>Register</button>
        {error && <div className="error">{error}</div>}
      </form>
      <div className="backtohome">
      <button className="registerLoginButton"><Link to="/Login">Login</Link></button>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      </div>
        
    </div>
    
    )
}