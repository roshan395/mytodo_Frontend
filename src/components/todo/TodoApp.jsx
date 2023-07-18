export default function TodoApp() {
    return(
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent></LoginComponent>
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent() {
    return(
        <div className="LoginComponent">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button type="button" name="login">Login</button>
                </div>
            </div>
            username
            password
            button
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