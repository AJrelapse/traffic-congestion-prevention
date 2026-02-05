import RiskCard from "../components/cards/RiskCard"
import SpeedChart from "../components/charts/SpeedChart"
import CongestionChart from "../components/charts/CongestionChart"
import { fetchPredictions } from "../api/predict"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchPredictions().then((probs) => {
      const formatted = probs
        .map((p, i) => ({ id: `I${i}`, prob: p }))
        .sort((a, b) => b.prob - a.prob)
        .slice(0, 6)
      setData(formatted)
    })
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((n) => (
          <RiskCard key={n.id} node={n} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SpeedChart />
        <CongestionChart />
      </div>
    </div>
  )
}
