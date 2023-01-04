import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const update_user= async (id, avatar, phone, address, setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/users/"+ id,
        method: "put", 
        data: {
            avatar, phone, address
        },
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default update_user