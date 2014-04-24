using System.Web.Mvc;
using MvcApplication1.Filters;

namespace MvcApplication1.App_Start
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
			filters.Add(new LoggingFilterAttribute());
		}
	}
}