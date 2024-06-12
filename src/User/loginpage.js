import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { login } from '../Redux/authReducer';
import { loginData } from './Api';

function Login() {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginData(input); // Use loginData function from Api.js
            console.log(response);
            dispatch(login(response)); 
            localStorage.setItem("Login", JSON.stringify(response)); 
            navigate('/home'); 
        } catch (error) {
            console.error('Error occurred while logging in:', error);
        }
      
    };

    return (
        <div className="container mt-5"> 
            <div className="row justify-content-center">
                <div className="col-md-6"> 
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" value={input.email} name="email" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" value={input.password} name="password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
