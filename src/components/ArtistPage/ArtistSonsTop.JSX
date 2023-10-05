import React from 'react'

const ArtistSonsTop = ({tracks}) => {
  
  
  
    return (
   <section>
      <h3>Artist's Top songs</h3>
      {
        tracks?.map( trackInfo => (
          <TrackCard
           key={trackInfo.id}
           track={trackInfo}
          />
        ))
      }
   </section>
  )
}

export default ArtistSonsTop