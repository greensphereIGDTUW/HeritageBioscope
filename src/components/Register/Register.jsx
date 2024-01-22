import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import { images } from "../../constants";
import { Visibility, VisibilityOff } from '@mui/icons-material'; 

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setname] = useState('')
    const [visible, setVisible] = useState(false)
    const {Register, error, isLoading} = useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await Register(name, email, password)
  }
    return (
        <div className="page">
      <div className="container">
        <div className="register">
        <span className="registerTitle">Register</span>
          <form className="registerForm" onSubmit={handleSubmit}>
              <label>Name</label>
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
              <div className="registerInput">
                <input 
                type={visible?"text":"password"}
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                placeholder="Enter your password..."
                />
                <span onClick={() => {setVisible(!visible)}}>
                  {
                    visible ? <Visibility /> : <VisibilityOff />
                  }
                </span>
                  
              </div>
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
    <img 
    src={images.butterfly} 
    alt="Butterflies" 
    width={400} 
    className="regImage"
    />
  </div>
    </div>
    );
}