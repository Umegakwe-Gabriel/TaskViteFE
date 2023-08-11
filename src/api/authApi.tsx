import axios from "axios"

interface iData {
    email?: string;
    name?: string;
    task?: string;
}

const url = "http://localhost:5713/api/v1"

export const registerAuth = async(data: iData) => {
    return await axios.post(`${url}/create`, data).then((res)=> {
        return res.data.data
    })
}

export const signinAuth = async(data: iData) => {
    return await axios.post(`${url}/sign-in`, data).then((res) => {
        return res.data.data
    })
}

export const onAuth = async(authID: string) =>{
    return await axios.get(`${url}/${authID}/get-one-user`).then((res) =>{
        return res.data.data
    })
}