import axios from "axios"
import { API_URL } from "../../../config"

const signup= async (email, fullname, username, password, setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/auth/signup",
        method: "post",
        data: {
            email, fullname, username, password
        }
    })
    const result= await res.data
    if(result?.at?.length > 0) {

        return (true)
    }
    else {
        return (false)
    }
}

export default signup