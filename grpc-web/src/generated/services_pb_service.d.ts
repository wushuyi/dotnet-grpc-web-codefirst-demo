// package: Shared
// file: services.proto

import * as services_pb from "./services_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GreeterServiceSayHello = {
  readonly methodName: string;
  readonly service: typeof GreeterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pb.HelloRequest;
  readonly responseType: typeof services_pb.HelloReply;
};

export class GreeterService {
  static readonly serviceName: string;
  static readonly SayHello: GreeterServiceSayHello;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class GreeterServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: services_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: services_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: services_pb.HelloReply|null) => void
  ): UnaryResponse;
}

