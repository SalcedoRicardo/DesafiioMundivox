using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CopaMundivox.Models;

namespace CopaMundivox.Controllers
{
    public class TimeController : BaseController
    {
        UnitOfWork.Uow _uow;

        public TimeController()
        {
            _uow = new UnitOfWork.Uow();
        }

        // GET: Time
       
        public ActionResult Index()
        {
            var lista = _uow.DALTime.GetAll();
            return View(lista);
        }
       
       public ActionResult DeleteTime(int id)
         {
           _uow.DALTime.Delete(_uow.DALTime.Get(id));
           _uow.Commit();
           Retorno(EnumOperacao.Sucesso, "Time removido com sucesso!");
            return RedirectToAction("Index");
            }
       



        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Time time)
        {

            _uow.DALTime.Add(new Entities.tb_Time()
            {
                nmTime = time.nmTime
            });

            _uow.Commit();

            base.Retorno(EnumOperacao.Sucesso, "Time cadastrado com sucesso!");

            return RedirectToAction("Index");
        }
    }
}