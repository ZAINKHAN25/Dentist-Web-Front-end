import './App.css';

import { useNavigate } from 'react-router-dom';

function App() {

    const navigateTo = useNavigate();
    return (
        <div className='signuppage'>
            <div className="signupcard">
                <div className='signUpOrSignInDiv'>
                    <button className='acitvebtn'>
                        <span><i className="fa-solid fa-user"></i></span>
                        <span>Sign In</span>
                    </button>
                    <button onClick={()=> navigateTo('/signup')}>
                        <span><i className="fa-solid fa-user-plus"></i></span>
                        <span>Sign Up</span>
                    </button>
                </div>
                <div className='inputDivSignup UserNameInputDiv'>
                    <i className="fa-regular fa-circle-user"></i>
                    <input placeholder='Username' type="text" />
                </div>
                <div className='inputDivSignup PassworInputDiv'>
                    <i className="fa-solid fa-keyboard"></i>
                    <input placeholder='Password' type="password" />
                </div>
                <div>
                    <span style={{ color: '#6f11f5', cursor: 'pointer', textDecoration: 'underline' }}>Forget Password?</span>
                </div>
                <div className='my-3'>
                    <input className="form-check-input me-1 ms-3" checked type="checkbox" value="" id="flexCheckDefault" />
                    <span>Remember Me</span>
                </div>
                <div className='SignUpBtn mt-2'>
                    <button><i class="fa-solid fa-right-to-bracket me-1"></i> Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default App;