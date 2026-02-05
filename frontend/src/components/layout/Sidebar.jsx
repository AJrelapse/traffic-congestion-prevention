export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h1 className="text-xl font-bold mb-6">🚦 Traffic AI</h1>
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Live Map</li>
        <li className="hover:text-blue-400 cursor-pointer">Signals</li>
      </ul>
    </div>
  )
}
