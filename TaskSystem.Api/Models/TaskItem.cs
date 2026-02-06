namespace TaskSystem.Api.Models;

public class TaskItem
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? DueDate { get; set; }
    public string Status { get; set; } = "Open";

    // Relationships
    public int CreatedById { get; set; }
    public User? CreatedBy { get; set; }

    public int? AssignedToId { get; set; }
    public User? AssignedTo { get; set; }
}
