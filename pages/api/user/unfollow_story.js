import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const unfollow_story= async (id, setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/follow-story/"+ id,
        method: "delete",
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default unfollow_story