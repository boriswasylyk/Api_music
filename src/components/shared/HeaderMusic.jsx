import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useForm } from "react-hook-form"
import usePlaylist from "../../hooks/usePlaylist"


const HeaderMusic = () => {
  
  
   const tracksPlayList = useSelector(store => store.tracks)  
   
   
  const { reset, handleSubmit, register } = useForm()
  const { postPlaylist } = usePlaylist()

  const submit = data => {
    const obj ={
      ...data,
      tracks: tracksPlayList.map(e => ({id:e.id}))
    }
    postPlaylist(obj)
    reset({
      title:"",
      to:"",
      message:"",
    })
  }
  
 
 
  return (
    <header className="header_music">
      <h1 className="header_h1">Gift Music</h1>
      <div className="header_div">
        <form onSubmit={handleSubmit(submit)}>
          <img  src="public\Images\image 54.png" className="header_image"/>
            <label className="header_title" htmlFor="title"></label>
            <input className="header_input_text" {...register(`title`)} type="text" id="title" placeholder="New playlist" />
          
         
          {
            tracksPlayList.map( track => (
                <TrackList 
                 key={track.id}
                 track={track}
                />
            ))
          }
         
        <div className="header_backface">
         <img src="public\Images\image 54 (1).png" className="header_image"/>
          <div  >
            <label htmlFor="to">To</label>
            <input className="input_to"{...register(`to`)} type="text" id="to" placeholder="To" />
          </div>
          <div >
            <label htmlFor="message"></label>
            <textarea className="input_message" {...register(`message`)} id="message" placeholder="Message" />
          </div>
       </div>
          <button className="header_buttom">Create</button>
        </form>
      </div>
    </header>
  )
}

export default HeaderMusic