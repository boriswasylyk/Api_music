import React from 'react'
import { useState } from 'react'

const TrackInfo = ({track}) => {

    const [isShowPlayer, setisShowPlayer] = useState(false)


    const handlePlayer = () => {
        setisShowPlayer(!isShowPlayer)
      }
    
  return (
    <div>
    
    <header>
        <img onClick={handlePlayer} src={track?.album.images[0].url} alt="" />
    </header>
    <article>
    <section>
        <h3>{track?.name}</h3>
        <ul>
            {
                track?.artists.map( artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))
            }
        </ul>
        <p><span>Album:</span>{track?.album.name}</p>
        <p><span>Relase date:</span>{track?.album.relase_date}</p>
    </section>
    </article>
    {
     isShowPlayer
     && (

        <iframe 
    style="border-radius:12px" 
    src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
     width="100%" 
     height="352"
      frameBorder="0"
       allowFullScreen="" 
       allow="autoplay; clipboard-write; 
       encrypted-media; 
       fullscreen;
        picture-in-picture" 
        loading="lazy">

        </iframe>
     )
    }
    </div>
  )
}

export default TrackInfo