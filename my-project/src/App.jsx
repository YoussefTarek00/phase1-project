import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Competency from "./Components/Competency";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="competency" element={<Competency />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
