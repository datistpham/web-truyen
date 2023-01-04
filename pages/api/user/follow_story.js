import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const follow_story= async (id, setData)=> {
    try {
        const res= await axios({
            url: API_URL+ "/v1/follow-story/"+ id,
            method: "post",
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

export default follow_story