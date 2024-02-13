import { WebSocketServer } from "ws";

const WS_PORT = 3000;
const wsServer = new WebSocketServer({ port: WS_PORT });

console.log;
wsServer.on("listening", () =>
  console.log(`WebSocket server is running on port: ${WS_PORT}`)
);

wsServer.on("error ", () => {
  console.log(`Error.`);
});

wsServer.on("close", () => {
  console.log(`WebSocket server close`);
});

wsServer.on("connection",()=>{
    
})

export default wsServer;
