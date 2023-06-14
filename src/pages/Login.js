import { NavLink, useNavigate } from 'react-router-dom';
import  './pages.css';
import { useState } from 'react';

const Login = () => {

    const [loginMail,setLoginMail] = useState('');
    const [loginPwd,setLoginPwd] = useState('');

    const navigate = useNavigate();

    const getMail = !(JSON.parse(localStorage.getItem('email'))) ? 'admin@gmail.com' : JSON.parse(localStorage.getItem('email'));
    const getPwd = !(JSON.parse(localStorage.getItem('pwd'))) ? '12345' : JSON.parse(localStorage.getItem('pwd'));

    const submitHandler = (e) => {
        e.preventDefault();
        if(loginMail.match(getMail) && loginPwd.match(getPwd))
        {
            navigate('/home');
        }
        else
        {
            document.getElementById('errmsg').innerHTML = 'invalid username and password !';
        }
    }

  return (
    <>
        <div className='login-container'>
            <div>
                <h3>Login Here</h3>
            </div>
            <form onSubmit={submitHandler}>
                <label>Email :</label>
                <div>
                    <input type='text' placeholder='Email' value={loginMail} onChange={(e)=>setLoginMail(e.target.value)}/>
                </div>
                <label>Password :</label>
                <div>
                    <input type='password' placeholder='Password' value={loginPwd} onChange={(e)=>setLoginPwd(e.target.value)}/>
                </div>
                <input type='submit' />
            </form>
            <div className='loginerr'>
                <p id='errmsg'></p>
            </div>
            <div className='register'>
                <p>Don't have any account ?</p>
                <p>Click here to <NavLink to='/register'>Register</NavLink> with us</p>
            </div>
        </div>
    </>
  )
}

export default Login