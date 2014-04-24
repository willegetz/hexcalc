using System.Linq;
using System.Web.Mvc;


namespace MvcApplication1.Filters
{
	public class LoggingFilterAttribute : ActionFilterAttribute
	{
		public override void OnActionExecuting(ActionExecutingContext actionContext)
		{
			var log = string.Format("{0}::{1}({2})", actionContext.ActionDescriptor.ControllerDescriptor.ControllerName, actionContext.ActionDescriptor.ActionName, string.Join(",", actionContext.ActionParameters.Select(aa => string.Format("{0} = {1}", aa.Key, aa.Value)).ToArray()));
		}
	}
}