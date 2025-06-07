import axios, {  AxiosInstance, InternalAxiosRequestConfig } from "axios"


const BASE_URL = "http://localhost:900"

export const interceptorApiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-Type": "application/json"
    },
    timeout: 10000
})

//agregar si se puede el save token

const getToken = () => localStorage.getItem("accessToken")

interceptorApiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getToken()
        if(token && config.headers){
            config.headers.set("Authorization", `Bearer ${token}`)
        }
        return config;
    },
    (error) => Promise.reject(error)
)

//agregar interceptor de respuestas con logica de renovacion