using CleanArchitecture.Infrastructure.Identity;
using System.Threading.Tasks;
using System;
using CleanArchitecture.Infrastructure.Persistence;
using CleanArchitecture.WebUI;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Infrastructure.Persistence;
using CleanArchitecture.Infrastructure.Persistence.PostgreSQL;

namespace CleanArchitecture.WebUI;

public class Program
{
    public async static Task Main(string[] args)
    {
        var host = CreateHostBuilder(args).Build();


        await host.RunAsync();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseUrls("http://0.0.0.0:5002");
                webBuilder.UseStartup<Startup>();
            });
}
