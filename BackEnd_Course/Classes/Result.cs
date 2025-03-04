public class Result
{
    public int ResultID { get; set; }
    public int UserID { get; set; }
    public int TestID { get; set; }
    public decimal Score { get; set; }
    public bool Passed { get; set; }
    public DateTime DateTaken { get; set; }

    public User User { get; set; }
    public Test Test { get; set; }
    public ICollection<UserAnswer> UserAnswers { get; set; }
}
