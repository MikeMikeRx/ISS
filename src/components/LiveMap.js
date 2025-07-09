import "./LiveMap.css"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"

const RecenterMap = ({ lat, lon }) => {
    const map = useMap()

    useEffect(() => {
        map.setView([lat, lon], map.getZoom(), { animate:true})
    }, [lat, lon, map])

    return null
} 

const issIcon = new L.divIcon({
    html: `<div class="iss-icon-wrapper"><img src="/satellite2.png" alt=ISS" /></div>`,
    className:"",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
})


const LiveMap = ({lat, lon}) => {
    return (
        <MapContainer
            center={[lat, lon]}
            zoom={5}
            minZoom={2}
            maxZoom={10}
            scrollWheelZoom={true}
            className="map-wrapper"
            >
        
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[lat, lon]} icon={issIcon}>
                <Popup>
                    ISS is here! <br/>
                    Lat: {lat.toFixed(2)}, Lon: {lon.toFixed(2)}
                </Popup>
            </Marker>
            <RecenterMap lat={lat} lon={lon} />
        </MapContainer>     
    )
}

export default LiveMap