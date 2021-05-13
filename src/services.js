import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:3000"
// });

const axiosInstance = axios.create({
    baseURL: "https://my-json-server.typicode.com/KlaytonJr/ranek-api"
});

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint);
    }
};

export function getCep(cep){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}