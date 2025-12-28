import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyComponent1 from "./components/MyComponent1.jsx";
import MyComponent2 from "./components/MyComponent2.jsx";
import MyComponent3 from "./components/MyComponent3.jsx";
import MyComponent4 from "./components/MyComponent4.jsx";
import MyComponent5 from "./components/MyComponent5.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/4" replace />} />
      <Route path="/1" element={<MyComponent1 />} />
      <Route path="/2" element={<MyComponent2 />} />
      <Route path="/3" element={<MyComponent3 />} />
      <Route path="/4" element={<MyComponent4 />} />
      <Route path="/5" element={<MyComponent5 />} />
    </Routes>
  </BrowserRouter>
);


