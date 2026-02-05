import { useEffect, useState } from "react"
import Header from "./components/Header"
import RiskCard from "./components/RiskCard"
import ActionTable from "./components/ActionTable"
import { fetchPredictions } from "./api/predict"

function riskLevel(p) {
  if (p >= 0.8) return "HIGH"
  if (p >= 0.5) return "MEDIUM"
  return "LOW"
}

function actionForRisk(risk) {
  if (risk === "HIGH") return "EXTEND_GREEN"
  if (risk === "MEDIUM") return "REDUCE_INFLOW"
  return "NO_ACTION"
}

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchPredictions()
      .then((probs) => {
        console.log("Raw probabilities from model:", probs)
        const formatted = probs
          .map((p, idx) => ({
            id: `I${idx}`,
            prob: Number(p.toFixed(3)),
            risk: riskLevel(p),
            action: actionForRisk(riskLevel(p))
          }))
          .sort((a, b) => b.prob - a.prob)
          .slice(0, 8)
          .map((row, i) => {
            let risk = "LOW"
            let action = "NO_ACTION"

            if (i < 2) {
              risk = "HIGH"
              action = "EXTEND_GREEN"
            } else if (i < 5) {
              risk = "MEDIUM"
              action = "REDUCE_INFLOW"
            }

            return { ...row, risk, action }
          })          
        setData(formatted)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      <Header />

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((node) => (
          <RiskCard key={node.id} node={node} />
        ))}
      </div>

      <div className="p-6">
        <ActionTable data={data} />
      </div>
    </div>
  )
}
