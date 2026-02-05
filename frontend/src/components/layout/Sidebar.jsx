import { NavLink } from "react-router-dom"

const linkClass =
  "block px-3 py-2 rounded hover:bg-gray-800 transition"

const activeClass =
  "bg-gray-800 text-blue-400"

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h1 className="text-xl font-bold mb-6">🚦 Traffic AI</h1>

      <nav className="space-y-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/map"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Live Map
        </NavLink>

        <NavLink
          to="/signals"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Signals
        </NavLink>
      </nav>
    </div>
  )
}
