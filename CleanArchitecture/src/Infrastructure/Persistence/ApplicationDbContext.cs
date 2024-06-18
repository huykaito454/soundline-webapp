using System;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using CleanArchitecture.Application.Common.Interfaces;

using CleanArchitecture.Domain.Entities;
using CleanArchitecture.Infrastructure.Identity;
using Duende.IdentityServer.EntityFramework.Options;
using MediatR;

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace CleanArchitecture.Infrastructure.Persistence;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>, IApplicationDbContext
{
    private readonly ICurrentUserService currentUserService;
    private readonly IMediator _mediator;
    private readonly IDateTime dateTime;
    private readonly ILogger<ApplicationDbContext> logger;

    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options, 
        IOptions<OperationalStoreOptions> operationalStoreOptions, ILogger<ApplicationDbContext> logger,
        IMediator mediator
        , ICurrentUserService currentUserService, IDateTime dateTime) 
        : base(options)
    {
        this.currentUserService = currentUserService;
        this.dateTime = dateTime;
        this.logger = logger;
        _mediator = mediator;
    }

    public DbSet<Conditional> Conditionals { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        base.OnModelCreating(builder);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        try
        {
            return base.SaveChangesAsync(cancellationToken);
        }
        catch (Exception ex)
        {
            logger.LogError("Exception at ApplicationDbContext. Ex: {0}", ex.Message);
            return null;
        }
    }
}
