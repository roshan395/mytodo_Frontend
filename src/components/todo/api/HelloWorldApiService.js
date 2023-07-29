import axios from "axios";

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world')
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveHelloWorldBean
= () => apiClient.get('/hello-world')

export const retrieveHelloWorldPathVariable
= (username) => apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
        Authorization: 'Basic cm9zaGFuOmR1bW15'
    }
})

export const executeBasicAuthService
= (token) => apiClient.get(`/basic-auth`, {
    headers: {
        Authorization: token
    }
})