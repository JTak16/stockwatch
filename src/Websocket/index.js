import { useSelector, useDispatch } from "react-redux";
var socket = new WebSocket("wss://prototype.sbulltech.com/api/ws");

export const Websocket = () => {
  socket.onopen = (e) => {
    let date = new Date()
    console.log(
        'connected',
        date.getHours() +
            ':' +
            date.getMinutes() +
            ':' +
            date.getSeconds() +
            ':' +
            date.getMilliseconds()
    )
    console.log("socket is open", e);
  };
  socket.onmessage = (e) => {
    let date = new Date()
    console.log(
        'on message',
        date.getHours() +
            ':' +
            date.getMinutes() +
            ':' +
            date.getSeconds() +
            ':' +
            date.getMilliseconds()
    )
    console.log("socket onmessage", e);
    UpdatederivativesData(e);
  };

  socket.onclose = (e) => {
    let date = new Date()
    console.log(
        'disconnected',
        date.getHours() +
            ':' +
            date.getMinutes() +
            ':' +
            date.getSeconds() +
            ':' +
            date.getMilliseconds()
    );
    // socket=null;
  };

  socket.onerror = (error) => {
    console.log("socket has error", error);
    alert(error);
  };
};
export const sendData = (data) => {
  if(socket){
    console.log("socket is sending data", socket);
    socket.send(data);
  } 
};


const UpdatederivativesData = (e) =>{
  const derivativeData = useSelector(
    (state) => state?.derivetiveData?.derivetiveData
  );
  const dispatch = useDispatch();
  let mainData = derivativeData.map((item) => {
    if(e.payload.token === item.token){
      item['price'] = e.payload.price;
    }
    return item;
  });
  dispatch({
    type: "GET_DERIVETIVES_DATA",
    payload: mainData,
  });
}