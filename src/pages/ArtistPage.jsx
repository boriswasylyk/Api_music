import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const ArtistPage = () => {

 const { id } =  useParams()

 const { artist, getArtist } =useFetch()

 useEffect(() => {
   getArtist(`/api/artist/${id}`)
 }, [id])
 

  return (
    <div>
        <Link to='/'>Atras</Link>
        <ArtistInfo artist={artist}
        />
        <ArtistAlbum
         albums={artist?.albums}
        />
       <ArtistSonsTop
        tracks={artist?.sonsTop}
       />
        </div>  
  )
}

export default ArtistPage