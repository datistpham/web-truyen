import axios from "axios"
import { API_URL } from "../../config"

const get_category= async (setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/categories",
        method: "get"
    })
    const result= await res.data
    return setData(result)
}

export default get_category