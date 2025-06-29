"use client";

import { Suspense } from "react";
import BookingForm from "../Components/BookingForm";
import PrivateRoute from "../Components/PrivateRoute";
import { useAuth } from "../context/authContext";

export default function BookingPage() {
  const { logout } = useAuth();
  return (
    <PrivateRoute>
      <Suspense>
        <BookingForm />
      </Suspense>
    </PrivateRoute>
  );
}
