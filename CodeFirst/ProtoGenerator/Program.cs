using System;
using System.IO;
using System.Threading.Tasks;
using ProtoBuf.Grpc.Reflection;
using ProtoBuf.Meta;
using Shared;

namespace ProtoGenerator
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var generator = new SchemaGenerator
            {
                ProtoSyntax = ProtoSyntax.Proto3
            };
            var schema = generator.GetSchema<IGreeterService>();
            await using var writer = new StreamWriter("services.proto");
            await writer.WriteAsync(schema);
        }
    }
}