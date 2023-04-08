import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Feed from "./Components/Feed";
import Error from "./Components/Error";
import AppState from "./Context/AppState";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <h1>Context Examples</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feed">Feed</Link>
              </li>
            </ul>
          </nav>
          <AppState>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/feed" element={<Feed />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AppState>
        </div>
      </Router>
    </>
  );
}

export default App;
