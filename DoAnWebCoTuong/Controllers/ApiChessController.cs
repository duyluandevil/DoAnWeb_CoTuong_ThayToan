using DoAnWebCoTuong.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DoAnWebCoTuong.Controllers
{
    public class ApiChessController : ApiController
    {
        dbChessContext db = new dbChessContext();
        [HttpGet]
        [Route("api/GetAllRoom")]
        public IHttpActionResult GetAllRoom()
        {
            List<PHONG> list = db.PHONGs.ToList();
            List<PHONG> lts = new List<PHONG>();
            foreach (var item in list)
            {
                PHONG phong = new PHONG
                {
                    MAPHONG = item.MAPHONG,
                    TENPHONG = item.TENPHONG,
                    TRANGTHAI = item.TRANGTHAI,
                    SLNGUOICHOI = item.SLNGUOICHOI
                };
                lts.Add(phong);
            }
            return Json(new
            {
                roomList = lts
            });
        }
        [HttpGet]
        [Route("api/TaoPhong")]
        public IHttpActionResult Taophong()
        {
            string day = DateTime.Now.ToString("dd");
            string min = DateTime.Now.ToString("mm");
            string sec = DateTime.Now.ToString("ss");
            string MaPhong = "PH" + day + "" + min + "" + sec;
            PHONG phong = new PHONG();
            phong.MAPHONG = MaPhong;
            phong.SLNGUOICHOI = 0;
            try
            {
                db.PHONGs.Add(phong);
                db.SaveChanges();
                return Ok(MaPhong);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message.ToString());
            }
        }
        [HttpGet]
        [Route("api/NguoiChoi")]
        public IHttpActionResult Nguoichoi(string maphong, string name)
        {
            string day = DateTime.Now.ToString("dd");
            string min = DateTime.Now.ToString("mm");
            string sec = DateTime.Now.ToString("ss");
            string MaNguoiChoi = "N" + "" + min + "" + sec;
            NGUOICHOI nguoichoi = new NGUOICHOI();
            nguoichoi.MANC = MaNguoiChoi;
            nguoichoi.TENNC = name;
            nguoichoi.IDTAIKHOAN = "TK000";
            nguoichoi.MAPHONG = maphong;
            var phong = db.PHONGs.SingleOrDefault(p => p.MAPHONG == maphong);
            try
            {
                if (phong.SLNGUOICHOI < 2)
                {
                    phong.SLNGUOICHOI = phong.SLNGUOICHOI + 1;
                    db.NGUOICHOIs.Add(nguoichoi);
                    db.SaveChanges();
                }

                return Ok();


            }
            catch (Exception e)
            {
                return BadRequest("Error");
            }
        }

        [HttpGet]
        [Route("api/CheckRoom")]
        public IHttpActionResult CheckRoom(string Id)
        {
            var room = db.PHONGs.FirstOrDefault(p => p.MAPHONG.Equals(Id));
            if (room != null && room.SLNGUOICHOI < 2)
            {
                return Json(new
                {
                    RoomID = room.MAPHONG,
                    BlackId = room.SLNGUOICHOI,
                });
            }
            else
            {
                return Json(new
                {
                    RoomID = "Null"
                });
            }
        }

        [HttpGet]
        [Route("api/ThongtinP")]
        public IHttpActionResult Thongtinphong(string maphong)
        {

            List<NGUOICHOI> lay = db.NGUOICHOIs.Where(p => p.MAPHONG == maphong).Take(2).ToList();

            String NameDo = "";
            String NameDen = "";

            if (lay.Count == 1)
            {
                NameDo = lay[0].TENNC;
            }
            if (lay.Count == 2)
            {
                NameDo = lay[0].TENNC;
                NameDen = lay[1].TENNC;
            }

            return Json(new
            {
                Do = NameDo,
                Den = NameDen,
                Maphong = maphong
            });
        }

        [HttpGet]
        [Route("api/DeleteRoom")]
        public IHttpActionResult DeleteRoom(string Id)
        {
            var room = db.PHONGs.FirstOrDefault(p => p.MAPHONG.Equals(Id));
            if (room != null && db.PHONGs.Remove(room) != null)
            {
                db.SaveChanges();
                return Json(new
                {
                    check = "Ok"
                });
            }
            else
            {
                return Json(new
                {
                    check = "Null"
                });
            }
        }

    }
}


