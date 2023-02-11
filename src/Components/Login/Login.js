import React,{useContext, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const handleLogin = (e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img style={{cursor:'pointer'}} width="200px" height="200px" src={Logo} onClick={()=>history.push('/')}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
