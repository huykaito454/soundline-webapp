﻿
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace CleanArchitecture.WebUI.Controllers;

[ApiController]
[Route("api/[controller]")]
public abstract class ApiControllerBase : ControllerBase
{
    private IMediator _mediator;

    protected IMediator Mediator
    {
        get
        {
            IMediator mediator = _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
            return mediator;
        }
    }
}
