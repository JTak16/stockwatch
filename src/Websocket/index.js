let socket = new WebSocket("wss://prototype.sbulltech.com/api/ws");
export const websocket = () => {
  socket.onopen = (e) => {
    console.log("socket is open", e);
    //open
  };
  socket.onmessage = (e) => {
    console.log("socket onmessage", e);
  };

  socket.onclose = (e) => {
    console.log("socket is close", e);
    //closing
  };

  socket.onerror = (error) => {
    console.log("socket has error", error);
    alert(error);
  };
};
export const sendData = (data) => {
  console.log("socket is sending data", data);
  // dummy data value = {
  //   "msg_command":"subscribe",
  //   "data_type":"quote",
  //   "tokens":[5872172]
  //  };
  socket.send(data);
};
