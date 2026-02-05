import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import Dashboard from "./pages/Dashboard"
import TrafficMap from "./components/map/TrafficMap"

import { useEffect, useState } from "react"
import { fetchPredictions } from "./api/predict"
import SignalTable from "./components/table/SignalTable"

function Signals() {
  const [signals, setSignals] = useState([])

  useEffect(() => {
    fetchPredictions().then((probs) => {
      const rows = probs
        .map((p, idx) => ({
          id: `I${idx}`,
          prob: Number(p.toFixed(3)),
        }))
        .sort((a, b) => b.prob - a.prob)
        .slice(0, 10)
        .map((row, i) => {
          let risk = "LOW"
          let action = "NO_ACTION"

          if (i < 2) {
            risk = "HIGH"
            action = "EXTEND_GREEN"
          } else if (i < 6) {
            risk = "MEDIUM"
            action = "REDUCE_INFLOW"
          }

          return { ...row, risk, action }
        })

      setSignals(rows)
    })
  }, [])

  return (
    <div className="p-6">
      <SignalTable data={signals} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Topbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<TrafficMap />} />
            <Route path="/signals" element={<Signals />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
