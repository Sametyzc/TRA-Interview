using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Proje.Models
{
    [Table("Music")]
    public class Music
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string MusicName { get; set; }

        public string AlbumName { get; set; }

        [Required]
        public string Artist { get; set; }

        public string Duration { get; set; }

        public int ReleaseYear { get; set; }
    }
}