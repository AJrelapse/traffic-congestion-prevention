import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import Dashboard from "./pages/Dashboard"
import TrafficMap from "./components/map/TrafficMap"

function Signals() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Signal Status</h2>
      <p className="text-gray-600 mt-2">
        Signal control actions from ATCA will appear here.
      </p>
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
