public class Course
{
    public int CourseID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; }


    public ICollection<Test> Tests { get; set; }
}
