import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="hidden lg:flex items-center justify-center bg-indigo-600 w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to NexStyle Shopping
          </h1>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

