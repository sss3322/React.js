import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { signUpData } from './Api';

function Input1() {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           
            await signUpData(input);
           
            navigate('/login'); 
        } catch (error) {
            console.error('Error occurred while submitting:', error);
        }
    };

    return (
        <div className="container mt-4"> 
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3"> 
                            <label>Username:</label>
                            <input type="text" className="form-control" value={input.username} name="username" onChange={handleChange} />
                        </div>
                        <div className="mb-3"> 
                            <label>Email:</label>
                            <input type="email" className="form-control" value={input.email} name="email" onChange={handleChange} />
                        </div>
                        <div className="mb-3"> 
                            <label>Password:</label>
                            <input type="password" className="form-control" value={input.password} name="password" onChange={handleChange} />
                        </div>
                        <div className="mb-3"> 
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Input1;
