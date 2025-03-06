import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/Addrecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/addrecipe" element={<AddRecipe />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
