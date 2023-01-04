import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../config"

const get_story_by_categories= async (id, setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/categories/"+ id + "/stories",
        method: "get",
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default get_story_by_categories