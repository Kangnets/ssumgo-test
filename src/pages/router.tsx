import { Routes, Route } from "react-router-dom";

import { MainPage } from "./main/page";
import { Success } from "./success/page";
import { Finish } from "./finish/page";

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/finish" element={<Finish />} />
    </Routes>
  );
}
