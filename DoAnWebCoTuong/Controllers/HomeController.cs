using System.Web.Mvc;

namespace DoAnWebCoTuong.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Introduction()
        {
            return View();
        }

        public ActionResult Chessrule()
        {
            return View();
        }

        public ActionResult Room(string id)
        {
            return View(id);
        }

        public ActionResult ChessBoard()
        {
            return View();
        }
        public ActionResult PVE()
        {
            return View();
        }
    }
}