using DoAnWebCoTuong.Models;
using System.Linq;
using System.Web.Http;

namespace DoAnWebCoTuong.Controllers
{
    public class ApiChessController : ApiController
    {
        dbChessContextDataContext db = new dbChessContextDataContext();
        [HttpGet]
        [Route("api/GetAllRoom")]
        public IHttpActionResult GetAllRoom()
        {
            var list = db.PHONGs.ToList();
            return Json(new
            {
                roomList = list
            });
        }
    }
}
