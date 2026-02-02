import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import FormPage from "./pages/FormPage";
import ProgressPage from "./pages/ProgressPage";
import TimerPage from "./pages/TimerPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/forms" element={<FormPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default App;
