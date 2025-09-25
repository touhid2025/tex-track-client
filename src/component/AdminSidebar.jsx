import { Link, useLocation } from "react-router";
import { FaPlus, FaUserCog, FaTachometerAlt, FaSignOutAlt, FaListAlt } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
    { name: "Add MCQ", path: "/admin/add-mcq", icon: <FaPlus /> },
    { name: "Manage MCQ", path: "/admin/manage", icon: <FaPlus /> },
    { name: "Results", path: "/admin/results", icon: <FaListAlt /> },
    { name: "Users", path: "/admin/users", icon: <FaUserCog /> },
    { name: "Logout", path: "/log/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0 shadow-lg hidden md:block">
      <div className="p-6 text-2xl font-bold text-yellow-400">
        Admin Panel
      </div>
      <ul className="mt-6 space-y-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center px-6 py-3 hover:bg-gray-700 transition ${
                location.pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
