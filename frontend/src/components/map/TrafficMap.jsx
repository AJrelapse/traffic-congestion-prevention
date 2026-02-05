import { MapContainer, TileLayer, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useTraffic } from "../../context/TrafficContext"
import sensorLocations from "../../data/sensor_locations.json"

const locationMap = Object.fromEntries(
  sensorLocations.map((s) => [
    s.index,
    { lat: s.lat ?? s.latitude, lng: s.lng ?? s.longitude }
  ])
)

export default function TrafficMap() {
  const { nodes } = useTraffic()

  if (!nodes.length) {
    return <div className="p-6">Loading traffic map...</div>
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[34.05, -118.25]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {nodes.map((n) => {
          const index = Number(n.id.replace("I", ""))
          const loc = locationMap[index]

          if (!loc || loc.lat == null || loc.lng == null) {
            return null
          }

          const color =
            n.risk === "HIGH"
              ? "red"
              : n.risk === "MEDIUM"
              ? "orange"
              : "green"

          return (
            <Circle
              key={n.id}
              center={[loc.lat, loc.lng]}
              radius={300 + n.prob * 1000}
              pathOptions={{ color }}
            />
          )
        })}
      </MapContainer>
    </div>
  )
}
