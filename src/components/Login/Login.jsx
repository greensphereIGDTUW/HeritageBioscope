import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {Login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await Login(email, password)
  }
  return (
    <div className="login">
      
      
      <div className="login-container">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="loginInput" 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        placeholder="Enter your email..." 
        />
        <label>Password</label>
        <input className="loginInput" 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        placeholder="Enter your password..."
        />
        <button className="loginButton" disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}

      </form>
      <div className="backtohome">
      <button className="loginRegisterButton"><Link to='/Register'>Register</Link></button>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      </div>
        
        </div>
    </div>
  );
}