import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components

export const config = {
  endpoint: `https://qtify-backend-labs.crio.do`,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home page route */}
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;
