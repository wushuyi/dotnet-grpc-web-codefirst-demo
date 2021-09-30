import React from 'react';
import logo from './logo.svg';
import './App.css';
import {grpc} from "@improbable-eng/grpc-web";
import {GreeterService, GreeterServiceClient} from './generated/services_pb_service';
import {HelloRequest} from "./generated/services_pb";

function App() {

    let helloRequest = new HelloRequest();
    helloRequest.setName("巫书轶")
    let host = "https://localhost:5001";
    let greeterServiceClient = new GreeterServiceClient(host);
    greeterServiceClient.sayHello(helloRequest,
        (error, responseMessage) => {
            if (!error && responseMessage) {
                let toObject = responseMessage.toObject();
                console.log(toObject.message)
            }
        })
    /*    let client = grpc.client(GreeterService.SayHello, {host: host});
        client.onEnd((code, message, trailers) => {
            console.log("all ok: ", message);
            if (code === grpc.Code.OK && message) {
                console.log("all ok: ", message);
            }
        })
        client.start();
        client.send(helloRequest)*/

    /*    grpc.unary(GreeterService.SayHello, {
            request: helloRequest,
            host: host,
            onEnd: res => {
                const {status, statusMessage, headers, message, trailers} = res;
                if (status === grpc.Code.OK && message) {
                    console.log("all ok: ", message.toObject());
                }
            }
        });*/
    return (
        <div className="App">
            <span>message</span>
        </div>
    );
}

export default App;
