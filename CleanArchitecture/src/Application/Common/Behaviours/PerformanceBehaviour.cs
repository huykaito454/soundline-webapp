using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using CleanArchitecture.Application.Common.Interfaces;
using MediatR;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace CleanArchitecture.Application.Common.Behaviours;

public class PerformanceBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : IRequest<TResponse>
{
    private readonly Stopwatch _timer;
    private readonly ILogger<TRequest> _logger;
    private readonly ICurrentUserService _currentUserService;
    private readonly IIdentityService _identityService;
    private readonly IApplicationDbContext _context;
    public PerformanceBehaviour(
        ILogger<TRequest> logger,
        ICurrentUserService currentUserService,
        IIdentityService identityService, IApplicationDbContext context)
    {
        _timer = new Stopwatch();
        _context = context;
        _logger = logger;
        _currentUserService = currentUserService;
        _identityService = identityService;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {

        try
        {
            _timer.Start();
            var response = await next();

            _timer.Stop();
            var elapsedMilliseconds = _timer.ElapsedMilliseconds;

            if (elapsedMilliseconds > 500)
            {

            }
            return response;
        }
        catch (Exception ex)
        {

            throw;
        }
    }


}
