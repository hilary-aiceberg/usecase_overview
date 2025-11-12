import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/polymet/layouts/dashboard-layout";
import { UseCaseDashboard } from "@/polymet/pages/use-case-dashboard";

export default function DashboardPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <UseCaseDashboard />
            </DashboardLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <UseCaseDashboard />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}
