
import './App.css'
import Login from './Pages/Login/Login'
import Registration from './Pages/Register/Registration'
import Home from './Pages/Home/Home'
import { Routes,Route, Navigate} from 'react-router-dom'

function App() {
 

  return (
    <>
<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Registration/>}/>  
    <Route path="/home" element={<Home/>}/> 
    <Route path="/*" element={<Navigate to={"/"}/>}/>

</Routes>
    </>
  )
}

export default App

