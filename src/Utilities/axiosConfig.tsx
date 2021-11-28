import axios from 'axios';
import * as dotenv from 'dotenv'

dotenv.config()
const url = process.env.REACT_APP_API_URL

// Next we make an 'instance' of it
const axiosConfig = axios.create({
// .. where we make our configurations
    baseURL: url
});

const accesToken = localStorage.getItem("currentUser");
if(accesToken) {
    axiosConfig.defaults.headers.common.Authorization = `Bearer ${accesToken}`;
}
axiosConfig.defaults.headers.post["Content-Type"] = "application/json";

axiosConfig.interceptors.request.use(
    (request) => {
        // console.log(request);
        // Edit request config
        return request;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

axiosConfig.interceptors.response.use(
    (response) => {
        // console.log(response);
        // Edit response config
        return response;
    },
    (error) => {
        // console.log(error);
        return Promise.reject(error);
    }
);
export default axiosConfig;