import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const post_review= async (rate, body, story_id)=> {
    const res= await axios({
        url: API_URL+ "/v1/reivew-story",
        method: "post",
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            body, rate, story_id: parseInt(story_id)
        }
    })
    const result= await res.data
    return result
}

export default post_review