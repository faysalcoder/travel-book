"use client";

import PrivateRoute from "../Components/PrivateRoute";
import { useAuth } from "../context/authContext";

export default function BookingPage() {
  const { logout } = useAuth();
  return (
    <PrivateRoute>
      <div className="p-4">Booking Page – Protected</div>
      <button onClick={logout}>Logout</button>
    </PrivateRoute>
  );
}
