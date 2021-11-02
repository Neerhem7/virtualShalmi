import axios from 'axios';
import { api } from './urlConfig';
const axiosinstant = axios.create({
    baseURL: api,
    headers:{
        'Authorization': ''
    }
})
export default axiosinstant;