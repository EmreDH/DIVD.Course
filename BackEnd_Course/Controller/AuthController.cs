using System;
using BackEnd_Course;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    private readonly JwtService _jwtService;
    

    public AuthController(ApplicationDbContext context, JwtService jwtService)
    {
        _context = context;
        _jwtService = jwtService;
        
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequestDTO request)
    {
        var user = new User
        {
            Name = "Jason",
            Email = request.Email,
            Role = "Admin",
            PasswordHash = PasswordHasher.HashPassword("test123") 
        };

        if (!PasswordHasher.VerifyPassword(request.Password, user.PasswordHash))
        {
            return Unauthorized(new { message = "Ongeldige login" });
        }

        var token = _jwtService.GenerateToken(user);
        return Ok(new { Token = token });
    }

    [HttpPost("register")]
    public async Task<IActionResult>Register([FromBody]RegisterRequestDTO request){

        if(String.IsNullOrWhiteSpace(request.Name) || String.IsNullOrWhiteSpace(request.Email) || String.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new{ message = "Alle velden zijn verplicht"});
        }

        if (await _context.Users.AnyAsync((u => u.Email == request.Email)))
        {
            return BadRequest(new { message = "Email bestaat al" });
        }

        var user = new User
        {
            Name = request.Name,
            Email = request.Email,
            Role = "Student",
            PasswordHash = PasswordHasher.HashPassword(request.Password)
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    
    return Ok(new { message = "Registratie succesvol" });

    }
}
