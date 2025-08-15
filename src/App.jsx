// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
