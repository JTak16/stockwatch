import { Route, Routes } from "react-router-dom";
import Derivetives from "../Components/Derivetives";
import Underlayings from "../Components/Underlayings";
import ErrorPage from "../Components/ErrorPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Underlayings />} />
      <Route path="/derivetives/:name" element={<Derivetives />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
