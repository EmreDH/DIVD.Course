public class UserAnswer
{
    public int UserAnswerID { get; set; }
    public int UserID { get; set; }
    public int ResultID { get; set; }
    public int AnswerID { get; set; }
    public bool IsCorrect { get; set; }


    public User User { get; set; }
    public Result Result { get; set; }
    public Answer Answer { get; set; }
}
