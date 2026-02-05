export default function RiskCard({ node }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h3 className="font-semibold">{node.id}</h3>
      <p>Probability: {node.prob}</p>
      <p className={
        node.risk === "HIGH"
          ? "text-red-600"
          : "text-yellow-600"
      }>
        Risk: {node.risk}
      </p>
      <p className="font-medium">Action: {node.action}</p>
    </div>
  )
}
