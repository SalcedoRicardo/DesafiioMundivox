using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Dal.Implementation
{
    public class DAL<TEntity> : IDAL<TEntity>
        where TEntity : class
    {

        DbContext _db;
        public DAL(Entities.COPAMULDIVOXEntities db)
        {
            _db = db;
        }

        public void Add(TEntity entity)
        {
            _db.Set<TEntity>().Add(entity);
        }

        public void Delete(TEntity entity)
        {
            _db.Set<TEntity>().Remove(entity);
        }

        public TEntity Get(int id)
        {
            return _db.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _db.Set<TEntity>().ToList();
        }

        public void Update(TEntity entity)
        {
            _db.Set<TEntity>().Attach(entity);
        }
    }
}
