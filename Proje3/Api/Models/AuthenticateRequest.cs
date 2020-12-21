using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class AuthenticateRequest
    {
        [Required]
        public string Mail { get; set; }

        [Required]
        public string Password { get; set; }
    }
}