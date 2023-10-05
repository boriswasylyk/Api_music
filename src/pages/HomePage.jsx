import { useEffect, useRef, useState } from 'react'
import TrackCard from '../components/TrackCard'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'


const HomePage = () => {
  
  const [ listTracks, getListTracks ] = useFetch()
  
  const [inputValue, setinputValue] = useState('ricardo arjona')

  const [quantityPerPage, setquantityPerPage] = useState(10)

  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])
  

  const inputSearch = useRef()

  const HandleSearch = e => {
   e.preventDefault()
   setinputValue(inputSearch.current.value.trim().toLowerCase())
  }   

  const handleTracksPerPage = e => {
    setquantityPerPage(e.target.value)
  }

 const tracksPlayList = useSelector(store => store.data)


  return (

    <div>
      <div>
        <form onSubmit={HandleSearch} action="">
        <input ref={ inputSearch } type="text" />
        <select onChange={handleTracksPerPage} defaultValue={10}>
          {
            [2,4,6,8,10].map( tracksPerPage => (
               <option 
               key={tracksPerPage} 
               value={tracksPerPage}>
                {tracksPerPage}
                </option>
            ))
          }
        </select>
        </form>
        <div>
            {
              listTracks?.tracks.items.map( track=> (
                <TrackCard
                key={track.id}
                track={track}
                />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default HomePage