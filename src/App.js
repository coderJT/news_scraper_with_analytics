import { NewsProvider } from "./utils/providers/newsProvider";
import { DashboardProvider } from "./utils/providers/dashboardProvider";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <DashboardProvider>
      <NewsProvider>
        <Dashboard></Dashboard>
      </NewsProvider>
    </DashboardProvider>
  );
}

export default App;
