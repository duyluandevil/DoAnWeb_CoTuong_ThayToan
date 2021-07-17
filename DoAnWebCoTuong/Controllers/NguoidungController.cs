using DoAnWebCoTuong.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace DoAnWebCoTuong.Controllers
{
    public class NguoidungController : Controller
    {
        // GET: Nguoidung
        dbChessContextDataContext db = new dbChessContextDataContext();
        [HttpGet]
        public ActionResult login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult login(FormCollection collection)
        {
            var tendn = collection["username"];
            var matkhau = collection["password"];
            if (String.IsNullOrEmpty(tendn))
            {
                ViewData["Loi1"] = "Phải nhập tên đăng nhập";
            }
            else if (String.IsNullOrEmpty(matkhau))
            {
                ViewData["Loi2"] = "Phải nhập mật khẩu";
            }
            else
            {
                TAIKHOAN kh = db.TAIKHOANs.SingleOrDefault(n => n.TEN == tendn && n.MATKHAU == matkhau);
                if (kh != null)
                {
                    ViewBag.Thongbao = "Chúc mừng bạn đăng nhập thành công";
                    Session["TEN"] = kh;
                    return RedirectToAction("Room", "Home");
                }
                else
                    ViewBag.Thongbao = "Tên đăng nhập hoặc mật khẩu không đúng";
            }
            return View();
        }

        //Dang ki
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(FormCollection collection, TAIKHOAN kh)
        {
            var ho = collection["Hokhach"];
            var ten = collection["Tenkhach"];
            var matkhau = collection["password"];
            var nhaplai = collection["repassword"];
            var gioitinh = collection["sex"];
            var ngaysinh = String.Format("{0:MM/dd/yyyy}", collection["birthday"]);
            var email = collection["email"];
            if (String.IsNullOrEmpty(ho))
            {
                ViewData["Loi1"] = "Họ khách hàng không được để trống";
            }
            else if (String.IsNullOrEmpty(ten))
            {
                ViewData["Loi2"] = "Tên khách hàng không được để trống";
            }
            else if (String.IsNullOrEmpty(matkhau))
            {
                ViewData["Loi3"] = "Phải nhập mật khẩu";
            }
            else if (String.IsNullOrEmpty(nhaplai))
            {
                ViewData["Loi4"] = "Phải nhập lại mật khẩu";
            }
            else if (String.IsNullOrEmpty(gioitinh))
            {
                ViewData["Loi5"] = "Giới tính không được để trống";
            }
            else if (String.IsNullOrEmpty(email))
            {
                ViewData["Loi6"] = "Phải nhập email";
            }
            else
            {
                string min = DateTime.Now.ToString("mm");
                string sec = DateTime.Now.ToString("ss");
                string MaTaiKhoan = "K" + "" + min + "" + sec;
                kh.IDTAIKHOAN = MaTaiKhoan;
                kh.HO = ho;
                kh.TEN = ten;
                kh.MATKHAU = matkhau;
                kh.GIOITINH = gioitinh;
                kh.NGAYSINH = DateTime.Parse(ngaysinh);
                kh.EMAIL = email;
                db.TAIKHOANs.InsertOnSubmit(kh);
                db.SubmitChanges();
                return RedirectToAction("login");
            }
            return this.Register();
        }
    }
}