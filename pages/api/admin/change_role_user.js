import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const change_role_user= async (id, role)=> {

    const res= await axios({
        url: API_URL+ "/v1/users/change-role/" + id,
        method: "put",
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            role: role
        }
    })
    const result= await res.data
    return result
}

export default change_role_user