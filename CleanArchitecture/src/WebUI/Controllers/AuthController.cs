
using Microsoft.AspNetCore.Authorization;

using CleanArchitecture.Application.Common.Interfaces;


namespace CleanArchitecture.WebUI.Controllers;

[Authorize]
public class AuthController : ApiControllerBase
{
    private IIdentityService identityService;


    public AuthController(IIdentityService identityService, ICurrentUserService currentUser)
    {
        this.identityService = identityService;
    }

}
