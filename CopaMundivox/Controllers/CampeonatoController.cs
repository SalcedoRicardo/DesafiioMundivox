using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CopaMundivox.Controllers
{
    public class CampeonatoController : Controller
    {
        UnitOfWork.Uow _uow;

        public CampeonatoController()
        {
            _uow = new UnitOfWork.Uow();
        }
        // GET: Campeonato
        public ActionResult Index()
        {
            var lista = _uow.DALTime.GetAll();
            return View(lista);
        }
    }
}