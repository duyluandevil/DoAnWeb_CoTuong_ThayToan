namespace DoAnWebCoTuong.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TAIKHOAN")]
    public partial class TAIKHOAN
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TAIKHOAN()
        {
            NGUOICHOIs = new HashSet<NGUOICHOI>();
        }

        [Key]
        [StringLength(5)]
        public string IDTAIKHOAN { get; set; }

        [Required]
        [StringLength(20)]
        public string MATKHAU { get; set; }

        [StringLength(20)]
        public string HO { get; set; }

        [StringLength(10)]
        public string TEN { get; set; }

        [StringLength(3)]
        public string GIOITINH { get; set; }

        [Column(TypeName = "date")]
        public DateTime? NGAYSINH { get; set; }

        [StringLength(40)]
        public string EMAIL { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<NGUOICHOI> NGUOICHOIs { get; set; }
    }
}
