import React, { lazy, Suspense } from "react";

const DashboardApp = lazy(() => import("dashboard/App"));

const App = () => (
  <Suspense fallback="...Loading">
    <DashboardApp />
  </Suspense>
);

export default App;
