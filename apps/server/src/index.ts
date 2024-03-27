import http from "http"
import { Socket } from "socket.io";
import SocketService from "./services/socket"

async function init(){
    const socketService = new SocketService();

    const httpServer = http.createServer();
    const port = process.env.PORT ? process.env.PORT:8000 
    socketService.io.attach(httpServer);
    
    httpServer.listen(port, ()=>{
        console.log(`HTTP Server started at Port:${port}`)
    });
    socketService.initListener();

}
init();