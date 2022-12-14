import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDerivetivesData } from "../../Actions";
import { sendData, Websocket } from "../../Websocket";

const Derivetives = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const derivetiveData = useSelector(
    (state) => state?.derivetiveData?.derivetiveData
  );
  const { token, name } = useSelector(
    (state) => state?.underlayingData?.currentUnderlayingData
  );

  useEffect(() => {
    Websocket();
    dispatch(getDerivetivesData(token));
  }, []);

  const backFunctionality=()=>{
    derivetiveData?.length > 0 &&
    derivetiveData.map((item) => {
      sendData({
        msg_command: "unsubscribe",
        data_type: "quote",
        tokens: [item.token]
      });
    });
    navigate("/");
  }
  return (
    <div className="derivetive_container">
      <div className="title_wrapper">
        <button className="back_btn" onClick={() => backFunctionality()}>
          Back
        </button>
        <h1>Derivetives of {name}</h1>
      </div>
      {derivetiveData?.length > 0 &&
        derivetiveData.map((item) => {
          sendData({
            msg_command: "subscribe",
            data_type: "quote",
            tokens: [item.token]
          });
          return (
            <div className="row" key={item.token}>
              <div className="data_name">{item.symbol}</div>
              <div className="data_price">{item.token}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Derivetives;
