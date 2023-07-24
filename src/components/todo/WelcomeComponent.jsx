import axios from 'axios'
import { useState } from 'react'
import {useParams, Link} from 'react-router-dom'

export default function WelcomeComponent() {
    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi() {
        console.log("called")
        axios.get('http://localhost:8080/hello-world')
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your Todos - <Link to="/todos">here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}