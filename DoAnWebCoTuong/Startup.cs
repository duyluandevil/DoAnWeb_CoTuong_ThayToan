using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(DoAnWebCoTuong.Startup))]

namespace DoAnWebCoTuong
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888

            //thêm dong code này nhé các bạn
            app.MapSignalR();
        }
    }
}
