import axios from "axios"
import { API_URL } from "../../../config"

const login= async (email, password, setData)=> {
    const res= await axios({
        url: API_URL+ "/v1/auth/signin",
        method: "post",
        data: {
            email, password
        }
    })
    const result= await res.data
    if(result?.at?.length > 0 ) {
        return {message: "Đăng nhập thành công", signin: true, accessToken: result?.at}
    }
    return {message: result.message, status: result.status, signin: false}
}

export default login