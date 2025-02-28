import React, { useState } from "react"
import { login } from "../redux/slices/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const {email,password} = inputData
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.trim() || !emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
    
        if (!password.trim()) {
            setError("Please enter a valid password");
            return;
        }
    
        dispatch(login(inputData));
        navigate('/');
    }




    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center h-full my-auto'>
                <div className="card bg-base-200 w-96 shadow-xl">
                    <form className="card-body" onSubmit={handleLoginSubmit}>
                        <h1 className='text-2xl text-center'>Login</h1>
                        <div>
                            <label className="form-control w-full max-w-xs mb-2">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="email" name='email' placeholder=""
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={handleChange} value={inputData.email}/>
                            </label>
                            <label className="form-control w-full max-w-xs mt-2">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="password" name='password' placeholder=""
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={handleChange} value={inputData.password}/>
                            </label>
                        </div>
                        <p className='text-sm text-red-600'>{error}</p>
                        <div className="card-actions justify-center mt-2">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login