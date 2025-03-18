public class User
{
    public int UserID { get; set; }
    public string Name { get; set; }
    
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string Role { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string? ResetToken { get; set; }
    public DateTime? ResetTokenExpires { get; set; }


    public ICollection<Result> Results { get; set; }
    public ICollection<UserAnswer> UserAnswers { get; set; }
}
