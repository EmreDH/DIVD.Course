public class Test
{
    public int TestID { get; set; }
    public int CourseID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; }


    public Course Course { get; set; }
    public ICollection<Question> Questions { get; set; }
    public ICollection<Result> Results { get; set; }
}
