namespace DoAnWebCoTuong.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PHONG")]
    public partial class PHONG
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PHONG()
        {
            NGUOICHOIs = new HashSet<NGUOICHOI>();
        }

        [Key]
        [StringLength(8)]
        public string MAPHONG { get; set; }

        [StringLength(25)]
        public string TENPHONG { get; set; }

        [StringLength(25)]
        public string TRANGTHAI { get; set; }

        public int? SLNGUOICHOI { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<NGUOICHOI> NGUOICHOIs { get; set; }
    }
}
