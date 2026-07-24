import { Routes, Route } from "react-router";

import MainLayout from "./components/layout/MainLayout";
import Chat from "./pages/Chat";
import Features from "./pages/Features";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home / Chat */}

        <Route index element={<Chat />} />

        {/* Features */}

        <Route path="features" element={<Features />} />

        {/* Settings */}

        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
