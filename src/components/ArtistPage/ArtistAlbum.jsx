

const ArtistAlbum = ({albums}) => {
  
  
  
  
    return (
    <div>
       <h3>Artist's album</h3>
       <div>
        {
           albums?.map( albumInfo =>(
            <AlbumCard 
             key={albumInfo.id}
             album={albumInfo}
            />
           ))
        }
       </div>
    </div>
  )
}

export default ArtistAlbum