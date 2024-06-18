
namespace CleanArchitecture.Domain.Entities;
public class Conditional 
{
    public long id { get; set; }
    public string rules { get; set; }
    public string name { get; set; }
    public string busy_rule { get; set; }
    public int line_limit { get; set; }
    public string line_group { get; set; }
}
