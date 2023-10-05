import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/TrackCard"

const TracksRelated = ({artist}) => {
  
  
  
  const [ tracksList, getTracksList ] = useFetch()


  useEffect(() => {
    if (artist) {
      getTracksList(`/api/tracks?limit=10&q=${artist}`)
      
    }
  }, [artist])
  
  console.log(tracksList)
  
  
  return (
    <div>
      <h3>
        Track related
        <div>
          {
               tracksList?.tracks.items.map( track => (
                <TrackCard 
                  key={track.id}
                  track={track}
                />
               ) )
          }
        </div>
      </h3>
    </div>
  )
}

export default TracksRelated