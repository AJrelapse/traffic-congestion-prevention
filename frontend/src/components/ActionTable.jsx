export default function ActionTable({ data }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Intersection</th>
          <th className="p-2">Risk</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="p-2">{row.id}</td>
            <td className="p-2">{row.risk}</td>
            <td className="p-2">{row.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
