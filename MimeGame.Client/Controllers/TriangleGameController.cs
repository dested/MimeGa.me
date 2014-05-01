using MimeGame.Client.Scope.Controller;
using MimeGame.Client.Services;

namespace MimeGame.Client.Controllers
{
 
    internal class TriangleGameController 
    {
        public const string Name = "TriangleGameController";
        public const string View = "TriangleGame";
        private readonly TriangleGameScope scope;

        public TriangleGameController(TriangleGameScope scope)
        {
            this.scope = scope;
            this.scope.Model = new TriangleGameScopeModel();
            this.scope.Callback = new TriangleGameScopeCallback();

            new TriangleGame();
        }
 
    }
}
