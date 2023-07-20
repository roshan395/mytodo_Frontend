import { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {
    const [username, setusername] = useState('roshan')

    const [password, setpassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setshowErrorMessage] = useState(false)

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setusername(event.target.value)
    }

    function handlePasswordChange(event) {
        setpassword(event.target.value)
    }

    function handleSubmit() {
        if(username==='roshan' && password === 'dummy'){
            setShowSuccessMessage(true)
            setshowErrorMessage(false)
            navigate('/welcome')
        } else {
            setShowSuccessMessage(false)
            setshowErrorMessage(true)
        }
    }

    return(
        <div className="LoginComponent">
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authenticated failed. please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return(
        <div className="elcomeComponent">
            Welcome Component
        </div>
    )
}