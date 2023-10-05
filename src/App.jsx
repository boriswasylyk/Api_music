import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import {setCredentialSlices} from './store/slices/credentials.slice'
import { useDispatch } from 'react-redux'
import ProtectedRoute from './pages/ProtectedRoute'
import TrackPage from './pages/TrackPage'
import ArtistPage from './pages/ArtistPage'
import PlaylistPage from './pages/PlaylistPage'
import './App.css'
import './styles.css/TrackCard.css'
import './styles.css/HeaderMusic.css'


function App() {
  
  const dispatch = useDispatch()

  useEffect( () => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const obj = {token, username, email}
    dispatch(setCredentialSlices(obj))
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/auth/login' element={<LoginPage/>} />
        <Route path='/auth/register' element={<RegisterPage/>} />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<HomePage/>} />
          <Route path='/track/:id' element={<TrackPage />} />
          <Route path='/artist/:id' element={<ArtistPage/>}/>
          <Route path='/playlist' element={<PlaylistPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
