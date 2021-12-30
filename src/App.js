import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./components/Landing/Landing";
import Profil from "./components/Profil/Profil";
function App() {
  const user = {
    nom: "annis",
  }
  return (
    <Router>
        <div className="App font-body relative">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/profil" element={<Profil user={user} />}></Route>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
