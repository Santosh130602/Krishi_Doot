
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../login/Login.css"
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/v1/login', { email, password });
            const data = response.data;

            if (data.success) {
                // Redirect to home page upon successful login
                navigate('/');
            } else {
                setError('Incorrect email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <>
        <PreHeader />
        <Header />
        <div className='main-section'>
            <div className="section">
                <div className="logo-part">
                    <div className='logo-had'>
                    <h2 className='mb-3 text-primary'>Login</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start ml-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id: &nbsp; &nbsp;</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password: &nbsp; &nbsp;</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary  ">Login</button>
                    </form>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    <p className='container my-2 mb-10'>Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary">Register</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Login;



