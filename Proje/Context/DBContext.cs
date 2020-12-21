using Proje.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Proje.Context
{
    public class DBContext: DbContext
    {
        public DbSet<Music> Music { get; set; }
    }
}