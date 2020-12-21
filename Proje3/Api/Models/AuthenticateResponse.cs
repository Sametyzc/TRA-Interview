using WebApi.Entities;

namespace WebApi.Models
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string Mail { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            Mail = user.Mail;
            UserName = user.UserName;
            Token = token;
        }
    }
}