import { useTraffic } from "../context/TrafficContext"
import RiskCard from "../components/cards/RiskCard"
import SpeedChart from "../components/charts/SpeedChart"
import CongestionChart from "../components/charts/CongestionChart"

export default function Dashboard() {
  const { nodes } = useTraffic()

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nodes.slice(0, 6).map((n) => (
          <RiskCard key={n.id} node={n} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SpeedChart data={nodes.slice(0, 10)} />
        <CongestionChart data={nodes.slice(0, 10)} />
      </div>
    </div>
  )
}
