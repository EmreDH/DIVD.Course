using Microsoft.EntityFrameworkCore;

namespace BackEnd_Course
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Result> Results { get; set; }
        public DbSet<UserAnswer> UserAnswers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserAnswer>()
            .HasOne(ua => ua.Result)
            .WithMany()
            .HasForeignKey(ua => ua.ResultID)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<UserAnswer>()
            .HasOne(ua => ua.User)
            .WithMany()
            .HasForeignKey(ua => ua.UserID)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<UserAnswer>()
            .HasOne(ua => ua.Answer)
            .WithMany()
            .HasForeignKey(ua => ua.AnswerID)
            .OnDelete(DeleteBehavior.NoAction);
    }
    }
}
