import { NavLink, useNavigate } from 'react-router-dom';
import  './pages.css';
import { useState } from 'react';

const Register = () => {

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');

    const alphaExp = /^[a-zA-Z ]+$/;
    const emailExp =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const pwdExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    let status1, status2, status3, status4 = false;

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        if(name === '')
        {
            document.getElementById('nameNote').innerHTML = "Please enter your name...";
        }
        else 
        {
            if(name.match(alphaExp))
            {
                document.getElementById('nameNote').innerHTML = "";
                 status1 = true;
            }
            else
            {
                document.getElementById('nameNote').innerHTML = 'Please enter characters only';
            }
        }

        if(phone === '')
        {
            document.getElementById('phoneNote').innerHTML = "Please enter your phone number...";
        }
        else 
        {
            if(Number(phone))
            {
                if(phone.length ===10)
                {
                    document.getElementById('phoneNote').innerHTML = "";
                    status2 = true;
                }
                else
                {
                    document.getElementById('phoneNote').innerHTML = "Enter 10 digit number only...";
                }
            }
            else
            {
                document.getElementById('phoneNote').innerHTML = 'Please enter numbers only...';
            }
        }

        if(email === '')
        {
            document.getElementById('emailNote').innerHTML = "Please enter your email...";
        }
        else 
        {
            if(email.match(emailExp))
            {
                document.getElementById('emailNote').innerHTML = "";
                status3 = true;
            }
            else
            {
                document.getElementById('emailNote').innerHTML = 'Please enter valid email address...';
            }
        }

        if(pwd === '')
        {
            document.getElementById('pwdNote').innerHTML = "Please enter your password...";
        }
        else 
        {
            if(pwd.match(pwdExp))
            {
                document.getElementById('pwdNote').innerHTML = "";
                status4 = true;
            }
            else
            {
                document.getElementById('pwdNote').innerHTML = 'Password should contain atlest 6 characters with 1 special character, 1 digit.';
            }
        }

        if(status1 && status2 && status3 && status4)
        {
            localStorage.setItem('name', JSON.stringify(name));
            localStorage.setItem('phone', JSON.stringify(phone));
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('pwd', JSON.stringify(pwd));

            alert('Registration successful.......');

            return navigate('/');
        }
    }

  return (
    <>
        <div className='login-container'>
            <div>
                <h3>Registration Form</h3>
            </div>
            <form onSubmit={submitHandler} >
                <label>User Name :</label>
                <div>
                    <input type='text' placeholder='Full name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div id='nameNote' className='errmsg'></div>
                <label>Phone :</label>
                <div>
                    <input type='tel' placeholder='Email' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div id='phoneNote' className='errmsg'></div>
                <label>Email :</label>
                <div>
                    <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div id='emailNote' className='errmsg'></div>
                <label>Password :</label>
                <div>
                    <input type='password' placeholder='Password' value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                </div>
                <div id='pwdNote' className='errmsg'></div>
                <input type='submit' value="Register" />
            </form>
            <div className='register'>
                <p>Click here to <NavLink to='/'>Login</NavLink> with us</p>
            </div>
        </div>
    </>
  )
}

export default Register