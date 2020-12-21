using Proje.Context;
using Proje.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Proje.Controllers
{
    public class HomeController : Controller
    {
        DBContext db = new DBContext();

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult createMusic(Music std)
        {
            db.Music.Add(std);
            db.SaveChanges();
            return Json(new { redirectUrl = Url.Action("Succesful", "Home", new { message = "Ekleme" }) });
        }

        public JsonResult Delete(int id)
        {
            var music = db.Music.Find(id);
            db.Music.Remove(music);
            db.SaveChanges();
            return Json(new { redirectUrl = Url.Action("Succesful", "Home", new { message = "Silme" }) });
        }

        public JsonResult getAll()
        {
            List<Music> musics = new List<Music>();
            musics = db.Music.ToList();
            return Json(musics, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Succesful(string message)
        {
            ViewBag.Message = message;
            return View();
        }

        [HttpPost]
        public ActionResult updateMusic(Music std)
        {
            var oldMucis = db.Music.Find(std.Id);
            oldMucis.MusicName = std.MusicName;
            oldMucis.AlbumName = std.AlbumName;
            oldMucis.Artist = std.Artist;
            oldMucis.Duration = std.Duration;
            oldMucis.ReleaseYear = std.ReleaseYear;

            db.SaveChanges();
            return Json(new { redirectUrl = Url.Action("Succesful", "Home", new { message = "Güncelleme" }) });
        }

        public ActionResult UpdateView(int id)
        {
            var music = db.Music.Find(id);
            return View(music);
        }
    }
}