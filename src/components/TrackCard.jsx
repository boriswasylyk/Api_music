import { useDispatch } from "react-redux"
import { addTrack } from "../store/slices/tracks.slice"
import { Link, Navigate } from "react-router-dom"

const TrackCard = ({ track }) => {
  
   const dispacht =useDispatch()

   const handleAddTrack = () => {
     dispacht(addTrack(track))
   }
  
   const handleArtist = (id) => {
    Navigate(`/artist/${id}`)
   }
    return (
    <div class="trackcard_div_2">
    <div className="trackcard_div">
        <section className="trackcard_section">
        <header className="trackcard_header">
            <img className="trackcard_image" src={track.album.images[0].url} alt="" />
        </header>
        <article className="trackcard_article">
            <Link onClick={handleArtist} className="trackcard_to_id" to={`/track/${track.id}`}><h3 className="trackcard_h3">{track.name}</h3></Link>
            <ul className="trackcard_ul">
                {
                    track.artists.map(artist =>(
                        <li className="trackcard_li" key={artist.id}
                        >{artist.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer className="trackcard_footer">
            <a>
                <i className="'bx bxl-spotify"></i>
            </a>
            <button className="tracklist_bottom" onClick={handleAddTrack}>
                <i className=' bx bx-plus-circle'></i>
            </button>
        </footer>
        
       </section>
     </div>
   </div>
  )
}

export default TrackCard