using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class DALTime : Implementation.DAL<Entities.tb_Time>
    {
        public DALTime(Entities.COPAMULDIVOXEntities db) : base(db) { }
    }
}
