
const ArtistInfo = ({artist}) => {
  return (
    <section>
        <header>
            <img src={artist?.images[0].url} alt="" />
        </header>
        <article>
            <h2>{artist?.name}</h2>
            <ul>
                <li><span>Followrs:</span><span>{artist?.followers.total}</span></li>
                <li><span>Popularyty:</span><span>{artist?.popularity}</span></li>
                <li><span>Generes:</span></li>
                <ul>
                    {
                      artist?.generes.map( genere => (
                        <li key={genre}>{genre}</li>
                      ))
                      
                    } 
                </ul>
            </ul>
        </article>
    </section>
  )
}

export default ArtistInfo