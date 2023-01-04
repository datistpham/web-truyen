import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const get_all_user= async (setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/users?page=2",
        method: "get",
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default get_all_user