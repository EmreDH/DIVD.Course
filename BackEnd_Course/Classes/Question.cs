public class Question
{
    public int QuestionID { get; set; }
    public int TestID { get; set; }
    public string Text { get; set; }
    public string Type { get; set; }


    public Test Test { get; set; }
    public ICollection<Answer> Answers { get; set; }
}
