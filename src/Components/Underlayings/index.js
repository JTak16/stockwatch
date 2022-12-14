import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveCurrentUnderlying } from "../../Actions";

const Underlayings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const underlayingData = useSelector(
    (state) => state?.underlayingData?.underlayingData
  );

  const _handleDerivetiveClick = (token, name) => {
    dispatch(saveCurrentUnderlying(token, name));
    navigate(`/derivetives/${name}`);
    // sendData({
    //   msg_command: "subscribe",
    //   data_type: "quote",
    //   tokens: [token]
    // });
  };

  const getPrice = (tkn) => {
    // return sendData({
    //   msg_command: "subscribe",
    //   data_type: "quote",
    //   tokens: [tkn],
    // });
  };
  return (
    <>
      <h1>Stocks</h1>
      {underlayingData &&
        underlayingData.length > 0 &&
        underlayingData.map((item) => {
          return (
            <div className="row" key={item.token}>
              <div className="data_name">{item.underlying}</div>
              <div className="data_price">{getPrice(item.token)}</div>
              <button
                className="btn_primary"
                onClick={() =>
                  _handleDerivetiveClick(item.token, item.underlying)
                }
              >
                Show Derivetives
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Underlayings;
