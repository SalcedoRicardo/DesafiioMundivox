using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CopaMundivox.Models
{
    public class Time
    {
        public int idTime { get; set; }

        [DisplayName("Nome do Time")]
        [Required(ErrorMessage = "Este campo é obrigatório")]
        public string nmTime { get; set; }

        public static implicit operator int(Time v)
        {
            throw new NotImplementedException();
        }
    }
}