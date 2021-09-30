using System;
using System.Net.Http;
using System.Threading.Tasks;
using Grpc.Net.Client;
using Grpc.Net.Client.Web;
using ProtoBuf.Grpc.Client;
using Shared;

namespace Client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using var channel = GrpcChannel.ForAddress("https://localhost:5001", new GrpcChannelOptions()
            {
                HttpHandler = new GrpcWebHandler(new HttpClientHandler())
            });
            var client = channel.CreateGrpcService<IGreeterService>();


            var reply = await client.SayHelloAsync(new HelloRequest()
            {
                Name = ".Net"
            });

            Console.Write($"Greeting: {reply.Message}");
        }
    }
}