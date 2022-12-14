import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainRoutes from "../../MainRoutes";
import { getUnderlayingData } from "../../Actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUnderlayingData());
  }, []);

  return (
    <div className="app_container">
      <MainRoutes />
    </div>
  );
};

export default App;
