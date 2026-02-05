import { useTraffic } from "../context/TrafficContext"
import SignalTable from "../components/table/SignalTable"

export default function Signals() {
  const { nodes } = useTraffic()
  return (
    <div className="p-6">
      <SignalTable data={nodes.slice(0, 10)} />
    </div>
  )
}
