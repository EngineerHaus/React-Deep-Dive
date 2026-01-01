import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyComponent1 from "./components/useState/MyComponent1.jsx";
import MyComponent2 from "./components/useState/MyComponent2.jsx";
import MyComponent3 from "./components/useState/MyComponent3.jsx";
import MyComponent4 from "./components/useState/MyComponent4.jsx";
import MyComponent5 from "./components/useState/MyComponent5.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/useState/5" replace />} />
      <Route path="/useState/1" element={<MyComponent1 />} />
      <Route path="/useState/2" element={<MyComponent2 />} />
      <Route path="/useState/3" element={<MyComponent3 />} />
      <Route path="/useState/4" element={<MyComponent4 />} />
      <Route path="/useState/5" element={<MyComponent5 />} />
    </Routes>
  </BrowserRouter>
);


