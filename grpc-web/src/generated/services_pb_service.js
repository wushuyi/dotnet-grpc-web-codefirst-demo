// package: Shared
// file: services.proto

var services_pb = require("./services_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GreeterService = (function () {
  function GreeterService() {}
  GreeterService.serviceName = "Shared.GreeterService";
  return GreeterService;
}());

GreeterService.SayHello = {
  methodName: "SayHello",
  service: GreeterService,
  requestStream: false,
  responseStream: false,
  requestType: services_pb.HelloRequest,
  responseType: services_pb.HelloReply
};

exports.GreeterService = GreeterService;

function GreeterServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GreeterServiceClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GreeterService.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GreeterServiceClient = GreeterServiceClient;

