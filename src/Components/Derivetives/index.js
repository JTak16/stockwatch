import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDerivetivesData } from "../../Actions";

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
    dispatch(getDerivetivesData(token));
  }, []);
  return (
    <div className="derivetive_container">
      <div className="title_wrapper">
        <button className="back_btn" onClick={() => navigate("/")}>
          Back
        </button>
        <h1>Derivetives of {name}</h1>
      </div>
      {derivetiveData.length > 0 &&
        derivetiveData.map((item) => {
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
