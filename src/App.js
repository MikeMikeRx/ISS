import LiveMap from "./components/LiveMap"
import { useState, useEffect } from "react"


const App = () => {
  const [lat, setLat] = useState (0)
  const [lon, setLon] = useState (0)


  const fetchISS = async () => {
    const res = await fetch ("http://api.open-notify.org/iss-now.json")
    const data = await res.json()
    setLat(Number(data.iss_position.latitude))
    setLon(Number(data.iss_position.longitude))
  }
 
  useEffect(()=>{
    fetchISS()
    const interval = setInterval(fetchISS, 5000)
    return () => clearInterval(interval)
  }, [])

  
  return (    
    <div className="container">
    <h1 className="title">International Space Station</h1>
    <h2>ISS Location:</h2>
    <h3>Latitude:</h3>
    <p>{lat}</p>
    <h3>Longitude:</h3>
    <p>{lon}</p>

    <div className="map-container">
      <LiveMap lat={lat} lon={lon} />
    </div>
    </div>    
  )
}
  
  
  
export default App