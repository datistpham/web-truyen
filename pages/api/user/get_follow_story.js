import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const get_follow_story= async (setData)=> {
    try {
        const res= await axios({
            url: API_URL+ "/v1/follow-story",
            method: "get",
            headers: {
                "Authorization": "Bearer "+ Cookies.get("accessToken")
            }
        })
        const result= await res.data
        return setData(result)
        
    } catch (error) {
        return setData(error)
    }
}

export default get_follow_story