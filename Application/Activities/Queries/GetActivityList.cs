using System;
using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.Activities.Queries;

public class GetActivityList
{
  public class Query : IRequest<List<Activity>> { }

  public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
  {
    public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
    {
      // try
      // {
      //   for (int i = 0; i < 10; i++)
      //   {
      //     cancellationToken.ThrowIfCancellationRequested();
      //     await Task.Delay(1000, cancellationToken);
      //     logger.LogInformation($"Task {i} has completed");
      //   }

      // }
      // catch (Exception e)
      // {
      //   logger.LogInformation("Task was cancelled.");
      // }
      return await context.Activities.ToListAsync(cancellationToken);
    }
  }

}
