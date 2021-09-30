using System.ServiceModel;
using System.Threading.Tasks;
using ProtoBuf.Grpc;

namespace Shared
{
    [ServiceContract]
    public interface IGreeterService
    {
        [OperationContract]
        Task<HelloReply> SayHelloAsync(HelloRequest request,
            CallContext context = default);
    }
}