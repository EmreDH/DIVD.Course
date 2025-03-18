using System.Security.Claims;
using BackEnd_Course;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/auth")]
public class ChangePasswordController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly MailService _mailService;

    public ChangePasswordController(ApplicationDbContext context, MailService mailService)
    {
        _context = context;
        _mailService = mailService;
    }

    [Authorize]
    [HttpPost("change-password")]
    public async Task<IActionResult> Changepasword([FromBody] PasswordChangeDTO request)
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

        if (!PasswordHasher.VerifyPassword(request.OldPassword, user.PasswordHash))
        {
            return Unauthorized(new { message = "Oud wachtwoord is onjuist" });
        }

        user.PasswordHash = PasswordHasher.HashPassword(request.NewPassword);
        _context.Users.Update(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Wachtwoord succesvol gewijzigd" });
    }
}