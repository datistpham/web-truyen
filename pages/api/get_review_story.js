import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../config"

const get_review_story= async (id, setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/reivew-story/"+ id,
        method: "get",
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default get_review_story