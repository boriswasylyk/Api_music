import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCredentialSlices } from "../store/slices/credentials.slice"

const useAuth = () => {
 
   const baseURL = 'https://playlist-share-dev.fl0.io'
   
   
   const navigate = useNavigate()
       const dispatch = useDispatch()
       
       const url = `${baseURL}/api/auth/login`
      
      
       const loginUser = (data) => {

        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            const token = res.data.token
            const username = res.data.username
            const email = res.data.email
            localStorage.setItem("token", token)
            localStorage.setItem("username", username)
            localStorage.setItem("email", email)
            const obj = {token, username, email}
            dispatch(setCredentialSlices(obj))
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            dispatch(setCredentialSlices(null))
             localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("email")
        })
    }
   
   
    const registerUser= (data) => {
    const url = `${baseURL}/api/auth/register`
    axios.post(url, data)
    .then( res => console.log(res.data))
    .catch(err => console.log(err))
   }

   return { loginUser, registerUser }
}

export default useAuth