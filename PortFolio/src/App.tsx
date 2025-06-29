import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
