import { createContext, useContext, useEffect, useState } from "react"
import { fetchPredictions } from "../api/predict"

const TrafficContext = createContext()

export function TrafficProvider({ children }) {
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    fetchPredictions().then((probs) => {
      const ranked = probs
        .map((p, idx) => ({
          id: `I${idx}`,
          prob: Number(p.toFixed(3))
        }))
        .sort((a, b) => b.prob - a.prob)

      const withActions = ranked.map((node, i) => {
        let risk = "LOW"
        let action = "NO_ACTION"

        if (i < 2) {
          risk = "HIGH"
          action = "EXTEND_GREEN"
        } else if (i < 6) {
          risk = "MEDIUM"
          action = "REDUCE_INFLOW"
        }

        return { ...node, risk, action }
      })

      setNodes(withActions)
    })
  }, [])

  return (
    <TrafficContext.Provider value={{ nodes }}>
      {children}
    </TrafficContext.Provider>
  )
}

export function useTraffic() {
  return useContext(TrafficContext)
}
