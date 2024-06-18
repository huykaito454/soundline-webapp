import { Suspense } from "react";
import Flow from "./pages/Flow";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/phone-number/:id" element={<Flow />}></Route>
        <Route path="/conditional/:id" element={<Flow />}></Route>
        <Route path="/department/:id" element={<Flow />}></Route>
        <Route path="/menu/:id" element={<Flow />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
