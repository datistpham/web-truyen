import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const read_notification= async ()=> {
    // const res= await axios({
    //     url: API_URL+ "/v1/noti/read-all", 
    //     method: "post",
    //     headers: {
    //         "Authorization": "Bearer "+ Cookies.get("accessToken")
    //     }
    // })
    // const result= await res.data
    // return result
}

export default read_notification