import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import { useLogin } from "../../hooks/useLogin"


import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [info, setInfo] = useState({}); 
  const [visible, setVisible] = useState(false); 

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInfo = (prev) => ({ ...prev, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5500/api/user/login", info);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
        <div className="login">
      <div className="login-container">
      <span className="loginTitle">Login</span>
      <form onSubmit = {handleSubmit} className="loginForm">
        <label>Email</label>
        <input className="loginInput" 
        type="email" 
        onChange={handleChange} 
        id = "email"
        // value={email}
        placeholder="Enter your email..." 
        />
        <label>Password</label>
        <input className="loginInput" 
        type={visible?"text":"password"}
        onChange={handleChange} 
        id = "password"
        // value={password} 
        placeholder="Enter your password..."
        />
        <span onClick={() => {setVisible(!visible)}}>
          {
            visible ? <Visibility /> : <VisibilityOff />
          }
        </span>
        {error && <div className="error">{error}</div>}

      </form>
      <button onClick = {handleSubmit} className="loginButton" disabled={loading} >Login</button>
      <div className="backtohome">
      <button className="loginRegisterButton"><Link to='/Register'>Register</Link></button>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      </div>
        
        </div>
    </div>
  );
};

export default Login;



// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [visible, setVisible] = useState(false)
//   const {Login, error, isLoading} = useLogin()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     await Login(email, password)
//   }
//   return (
//     <div className="login">
      
      
//       <div className="login-container">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input className="loginInput" 
//         type="email" 
//         onChange={(e) => setEmail(e.target.value)} 
//         value={email}
//         placeholder="Enter your email..." 
//         />
//         <label>Password</label>
//         <input className="loginInput" 
//         type={visible?"text":"password"}
//         onChange={(e) => setPassword(e.target.value)} 
//         value={password} 
//         placeholder="Enter your password..."
//         />
//         <span onClick={() => {setVisible(!visible)}}>
//           {
//             visible ? <Visibility /> : <VisibilityOff />
//           }
//         </span>

//         <button className="loginButton" disabled={isLoading}>Login</button>
//         {error && <div className="error">{error}</div>}

//       </form>
//       <div className="backtohome">
//       <button className="loginRegisterButton"><Link to='/Register'>Register</Link></button>
//       <Link className='blog-goBack' to='/'>
//         <span> &#8592;</span> <span>Go Back</span>
//       </Link>
//       </div>
        
//         </div>
//     </div>
//   );
// }

