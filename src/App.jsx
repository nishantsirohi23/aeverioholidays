import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NoLayout from "./layouts/NoLayout";
import Main from "./Components/Main";
import PackageDetails from "./pages/PackageDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        {/* Add more routes that need layout */}
      </Route>

      <Route element={<NoLayout />}>
        <Route path="/:destination" element={<PackageDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
