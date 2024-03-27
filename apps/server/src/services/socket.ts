import {Server, Socket} from "socket.io"

class SocketService{
    private _io:Server;

    constructor(){
      console.log("Init SOcket Service");
      this._io = new Server({
        cors:{
            allowedHeaders:["*"],
            origin:'*'
        }

      });


    }

    public initListener(){
        console.log("Init socket Listners");

        this.io.on("connect", async(socket)=>{
            console.log(`New socket conneted`, socket.id);
            socket.on("event:message", async({message}:{message:string})=>{
                console.log("new message recieved")
            })
        })
    }
    get io(){
        return this._io;
    }
}

export default SocketService;