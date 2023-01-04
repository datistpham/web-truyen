import axios from "axios"
import { API_URL } from "../../config"

const get_chap_from_comic= async(comicId, chapId, setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/stories/"+ comicId +"/read/"+ chapId,
        method: "get"
    })
    const result= await res.data
    return setData(result)
}

export default get_chap_from_comic