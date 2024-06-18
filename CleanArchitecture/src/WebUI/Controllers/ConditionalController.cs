using CleanArchitecture.Application.Conditionals.Queries.GetAllPartnerQuery;
using CleanArchitecture.Application.Partners.Conditionals.GetAllConditionalQuery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;


namespace CleanArchitecture.WebUI.Controllers;

[Authorize]
public class ConditionalController : ApiControllerBase
{
    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<ConditionalList>> GetAll()
    {
        var rs = await Mediator.Send(new GetAllConditionalQuery());
        return Ok(rs);
    }

}
