using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Conditionals.Queries.GetAllPartnerQuery;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Application.Partners.Conditionals.GetAllConditionalQuery;
public class GetAllConditionalQuery : IRequest<ConditionalList>
{
}
public class GetAllConditionalQueryHandler : IRequestHandler<GetAllConditionalQuery, ConditionalList>
{
    private IApplicationDbContext context { get; set; }
    private readonly IMapper mapper;
    public GetAllConditionalQueryHandler
        (IApplicationDbContext context
        , IMapper mapper
)
    {
        this.context = context;
        this.mapper = mapper;
    }
    public async Task<ConditionalList> Handle(GetAllConditionalQuery request, CancellationToken cancellationToken)
    {
        var partner = await context.Conditionals.ToListAsync();
        if (partner == null)
        {
            return null;
        }
        return new ConditionalList() { Conditional = partner };
    }
}