export default function SignalTable({ data }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Signal Control Actions</h3>

      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Intersection</th>
            <th className="p-2 border">Probability</th>
            <th className="p-2 border">Risk</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.prob}</td>
              <td className="p-2 border">
                <span
                  className={
                    row.risk === "HIGH"
                      ? "text-red-600 font-semibold"
                      : row.risk === "MEDIUM"
                      ? "text-yellow-600 font-semibold"
                      : "text-green-600"
                  }
                >
                  {row.risk}
                </span>
              </td>
              <td className="p-2 border font-medium">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
