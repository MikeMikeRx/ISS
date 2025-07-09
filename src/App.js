import { useState, useEffect } from "react"

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [latitude, setLatitude] = useState ("")
  const [longitude, setLongitude] = useState ("")
  const [urlMap, setUrlMap] = useState ("")

  const getCoordinates = async() => {
    const response = await fetch (url)
    const data = await response.json()
 

    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])
    const iss_lat = (data["iss_position"]["latitude"])
    const iss_long = (data["iss_position"]["longitude"])    
    setUrlMap(`https://www.google.com/maps/@${iss_lat},${iss_long},6z`)
  }

  useEffect(()=>{
    getCoordinates()
  }, [])

  
  return (
    <div className="container">
    <h1 className="title">International Space Station:</h1>
    <h2>Latitude:</h2>
    <p>{latitude}</p>
    <h2>Longitude:</h2>
    <p>{longitude}</p>
    
    <a href={urlMap} target="_blank" className="btn">Location of the ISS on the Map</a>

    </div>
  )
}
  
  
  
export default App