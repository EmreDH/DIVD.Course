using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly JwtService _jwtService;

    public AuthController(JwtService jwtService)
    {
        _jwtService = jwtService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        var user = new User
        {
            Name = "Jason",
            Email = request.Email,
            Role = "Admin",
            PasswordHash = PasswordHasher.HashPassword("test123") // Gebruik PBKDF2
        };

        if (!PasswordHasher.VerifyPassword(request.Password, user.PasswordHash))
        {
            return Unauthorized(new { message = "Ongeldige login" });
        }

        var token = _jwtService.GenerateToken(user);
        return Ok(new { Token = token });
    }
}
