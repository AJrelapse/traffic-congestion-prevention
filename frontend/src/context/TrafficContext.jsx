import { createContext, useContext, useState } from "react"
import { uploadCsvAndPredict } from "../api/predict"

const TrafficContext = createContext()

function riskFromProb(p) {
  if (p >= 0.7) return "HIGH"
  if (p >= 0.4) return "MEDIUM"
  return "LOW"
}

function actionFromRisk(risk) {
  if (risk === "HIGH") return "EXTEND_GREEN"
  if (risk === "MEDIUM") return "REDUCE_INFLOW"
  return "NO_ACTION"
}

export function TrafficProvider({ children }) {
  const [nodes, setNodes] = useState([])

  async function loadFromCsv(file) {
    const data = await uploadCsvAndPredict(file)

    const enriched = data
      .map((n) => {
        const risk = riskFromProb(n.prob)
        return {
          id: n.id,
          prob: Number(n.prob.toFixed(3)),
          risk,
          action: actionFromRisk(risk)
        }
      })
      .sort((a, b) => b.prob - a.prob)

    setNodes(enriched)
  }

  return (
    <TrafficContext.Provider value={{ nodes, loadFromCsv }}>
      {children}
    </TrafficContext.Provider>
  )
}

export function useTraffic() {
  return useContext(TrafficContext)
}
