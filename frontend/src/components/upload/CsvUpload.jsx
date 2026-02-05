import { useState } from "react"
import { useTraffic } from "../../context/TrafficContext"

export default function CsvUpload() {
  const { loadFromCsv } = useTraffic()
  const [loading, setLoading] = useState(false)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setLoading(true)
    await loadFromCsv(file)
    setLoading(false)
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Upload Traffic CSV</h3>

      <input
        type="file"
        accept=".csv"
        onChange={handleUpload}
      />

      {loading && (
        <p className="text-sm text-gray-500 mt-2">
          Running congestion prediction...
        </p>
      )}
    </div>
  )
}
