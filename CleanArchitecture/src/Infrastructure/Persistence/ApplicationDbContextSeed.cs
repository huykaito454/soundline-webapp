
using Microsoft.AspNetCore.Identity;

using System.Threading.Tasks;
using CleanArchitecture.Infrastructure.Identity;
using CleanArchitecture.Infrastructure.Persistence;
using CleanArchitecture.Infrastructure.Persistence.PostgreSQL;

namespace System.Infrastructure.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager, AppPostgreSQLDbContext context)
        {

        }
    }
}
