import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import TrackInfo from "../trakPage/TrackInfo"
import { useEffect } from "react"
import TracksRelated from "../trakPage/TracksRelated"


const TrackPage = () => {

  const { id } = useParams()

  const [ track, getTrack] = useFetch()

  useEffect(() => {
    getTrack(`/api/tracks/${id}`)
  }, [id])

  const navigate = useNavigate() 
  
  
  const handleBack = () => {
    navigate(-1)
  }
  
 

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <TrackInfo
        track={track}
      />
      <TracksRelated
        artist={track?.artists[0].name} />
    </div>
  )
}

export default TrackPage