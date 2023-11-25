import './App.css'

function App() {
    return (
        <div className='signuppage'>
            <div className="signupcard">
                <div className='signUpOrSignInDiv'>
                    <button>
                        <span><i class="fa-solid fa-user"></i></span>
                        <span>Sign In</span>
                    </button>
                    <button className='acitvebtn'>
                        <span><i class="fa-solid fa-user-plus"></i></span>
                        <span>Sign Up</span>
                    </button>
                </div>
                <div className='inputDivSignup emailInputDiv'>
                    <i class="fa-regular fa-envelope"></i>
                    <input placeholder='Email' type="email" />
                </div>
                <div className='inputDivSignup UserNameInputDiv'>
                    <i class="fa-regular fa-circle-user"></i>
                    <input placeholder='Username' type="text" />
                </div>
                <div className='inputDivSignup PassworInputDiv'>
                    <i class="fa-solid fa-keyboard"></i>
                    <input placeholder='Password' type="password" />
                </div>
                <div className='inputDivSignup ConfirmInputDiv'>
                    <i class="fa-regular fa-square-check"></i>
                    <input placeholder='Confirm Password' type="password" />
                </div>
                <div className='AccepteTermsDiv ps-5 my-3'>
                    Accept <span style={{color: '#6f11f5', cursor: 'pointer'}}>Terms & Conditions</span>
                </div>
                <div className='SignUpBtn mt-2'>
                    <button><i class="fa-solid fa-user-plus me-1"></i> Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default App;