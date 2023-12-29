import './Login.css';
import React, {useState} from 'react';
function Login() {
  const[action, setAction] = useState("Login");
  
  return (
  <div className="login-container">
  <div className="hea">{action}</div>
  <form>
  <div className='inputies'> 

{action==="Sign Up"? 
// Photo and Name (sign up)
<>
{/* <div class="profile-pic">
  
  <input id="file" type="file" onchange="loadFile(event)"/>
  <img src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg" id="output" width="200" />
  <label class="-label" for="file">
    <span>Change Image</span><br/>
  </label>
</div> */}
<div className="login-input">
    <input type="name" id="name" placeholder=' Name'/>
  </div></>:
  <></>}
{/* Email (both) */}
<div className="login-input">
    <input type="email" id="email" placeholder=' Email ID'/>
</div>
{/* Bio and set pass(Signup), Pass(Login) */}
{action==="Sign Up"? <><div className="input">
    <textarea id="bio" placeholder=' Tell us something about yourself (Bio)'/>
  </div>
  <div className="login-input">
  <input type="password" id="setpass" placeholder=' Set password'/>
  </div>
  </>:
  <div className="login-input">
    <input type="password" id="pass" placeholder=' Password' />
    </div>
    }
  
  </div>
{action==="Login"?<div className="main">
    <div className="div1"><input type="checkbox"/><label>Remember Me</label></div>
    <div className="div2"><a href="/">Forgot password?</a></div>
  </div>:<div className="div3">
    <div className="div2" > Already have an account? <a href="/">Login</a></div>
  </div> }
{action==="Login"?
<div className='btnholder'>
  <button type="button" className= "login-btn" onClick={()=> {setAction("Sign Up")}}>Register</button>
  <button type="button" className="login-btn">Log in {/*redirect to site from here*/} </button></div>
  :
  <button type="button" className="fullbtn" onClick={()=> {setAction("Login")}}>Register</button>}
</form>
</div>
    );}

export default Login;
