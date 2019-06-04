using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitOfWork
{
    public class Uow : IDisposable
    {
        Entities.COPAMULDIVOXEntities _db;
        public Uow()
        {
            _db = new Entities.COPAMULDIVOXEntities();
        }

        public Dal.DALTime _dalTime;

        public Dal.DALTime DALTime
        {
            get
            {
                if (_dalTime == null)
                    _dalTime = new Dal.DALTime(_db);
                return _dalTime;
            }
        }

        public void Commit()
        {
            _db.SaveChanges();
        }

        public void Dispose()
        {
            _db.Dispose();
        }

    }
}
