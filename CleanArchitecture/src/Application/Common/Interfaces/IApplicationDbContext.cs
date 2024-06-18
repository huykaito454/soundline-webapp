using System.Threading;
using System.Threading.Tasks;
using CleanArchitecture.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Conditional> Conditionals { get; set; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
