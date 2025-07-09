import { useEffect } from "react";
import { useMap } from "react-leaflet";

const RecenterMap = ({ lat, lon}) =>{
    const map = useMap()

    useEffect(() =>{
        map.setView([lat, lon], map.getZoom(), { animate: true})
    }, [lat, lon, map])

    return null
}