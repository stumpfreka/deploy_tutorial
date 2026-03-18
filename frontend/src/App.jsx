import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Public from "./pages/Public";
import Private from "./pages/Private";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import PostDetail from "./components/PostDetail";

function App() {
  const init = useAuthStore((s) => s.init);

  useEffect(() => {
    init(); //cookie ellenorzes /me endpointon
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PostDetail />} />
          <Route path="/public" element={<Public />} />
          <Route path="/private" element={<Private />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  );
}

export default App;
