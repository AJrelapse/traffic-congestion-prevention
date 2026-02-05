import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import Dashboard from "./pages/Dashboard"
import TrafficMap from "./components/map/TrafficMap"
import Signals from "./pages/Signals"
import { TrafficProvider } from "./context/TrafficContext"

export default function App() {
  return (
    <TrafficProvider>
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
    </TrafficProvider>
  )
}
