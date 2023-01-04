import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const me= async(setData)=> {
    try {
        const res= await axios({
            url: API_URL+ "/v1/users/me",
            method: "get",
            headers: {
                "accept": "application/json",
                "Authorization": "Bearer "+Cookies.get("accessToken")
            }
        })
        const result= await res.data
        return setData(result)
    } catch (error) {
        return setData(error)
    }
    
}

export default me