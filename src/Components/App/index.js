import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainRoutes from "../../MainRoutes";
import { getUnderlayingData } from "../../Actions";
import { websocket } from "../../Websocket";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    websocket();
    dispatch(getUnderlayingData());
  }, []);

  return (
    <div className="app_container">
      <MainRoutes />
    </div>
  );
};

export default App;
