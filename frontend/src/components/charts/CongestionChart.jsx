import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { zone: "I12", risk: 0.42 },
  { zone: "I30", risk: 0.38 },
  { zone: "I45", risk: 0.33 },
]

export default function CongestionChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="mb-2 font-semibold">Congestion Risk</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="zone" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="risk" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
