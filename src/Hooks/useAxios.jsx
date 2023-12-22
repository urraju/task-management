
import axios from "axios";
const axiosPublic =  axios.create({
    baseURL : 'https://task-managemant-server-tawny.vercel.app'
})  
const useAxios = () => {
    return axiosPublic
}
export default useAxios