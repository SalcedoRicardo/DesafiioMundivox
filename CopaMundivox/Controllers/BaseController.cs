using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CopaMundivox.Controllers
{
    public enum EnumOperacao
    {
        Sucesso,
        Erro
    }

    public class BaseController : Controller
    {
        public void Retorno(EnumOperacao operacao, string mensagem)
        {
            TempData["mensagem"] = mensagem;
            TempData["retornoOperacao"] = operacao.ToString();
        }
    }
}