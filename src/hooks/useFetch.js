import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import axios from "axios"


const useFetch = () => {

 const [infoApi, setInfoApy] = useState()
 
 const baseUrl ='https://playlist-share-dev.fl0.io'

 const getApi = (path) => {
    const url = `${baseUrl}${path}`
    axios.get(url,getConfigToken())
    .then(res => setInfoApy(res.data))
    .catch(err => console.log(err.data))
}
  return [ infoApi, getApi ]
}

export default useFetch