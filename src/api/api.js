import axios from "axios"
import { API_URL } from "../config/config"

const API = axios.create({
    baseURL: API_URL
})

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

API.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response) {

            const message =
                error.response.data?.message ||
                "Unexpected server error"

            return Promise.reject(new Error(message))
        }

        return Promise.reject(new Error("Network error"))
    }
)

export default API