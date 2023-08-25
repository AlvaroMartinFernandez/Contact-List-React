import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import AddNewUser from "./views/AddNewUser/AddNewUser";
function App() {
  return (
    <BrowserRouter basepath="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddNewContact" element={<AddNewUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
