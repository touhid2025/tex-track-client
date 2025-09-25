import { Outlet } from "react-router";
import AdminSidebar from "./AdminSidebar";


const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-6 w-full">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
        <Outlet></Outlet>
        {/* Dashboard content */}
      </div>
    </div>
  );
};

export default AdminDashboard;
