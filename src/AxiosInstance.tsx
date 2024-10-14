import axios from 'axios'
import { useMyContext } from './GlobalVaribale'

const useAxiosInstance = () => {
    const { jwtToken } = useMyContext()

    const AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_NEST_SERVER,
        timeout: 15000,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + jwtToken,
        },
    })

    return AxiosInstance
}

export default useAxiosInstance
