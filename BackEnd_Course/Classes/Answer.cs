public class Answer
{
    public int AnswerID { get; set; }
    public int QuestionID { get; set; }
    public string Text { get; set; }
    public bool IsCorrect { get; set; }


    public Question Question { get; set; }
    public ICollection<UserAnswer> UserAnswers { get; set; }
}
