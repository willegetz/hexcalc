using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class HomeController : Controller
    {
		public ActionResult HexagonCalculator()
		{
			return View("HexagonCalculator");
		}
    }
}
