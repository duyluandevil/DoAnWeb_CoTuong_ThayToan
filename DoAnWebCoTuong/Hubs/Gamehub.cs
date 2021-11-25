using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Threading.Tasks;

namespace DoAnWebCoTuong.Hubs
{
    [HubName("game")]
    public class Gamehub : Hub
    {
        public async Task joinroom(string roomName, string name)
        {
            await Groups.Add(Context.ConnectionId, roomName);
            Clients.Group(roomName).addchatmessage(Context.User.Identity.Name + " (" + name + ") joined.");
        }

        public async Task leaveroom(string roomName, string name)
        {
            await Groups.Remove(Context.ConnectionId, roomName);
            Clients.Group(roomName).addchatmessage(Context.User.Identity.Name + name + " leave.");
        }
        public void sendmove(string room, string clquanco, string xn, string yn)
        {
            Clients.OthersInGroup(room).getmove(clquanco, xn, yn);
        }
        public void sendmoveMaTran(string room, string clquanco, string yn, string xn, string y, string x, string change, string id)
        {
            Clients.OthersInGroup(room).getmoveMaTran(clquanco, yn, xn, y, x, change, id);
        }
    }
}