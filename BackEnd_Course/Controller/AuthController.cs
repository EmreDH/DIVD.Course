using System;
using System.Security.Claims;
using BackEnd_Course;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.EntityFrameworkCore.Update.Internal;


[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly JwtService _jwtService;
    private readonly MailService _mailService;


    public AuthController(ApplicationDbContext context, JwtService jwtService, MailService mailService)
    {
        _context = context;
        _jwtService = jwtService;
        _mailService = mailService;
    }


    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDTO request)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
        if (user == null)
        {
            return Unauthorized(new { message = "Ongeldige email of wachtwoord" });
        }

        if (!PasswordHasher.VerifyPassword(request.Password, user.PasswordHash))
        {
            return Unauthorized(new { message = "Ongeldige email of wachtwoord" });
        }

        var token = _jwtService.GenerateToken(user);

        return Ok(new { Token = token });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequestDTO request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) ||
            string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new { message = "Alle velden zijn verplicht" });
        }

        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
        {
            return BadRequest(new { message = "Email bestaat al" });
        }

        var role = "Student";

        var user = new User
        {
            Name = request.Name,
            Email = request.Email,
            Role = role,
            PasswordHash = PasswordHasher.HashPassword(request.Password)
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Registratie succesvol" });
    }


    [Authorize]
    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile()
    {

        var userEmail = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;
        if (String.IsNullOrEmpty(userEmail))
        {
            return Unauthorized(new { message = "Geen geldige token gevonden" });
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userEmail);
        if (user == null)
        {
            return NotFound(new { message = "Gebruiker niet gevonden" });
        }

        var UserDTO = new UserDto
        {
            Name = user.Name,
            Email = user.Email,
            Role = user.Role
        };

        return Ok(UserDTO);

    }

    [Authorize(Roles = "Admin")]
    [HttpPost("create-admin")]
    public async Task<IActionResult> CreateAdmin([FromBody] RegisterRequestDTO request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) ||
            string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new { message = "Alle velden zijn verplicht" });
        }

        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
        {
            return BadRequest(new { message = "Email bestaat al" });
        }

        var user = new User
        {
            Name = request.Name,
            Email = request.Email,
            Role = "Admin",
            PasswordHash = PasswordHasher.HashPassword(request.Password)
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Admin succesvol aangemaakt" });
    }

    [HttpPost("request-password-reset")]
    public async Task<IActionResult> RequestPasswordReset([FromBody] PasswordResetRequestDTO request)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

        if (user == null)
        {
            return BadRequest(new { message = "E-mail niet gevonden" });
        }

        var token = GeneratePasswordResetToken(user);

        var resetLink = $"http://localhost:5206/reset-password?token={token}";


        _mailService.SendEmail(user.Email, "Wachtwoord reset aanvragen", $"Beste gebruiker, \n\n Je hebt een aanvraag gedaan om je wachtwoord te resetten.\n Klik op de onderstaande link om je wachtwoord te resetten:\n\n{resetLink}\n\n Als je dit niet hebt aangevraagd, kun je deze e-mail negeren. \n\n Met vriendelijke groet, \n Het Support Team");

        return Ok(new { message = "E-mail met reset link is verzonden" });
    }

    private string GeneratePasswordResetToken(User user)
    {
        return Guid.NewGuid().ToString();
    }

    [HttpPost("send-verification-email")]
    public async Task<IActionResult> SendVerificationEmail([FromBody] VerificationMailRequestDTO request)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

        if (user == null)
        {
            return BadRequest(new { message = "E-mail niet gevonden" });
        }

        _mailService.SendEmail(user.Email, "Wachtwoord Bevestiging", "Je wachtwoord is succesvol gewijzigd. Je kunt nu inloggen met je nieuwe wachtwoord.");

        return Ok(new { message = "Bevestigingsmail verzonden" });
    }

    [Authorize]
    [HttpPut("update-profile")]
    public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileDTO request)
    {
        var userEmail = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;

        if (string.IsNullOrEmpty(userEmail))
        {
            return Unauthorized(new { message = "Geen geldige token gevonden" });
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userEmail);
        if (user == null)
        {
            return NotFound(new { message = "Gebruiker niet gevonden" });
        }


        if (!string.IsNullOrEmpty(request.Name))
        {
            user.Name = request.Name;
        }

        if (!string.IsNullOrEmpty(request.Email))
        {
            user.Email = request.Email;
        }

        if (await _context.Users.AnyAsync(u => u.Email == request.Email && u.Email != user.Email))
        {
            return BadRequest(new { message = "Dit e-mailadres is al in gebruik" });
        }


        _context.Users.Update(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Profiel succesvol bijgewerkt" });
    }

}
