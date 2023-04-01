import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutesWrapper from "./routes/RoutesWrapper";
function App() {
  return (
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
  );
}

export default App;
