import axios from "axios"
import Cookies from "js-cookie"
import { API_URL } from "../../../config"

const contribute_translation= async (translate_context, description, sentence_id)=> {
    const res= await axios({
        url: API_URL+ "/v1/translated-sentence",
        method: "post",
        headers: {
            "Authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            translate_context, description, sentence_id
        }
    })
    const result= await res.data
    return result
}

export default contribute_translation