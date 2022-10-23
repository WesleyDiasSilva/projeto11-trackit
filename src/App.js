import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import HistoryPage from "./pages/HistoryPage";
import { UserContext } from "./Contexts/UserContext";
import { ProgressContext } from "./Contexts/ProgressContext";
import React from "react";

function App() {
  const [user, setUser] = React.useState({});
  const [progress, setProgress] = React.useState(undefined);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <ProgressContext.Provider
          value={{ progress: progress, setProgress: setProgress }}
        >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoryPage />} />
          </Routes>
        </ProgressContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
