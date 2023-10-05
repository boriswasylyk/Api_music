import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import { setTracksSlice } from "../store/slices/tracks.slice"
import { useDispatch } from "react-redux"

const usePlaylist = () => {
 
    const [playlist, setplaylist] = useState([])
  const dispatch  =useDispatch()


    const baseURL = 'https://playlist-share-dev.fl0.io'

    const getPlayList = () => {
       const url = `${baseURL}/api/playlists/me`
        axios.get(url, getConfigToken())
        .then(res => setplaylist(res.data))
        .catch(err => console.log(err))
    }   

    const postPlaylist = (data) => {
        const url = `${baseURL}/api/playlists`
        console.log(data)
        axios.post(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
          setplaylist([...playlist,res.data.info])
          dispatch(setTracksSlice([]))
        })
        .catch(err => console.log(err))
    }
   const deletePlaylist = (id) => {
    const url = `${baseURL}/api/playlists/${id}`
    axios.delete(url,getConfigToken())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
   }

    return  { playlist, getPlayList, postPlaylist, deletePlaylist}
}

export default usePlaylist