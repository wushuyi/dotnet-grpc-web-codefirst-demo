using System;
using System.Threading.Tasks;
using ProtoBuf.Grpc;
using Shared;

namespace Service.Grpc
{
    public class GreeterService : IGreeterService
    {
        public Task<HelloReply> SayHelloAsync(HelloRequest request, CallContext context = default)
        {
            Console.WriteLine(request.Name);
            return Task.FromResult(new HelloReply()
            {
                Message = $"Hello {request.Name}"
            });
        }
    }
}