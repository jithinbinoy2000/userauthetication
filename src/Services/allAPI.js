import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"

//registration api
export const registerAPI = async(user)=>{
return await commonAPI("POST",`${serverUrl}/register`,user,"")
}
export const loginAPI =async(user)=>{
    return await commonAPI("POST",`${serverUrl}/login`,user,'')
}