import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import MyPage from "./pages/MyPage";
import MapPoto from "./pages/MapPoto"; // MapPoto import
import UploadPage from "./pages/UploadPage"; // UploadPage import

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="upload" element={<UploadPage />} />{" "}
        {/* 'upload' 경로를 UploadPage에 매핑 */}
        <Route path="MapPoto" element={<MapPoto />} /> {/* MapPoto route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
