using Microsoft.EntityFrameworkCore;
using TaskSystem.Api.Models;

namespace TaskSystem.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<TaskItem> Tasks { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>(b =>
        {
            b.HasKey(u => u.Id);
            b.HasIndex(u => u.Username).IsUnique();
            b.Property(u => u.Role).IsRequired();
        });

        modelBuilder.Entity<TaskItem>(b =>
        {
            b.HasKey(t => t.Id);
            b.HasOne(t => t.CreatedBy).WithMany(u => u.CreatedTasks).HasForeignKey(t => t.CreatedById).OnDelete(DeleteBehavior.Restrict);
            b.HasOne(t => t.AssignedTo).WithMany(u => u.AssignedTasks).HasForeignKey(t => t.AssignedToId).OnDelete(DeleteBehavior.SetNull);
        });
    }
}
