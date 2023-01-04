import axios from "axios"
import { API_URL } from "../../config"

const get_product= async (setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/stories",
        method: "get",
    })
    const result= await res.data
    return setData(result)
}

export default get_product