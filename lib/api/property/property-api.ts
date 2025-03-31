import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_HOST_API;

export async function GetAllPropertyApi() {
    return await axios.get(`${process.env.NEXT_PUBLIC_PROPERTY_LIST}?populate=prevImage&populate=facility&populate=info`).then((data) => {return data.data})
} 

export async function GetPropertyApi(id: number) {
    return await axios.get(`${process.env.NEXT_PUBLIC_PROPERTY_LIST}/${id}?populate=prevImage&populate=facility&populate=info`).then((data) => {return data.data})
}
