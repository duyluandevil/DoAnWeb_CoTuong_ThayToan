namespace DoAnWebCoTuong.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("NGUOICHOI")]
    public partial class NGUOICHOI
    {
        [Key]
        [StringLength(5)]
        public string MANC { get; set; }

        [StringLength(20)]
        public string TENNC { get; set; }

        [Required]
        [StringLength(5)]
        public string IDTAIKHOAN { get; set; }

        [Required]
        [StringLength(8)]
        public string MAPHONG { get; set; }

        public virtual PHONG PHONG { get; set; }

        public virtual TAIKHOAN TAIKHOAN { get; set; }
    }
}
