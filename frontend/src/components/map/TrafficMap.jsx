import { MapContainer, TileLayer, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const points = [
  { lat: 34.05, lng: -118.25, risk: 0.4 },
  { lat: 34.07, lng: -118.24, risk: 0.2 },
]

export default function TrafficMap() {
  return (
    <MapContainer center={[34.05, -118.25]} zoom={12} className="h-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {points.map((p, i) => (
        <Circle
          key={i}
          center={[p.lat, p.lng]}
          radius={500}
          pathOptions={{ color: p.risk > 0.3 ? "red" : "green" }}
        />
      ))}
    </MapContainer>
  )
}
