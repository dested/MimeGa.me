using MimeGame.Client.Scope.Controller;
using MimeGame.Client.Services;

namespace MimeGame.Client.Controllers
{

    internal class LevelSelectorController 
    {
        public const string Name = "LevelSelectorController";
        public const string View = "LevelSelector";
        private readonly LevelSelectorScope scope;
        private readonly CreateUIService createUIService;

        public LevelSelectorController(LevelSelectorScope scope, CreateUIService createUIService)
        {
            this.scope = scope;
            this.scope.Visible = true;
            this.createUIService = createUIService;
            this.scope.Model = new LevelSelectorScopeModel();
            this.scope.Callback = new LevelSelectorScopeCallback();
            scope.Model.LoadingStatus = "Level Not Loaded";

            this.scope.Callback.WindowClosed = () => {   };
            //scope.SwingAway(SwingDirection.Left, false, null);

            scope.Watch("model.selectedLevel", () =>
                                               {
                                                   if (this.scope.Model.SelectedLevel != null)
                                                       this.scope.Callback.LoadLevel(this.scope.Model.SelectedLevel);
                                               });

 

        }
 

    }
}
