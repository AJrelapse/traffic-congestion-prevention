import { useTraffic } from "../context/TrafficContext"
import RiskCard from "../components/cards/RiskCard"
import CongestionChart from "../components/charts/CongestionChart"
import SpeedChart from "../components/charts/SpeedChart"
import CsvUpload from "../components/upload/CsvUpload"

export default function Dashboard() {
  const { nodes } = useTraffic()

  const topRisky = nodes.slice(0, 6)

  const chartData = topRisky.map((n) => ({
    id: n.id,
    prob: n.prob
  }))

  return (
    <div className="p-6 space-y-6">
      <CsvUpload />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topRisky.map((n) => (
          <RiskCard key={n.id} node={n} />
        ))}
      </div>

      <SpeedChart data={nodes.slice(0, 10)} />
      <CongestionChart data={chartData} />
    </div>
  )
}
