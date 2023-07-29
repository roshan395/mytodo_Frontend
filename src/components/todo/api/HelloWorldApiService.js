import { apiClient } from "./ApiClient";

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world')
// }

export const retrieveHelloWorldBean
= () => apiClient.get('/hello-world')

export const retrieveHelloWorldPathVariable
= (username, token) => apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
        Authorization: token
    }
})

export const executeBasicAuthService
= (token) => apiClient.get(`/basic-auth`, {
    headers: {
        Authorization: token
    }
})