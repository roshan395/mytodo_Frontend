import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <LoginComponent></LoginComponent>
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent() {
    const [username, setusername] = useState('roshan')

    const [password, setpassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setshowErrorMessage] = useState(false)

    function handleUsernameChange(event) {
        // console.log(event.target.value)
        setusername(event.target.value)
    }

    function handlePasswordChange(event) {
        // console.log(event.target.value)
        setpassword(event.target.value)
    }

    function handleSubmit() {
        if(username==='roshan' && password === 'dummy'){
            setShowSuccessMessage(true)
            setshowErrorMessage(false)
        } else {
            setShowSuccessMessage(false)
            setshowErrorMessage(true)
        }
    }

    function SuccessMessageComponent() {
        if(showSuccessMessage){
            return <div className='successMessage'>Authenticated Successfully</div>
        }
        return null
    }

    function ErrorMessageComponent() {
        if(showErrorMessage){
            return <div className='errorMessage'>Authenticated failed. please check your credentials</div>
        }
        return null
    }

    return(
        <div className="LoginComponent">
            <SuccessMessageComponent/>
            <ErrorMessageComponent/>
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