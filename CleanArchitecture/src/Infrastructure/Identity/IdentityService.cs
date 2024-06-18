
using CleanArchitecture.Application.Common.Interfaces;

using Microsoft.Extensions.Logging;


namespace CleanArchitecture.Infrastructure.Identity;

public class IdentityService : IIdentityService
{
    private readonly ILogger<IdentityService> logger;
    private readonly ICurrentUserService currentUserService;
    private readonly IApplicationDbContext context;
    public IdentityService(
        ICurrentUserService currentUserService, ILogger<IdentityService> logger, IApplicationDbContext context)
    {
        this.logger = logger;
        this.currentUserService = currentUserService;
        this.context = context;
    }

}
