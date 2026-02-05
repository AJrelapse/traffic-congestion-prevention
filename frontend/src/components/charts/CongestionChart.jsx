import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function CongestionChart({ data }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="mb-2 font-semibold">
        Highest Congestion Risk Intersections
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="id" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <Bar dataKey="prob" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
