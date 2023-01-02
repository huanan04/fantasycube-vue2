import axios from 'axios'

let url = 'http://47.242.169.19:4002'
// let url = 'http://192.168.31.55:4002'

// if (!process.env.DEV) {
//     url = '127.0.0.1:4002'
// }

const service = axios.create({
    baseURL: url,
    timeout: 10000,
    headers: [
        {'Content-Type': 'application/json;charset=utf-8'}
]
})
function getToken () {
    return 'token'
}
service.interceptors.request.use(
    (config) => {
        if (getToken()) {
            config.headers.Authorization = getToken()
        }
        return config
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return error
    }
)

export default service