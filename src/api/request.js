import axios from 'axios'
import store from "@/store/index";
import router from "@/router";
// let url = 'http://47.242.169.19:4003'
// let url = 'http://192.168.31.55:4003'
let url = 'http://192.168.0.155:4003'

// if (!process.env.DEV) {
//     url = '127.0.0.1:4002'
// }

const service = axios.create({
    baseURL: url,
    timeout: 10000,
    headers:
        {'Content-Type': 'application/json;charset=utf-8'}

})

function getToken() {
    let token = store.state.token;
    return token ? token : null
}

service.interceptors.request.use(
    config => {
        config.headers.Authorization = getToken()
        return config
    },
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.code) {
            switch (error.response.code){
                // 未登录请求
                case 401:
                    router.replace({
                        path:'/login',
                        query:{
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    break
                default:
                    //抛出弹窗提示
            }
        }
        return Promise.reject(error)
    }
)

export function get(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            headers:{
                'Content-Type': 'application/json'
            },
            params:params
        }).then(e=>{
            resolve(e.data)
        }).catch(e=>{
            reject(e.data())
        })
    })
}
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params),{
            headers:{
                'Content-Type': 'application/json'
            },
        })
            .then(e => {
                resolve(e.data);
            })
            .catch(e =>{
                reject(e.data)
            })
    });
}
export default service