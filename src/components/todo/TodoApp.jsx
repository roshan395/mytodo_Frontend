import { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
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
            navigate(`/welcome/${username}`)
        } else {
            setShowSuccessMessage(false)
            setshowErrorMessage(true)
        }
    }

    return(
        <div className="LoginComponent">
            <h1>Time to login!</h1>
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
    const {username} = useParams()
    console.log(username)
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your Todos - <Link to="/todos">here</Link>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return(
        <div className="ErrorComponent">
            <h1>We are working on it</h1>
            <div>
                apologies for 404, rech out to tem at ABC-DEF-GHI.
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+1, today.getMonth(), today.getDay())
    const todos = [
        {id:1, description:"learn AWS", done:false, targetDate:targetDate},
        {id:2, description:"learn AZURE", done:false, targetDate:targetDate},
        {id:3, description:"learn Devops", done:false, targetDate:targetDate}
    ]

    return(
        <div className="ListTodosComponent">
            <h1>Things you want to do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}