import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { t: "08:00", speed: 42 },
  { t: "09:00", speed: 35 },
  { t: "10:00", speed: 38 },
  { t: "11:00", speed: 45 },
]

export default function SpeedChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="mb-2 font-semibold">Average Speed</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="t" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="speed" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
