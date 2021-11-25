using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace DoAnWebCoTuong.Models
{
    public partial class dbChessContext : DbContext
    {
        public dbChessContext()
            : base("name=dbChessContext")
        {
        }

        public virtual DbSet<NGUOICHOI> NGUOICHOIs { get; set; }
        public virtual DbSet<PHONG> PHONGs { get; set; }
        public virtual DbSet<TAIKHOAN> TAIKHOANs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NGUOICHOI>()
                .Property(e => e.MANC)
                .IsUnicode(false);

            modelBuilder.Entity<NGUOICHOI>()
                .Property(e => e.IDTAIKHOAN)
                .IsUnicode(false);

            modelBuilder.Entity<NGUOICHOI>()
                .Property(e => e.MAPHONG)
                .IsUnicode(false);

            modelBuilder.Entity<PHONG>()
                .Property(e => e.MAPHONG)
                .IsUnicode(false);

            modelBuilder.Entity<TAIKHOAN>()
                .Property(e => e.IDTAIKHOAN)
                .IsUnicode(false);

            modelBuilder.Entity<TAIKHOAN>()
                .Property(e => e.MATKHAU)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<TAIKHOAN>()
                .Property(e => e.EMAIL)
                .IsFixedLength()
                .IsUnicode(false);
        }
    }
}
